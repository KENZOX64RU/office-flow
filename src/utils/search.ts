import type { SearchResult, Shortcut, SoftwareItem, TaskGuide, Platform, AppCategory } from '../types/index.ts';
import { getPlatformKeys } from './keyFormatter.ts';

// Synonyms dictionary for Russian and English natural language intent search
const SYNONYMS_MAP: Record<string, string[]> = {
  'повтор': ['дубликат', 'дубликаты', 'повторяющиеся', 'уникальные', 'duplicate'],
  'повторы': ['дубликат', 'дубликаты', 'повторяющиеся', 'уникальные'],
  'убрать': ['удалить', 'очистить', 'избавиться', 'clear', 'delete'],
  'удалить': ['убрать', 'очистить', 'delete', 'remove'],
  'жирный': ['полужирный', 'выделить', 'шрифт', 'bold'],
  'курсив': ['наклонный', 'italic'],
  'сводная': ['сводные', 'таблицы', 'pivot', 'аналитика'],
  'диспетчер': ['процессы', 'завис', 'taskmgr', 'диспетчер задач', 'память', 'цп'],
  'завис': ['зависла', 'снять', 'закрыть', 'убить', 'процесс', 'диспетчер'],
  'печать': ['распечатать', 'принтер', 'print', 'pdf'],
  'форматирование': ['очистить формат', 'стиль', 'формат', 'шрифт'],
  'оглавление': ['содержание', 'структура', 'навигация', 'заголовки'],
  'фильтр': ['автофильтр', 'сортировка', 'отбор', 'filter'],
  'снимок': ['скриншот', 'ножницы', 'экран', 'screenshot', 'printscreen'],
  'скриншот': ['снимок', 'ножницы', 'экран', 'capture'],
  'буфер': ['буфер обмена', 'вставка', 'копирование', 'clipboard', 'история'],
  'отчет': ['осв', 'ведомость', 'продажи', 'баланс', 'сформировать'],
  'осв': ['оборотно-сальдовая', 'ведомость', 'бухгалтерия', 'сальдо'],
  'контрагент': ['инн', 'поставщик', 'покупатель', 'клиент', 'партнер'],
  'закладки': ['вкладки', 'панель', 'bookmarks', 'табы'],
  'вкладка': ['таб', 'окно', 'вкладки', 'tab'],
  'кэш': ['куки', 'очистить историю', 'перезагрузка', 'cookies', 'cache'],
  'интернет': ['сеть', 'ip', 'пинг', 'ping', 'dns', 'сетевой'],
};

export interface SearchFilterOptions {
  category?: AppCategory | 'all';
  platform?: Platform;
  type?: 'all' | 'software' | 'shortcut' | 'task';
  appId?: string;
}

function normalize(text: string): string {
  return text.toLowerCase().trim().replace(/ё/g, 'е');
}

function expandTokens(tokens: string[]): string[] {
  const expanded = new Set<string>(tokens);
  for (const token of tokens) {
    for (const [key, synonyms] of Object.entries(SYNONYMS_MAP)) {
      if (token.includes(key) || key.includes(token)) {
        synonyms.forEach(s => expanded.add(s));
      }
    }
  }
  return Array.from(expanded);
}

export function searchOfficeFlow(
  query: string,
  allSoftware: SoftwareItem[],
  allShortcuts: Shortcut[],
  allTasks: TaskGuide[],
  options: SearchFilterOptions = {}
): SearchResult[] {
  const raw = normalize(query);
  if (!raw) return [];

  const rawTokens = raw.split(/\s+/).filter(Boolean);
  const searchTokens = expandTokens(rawTokens);
  const results: SearchResult[] = [];

  const softMap = new Map<string, SoftwareItem>();
  allSoftware.forEach(s => softMap.set(s.id, s));

  // 1. Search Software
  if (!options.type || options.type === 'all' || options.type === 'software') {
    for (const app of allSoftware) {
      if (options.category && options.category !== 'all' && app.category !== options.category) {
        continue;
      }
      if (options.platform && !app.supportedPlatforms.includes(options.platform)) {
        continue;
      }

      let score = 0;
      const appNameNorm = normalize(app.name);
      const appDescNorm = normalize(app.description);
      const vendorNorm = normalize(app.vendor);

      if (appNameNorm === raw) score += 100;
      else if (appNameNorm.startsWith(raw)) score += 60;
      else if (appNameNorm.includes(raw)) score += 40;

      for (const token of rawTokens) {
        if (appNameNorm.includes(token)) score += 20;
        if (appDescNorm.includes(token)) score += 8;
        if (vendorNorm.includes(token)) score += 10;
      }

      if (score > 0) {
        results.push({
          id: `app-${app.id}`,
          type: 'software',
          appId: app.id,
          appName: app.name,
          appIcon: app.iconName,
          appColor: app.color,
          title: app.name,
          subtitle: `${app.vendor} · ${app.description}`,
          category: app.category,
          score,
          matchReason: 'Программа'
        });
      }
    }
  }

  // 2. Search Shortcuts
  if (!options.type || options.type === 'all' || options.type === 'shortcut') {
    for (const sc of allShortcuts) {
      if (options.appId && sc.appId !== options.appId) continue;
      const app = softMap.get(sc.appId);
      if (!app) continue;

      if (options.category && options.category !== 'all' && app.category !== options.category) {
        continue;
      }
      const targetPlatform = options.platform || 'windows';
      const keys = getPlatformKeys(sc.keys, targetPlatform);
      const keysStr = keys.join(' ').toLowerCase();

      let score = 0;
      const titleNorm = normalize(sc.title);
      const descNorm = normalize(sc.description);
      const catNorm = normalize(sc.category);

      // Exact title match
      if (titleNorm === raw) score += 90;
      else if (titleNorm.includes(raw)) score += 45;

      // Check keys match (e.g. user typed "ctrl c" or "f9")
      const cleanKeys = keysStr.replace(/\+/g, ' ');
      if (cleanKeys.includes(raw.replace(/\+/g, ' '))) {
        score += 70;
      }

      for (const token of rawTokens) {
        if (titleNorm.includes(token)) score += 25;
        if (descNorm.includes(token)) score += 10;
        if (cleanKeys.includes(token)) score += 30;
      }

      // Check expanded synonyms
      for (const syn of searchTokens) {
        if (titleNorm.includes(syn)) score += 12;
        if (descNorm.includes(syn)) score += 6;
      }

      if (score > 0) {
        results.push({
          id: `sc-${sc.id}`,
          type: 'shortcut',
          appId: app.id,
          appName: app.name,
          appIcon: app.iconName,
          appColor: app.color,
          title: sc.title,
          subtitle: sc.description,
          shortcutKeys: keys,
          category: sc.category,
          score,
          matchReason: `Горячая клавиша в ${app.name}`
        });
      }
    }
  }

  // 3. Search Task Guides
  if (!options.type || options.type === 'all' || options.type === 'task') {
    for (const task of allTasks) {
      if (options.appId && task.appId !== options.appId) continue;
      const app = softMap.get(task.appId);
      if (!app) continue;

      if (options.category && options.category !== 'all' && app.category !== options.category) {
        continue;
      }

      let score = 0;
      const titleNorm = normalize(task.title);
      const summaryNorm = normalize(task.summary);
      const expectedNorm = normalize(task.expectedResult);
      const tagsNorm = task.tags.map(normalize).join(' ');

      if (titleNorm.includes(raw)) score += 70;

      for (const token of rawTokens) {
        if (titleNorm.includes(token)) score += 30;
        if (tagsNorm.includes(token)) score += 25;
        if (summaryNorm.includes(token)) score += 15;
        if (expectedNorm.includes(token)) score += 10;
      }

      // Synonyms matching for human phrasing like "убрать повторы" -> "Удалить дубликаты"
      for (const syn of searchTokens) {
        if (titleNorm.includes(syn)) score += 20;
        if (tagsNorm.includes(syn)) score += 15;
        if (summaryNorm.includes(syn)) score += 10;
      }

      if (score > 0) {
        results.push({
          id: `task-${task.id}`,
          type: 'task',
          appId: app.id,
          appName: app.name,
          appIcon: app.iconName,
          appColor: app.color,
          title: task.title,
          subtitle: task.summary,
          category: task.category,
          score,
          matchReason: `Пошаговая инструкция в ${app.name}`,
          taskData: task
        });
      }
    }
  }

  // Sort descending by relevance score
  return results.sort((a, b) => b.score - a.score).slice(0, 30);
}

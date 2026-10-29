import test from 'node:test';
import assert from 'node:assert/strict';
import { searchOfficeFlow } from './search.ts';
import { getPlatformKeys, formatKeyBadge, formatShortcutString } from './keyFormatter.ts';
import type { SoftwareItem, Shortcut, TaskGuide } from '../types/index.ts';

const mockSoftware: SoftwareItem[] = [
  {
    id: 'excel',
    name: 'Microsoft Excel',
    vendor: 'Microsoft',
    category: 'office',
    description: 'Электронные таблицы и анализ данных',
    iconName: 'FileSpreadsheet',
    color: '#107c41',
    accentBg: 'rgba(16, 124, 65, 0.1)',
    supportedPlatforms: ['windows', 'macos', 'web'],
    defaultPlatform: 'windows',
    versions: ['Microsoft 365', 'Excel 2021', 'Excel 2019'],
    verifiedStatus: 'verified',
    shortcutsCount: 20,
    tasksCount: 10,
    popular: true
  },
  {
    id: '1c-buh',
    name: '1С:Бухгалтерия предприятия',
    vendor: 'Фирма 1С',
    category: 'accounting',
    description: 'Бухгалтерский и налоговый учёт',
    iconName: 'BookOpen',
    color: '#e31b23',
    accentBg: 'rgba(227, 27, 35, 0.1)',
    supportedPlatforms: ['windows', 'linux', 'web'],
    defaultPlatform: 'windows',
    versions: ['Редакция 3.0', 'КОРП'],
    verifiedStatus: 'verified',
    shortcutsCount: 15,
    tasksCount: 6,
    popular: true
  }
];

const mockShortcuts: Shortcut[] = [
  {
    id: 'excel-filter',
    appId: 'excel',
    title: 'Автофильтр данных',
    description: 'Включает или выключает стрелки фильтра в заголовках',
    keys: { windows: ['Ctrl', 'Shift', 'L'], macos: ['Cmd', 'Shift', 'F'] },
    category: 'Таблицы и данные'
  },
  {
    id: '1c-copy-row',
    appId: '1c-buh',
    title: 'Копировать строку или документ',
    description: 'Создает копию текущей строки или документа с переносом всех реквизитов',
    keys: { windows: ['F9'] },
    category: 'Основные операции'
  }
];

const mockTasks: TaskGuide[] = [
  {
    id: 'excel-remove-duplicates',
    appId: 'excel',
    title: 'Удалить дубликаты',
    summary: 'Быстрое удаление повторяющихся строк по выбранным столбцам',
    whenToUse: 'Когда в выгрузке есть повторы',
    expectedResult: 'Таблица с уникальными строками',
    category: 'Данные',
    steps: [
      { stepNumber: 1, title: 'Выделите таблицу', instruction: 'Нажмите Ctrl+A внутри данных' }
    ],
    tags: ['повторы', 'дубликаты', 'очистка']
  }
];

test('keyFormatter correctly provides platform keys and Mac symbols', () => {
  const winKeys = getPlatformKeys({ windows: ['Ctrl', 'Shift', 'L'], macos: ['Cmd', 'Shift', 'F'] }, 'windows');
  assert.deepEqual(winKeys, ['Ctrl', 'Shift', 'L']);

  const macKeys = getPlatformKeys({ windows: ['Ctrl', 'Shift', 'L'], macos: ['Cmd', 'Shift', 'F'] }, 'macos');
  assert.deepEqual(macKeys, ['Cmd', 'Shift', 'F']);

  const autoMac = getPlatformKeys({ windows: ['Ctrl', 'Alt', 'V'] }, 'macos');
  assert.deepEqual(autoMac, ['Cmd', 'Option', 'V']);

  const badge = formatKeyBadge('Cmd', 'macos');
  assert.equal(badge.label, 'Cmd');
  assert.equal(badge.symbol, '⌘');

  const formattedStr = formatShortcutString(['Ctrl', 'C'], 'windows');
  assert.equal(formattedStr, 'Ctrl + C');
});

test('searchOfficeFlow matches direct software query', () => {
  const results = searchOfficeFlow('Excel', mockSoftware, mockShortcuts, mockTasks);
  assert.ok(results.length > 0);
  assert.equal(results[0].type, 'software');
  assert.equal(results[0].appId, 'excel');
});

test('searchOfficeFlow matches human synonym intent ("убрать повторы" -> "Удалить дубликаты")', () => {
  const results = searchOfficeFlow('убрать повторы', mockSoftware, mockShortcuts, mockTasks);
  assert.ok(results.length > 0);
  const taskHit = results.find(r => r.type === 'task');
  assert.ok(taskHit, 'Expected to find the duplicate removal task via synonym');
  assert.equal(taskHit?.appId, 'excel');
});

test('searchOfficeFlow matches shortcut by key query ("f9" or "ctrl shift l")', () => {
  const results = searchOfficeFlow('F9', mockSoftware, mockShortcuts, mockTasks);
  assert.ok(results.length > 0);
  assert.equal(results[0].appId, '1c-buh');
});

test('Full Catalog Audit: exactly 66 programs, all have shortcuts and tasks, 0 discrepancies', async () => {
  const { ALL_SOFTWARE } = await import('../data/software.ts');
  const { ALL_SHORTCUTS } = await import('../data/shortcuts.ts');
  const { ALL_TASKS } = await import('../data/tasks.ts');

  assert.equal(ALL_SOFTWARE.length, 66, 'Must contain exactly 66 software items');

  const scByApp = new Map<string, number>();
  for (const s of ALL_SHORTCUTS) {
    scByApp.set(s.appId, (scByApp.get(s.appId) || 0) + 1);
  }

  const tasksByApp = new Map<string, number>();
  for (const t of ALL_TASKS) {
    tasksByApp.set(t.appId, (tasksByApp.get(t.appId) || 0) + 1);
  }

  for (const app of ALL_SOFTWARE) {
    const scCount = scByApp.get(app.id) || 0;
    const taskCount = tasksByApp.get(app.id) || 0;

    assert.ok(scCount > 0, `App "${app.name}" (${app.id}) must have shortcuts, found 0`);
    assert.ok(taskCount > 0, `App "${app.name}" (${app.id}) must have tasks, found 0`);
    assert.equal(app.shortcutsCount, scCount, `shortcutsCount for ${app.id} must match actual shortcuts`);
    assert.equal(app.tasksCount, taskCount, `tasksCount for ${app.id} must match actual tasks`);
    assert.ok(app.supportedPlatforms.length > 0, `App ${app.id} must have supported platforms`);
    assert.ok(app.versions.length > 0, `App ${app.id} must have versions`);
  }
});

test('Search intent handles user queries across full dataset', async () => {
  const { ALL_SOFTWARE } = await import('../data/software.ts');
  const { ALL_SHORTCUTS } = await import('../data/shortcuts.ts');
  const { ALL_TASKS } = await import('../data/tasks.ts');

  // Excel duplicate removal query
  const resDuplicates = searchOfficeFlow('удалить дубликаты', ALL_SOFTWARE, ALL_SHORTCUTS, ALL_TASKS);
  assert.ok(resDuplicates.length > 0);
  assert.ok(resDuplicates.some(r => r.appId === 'excel'));

  // 1C sales / report query
  const res1C = searchOfficeFlow('1С сформировать отчет', ALL_SOFTWARE, ALL_SHORTCUTS, ALL_TASKS);
  assert.ok(res1C.length > 0);
  assert.ok(res1C.some(r => r.appId.startsWith('1c-')));

  // Task manager query
  const resTaskmgr = searchOfficeFlow('диспетчер задач', ALL_SOFTWARE, ALL_SHORTCUTS, ALL_TASKS);
  assert.ok(resTaskmgr.length > 0);
  assert.ok(resTaskmgr.some(r => r.appId === 'taskmgr' || r.appId === 'win11'));
});

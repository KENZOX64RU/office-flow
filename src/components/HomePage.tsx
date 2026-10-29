import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  Sparkles,
  Zap,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  Compass,
  FileSpreadsheet,
  Layers,
  ChevronRight,
  TrendingUp,
  Bookmark
} from 'lucide-react';
import { AppIcon } from './AppIcon';
import { KeyComboBadge } from './KeyComboBadge';
import { APP_CATEGORIES } from '../data/categories';

export const HomePage: React.FC = () => {
  const {
    openSearchWithQuery,
    navigateToApp,
    navigateToCategory,
    openTaskGuide,
    allSoftware,
    allShortcuts,
    allTasks,
    currentPlatform,
    favoriteSoftwareIds,
    toggleFavoriteSoftware,
    collections,
    navigateToCollections
  } = useApp();

  const popularApps = allSoftware.filter(a => a.popular).slice(0, 8);
  const featuredTasks = allTasks.slice(0, 6);
  const topShortcuts = allShortcuts.slice(0, 6);

  // Daily productivity tip
  const tips = [
    {
      title: 'Умная история буфера обмена в Windows 11',
      desc: 'Нажмите Win + V вместо Ctrl + V, чтобы открыть панель истории последних 25 скопированных текстов и скриншотов, а также закрепить постоянные шаблоны.',
      appId: 'win11',
      keys: ['Win', 'V']
    },
    {
      title: 'Случайно закрыли вкладку в браузере?',
      desc: 'Комбинация Ctrl + Shift + T (⌘ + Shift + T на Mac) мгновенно вернёт последнюю закрытую страницу вместе с позицией прокрутки.',
      appId: 'chrome',
      keys: ['Ctrl', 'Shift', 'T']
    },
    {
      title: 'Вставка текста без ломающего оформления в Word',
      desc: 'Нажмите Ctrl + Space, чтобы мгновенно сбросить все чужие шрифты и стили скопированного из браузера абзаца к стандартному виду.',
      appId: 'word',
      keys: ['Ctrl', 'Space']
    }
  ];
  const dailyTip = tips[0];

  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 text-white p-8 sm:p-12 shadow-2xl border border-zinc-800">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold backdrop-blur-md border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Версия 2026 · Проверено по официальной документации</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] text-white">
            Работай быстрее. <br className="hidden sm:inline" />
            Меньше кликов. Больше результата.
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
            Горячие клавиши, полезные команды и пошаговые инструкции для программ, которыми ты пользуешься каждый день: от Microsoft Office и 1С до браузеров и системных утилит.
          </p>

          {/* Large Hero Search Box */}
          <div className="pt-4 max-w-2xl">
            <div
              onClick={() => openSearchWithQuery()}
              className="cursor-pointer group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/10 hover:bg-white/15
                border border-white/20 backdrop-blur-xl shadow-xl transition-all duration-200"
            >
              <div className="flex items-center gap-3 min-w-0">
                <Search className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                <span className="text-sm sm:text-base text-zinc-300 group-hover:text-white truncate">
                  Например: «убрать дубликаты», «сводная таблица», «ОСВ в 1С»...
                </span>
              </div>
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white/20 text-white border border-white/20">
                {currentPlatform === 'macos' ? '⌘K' : 'Ctrl+K'}
              </kbd>
            </div>

            {/* Quick intent chips */}
            <div className="mt-3 flex items-center gap-2 flex-wrap text-xs">
              <span className="text-zinc-400">Быстрый переход:</span>
              {[
                { label: 'Удалить дубликаты', q: 'дубликаты' },
                { label: 'ВПР / XLOOKUP', q: 'впр' },
                { label: 'ОСВ в 1С', q: 'осв' },
                { label: 'Диспетчер задач', q: 'диспетчер задач' },
                { label: 'Снимок экрана', q: 'скриншот' }
              ].map(item => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => openSearchWithQuery(item.q)}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white border border-white/10 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Daily Productivity Tip Card */}
      <section className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Лайфхак дня</span>
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              {dailyTip.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {dailyTip.desc}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <KeyComboBadge keys={dailyTip.keys} size="md" />
            <button
              type="button"
              onClick={() => navigateToApp(dailyTip.appId)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold
                bg-amber-500 hover:bg-amber-600 text-white transition-colors shadow-2xs"
            >
              <span>Подробнее</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Popular Programs Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Популярные программы
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Быстрый доступ к сочетаниям клавиш и инструкциям
            </p>
          </div>

          <button
            type="button"
            onClick={() => openSearchWithQuery()}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>Все {allSoftware.length} программ</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {popularApps.map(app => {
            const isFav = favoriteSoftwareIds.includes(app.id);
            return (
              <div
                key={app.id}
                onClick={() => navigateToApp(app.id)}
                className="group relative p-4 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800
                  hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/30
                  cursor-pointer transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: app.color }}
                    >
                      <AppIcon name={app.iconName} className="w-5 h-5 text-white" />
                    </div>

                    <button
                      type="button"
                      onClick={e => {
                        e.stopPropagation();
                        toggleFavoriteSoftware(app.id);
                      }}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isFav
                          ? 'text-amber-500'
                          : 'text-zinc-300 dark:text-zinc-600 hover:text-amber-500 opacity-0 group-hover:opacity-100'
                      }`}
                      title={isFav ? 'В избранном' : 'Добавить в избранное'}
                      aria-label="В избранное"
                    >
                      <Star className="w-4 h-4" fill={isFav ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-700/60 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="font-medium text-zinc-600 dark:text-zinc-300">
                    {app.shortcutsCount} клавиш · {app.tasksCount} задач
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Frequent Tasks (Частые задачи) Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Частые рабочие задачи
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Пошаговые проверенные сценарии решения проблем
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {featuredTasks.map(task => {
            const app = allSoftware.find(s => s.id === task.appId);
            return (
              <div
                key={task.id}
                onClick={() => openTaskGuide(task)}
                className="p-4 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800
                  hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md cursor-pointer transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    {app && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block"
                          style={{ backgroundColor: app.color }}
                        />
                        {app.name}
                      </span>
                    )}
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
                      {task.steps.length} шага
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {task.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {task.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-700/60 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    {task.estimatedTime || '1-2 мин'}
                  </span>
                  <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-1 group-hover:underline">
                    Читать инструкцию
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Top Shortcuts Quick Copy Grid */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Топ горячих клавиш
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Копируйте и запоминайте самые эффективные сочетания
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {topShortcuts.map(sc => {
            const app = allSoftware.find(s => s.id === sc.appId);
            return (
              <div
                key={sc.id}
                className="p-3.5 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800
                  flex items-center justify-between gap-3 shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    {app && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-zinc-100 dark:bg-zinc-700/60 text-zinc-600 dark:text-zinc-300">
                        {app.name}
                      </span>
                    )}
                    <span className="text-[10px] text-zinc-400 truncate">{sc.category}</span>
                  </div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
                    {sc.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                    {sc.description}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <KeyComboBadge keys={sc.keys.windows || []} size="sm" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Curated Collections Preview */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Тематические подборки
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Готовые наборы команд для специалистов разных профессий
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigateToCollections()}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>Смотреть все</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {collections.slice(0, 4).map(col => (
            <div
              key={col.id}
              onClick={() => navigateToCollections(col.id)}
              className="p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/50 border border-zinc-200/70 dark:border-zinc-800
                hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 cursor-pointer transition-all duration-150 flex flex-col justify-between group"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <AppIcon name={col.icon} className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {col.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                  {col.description}
                </p>
              </div>

              <div className="mt-4 pt-2 text-[11px] font-semibold text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 flex items-center gap-1">
                <span>{col.itemIds.length} элементов</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore All Categories Grid */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Категории приложений
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Полный справочник по всем направлениям цифровой работы
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {APP_CATEGORIES.map(cat => {
            const count = allSoftware.filter(a => a.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => navigateToCategory(cat.id)}
                className="p-3.5 text-left rounded-xl bg-white dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800
                  hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xs transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                  <AppIcon name={cat.icon} className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                  {cat.name}
                </h4>
                <p className="text-[10px] text-zinc-400 mt-0.5">
                  {count} программ
                </p>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

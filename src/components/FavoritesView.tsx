import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import {
  Star,
  Grid,
  FileText,
  Keyboard,
  ArrowRight,
  Trash2,
  ExternalLink
} from 'lucide-react';
import { AppIcon } from './AppIcon';
import { KeyComboBadge } from './KeyComboBadge';
import { getPlatformKeys } from '../utils/keyFormatter';

export const FavoritesView: React.FC = () => {
  const {
    favoriteSoftwareIds,
    favoriteShortcutIds,
    favoriteTaskIds,
    allSoftware,
    allShortcuts,
    allTasks,
    currentPlatform,
    toggleFavoriteSoftware,
    toggleFavoriteShortcut,
    toggleFavoriteTask,
    navigateToApp,
    openTaskGuide,
    totalFavoritesCount,
    favoriteSoftwareCount,
    favoriteShortcutsCount,
    favoriteTasksCount
  } = useApp();

  const [activeTab, setActiveTab] = useState<'all' | 'software' | 'shortcuts' | 'tasks'>('all');

  const favSoftware = useMemo(
    () => allSoftware.filter(s => favoriteSoftwareIds.includes(s.id)),
    [allSoftware, favoriteSoftwareIds]
  );
  const favShortcuts = useMemo(
    () => allShortcuts.filter(s => favoriteShortcutIds.includes(s.id)),
    [allShortcuts, favoriteShortcutIds]
  );
  const favTasks = useMemo(
    () => allTasks.filter(t => favoriteTaskIds.includes(t.id)),
    [allTasks, favoriteTaskIds]
  );

  const totalCount = totalFavoritesCount;

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-2xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Избранное
            </h1>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Сохраненные программы, быстрые клавиши и инструкции для вашей работы
          </p>
        </div>

        {/* Tab filters */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'all'
                ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-2xs font-bold'
                : 'text-zinc-500'
            }`}
          >
            Все ({totalFavoritesCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('software')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'software'
                ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-2xs font-bold'
                : 'text-zinc-500'
            }`}
          >
            Программы ({favoriteSoftwareCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('shortcuts')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'shortcuts'
                ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-2xs font-bold'
                : 'text-zinc-500'
            }`}
          >
            Клавиши ({favoriteShortcutsCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tasks')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'tasks'
                ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-2xs font-bold'
                : 'text-zinc-500'
            }`}
          >
            Инструкции ({favoriteTasksCount})
          </button>
        </div>
      </div>

      {totalCount === 0 ? (
        <div className="py-20 text-center space-y-3 bg-zinc-50 dark:bg-zinc-800/30 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800 p-8">
          <Star className="w-10 h-10 text-zinc-300 dark:text-zinc-600 mx-auto" />
          <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200">
            В избранном пока пусто
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
            Нажимайте значок звёздочки рядом с любой программой, горячей клавишей или задачей, чтобы они всегда были под рукой.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Section: Software */}
          {(activeTab === 'all' || activeTab === 'software') && favSoftware.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Избранные программы ({favoriteSoftwareCount})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {favSoftware.map(app => (
                  <div
                    key={app.id}
                    onClick={() => navigateToApp(app.id)}
                    className="p-4 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800
                      hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xs cursor-pointer transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                          style={{ backgroundColor: app.color }}
                        >
                          <AppIcon name={app.iconName} className="w-4 h-4 text-white" />
                        </div>
                        <button
                          type="button"
                          onClick={e => {
                            e.stopPropagation();
                            toggleFavoriteSoftware(app.id);
                          }}
                          className="p-1 text-amber-500 hover:text-amber-600"
                          title="Удалить из избранного"
                          aria-label="Удалить из избранного"
                        >
                          <Star className="w-4 h-4" fill="currentColor" />
                        </button>
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {app.name}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                        {app.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-700/60 flex items-center justify-between text-[11px] text-zinc-400">
                      <span>{app.shortcutsCount} клавиш</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Shortcuts */}
          {(activeTab === 'all' || activeTab === 'shortcuts') && favShortcuts.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Избранные горячие клавиши ({favoriteShortcutsCount})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {favShortcuts.map(sc => {
                  const app = allSoftware.find(s => s.id === sc.appId);
                  const keys = getPlatformKeys(sc.keys, currentPlatform);
                  return (
                    <div
                      key={sc.id}
                      className="p-4 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800
                        flex flex-col justify-between shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          {app && (
                            <button
                              type="button"
                              onClick={() => navigateToApp(app.id)}
                              className="text-[10px] px-2 py-0.5 rounded font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 hover:underline"
                            >
                              {app.name}
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => toggleFavoriteShortcut(sc.id)}
                            className="p-1 text-amber-500 hover:text-amber-600"
                            title="Удалить из избранного"
                            aria-label="Удалить из избранного"
                          >
                            <Star className="w-3.5 h-3.5" fill="currentColor" />
                          </button>
                        </div>
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                          {sc.title}
                        </h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                          {sc.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-700/60 flex items-center justify-between">
                        <KeyComboBadge keys={keys} size="md" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section: Tasks */}
          {(activeTab === 'all' || activeTab === 'tasks') && favTasks.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Избранные инструкции ({favoriteTasksCount})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {favTasks.map(task => {
                  const app = allSoftware.find(s => s.id === task.appId);
                  return (
                    <div
                      key={task.id}
                      onClick={() => openTaskGuide(task)}
                      className="p-4 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800
                        hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xs cursor-pointer transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          {app && (
                            <span className="text-[10px] font-bold text-zinc-500">
                              {app.name}
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={e => {
                              e.stopPropagation();
                              toggleFavoriteTask(task.id);
                            }}
                            className="p-1 text-amber-500 hover:text-amber-600"
                            title="Удалить из избранного"
                            aria-label="Удалить из избранного"
                          >
                            <Star className="w-3.5 h-3.5" fill="currentColor" />
                          </button>
                        </div>
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {task.title}
                        </h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                          {task.summary}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-700/60 flex items-center justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        <span>{task.steps.length} шага</span>
                        <span className="flex items-center gap-1 group-hover:underline">
                          Открыть <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { useApp } from '../context/AppContext';
import { Clock, Trash2, ArrowRight, FileText, Keyboard, Grid } from 'lucide-react';
import { AppIcon } from './AppIcon';
import { KeyComboBadge } from './KeyComboBadge';
import { getPlatformKeys } from '../utils/keyFormatter';

export const RecentView: React.FC = () => {
  const {
    recentItems,
    clearRecentItems,
    allSoftware,
    allShortcuts,
    allTasks,
    currentPlatform,
    navigateToApp,
    openTaskGuide
  } = useApp();

  const softMap = new Map(allSoftware.map(s => [s.id, s]));
  const scMap = new Map(allShortcuts.map(s => [s.id, s]));
  const taskMap = new Map(allTasks.map(t => [t.id, t]));

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-2xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-500" />
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Недавно просмотренные
            </h1>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            История программ, горячих клавиш и инструкций, которые вы недавно открывали
          </p>
        </div>

        {recentItems.length > 0 && (
          <button
            type="button"
            onClick={clearRecentItems}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold
              text-zinc-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Очистить историю</span>
          </button>
        )}
      </div>

      {recentItems.length === 0 ? (
        <div className="py-20 text-center space-y-3 bg-zinc-50 dark:bg-zinc-800/30 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800 p-8">
          <Clock className="w-10 h-10 text-zinc-300 dark:text-zinc-600 mx-auto" />
          <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200">
            История просмотров пуста
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
            Здесь будут появляться программы и задачи, которые вы просматриваете во время работы с Office Flow.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {recentItems.map((item, idx) => {
            if (item.type === 'software') {
              const app = softMap.get(item.id);
              if (!app) return null;
              return (
                <div
                  key={`rec-${item.id}-${idx}`}
                  onClick={() => navigateToApp(app.id)}
                  className="p-3.5 rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800
                    hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-2xs cursor-pointer transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                      style={{ backgroundColor: app.color }}
                    >
                      <AppIcon name={app.iconName} className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {app.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400">
                          Программа
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                        {app.description}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                </div>
              );
            }

            if (item.type === 'task') {
              const task = taskMap.get(item.id);
              if (!task) return null;
              const app = softMap.get(task.appId);
              return (
                <div
                  key={`rec-${item.id}-${idx}`}
                  onClick={() => openTaskGuide(task)}
                  className="p-3.5 rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800
                    hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-2xs cursor-pointer transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {task.title}
                        </span>
                        {app && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300">
                            {app.name}
                          </span>
                        )}
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
                          Инструкция
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                        {task.summary}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                </div>
              );
            }

            if (item.type === 'shortcut') {
              const sc = scMap.get(item.id);
              if (!sc) return null;
              const app = softMap.get(sc.appId);
              const keys = getPlatformKeys(sc.keys, currentPlatform);
              return (
                <div
                  key={`rec-${item.id}-${idx}`}
                  className="p-3.5 rounded-2xl bg-white dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800
                    flex items-center justify-between gap-3 shadow-2xs"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                      <Keyboard className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                          {sc.title}
                        </span>
                        {app && (
                          <button
                            type="button"
                            onClick={() => navigateToApp(app.id)}
                            className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 hover:underline"
                          >
                            {app.name}
                          </button>
                        )}
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                        {sc.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <KeyComboBadge keys={keys} size="sm" />
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      )}
    </div>
  );
};

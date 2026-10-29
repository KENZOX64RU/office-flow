import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FolderHeart,
  Plus,
  Trash2,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  Check
} from 'lucide-react';
import { AppIcon } from './AppIcon';
import { KeyComboBadge } from './KeyComboBadge';
import { getPlatformKeys } from '../utils/keyFormatter';

export const CollectionsView: React.FC = () => {
  const {
    collections,
    selectedCollectionId,
    navigateToCollections,
    createCustomCollection,
    deleteCustomCollection,
    allSoftware,
    allShortcuts,
    allTasks,
    currentPlatform,
    navigateToApp,
    openTaskGuide,
    navigateToAllApps
  } = useApp();

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const activeCol =
    collections.find(c => c.id === selectedCollectionId) || collections[0];

  const softMap = new Map(allSoftware.map(s => [s.id, s]));
  const scMap = new Map(allShortcuts.map(s => [s.id, s]));
  const taskMap = new Map(allTasks.map(t => [t.id, t]));

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    createCustomCollection(newTitle.trim(), newDesc.trim());
    setNewTitle('');
    setNewDesc('');
    setCreateModalOpen(false);
  };

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-200">
      {/* Top collections bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-2xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <FolderHeart className="w-5 h-5 text-rose-500" />
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Тематические подборки
            </h1>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Готовые и персональные наборы комбинаций и инструкций для конкретных профессий
          </p>
        </div>

        <button
          type="button"
          onClick={() => setCreateModalOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold
            bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-2xs"
        >
          <Plus className="w-4 h-4" />
          <span>Создать подборку</span>
        </button>
      </div>

      {/* Collection tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
        {collections.map(col => {
          const isActive = col.id === activeCol?.id;
          return (
            <button
              key={col.id}
              type="button"
              onClick={() => navigateToCollections(col.id)}
              className={`px-3.5 py-2 rounded-xl font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                isActive
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-sm'
                  : 'bg-white dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200/60 dark:border-zinc-700/60'
              }`}
            >
              <AppIcon name={col.icon} className="w-3.5 h-3.5" />
              <span>{col.title}</span>
              <span className="text-[10px] opacity-70">({col.itemIds.length})</span>
            </button>
          );
        })}
      </div>

      {/* Selected collection content */}
      {activeCol && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 flex items-start justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {activeCol.title}
                </h2>
                {activeCol.isPredefined ? (
                  <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300">
                    Экспертная подборка
                  </span>
                ) : (
                  <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300">
                    Моя подборка
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {activeCol.description}
              </p>
            </div>

            {!activeCol.isPredefined && (
              <button
                type="button"
                onClick={() => deleteCustomCollection(activeCol.id)}
                className="p-2 rounded-xl text-zinc-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                title="Удалить подборку"
                aria-label="Удалить подборку"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Collection Items */}
          {activeCol.itemIds.length === 0 ? (
            <div className="py-16 px-6 text-center rounded-2xl bg-white dark:bg-zinc-900 border border-dashed border-zinc-200 dark:border-zinc-800">
              <FolderHeart className="w-10 h-10 mx-auto text-zinc-300 dark:text-zinc-600 mb-3" />
              <h3 className="text-base font-bold text-zinc-700 dark:text-zinc-300 mb-1">
                В этой подборке пока нет элементов
              </h3>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 max-w-sm mx-auto mb-4">
                Добавляйте программы, клавиши или инструкции в эту подборку из любого каталога.
              </p>
              <button
                type="button"
                onClick={navigateToAllApps}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-2xs"
              >
                Перейти в каталог программ
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {activeCol.itemIds.map((item, idx) => {
              if (item.type === 'software') {
                const app = softMap.get(item.id);
                if (!app) return null;
                return (
                  <div
                    key={`col-app-${item.id}-${idx}`}
                    onClick={() => navigateToApp(app.id)}
                    className="p-4 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800
                      hover:border-zinc-300 dark:hover:border-zinc-700 cursor-pointer transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs"
                          style={{ backgroundColor: app.color }}
                        >
                          <AppIcon name={app.iconName} className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                          Рекомендуемое ПО
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {app.name}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                        {app.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-zinc-100 dark:border-zinc-700/60 flex items-center justify-between text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                      <span>{app.shortcutsCount} клавиш</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                );
              }

              if (item.type === 'task') {
                const task = taskMap.get(item.id);
                if (!task) return null;
                const app = softMap.get(task.appId);
                return (
                  <div
                    key={`col-task-${item.id}-${idx}`}
                    onClick={() => openTaskGuide(task)}
                    className="p-4 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800
                      hover:border-zinc-300 dark:hover:border-zinc-700 cursor-pointer transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        {app && (
                          <span className="text-[10px] font-bold text-zinc-500">
                            {app.name}
                          </span>
                        )}
                        <span className="text-[10px] px-2 py-0.5 rounded font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
                          Инструкция
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {task.title}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                        {task.summary}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-zinc-100 dark:border-zinc-700/60 flex items-center justify-between text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                      <span>{task.steps.length} шага</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
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
                    key={`col-sc-${item.id}-${idx}`}
                    className="p-4 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800
                      flex flex-col justify-between shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        {app && (
                          <button
                            type="button"
                            onClick={() => navigateToApp(app.id)}
                            className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 hover:underline"
                          >
                            {app.name}
                          </button>
                        )}
                        <span className="text-[10px] text-zinc-400">{sc.category}</span>
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        {sc.title}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                        {sc.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-zinc-100 dark:border-zinc-700/60 flex items-center justify-between">
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
      )}

      {/* Create Custom Collection Modal */}
      {createModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Создать подборку"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setCreateModalOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Новая персональная подборка
            </h3>
            <form onSubmit={handleCreateSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  Название подборки *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="Например: Мои горячие клавиши для 1С и Excel"
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  Краткое описание
                </label>
                <textarea
                  rows={2}
                  value={newDesc}
                  onChange={e => setNewDesc(e.target.value)}
                  placeholder="Для чего эта подборка..."
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setCreateModalOpen(false)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-400"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200"
                >
                  Создать
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

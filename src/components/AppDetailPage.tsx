import React, { useState, useMemo, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Star,
  Search,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Laptop,
  LayoutGrid,
  List,
  Copy,
  Clock,
  ArrowRight,
  Sparkles,
  Info,
  HelpCircle,
  Layers,
  Share2
} from 'lucide-react';
import { AppIcon } from './AppIcon';
import { KeyComboBadge } from './KeyComboBadge';
import { getPlatformKeys } from '../utils/keyFormatter';
import { Shortcut, TaskGuide } from '../types';

export const AppDetailPage: React.FC = () => {
  const {
    selectedApp,
    allShortcuts,
    allTasks,
    currentPlatform,
    togglePlatform,
    favoriteSoftwareIds,
    toggleFavoriteSoftware,
    isFavoriteShortcut,
    toggleFavoriteShortcut,
    openTaskGuide,
    copyText,
    setSuggestModalOpen
  } = useApp();

  const [activeTab, setActiveTab] = useState<'shortcuts' | 'tasks' | 'overview' | 'tips'>('shortcuts');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [selectedTaskSubCategory, setSelectedTaskSubCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [selectedVersion, setSelectedVersion] = useState<string>(selectedApp?.versions[0] || '');

  useEffect(() => {
    if (selectedApp) {
      setSelectedVersion(selectedApp.versions[0] || '');
      setSelectedSubCategory('all');
      setSelectedTaskSubCategory('all');
      setSearchQuery('');
    }
  }, [selectedApp?.id]);

  if (!selectedApp) {
    return (
      <div className="py-20 text-center">
        <p className="text-zinc-500">Программа не найдена</p>
      </div>
    );
  }

  const isFav = favoriteSoftwareIds.includes(selectedApp.id);

  // Filter shortcuts for this app
  const appShortcuts = useMemo(() => {
    return allShortcuts.filter(s => s.appId === selectedApp.id);
  }, [allShortcuts, selectedApp.id]);

  // Filter tasks for this app
  const appTasks = useMemo(() => {
    return allTasks.filter(t => t.appId === selectedApp.id);
  }, [allTasks, selectedApp.id]);

  // Unique categories of shortcuts in this app
  const subCategories = useMemo(() => {
    const set = new Set<string>();
    appShortcuts.forEach(s => set.add(s.category));
    return Array.from(set);
  }, [appShortcuts]);

  // Unique categories of tasks in this app
  const taskSubCategories = useMemo(() => {
    const set = new Set<string>();
    appTasks.forEach(t => set.add(t.category));
    return Array.from(set);
  }, [appTasks]);

  // Filtered list by query and category
  const filteredShortcuts = useMemo(() => {
    return appShortcuts.filter(s => {
      const matchCat = selectedSubCategory === 'all' || s.category === selectedSubCategory;
      if (!matchCat) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const keysStr = getPlatformKeys(s.keys, currentPlatform).join(' ').toLowerCase();
      return (
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        keysStr.includes(q)
      );
    });
  }, [appShortcuts, selectedSubCategory, searchQuery, currentPlatform]);

  const filteredTasks = useMemo(() => {
    return appTasks.filter(t => {
      const matchCat = selectedTaskSubCategory === 'all' || t.category === selectedTaskSubCategory;
      if (!matchCat) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        t.title.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q))
      );
    });
  }, [appTasks, selectedTaskSubCategory, searchQuery]);

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-200">
      {/* App Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm relative overflow-hidden">
        {/* Subtle background brand tint */}
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ backgroundColor: selectedApp.color }}
        />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 sm:gap-5 min-w-0">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white shadow-md flex-shrink-0"
              style={{ backgroundColor: selectedApp.color }}
            >
              <AppIcon name={selectedApp.iconName} className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>

            <div className="space-y-1.5 min-w-0">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
                  {selectedApp.name}
                </h1>

                {/* Verified badge */}
                {selectedApp.verifiedStatus === 'verified' ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Проверено</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    <Info className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Базовый справочник</span>
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
                {selectedApp.vendor} · {selectedApp.description}
              </p>

              {/* Supported OS badges and materials stats */}
              <div className="pt-1 flex items-center gap-2 flex-wrap text-xs text-zinc-400">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold text-[11px]">
                  {appShortcuts.length} клавиш · {appTasks.length} задач
                </span>
                <span className="font-medium text-zinc-600 dark:text-zinc-400">ОС:</span>
                {selectedApp.supportedPlatforms.map(p => (
                  <span
                    key={p}
                    className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px] font-medium uppercase"
                  >
                    {p}
                  </span>
                ))}

                {selectedApp.verifiedDate && (
                  <span className="text-[11px] text-zinc-400 ml-2">
                    Проверено: {selectedApp.verifiedDate}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Action buttons on the right */}
          <div className="flex items-center gap-2.5 flex-wrap flex-shrink-0 w-full md:w-auto">
            {/* Version dropdown */}
            {selectedApp.versions && selectedApp.versions.length > 0 && (
              <select
                value={selectedVersion}
                onChange={e => setSelectedVersion(e.target.value)}
                className="px-3 py-2 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800
                  text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 focus:outline-none"
              >
                {selectedApp.versions.map(v => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            )}

            {/* Platform switch button */}
            <button
              type="button"
              onClick={togglePlatform}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold
                bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
              title="Переключить между клавиатурами Windows и Mac"
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>{currentPlatform === 'macos' ? 'Клавиатура Mac (⌘)' : 'Клавиатура Win (Ctrl)'}</span>
            </button>

            {/* Favorite button */}
            <button
              type="button"
              onClick={() => toggleFavoriteSoftware(selectedApp.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors shadow-2xs ${
                isFav
                  ? 'bg-amber-500 text-white hover:bg-amber-600'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              <Star className="w-3.5 h-3.5" fill={isFav ? 'currentColor' : 'none'} />
              <span>{isFav ? 'В избранном' : 'В избранное'}</span>
            </button>
          </div>
        </div>

        {/* Notes if applicable */}
        {selectedApp.notes && (
          <div className="mt-4 p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-xs text-blue-900 dark:text-blue-200 flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <span>{selectedApp.notes}</span>
          </div>
        )}
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-px overflow-x-auto gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('shortcuts')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'shortcuts'
                ? 'border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            <span>Горячие клавиши</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
              {appShortcuts.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('tasks')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'tasks'
                ? 'border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            <span>Частые задачи</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
              {appTasks.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'overview'
                ? 'border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            <span>Обзор и версии</span>
            {selectedApp.versionDifferences && selectedApp.versionDifferences.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                {selectedApp.versionDifferences.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('tips')}
            className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'tips'
                ? 'border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            <span>Советы и лайфхаки</span>
            {selectedApp.tips && selectedApp.tips.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                {selectedApp.tips.length}
              </span>
            )}
          </button>
        </div>

        {/* Controls: Search in app & View mode */}
        {(activeTab === 'shortcuts' || activeTab === 'tasks') && (
          <div className="flex items-center gap-2">
            <div className="relative w-44 sm:w-60">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={activeTab === 'shortcuts' ? "Поиск по клавишам..." : "Поиск по задачам и тегам..."}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg text-xs bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700
                  text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {activeTab === 'shortcuts' && (
              <div className="hidden sm:flex items-center rounded-lg border border-zinc-200 dark:border-zinc-700 p-0.5 bg-zinc-100 dark:bg-zinc-800">
                <button
                  type="button"
                  onClick={() => setViewMode('cards')}
                  className={`p-1 rounded ${viewMode === 'cards' ? 'bg-white dark:bg-zinc-900 shadow-2xs' : 'text-zinc-400'}`}
                  title="Отображение карточками"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  className={`p-1 rounded ${viewMode === 'table' ? 'bg-white dark:bg-zinc-900 shadow-2xs' : 'text-zinc-400'}`}
                  title="Отображение таблицей"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ================= TAB 1: SHORTCUTS ================= */}
      {activeTab === 'shortcuts' && (
        <div className="space-y-4">
          {/* Subcategory filter pills */}
          {subCategories.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <button
                type="button"
                onClick={() => setSelectedSubCategory('all')}
                className={`px-3 py-1.5 rounded-xl font-medium transition-colors whitespace-nowrap ${
                  selectedSubCategory === 'all'
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold'
                    : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                Все категории ({appShortcuts.length})
              </button>
              {subCategories.map(cat => {
                const count = appShortcuts.filter(s => s.category === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedSubCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl font-medium transition-colors whitespace-nowrap ${
                      selectedSubCategory === cat
                        ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold'
                        : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          )}

          {/* Fallback / In-review state if catalog is light for this app */}
          {appShortcuts.length === 0 ? (
            <div className="py-16 text-center space-y-3 bg-zinc-50 dark:bg-zinc-800/30 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800 p-8">
              <div className="w-12 h-12 rounded-full bg-zinc-200/70 dark:bg-zinc-800 text-zinc-400 flex items-center justify-center mx-auto">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Справочник горячих клавиш для {selectedApp.name} дополняется
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
                Мы бережно проверяем комбинации по официальной документации производителя, чтобы гарантировать 100% достоверность.
              </p>
              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setSuggestModalOpen(true)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                >
                  Предложить проверенные клавиши
                </button>
                {selectedApp.officialDocsUrl && (
                  <a
                    href={selectedApp.officialDocsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                  >
                    <span>Официальная справка</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ) : filteredShortcuts.length === 0 ? (
            <div className="py-12 text-center text-xs text-zinc-400">
              Ничего не найдено по фильтрам. Попробуйте сбросить поиск.
            </div>
          ) : viewMode === 'cards' ? (
            /* Cards View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredShortcuts.map(sc => {
                const keys = getPlatformKeys(sc.keys, currentPlatform);
                const isItemFav = isFavoriteShortcut(sc.id);
                return (
                  <div
                    key={sc.id}
                    className="p-4 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800
                      hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xs transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                          {sc.category}
                        </span>

                        <button
                          type="button"
                          onClick={() => toggleFavoriteShortcut(sc.id)}
                          className={`p-1 rounded transition-colors ${
                            isItemFav
                              ? 'text-amber-500'
                              : 'text-zinc-300 dark:text-zinc-600 hover:text-amber-500 opacity-0 group-hover:opacity-100'
                          }`}
                          title="В избранное"
                          aria-label="В избранное"
                        >
                          <Star className="w-3.5 h-3.5" fill={isItemFav ? 'currentColor' : 'none'} />
                        </button>
                      </div>

                      <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                        {sc.title}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                        {sc.description}
                      </p>

                      {sc.notes && (
                        <p className="text-[11px] text-amber-700 dark:text-amber-400 mt-1.5 italic">
                          {sc.notes}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-750 flex items-center justify-between">
                      <KeyComboBadge keys={keys} size="md" />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Table View */
            <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-50 dark:bg-zinc-800/70 text-zinc-500 dark:text-zinc-400 font-semibold border-b border-zinc-200 dark:border-zinc-800">
                  <tr>
                    <th className="py-3 px-4">Действие</th>
                    <th className="py-3 px-4">Категория</th>
                    <th className="py-3 px-4">Описание</th>
                    <th className="py-3 px-4 text-right">Сочетание клавиш</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                  {filteredShortcuts.map(sc => {
                    const keys = getPlatformKeys(sc.keys, currentPlatform);
                    return (
                      <tr
                        key={sc.id}
                        className="hover:bg-zinc-50/70 dark:hover:bg-zinc-800/40 transition-colors"
                      >
                        <td className="py-3 px-4 font-bold text-zinc-900 dark:text-zinc-100">
                          {sc.title}
                        </td>
                        <td className="py-3 px-4 text-zinc-400 whitespace-nowrap">
                          {sc.category}
                        </td>
                        <td className="py-3 px-4 text-zinc-600 dark:text-zinc-400 max-w-md">
                          {sc.description}
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <KeyComboBadge keys={keys} size="sm" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 2: TASKS ================= */}
      {activeTab === 'tasks' && (
        <div className="space-y-4">
          {/* Subcategory filter pills for tasks */}
          {taskSubCategories.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <button
                type="button"
                onClick={() => setSelectedTaskSubCategory('all')}
                className={`px-3 py-1.5 rounded-xl font-medium transition-colors whitespace-nowrap ${
                  selectedTaskSubCategory === 'all'
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold'
                    : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                Все задачи ({appTasks.length})
              </button>
              {taskSubCategories.map(cat => {
                const count = appTasks.filter(t => t.category === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedTaskSubCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl font-medium transition-colors whitespace-nowrap ${
                      selectedTaskSubCategory === cat
                        ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold'
                        : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          )}

          {appTasks.length === 0 ? (
            <div className="py-16 text-center space-y-3 bg-zinc-50 dark:bg-zinc-800/30 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800 p-8">
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Пошаговые инструкции для этой программы сейчас готовятся
              </p>
              <button
                type="button"
                onClick={() => setSuggestModalOpen(true)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
              >
                Предложить частую задачу
              </button>
            </div>
          ) : filteredTasks.length === 0 ? (
            <div className="py-12 text-center text-xs text-zinc-400">
              По вашему запросу задачи не найдены. Попробуйте изменить поисковый запрос или категорию.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredTasks.map(task => (
                <div
                  key={task.id}
                  onClick={() => openTaskGuide(task)}
                  className="p-5 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800
                    hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md">
                        {task.category}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-medium">
                        {task.steps.length} шагов
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {task.title}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 line-clamp-3 leading-relaxed">
                      {task.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-700/60 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {task.estimatedTime || '2 мин'}
                    </span>
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1 group-hover:underline">
                      Открыть
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 3: OVERVIEW ================= */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800 space-y-4">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              О программе {selectedApp.name}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {selectedApp.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/60">
                <span className="text-[11px] text-zinc-400 font-semibold block uppercase">Разработчик</span>
                <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{selectedApp.vendor}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/60">
                <span className="text-[11px] text-zinc-400 font-semibold block uppercase">Поддерживаемые платформы</span>
                <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 capitalize">
                  {selectedApp.supportedPlatforms.join(', ')}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/60">
                <span className="text-[11px] text-zinc-400 font-semibold block uppercase">Статус достоверности</span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  {selectedApp.verifiedStatus === 'verified' ? 'Официально проверено' : 'Базовое наполнение'}
                </span>
              </div>
            </div>

            {selectedApp.officialDocsUrl && (
              <div className="pt-2">
                <a
                  href={selectedApp.officialDocsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span>Официальный портал документации {selectedApp.vendor}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Version Differences Comparison Matrix */}
          {selectedApp.versionDifferences && selectedApp.versionDifferences.length > 0 && (
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800 space-y-4">
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  Сравнение версий и функциональные различия
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Различия в поддержке формул, динамических массивов, Python и макросов между версиями Excel
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {selectedApp.versionDifferences.map((ver, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800 space-y-3.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                        {ver.version}
                      </span>
                      {ver.badge && (
                        <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-900/50">
                          {ver.badge}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
                        Поддерживаемые функции:
                      </span>
                      <ul className="space-y-1 text-xs text-zinc-700 dark:text-zinc-300">
                        {ver.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {ver.limitations && ver.limitations.length > 0 && (
                      <div className="space-y-1.5 pt-2.5 border-t border-zinc-200/60 dark:border-zinc-800/60">
                        <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
                          Ограничения версии:
                        </span>
                        <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                          {ver.limitations.map((lim, lIdx) => (
                            <li key={lIdx} className="flex items-start gap-2">
                              <AlertCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{lim}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 4: TIPS ================= */}
      {activeTab === 'tips' && (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800 space-y-4">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <Sparkles className="w-5 h-5" />
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Советы по ускорению работы в {selectedApp.name}
              </h3>
            </div>

            {selectedApp.tips && selectedApp.tips.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedApp.tips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 space-y-2.5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-2xs"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-md">
                        {tip.badge || 'Лайфхак'}
                      </span>
                      {tip.category && (
                        <span className="text-[10px] text-zinc-400 font-medium">
                          {tip.category}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      {tip.title}
                    </h4>

                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {tip.description}
                    </p>

                    {tip.shortcut && (
                      <div className="pt-2 flex items-center justify-between border-t border-zinc-200/60 dark:border-zinc-800 text-[11px]">
                        <span className="text-zinc-400 font-medium">Горячие клавиши / действие:</span>
                        <code className="px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono font-semibold text-[11px]">
                          {tip.shortcut}
                        </code>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/60 space-y-1">
                  <h4 className="font-bold text-zinc-900 dark:text-zinc-100">
                    1. Мышечная память решает всё
                  </h4>
                  <p className="leading-relaxed">
                    Не пытайтесь выучить 20 комбинаций за день. Выберите 2-3 самых частых действия (например, автофильтр Ctrl+Shift+L и спецвставку Ctrl+Alt+V) и используйте их осознанно 2 дня подряд.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/60 space-y-1">
                  <h4 className="font-bold text-zinc-900 dark:text-zinc-100">
                    2. Отказ от бесконечных кликов мышью
                  </h4>
                  <p className="leading-relaxed">
                    Вместо поиска нужной кнопки на ленте используйте поиск действий внутри программы или горячие клавиши F4 для повтора предыдущего действия.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/60 space-y-1">
                  <h4 className="font-bold text-zinc-900 dark:text-zinc-100">
                    3. Сохраняйте в избранное важные сценарии
                  </h4>
                  <p className="leading-relaxed">
                    Нажмите звездочку на любой комбинации или инструкции выше, и она будет всегда доступна во вкладке «Избранное» без повторного поиска.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

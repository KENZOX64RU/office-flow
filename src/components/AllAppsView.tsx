import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import {
  Grid,
  Search,
  Star,
  ChevronRight,
  Filter,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { AppIcon } from './AppIcon';
import { APP_CATEGORIES } from '../data/categories';
import { AppCategory, Platform } from '../types';

export const AllAppsView: React.FC = () => {
  const {
    allSoftware,
    navigateToApp,
    favoriteSoftwareIds,
    toggleFavoriteSoftware,
    setSuggestModalOpen
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<AppCategory | 'all'>('all');
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return allSoftware.filter(app => {
      if (selectedCategory !== 'all' && app.category !== selectedCategory) {
        return false;
      }
      if (selectedPlatform !== 'all' && !app.supportedPlatforms.includes(selectedPlatform)) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          app.name.toLowerCase().includes(q) ||
          app.vendor.toLowerCase().includes(q) ||
          app.description.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [allSoftware, selectedCategory, selectedPlatform, searchQuery]);

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-200">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-2xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Grid className="w-5 h-5 text-blue-500" />
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Каталог программ ({allSoftware.length})
            </h1>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Офисные среды, бухгалтерский учёт, браузеры, PDF, аналитика и администрирование
          </p>
        </div>

        {/* Search input in catalog */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Фильтр программ..."
            aria-label="Фильтр программ по названию"
            className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700
              text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Category and platform filter chips */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl font-medium transition-colors whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold'
                : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
            }`}
          >
            Все категории ({allSoftware.length})
          </button>
          {APP_CATEGORIES.map(cat => {
            const count = allSoftware.filter(a => a.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold'
                    : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                <AppIcon name={cat.icon} className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
                <span className="opacity-60 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Platform sub-filter */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 pt-1">
          <span className="text-zinc-400 text-[11px] font-semibold">Платформа:</span>
          {(['all', 'windows', 'macos', 'linux', 'web'] as const).map(p => (
            <button
              key={p}
              type="button"
              onClick={() => setSelectedPlatform(p)}
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-medium uppercase transition-colors ${
                selectedPlatform === p
                  ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold'
                  : 'hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              {p === 'all' ? 'Все' : p}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of software */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center space-y-3 bg-zinc-50 dark:bg-zinc-800/30 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800 p-8">
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            Программы не найдены по заданным фильтрам
          </p>
          <button
            type="button"
            onClick={() => setSuggestModalOpen(true)}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
          >
            Предложить добавить программу
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {filtered.map(app => {
            const isFav = favoriteSoftwareIds.includes(app.id);
            return (
              <div
                key={app.id}
                onClick={() => navigateToApp(app.id)}
                className="group relative p-4 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800
                  hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md cursor-pointer transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-2xs group-hover:scale-105 transition-transform"
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
                  <span className="text-[10px] text-zinc-400 block -mt-0.5 mb-1 font-medium">
                    {app.vendor}
                  </span>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-700/60 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="font-semibold text-zinc-600 dark:text-zinc-300">
                    {app.shortcutsCount} клавиш · {app.tasksCount} задач
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

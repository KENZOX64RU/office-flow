import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Home,
  Grid,
  Star,
  Clock,
  FolderHeart,
  ChevronDown,
  ChevronRight,
  Search,
  X,
  Plus,
  Layers,
  FileSpreadsheet,
  Calculator,
  Globe,
  Monitor,
  FileText,
  PieChart
} from 'lucide-react';
import { AppIcon } from './AppIcon';
import { APP_CATEGORIES } from '../data/categories';
import { AppCategory } from '../types';

export const Sidebar: React.FC = () => {
  const {
    sidebarOpen,
    setSidebarOpen,
    toggleSidebar,
    activeView,
    selectedAppId,
    selectedCategoryId,
    navigateToHome,
    navigateToAllApps,
    navigateToFavorites,
    navigateToRecent,
    navigateToCollections,
    navigateToCategory,
    navigateToApp,
    openSearchWithQuery,
    allSoftware,
    favoriteSoftwareIds,
    toggleFavoriteSoftware,
    setSuggestModalOpen,
    totalFavoritesCount
  } = useApp();

  const [filterQuery, setFilterQuery] = useState('');
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>({
    office: true,
    accounting: true,
    browsers: true,
    windows: true,
    pdf: true,
    analytics: true
  });

  // Animation state synchronized with sidebarOpen via requestAnimationFrame,
  // matching TaskGuideDrawer's exact transition lifecycle
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      const frame = requestAnimationFrame(() => {
        setIsOpen(true);
      });
      return () => cancelAnimationFrame(frame);
    } else {
      setIsOpen(false);
    }
  }, [sidebarOpen]);

  // Handle keyboard shortcuts (Escape to close, Ctrl+B / Cmd+B to toggle)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && (sidebarOpen || isOpen)) {
        setSidebarOpen(false);
      } else if ((e.ctrlKey || e.metaKey) && (e.key === 'b' || e.key === 'B')) {
        e.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen, isOpen, setSidebarOpen, toggleSidebar]);

  const toggleCategoryExpand = (catId: string) => {
    setExpandedCats(prev => ({ ...prev, [catId]: !prev[catId] }));
  };

  const filteredSoftware = allSoftware.filter(app => {
    if (!filterQuery.trim()) return true;
    const q = filterQuery.toLowerCase();
    return (
      app.name.toLowerCase().includes(q) ||
      app.vendor.toLowerCase().includes(q) ||
      app.description.toLowerCase().includes(q)
    );
  });

  const getCategoryIcon = (catId: AppCategory) => {
    switch (catId) {
      case 'office':
        return <FileSpreadsheet className="w-4 h-4" />;
      case 'accounting':
        return <Calculator className="w-4 h-4" />;
      case 'browsers':
        return <Globe className="w-4 h-4" />;
      case 'windows':
        return <Monitor className="w-4 h-4" />;
      case 'pdf':
        return <FileText className="w-4 h-4" />;
      case 'analytics':
        return <PieChart className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* =========================================================================
          1. COLLAPSED VERTICAL RAIL (Desktop / Tablet: md+)
          Narrow 56px (w-14) strip with icons only, tooltips on hover, starts below header
         ========================================================================= */}
      <aside
        aria-label="Быстрая панель навигации"
        className="hidden md:flex fixed top-14 bottom-0 left-0 z-20 w-14 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md
          border-r border-zinc-200/80 dark:border-zinc-800/80 flex-col items-center pt-3 pb-2.5 select-none"
      >
        {/* Primary Navigation Icons */}
        <div className="flex flex-col items-center gap-1.5">
          {/* Home */}
          <div className="relative group">
            <button
              type="button"
              onClick={navigateToHome}
              aria-label="Главная"
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                activeView === 'home'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              <Home className="w-4 h-4" />
            </button>
            <div className="absolute left-full ml-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
              Главная
            </div>
          </div>

          {/* All Apps */}
          <div className="relative group">
            <button
              type="button"
              onClick={navigateToAllApps}
              aria-label={`Все программы (${allSoftware.length})`}
              className={`w-10 h-10 rounded-xl relative flex items-center justify-center transition-all ${
                activeView === 'all-apps'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center">
                {allSoftware.length}
              </span>
            </button>
            <div className="absolute left-full ml-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
              Все программы ({allSoftware.length})
            </div>
          </div>

          {/* Favorites */}
          <div className="relative group">
            <button
              type="button"
              onClick={navigateToFavorites}
              aria-label="Избранное"
              className={`w-10 h-10 rounded-xl relative flex items-center justify-center transition-all ${
                activeView === 'favorites'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              <Star className="w-4 h-4 text-amber-500" />
              {totalFavoritesCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-amber-500 text-white text-[9px] font-bold flex items-center justify-center">
                  {totalFavoritesCount}
                </span>
              )}
            </button>
            <div className="absolute left-full ml-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
              Избранное {totalFavoritesCount > 0 ? `(${totalFavoritesCount})` : ''}
            </div>
          </div>

          {/* Recent */}
          <div className="relative group">
            <button
              type="button"
              onClick={navigateToRecent}
              aria-label="Недавние"
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                activeView === 'recent'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              <Clock className="w-4 h-4" />
            </button>
            <div className="absolute left-full ml-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
              История просмотров
            </div>
          </div>

          {/* Collections */}
          <div className="relative group">
            <button
              type="button"
              onClick={() => navigateToCollections()}
              aria-label="Мои подборки"
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                activeView === 'collections'
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              <FolderHeart className="w-4 h-4 text-rose-500" />
            </button>
            <div className="absolute left-full ml-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
              Мои подборки
            </div>
          </div>
        </div>

        <div className="w-8 h-px bg-zinc-200/80 dark:bg-zinc-800/80 my-2" />

        {/* Quick Category Jump Icons */}
        <div className="flex flex-col items-center gap-1">
          {APP_CATEGORIES.map(category => {
            const isCatActive = activeView === 'category' && selectedCategoryId === category.id;
            return (
              <div key={category.id} className="relative group">
                <button
                  type="button"
                  onClick={() => navigateToCategory(category.id)}
                  aria-label={category.name}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                    isCatActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {getCategoryIcon(category.id)}
                </button>
                <div className="absolute left-full ml-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
                  {category.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <div className="mt-auto flex flex-col items-center gap-1.5 pt-2 border-t border-zinc-200/80 dark:border-zinc-800/80 w-full px-2">
          {/* Quick Search */}
          <div className="relative group">
            <button
              type="button"
              onClick={() => openSearchWithQuery()}
              aria-label="Глобальный поиск"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <div className="absolute left-full ml-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
              Поиск (Ctrl+K)
            </div>
          </div>

          {/* Suggest App */}
          <div className="relative group">
            <button
              type="button"
              onClick={() => setSuggestModalOpen(true)}
              aria-label="Предложить программу"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
            <div className="absolute left-full ml-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-medium rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
              Предложить программу
            </div>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          2. EXPANDED FULL SIDEBAR OVERLAY
          Slides in OVER the workspace without altering main content width or positioning.
          Backdrop with gentle blur. Closes on backdrop click or Escape.
         ========================================================================= */}
      {/* Backdrop with smooth synchronized opacity and blur fade-in / fade-out */}
      <div
        className={`fixed inset-x-0 top-14 bottom-0 z-30 bg-black/40 dark:bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 ease-out touch-none overscroll-none ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
        onWheel={e => e.stopPropagation()}
        aria-hidden="true"
      />

      {/* Expanded Sidebar Drawer matching TaskGuideDrawer transition-transform duration-300 ease-out */}
      <aside
        aria-label="Полный каталог программ"
        aria-hidden={!isOpen}
        onWheel={e => e.stopPropagation()}
        className={`fixed top-14 bottom-0 left-0 z-40 w-72 sm:w-80 bg-white/98 dark:bg-zinc-900/98 backdrop-blur-2xl border-r
          border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col transition-transform duration-300 ease-out overscroll-contain ${
            isOpen
              ? 'translate-x-0'
              : '-translate-x-full pointer-events-none'
          }`}
      >
        {/* Header inside drawer */}
        <div className="h-14 px-4 border-b border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              navigateToHome();
              setSidebarOpen(false);
            }}
            className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xs">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                Office Flow
              </span>
              <span className="text-[10px] block text-zinc-400 dark:text-zinc-500 font-medium -mt-0.5">
                База знаний • 66 программ
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Свернуть меню"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter input */}
        <div className="p-3 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={filterQuery}
              onChange={e => setFilterQuery(e.target.value)}
              placeholder="Фильтр программ и вендоров..."
              aria-label="Фильтр программ в боковом меню"
              className="w-full pl-8 pr-7 py-1.5 rounded-lg text-xs bg-zinc-100/80 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80
                text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            {filterQuery && (
              <button
                type="button"
                onClick={() => setFilterQuery('')}
                className="absolute right-2 top-2 p-0.5 text-zinc-400 hover:text-zinc-600"
                aria-label="Очистить фильтр"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Scrollable navigation */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-2 py-3 space-y-4 text-xs font-medium">
          {/* Main sections */}
          <div className="space-y-0.5">
            <button
              type="button"
              onClick={() => {
                navigateToHome();
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-colors ${
                activeView === 'home'
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold shadow-xs'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Главная страница</span>
            </button>

            <button
              type="button"
              onClick={() => {
                navigateToAllApps();
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors ${
                activeView === 'all-apps'
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold shadow-xs'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Grid className="w-4 h-4" />
                <span>Все программы</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold">
                {allSoftware.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                navigateToFavorites();
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors ${
                activeView === 'favorites'
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold shadow-xs'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Star className="w-4 h-4 text-amber-500" />
                <span>Избранное</span>
              </div>
              {totalFavoritesCount > 0 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-bold">
                  {totalFavoritesCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                navigateToRecent();
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-colors ${
                activeView === 'recent'
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold shadow-xs'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Недавно просмотренные</span>
            </button>

            <button
              type="button"
              onClick={() => {
                navigateToCollections();
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-colors ${
                activeView === 'collections'
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold shadow-xs'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
              }`}
            >
              <FolderHeart className="w-4 h-4 text-rose-500" />
              <span>Мои подборки</span>
            </button>
          </div>

          <div className="h-px bg-zinc-200/80 dark:bg-zinc-800/80 my-2" />

          {/* Categories & Software Tree */}
          <div className="space-y-2">
            <div className="px-3 text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center justify-between">
              <span>Категории каталога</span>
              <span className="text-[10px] font-normal lowercase">{filteredSoftware.length} прогр.</span>
            </div>

            {APP_CATEGORIES.map(category => {
              const catApps = filteredSoftware.filter(a => a.category === category.id);
              if (filterQuery && catApps.length === 0) return null;

              const isExpanded = !!expandedCats[category.id] || !!filterQuery;
              const isCatActive = activeView === 'category' && selectedCategoryId === category.id;

              return (
                <div key={category.id} className="space-y-0.5">
                  <div
                    className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer group ${
                      isCatActive
                        ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                    }`}
                    onClick={() => toggleCategoryExpand(category.id)}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <button
                        type="button"
                        aria-label={`Раскрыть категорию ${category.name}`}
                        className="p-0.5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200"
                        onClick={e => {
                          e.stopPropagation();
                          toggleCategoryExpand(category.id);
                        }}
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={e => {
                          e.stopPropagation();
                          navigateToCategory(category.id);
                          setSidebarOpen(false);
                        }}
                        className="truncate text-left hover:underline"
                      >
                        {category.name}
                      </button>
                    </div>

                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-normal">
                      {catApps.length}
                    </span>
                  </div>

                  {/* Nested software items */}
                  {isExpanded && (
                    <div className="pl-4 pr-1 space-y-0.5">
                      {catApps.map(app => {
                        const isAppActive =
                          activeView === 'app-detail' && selectedAppId === app.id;
                        const isFav = favoriteSoftwareIds.includes(app.id);

                        return (
                          <div
                            key={app.id}
                            onClick={() => {
                              navigateToApp(app.id);
                              setSidebarOpen(false);
                            }}
                            className={`group flex items-center justify-between px-2 py-1.5 rounded-lg cursor-pointer transition-colors ${
                              isAppActive
                                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold shadow-xs'
                                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <div
                                className="w-3.5 h-3.5 rounded-xs flex items-center justify-center text-white flex-shrink-0"
                                style={{ backgroundColor: app.color }}
                              >
                                <AppIcon name={app.iconName} className="w-2.5 h-2.5 text-white" />
                              </div>
                              <span className="truncate">{app.name}</span>
                            </div>

                            <div className="flex items-center gap-1">
                              <span className="text-[9px] text-zinc-400 font-mono">
                                {app.shortcutsCount}
                              </span>
                              <button
                                type="button"
                                onClick={e => {
                                  e.stopPropagation();
                                  toggleFavoriteSoftware(app.id);
                                }}
                                className={`p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                                  isFav ? 'opacity-100 text-amber-500' : 'text-zinc-400 hover:text-amber-500'
                                }`}
                                title={isFav ? 'Убрать из избранного' : 'В избранное'}
                                aria-label={isFav ? 'Убрать из избранного' : 'В избранное'}
                              >
                                <Star className="w-3 h-3" fill={isFav ? 'currentColor' : 'none'} />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA for missing software */}
        <div className="p-3 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900">
          <button
            type="button"
            onClick={() => {
              setSuggestModalOpen(true);
              setSidebarOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium
              bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700
              hover:bg-zinc-50 dark:hover:bg-zinc-700/60 transition-colors shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5 text-blue-500" />
            <span>Предложить программу</span>
          </button>
        </div>
      </aside>
    </>
  );
};

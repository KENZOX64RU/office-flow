import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  Menu,
  Sun,
  Moon,
  Laptop,
  Star,
  PlusCircle,
  Command,
  Layers
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    openSearchWithQuery,
    toggleSidebar,
    sidebarOpen,
    currentPlatform,
    togglePlatform,
    settings,
    updateSettings,
    totalFavoritesCount,
    navigateToFavorites,
    setSuggestModalOpen,
    navigateToHome
  } = useApp();

  const totalFavs = totalFavoritesCount;

  const cycleTheme = () => {
    updateSettings({ theme: settings.theme === 'dark' ? 'light' : 'dark' });
  };

  return (
    <header className="sticky top-0 z-30 w-full h-14 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
      <div className="h-full px-3 sm:px-4 flex items-center justify-between gap-3 w-full">
        {/* Left: Unified Menu Toggle (Three horizontal lines) & Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleSidebar}
            aria-label={sidebarOpen ? "Свернуть боковое меню" : "Открыть боковое меню"}
            aria-expanded={sidebarOpen}
            title={sidebarOpen ? "Свернуть меню" : "Открыть меню каталога (66 программ)"}
            className={`p-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/40 cursor-pointer ${
              sidebarOpen
                ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={navigateToHome}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Layers className="w-4 h-4" />
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Office Flow
              </span>
              <span className="text-[10px] block text-zinc-400 dark:text-zinc-500 font-medium -mt-0.5">
                Единый помощник
              </span>
            </div>
          </button>
        </div>

        {/* Center: Search trigger */}
        <div className="flex-1 max-w-md mx-2">
          <button
            type="button"
            onClick={() => openSearchWithQuery()}
            aria-label="Открыть глобальный поиск"
            className="w-full h-9 px-3 rounded-xl bg-zinc-100/90 dark:bg-zinc-800/90 hover:bg-zinc-200/70 dark:hover:bg-zinc-700/70
              border border-zinc-200/60 dark:border-zinc-700/60 transition-all flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500 shadow-2xs group"
          >
            <div className="flex items-center gap-2 truncate">
              <Search className="w-4 h-4 text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors flex-shrink-0" />
              <span className="truncate text-zinc-500 dark:text-zinc-400">
                Быстрый поиск команд и программ...
              </span>
            </div>
            <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded font-mono text-[10px] text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700">
              {currentPlatform === 'macos' ? '⌘K' : 'Ctrl+K'}
            </kbd>
          </button>
        </div>

        {/* Right actions: Platform switch, Favorites, Theme, Suggest */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Platform toggle (Windows / macOS) */}
          <button
            type="button"
            onClick={togglePlatform}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold
              bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
            title={`Текущая раскладка: ${currentPlatform === 'macos' ? 'macOS (⌘/⌥)' : 'Windows (Ctrl/Alt)'}. Нажмите для смены.`}
            aria-label="Сменить платформу"
          >
            <Laptop className="w-3.5 h-3.5 text-zinc-500" />
            <span className="font-mono text-xs">{currentPlatform === 'macos' ? 'Mac (⌘)' : 'Win (Ctrl)'}</span>
          </button>

          {/* Favorites */}
          <button
            type="button"
            onClick={navigateToFavorites}
            className="relative p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="Избранные программы, клавиши и инструкции"
            aria-label="Избранное"
          >
            <Star className="w-4 h-4" />
            {totalFavs > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-amber-500 text-white text-[9px] font-bold flex items-center justify-center leading-none">
                {totalFavs}
              </span>
            )}
          </button>

          {/* Theme switcher */}
          <button
            type="button"
            onClick={cycleTheme}
            className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title={`Тема: ${settings.theme}`}
            aria-label="Переключить тему оформления"
          >
            {settings.theme === 'light' ? (
              <Sun className="w-4 h-4 text-amber-500" />
            ) : settings.theme === 'dark' ? (
              <Moon className="w-4 h-4 text-indigo-400" />
            ) : (
              <Laptop className="w-4 h-4" />
            )}
          </button>

          {/* Suggest modal CTA */}
          <button
            type="button"
            onClick={() => setSuggestModalOpen(true)}
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium
              bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-2xs"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Предложить</span>
          </button>
        </div>
      </div>
    </header>
  );
};

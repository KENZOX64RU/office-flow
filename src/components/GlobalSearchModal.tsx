import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { searchOfficeFlow } from '../utils/search';
import {
  Search,
  X,
  Command,
  FileText,
  Keyboard,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  Check
} from 'lucide-react';
import { AppIcon } from './AppIcon';
import { KeyComboBadge } from './KeyComboBadge';
import { APP_CATEGORIES } from '../data/categories';
import { AppCategory, SearchResult } from '../types';

export const GlobalSearchModal: React.FC = () => {
  const {
    searchOpen,
    setSearchOpen,
    searchInitialQuery,
    allSoftware,
    allShortcuts,
    allTasks,
    currentPlatform,
    navigateToApp,
    openTaskGuide
  } = useApp();

  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'software' | 'shortcut' | 'task'>('all');
  const [selectedCategory, setSelectedCategory] = useState<AppCategory | 'all'>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchOpen) {
      setQuery(searchInitialQuery || '');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [searchOpen, searchInitialQuery]);

  const results: SearchResult[] = searchOfficeFlow(
    query,
    allSoftware,
    allShortcuts,
    allTasks,
    {
      type: filterType,
      category: selectedCategory,
      platform: currentPlatform
    }
  );

  // Suggested quick prompts if query is empty
  const quickPrompts = [
    { label: 'Убрать повторы', query: 'убрать повторы' },
    { label: 'Сводная таблица', query: 'сводная таблица' },
    { label: 'Снять зависший процесс', query: 'диспетчер задач' },
    { label: 'ОСВ в 1С', query: 'осв' },
    { label: 'Сделать текст жирным', query: 'жирный' },
    { label: 'Вставить без формата', query: 'форматирование' },
    { label: 'Скриншот экрана', query: 'скриншот' },
    { label: 'Сетевой пинг', query: 'ping' }
  ];

  const handleSelectResult = (item: SearchResult) => {
    setSearchOpen(false);
    if (item.type === 'software') {
      navigateToApp(item.appId);
    } else if (item.type === 'task' && item.taskData) {
      openTaskGuide(item.taskData);
    } else if (item.type === 'shortcut') {
      navigateToApp(item.appId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
      scrollIntoView(selectedIndex + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
      scrollIntoView(selectedIndex - 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelectResult(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setSearchOpen(false);
    }
  };

  const scrollIntoView = (index: number) => {
    const list = listRef.current;
    if (!list) return;
    const items = list.querySelectorAll('[data-result-item]');
    const target = items[index] as HTMLElement;
    if (target) {
      target.scrollIntoView({ block: 'nearest' });
    }
  };

  if (!searchOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Глобальный поиск по программам и командам"
      className="fixed inset-0 z-50 flex items-start justify-center pt-14 md:pt-20 p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm animate-in fade-in duration-150 touch-none overscroll-none"
      onClick={() => setSearchOpen(false)}
      onWheel={e => e.stopPropagation()}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200/80 dark:border-zinc-800
          overflow-hidden flex flex-col max-h-[82vh] animate-in zoom-in-95 duration-150 overscroll-contain"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input bar */}
        <div className="p-4 border-b border-zinc-200/80 dark:border-zinc-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-zinc-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Спросите что угодно: «убрать повторы», «сводная таблица», «Ctrl+Shift+L»..."
            aria-label="Поисковый запрос"
            className="flex-1 bg-transparent text-zinc-900 dark:text-zinc-100 text-base placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="p-1 rounded text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              aria-label="Очистить поиск"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">
            ESC
          </kbd>
        </div>

        {/* Filters bar */}
        <div className="px-4 py-2 border-b border-zinc-100 dark:border-zinc-800/60 bg-zinc-50/70 dark:bg-zinc-900/50 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-zinc-400 dark:text-zinc-500 font-medium whitespace-nowrap flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3" /> Тип:
          </span>

          <button
            type="button"
            onClick={() => setFilterType('all')}
            className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
              filterType === 'all'
                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800'
            }`}
          >
            Все
          </button>

          <button
            type="button"
            onClick={() => setFilterType('shortcut')}
            className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
              filterType === 'shortcut'
                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800'
            }`}
          >
            Горячие клавиши
          </button>

          <button
            type="button"
            onClick={() => setFilterType('task')}
            className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
              filterType === 'task'
                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800'
            }`}
          >
            Инструкции
          </button>

          <button
            type="button"
            onClick={() => setFilterType('software')}
            className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
              filterType === 'software'
                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800'
            }`}
          >
            Программы
          </button>

          <div className="h-3 w-px bg-zinc-300 dark:bg-zinc-700 mx-1 flex-shrink-0" />

          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value as AppCategory | 'all')}
            className="bg-transparent text-zinc-600 dark:text-zinc-400 font-medium py-1 px-1 rounded hover:bg-zinc-200/60 dark:hover:bg-zinc-800 focus:outline-none"
          >
            <option value="all">Все категории</option>
            {APP_CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Results / Empty / Quick Suggestions List */}
        <div ref={listRef} className="flex-1 overflow-y-auto overscroll-contain p-2 divide-y divide-zinc-100 dark:divide-zinc-800/50">
          {!query.trim() ? (
            <div className="p-4 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Популярные запросы пользователей</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {quickPrompts.map(p => (
                  <button
                    key={p.query}
                    type="button"
                    onClick={() => {
                      setQuery(p.query);
                      inputRef.current?.focus();
                    }}
                    className="p-2.5 text-left rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800
                      border border-zinc-200/60 dark:border-zinc-800 transition-colors group"
                  >
                    <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 block truncate">
                      {p.label}
                    </span>
                    <span className="text-[10px] text-zinc-400 block truncate mt-0.5">
                      {p.query}
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-2 text-xs text-zinc-400 dark:text-zinc-500 text-center">
                Поиск работает по смыслу запроса, названиям клавиш и официальным командам.
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Ничего не найдено по запросу «{query}»
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
                Попробуйте изменить формулировку, использовать синонимы или выбрать «Все категории».
              </p>
            </div>
          ) : (
            results.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  data-result-item
                  onClick={() => handleSelectResult(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl cursor-pointer transition-colors flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100'
                      : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                      style={{ backgroundColor: item.appColor }}
                    >
                      <AppIcon name={item.appIcon} className="w-4 h-4 text-white" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded-sm font-medium bg-zinc-200/70 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300">
                          {item.appName}
                        </span>
                        {item.type === 'task' && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-sm font-medium bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                            Инструкция
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {item.shortcutKeys && item.shortcutKeys.length > 0 && (
                      <KeyComboBadge keys={item.shortcutKeys} size="sm" showCopyButton={false} />
                    )}
                    <ArrowRight className="w-4 h-4 text-zinc-400 opacity-60" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-900/90 text-[11px] text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 font-mono text-[9px]">↑↓</kbd>
              Навигация
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 font-mono text-[9px]">↵</kbd>
              Выбрать
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 font-mono text-[9px]">ESC</kbd>
              Закрыть
            </span>
          </div>

          <div className="hidden sm:block">
            Платформа: <span className="font-medium capitalize">{currentPlatform}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

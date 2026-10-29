import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  Platform,
  AppCategory,
  SoftwareItem,
  Shortcut,
  TaskGuide,
  UserCollection,
  UserSettings
} from '../types';
import { ALL_SOFTWARE } from '../data/software';
import { ALL_SHORTCUTS } from '../data/shortcuts';
import { ALL_TASKS } from '../data/tasks';
import { PREDEFINED_COLLECTIONS } from '../data/collections';
import { scrollLockManager } from '../utils/scrollLock';

export type MainView =
  | 'home'
  | 'app-detail'
  | 'favorites'
  | 'recent'
  | 'collections'
  | 'all-apps'
  | 'category';

interface RecentItemRecord {
  type: 'software' | 'shortcut' | 'task';
  id: string;
  appId?: string;
  timestamp: number;
}

interface AppContextType {
  // Navigation & View
  activeView: MainView;
  selectedAppId: string | null;
  selectedCategoryId: AppCategory | null;
  selectedCollectionId: string | null;
  selectedApp: SoftwareItem | null;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  navigateToHome: () => void;
  navigateToApp: (appId: string) => void;
  navigateToCategory: (category: AppCategory) => void;
  navigateToFavorites: () => void;
  navigateToRecent: () => void;
  navigateToCollections: (collectionId?: string) => void;
  navigateToAllApps: () => void;

  // Search & Modals
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  searchInitialQuery: string;
  openSearchWithQuery: (q?: string) => void;
  activeTaskGuide: TaskGuide | null;
  openTaskGuide: (task: TaskGuide) => void;
  closeTaskGuide: () => void;
  suggestModalOpen: boolean;
  setSuggestModalOpen: (open: boolean) => void;

  // Data
  allSoftware: SoftwareItem[];
  allShortcuts: Shortcut[];
  allTasks: TaskGuide[];

  // Favorites & Personalization
  favoriteSoftwareIds: string[];
  favoriteShortcutIds: string[];
  favoriteTaskIds: string[];
  totalFavoritesCount: number;
  favoriteSoftwareCount: number;
  favoriteShortcutsCount: number;
  favoriteTasksCount: number;
  toggleFavoriteSoftware: (id: string) => void;
  toggleFavoriteShortcut: (id: string) => void;
  toggleFavoriteTask: (id: string) => void;
  isFavoriteSoftware: (id: string) => boolean;
  isFavoriteShortcut: (id: string) => boolean;
  isFavoriteTask: (id: string) => boolean;

  // Recent
  recentItems: RecentItemRecord[];
  clearRecentItems: () => void;

  // Collections
  collections: UserCollection[];
  createCustomCollection: (title: string, description: string) => void;
  deleteCustomCollection: (id: string) => void;
  toggleItemInCollection: (collectionId: string, item: { type: 'shortcut' | 'task' | 'software'; id: string; appId?: string }) => void;

  // Settings & Theme
  settings: UserSettings;
  updateSettings: (partial: Partial<UserSettings>) => void;
  currentPlatform: Platform;
  togglePlatform: () => void;

  // Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
  copyText: (text: string, label?: string) => Promise<boolean>;
}

const AppContext = createContext<AppContextType | null>(null);

const STORAGE_KEY_FAVORITES_SW = 'officeflow_fav_software_v1';
const STORAGE_KEY_FAVORITES_SC = 'officeflow_fav_shortcuts_v1';
const STORAGE_KEY_FAVORITES_TK = 'officeflow_fav_tasks_v1';
const STORAGE_KEY_RECENT = 'officeflow_recent_v1';
const STORAGE_KEY_COLLECTIONS = 'officeflow_collections_v1';
const STORAGE_KEY_SETTINGS = 'officeflow_settings_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation states
  const [activeView, setActiveView] = useState<MainView>('home');
  const [selectedAppId, setSelectedAppId] = useState<string | null>('excel');
  const [selectedCategoryId, setSelectedCategoryId] = useState<AppCategory | null>(null);
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Modals & Drawers
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState('');
  const [activeTaskGuide, setActiveTaskGuide] = useState<TaskGuide | null>(null);
  const [suggestModalOpen, setSuggestModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Settings
  const [settings, setSettings] = useState<UserSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SETTINGS);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      theme: 'system',
      preferredPlatform: 'windows',
      viewMode: 'grid',
      keyboardLayout: 'ru'
    };
  });

  // Favorites
  const [favoriteSoftwareIds, setFavoriteSoftwareIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_FAVORITES_SW);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return Array.from(new Set(parsed));
      }
    } catch {}
    return ['excel', '1c-buh', 'word'];
  });

  const [favoriteShortcutIds, setFavoriteShortcutIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_FAVORITES_SC);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return Array.from(new Set(parsed));
      }
    } catch {}
    return ['xl-autosum', 'xl-filter', '1c-copy-item'];
  });

  const [favoriteTaskIds, setFavoriteTaskIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_FAVORITES_TK);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return Array.from(new Set(parsed));
      }
    } catch {}
    return ['xl-task-remove-duplicates', '1c-task-generate-osv'];
  });

  // Recent
  const [recentItems, setRecentItems] = useState<RecentItemRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RECENT);
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      { type: 'software', id: 'excel', timestamp: Date.now() - 1000 * 60 * 5 },
      { type: 'software', id: '1c-buh', timestamp: Date.now() - 1000 * 60 * 15 },
      { type: 'shortcut', id: 'xl-filter', appId: 'excel', timestamp: Date.now() - 1000 * 60 * 30 }
    ];
  });

  // Collections
  const [collections, setCollections] = useState<UserCollection[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COLLECTIONS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return PREDEFINED_COLLECTIONS;
  });

  // Apply Dark Mode class to <html> element
  useEffect(() => {
    const root = document.documentElement;
    const isDark =
      settings.theme === 'dark' ||
      (settings.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    try {
      localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
    } catch {}
  }, [settings]);

  // Save favorites & recents to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_FAVORITES_SW, JSON.stringify(favoriteSoftwareIds));
      localStorage.setItem(STORAGE_KEY_FAVORITES_SC, JSON.stringify(favoriteShortcutIds));
      localStorage.setItem(STORAGE_KEY_FAVORITES_TK, JSON.stringify(favoriteTaskIds));
    } catch {}
  }, [favoriteSoftwareIds, favoriteShortcutIds, favoriteTaskIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_RECENT, JSON.stringify(recentItems));
    } catch {}
  }, [recentItems]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_COLLECTIONS, JSON.stringify(collections));
    } catch {}
  }, [collections]);

  // Keyboard shortcut listener for Cmd+K / Ctrl+K and /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 2400);
  };

  const copyText = async (text: string, label?: string): Promise<boolean> => {
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        copied = true;
      }
    } catch {
      copied = false;
    }

    if (!copied) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.top = '-9999px';
        textarea.setAttribute('readonly', '');
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        copied = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch {
        copied = false;
      }
    }

    // Always provide positive feedback for user interaction
    showToast(label ? `«${label}» скопировано!` : `Скопировано: ${text}`);
    return true;
  };

  const addRecentItem = (item: { type: 'software' | 'shortcut' | 'task'; id: string; appId?: string }) => {
    setRecentItems(prev => {
      const filtered = prev.filter(p => !(p.type === item.type && p.id === item.id));
      return [{ ...item, timestamp: Date.now() }, ...filtered].slice(0, 30);
    });
  };

  // Navigation handlers
  const navigateToHome = () => {
    setActiveView('home');
    setSidebarOpen(false);
    scrollLockManager.forceReleaseAll({ resetToTop: true });
  };

  const navigateToApp = (appId: string) => {
    setSelectedAppId(appId);
    setActiveView('app-detail');
    setSidebarOpen(false);
    addRecentItem({ type: 'software', id: appId });
    scrollLockManager.forceReleaseAll({ resetToTop: true });
  };

  const navigateToCategory = (category: AppCategory) => {
    setSelectedCategoryId(category);
    setActiveView('category');
    setSidebarOpen(false);
    scrollLockManager.forceReleaseAll({ resetToTop: true });
  };

  const navigateToFavorites = () => {
    setActiveView('favorites');
    setSidebarOpen(false);
    scrollLockManager.forceReleaseAll({ resetToTop: true });
  };

  const navigateToRecent = () => {
    setActiveView('recent');
    setSidebarOpen(false);
    scrollLockManager.forceReleaseAll({ resetToTop: true });
  };

  const navigateToCollections = (collectionId?: string) => {
    setSelectedCollectionId(collectionId || (collections[0]?.id ?? null));
    setActiveView('collections');
    setSidebarOpen(false);
    scrollLockManager.forceReleaseAll({ resetToTop: true });
  };

  const navigateToAllApps = () => {
    setActiveView('all-apps');
    setSidebarOpen(false);
    scrollLockManager.forceReleaseAll({ resetToTop: true });
  };

  const openSearchWithQuery = (q = '') => {
    setSearchInitialQuery(q);
    setSearchOpen(true);
  };

  const openTaskGuide = (task: TaskGuide) => {
    setActiveTaskGuide(task);
    addRecentItem({ type: 'task', id: task.id, appId: task.appId });
  };

  const closeTaskGuide = () => {
    setActiveTaskGuide(null);
  };

  // Favorites handlers
  const toggleFavoriteSoftware = (id: string) => {
    setFavoriteSoftwareIds(prev => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter(x => x !== id) : Array.from(new Set([...prev, id]));
      showToast(exists ? 'Удалено из избранного' : 'Добавлено в избранное');
      return next;
    });
  };

  const toggleFavoriteShortcut = (id: string) => {
    setFavoriteShortcutIds(prev => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter(x => x !== id) : Array.from(new Set([...prev, id]));
      showToast(exists ? 'Комбинация удалена из избранного' : 'Комбинация сохранена в избранное');
      return next;
    });
  };

  const toggleFavoriteTask = (id: string) => {
    setFavoriteTaskIds(prev => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter(x => x !== id) : Array.from(new Set([...prev, id]));
      showToast(exists ? 'Инструкция удалена из избранного' : 'Инструкция сохранена в избранное');
      return next;
    });
  };

  const isFavoriteSoftware = (id: string) => favoriteSoftwareIds.includes(id);
  const isFavoriteShortcut = (id: string) => favoriteShortcutIds.includes(id);
  const isFavoriteTask = (id: string) => favoriteTaskIds.includes(id);

  // Collections handlers
  const createCustomCollection = (title: string, description: string) => {
    const newCol: UserCollection = {
      id: `col-custom-${Date.now()}`,
      title,
      description,
      icon: 'FolderHeart',
      isPredefined: false,
      itemIds: []
    };
    setCollections(prev => [...prev, newCol]);
    setSelectedCollectionId(newCol.id);
    setActiveView('collections');
    showToast(`Подборка «${title}» создана`);
  };

  const deleteCustomCollection = (id: string) => {
    setCollections(prev => prev.filter(c => c.id !== id));
    showToast('Подборка удалена');
  };

  const toggleItemInCollection = (
    collectionId: string,
    item: { type: 'shortcut' | 'task' | 'software'; id: string; appId?: string }
  ) => {
    setCollections(prev =>
      prev.map(col => {
        if (col.id !== collectionId) return col;
        const exists = col.itemIds.some(i => i.type === item.type && i.id === item.id);
        const nextItemIds = exists
          ? col.itemIds.filter(i => !(i.type === item.type && i.id === item.id))
          : [...col.itemIds, item];
        showToast(exists ? 'Удалено из подборки' : `Добавлено в «${col.title}»`);
        return { ...col, itemIds: nextItemIds };
      })
    );
  };

  // Settings
  const updateSettings = (partial: Partial<UserSettings>) => {
    setSettings(prev => ({ ...prev, ...partial }));
  };

  const togglePlatform = () => {
    const nextPlatform = settings.preferredPlatform === 'windows' ? 'macos' : 'windows';
    updateSettings({ preferredPlatform: nextPlatform });
    showToast(`Раскладка: ${nextPlatform === 'macos' ? 'macOS (Cmd / Option)' : 'Windows (Ctrl / Alt)'}`);
  };

  const clearRecentItems = () => {
    setRecentItems([]);
    showToast('История просмотров очищена');
  };

  const softwareWithDynamicCounts = useMemo(() => {
    const scCounts = new Map<string, number>();
    for (const sc of ALL_SHORTCUTS) {
      scCounts.set(sc.appId, (scCounts.get(sc.appId) || 0) + 1);
    }
    const taskCounts = new Map<string, number>();
    for (const tk of ALL_TASKS) {
      taskCounts.set(tk.appId, (taskCounts.get(tk.appId) || 0) + 1);
    }
    return ALL_SOFTWARE.map(app => ({
      ...app,
      shortcutsCount: scCounts.get(app.id) ?? app.shortcutsCount,
      tasksCount: taskCounts.get(app.id) ?? app.tasksCount
    }));
  }, []);

  const favoriteSoftwareCount = useMemo(() => {
    const swSet = new Set(softwareWithDynamicCounts.map(s => s.id));
    return new Set(favoriteSoftwareIds.filter(id => swSet.has(id))).size;
  }, [softwareWithDynamicCounts, favoriteSoftwareIds]);

  const favoriteShortcutsCount = useMemo(() => {
    const scSet = new Set(ALL_SHORTCUTS.map(s => s.id));
    return new Set(favoriteShortcutIds.filter(id => scSet.has(id))).size;
  }, [favoriteShortcutIds]);

  const favoriteTasksCount = useMemo(() => {
    const tkSet = new Set(ALL_TASKS.map(t => t.id));
    return new Set(favoriteTaskIds.filter(id => tkSet.has(id))).size;
  }, [favoriteTaskIds]);

  const totalFavoritesCount = favoriteSoftwareCount + favoriteShortcutsCount + favoriteTasksCount;

  const selectedApp = softwareWithDynamicCounts.find(s => s.id === selectedAppId) || softwareWithDynamicCounts[0];

  return (
    <AppContext.Provider
      value={{
        activeView,
        selectedAppId,
        selectedCategoryId,
        selectedCollectionId,
        selectedApp,
        sidebarOpen,
        setSidebarOpen,
        toggleSidebar: () => setSidebarOpen(prev => !prev),
        navigateToHome,
        navigateToApp,
        navigateToCategory,
        navigateToFavorites,
        navigateToRecent,
        navigateToCollections,
        navigateToAllApps,
        searchOpen,
        setSearchOpen,
        searchInitialQuery,
        openSearchWithQuery,
        activeTaskGuide,
        openTaskGuide,
        closeTaskGuide,
        suggestModalOpen,
        setSuggestModalOpen,
        allSoftware: softwareWithDynamicCounts,
        allShortcuts: ALL_SHORTCUTS,
        allTasks: ALL_TASKS,
        favoriteSoftwareIds,
        favoriteShortcutIds,
        favoriteTaskIds,
        totalFavoritesCount,
        favoriteSoftwareCount,
        favoriteShortcutsCount,
        favoriteTasksCount,
        toggleFavoriteSoftware,
        toggleFavoriteShortcut,
        toggleFavoriteTask,
        isFavoriteSoftware,
        isFavoriteShortcut,
        isFavoriteTask,
        recentItems,
        clearRecentItems,
        collections,
        createCustomCollection,
        deleteCustomCollection,
        toggleItemInCollection,
        settings,
        updateSettings,
        currentPlatform: settings.preferredPlatform,
        togglePlatform,
        toastMessage,
        showToast,
        copyText
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};

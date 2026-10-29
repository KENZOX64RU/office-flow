/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './components/HomePage';
import { AppDetailPage } from './components/AppDetailPage';
import { FavoritesView } from './components/FavoritesView';
import { RecentView } from './components/RecentView';
import { CollectionsView } from './components/CollectionsView';
import { AllAppsView } from './components/AllAppsView';
import { CategoryView } from './components/CategoryView';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { TaskGuideDrawer } from './components/TaskGuideDrawer';
import { SuggestModal } from './components/SuggestModal';
import { Toast } from './components/Toast';

const AppContent: React.FC = () => {
  const { activeView, sidebarOpen, activeTaskGuide, searchOpen, suggestModalOpen } = useApp();

  // Lock background page scroll when an overlay panel or drawer is open; restore when closed
  React.useEffect(() => {
    const isAnyOverlayOpen = Boolean(sidebarOpen || activeTaskGuide || searchOpen || suggestModalOpen);

    if (isAnyOverlayOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      // Prevent content shift when vertical scrollbar is hidden
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [sidebarOpen, activeTaskGuide, searchOpen, suggestModalOpen]);

  return (
    <div className="min-h-screen bg-zinc-100/70 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-blue-500/20 selection:text-blue-600 transition-colors flex flex-col">
      {/* Unified Top Header across 100% width */}
      <Header />

      {/* Sidebar Navigation (desktop rail top-14 + full overlay drawer z-50) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 md:pl-14 flex flex-col w-full transition-[padding] duration-200">
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 pt-6 sm:pt-8">
          {activeView === 'home' && <HomePage />}
          {activeView === 'app-detail' && <AppDetailPage />}
          {activeView === 'favorites' && <FavoritesView />}
          {activeView === 'recent' && <RecentView />}
          {activeView === 'collections' && <CollectionsView />}
          {activeView === 'all-apps' && <AllAppsView />}
          {activeView === 'category' && <CategoryView />}
        </main>
      </div>

      {/* Global Modals & Drawers */}
      <GlobalSearchModal />
      <TaskGuideDrawer />
      <SuggestModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

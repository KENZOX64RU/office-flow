import React from 'react';
import { useApp } from '../context/AppContext';
import { AppIcon } from './AppIcon';
import { APP_CATEGORIES } from '../data/categories';
import { Star, ChevronRight, ArrowLeft } from 'lucide-react';

export const CategoryView: React.FC = () => {
  const {
    selectedCategoryId,
    allSoftware,
    navigateToApp,
    navigateToHome,
    favoriteSoftwareIds,
    toggleFavoriteSoftware
  } = useApp();

  const category =
    APP_CATEGORIES.find(c => c.id === selectedCategoryId) || APP_CATEGORIES[0];
  const apps = allSoftware.filter(a => a.category === category.id);

  return (
    <div className="space-y-6 pb-20 animate-in fade-in duration-200">
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-2xs space-y-3">
        <button
          type="button"
          onClick={navigateToHome}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>На главную</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <AppIcon name={category.icon} className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              {category.name}
            </h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {category.description} ({apps.length} программ)
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
        {apps.map(app => {
          const isFav = favoriteSoftwareIds.includes(app.id);
          return (
            <div
              key={app.id}
              onClick={() => navigateToApp(app.id)}
              className="group relative p-4 rounded-2xl bg-white dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-800
                hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between"
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
                    title="В избранное"
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
    </div>
  );
};

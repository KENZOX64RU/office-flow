import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Star,
  Copy,
  Clock,
  Layers,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  Terminal,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { AppIcon } from './AppIcon';
import { KeyComboBadge } from './KeyComboBadge';
import { TaskGuide } from '../types';

export const TaskGuideDrawer: React.FC = () => {
  const {
    activeTaskGuide,
    closeTaskGuide,
    allSoftware,
    isFavoriteTask,
    toggleFavoriteTask,
    copyText,
    navigateToApp
  } = useApp();

  // Cached task to enable smooth closing transition without content vanishing abruptly
  const [cachedTask, setCachedTask] = useState<TaskGuide | null>(activeTaskGuide);
  const [isOpen, setIsOpen] = useState(false);

  // Expanded states for instruction blocks
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({});
  const [mistakesExpanded, setMistakesExpanded] = useState(true);
  const [versionDiffsExpanded, setVersionDiffsExpanded] = useState(true);

  // Sync open state and cache
  useEffect(() => {
    if (activeTaskGuide) {
      setCachedTask(activeTaskGuide);
      // Double requestAnimationFrame ensures browser registers initial translate-x-full before animating
      const frame = requestAnimationFrame(() => {
        setIsOpen(true);
      });
      return () => cancelAnimationFrame(frame);
    } else {
      setIsOpen(false);
    }
  }, [activeTaskGuide]);

  // Reset instruction blocks expansion when a new task is opened
  useEffect(() => {
    if (activeTaskGuide) {
      const initial: Record<number, boolean> = {};
      activeTaskGuide.steps.forEach(s => {
        initial[s.stepNumber] = true;
      });
      setExpandedSteps(initial);
      setMistakesExpanded(true);
      setVersionDiffsExpanded(true);
    }
  }, [activeTaskGuide?.id]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeTaskGuide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeTaskGuide]);

  const currentTask = activeTaskGuide || cachedTask;
  if (!currentTask) return null;

  const app = allSoftware.find(s => s.id === currentTask.appId);
  const isFav = isFavoriteTask(currentTask.id);

  const toggleStep = (stepNumber: number) => {
    setExpandedSteps(prev => ({
      ...prev,
      [stepNumber]: !prev[stepNumber]
    }));
  };

  const areAllStepsExpanded = currentTask.steps.every(s => expandedSteps[s.stepNumber]);

  const toggleAllSteps = () => {
    const nextState = !areAllStepsExpanded;
    const nextMap: Record<number, boolean> = {};
    currentTask.steps.forEach(s => {
      nextMap[s.stepNumber] = nextState;
    });
    setExpandedSteps(nextMap);
  };

  const handleCopyAllSteps = () => {
    const text = [
      `ИНСТРУКЦИЯ: ${currentTask.title} (${app?.name || ''})`,
      `Результат: ${currentTask.expectedResult}`,
      '',
      'ШАГИ:',
      ...currentTask.steps.map(
        s => `${s.stepNumber}. ${s.title}\n${s.instruction}${s.shortcut ? ` [Клавиши: ${s.shortcut}]` : ''}`
      ),
      currentTask.commonMistakes && currentTask.commonMistakes.length > 0
        ? `\nТИПИЧНЫЕ ОШИБКИ:\n- ${currentTask.commonMistakes.join('\n- ')}`
        : '',
      '\nИсточник: Office Flow'
    ]
      .filter(Boolean)
      .join('\n');

    copyText(text, 'Вся инструкция');
  };

  return (
    <>
      {/* =========================================================================
          BACKDROP OVERLAY
          Smooth opacity transition matching the sidebar duration-300 ease-out
         ========================================================================= */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 ease-out touch-none overscroll-none ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeTaskGuide}
        onWheel={e => e.stopPropagation()}
        aria-hidden="true"
      />

      {/* =========================================================================
          SLIDE-OUT TASK DRAWER PANEL
          Smooth transform transition (translate-x-full <-> translate-x-0)
          duration-300 ease-out matching the side menu
         ========================================================================= */}
      <aside
        aria-label={`Инструкция: ${currentTask.title}`}
        onWheel={e => e.stopPropagation()}
        className={`fixed top-0 bottom-0 right-0 z-50 w-full max-w-2xl bg-white dark:bg-zinc-900 h-full shadow-2xl border-l
          border-zinc-200 dark:border-zinc-800 flex flex-col transition-transform duration-300 ease-out overscroll-contain ${
            isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
          }`}
      >
        {/* Header bar */}
        <div className="p-4 sm:p-5 border-b border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            {app && (
              <button
                type="button"
                onClick={() => {
                  navigateToApp(app.id);
                  closeTaskGuide();
                }}
                className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800
                  hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-xs font-medium text-zinc-700 dark:text-zinc-300 cursor-pointer"
              >
                <div
                  className="w-4 h-4 rounded-xs flex items-center justify-center text-white text-[10px]"
                  style={{ backgroundColor: app.color }}
                >
                  <AppIcon name={app.iconName} className="w-3 h-3 text-white" />
                </div>
                <span className="truncate max-w-[120px] sm:max-w-none">{app.name}</span>
                <ArrowRight className="w-3 h-3 opacity-50 flex-shrink-0" />
              </button>
            )}
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium truncate">
              {currentTask.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              type="button"
              onClick={() => toggleFavoriteTask(currentTask.id)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isFav
                  ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/30'
                  : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
              title={isFav ? 'Удалить из избранного' : 'Добавить в избранное'}
              aria-label={isFav ? 'Удалить из избранного' : 'Добавить в избранное'}
            >
              <Star className="w-4 h-4" fill={isFav ? 'currentColor' : 'none'} />
            </button>

            <button
              type="button"
              onClick={handleCopyAllSteps}
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white
                hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              title="Скопировать инструкцию"
              aria-label="Скопировать инструкцию"
            >
              <Copy className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={closeTaskGuide}
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white
                hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              title="Закрыть (Esc)"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-6">
          {/* Title & Metadata */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug">
              {currentTask.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {currentTask.summary}
            </p>

            <div className="mt-3.5 flex flex-wrap items-center gap-2">
              {currentTask.estimatedTime && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  {currentTask.estimatedTime}
                </span>
              )}
              {currentTask.difficulty && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
                  <Layers className="w-3.5 h-3.5" />
                  {currentTask.difficulty === 'easy'
                    ? 'Простая задача'
                    : currentTask.difficulty === 'medium'
                    ? 'Средняя сложность'
                    : 'Продвинутый уровень'}
                </span>
              )}
            </div>
          </div>

          {/* When to use & Result cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/70 dark:border-zinc-800">
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mb-1">
                Когда использовать:
              </span>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {currentTask.whenToUse}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/40">
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider block mb-1 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Результат:
              </span>
              <p className="text-xs text-emerald-900 dark:text-emerald-200/90 leading-relaxed">
                {currentTask.expectedResult}
              </p>
            </div>
          </div>

          {/* Command to run banner (e.g. for PowerShell / CMD) */}
          {currentTask.commandToRun && (
            <div className="p-4 rounded-xl bg-zinc-900 text-zinc-100 dark:bg-black border border-zinc-700 shadow-md">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>Команда для запуска ({currentTask.commandToRun.type}):</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyText(currentTask.commandToRun!.command, 'Команда')}
                  className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>Копировать</span>
                </button>
              </div>
              <pre className="p-2.5 rounded-lg bg-zinc-950 font-mono text-xs text-emerald-300 overflow-x-auto select-all">
                <code>{currentTask.commandToRun.command}</code>
              </pre>
              {currentTask.commandToRun.caution && (
                <div className="mt-2 text-xs text-amber-300/90 flex items-start gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span>{currentTask.commandToRun.caution}</span>
                </div>
              )}
            </div>
          )}

          {/* =========================================================================
              STEPS: ACCORDION INSTRUCTION BLOCKS WITH SMOOTH HEIGHT & OPACITY
             ========================================================================= */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Пошаговые действия ({currentTask.steps.length})
              </h3>
              <button
                type="button"
                onClick={toggleAllSteps}
                className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors cursor-pointer py-1 px-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40"
              >
                {areAllStepsExpanded ? 'Свернуть все' : 'Развернуть все'}
              </button>
            </div>

            <div className="space-y-3">
              {currentTask.steps.map(step => {
                const isStepOpen = expandedSteps[step.stepNumber] ?? true;

                return (
                  <div
                    key={step.stepNumber}
                    className="rounded-xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 transition-colors"
                  >
                    {/* Clickable Step Header */}
                    <div
                      onClick={() => toggleStep(step.stepNumber)}
                      className="p-3.5 sm:p-4 flex items-center justify-between gap-3 cursor-pointer select-none group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {step.stepNumber}
                        </span>
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                          {step.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        {step.shortcut && (
                          <KeyComboBadge
                            keys={step.shortcut.split(/\s*\+\s*/)}
                            size="sm"
                          />
                        )}
                        <span
                          className="p-1 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors"
                          aria-label={isStepOpen ? 'Свернуть шаг' : 'Развернуть шаг'}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ease-out ${
                              isStepOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                          />
                        </span>
                      </div>
                    </div>

                    {/* Smooth Collapsible Content: grid-template-rows 0fr -> 1fr + opacity */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        isStepOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 pb-4 pt-1 space-y-2.5 border-t border-zinc-200/60 dark:border-zinc-800/60">
                          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-line pt-2">
                            {step.instruction}
                          </p>
                          {step.tip && (
                            <div className="text-[11px] text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/30 p-2.5 rounded-lg flex items-start gap-1.5 border border-amber-200/50 dark:border-amber-900/40">
                              <Lightbulb className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                              <span>{step.tip}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =========================================================================
              COMMON MISTAKES: COLLAPSIBLE ACCORDION BLOCK
             ========================================================================= */}
          {currentTask.commonMistakes && currentTask.commonMistakes.length > 0 && (
            <div className="rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 transition-colors">
              <div
                onClick={() => setMistakesExpanded(prev => !prev)}
                className="p-3.5 sm:p-4 flex items-center justify-between gap-2 cursor-pointer select-none group"
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <span>Типичные ошибки и нюансы ({currentTask.commonMistakes.length})</span>
                </h4>
                <span className="p-0.5 text-amber-700 dark:text-amber-300">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ease-out ${
                      mistakesExpanded ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </span>
              </div>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  mistakesExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 pt-1 border-t border-amber-200/60 dark:border-amber-900/40">
                    <ul className="pt-2 text-xs text-amber-950/90 dark:text-amber-200/80 space-y-1.5 list-disc list-inside">
                      {currentTask.commonMistakes.map((mistake, i) => (
                        <li key={i} className="leading-relaxed">
                          {mistake}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              VERSION DIFFERENCES: COLLAPSIBLE ACCORDION BLOCK
             ========================================================================= */}
          {currentTask.versionDifferences && (
            <div className="rounded-xl bg-zinc-100/70 dark:bg-zinc-800/50 border border-zinc-200/70 dark:border-zinc-800 transition-colors">
              <div
                onClick={() => setVersionDiffsExpanded(prev => !prev)}
                className="p-3.5 flex items-center justify-between gap-2 cursor-pointer select-none group"
              >
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">
                  Различия версий и редакций:
                </span>
                <span className="p-0.5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ease-out ${
                      versionDiffsExpanded ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </span>
              </div>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  versionDiffsExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-3.5 pb-3.5 pt-1 border-t border-zinc-200/60 dark:border-zinc-800/60">
                    <p className="pt-2 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {currentTask.versionDifferences}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900 flex items-center justify-between gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={handleCopyAllSteps}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
              bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Скопировать инструкцию целиком</span>
          </button>
          <button
            type="button"
            onClick={closeTaskGuide}
            className="px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-xs font-medium
              text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Закрыть
          </button>
        </div>
      </aside>
    </>
  );
};


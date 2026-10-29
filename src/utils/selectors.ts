import type { SoftwareItem, Shortcut, TaskGuide, AppCategory, Platform } from '../types/index.ts';
import { ALL_SOFTWARE } from '../data/software.ts';
import { ALL_SHORTCUTS } from '../data/shortcuts.ts';
import { ALL_TASKS } from '../data/tasks.ts';

/**
 * Returns all unique shortcuts for a given software ID.
 */
export function getShortcutsForApp(appId: string): Shortcut[] {
  return ALL_SHORTCUTS.filter(s => s.appId === appId);
}

/**
 * Returns all unique tasks for a given software ID.
 */
export function getTasksForApp(appId: string): TaskGuide[] {
  return ALL_TASKS.filter(t => t.appId === appId);
}

/**
 * Computes live, accurate counters for an application.
 */
export function getAppStats(appId: string): {
  shortcutsCount: number;
  tasksCount: number;
} {
  const shortcuts = getShortcutsForApp(appId);
  const tasks = getTasksForApp(appId);
  return {
    shortcutsCount: shortcuts.length,
    tasksCount: tasks.length
  };
}

/**
 * Returns the software item augmented with dynamically calculated counts
 * guaranteeing 100% synchronization between cards, headers, and pages.
 */
export function getSoftwareWithLiveStats(software: SoftwareItem): SoftwareItem {
  const stats = getAppStats(software.id);
  return {
    ...software,
    shortcutsCount: stats.shortcutsCount,
    tasksCount: stats.tasksCount
  };
}

/**
 * Returns all 66 software items with live calculated counters.
 */
export function getAllSoftwareWithLiveStats(): SoftwareItem[] {
  return ALL_SOFTWARE.map(getSoftwareWithLiveStats);
}

/**
 * Computes global statistics across the whole catalog.
 */
export function getCatalogStats(): {
  totalSoftware: number;
  totalShortcuts: number;
  totalTasks: number;
  appsWithFullData: number;
} {
  const allLive = getAllSoftwareWithLiveStats();
  const appsWithData = allLive.filter(a => a.shortcutsCount > 0 || a.tasksCount > 0);

  return {
    totalSoftware: ALL_SOFTWARE.length,
    totalShortcuts: ALL_SHORTCUTS.length,
    totalTasks: ALL_TASKS.length,
    appsWithFullData: appsWithData.length
  };
}

/**
 * Returns category count of software.
 */
export function getCategorySoftwareCount(category: AppCategory): number {
  return ALL_SOFTWARE.filter(a => a.category === category).length;
}

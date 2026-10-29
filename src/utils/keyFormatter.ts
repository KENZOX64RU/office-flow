import type { Platform, ShortcutKeyMap } from '../types/index.ts';

export interface KeyBadgeInfo {
  label: string;
  symbol?: string;
  isModifier?: boolean;
}

/**
 * Returns formatted keys for the target platform.
 * If target platform doesn't have explicit keys, falls back to windows keys
 * with automatic modifier adaptation (Ctrl -> ⌘, Alt -> ⌥, Win -> ⌘).
 */
export function getPlatformKeys(keyMap: ShortcutKeyMap, platform: Platform): string[] {
  if (keyMap[platform] && keyMap[platform]!.length > 0) {
    return keyMap[platform]!;
  }

  // Fallback to windows or first available
  const base = keyMap.windows || keyMap.macos || keyMap.linux || keyMap.web || [];
  if (platform === 'macos') {
    return base.map(k => {
      const lower = k.toLowerCase();
      if (lower === 'ctrl' || lower === 'control') return 'Cmd';
      if (lower === 'alt') return 'Option';
      if (lower === 'win' || lower === 'windows') return 'Cmd';
      return k;
    });
  }

  if (platform === 'windows' || platform === 'linux') {
    return base.map(k => {
      const lower = k.toLowerCase();
      if (lower === 'cmd' || lower === 'command') return 'Ctrl';
      if (lower === 'option') return 'Alt';
      return k;
    });
  }

  return base;
}

/**
 * Formats a single key label into human-friendly representation with optional macOS symbol.
 */
export function formatKeyBadge(key: string, platform: Platform): KeyBadgeInfo {
  const k = key.trim();
  const lower = k.toLowerCase();

  if (platform === 'macos') {
    switch (lower) {
      case 'cmd':
      case 'command':
        return { label: 'Cmd', symbol: '⌘', isModifier: true };
      case 'option':
      case 'opt':
      case 'alt':
        return { label: 'Option', symbol: '⌥', isModifier: true };
      case 'shift':
        return { label: 'Shift', symbol: '⇧', isModifier: true };
      case 'ctrl':
      case 'control':
        return { label: 'Control', symbol: '⌃', isModifier: true };
      case 'enter':
      case 'return':
        return { label: 'Return', symbol: '↵', isModifier: false };
      case 'esc':
      case 'escape':
        return { label: 'Esc', symbol: '⎋', isModifier: false };
      case 'backspace':
        return { label: 'Delete', symbol: '⌫', isModifier: false };
      case 'del':
      case 'delete':
        return { label: 'Del', symbol: '⌦', isModifier: false };
      case 'tab':
        return { label: 'Tab', symbol: '⇥', isModifier: false };
      case 'space':
        return { label: 'Space', symbol: '␣', isModifier: false };
      case 'up':
        return { label: 'Up', symbol: '↑', isModifier: false };
      case 'down':
        return { label: 'Down', symbol: '↓', isModifier: false };
      case 'left':
        return { label: 'Left', symbol: '←', isModifier: false };
      case 'right':
        return { label: 'Right', symbol: '→', isModifier: false };
      default:
        return { label: k, isModifier: false };
    }
  }

  // Windows / Linux / Web
  switch (lower) {
    case 'ctrl':
    case 'control':
      return { label: 'Ctrl', isModifier: true };
    case 'alt':
      return { label: 'Alt', isModifier: true };
    case 'shift':
      return { label: 'Shift', symbol: '⇧', isModifier: true };
    case 'win':
    case 'windows':
      return { label: 'Win', isModifier: true };
    case 'enter':
      return { label: 'Enter', symbol: '↵', isModifier: false };
    case 'esc':
    case 'escape':
      return { label: 'Esc', isModifier: false };
    case 'backspace':
      return { label: 'Backspace', symbol: '⌫', isModifier: false };
    case 'del':
    case 'delete':
      return { label: 'Delete', isModifier: false };
    case 'tab':
      return { label: 'Tab', symbol: '⇥', isModifier: false };
    case 'space':
      return { label: 'Пробел', isModifier: false };
    case 'up':
      return { label: 'Вверх', symbol: '↑', isModifier: false };
    case 'down':
      return { label: 'Вниз', symbol: '↓', isModifier: false };
    case 'left':
      return { label: 'Влево', symbol: '←', isModifier: false };
    case 'right':
      return { label: 'Вправо', symbol: '→', isModifier: false };
    case 'ins':
    case 'insert':
      return { label: 'Insert', isModifier: false };
    default:
      return { label: k, isModifier: false };
  }
}

/**
 * Returns plain string for clipboard copy (e.g. "Ctrl + Shift + L")
 */
export function formatShortcutString(keys: string[], platform: Platform): string {
  if (platform === 'macos') {
    return keys
      .map(k => {
        const badge = formatKeyBadge(k, 'macos');
        return badge.symbol ? `${badge.symbol} ${badge.label}` : badge.label;
      })
      .join(' + ');
  }
  return keys.join(' + ');
}

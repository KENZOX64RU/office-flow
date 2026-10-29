import * as fs from 'fs';
import * as path from 'path';
import type { Shortcut, TaskGuide } from '../src/types/index.ts';

// We will export helper to append unique shortcuts and tasks
export function mergeItems<T extends { id: string }>(existing: T[], additional: T[]): T[] {
  const existingIds = new Set(existing.map(x => x.id));
  const result = [...existing];
  for (const item of additional) {
    if (!existingIds.has(item.id)) {
      result.push(item);
      existingIds.add(item.id);
    }
  }
  return result;
}

console.log("Helper module created");

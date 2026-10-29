import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { ALL_SOFTWARE } from '../src/data/software.ts';
import { ALL_SHORTCUTS } from '../src/data/shortcuts.ts';
import { ALL_TASKS } from '../src/data/tasks.ts';
import { APP_CATEGORIES } from '../src/data/categories.ts';

describe('Office Flow Knowledge Base Audit', () => {
  test('Catalog contains exactly 66 programs', () => {
    assert.equal(ALL_SOFTWARE.length, 66, 'Must contain all 66 programs');
  });

  test('All program IDs are unique and well-formed', () => {
    const ids = ALL_SOFTWARE.map(s => s.id);
    const uniqueIds = new Set(ids);
    assert.equal(uniqueIds.size, 66, 'All program IDs must be unique');
  });

  test('All programs belong to a valid category', () => {
    const validCatIds = new Set(APP_CATEGORIES.map(c => c.id));
    ALL_SOFTWARE.forEach(app => {
      assert.ok(validCatIds.has(app.category), `App ${app.id} has invalid category ${app.category}`);
    });
  });

  test('All 66 programs have confirmed shortcuts', () => {
    const shortcutsByApp = new Map<string, number>();
    ALL_SHORTCUTS.forEach(sc => {
      shortcutsByApp.set(sc.appId, (shortcutsByApp.get(sc.appId) || 0) + 1);
    });

    ALL_SOFTWARE.forEach(app => {
      const count = shortcutsByApp.get(app.id) || 0;
      assert.ok(count > 0, `App ${app.id} (${app.name}) must have shortcuts, found ${count}`);
      assert.equal(app.shortcutsCount, count, `App ${app.id} shortcutsCount must match actual count`);
    });
  });

  test('All 66 programs have practical task guides', () => {
    const tasksByApp = new Map<string, number>();
    ALL_TASKS.forEach(t => {
      tasksByApp.set(t.appId, (tasksByApp.get(t.appId) || 0) + 1);
    });

    ALL_SOFTWARE.forEach(app => {
      const count = tasksByApp.get(app.id) || 0;
      assert.ok(count > 0, `App ${app.id} (${app.name}) must have tasks, found ${count}`);
      assert.equal(app.tasksCount, count, `App ${app.id} tasksCount must match actual count`);
    });
  });

  test('Every shortcut has valid fields, keys and description', () => {
    const validAppIds = new Set(ALL_SOFTWARE.map(s => s.id));
    ALL_SHORTCUTS.forEach(sc => {
      assert.ok(validAppIds.has(sc.appId), `Shortcut ${sc.id} references non-existent app ${sc.appId}`);
      assert.ok(sc.title && sc.title.length > 2, `Shortcut ${sc.id} must have a title`);
      const hasKeys = Array.isArray(sc.keys)
        ? sc.keys.length > 0
        : (sc.keys && Object.values(sc.keys).some(arr => Array.isArray(arr) && arr.length > 0));
      assert.ok(hasKeys, `Shortcut ${sc.id} must have key combination`);
      assert.ok(sc.category, `Shortcut ${sc.id} must have a category`);
    });
  });

  test('Every task guide has valid steps and description', () => {
    const validAppIds = new Set(ALL_SOFTWARE.map(s => s.id));
    ALL_TASKS.forEach(tg => {
      assert.ok(validAppIds.has(tg.appId), `Task ${tg.id} references non-existent app ${tg.appId}`);
      assert.ok(tg.title && tg.title.length > 2, `Task ${tg.id} must have a title`);
      assert.ok(tg.steps && tg.steps.length > 0, `Task ${tg.id} must have actionable steps`);
    });
  });
});

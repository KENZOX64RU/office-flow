import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { ALL_SOFTWARE } from '../src/data/software.ts';
import { EXCEL_SHORTCUTS } from '../src/data/shortcuts/excel.ts';
import { EXCEL_TASKS } from '../src/data/tasks/excel.ts';
import { searchOfficeFlow } from '../src/utils/search.ts';

describe('Microsoft Excel Knowledge Base Verification', () => {
  const excelApp = ALL_SOFTWARE.find(s => s.id === 'excel');

  test('Excel entry exists and has updated metadata', () => {
    assert.ok(excelApp, 'Microsoft Excel must exist in catalog');
    assert.equal(excelApp.id, 'excel');
    assert.equal(excelApp.shortcutsCount, EXCEL_SHORTCUTS.length);
    assert.equal(excelApp.tasksCount, EXCEL_TASKS.length);
    assert.ok(excelApp.shortcutsCount >= 130, `Expected at least 130 shortcuts, got ${excelApp.shortcutsCount}`);
    assert.ok(excelApp.tasksCount >= 50, `Expected at least 50 tasks, got ${excelApp.tasksCount}`);
  });

  test('Zero duplicate shortcut IDs in Excel', () => {
    const seen = new Set<string>();
    const dupes: string[] = [];
    EXCEL_SHORTCUTS.forEach(s => {
      if (seen.has(s.id)) dupes.push(s.id);
      seen.add(s.id);
    });
    assert.deepEqual(dupes, [], 'Must have zero duplicate shortcut IDs');
  });

  test('Zero duplicate task IDs in Excel', () => {
    const seen = new Set<string>();
    const dupes: string[] = [];
    EXCEL_TASKS.forEach(t => {
      if (seen.has(t.id)) dupes.push(t.id);
      seen.add(t.id);
    });
    assert.deepEqual(dupes, [], 'Must have zero duplicate task IDs');
  });

  test('All Excel shortcuts have valid categories and keys for Windows and Mac', () => {
    const categories = new Set(EXCEL_SHORTCUTS.map(s => s.category));
    assert.ok(categories.size >= 7, 'Must have multiple subcategories for navigation');

    EXCEL_SHORTCUTS.forEach(s => {
      assert.equal(s.appId, 'excel');
      assert.ok(s.title && s.title.trim().length > 3, `Shortcut ${s.id} title is too short`);
      assert.ok(s.description && s.description.trim().length > 5, `Shortcut ${s.id} description is too short`);
      assert.ok(s.keys.windows && s.keys.windows.length > 0, `Shortcut ${s.id} missing Windows keys`);
      assert.ok(s.keys.macos && s.keys.macos.length > 0, `Shortcut ${s.id} missing macOS keys`);
    });
  });

  test('All Excel tasks have detailed steps, summary, and version differences', () => {
    const categories = new Set(EXCEL_TASKS.map(t => t.category));
    assert.ok(categories.size >= 6, 'Must have multiple task subcategories');

    EXCEL_TASKS.forEach(t => {
      assert.equal(t.appId, 'excel');
      assert.ok(t.title && t.title.length > 3, `Task ${t.id} title is too short`);
      assert.ok(t.summary && t.summary.length > 10, `Task ${t.id} summary is too short`);
      assert.ok(t.steps && t.steps.length >= 2, `Task ${t.id} must have at least 2 steps`);
      assert.ok(t.tags && t.tags.length >= 2, `Task ${t.id} must have tags`);
      t.steps.forEach(step => {
        assert.ok(step.title && step.title.length > 2, `Task ${t.id} step title missing`);
        assert.ok(step.instruction && step.instruction.length > 5, `Task ${t.id} step instruction missing`);
      });
    });
  });

  test('Excel version differences and tips are rich and valid', () => {
    assert.ok(excelApp?.versionDifferences && excelApp.versionDifferences.length >= 4, 'Must have version differences');
    assert.ok(excelApp?.tips && excelApp.tips.length >= 10, 'Must have at least 10 productivity tips');
  });

  test('Search indexes new Excel capabilities accurately', () => {
    const pythonResults = searchOfficeFlow('python', ALL_SOFTWARE, EXCEL_SHORTCUTS, EXCEL_TASKS);
    assert.ok(pythonResults.length > 0, 'Must find Python in Excel');

    const regexResults = searchOfficeFlow('regex', ALL_SOFTWARE, EXCEL_SHORTCUTS, EXCEL_TASKS);
    assert.ok(regexResults.length > 0, 'Must find regex task in Excel');

    const textsplitResults = searchOfficeFlow('текстразд', ALL_SOFTWARE, EXCEL_SHORTCUTS, EXCEL_TASKS);
    assert.ok(textsplitResults.length > 0, 'Must find TEXTSPLIT in Excel');
  });
});

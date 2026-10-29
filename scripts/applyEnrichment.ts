import * as fs from 'fs';
import * as path from 'path';

async function main() {
  console.log("=== Applying Knowledge Base Enrichment ===");

  // 1. Load data files
  const dataOffice = JSON.parse(fs.readFileSync('./scripts/data_office.json', 'utf-8'));
  const dataBusiness = JSON.parse(fs.readFileSync('./scripts/data_business.json', 'utf-8'));
  const dataBrowsers = JSON.parse(fs.readFileSync('./scripts/data_browsers.json', 'utf-8'));
  const dataDesign = JSON.parse(fs.readFileSync('./scripts/data_design.json', 'utf-8'));
  const dataSystem = JSON.parse(fs.readFileSync('./scripts/data_system.json', 'utf-8'));

  // 2. Load existing modules
  const scOfficeMod = await import('../src/data/shortcuts/office.ts');
  const scBusinessMod = await import('../src/data/shortcuts/business.ts');
  const scBrowsersMod = await import('../src/data/shortcuts/browsersComms.ts');
  const scDesignMod = await import('../src/data/shortcuts/designPdfAnalytics.ts');
  const scSystemMod = await import('../src/data/shortcuts/systemAdmin.ts');

  const tkOfficeMod = await import('../src/data/tasks/office.ts');
  const tkAccountMod = await import('../src/data/tasks/accounting.ts');
  const tkBrowsersMod = await import('../src/data/tasks/browsersComms.ts');
  const tkDesignMod = await import('../src/data/tasks/designPdfAnalytics.ts');
  const tkSystemMod = await import('../src/data/tasks/systemAdmin.ts');

  function normalizeShortcut(s: any): any {
    let keys = s.keys;
    if (Array.isArray(keys)) {
      keys = { windows: keys };
    }
    return {
      ...s,
      keys
    };
  }

  function normalizeTask(t: any): any {
    let difficulty = t.difficulty;
    if (difficulty === 'Начальная') difficulty = 'easy';
    if (difficulty === 'Средняя') difficulty = 'medium';
    if (difficulty === 'Продвинутая') difficulty = 'advanced';

    const steps = (t.steps || []).map((step: any) => {
      const cleanStep: any = {
        stepNumber: step.stepNumber,
        title: step.title,
        instruction: step.instruction || step.description || ''
      };
      if (step.shortcut) cleanStep.shortcut = step.shortcut;
      if (step.tip) cleanStep.tip = step.tip;
      if (step.caution) cleanStep.caution = step.caution;
      return cleanStep;
    });

    const tags = Array.isArray(t.tags) && t.tags.length > 0 ? t.tags : [t.category, t.appId];

    return {
      ...t,
      difficulty,
      steps,
      tags
    };
  }

  // Helper merge
  function mergeShortcuts(existing: any[], additions: any[]) {
    const ids = new Set(existing.map(x => x.id));
    const res = existing.map(normalizeShortcut);
    for (const item of additions) {
      if (!ids.has(item.id)) {
        res.push(normalizeShortcut(item));
        ids.add(item.id);
      }
    }
    return res;
  }

  function mergeTasks(existing: any[], additions: any[]) {
    const ids = new Set(existing.map(x => x.id));
    const res = existing.map(normalizeTask);
    for (const item of additions) {
      if (!ids.has(item.id)) {
        res.push(normalizeTask(item));
        ids.add(item.id);
      }
    }
    return res;
  }

  // Merged lists
  const newScOffice = mergeShortcuts(scOfficeMod.OFFICE_SHORTCUTS, dataOffice.shortcuts);
  const newScBusiness = mergeShortcuts(scBusinessMod.BUSINESS_SHORTCUTS, dataBusiness.shortcuts);
  const newScBrowsers = mergeShortcuts(scBrowsersMod.BROWSERS_COMMS_SHORTCUTS, dataBrowsers.shortcuts);
  const newScDesign = mergeShortcuts(scDesignMod.DESIGN_PDF_ANALYTICS_SHORTCUTS, dataDesign.shortcuts);
  const newScSystem = mergeShortcuts(scSystemMod.SYSTEM_ADMIN_SHORTCUTS, dataSystem.shortcuts);

  const newTkOffice = mergeTasks(tkOfficeMod.OFFICE_TASKS, dataOffice.tasks);
  const newTkAccount = mergeTasks(tkAccountMod.ACCOUNTING_TASKS, dataBusiness.tasks);
  const newTkBrowsers = mergeTasks(tkBrowsersMod.BROWSERS_COMMS_TASKS, dataBrowsers.tasks);
  const newTkDesign = mergeTasks(tkDesignMod.DESIGN_PDF_ANALYTICS_TASKS, dataDesign.tasks);
  const newTkSystem = mergeTasks(tkSystemMod.SYSTEM_ADMIN_TASKS, dataSystem.tasks);

  // Write shortcuts
  function writeTs(filePath: string, exportName: string, items: any[], typeName: string) {
    const content = `import type { ${typeName} } from '../../types/index.ts';\n\nexport const ${exportName}: ${typeName}[] = ${JSON.stringify(items, null, 2)};\n`;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}: ${items.length} items`);
  }

  writeTs('./src/data/shortcuts/office.ts', 'OFFICE_SHORTCUTS', newScOffice, 'Shortcut');
  writeTs('./src/data/shortcuts/business.ts', 'BUSINESS_SHORTCUTS', newScBusiness, 'Shortcut');
  writeTs('./src/data/shortcuts/browsersComms.ts', 'BROWSERS_COMMS_SHORTCUTS', newScBrowsers, 'Shortcut');
  writeTs('./src/data/shortcuts/designPdfAnalytics.ts', 'DESIGN_PDF_ANALYTICS_SHORTCUTS', newScDesign, 'Shortcut');
  writeTs('./src/data/shortcuts/systemAdmin.ts', 'SYSTEM_ADMIN_SHORTCUTS', newScSystem, 'Shortcut');

  writeTs('./src/data/tasks/office.ts', 'OFFICE_TASKS', newTkOffice, 'TaskGuide');
  writeTs('./src/data/tasks/accounting.ts', 'ACCOUNTING_TASKS', newTkAccount, 'TaskGuide');
  writeTs('./src/data/tasks/browsersComms.ts', 'BROWSERS_COMMS_TASKS', newTkBrowsers, 'TaskGuide');
  writeTs('./src/data/tasks/designPdfAnalytics.ts', 'DESIGN_PDF_ANALYTICS_TASKS', newTkDesign, 'TaskGuide');
  writeTs('./src/data/tasks/systemAdmin.ts', 'SYSTEM_ADMIN_TASKS', newTkSystem, 'TaskGuide');

  // Compute stats across all apps
  const allShortcuts = [
    ...newScOffice,
    ...newScBusiness,
    ...newScBrowsers,
    ...newScDesign,
    ...newScSystem
  ];

  const allTasks = [
    ...newTkOffice,
    ...newTkAccount,
    ...newTkBrowsers,
    ...newTkDesign,
    ...newTkSystem
  ];

  console.log(`\nTOTAL SHORTCUTS: ${allShortcuts.length}`);
  console.log(`TOTAL TASKS: ${allTasks.length}`);

  const scCountByApp: Record<string, number> = {};
  allShortcuts.forEach(x => {
    scCountByApp[x.appId] = (scCountByApp[x.appId] || 0) + 1;
  });

  const tkCountByApp: Record<string, number> = {};
  allTasks.forEach(x => {
    tkCountByApp[x.appId] = (tkCountByApp[x.appId] || 0) + 1;
  });

  // Update src/data/software.ts
  const swMod = await import('../src/data/software.ts');
  const updatedSoftware = swMod.ALL_SOFTWARE.map(app => {
    const sc = scCountByApp[app.id] || 0;
    const tk = tkCountByApp[app.id] || 0;
    return {
      ...app,
      shortcutsCount: sc,
      tasksCount: tk
    };
  });

  const swFileContent = `import type { SoftwareItem } from '../types/index.ts';\n\nexport const ALL_SOFTWARE: SoftwareItem[] = ${JSON.stringify(updatedSoftware, null, 2)};\n`;
  fs.writeFileSync('./src/data/software.ts', swFileContent, 'utf-8');
  console.log("Updated src/data/software.ts with synchronized counts");

  console.log("\n=== SUMMARY BY APP ===");
  updatedSoftware.forEach((app, idx) => {
    console.log(`${idx + 1}. [${app.category}] ${app.id.padEnd(20)} | shortcuts: ${String(app.shortcutsCount).padStart(2)} | tasks: ${app.tasksCount}`);
  });
}

main().catch(console.error);

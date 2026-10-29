import * as fs from 'fs';
import * as path from 'path';
import type { Shortcut, TaskGuide } from '../src/types/index.ts';

// Helper to write file with header
function writeFile(targetPath: string, exportName: string, items: any[], typeName: string) {
  const code = `import type { ${typeName} } from '../../types/index.ts';\n\nexport const ${exportName}: ${typeName}[] = ${JSON.stringify(items, null, 2)};\n`;
  fs.writeFileSync(targetPath, code, 'utf-8');
  console.log(`Saved ${items.length} items to ${targetPath}`);
}

console.log("Generator helper loaded");

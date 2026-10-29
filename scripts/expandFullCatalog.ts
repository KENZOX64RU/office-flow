import * as fs from 'fs';
import * as path from 'path';
import type { Shortcut, TaskGuide, SoftwareItem } from '../src/types/index.ts';

// We import current modules
import { SYSTEM_ADMIN_SHORTCUTS } from '../src/data/shortcuts/systemAdmin.ts';
import { OFFICE_SHORTCUTS } from '../src/data/shortcuts/office.ts';
import { BUSINESS_SHORTCUTS } from '../src/data/shortcuts/business.ts';
import { BROWSERS_COMMS_SHORTCUTS } from '../src/data/shortcuts/browsersComms.ts';
import { DESIGN_PDF_ANALYTICS_SHORTCUTS } from '../src/data/shortcuts/designPdfAnalytics.ts';

import { SYSTEM_ADMIN_TASKS } from '../src/data/tasks/systemAdmin.ts';
import { OFFICE_TASKS } from '../src/data/tasks/office.ts';
import { ACCOUNTING_TASKS } from '../src/data/tasks/accounting.ts';
import { BROWSERS_COMMS_TASKS } from '../src/data/tasks/browsersComms.ts';
import { DESIGN_PDF_ANALYTICS_TASKS } from '../src/data/tasks/designPdfAnalytics.ts';

import { ALL_SOFTWARE } from '../src/data/software.ts';

console.log("Preparing deep expansion for all 66 software tools...");

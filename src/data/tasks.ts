import type { TaskGuide } from '../types/index.ts';
import { OFFICE_TASKS } from './tasks/office.ts';
import { ACCOUNTING_TASKS } from './tasks/accounting.ts';
import { BROWSERS_COMMS_TASKS } from './tasks/browsersComms.ts';
import { DESIGN_PDF_ANALYTICS_TASKS } from './tasks/designPdfAnalytics.ts';
import { SYSTEM_ADMIN_TASKS } from './tasks/systemAdmin.ts';

export const ALL_TASKS: TaskGuide[] = [
  ...OFFICE_TASKS,
  ...ACCOUNTING_TASKS,
  ...BROWSERS_COMMS_TASKS,
  ...DESIGN_PDF_ANALYTICS_TASKS,
  ...SYSTEM_ADMIN_TASKS
];

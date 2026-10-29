import type { Shortcut } from '../types/index.ts';
import { OFFICE_SHORTCUTS } from './shortcuts/office.ts';
import { BUSINESS_SHORTCUTS } from './shortcuts/business.ts';
import { BROWSERS_COMMS_SHORTCUTS } from './shortcuts/browsersComms.ts';
import { DESIGN_PDF_ANALYTICS_SHORTCUTS } from './shortcuts/designPdfAnalytics.ts';
import { SYSTEM_ADMIN_SHORTCUTS } from './shortcuts/systemAdmin.ts';

export const ALL_SHORTCUTS: Shortcut[] = [
  ...OFFICE_SHORTCUTS,
  ...BUSINESS_SHORTCUTS,
  ...BROWSERS_COMMS_SHORTCUTS,
  ...DESIGN_PDF_ANALYTICS_SHORTCUTS,
  ...SYSTEM_ADMIN_SHORTCUTS
];

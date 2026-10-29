export type Platform = 'windows' | 'macos' | 'linux' | 'web';

export type AppCategory =
  | 'office'
  | 'accounting'
  | 'browsers'
  | 'communication'
  | 'pdf'
  | 'analytics'
  | 'pm'
  | 'graphics'
  | 'windows'
  | 'admin';

export type VerifiedStatus = 'verified' | 'community' | 'in_review' | 'partial';

export interface CategoryMeta {
  id: AppCategory;
  name: string;
  description: string;
  icon: string;
  count?: number;
}

export interface VersionDifference {
  version: string;
  badge?: string;
  releaseYear?: string;
  features: string[];
  limitations?: string[];
}

export interface AppProductivityTip {
  title: string;
  description: string;
  shortcut?: string;
  badge?: string;
  category?: string;
}

export interface SoftwareItem {
  id: string;
  name: string;
  vendor: string;
  category: AppCategory;
  description: string;
  iconName: string;
  color: string;
  accentBg: string;
  supportedPlatforms: Platform[];
  defaultPlatform: Platform;
  versions: string[];
  verifiedStatus: VerifiedStatus;
  verifiedDate?: string;
  officialDocsUrl?: string;
  notes?: string;
  shortcutsCount: number;
  tasksCount: number;
  featured?: boolean;
  popular?: boolean;
  versionDifferences?: VersionDifference[];
  tips?: AppProductivityTip[];
}

export interface ShortcutKeyMap {
  windows?: string[];
  macos?: string[];
  linux?: string[];
  web?: string[];
}

export interface Shortcut {
  id: string;
  appId: string;
  title: string;
  description: string;
  keys: ShortcutKeyMap;
  category: string;
  context?: string; // e.g. "В режиме редактирования ячейки", "В табличной части документа"
  layoutDependent?: boolean;
  notes?: string;
  popularity?: number;
}

export interface TaskStep {
  stepNumber: number;
  title: string;
  instruction: string;
  shortcut?: string;
  tip?: string;
  caution?: string;
}

export interface TaskGuide {
  id: string;
  appId: string;
  title: string;
  summary: string;
  whenToUse: string;
  expectedResult: string;
  category: string;
  difficulty?: 'easy' | 'medium' | 'advanced';
  estimatedTime?: string;
  steps: TaskStep[];
  shortcutsUsed?: string[];
  commonMistakes?: string[];
  versionDifferences?: string;
  commandToRun?: {
    command: string;
    type: 'powershell' | 'cmd' | 'bash';
    caution: string;
  };
  tags: string[];
}

export interface UserCollection {
  id: string;
  title: string;
  description: string;
  icon: string;
  isPredefined?: boolean;
  itemIds: {
    type: 'shortcut' | 'task' | 'software';
    id: string;
    appId?: string;
  }[];
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  preferredPlatform: Platform;
  viewMode: 'grid' | 'table';
  keyboardLayout: 'ru' | 'en';
}

export interface SearchResult {
  id: string;
  type: 'software' | 'shortcut' | 'task';
  appId: string;
  appName: string;
  appIcon: string;
  appColor: string;
  title: string;
  subtitle: string;
  shortcutKeys?: string[];
  category: string;
  score: number;
  matchReason?: string;
  taskData?: TaskGuide;
}

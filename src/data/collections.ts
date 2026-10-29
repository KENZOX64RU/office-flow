import type { UserCollection } from '../types/index.ts';

export const PREDEFINED_COLLECTIONS: UserCollection[] = [
  {
    id: 'col-accounting',
    title: 'Бухгалтер и финансист',
    description: '1С:Бухгалтерия, быстрые отчёты, ОСВ, выгрузка в Excel, проверка контрагентов по ИНН',
    icon: 'Calculator',
    isPredefined: true,
    itemIds: [
      { type: 'software', id: '1c-buh' },
      { type: 'software', id: 'excel' },
      { type: 'shortcut', id: '1c-copy-item', appId: '1c-enterprise' },
      { type: 'shortcut', id: '1c-post-close', appId: '1c-enterprise' },
      { type: 'shortcut', id: '1c-clear-form-cache', appId: '1c-enterprise' },
      { type: 'shortcut', id: 'xl-filter', appId: 'excel' },
      { type: 'shortcut', id: 'xl-autosum', appId: 'excel' },
      { type: 'task', id: '1c-task-generate-osv', appId: '1c-buh' },
      { type: 'task', id: '1c-task-find-counterparty-inn', appId: '1c-buh' },
      { type: 'task', id: 'xl-task-remove-duplicates', appId: 'excel' },
      { type: 'task', id: 'xl-task-vlookup-xlookup', appId: 'excel' }
    ]
  },
  {
    id: 'col-office-daily',
    title: 'Офис на каждый день',
    description: 'Самые эффективные комбинации для Word, Excel, браузера и буфера обмена',
    icon: 'Briefcase',
    isPredefined: true,
    itemIds: [
      { type: 'shortcut', id: 'win-clipboard-history', appId: 'win11' },
      { type: 'shortcut', id: 'win-screenshot-snip', appId: 'win11' },
      { type: 'shortcut', id: 'br-reopen-tab', appId: 'chrome' },
      { type: 'shortcut', id: 'wd-clear-format', appId: 'word' },
      { type: 'shortcut', id: 'wd-cycle-case', appId: 'word' },
      { type: 'shortcut', id: 'xl-special-paste', appId: 'excel' },
      { type: 'shortcut', id: 'xl-line-break', appId: 'excel' },
      { type: 'task', id: 'wd-task-clean-formatting', appId: 'word' },
      { type: 'task', id: 'xl-task-freeze-panes', appId: 'excel' },
      { type: 'task', id: 'xl-task-data-validation-dropdown', appId: 'excel' }
    ]
  },
  {
    id: 'col-sysadmin',
    title: 'Системный администратор & Windows',
    description: 'Диспетчер задач, сетевые команды PowerShell, проверка целостности и горячие клавиши ОС',
    icon: 'Terminal',
    isPredefined: true,
    itemIds: [
      { type: 'software', id: 'powershell' },
      { type: 'software', id: 'taskmgr' },
      { type: 'shortcut', id: 'win-taskmgr-direct', appId: 'win11' },
      { type: 'shortcut', id: 'ps-clear-screen', appId: 'powershell' },
      { type: 'shortcut', id: 'ps-history-search', appId: 'powershell' },
      { type: 'task', id: 'win-task-kill-frozen-app', appId: 'taskmgr' },
      { type: 'task', id: 'ps-task-check-ip-dns', appId: 'powershell' },
      { type: 'task', id: 'ps-task-ping-test', appId: 'powershell' },
      { type: 'task', id: 'ps-task-sfc-scannow', appId: 'powershell' }
    ]
  },
  {
    id: 'col-data-analytics',
    title: 'Таблицы и аналитика данных',
    description: 'Сводные таблицы, поиск значений, условное форматирование и разделение текста',
    icon: 'BarChart3',
    isPredefined: true,
    itemIds: [
      { type: 'software', id: 'excel' },
      { type: 'software', id: 'gsheets' },
      { type: 'software', id: 'powerbi' },
      { type: 'shortcut', id: 'xl-create-table', appId: 'excel' },
      { type: 'shortcut', id: 'xl-format-cells', appId: 'excel' },
      { type: 'shortcut', id: 'xl-show-formulas', appId: 'excel' },
      { type: 'task', id: 'xl-task-pivot-table', appId: 'excel' },
      { type: 'task', id: 'xl-task-text-to-columns', appId: 'excel' },
      { type: 'task', id: 'xl-task-highlight-duplicates', appId: 'excel' }
    ]
  }
];

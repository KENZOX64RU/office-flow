import type { Shortcut } from '../../types/index.ts';

export const M365_SHORTCUTS: Shortcut[] = [
  // --- Навигация по порталу и глобальный поиск ---
  {
    id: 'm365-app-launcher',
    appId: 'm365',
    title: 'Открыть меню запуска приложений («Вафельница» / App Launcher)',
    description: 'Открывает сетку 9 точек в левом верхнем углу портала для мгновенного переключения между Word, Excel, Teams, SharePoint и OneDrive',
    keys: {
      windows: ['Alt', 'W'],
      macos: ['Option', 'W'],
      web: ['Alt', 'W']
    },
    category: 'Портал и навигация',
    popularity: 99
  },
  {
    id: 'm365-global-search',
    appId: 'm365',
    title: 'Корпоративный поиск Microsoft Search',
    description: 'Фокусирует курсор в верхней строке поиска для поиска файлов, коллег, переписок Teams и сайтов SharePoint по всей организации',
    keys: {
      windows: ['Alt', 'Q'],
      macos: ['Option', 'Q'],
      web: ['Alt', 'Q']
    },
    category: 'Портал и навигация',
    popularity: 98
  },
  {
    id: 'm365-office-key',
    appId: 'm365',
    title: 'Запуск приложения Microsoft 365 (Office Hub)',
    description: 'Системное глобальное сочетание клавиш Windows для открытия единого стартового хаба Microsoft 365',
    keys: {
      windows: ['Win', 'Ctrl', 'Alt', 'Shift']
    },
    category: 'Портал и навигация',
    popularity: 92,
    notes: 'Специальная аппаратная комбинация клавиш Office на фирменных клавиатурах Microsoft'
  },
  {
    id: 'm365-share-dialog',
    appId: 'm365',
    title: 'Открыть диалог совместного доступа (Share)',
    description: 'Открывает окно генерации облачной ссылки с настройкой прав (просмотр, редактирование, запрет скачивания)',
    keys: {
      windows: ['Ctrl', 'Shift', 'S'],
      macos: ['Cmd', 'Shift', 'S'],
      web: ['Ctrl', 'Shift', 'S']
    },
    category: 'Совместная работа',
    popularity: 97
  },
  {
    id: 'm365-comments-pane',
    appId: 'm365',
    title: 'Открыть панель комментариев документа',
    description: 'Разворачивает правую панель со всеми комментариями, цепочками обсуждений и нерешенными вопросами',
    keys: {
      windows: ['Alt', 'Shift', 'C'],
      macos: ['Option', 'Shift', 'C'],
      web: ['Alt', 'Shift', 'C']
    },
    category: 'Совместная работа',
    popularity: 94
  },
  {
    id: 'm365-insert-comment',
    appId: 'm365',
    title: 'Вставить новый комментарий в документ',
    description: 'Создает заметку к выделенному фрагменту с возможностью упомянуть коллегу через @mentions',
    keys: {
      windows: ['Ctrl', 'Alt', 'M'],
      macos: ['Cmd', 'Option', 'M'],
      web: ['Ctrl', 'Alt', 'M']
    },
    category: 'Совместная работа',
    popularity: 96
  },
  {
    id: 'm365-version-history',
    appId: 'm365',
    title: 'Просмотр истории версий в облаке OneDrive/SharePoint',
    description: 'Открывает хронологический список автосохранений документа для сравнения изменений и отката правок',
    keys: {
      windows: ['Alt', 'F', 'I', 'V'],
      web: ['Файл → Сведения → Журнал версий']
    },
    category: 'Совместная работа',
    popularity: 91
  },
  {
    id: 'm365-dictate',
    appId: 'm365',
    title: 'Голосовой ввод текста (Диктовка / Dictate)',
    description: 'Включает распознавание речи на базе ИИ Azure Speech для набора текста голосом с автопунктуацией',
    keys: {
      windows: ['Alt', '`'],
      macos: ['Option', '`'],
      web: ['Alt', '`']
    },
    category: 'Интеллектуальные функции',
    popularity: 95
  },
  {
    id: 'm365-immersive-reader',
    appId: 'm365',
    title: 'Включить иммерсивное чтение (Immersive Reader)',
    description: 'Переводит документ в специальный режим чтения вслух с регулировкой шрифта, межстрочного интервала и подсветкой частей речи',
    keys: {
      windows: ['Alt', 'Shift', 'R'],
      macos: ['Option', 'Shift', 'R'],
      web: ['Alt', 'W', 'R']
    },
    category: 'Интеллектуальные функции',
    popularity: 89
  },

  // --- Microsoft Loop ---
  {
    id: 'm365-loop-slash-menu',
    appId: 'm365',
    title: 'Меню вставки компонентов Loop («Слэш-меню»)',
    description: 'В рабочей области Loop или компоненте открывает каталог живых элементов: списки задач, таблицы, голосования, таймлайны',
    keys: {
      windows: ['/'],
      macos: ['/'],
      web: ['/']
    },
    category: 'Microsoft Loop',
    popularity: 99
  },
  {
    id: 'm365-loop-mention-doc',
    appId: 'm365',
    title: 'Упоминание документа или коллеги в Loop (@mentions)',
    description: 'Связывает рабочее пространство с файлом Word/Excel или призывает соавтора с автоматической выдачей прав',
    keys: {
      windows: ['@'],
      macos: ['@'],
      web: ['@']
    },
    category: 'Microsoft Loop',
    popularity: 96
  },
  {
    id: 'm365-loop-task-list',
    appId: 'm365',
    title: 'Создать список задач Loop с синхронизацией в Planner',
    description: 'Вставляет интерактивный список поручений с назначением исполнителей и сроков, синхронизируемый с Planner и To Do',
    keys: {
      windows: ['Ctrl', 'Shift', 'L'],
      macos: ['Cmd', 'Shift', 'L']
    },
    category: 'Microsoft Loop',
    popularity: 92
  },

  // --- Microsoft Teams ---
  {
    id: 'm365-teams-mute',
    appId: 'm365',
    title: 'Включить / отключить микрофон во время звонка Teams',
    description: 'Мгновенное переключение звука микрофона во время онлайн-собрания',
    keys: {
      windows: ['Ctrl', 'Shift', 'M'],
      macos: ['Cmd', 'Shift', 'M'],
      web: ['Ctrl', 'Shift', 'M']
    },
    category: 'Microsoft Teams',
    popularity: 100
  },
  {
    id: 'm365-teams-camera',
    appId: 'm365',
    title: 'Включить / отключить видеокамеру в Teams',
    description: 'Быстрое включение и выключение трансляции веб-камеры на конференции',
    keys: {
      windows: ['Ctrl', 'Shift', 'O'],
      macos: ['Cmd', 'Shift', 'O'],
      web: ['Ctrl', 'Shift', 'O']
    },
    category: 'Microsoft Teams',
    popularity: 97
  },
  {
    id: 'm365-teams-raise-hand',
    appId: 'm365',
    title: 'Поднять / опустить руку на онлайн-собрании Teams',
    description: 'Сигнализирует докладчику о желании задать вопрос без перебивания речи',
    keys: {
      windows: ['Ctrl', 'Shift', 'K'],
      macos: ['Cmd', 'Shift', 'K'],
      web: ['Ctrl', 'Shift', 'K']
    },
    category: 'Microsoft Teams',
    popularity: 95
  },
  {
    id: 'm365-teams-share-screen',
    appId: 'm365',
    title: 'Открыть панель демонстрации экрана в Teams',
    description: 'Открывает окно выбора окна или всего рабочего стола для показа участникам встречи',
    keys: {
      windows: ['Ctrl', 'Shift', 'E'],
      macos: ['Cmd', 'Shift', 'E'],
      web: ['Ctrl', 'Shift', 'E']
    },
    category: 'Microsoft Teams',
    popularity: 98
  },
  {
    id: 'm365-teams-background-blur',
    appId: 'm365',
    title: 'Переключить размытие заднего плана камеры',
    description: 'Мгновенно активирует эффект размытия фона для конфиденциальности обстановки',
    keys: {
      windows: ['Ctrl', 'Shift', 'P'],
      macos: ['Cmd', 'Shift', 'P']
    },
    category: 'Microsoft Teams',
    popularity: 91
  },
  {
    id: 'm365-teams-format-box',
    appId: 'm365',
    title: 'Развернуть расширенное поле форматирования сообщения',
    description: 'Открывает полноценный редактор с темой, заголовками, таблицами, цитатами и пометкой важности',
    keys: {
      windows: ['Ctrl', 'Shift', 'X'],
      macos: ['Cmd', 'Shift', 'X'],
      web: ['Ctrl', 'Shift', 'X']
    },
    category: 'Microsoft Teams',
    popularity: 94
  },
  {
    id: 'm365-teams-search-commands',
    appId: 'm365',
    title: 'Командная строка слэш-команд Teams',
    description: 'Переводит фокус в поиск и вводит слэш: /call, /files, /unread, /activity для быстрого выполнения действий',
    keys: {
      windows: ['Ctrl', 'E'],
      macos: ['Cmd', 'E'],
      web: ['Ctrl', 'E']
    },
    category: 'Microsoft Teams',
    popularity: 90
  },

  // --- OneDrive и SharePoint ---
  {
    id: 'm365-onedrive-sync-status',
    appId: 'm365',
    title: 'Открыть всплывающее окно синхронизации OneDrive',
    description: 'Открывает статус облачной синхронизации, последние файлы и скорость выгрузки из системного трея',
    keys: {
      windows: ['Клик по синему облаку в трее'],
      macos: ['Клик по облаку в Menu Bar']
    },
    category: 'OneDrive и хранилище',
    popularity: 93
  },
  {
    id: 'm365-sharepoint-copy-link',
    appId: 'm365',
    title: 'Скопировать прямую ссылку на документ SharePoint',
    description: 'Генерирует короткую ссылку с текущими правами доступа без открытия полного диалога общего доступа',
    keys: {
      windows: ['Выделить файл → Копировать ссылку'],
      web: ['Ctrl', 'C']
    },
    category: 'OneDrive и хранилище',
    popularity: 91
  },

  // --- Microsoft To Do и Planner ---
  {
    id: 'm365-todo-new-task',
    appId: 'm365',
    title: 'Создать новую задачу в Microsoft To Do',
    description: 'Мгновенно создает строчку ввода задачи в текущем списке или смарт-списке «Мой день»',
    keys: {
      windows: ['Ctrl', 'N'],
      macos: ['Cmd', 'N'],
      web: ['N']
    },
    category: 'Задачи и планирование',
    popularity: 95
  },
  {
    id: 'm365-todo-search',
    appId: 'm365',
    title: 'Поиск по задачам и напоминаниям To Do',
    description: 'Фокусирует поиск по всем спискам дел, прикрепленным файлам и заметкам к задачам',
    keys: {
      windows: ['Ctrl', 'F'],
      macos: ['Cmd', 'F'],
      web: ['Ctrl', 'F']
    },
    category: 'Задачи и планирование',
    popularity: 88
  },

  // --- Microsoft Lists и Forms ---
  {
    id: 'm365-lists-new-item',
    appId: 'm365',
    title: 'Создать новый элемент списка Microsoft Lists',
    description: 'Открывает боковую форму внесения новой строки в корпоративный реестр или трекер активов',
    keys: {
      windows: ['Alt', 'N'],
      web: ['Alt', 'N']
    },
    category: 'Списки и опросы',
    popularity: 89
  },
  {
    id: 'm365-lists-grid-edit',
    appId: 'm365',
    title: 'Редактировать список в режиме сетки (Редактирование в сетке)',
    description: 'Переводит список в режим быстрой табличной правки строк как в Excel (Quick Edit)',
    keys: {
      windows: ['Alt', 'Shift', 'G'],
      web: ['Alt', 'Shift', 'G']
    },
    category: 'Списки и опросы',
    popularity: 92
  }
];

import type { Shortcut } from '../../types/index.ts';

export const OUTLOOK_SHORTCUTS: Shortcut[] = [
  // ==========================================
  // 1. СОЗДАНИЕ И ОТПРАВКА ПИСЕМ
  // ==========================================
  {
    id: "ol-new-mail",
    appId: "outlook",
    title: "Создать новое письмо",
    description: "Открывает окно создания нового электронного сообщения",
    keys: {
      windows: ["Ctrl", "Shift", "M"],
      macos: ["Cmd", "N"],
      web: ["N"]
    },
    category: "Создание и отправка",
    popularity: 99
  },
  {
    id: "ol-send-mail",
    appId: "outlook",
    title: "Отправить открытое письмо",
    description: "Мгновенно отправляет написанное сообщение адресатам",
    keys: {
      windows: ["Ctrl", "Enter"],
      macos: ["Cmd", "Enter"],
      web: ["Ctrl", "Enter"]
    },
    category: "Создание и отправка",
    popularity: 99
  },
  {
    id: "ol-reply",
    appId: "outlook",
    title: "Ответить отправителю",
    description: "Создает ответное письмо автору входящего сообщения",
    keys: {
      windows: ["Ctrl", "R"],
      macos: ["Cmd", "R"],
      web: ["R"]
    },
    category: "Создание и отправка",
    popularity: 98
  },
  {
    id: "ol-reply-all",
    appId: "outlook",
    title: "Ответить всем участникам переписки",
    description: "Создает ответ с включением всех участников в полях «Кому» и «Копия»",
    keys: {
      windows: ["Ctrl", "Shift", "R"],
      macos: ["Cmd", "Shift", "R"],
      web: ["Shift", "R"]
    },
    category: "Создание и отправка",
    popularity: 97
  },
  {
    id: "ol-forward",
    appId: "outlook",
    title: "Переслать письмо",
    description: "Пересылает выбранное сообщение новому адресату со всеми вложениями",
    keys: {
      windows: ["Ctrl", "F"],
      macos: ["Cmd", "J"],
      web: ["Shift", "F"]
    },
    category: "Создание и отправка",
    popularity: 96
  },
  {
    id: "ol-attach-file",
    appId: "outlook",
    title: "Вложить файл в письмо",
    description: "Открывает меню прикрепления локального файла или ссылки на OneDrive",
    keys: {
      windows: ["Alt", "N", "A", "F"],
      macos: ["Cmd", "Option", "A"]
    },
    category: "Создание и отправка",
    popularity: 92
  },
  {
    id: "ol-check-names",
    appId: "outlook",
    title: "Проверить имена адресатов в адресной книге",
    description: "Сопоставляет введенные фамилии и псевдонимы с глобальной адресной книгой (GAL)",
    keys: {
      windows: ["Ctrl", "K"],
      macos: ["Ctrl", "K"]
    },
    category: "Создание и отправка",
    popularity: 88
  },
  {
    id: "ol-save-draft",
    appId: "outlook",
    title: "Сохранить черновик письма",
    description: "Сохраняет текущий текст сообщения в папку «Черновики»",
    keys: {
      windows: ["Ctrl", "S"],
      macos: ["Cmd", "S"],
      web: ["Ctrl", "S"]
    },
    category: "Создание и отправка",
    popularity: 94
  },

  // ==========================================
  // 2. НАВИГАЦИЯ И ПЕРЕКЛЮЧЕНИЕ РАЗДЕЛОВ
  // ==========================================
  {
    id: "ol-switch-mail",
    appId: "outlook",
    title: "Перейти в раздел «Почта»",
    description: "Мгновенно переключает экран в список входящих сообщений",
    keys: {
      windows: ["Ctrl", "1"],
      macos: ["Cmd", "1"],
      web: ["Ctrl", "1"]
    },
    category: "Навигация и разделы",
    popularity: 98
  },
  {
    id: "ol-switch-calendar",
    appId: "outlook",
    title: "Перейти в раздел «Календарь»",
    description: "Переключает вид в рабочий календарь и расписание встреч",
    keys: {
      windows: ["Ctrl", "2"],
      macos: ["Cmd", "2"],
      web: ["Ctrl", "2"]
    },
    category: "Навигация и разделы",
    popularity: 98
  },
  {
    id: "ol-switch-contacts",
    appId: "outlook",
    title: "Перейти в раздел «Контакты» (Люди)",
    description: "Открывает адресную книгу и список контрагентов",
    keys: {
      windows: ["Ctrl", "3"],
      macos: ["Cmd", "3"],
      web: ["Ctrl", "3"]
    },
    category: "Навигация и разделы",
    popularity: 90
  },
  {
    id: "ol-switch-tasks",
    appId: "outlook",
    title: "Перейти в раздел «Задачи» (To Do)",
    description: "Открывает список дел, флажков и поручений",
    keys: {
      windows: ["Ctrl", "4"],
      macos: ["Cmd", "4"],
      web: ["Ctrl", "4"]
    },
    category: "Навигация и разделы",
    popularity: 89
  },
  {
    id: "ol-switch-notes",
    appId: "outlook",
    title: "Перейти в раздел «Заметки»",
    description: "Открывает стикеры и быстрые текстовые заметки Outlook",
    keys: {
      windows: ["Ctrl", "5"],
      macos: ["Cmd", "5"]
    },
    category: "Навигация и разделы",
    popularity: 76
  },
  {
    id: "ol-go-to-folder",
    appId: "outlook",
    title: "Перейти в любую папку почты (Go to Folder)",
    description: "Открывает список всех папок для мгновенного перехода по первым буквам названия",
    keys: {
      windows: ["Ctrl", "Y"],
      macos: ["Cmd", "Shift", "M"]
    },
    category: "Навигация и разделы",
    popularity: 91
  },

  // ==========================================
  // 3. РАБОТА С ПИСЬМАМИ И СОРТИРОВКА
  // ==========================================
  {
    id: "ol-mark-as-read",
    appId: "outlook",
    title: "Пометить письмо как прочитанное",
    description: "Снимает флаг непрочитанного сообщения со списка",
    keys: {
      windows: ["Ctrl", "Q"],
      macos: ["Cmd", "T"],
      web: ["Q"]
    },
    category: "Сортировка и обработка",
    popularity: 97
  },
  {
    id: "ol-mark-as-unread",
    appId: "outlook",
    title: "Пометить письмо как непрочитанное",
    description: "Возвращает статус непрочитанного (жирный шрифт) для повторного изучения",
    keys: {
      windows: ["Ctrl", "U"],
      macos: ["Cmd", "Shift", "T"],
      web: ["U"]
    },
    category: "Сортировка и обработка",
    popularity: 96
  },
  {
    id: "ol-archive-message",
    appId: "outlook",
    title: "Быстрое архивирование письма (Archive)",
    description: "В 1 нажатие убирает письмо из Входящих в папку «Архив» для поддержания Inbox Zero",
    keys: {
      windows: ["Backspace"],
      macos: ["Ctrl", "E"],
      web: ["E"]
    },
    category: "Сортировка и обработка",
    popularity: 96
  },
  {
    id: "ol-delete-message",
    appId: "outlook",
    title: "Удалить письмо в корзину",
    description: "Перемещает выбранные письма в папку «Удаленные»",
    keys: {
      windows: ["Delete"],
      macos: ["Delete"],
      web: ["Delete"]
    },
    category: "Сортировка и обработка",
    popularity: 98
  },
  {
    id: "ol-permanent-delete",
    appId: "outlook",
    title: "Безвозвратное удаление письма (мимо корзины)",
    description: "Удаляет письмо напрямую с сервера, не засоряя папку «Удаленные»",
    keys: {
      windows: ["Shift", "Delete"],
      macos: ["Shift", "Delete"],
      web: ["Shift", "Delete"]
    },
    category: "Сортировка и обработка",
    popularity: 91
  },
  {
    id: "ol-flag-for-follow-up",
    appId: "outlook",
    title: "Установить флаг к исполнению (Follow Up)",
    description: "Помечает письмо красным флажком и создает связанную задачу в To Do",
    keys: {
      windows: ["Insert"],
      macos: ["Cmd", "Shift", "L"],
      web: ["Insert"]
    },
    category: "Сортировка и обработка",
    popularity: 94
  },
  {
    id: "ol-move-to-folder",
    appId: "outlook",
    title: "Переместить письмо в выбранную папку",
    description: "Открывает диалог выбора папки для переноса цепочки сообщений",
    keys: {
      windows: ["Ctrl", "Shift", "V"],
      macos: ["Cmd", "Shift", "M"],
      web: ["V"]
    },
    category: "Сортировка и обработка",
    popularity: 95
  },
  {
    id: "ol-categorize-message",
    appId: "outlook",
    title: "Назначить цветовую категорию",
    description: "Открывает меню назначения цветовых тегов выбранному письму или встрече",
    keys: {
      windows: ["Alt", "H", "A", "C"],
      macos: ["Cmd", "Shift", "C"]
    },
    category: "Сортировка и обработка",
    popularity: 87
  },

  // ==========================================
  // 4. ПОИСК И ФИЛЬТРАЦИЯ
  // ==========================================
  {
    id: "ol-instant-search",
    appId: "outlook",
    title: "Активировать строку мгновенного поиска",
    description: "Фокусирует курсор в строке поиска по теме, отправителю и тексту писем",
    keys: {
      windows: ["Ctrl", "E"],
      macos: ["Cmd", "F"],
      web: ["Alt", "Q"]
    },
    category: "Поиск и фильтрация",
    popularity: 99
  },
  {
    id: "ol-advanced-find",
    appId: "outlook",
    title: "Открыть окно «Расширенный поиск»",
    description: "Вызывает классическое окно фильтрации по размеру вложений, датам, BCC и флажкам",
    keys: {
      windows: ["Ctrl", "Shift", "F"],
      macos: ["Cmd", "Shift", "F"]
    },
    category: "Поиск и фильтрация",
    popularity: 91
  },
  {
    id: "ol-filter-unread",
    appId: "outlook",
    title: "Быстрый фильтр непрочитанных писем",
    description: "Скрывает все прочитанные письма, оставляя во входящих только непросмотренные",
    keys: {
      windows: ["Ctrl", "Alt", "U"],
      macos: ["Cmd", "Shift", "O"]
    },
    category: "Поиск и фильтрация",
    popularity: 93
  },
  {
    id: "ol-clear-search",
    appId: "outlook",
    title: "Очистить результаты поиска",
    description: "Сбрасывает поисковый запрос и возвращает полный список сообщений папки",
    keys: {
      windows: ["Esc"],
      macos: ["Esc"],
      web: ["Esc"]
    },
    category: "Поиск и фильтрация",
    popularity: 96
  },

  // ==========================================
  // 5. КАЛЕНДАРЬ И ВСТРЕЧИ
  // ==========================================
  {
    id: "ol-new-appointment",
    appId: "outlook",
    title: "Создать персональную встречу (Appointment)",
    description: "Бронирует слот в личном календаре без приглашения внешних участников",
    keys: {
      windows: ["Ctrl", "Shift", "A"],
      macos: ["Cmd", "N"],
      web: ["Ctrl", "Shift", "A"]
    },
    category: "Календарь и встречи",
    popularity: 95
  },
  {
    id: "ol-new-meeting",
    appId: "outlook",
    title: "Создать собрание с участниками (Meeting)",
    description: "Открывает форму создания встречи с полями для приглашения коллег и выбора комнат",
    keys: {
      windows: ["Ctrl", "Shift", "Q"],
      macos: ["Cmd", "Option", "N"],
      web: ["Shift", "N"]
    },
    category: "Календарь и встречи",
    popularity: 97
  },
  {
    id: "ol-cal-view-day",
    appId: "outlook",
    title: "Вид календаря: «День»",
    description: "Переключает отображение на почасовую сетку одного текущего дня",
    keys: {
      windows: ["Ctrl", "Alt", "1"],
      macos: ["Cmd", "Option", "1"]
    },
    category: "Календарь и встречи",
    popularity: 89
  },
  {
    id: "ol-cal-view-work-week",
    appId: "outlook",
    title: "Вид календаря: «Рабочая неделя»",
    description: "Показывает расписание с понедельника по пятницу без выходных",
    keys: {
      windows: ["Ctrl", "Alt", "2"],
      macos: ["Cmd", "Option", "2"]
    },
    category: "Календарь и встречи",
    popularity: 94
  },
  {
    id: "ol-cal-view-full-week",
    appId: "outlook",
    title: "Вид календаря: «Полная неделя» (7 дней)",
    description: "Отображает расписание на все 7 дней недели",
    keys: {
      windows: ["Ctrl", "Alt", "3"],
      macos: ["Cmd", "Option", "3"]
    },
    category: "Календарь и встречи",
    popularity: 88
  },
  {
    id: "ol-cal-view-month",
    appId: "outlook",
    title: "Вид календаря: «Месяц»",
    description: "Обзорная сетка на весь текущий месяц для долгосрочного планирования",
    keys: {
      windows: ["Ctrl", "Alt", "4"],
      macos: ["Cmd", "Option", "4"]
    },
    category: "Календарь и встречи",
    popularity: 91
  },
  {
    id: "ol-cal-today",
    appId: "outlook",
    title: "Вернуться к сегодняшней дате",
    description: "Мгновенно центрирует календарь на сегодняшнем дне",
    keys: {
      windows: ["Alt", "H", "O", "D"],
      macos: ["Cmd", "T"],
      web: ["T"]
    },
    category: "Календарь и встречи",
    popularity: 93
  },
  {
    id: "ol-cal-goto-date",
    appId: "outlook",
    title: "Перейти к конкретной дате (Go to Date)",
    description: "Открывает диалог быстрого ввода любой даты для прыжка в прошлое или будущее",
    keys: {
      windows: ["Ctrl", "G"],
      macos: ["Cmd", "G"]
    },
    category: "Календарь и встречи",
    popularity: 87
  },

  // ==========================================
  // 6. КОНТАКТЫ И ЗАДАЧИ
  // ==========================================
  {
    id: "ol-new-contact",
    appId: "outlook",
    title: "Создать новый контакт",
    description: "Открывает карточку для сохранения ФИО, email, телефона и компании контрагента",
    keys: {
      windows: ["Ctrl", "Shift", "C"],
      macos: ["Cmd", "N"],
      web: ["N в Контактах"]
    },
    category: "Контакты и задачи",
    popularity: 92
  },
  {
    id: "ol-new-contact-group",
    appId: "outlook",
    title: "Создать группу контактов (список рассылки)",
    description: "Позволяет отправлять письмо целому отделу или проектной группе одним именем",
    keys: {
      windows: ["Ctrl", "Shift", "L"],
      macos: ["Cmd", "Shift", "N"]
    },
    category: "Контакты и задачи",
    popularity: 85
  },
  {
    id: "ol-open-address-book",
    appId: "outlook",
    title: "Открыть глобальную адресную книгу",
    description: "Открывает справочник сотрудников компании с поиском по должностям и отделам",
    keys: {
      windows: ["Ctrl", "Shift", "B"],
      macos: ["Cmd", "Shift", "B"]
    },
    category: "Контакты и задачи",
    popularity: 91
  },
  {
    id: "ol-new-task",
    appId: "outlook",
    title: "Создать новую задачу",
    description: "Открывает форму постановки задачи со сроком выполнения, статусом и напоминанием",
    keys: {
      windows: ["Ctrl", "Shift", "K"],
      macos: ["Cmd", "N в Задачах"],
      web: ["N в To Do"]
    },
    category: "Контакты и задачи",
    popularity: 90
  },

  // ==========================================
  // 7. СИНХРОНИЗАЦИЯ, ОКНА И СЕРВИС
  // ==========================================
  {
    id: "ol-send-receive-all",
    appId: "outlook",
    title: "Принудительно отправить и получить всю почту",
    description: "Инициирует немедленный опрос почтовых серверов для всех учетных записей",
    keys: {
      windows: ["F9"],
      macos: ["Cmd", "K"],
      web: ["F9"]
    },
    category: "Синхронизация и сервис",
    popularity: 98
  },
  {
    id: "ol-send-receive-current-folder",
    appId: "outlook",
    title: "Обновить только текущую папку",
    description: "Синхронизирует с сервером только открытую в данный момент папку",
    keys: {
      windows: ["Shift", "F9"],
      macos: ["Cmd", "R в списке"]
    },
    category: "Синхронизация и сервис",
    popularity: 86
  },
  {
    id: "ol-toggle-reading-pane",
    appId: "outlook",
    title: "Включить / скрыть область чтения писем",
    description: "Переключает режим предварительного просмотра текста письма справа или снизу",
    keys: {
      windows: ["Alt", "V", "P", "R"],
      macos: ["Cmd", "Option", "R"]
    },
    category: "Синхронизация и сервис",
    popularity: 87
  },
  {
    id: "ol-toggle-to-do-bar",
    appId: "outlook",
    title: "Показать панель «Список дел» (To-Do Bar)",
    description: "Раскрывает правый боковой виджет с мини-календарем и списком предстоящих встреч",
    keys: {
      windows: ["Alt", "V", "B", "T"],
      macos: ["Cmd", "Option", "T"]
    },
    category: "Синхронизация и сервис",
    popularity: 84
  },
  {
    id: "ol-close-window",
    appId: "outlook",
    title: "Закрыть открытое письмо или диалог",
    description: "Закрывает отдельное окно сообщения с сохранением изменений в черновиках",
    keys: {
      windows: ["Esc"],
      macos: ["Cmd", "W"],
      web: ["Esc"]
    },
    category: "Синхронизация и сервис",
    popularity: 96
  }
];

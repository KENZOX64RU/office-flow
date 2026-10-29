import type { Shortcut } from '../../types/index.ts';

export const ACCESS_SHORTCUTS: Shortcut[] = [
  // --- Таблицы и редактирование записей ---
  {
    id: 'acc-new-record',
    appId: 'access',
    title: 'Создать новую запись в конце таблицы',
    description: 'Перемещает фокус ввода на новую пустую строку в режиме таблицы (Datasheet) или чистый бланк формы',
    keys: {
      windows: ['Ctrl', '+']
    },
    category: 'Ввод и редактирование',
    popularity: 98
  },
  {
    id: 'acc-save-record',
    appId: 'access',
    title: 'Сохранить текущую запись в базу данных',
    description: 'Немедленно фиксирует все изменения активной записи на диск без необходимости переходить на другую строку',
    keys: {
      windows: ['Shift', 'Enter']
    },
    category: 'Ввод и редактирование',
    popularity: 100
  },
  {
    id: 'acc-cancel-changes-field',
    appId: 'access',
    title: 'Отменить изменения в текущем поле',
    description: 'Возвращает исходное значение текущей ячейки до подтверждения ввода',
    keys: {
      windows: ['Esc']
    },
    category: 'Ввод и редактирование',
    popularity: 94
  },
  {
    id: 'acc-cancel-changes-record',
    appId: 'access',
    title: 'Отменить все изменения во всей текущей записи',
    description: 'Сбрасывает все несохраненные правки во всех полях активной строки, восстанавливая исходную запись',
    keys: {
      windows: ['Esc', 'Esc']
    },
    category: 'Ввод и редактирование',
    popularity: 95
  },
  {
    id: 'acc-delete-record',
    appId: 'access',
    title: 'Удалить текущую запись',
    description: 'Удаляет выделенную запись из таблицы с запросом подтверждения целостности связей',
    keys: {
      windows: ['Ctrl', '-']
    },
    category: 'Ввод и редактирование',
    popularity: 92
  },
  {
    id: 'acc-insert-date',
    appId: 'access',
    title: 'Вставить текущую системную дату',
    description: 'Подставляет сегодняшнюю дату в формате системы в активное поле даты',
    keys: {
      windows: ['Ctrl', ';']
    },
    category: 'Ввод и редактирование',
    popularity: 96
  },
  {
    id: 'acc-insert-time',
    appId: 'access',
    title: 'Вставить текущее системное время',
    description: 'Подставляет точное текущее время (часы и минуты) в активное поле',
    keys: {
      windows: ['Ctrl', 'Shift', ';']
    },
    category: 'Ввод и редактирование',
    popularity: 93
  },
  {
    id: 'acc-copy-above',
    appId: 'access',
    title: 'Скопировать значение из поля предыдущей записи',
    description: 'Мгновенно дублирует значение из той же колонки верхней записи в текущую ячейку (экспресс-заполнение)',
    keys: {
      windows: ['Ctrl', "'"]
    },
    category: 'Ввод и редактирование',
    popularity: 97
  },
  {
    id: 'acc-insert-default-value',
    appId: 'access',
    title: 'Вставить значение по умолчанию для поля',
    description: 'Подставляет определенное в схеме таблицы значение по умолчанию (Default Value)',
    keys: {
      windows: ['Ctrl', 'Alt', 'Space']
    },
    category: 'Ввод и редактирование',
    popularity: 88
  },
  {
    id: 'acc-insert-newline-text',
    appId: 'access',
    title: 'Перенос строки внутри длинного текстового поля (Memo / Long Text)',
    description: 'Вставляет символ возврата каретки и новой строки без перехода на следующую запись таблицы',
    keys: {
      windows: ['Ctrl', 'Enter']
    },
    category: 'Ввод и редактирование',
    popularity: 91
  },

  // --- Навигация и режимы отображения ---
  {
    id: 'acc-design-view',
    appId: 'access',
    title: 'Переключиться в режим конструктора (Design View)',
    description: 'Открывает выбранную таблицу, форму, запрос или отчет для редактирования структуры, полей и свойств',
    keys: {
      windows: ['Ctrl', 'Alt', 'D']
    },
    category: 'Навигация и режимы',
    popularity: 97
  },
  {
    id: 'acc-datasheet-view',
    appId: 'access',
    title: 'Переключиться в режим таблицы (Datasheet View)',
    description: 'Переводит объект в табличный режим просмотра и заполнения записей',
    keys: {
      windows: ['F5']
    },
    category: 'Навигация и режимы',
    popularity: 95
  },
  {
    id: 'acc-navigation-pane',
    appId: 'access',
    title: 'Скрыть или показать панель навигации (Navigation Pane)',
    description: 'Разворачивает или сворачивает левую панель со списком всех объектов базы данных',
    keys: {
      windows: ['F11']
    },
    category: 'Интерфейс',
    popularity: 99
  },
  {
    id: 'acc-open-selected-object',
    appId: 'access',
    title: 'Открыть выделенный объект в панели навигации',
    description: 'Открывает выбранную таблицу, форму, запрос или отчет в стандартном режиме',
    keys: {
      windows: ['Enter']
    },
    category: 'Интерфейс',
    popularity: 92
  },
  {
    id: 'acc-open-selected-design',
    appId: 'access',
    title: 'Открыть объект из панели навигации сразу в конструкторе',
    description: 'Открывает выделенный объект непосредственно в режиме редактирования структуры',
    keys: {
      windows: ['Ctrl', 'Enter']
    },
    category: 'Интерфейс',
    popularity: 90
  },
  {
    id: 'acc-relationships',
    appId: 'access',
    title: 'Открыть схему данных (Relationships Window)',
    description: 'Открывает графическую диаграмму связей между первичными и внешними ключами таблиц',
    keys: {
      windows: ['Alt', 'J', 'R']
    },
    category: 'Схема данных',
    popularity: 96,
    notes: 'Ленточная последовательность: вкладка «Работа с базами данных» → «Схема данных»'
  },
  {
    id: 'acc-goto-first-record',
    appId: 'access',
    title: 'Перейти к первой записи таблицы или формы',
    description: 'Мгновенно перемещает фокус на самую первую строку набора данных',
    keys: {
      windows: ['Ctrl', 'Home']
    },
    category: 'Навигация и режимы',
    popularity: 89
  },
  {
    id: 'acc-goto-last-record',
    appId: 'access',
    title: 'Перейти к последней существующей записи',
    description: 'Перемещает фокус на последнюю заполненную строку таблицы',
    keys: {
      windows: ['Ctrl', 'End']
    },
    category: 'Навигация и режимы',
    popularity: 90
  },

  // --- Конструктор запросов и SQL ---
  {
    id: 'acc-run-query',
    appId: 'access',
    title: 'Выполнить запрос (Run Query)',
    description: 'Запускает выполнение запроса на выборку или исполнение действия (UPDATE, INSERT, DELETE)',
    keys: {
      windows: ['Alt', 'F5']
    },
    category: 'Запросы и SQL',
    popularity: 99
  },
  {
    id: 'acc-run-query-exclamation',
    appId: 'access',
    title: 'Кнопка «Выполнить» на ленте конструктора',
    description: 'Активирует красный восклицательный знак «Выполнить» на вкладке конструктора запросов',
    keys: {
      windows: ['Alt', 'J', 'Q', 'X']
    },
    category: 'Запросы и SQL',
    popularity: 94
  },
  {
    id: 'acc-show-table-dialog',
    appId: 'access',
    title: 'Диалог добавления таблиц в конструктор запросов (Show Table)',
    description: 'Открывает панель добавления таблиц и представлений на холст связей запроса',
    keys: {
      windows: ['Alt', 'Q', 'T']
    },
    category: 'Запросы и SQL',
    popularity: 91
  },
  {
    id: 'acc-sql-view',
    appId: 'access',
    title: 'Переключиться в режим SQL View',
    description: 'Открывает окно редактирования текстового SQL-кода запроса (SELECT, JOIN, WHERE, GROUP BY)',
    keys: {
      windows: ['Alt', 'H', 'W', 'S']
    },
    category: 'Запросы и SQL',
    popularity: 95
  },

  // --- Конструктор форм и отчетов ---
  {
    id: 'acc-property-sheet',
    appId: 'access',
    title: 'Окно свойств объекта (Property Sheet)',
    description: 'Открывает панель подробных свойств активного элемента управления, секции или формы (F4 / Alt + Enter)',
    keys: {
      windows: ['F4']
    },
    category: 'Формы и отчеты',
    popularity: 100
  },
  {
    id: 'acc-property-sheet-alt',
    appId: 'access',
    title: 'Окно свойств через Alt + Enter',
    description: 'Альтернативная комбинация вызова окна свойств выделенного элемента',
    keys: {
      windows: ['Alt', 'Enter']
    },
    category: 'Формы и отчеты',
    popularity: 96
  },
  {
    id: 'acc-zoom-box',
    appId: 'access',
    title: 'Окно детального ввода формул и текста Zoom Box',
    description: 'Открывает большое модальное окно для удобного редактирования длинных выражений, SQL-условий и текста',
    keys: {
      windows: ['Shift', 'F2']
    },
    category: 'Формы и отчеты',
    popularity: 98
  },
  {
    id: 'acc-expression-builder',
    appId: 'access',
    title: 'Построитель выражений (Expression Builder)',
    description: 'Открывает графический редактор функций, полей и операторов для вычисляемых полей',
    keys: {
      windows: ['Ctrl', 'F2']
    },
    category: 'Формы и отчеты',
    popularity: 92
  },
  {
    id: 'acc-tab-order',
    appId: 'access',
    title: 'Порядок перехода по клавише Tab (Tab Order)',
    description: 'Открывает диалог настройки последовательности перемещения фокуса между полями ввода формы',
    keys: {
      windows: ['Alt', 'J', 'O', 'T']
    },
    category: 'Формы и отчеты',
    popularity: 89
  },
  {
    id: 'acc-field-list',
    appId: 'access',
    title: 'Список доступных полей источника данных (Add Existing Fields)',
    description: 'Открывает панель перетаскивания колонок базовой таблицы или запроса на холст формы или отчета',
    keys: {
      windows: ['Alt', 'F8']
    },
    category: 'Формы и отчеты',
    popularity: 94
  },
  {
    id: 'acc-layout-view',
    appId: 'access',
    title: 'Режим макета (Layout View)',
    description: 'Интерактивное редактирование размеров и выравнивания элементов формы с живыми данными из БД',
    keys: {
      windows: ['Alt', 'H', 'W', 'L']
    },
    category: 'Формы и отчеты',
    popularity: 88
  },
  {
    id: 'acc-print-preview',
    appId: 'access',
    title: 'Предварительный просмотр отчета (Print Preview)',
    description: 'Отображает постраничную верстку отчета перед печатью или экспортом в PDF',
    keys: {
      windows: ['Ctrl', 'F2']
    },
    category: 'Формы и отчеты',
    popularity: 93
  },

  // --- VBA, модули и макросы ---
  {
    id: 'acc-vba-editor',
    appId: 'access',
    title: 'Открыть редактор Visual Basic for Applications (VBA IDE)',
    description: 'Запускает интегрированную среду разработки кода VBA, модулей классов и процедур обработки событий',
    keys: {
      windows: ['Alt', 'F11']
    },
    category: 'VBA и макросы',
    popularity: 99
  },
  {
    id: 'acc-vba-immediate-window',
    appId: 'access',
    title: 'Окно немедленного выполнения (Immediate Window)',
    description: 'В среде VBA открывает консоль выполнения команд и отладочных выводов Debug.Print',
    keys: {
      windows: ['Ctrl', 'G']
    },
    category: 'VBA и макросы',
    popularity: 95
  },
  {
    id: 'acc-vba-compile',
    appId: 'access',
    title: 'Компиляция проекта VBA (Compile Project)',
    description: 'Выполняет полную проверку синтаксиса всех модулей, типов переменных и процедур базы данных',
    keys: {
      windows: ['Alt', 'D', 'C']
    },
    category: 'VBA и макросы',
    popularity: 94
  },
  {
    id: 'acc-vba-step-into',
    appId: 'access',
    title: 'Пошаговая отладка с заходом в процедуру (Step Into)',
    description: 'Построчное выполнение инструкций макроса или процедуры VBA для поиска ошибок',
    keys: {
      windows: ['F8']
    },
    category: 'VBA и макросы',
    popularity: 93
  },
  {
    id: 'acc-vba-toggle-breakpoint',
    appId: 'access',
    title: 'Установить или снять точку останова (Toggle Breakpoint)',
    description: 'Ставит маркер остановки выполнения кода на текущей строке процедуры',
    keys: {
      windows: ['F9']
    },
    category: 'VBA и макросы',
    popularity: 92
  },

  // --- Поиск, фильтры и сервис ---
  {
    id: 'acc-find-replace',
    appId: 'access',
    title: 'Поиск и замена данных в таблице (Find and Replace)',
    description: 'Открывает окно поиска значений по текущему полю или по всей таблице',
    keys: {
      windows: ['Ctrl', 'F']
    },
    category: 'Поиск и фильтры',
    popularity: 97
  },
  {
    id: 'acc-filter-by-selection',
    appId: 'access',
    title: 'Фильтр по выделенному значению (Filter By Selection)',
    description: 'Мгновенно оставляет в таблице только те записи, поле которых совпадает с выделенным значением',
    keys: {
      windows: ['Alt', 'H', 'K', 'S']
    },
    category: 'Поиск и фильтры',
    popularity: 91
  },
  {
    id: 'acc-toggle-filter',
    appId: 'access',
    title: 'Включить / отключить активный фильтр',
    description: 'Быстрое переключение между отфильтрованным списком и полным набором записей',
    keys: {
      windows: ['Alt', 'H', 'Y', '3']
    },
    category: 'Поиск и фильтры',
    popularity: 90
  },
  {
    id: 'acc-compact-repair',
    appId: 'access',
    title: 'Сжатие и восстановление базы данных (Compact & Repair)',
    description: 'Очищает неиспользуемое пространство файла .accdb, дефрагментирует индексы и устраняет ошибки структуры',
    keys: {
      windows: ['Alt', 'F', 'I', 'C']
    },
    category: 'Обслуживание',
    popularity: 96,
    notes: 'Последовательность меню: Файл → Сведения → Сжать и восстановить'
  },
  {
    id: 'acc-select-all-records',
    appId: 'access',
    title: 'Выделить все записи таблицы',
    description: 'Выделяет весь массив строк текущей таблицы или подчинённой формы для пакетного копирования',
    keys: {
      windows: ['Ctrl', 'A']
    },
    category: 'Ввод и редактирование',
    popularity: 93
  },
  {
    id: 'acc-close-active-window',
    appId: 'access',
    title: 'Закрыть активное окно объекта',
    description: 'Закрывает текущую открытую вкладку таблицы, формы, запроса или отчета с запросом на сохранение',
    keys: {
      windows: ['Ctrl', 'W']
    },
    category: 'Интерфейс',
    popularity: 95
  }
];

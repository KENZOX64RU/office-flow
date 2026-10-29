import type { Shortcut } from '../../types/index.ts';

export const LIBRE_CALC_SHORTCUTS: Shortcut[] = [
  {
    id: 'lc-format-cells',
    appId: 'libre-calc',
    title: 'Формат ячеек',
    description: 'Открытие главного диалогового окна настройки формата чисел, шрифта, выравнивания, границ и заливки ячеек.',
    category: 'Форматирование',
    keys: {
      windows: ['Ctrl', '1'],
      linux: ['Ctrl', '1'],
      macos: ['Cmd', '1']
    },
    context: 'При выделении одной или нескольких ячеек',
    popularity: 98
  },
  {
    id: 'lc-format-number-decimal',
    appId: 'libre-calc',
    title: 'Числовой формат с двумя десятичными знаками',
    description: 'Быстрое применение числового формата с разделителями групп разрядов и 2 знаками после запятой.',
    category: 'Форматирование',
    keys: {
      windows: ['Ctrl', 'Shift', '1'],
      linux: ['Ctrl', 'Shift', '1'],
      macos: ['Cmd', 'Shift', '1']
    },
    context: 'Для выделенного диапазона ячеек',
    popularity: 88
  },
  {
    id: 'lc-format-scientific',
    appId: 'libre-calc',
    title: 'Экспоненциальный формат числа',
    description: 'Перевод чисел в научный (экспоненциальный) формат отображения (например, 1,23E+04).',
    category: 'Форматирование',
    keys: {
      windows: ['Ctrl', 'Shift', '2'],
      linux: ['Ctrl', 'Shift', '2'],
      macos: ['Cmd', 'Shift', '2']
    },
    context: 'Для выделенного диапазона ячеек',
    popularity: 70
  },
  {
    id: 'lc-format-date',
    appId: 'libre-calc',
    title: 'Формат даты',
    description: 'Применение стандартного формата даты (ДД.ММ.ГГГГ) к выделенным ячейкам.',
    category: 'Форматирование',
    keys: {
      windows: ['Ctrl', 'Shift', '3'],
      linux: ['Ctrl', 'Shift', '3'],
      macos: ['Cmd', 'Shift', '3']
    },
    context: 'Для выделенного диапазона ячеек',
    popularity: 90
  },
  {
    id: 'lc-format-currency',
    appId: 'libre-calc',
    title: 'Денежный формат',
    description: 'Назначение денежного формата с символом национальной валюты (рубли, евро или доллары согласно локали).',
    category: 'Форматирование',
    keys: {
      windows: ['Ctrl', 'Shift', '4'],
      linux: ['Ctrl', 'Shift', '4'],
      macos: ['Cmd', 'Shift', '4']
    },
    context: 'Для выделенного диапазона ячеек',
    popularity: 94
  },
  {
    id: 'lc-format-percent',
    appId: 'libre-calc',
    title: 'Процентный формат',
    description: 'Преобразование числовых значений в проценты с двумя знаками после запятой (например, 0,15 → 15,00%).',
    category: 'Форматирование',
    keys: {
      windows: ['Ctrl', 'Shift', '5'],
      linux: ['Ctrl', 'Shift', '5'],
      macos: ['Cmd', 'Shift', '5']
    },
    context: 'Для выделенного диапазона ячеек',
    popularity: 92
  },
  {
    id: 'lc-format-standard',
    appId: 'libre-calc',
    title: 'Стандартный общий формат',
    description: 'Сброс специального числового формата ячейки до стандартного («Общий»).',
    category: 'Форматирование',
    keys: {
      windows: ['Ctrl', 'Shift', '6'],
      linux: ['Ctrl', 'Shift', '6'],
      macos: ['Cmd', 'Shift', '6']
    },
    context: 'Для выделенного диапазона ячеек',
    popularity: 82
  },
  {
    id: 'lc-insert-current-date',
    appId: 'libre-calc',
    title: 'Вставка текущей даты',
    description: 'Быстрая вставка сегодняшней фиксированной даты (статическое значение, не меняется при пересчете).',
    category: 'Ввод данных',
    keys: {
      windows: ['Ctrl', ';'],
      linux: ['Ctrl', ';'],
      macos: ['Cmd', ';']
    },
    context: 'В режиме просмотра или ввода ячейки',
    popularity: 95
  },
  {
    id: 'lc-insert-current-time',
    appId: 'libre-calc',
    title: 'Вставка текущего времени',
    description: 'Быстрая вставка статического значения текущего системного времени в формате ЧЧ:ММ:СС.',
    category: 'Ввод данных',
    keys: {
      windows: ['Ctrl', 'Shift', ';'],
      linux: ['Ctrl', 'Shift', ';'],
      macos: ['Cmd', 'Shift', ';']
    },
    context: 'В режиме просмотра или ввода ячейки',
    popularity: 89
  },
  {
    id: 'lc-edit-cell',
    appId: 'libre-calc',
    title: 'Редактирование активной ячейки',
    description: 'Переход в режим редактирования ячейки с установкой текстового курсора в конец строки.',
    category: 'Ввод данных',
    keys: {
      windows: ['F2'],
      linux: ['F2'],
      macos: ['F2']
    },
    context: 'При выделенной ячейке листа',
    popularity: 97
  },
  {
    id: 'lc-func-wizard',
    appId: 'libre-calc',
    title: 'Мастер функций (fx)',
    description: 'Открытие интерактивного мастера построения формул с описанием аргументов и поиском функций.',
    category: 'Формулы и расчеты',
    keys: {
      windows: ['Ctrl', 'F2'],
      linux: ['Ctrl', 'F2'],
      macos: ['Cmd', 'F2']
    },
    context: 'В любой момент редактирования таблицы',
    popularity: 93
  },
  {
    id: 'lc-array-formula',
    appId: 'libre-calc',
    title: 'Ввод формулы массива',
    description: 'Завершение ввода формулы как матричного массива (обрамление в фигурные скобки {=...}).',
    category: 'Формулы и расчеты',
    keys: {
      windows: ['Ctrl', 'Shift', 'Enter'],
      linux: ['Ctrl', 'Shift', 'Enter'],
      macos: ['Cmd', 'Shift', 'Enter']
    },
    context: 'В строке ввода формулы',
    popularity: 87
  },
  {
    id: 'lc-switch-reference-type',
    appId: 'libre-calc',
    title: 'Переключение абсолютных и относительных ссылок',
    description: 'Циклическое изменение адресации ячейки в формуле: A1 → $A$1 → A$1 → $A1 → A1.',
    category: 'Формулы и расчеты',
    keys: {
      windows: ['F4'],
      linux: ['F4'],
      macos: ['F4']
    },
    context: 'Когда текстовый курсор находится внутри имени ячейки в формуле',
    popularity: 96
  },
  {
    id: 'lc-recalculate',
    appId: 'libre-calc',
    title: 'Пересчет формул',
    description: 'Принудительный пересчет всех измененных формул и зависимых ячеек книги.',
    category: 'Формулы и расчеты',
    keys: {
      windows: ['F9'],
      linux: ['F9'],
      macos: ['F9']
    },
    context: 'Глобально в Calc',
    popularity: 89
  },
  {
    id: 'lc-recalculate-hard',
    appId: 'libre-calc',
    title: 'Безусловный полный пересчет (Hard Recalculate)',
    description: 'Полный пересчет всех формул документа с очисткой внутреннего кэша вычислений.',
    category: 'Формулы и расчеты',
    keys: {
      windows: ['Ctrl', 'Shift', 'F9'],
      linux: ['Ctrl', 'Shift', 'F9'],
      macos: ['Cmd', 'Shift', 'F9']
    },
    context: 'Глобально в Calc при несовпадении итогов или обновлении внешних ссылок',
    popularity: 84
  },
  {
    id: 'lc-autofilter',
    appId: 'libre-calc',
    title: 'Включение / выключение автофильтра',
    description: 'Добавление стрелок автофильтра в заголовки столбцов выделенного диапазона данных.',
    category: 'Работа с данными',
    keys: {
      windows: ['Ctrl', 'Shift', 'L'],
      linux: ['Ctrl', 'Shift', 'L'],
      macos: ['Cmd', 'Shift', 'L']
    },
    context: 'В таблице с заголовками столбцов',
    popularity: 95
  },
  {
    id: 'lc-autofilter-dropdown',
    appId: 'libre-calc',
    title: 'Открыть список автофильтра или автозаполнения',
    description: 'Раскрытие выпадающего меню значений фильтра в ячейке заголовка или списка подсказок.',
    category: 'Работа с данными',
    keys: {
      windows: ['Alt', 'Down'],
      linux: ['Alt', 'Down'],
      macos: ['Option', 'Down']
    },
    context: 'На ячейке со значком автофильтра',
    popularity: 86
  },
  {
    id: 'lc-fill-down',
    appId: 'libre-calc',
    title: 'Заполнить вниз',
    description: 'Копирование значения или формулы из верхней ячейки в выделенные ниже ячейки.',
    category: 'Ввод данных',
    keys: {
      windows: ['Ctrl', 'D'],
      linux: ['Ctrl', 'D'],
      macos: ['Cmd', 'D']
    },
    context: 'При выделении диапазона из нескольких ячеек по вертикали',
    popularity: 91
  },
  {
    id: 'lc-fill-right',
    appId: 'libre-calc',
    title: 'Заполнить вправо',
    description: 'Копирование значения или формулы из крайней левой ячейки в выделенные правее ячейки.',
    category: 'Ввод данных',
    keys: {
      windows: ['Ctrl', 'R'],
      linux: ['Ctrl', 'R'],
      macos: ['Cmd', 'R']
    },
    context: 'При выделении диапазона ячеек по горизонтали',
    popularity: 85
  },
  {
    id: 'lc-select-column',
    appId: 'libre-calc',
    title: 'Выделить весь столбец',
    description: 'Мгновенное выделение всех ячеек текущего столбца от 1 до 1 048 576 строки.',
    category: 'Навигация и выделение',
    keys: {
      windows: ['Ctrl', 'Space'],
      linux: ['Ctrl', 'Space'],
      macos: ['Ctrl', 'Space']
    },
    context: 'В любой ячейке таблицы',
    popularity: 90
  },
  {
    id: 'lc-select-row',
    appId: 'libre-calc',
    title: 'Выделить всю строку',
    description: 'Мгновенное выделение всех ячеек текущей строки от столбца A до AMJ (XFD).',
    category: 'Навигация и выделение',
    keys: {
      windows: ['Shift', 'Space'],
      linux: ['Shift', 'Space'],
      macos: ['Shift', 'Space']
    },
    context: 'В любой ячейке таблицы',
    popularity: 90
  },
  {
    id: 'lc-select-sheet',
    appId: 'libre-calc',
    title: 'Выделить весь лист',
    description: 'Выделение всех ячеек текущего листа книги.',
    category: 'Навигация и выделение',
    keys: {
      windows: ['Ctrl', 'Shift', 'Space'],
      linux: ['Ctrl', 'Shift', 'Space'],
      macos: ['Cmd', 'Shift', 'Space']
    },
    context: 'На рабочем листе',
    popularity: 88
  },
  {
    id: 'lc-insert-cells',
    appId: 'libre-calc',
    title: 'Вставить ячейки, строки или столбцы',
    description: 'Вызов диалогового окна вставки новых ячеек со сдвигом, целых строк или столбцов.',
    category: 'Редактирование структуры',
    keys: {
      windows: ['Ctrl', '+'],
      linux: ['Ctrl', '+'],
      macos: ['Cmd', '+']
    },
    context: 'На активной ячейке или диапазоне',
    popularity: 93
  },
  {
    id: 'lc-delete-cells',
    appId: 'libre-calc',
    title: 'Удалить ячейки, строки или столбцы',
    description: 'Вызов диалогового окна удаления выделенных ячеек со сдвигом либо удаление выделенных строк/столбцов.',
    category: 'Редактирование структуры',
    keys: {
      windows: ['Ctrl', '-'],
      linux: ['Ctrl', '-'],
      macos: ['Cmd', '-']
    },
    context: 'На активной ячейке или диапазоне',
    popularity: 93
  },
  {
    id: 'lc-manage-names',
    appId: 'libre-calc',
    title: 'Управление именами диапазонов',
    description: 'Открытие диспетчера именованных диапазонов для создания и редактирования пользовательских имен.',
    category: 'Формулы и расчеты',
    keys: {
      windows: ['Ctrl', 'F3'],
      linux: ['Ctrl', 'F3'],
      macos: ['Cmd', 'F3']
    },
    context: 'В документе с именованными областями',
    popularity: 86
  },
  {
    id: 'lc-toggle-formula-display',
    appId: 'libre-calc',
    title: 'Показать / скрыть формулы в ячейках',
    description: 'Переключение отображения текста формул вместо их рассчитанных числовых значений.',
    category: 'Формулы и расчеты',
    keys: {
      windows: ['Ctrl', '`'],
      linux: ['Ctrl', '`'],
      macos: ['Cmd', '`']
    },
    context: 'Для проверки правильности расчетных цепочек',
    popularity: 89
  },
  {
    id: 'lc-value-highlighting',
    appId: 'libre-calc',
    title: 'Выделение значений цветом',
    description: 'Подсветка типов содержимого ячеек: текст черным, числа и даты синим, формулы зеленым цветом.',
    category: 'Анализ и аудит',
    keys: {
      windows: ['Ctrl', 'F8'],
      linux: ['Ctrl', 'F8'],
      macos: ['Cmd', 'F8']
    },
    context: 'Незаменимо для поиска псевдочисел, сохраненных как текст',
    popularity: 92
  },
  {
    id: 'lc-navigator',
    appId: 'libre-calc',
    title: 'Навигатор Calc',
    description: 'Открытие панели Навигатора со списком листов, диапазонов, графиков, объектов и комментариев.',
    category: 'Навигация и выделение',
    keys: {
      windows: ['F5'],
      linux: ['F5'],
      macos: ['F5']
    },
    context: 'Для быстрой навигации в книгах со множеством листов',
    popularity: 90
  },
  {
    id: 'lc-clear-direct-formatting',
    appId: 'libre-calc',
    title: 'Очистить прямое форматирование',
    description: 'Сброс ручного форматирования (шрифт, цвет, границы) до исходных настроек стиля ячейки.',
    category: 'Форматирование',
    keys: {
      windows: ['Ctrl', 'M'],
      linux: ['Ctrl', 'M'],
      macos: ['Cmd', 'M']
    },
    context: 'При вставке данных из внешних источников',
    popularity: 94
  },
  {
    id: 'lc-styles-sidebar',
    appId: 'libre-calc',
    title: 'Боковая панель стилей',
    description: 'Открытие панели управления стилями ячеек и стилями страниц книги.',
    category: 'Форматирование',
    keys: {
      windows: ['F11'],
      linux: ['F11'],
      macos: ['Cmd', 'T']
    },
    context: 'Для профессиональной верстки таблиц без ручных правок',
    popularity: 87
  },
  {
    id: 'lc-line-break-cell',
    appId: 'libre-calc',
    title: 'Принудительный перенос строки в ячейке',
    description: 'Вставка разрыва строки внутри ячейки для многострочного текста без разделения на строки таблицы.',
    category: 'Ввод данных',
    keys: {
      windows: ['Alt', 'Enter'],
      linux: ['Alt', 'Enter'],
      macos: ['Option', 'Enter']
    },
    context: 'При редактировании текстового содержимого в ячейке',
    popularity: 96
  },
  {
    id: 'lc-insert-comment',
    appId: 'libre-calc',
    title: 'Вставить / изменить примечание',
    description: 'Добавление или редактирование всплывающего комментария к текущей ячейке.',
    category: 'Рецензирование',
    keys: {
      windows: ['Ctrl', 'Alt', 'C'],
      linux: ['Ctrl', 'Alt', 'C'],
      macos: ['Cmd', 'Alt', 'C']
    },
    context: 'На ячейке с важными пометками или пояснениями',
    popularity: 88
  },
  {
    id: 'lc-print-preview',
    appId: 'libre-calc',
    title: 'Предварительный просмотр печати',
    description: 'Переход в режим просмотра страниц перед выводом на принтер или экспортом в PDF.',
    category: 'Печать и экспорт',
    keys: {
      windows: ['Ctrl', 'Shift', 'O'],
      linux: ['Ctrl', 'Shift', 'O'],
      macos: ['Cmd', 'Shift', 'O']
    },
    context: 'Для проверки границ печати и разбиения страниц',
    popularity: 91
  },
  {
    id: 'lc-goto-a1',
    appId: 'libre-calc',
    title: 'Переход к первой ячейке (A1)',
    description: 'Мгновенное перемещение курсора в ячейку A1 текущего листа.',
    category: 'Навигация и выделение',
    keys: {
      windows: ['Ctrl', 'Home'],
      linux: ['Ctrl', 'Home'],
      macos: ['Cmd', 'Fn', 'Left']
    },
    context: 'Из любой точки таблицы',
    popularity: 92
  },
  {
    id: 'lc-goto-last-cell',
    appId: 'libre-calc',
    title: 'Переход к последней заполненной ячейке',
    description: 'Перемещение курсора в крайний нижний правый угол области данных листа.',
    category: 'Навигация и выделение',
    keys: {
      windows: ['Ctrl', 'End'],
      linux: ['Ctrl', 'End'],
      macos: ['Cmd', 'Fn', 'Right']
    },
    context: 'Для быстрой оценки общего размера рабочей таблицы',
    popularity: 90
  },
  {
    id: 'lc-next-sheet',
    appId: 'libre-calc',
    title: 'Следующий лист книги',
    description: 'Переключение на следующую вкладку листа книги вправо.',
    category: 'Навигация и выделение',
    keys: {
      windows: ['Ctrl', 'PageDown'],
      linux: ['Ctrl', 'PageDown'],
      macos: ['Cmd', 'Option', 'Right']
    },
    context: 'В многостраничных табличных документах',
    popularity: 93
  },
  {
    id: 'lc-prev-sheet',
    appId: 'libre-calc',
    title: 'Предыдущий лист книги',
    description: 'Переключение на предыдущую вкладку листа книги влево.',
    category: 'Навигация и выделение',
    keys: {
      windows: ['Ctrl', 'PageUp'],
      linux: ['Ctrl', 'PageUp'],
      macos: ['Cmd', 'Option', 'Left']
    },
    context: 'В многостраничных табличных документах',
    popularity: 93
  },
  {
    id: 'lc-data-sources',
    appId: 'libre-calc',
    title: 'Панель внешних источников данных',
    description: 'Открытие обозревателя подключенных баз данных (ODBC, JDBC, PostgreSQL, MariaDB) для импорта в Calc.',
    category: 'Работа с данными',
    keys: {
      windows: ['Ctrl', 'Shift', 'F4'],
      linux: ['Ctrl', 'Shift', 'F4'],
      macos: ['Cmd', 'Shift', 'F4']
    },
    context: 'Для интеграции с корпоративными SQL базами',
    popularity: 76
  }
];

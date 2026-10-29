import type { Shortcut } from '../../types/index.ts';

export const LIBRE_BASE_SHORTCUTS: Shortcut[] = [
  {
    id: 'lb-data-sources-panel',
    appId: 'libre-base',
    title: 'Панель источников данных',
    description: 'Открытие и закрытие панели подключенных источников данных и зарегистрированных баз в любом документе LibreOffice.',
    category: 'Навигация и доступ',
    keys: {
      windows: ['F4'],
      linux: ['F4'],
      macos: ['F4']
    },
    context: 'Глобально в LibreOffice (Base, Writer, Calc)',
    popularity: 96
  },
  {
    id: 'lb-refresh-execute-query',
    appId: 'libre-base',
    title: 'Выполнить запрос / Обновить данные',
    description: 'Запуск выполнения SQL-запроса в редакторе или обновление набора записей в открытой таблице/форме.',
    category: 'Запросы и SQL',
    keys: {
      windows: ['F5'],
      linux: ['F5'],
      macos: ['F5']
    },
    context: 'В конструкторе запросов, SQL View или табличном представлении',
    popularity: 98
  },
  {
    id: 'lb-relationships-window',
    appId: 'libre-base',
    title: 'Окно связей между таблицами',
    description: 'Открытие схемы связей реляционной базы данных для настройки внешних ключей и целостности данных.',
    category: 'Проектирование схемы',
    keys: {
      windows: ['Ctrl', 'F2'],
      linux: ['Ctrl', 'F2'],
      macos: ['Cmd', 'F2']
    },
    context: 'В главном окне базы данных Base',
    popularity: 92
  },
  {
    id: 'lb-direct-sql-toggle',
    appId: 'libre-base',
    title: 'Прямой SQL-режим (Direct SQL)',
    description: 'Выполнение запроса напрямую сервером СУБД в обход внутреннего парсера LibreOffice (поддержка специфических команд СУБД).',
    category: 'Запросы и SQL',
    keys: {
      windows: ['Ctrl', 'Shift', 'F5'],
      linux: ['Ctrl', 'Shift', 'F5'],
      macos: ['Cmd', 'Shift', 'F5']
    },
    context: 'В режиме SQL View редактора запросов',
    popularity: 88
  },
  {
    id: 'lb-save-object',
    appId: 'libre-base',
    title: 'Сохранить текущий объект',
    description: 'Сохранение структуры таблицы, текста запроса, макета формы или отчета в файл базы данных (.odb).',
    category: 'Управление базой',
    keys: {
      windows: ['Ctrl', 'S'],
      linux: ['Ctrl', 'S'],
      macos: ['Cmd', 'S']
    },
    context: 'В любом конструкторе Base',
    popularity: 99
  },
  {
    id: 'lb-commit-record',
    appId: 'libre-base',
    title: 'Зафиксировать запись (Сохранить строку)',
    description: 'Принудительная запись внесенных изменений текущей строки в базу данных (Commit record).',
    category: 'Работа с данными',
    keys: {
      windows: ['Ctrl', 'Enter'],
      linux: ['Ctrl', 'Enter'],
      macos: ['Cmd', 'Enter']
    },
    context: 'При редактировании строки в таблице или форме',
    popularity: 95
  },
  {
    id: 'lb-revert-record',
    appId: 'libre-base',
    title: 'Отмена изменений записи',
    description: 'Сброс несохраненных изменений в текущей строке до их исходного состояния из базы данных.',
    category: 'Работа с данными',
    keys: {
      windows: ['Esc'],
      linux: ['Esc'],
      macos: ['Esc']
    },
    context: 'Пока текущая строка не зафиксирована (горит значок редактирования карандаша)',
    popularity: 93
  },
  {
    id: 'lb-delete-record',
    appId: 'libre-base',
    title: 'Удалить текущую запись',
    description: 'Удаление выделенной строки из таблицы с запросом подтверждения целостности.',
    category: 'Работа с данными',
    keys: {
      windows: ['Ctrl', 'D'],
      linux: ['Ctrl', 'D'],
      macos: ['Cmd', 'D']
    },
    context: 'В режиме таблицы данных или экранной формы',
    popularity: 91
  },
  {
    id: 'lb-first-record',
    appId: 'libre-base',
    title: 'Переход к первой записи',
    description: 'Мгновенное перемещение курсора на первую строку набора данных.',
    category: 'Навигация по записям',
    keys: {
      windows: ['Ctrl', 'Home'],
      linux: ['Ctrl', 'Home'],
      macos: ['Cmd', 'Fn', 'Left']
    },
    context: 'В таблице данных или форме',
    popularity: 89
  },
  {
    id: 'lb-last-record',
    appId: 'libre-base',
    title: 'Переход к последней записи',
    description: 'Перемещение курсора на крайнюю нижнюю строку загруженного набора данных.',
    category: 'Навигация по записям',
    keys: {
      windows: ['Ctrl', 'End'],
      linux: ['Ctrl', 'End'],
      macos: ['Cmd', 'Fn', 'Right']
    },
    context: 'В таблице данных или форме',
    popularity: 89
  },
  {
    id: 'lb-next-record-field',
    appId: 'libre-base',
    title: 'Следующее поле / ячейка',
    description: 'Переход к следующему столбцу таблицы или следующему элементу управления в форме.',
    category: 'Навигация по записям',
    keys: {
      windows: ['Tab'],
      linux: ['Tab'],
      macos: ['Tab']
    },
    context: 'В таблице данных или экранной форме',
    popularity: 98
  },
  {
    id: 'lb-prev-record-field',
    appId: 'libre-base',
    title: 'Предыдущее поле / ячейка',
    description: 'Возврат к предыдущему столбцу таблицы или предыдущему элементу управления в форме.',
    category: 'Навигация по записям',
    keys: {
      windows: ['Shift', 'Tab'],
      linux: ['Shift', 'Tab'],
      macos: ['Shift', 'Tab']
    },
    context: 'В таблице данных или экранной форме',
    popularity: 94
  },
  {
    id: 'lb-edit-cell',
    appId: 'libre-base',
    title: 'Редактировать значение поля',
    description: 'Переход в режим посимвольного редактирования текстового или числового поля в ячейке таблицы.',
    category: 'Работа с данными',
    keys: {
      windows: ['F2'],
      linux: ['F2'],
      macos: ['F2']
    },
    context: 'На выделенной ячейке таблицы данных',
    popularity: 92
  },
  {
    id: 'lb-find-record',
    appId: 'libre-base',
    title: 'Поиск по записям',
    description: 'Открытие специализированного диалогового окна поиска по колонкам таблицы или полям формы.',
    category: 'Поиск и фильтрация',
    keys: {
      windows: ['Ctrl', 'F'],
      linux: ['Ctrl', 'F'],
      macos: ['Cmd', 'F']
    },
    context: 'В представлении таблицы или формы',
    popularity: 95
  },
  {
    id: 'lb-replace-record',
    appId: 'libre-base',
    title: 'Поиск и замена в таблице',
    description: 'Открытие окна контекстного поиска и массовой замены значений по столбцу.',
    category: 'Поиск и фильтрация',
    keys: {
      windows: ['Ctrl', 'H'],
      linux: ['Ctrl', 'H'],
      macos: ['Cmd', 'H']
    },
    context: 'В табличном представлении данных',
    popularity: 87
  },
  {
    id: 'lb-autofilter-toggle',
    appId: 'libre-base',
    title: 'Автофильтр по выделенному значению',
    description: 'Быстрая фильтрация таблицы данных по значению текущей выделенной ячейки.',
    category: 'Поиск и фильтрация',
    keys: {
      windows: ['Ctrl', 'Shift', 'L'],
      linux: ['Ctrl', 'Shift', 'L'],
      macos: ['Cmd', 'Shift', 'L']
    },
    context: 'В табличной части документа',
    popularity: 89
  },
  {
    id: 'lb-dropdown-expand',
    appId: 'libre-base',
    title: 'Раскрыть выпадающий список (ListBox / ComboBox)',
    description: 'Раскрытие выпадающего перечня справочных значений поля со списком без клика мышью.',
    category: 'Работа с данными',
    keys: {
      windows: ['Alt', 'Down'],
      linux: ['Alt', 'Down'],
      macos: ['Option', 'Down']
    },
    context: 'На элементе управления списка в форме или таблице',
    popularity: 88
  },
  {
    id: 'lb-column-format',
    appId: 'libre-base',
    title: 'Формат столбца таблицы',
    description: 'Открытие диалога настройки формата отображения чисел, валют, дат и выравнивания в столбце.',
    category: 'Проектирование схемы',
    keys: {
      windows: ['Ctrl', '1'],
      linux: ['Ctrl', '1'],
      macos: ['Cmd', '1']
    },
    context: 'При выделении столбца таблицы данных',
    popularity: 86
  },
  {
    id: 'lb-select-all-records',
    appId: 'libre-base',
    title: 'Выделить все записи',
    description: 'Выделение всех строк текущей таблицы данных для последующего копирования в Calc или экспорта.',
    category: 'Работа с данными',
    keys: {
      windows: ['Ctrl', 'A'],
      linux: ['Ctrl', 'A'],
      macos: ['Cmd', 'A']
    },
    context: 'В таблице данных',
    popularity: 90
  },
  {
    id: 'lb-styles-report',
    appId: 'libre-base',
    title: 'Окно стилей в Конструкторе отчетов',
    description: 'Открытие панели управления стилями шрифтов, заголовков и цветовых схем в Report Builder.',
    category: 'Отчеты',
    keys: {
      windows: ['F11'],
      linux: ['F11'],
      macos: ['Cmd', 'T']
    },
    context: 'В конструкторе отчетов (Report Builder)',
    popularity: 84
  },
  {
    id: 'lb-spelling-check',
    appId: 'libre-base',
    title: 'Проверка орфографии в форме',
    description: 'Запуск проверки правописания текстов в многострочных текстовых полях активной формы.',
    category: 'Работа с данными',
    keys: {
      windows: ['F7'],
      linux: ['F7'],
      macos: ['F7']
    },
    context: 'В активном текстовом поле формы',
    popularity: 80
  },
  {
    id: 'lb-reload-form-data',
    appId: 'libre-base',
    title: 'Перезагрузить форму или таблицу',
    description: 'Принудительное повторное считывание данных с сервера СУБД для отображения изменений других пользователей.',
    category: 'Работа с данными',
    keys: {
      windows: ['Ctrl', 'Shift', 'R'],
      linux: ['Ctrl', 'Shift', 'R'],
      macos: ['Cmd', 'Shift', 'R']
    },
    context: 'В форме или таблице при многопользовательском доступе',
    popularity: 92
  },
  {
    id: 'lb-close-subwindow',
    appId: 'libre-base',
    title: 'Закрыть окно конструктора',
    description: 'Закрытие текущего окна редактирования таблицы, формы или запроса с сохранением изменений.',
    category: 'Управление базой',
    keys: {
      windows: ['Ctrl', 'W'],
      linux: ['Ctrl', 'W'],
      macos: ['Cmd', 'W']
    },
    context: 'В любом дочернем окне Base',
    popularity: 94
  },
  {
    id: 'lb-delete-field-schema',
    appId: 'libre-base',
    title: 'Удалить поле в конструкторе таблиц',
    description: 'Удаление выбранного столбца из структуры таблицы или удаление связи между таблицами.',
    category: 'Проектирование схемы',
    keys: {
      windows: ['Delete'],
      linux: ['Delete'],
      macos: ['Delete']
    },
    context: 'В конструкторе таблиц или окне связей',
    popularity: 89
  },
  {
    id: 'lb-create-new-database',
    appId: 'libre-base',
    title: 'Создать новую базу данных',
    description: 'Запуск мастера создания новой базы данных (Firebird Embedded или подключение к серверной СУБД).',
    category: 'Управление базой',
    keys: {
      windows: ['Ctrl', 'N'],
      linux: ['Ctrl', 'N'],
      macos: ['Cmd', 'N']
    },
    context: 'В главном окне приложения Base',
    popularity: 90
  },
  {
    id: 'lb-open-database-file',
    appId: 'libre-base',
    title: 'Открыть файл базы данных (.odb)',
    description: 'Открытие существующего файла контейнера базы данных LibreOffice Base.',
    category: 'Управление базой',
    keys: {
      windows: ['Ctrl', 'O'],
      linux: ['Ctrl', 'O'],
      macos: ['Cmd', 'O']
    },
    context: 'Глобально в Base',
    popularity: 93
  },
  {
    id: 'lb-page-down-records',
    appId: 'libre-base',
    title: 'Следующая страница записей',
    description: 'Прокрутка набора данных на один экран записей вниз.',
    category: 'Навигация по записям',
    keys: {
      windows: ['Ctrl', 'PageDown'],
      linux: ['Ctrl', 'PageDown'],
      macos: ['Cmd', 'Option', 'Right']
    },
    context: 'В таблице данных или форме',
    popularity: 85
  },
  {
    id: 'lb-page-up-records',
    appId: 'libre-base',
    title: 'Предыдущая страница записей',
    description: 'Прокрутка набора данных на один экран записей вверх.',
    category: 'Навигация по записям',
    keys: {
      windows: ['Ctrl', 'PageUp'],
      linux: ['Ctrl', 'PageUp'],
      macos: ['Cmd', 'Option', 'Left']
    },
    context: 'В таблице данных или форме',
    popularity: 85
  },
  {
    id: 'lb-add-selection-mode',
    appId: 'libre-base',
    title: 'Режим расширенного выделения (F8)',
    description: 'Включение режима пошагового выделения смежных строк в табличной части без удержания мыши.',
    category: 'Работа с данными',
    keys: {
      windows: ['F8'],
      linux: ['F8'],
      macos: ['F8']
    },
    context: 'В таблице данных',
    popularity: 76
  },
  {
    id: 'lb-design-view-toggle',
    appId: 'libre-base',
    title: 'Переключение в режим конструктора',
    description: 'Переход из режима ввода данных в режим редактирования макета формы или структуры таблицы.',
    category: 'Проектирование схемы',
    keys: {
      windows: ['Ctrl', 'E'],
      linux: ['Ctrl', 'E'],
      macos: ['Cmd', 'E']
    },
    context: 'В режиме просмотра формы',
    popularity: 87
  },
  {
    id: 'lb-comment-field',
    appId: 'libre-base',
    title: 'Свойства и описание поля',
    description: 'Открытие окна дополнительных параметров и комментариев к выбранному полю таблицы.',
    category: 'Проектирование схемы',
    keys: {
      windows: ['Ctrl', 'Alt', 'C'],
      linux: ['Ctrl', 'Alt', 'C'],
      macos: ['Cmd', 'Alt', 'C']
    },
    context: 'В конструкторе таблиц',
    popularity: 81
  },
  {
    id: 'lb-quit-base',
    appId: 'libre-base',
    title: 'Закрыть базу данных и выйти',
    description: 'Корректное завершение работы с базой данных, закрытие соединений и выход из LibreOffice Base.',
    category: 'Управление базой',
    keys: {
      windows: ['Ctrl', 'Q'],
      linux: ['Ctrl', 'Q'],
      macos: ['Cmd', 'Q']
    },
    context: 'Глобально в приложении',
    popularity: 88
  }
];

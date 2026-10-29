import type { Shortcut } from '../../types/index.ts';

export const ONLYOFFICE_SHORTCUTS: Shortcut[] = [
  {
    id: 'oo-save-file',
    appId: 'onlyoffice',
    title: 'Сохранить документ / зафиксировать версию',
    description: 'Сохранение локального файла в Desktop Editors или отправка изменений на сервер DocSpace/Docs.',
    category: 'Файл и управление',
    keys: {
      windows: ['Ctrl', 'S'],
      linux: ['Ctrl', 'S'],
      macos: ['Cmd', 'S'],
      web: ['Ctrl', 'S']
    },
    context: 'Во всех редакторах ONLYOFFICE',
    popularity: 99
  },
  {
    id: 'oo-save-as',
    appId: 'onlyoffice',
    title: 'Сохранить как...',
    description: 'Сохранение текущего файла в новом формате (DOCX, PDF, ODT, XLSX) или в другую папку.',
    category: 'Файл и управление',
    keys: {
      windows: ['Ctrl', 'Shift', 'S'],
      linux: ['Ctrl', 'Shift', 'S'],
      macos: ['Cmd', 'Shift', 'S'],
      web: ['Ctrl', 'Shift', 'S']
    },
    context: 'В настольных редакторах ONLYOFFICE Desktop Editors',
    popularity: 92
  },
  {
    id: 'oo-paste-unformatted',
    appId: 'onlyoffice',
    title: 'Вставить чистый текст без форматирования',
    description: 'Вставка текста из буфера обмена с очисткой чужих стилей, шрифтов и фоновых подложек.',
    category: 'Ввод и редактирование',
    keys: {
      windows: ['Ctrl', 'Shift', 'V'],
      linux: ['Ctrl', 'Shift', 'V'],
      macos: ['Cmd', 'Shift', 'V'],
      web: ['Ctrl', 'Shift', 'V']
    },
    context: 'В Document, Spreadsheet и Presentation Editor',
    popularity: 96
  },
  {
    id: 'oo-insert-comment-shortcut',
    appId: 'onlyoffice',
    title: 'Добавить комментарий',
    description: 'Создание нового комментария к выделенному тексту, ячейке таблицы или графическому объекту.',
    category: 'Совместная работа',
    keys: {
      windows: ['Ctrl', 'Shift', 'M'],
      linux: ['Ctrl', 'Shift', 'M'],
      macos: ['Cmd', 'Shift', 'M'],
      web: ['Ctrl', 'Shift', 'M']
    },
    context: 'Во всех редакторах при совместном редактировании',
    popularity: 95
  },
  {
    id: 'oo-toggle-track-changes',
    appId: 'onlyoffice',
    title: 'Включить / выключить отслеживание изменений',
    description: 'Переключение режима рецензирования (все удаления зачеркиваются, добавления выделяются цветом автора).',
    category: 'Совместная работа',
    keys: {
      windows: ['Ctrl', 'Shift', 'E'],
      linux: ['Ctrl', 'Shift', 'E'],
      macos: ['Cmd', 'Shift', 'E'],
      web: ['Ctrl', 'Shift', 'E']
    },
    context: 'В Document Editor при согласовании текстов',
    popularity: 94
  },
  {
    id: 'oo-find-replace-shortcut',
    appId: 'onlyoffice',
    title: 'Поиск и замена',
    description: 'Открытие панели расширенного поиска и массовой замены текста с учетом регистра и подстрок.',
    category: 'Поиск и навигация',
    keys: {
      windows: ['Ctrl', 'H'],
      linux: ['Ctrl', 'H'],
      macos: ['Ctrl', 'H'],
      web: ['Ctrl', 'H']
    },
    context: 'Во всех редакторах ONLYOFFICE',
    popularity: 93
  },
  {
    id: 'oo-find-text',
    appId: 'onlyoffice',
    title: 'Поиск по документу',
    description: 'Быстрый переход к панели поиска по тексту документа, ячейкам или слайдам.',
    category: 'Поиск и навигация',
    keys: {
      windows: ['Ctrl', 'F'],
      linux: ['Ctrl', 'F'],
      macos: ['Cmd', 'F'],
      web: ['Ctrl', 'F']
    },
    context: 'Во всех редакторах ONLYOFFICE',
    popularity: 97
  },
  {
    id: 'oo-insert-link',
    appId: 'onlyoffice',
    title: 'Вставить или изменить гиперссылку',
    description: 'Открытие диалога добавления ссылки на веб-страницу, закладку или адрес электронной почты.',
    category: 'Ввод и редактирование',
    keys: {
      windows: ['Ctrl', 'K'],
      linux: ['Ctrl', 'K'],
      macos: ['Cmd', 'K'],
      web: ['Ctrl', 'K']
    },
    context: 'В Document, Spreadsheet и Presentation Editor',
    popularity: 91
  },
  {
    id: 'oo-page-break',
    appId: 'onlyoffice',
    title: 'Разрыв страницы / Новый слайд',
    description: 'Принудительный перенос текста на новую страницу в Document Editor или создание слайда в Presentation.',
    category: 'Разметка страницы',
    keys: {
      windows: ['Ctrl', 'Enter'],
      linux: ['Ctrl', 'Enter'],
      macos: ['Cmd', 'Enter'],
      web: ['Ctrl', 'Enter']
    },
    context: 'В Document Editor и Presentation Editor',
    popularity: 95
  },
  {
    id: 'oo-clear-direct-format',
    appId: 'onlyoffice',
    title: 'Очистить прямое форматирование текста',
    description: 'Сброс ручного оформления шрифта и цвета до параметров стиля текущего абзаца.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Space'],
      linux: ['Ctrl', 'Space'],
      macos: ['Cmd', 'Space'],
      web: ['Ctrl', 'Space']
    },
    context: 'В Document Editor',
    popularity: 92
  },
  {
    id: 'oo-heading-1-style',
    appId: 'onlyoffice',
    title: 'Применить стиль «Заголовок 1»',
    description: 'Быстрое назначение стиля Заголовок 1 для текущего абзаца для включения в автооглавление.',
    category: 'Стили и структура',
    keys: {
      windows: ['Ctrl', 'Alt', '1'],
      linux: ['Ctrl', 'Alt', '1'],
      macos: ['Cmd', 'Option', '1'],
      web: ['Ctrl', 'Alt', '1']
    },
    context: 'В Document Editor',
    popularity: 93
  },
  {
    id: 'oo-heading-2-style',
    appId: 'onlyoffice',
    title: 'Применить стиль «Заголовок 2»',
    description: 'Назначение стиля Заголовок 2 для подразделов документа.',
    category: 'Стили и структура',
    keys: {
      windows: ['Ctrl', 'Alt', '2'],
      linux: ['Ctrl', 'Alt', '2'],
      macos: ['Cmd', 'Option', '2'],
      web: ['Ctrl', 'Alt', '2']
    },
    context: 'В Document Editor',
    popularity: 90
  },
  {
    id: 'oo-heading-3-style',
    appId: 'onlyoffice',
    title: 'Применить стиль «Заголовок 3»',
    description: 'Назначение стиля Заголовок 3 для пунктов третьего уровня иерархии.',
    category: 'Стили и структура',
    keys: {
      windows: ['Ctrl', 'Alt', '3'],
      linux: ['Ctrl', 'Alt', '3'],
      macos: ['Cmd', 'Option', '3'],
      web: ['Ctrl', 'Alt', '3']
    },
    context: 'В Document Editor',
    popularity: 86
  },
  {
    id: 'oo-normal-style',
    appId: 'onlyoffice',
    title: 'Применить стиль «Обычный» (Normal)',
    description: 'Сброс стиля абзаца до стандартного основного текста документа.',
    category: 'Стили и структура',
    keys: {
      windows: ['Ctrl', 'Alt', '0'],
      linux: ['Ctrl', 'Alt', '0'],
      macos: ['Cmd', 'Option', '0'],
      web: ['Ctrl', 'Alt', '0']
    },
    context: 'В Document Editor',
    popularity: 88
  },
  {
    id: 'oo-bullet-list-toggle',
    appId: 'onlyoffice',
    title: 'Маркированный список / Автофильтр',
    description: 'Включение маркированного списка в Document Editor или Автофильтра в Spreadsheet Editor.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Shift', 'L'],
      linux: ['Ctrl', 'Shift', 'L'],
      macos: ['Cmd', 'Shift', 'L'],
      web: ['Ctrl', 'Shift', 'L']
    },
    context: 'В Document Editor (список) и Spreadsheet Editor (автофильтр)',
    popularity: 91
  },
  {
    id: 'oo-numbered-list-toggle',
    appId: 'onlyoffice',
    title: 'Нумерованный список',
    description: 'Включение или отключение нумерованного списка для выделенных абзацев.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Shift', 'N'],
      linux: ['Ctrl', 'Shift', 'N'],
      macos: ['Cmd', 'Shift', 'N'],
      web: ['Ctrl', 'Shift', 'N']
    },
    context: 'В Document Editor',
    popularity: 89
  },
  {
    id: 'oo-spelling-check',
    appId: 'onlyoffice',
    title: 'Проверка правописания (Spell Check)',
    description: 'Запуск окна проверки орфографии и грамматики по всему открытому документу.',
    category: 'Рецензирование',
    keys: {
      windows: ['F7'],
      linux: ['F7'],
      macos: ['F7'],
      web: ['F7']
    },
    context: 'Во всех редакторах ONLYOFFICE',
    popularity: 88
  },
  {
    id: 'oo-start-presentation',
    appId: 'onlyoffice',
    title: 'Запуск показа презентации с первого слайда',
    description: 'Переход в полноэкранный режим демонстрации слайдов с самого начала.',
    category: 'Презентации',
    keys: {
      windows: ['F5'],
      linux: ['F5'],
      macos: ['F5'],
      web: ['F5']
    },
    context: 'В Presentation Editor',
    popularity: 95
  },
  {
    id: 'oo-start-from-current-slide',
    appId: 'onlyoffice',
    title: 'Показ презентации с текущего слайда',
    description: 'Запуск демонстрации презентации начиная с активного выбранного слайда.',
    category: 'Презентации',
    keys: {
      windows: ['Shift', 'F5'],
      linux: ['Shift', 'F5'],
      macos: ['Shift', 'F5'],
      web: ['Shift', 'F5']
    },
    context: 'В Presentation Editor',
    popularity: 93
  },
  {
    id: 'oo-exit-fullscreen-mode',
    appId: 'onlyoffice',
    title: 'Выход из режима показа / отмена',
    description: 'Завершение показа презентации или отмена текущего ввода в ячейку таблицы.',
    category: 'Вид и показ',
    keys: {
      windows: ['Esc'],
      linux: ['Esc'],
      macos: ['Esc'],
      web: ['Esc']
    },
    context: 'Во всех редакторах ONLYOFFICE',
    popularity: 98
  },
  {
    id: 'oo-edit-cell-f2',
    appId: 'onlyoffice',
    title: 'Редактировать активную ячейку',
    description: 'Переход в режим редактирования значения ячейки с установкой курсора в конец строки.',
    category: 'Таблицы и расчеты',
    keys: {
      windows: ['F2'],
      linux: ['F2'],
      macos: ['F2'],
      web: ['F2']
    },
    context: 'В Spreadsheet Editor',
    popularity: 96
  },
  {
    id: 'oo-insert-current-date',
    appId: 'onlyoffice',
    title: 'Вставить текущую дату',
    description: 'Быстрая вставка статического сегодняшнего числа в активную ячейку таблицы.',
    category: 'Таблицы и расчеты',
    keys: {
      windows: ['Ctrl', ';'],
      linux: ['Ctrl', ';'],
      macos: ['Cmd', ';'],
      web: ['Ctrl', ';']
    },
    context: 'В Spreadsheet Editor',
    popularity: 94
  },
  {
    id: 'oo-insert-current-time',
    appId: 'onlyoffice',
    title: 'Вставить текущее время',
    description: 'Вставка статического значения текущего системного времени в ячейку.',
    category: 'Таблицы и расчеты',
    keys: {
      windows: ['Ctrl', 'Shift', ';'],
      linux: ['Ctrl', 'Shift', ';'],
      macos: ['Cmd', 'Shift', ';'],
      web: ['Ctrl', 'Shift', ';']
    },
    context: 'В Spreadsheet Editor',
    popularity: 89
  },
  {
    id: 'oo-fill-down',
    appId: 'onlyoffice',
    title: 'Заполнить вниз (Fill Down)',
    description: 'Копирование формулы или значения из верхней ячейки в выделенные ниже ячейки.',
    category: 'Таблицы и расчеты',
    keys: {
      windows: ['Ctrl', 'D'],
      linux: ['Ctrl', 'D'],
      macos: ['Cmd', 'D'],
      web: ['Ctrl', 'D']
    },
    context: 'В Spreadsheet Editor',
    popularity: 92
  },
  {
    id: 'oo-fill-right',
    appId: 'onlyoffice',
    title: 'Заполнить вправо (Fill Right)',
    description: 'Копирование формулы или значения из крайней левой ячейки в выделенные правее ячейки.',
    category: 'Таблицы и расчеты',
    keys: {
      windows: ['Ctrl', 'R'],
      linux: ['Ctrl', 'R'],
      macos: ['Cmd', 'R'],
      web: ['Ctrl', 'R']
    },
    context: 'В Spreadsheet Editor',
    popularity: 87
  },
  {
    id: 'oo-format-cells-dialog',
    appId: 'onlyoffice',
    title: 'Формат ячеек',
    description: 'Открытие окна настройки форматов чисел, дат, процентов, валюты, выравнивания и границ ячеек.',
    category: 'Таблицы и расчеты',
    keys: {
      windows: ['Ctrl', '1'],
      linux: ['Ctrl', '1'],
      macos: ['Cmd', '1'],
      web: ['Ctrl', '1']
    },
    context: 'В Spreadsheet Editor',
    popularity: 97
  },
  {
    id: 'oo-group-shapes',
    appId: 'onlyoffice',
    title: 'Сгруппировать объекты',
    description: 'Объединение нескольких выделенных фигур, картинок и диаграмм в единую составную группу.',
    category: 'Работа с объектами',
    keys: {
      windows: ['Ctrl', 'Shift', 'G'],
      linux: ['Ctrl', 'Shift', 'G'],
      macos: ['Cmd', 'Option', 'G'],
      web: ['Ctrl', 'Shift', 'G']
    },
    context: 'В Document, Spreadsheet и Presentation Editor',
    popularity: 91
  },
  {
    id: 'oo-ungroup-shapes',
    appId: 'onlyoffice',
    title: 'Разгруппировать объекты',
    description: 'Разбиение сгруппированного составного блока на исходные независимые элементы.',
    category: 'Работа с объектами',
    keys: {
      windows: ['Ctrl', 'Shift', 'U'],
      linux: ['Ctrl', 'Shift', 'U'],
      macos: ['Cmd', 'Option', 'U'],
      web: ['Ctrl', 'Shift', 'U']
    },
    context: 'В Document, Spreadsheet и Presentation Editor',
    popularity: 87
  },
  {
    id: 'oo-insert-cells-rows',
    appId: 'onlyoffice',
    title: 'Вставить ячейки / строки / столбцы',
    description: 'Вызов диалога добавления новых строк, столбцов или ячеек со сдвигом в таблице.',
    category: 'Таблицы и расчеты',
    keys: {
      windows: ['Ctrl', 'Shift', '+'],
      linux: ['Ctrl', 'Shift', '+'],
      macos: ['Cmd', 'Shift', '+'],
      web: ['Ctrl', 'Shift', '+']
    },
    context: 'В Spreadsheet Editor',
    popularity: 93
  },
  {
    id: 'oo-delete-cells-rows',
    appId: 'onlyoffice',
    title: 'Удалить ячейки / строки / столбцы',
    description: 'Удаление выделенных ячеек со сдвигом, целых строк или столбцов таблицы.',
    category: 'Таблицы и расчеты',
    keys: {
      windows: ['Ctrl', '-'],
      linux: ['Ctrl', '-'],
      macos: ['Cmd', '-'],
      web: ['Ctrl', '-']
    },
    context: 'В Spreadsheet Editor',
    popularity: 93
  },
  {
    id: 'oo-fullscreen-view',
    appId: 'onlyoffice',
    title: 'Полноэкранный режим (Full Screen)',
    description: 'Переключение редактора в полноэкранный режим со скрытием системных рамок.',
    category: 'Вид и показ',
    keys: {
      windows: ['F11'],
      linux: ['F11'],
      macos: ['Cmd', 'Ctrl', 'F'],
      web: ['F11']
    },
    context: 'Во всех редакторах ONLYOFFICE',
    popularity: 88
  },
  {
    id: 'oo-bold-text',
    appId: 'onlyoffice',
    title: 'Полужирный шрифт (Bold)',
    description: 'Применение полужирного начертания к выделенному тексту или ячейкам.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'B'],
      linux: ['Ctrl', 'B'],
      macos: ['Cmd', 'B'],
      web: ['Ctrl', 'B']
    },
    context: 'Во всех редакторах ONLYOFFICE',
    popularity: 98
  },
  {
    id: 'oo-italic-text',
    appId: 'onlyoffice',
    title: 'Курсивный шрифт (Italic)',
    description: 'Применение наклонного курсивного начертания к выделенному фрагменту.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'I'],
      linux: ['Ctrl', 'I'],
      macos: ['Cmd', 'I'],
      web: ['Ctrl', 'I']
    },
    context: 'Во всех редакторах ONLYOFFICE',
    popularity: 95
  },
  {
    id: 'oo-underline-text',
    appId: 'onlyoffice',
    title: 'Подчеркивание текста (Underline)',
    description: 'Включение нижнего подчеркивания для выделенных слов или чисел.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'U'],
      linux: ['Ctrl', 'U'],
      macos: ['Cmd', 'U'],
      web: ['Ctrl', 'U']
    },
    context: 'Во всех редакторах ONLYOFFICE',
    popularity: 92
  },
  {
    id: 'oo-align-center-text',
    appId: 'onlyoffice',
    title: 'Выравнивание по центру',
    description: 'Выравнивание строк текста или содержимого ячеек по центру.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'E'],
      linux: ['Ctrl', 'E'],
      macos: ['Cmd', 'E'],
      web: ['Ctrl', 'E']
    },
    context: 'Во всех редакторах ONLYOFFICE',
    popularity: 93
  },
  {
    id: 'oo-print-document',
    appId: 'onlyoffice',
    title: 'Печать документа',
    description: 'Открытие окна предварительного просмотра и отправки документа на принтер или в PDF.',
    category: 'Файл и управление',
    keys: {
      windows: ['Ctrl', 'P'],
      linux: ['Ctrl', 'P'],
      macos: ['Cmd', 'P'],
      web: ['Ctrl', 'P']
    },
    context: 'Во всех редакторах ONLYOFFICE',
    popularity: 96
  }
];

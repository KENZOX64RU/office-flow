import type { Shortcut } from '../../types/index.ts';

export const GDOCS_SHORTCUTS: Shortcut[] = [
  {
    id: 'gd-insert-comment-action',
    appId: 'gdocs',
    title: 'Добавить комментарий к тексту',
    description: 'Вставка комментария к выделенному слову или абзацу с возможностью упомянуть коллегу через @.',
    category: 'Совместная работа',
    keys: {
      windows: ['Ctrl', 'Alt', 'M'],
      linux: ['Ctrl', 'Alt', 'M'],
      macos: ['Cmd', 'Option', 'M'],
      web: ['Ctrl', 'Alt', 'M']
    },
    context: 'При выделении фрагмента текста',
    popularity: 99
  },
  {
    id: 'gd-paste-unformatted-text',
    appId: 'gdocs',
    title: 'Вставить без форматирования',
    description: 'Вставка текста из буфера обмена с очисткой чужих шрифтов, цветов и фоновых подложек.',
    category: 'Ввод и редактирование',
    keys: {
      windows: ['Ctrl', 'Shift', 'V'],
      linux: ['Ctrl', 'Shift', 'V'],
      macos: ['Cmd', 'Shift', 'V'],
      web: ['Ctrl', 'Shift', 'V']
    },
    context: 'При копировании данных из интернета или других документов',
    popularity: 98
  },
  {
    id: 'gd-clear-formatting-shortcut',
    appId: 'gdocs',
    title: 'Очистить форматирование текста',
    description: 'Мгновенный сброс ручного оформления шрифта и цвета до параметров стиля текущего абзаца.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', '\\'],
      linux: ['Ctrl', '\\'],
      macos: ['Cmd', '\\'],
      web: ['Ctrl', '\\']
    },
    context: 'На выделенном тексте',
    popularity: 95
  },
  {
    id: 'gd-word-count-dialog',
    appId: 'gdocs',
    title: 'Подсчет слов, символов и страниц',
    description: 'Открытие окна статистики документа с количеством слов, символов с пробелами и страниц.',
    category: 'Инструменты и статистика',
    keys: {
      windows: ['Ctrl', 'Shift', 'C'],
      linux: ['Ctrl', 'Shift', 'C'],
      macos: ['Cmd', 'Shift', 'C'],
      web: ['Ctrl', 'Shift', 'C']
    },
    context: 'Глобально в документе Google Docs',
    popularity: 94
  },
  {
    id: 'gd-heading-1-apply',
    appId: 'gdocs',
    title: 'Применить стиль «Заголовок 1»',
    description: 'Назначение стиля Заголовок 1 для текущего абзаца для включения в автооглавление и навигацию.',
    category: 'Стили и структура',
    keys: {
      windows: ['Ctrl', 'Alt', '1'],
      linux: ['Ctrl', 'Alt', '1'],
      macos: ['Cmd', 'Option', '1'],
      web: ['Ctrl', 'Alt', '1']
    },
    context: 'В строке заголовка раздела',
    popularity: 96
  },
  {
    id: 'gd-heading-2-apply',
    appId: 'gdocs',
    title: 'Применить стиль «Заголовок 2»',
    description: 'Назначение стиля Заголовок 2 для подразделов документа.',
    category: 'Стили и структура',
    keys: {
      windows: ['Ctrl', 'Alt', '2'],
      linux: ['Ctrl', 'Alt', '2'],
      macos: ['Cmd', 'Option', '2'],
      web: ['Ctrl', 'Alt', '2']
    },
    context: 'В строке подзаголовка',
    popularity: 92
  },
  {
    id: 'gd-heading-3-apply',
    appId: 'gdocs',
    title: 'Применить стиль «Заголовок 3»',
    description: 'Назначение стиля Заголовок 3 для пунктов третьего уровня структуры.',
    category: 'Стили и структура',
    keys: {
      windows: ['Ctrl', 'Alt', '3'],
      linux: ['Ctrl', 'Alt', '3'],
      macos: ['Cmd', 'Option', '3'],
      web: ['Ctrl', 'Alt', '3']
    },
    context: 'В строке подраздела',
    popularity: 88
  },
  {
    id: 'gd-normal-text-apply',
    appId: 'gdocs',
    title: 'Применить стиль «Обычный текст»',
    description: 'Сброс стиля абзаца до стандартного основного текста документа.',
    category: 'Стили и структура',
    keys: {
      windows: ['Ctrl', 'Alt', '0'],
      linux: ['Ctrl', 'Alt', '0'],
      macos: ['Cmd', 'Option', '0'],
      web: ['Ctrl', 'Alt', '0']
    },
    context: 'В текущем абзаце',
    popularity: 91
  },
  {
    id: 'gd-voice-typing-toggle',
    appId: 'gdocs',
    title: 'Включить голосовой ввод текста',
    description: 'Активация встроенного микрофона для диктовки текста и знаков препинания голосом.',
    category: 'Инструменты и статистика',
    keys: {
      windows: ['Ctrl', 'Shift', 'S'],
      linux: ['Ctrl', 'Shift', 'S'],
      macos: ['Cmd', 'Shift', 'S'],
      web: ['Ctrl', 'Shift', 'S']
    },
    context: 'В браузерах на базе Chromium (Chrome, Edge)',
    popularity: 95
  },
  {
    id: 'gd-insert-footnote-action',
    appId: 'gdocs',
    title: 'Вставить сноску внизу страницы',
    description: 'Добавление постраничной сноски со ссылочным номером для библиографических примечаний.',
    category: 'Ссылки и сноски',
    keys: {
      windows: ['Ctrl', 'Alt', 'F'],
      linux: ['Ctrl', 'Alt', 'F'],
      macos: ['Cmd', 'Option', 'F'],
      web: ['Ctrl', 'Alt', 'F']
    },
    context: 'В позиции курсора в тексте',
    popularity: 90
  },
  {
    id: 'gd-smart-chips-menu-key',
    appId: 'gdocs',
    title: 'Меню смарт-чипов (@)',
    description: 'Вызов быстрого меню интерактивных чипов: контакты людей, даты с календарем, файлы Drive, выпадающие списки.',
    category: 'Интерактивность и чипы',
    keys: {
      windows: ['@'],
      linux: ['@'],
      macos: ['@'],
      web: ['@']
    },
    context: 'Наберите символ @ в начале или середине строки',
    popularity: 97
  },
  {
    id: 'gd-version-history-window',
    appId: 'gdocs',
    title: 'Открыть историю версий документа',
    description: 'Просмотр всех изменений документа по времени и авторам с возможностью отката.',
    category: 'Совместная работа',
    keys: {
      windows: ['Ctrl', 'Alt', 'Shift', 'H'],
      linux: ['Ctrl', 'Alt', 'Shift', 'H'],
      macos: ['Cmd', 'Option', 'Shift', 'H'],
      web: ['Ctrl', 'Alt', 'Shift', 'H']
    },
    context: 'В открытом документе Google Docs',
    popularity: 93
  },
  {
    id: 'gd-find-replace-action',
    appId: 'gdocs',
    title: 'Поиск и замена',
    description: 'Открытие окна поиска и массовой замены текста с поддержкой регулярных выражений.',
    category: 'Поиск и навигация',
    keys: {
      windows: ['Ctrl', 'H'],
      linux: ['Ctrl', 'H'],
      macos: ['Cmd', 'Shift', 'H'],
      web: ['Ctrl', 'H']
    },
    context: 'В документе Google Docs',
    popularity: 94
  },
  {
    id: 'gd-find-in-document',
    appId: 'gdocs',
    title: 'Поиск по документу',
    description: 'Быстрый переход к строке поиска слов и словосочетаний в документе.',
    category: 'Поиск и навигация',
    keys: {
      windows: ['Ctrl', 'F'],
      linux: ['Ctrl', 'F'],
      macos: ['Cmd', 'F'],
      web: ['Ctrl', 'F']
    },
    context: 'В документе Google Docs',
    popularity: 98
  },
  {
    id: 'gd-insert-link-action',
    appId: 'gdocs',
    title: 'Вставить или изменить гиперссылку',
    description: 'Создание кликабельной ссылки на веб-сайт, закладку или заголовок внутри документа.',
    category: 'Ссылки и сноски',
    keys: {
      windows: ['Ctrl', 'K'],
      linux: ['Ctrl', 'K'],
      macos: ['Cmd', 'K'],
      web: ['Ctrl', 'K']
    },
    context: 'На выделенном тексте',
    popularity: 97
  },
  {
    id: 'gd-page-break-action',
    appId: 'gdocs',
    title: 'Вставить разрыв страницы',
    description: 'Принудительный перенос текста на следующую страницу без лишних нажатий Enter.',
    category: 'Разметка страницы',
    keys: {
      windows: ['Ctrl', 'Enter'],
      linux: ['Ctrl', 'Enter'],
      macos: ['Cmd', 'Enter'],
      web: ['Ctrl', 'Enter']
    },
    context: 'В позиции курсора в тексте',
    popularity: 96
  },
  {
    id: 'gd-numbered-list-toggle',
    appId: 'gdocs',
    title: 'Нумерованный список',
    description: 'Создание или отключение нумерованного списка для выделенных абзацев.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Shift', '7'],
      linux: ['Ctrl', 'Shift', '7'],
      macos: ['Cmd', 'Shift', '7'],
      web: ['Ctrl', 'Shift', '7']
    },
    context: 'На выделенных абзацах',
    popularity: 91
  },
  {
    id: 'gd-bullet-list-toggle',
    appId: 'gdocs',
    title: 'Маркированный список',
    description: 'Включение или отключение маркированного списка с маркерами-точками.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Shift', '8'],
      linux: ['Ctrl', 'Shift', '8'],
      macos: ['Cmd', 'Shift', '8'],
      web: ['Ctrl', 'Shift', '8']
    },
    context: 'На выделенных абзацах',
    popularity: 92
  },
  {
    id: 'gd-checklist-toggle',
    appId: 'gdocs',
    title: 'Список задач с чекбоксами (Checklist)',
    description: 'Преобразование абзацев в интерактивный список задач с квадратными галочками.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Shift', '9'],
      linux: ['Ctrl', 'Shift', '9'],
      macos: ['Cmd', 'Shift', '9'],
      web: ['Ctrl', 'Shift', '9']
    },
    context: 'Для списков дел и планов совещаний',
    popularity: 93
  },
  {
    id: 'gd-spell-check-action',
    appId: 'gdocs',
    title: 'Проверка орфографии и грамматики',
    description: 'Запуск пошаговой панели проверки правописания по всему документу.',
    category: 'Инструменты и статистика',
    keys: {
      windows: ['Ctrl', 'Alt', 'X'],
      linux: ['Ctrl', 'Alt', 'X'],
      macos: ['Cmd', 'Option', 'X'],
      web: ['Ctrl', 'Alt', 'X']
    },
    context: 'В документе Google Docs',
    popularity: 89
  },
  {
    id: 'gd-bold-format',
    appId: 'gdocs',
    title: 'Полужирный шрифт (Bold)',
    description: 'Применение полужирного начертания к выделенному фрагменту текста.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'B'],
      linux: ['Ctrl', 'B'],
      macos: ['Cmd', 'B'],
      web: ['Ctrl', 'B']
    },
    context: 'На выделенном тексте',
    popularity: 99
  },
  {
    id: 'gd-italic-format',
    appId: 'gdocs',
    title: 'Курсивный шрифт (Italic)',
    description: 'Применение наклонного курсивного начертания к выделенному тексту.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'I'],
      linux: ['Ctrl', 'I'],
      macos: ['Cmd', 'I'],
      web: ['Ctrl', 'I']
    },
    context: 'На выделенном тексте',
    popularity: 96
  },
  {
    id: 'gd-underline-format',
    appId: 'gdocs',
    title: 'Подчеркивание текста (Underline)',
    description: 'Включение или отключение нижнего подчеркивания для выделенных слов.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'U'],
      linux: ['Ctrl', 'U'],
      macos: ['Cmd', 'U'],
      web: ['Ctrl', 'U']
    },
    context: 'На выделенном тексте',
    popularity: 93
  },
  {
    id: 'gd-strikethrough-format',
    appId: 'gdocs',
    title: 'Зачеркнутый текст (Strikethrough)',
    description: 'Применение зачеркивания к выделенному фрагменту текста.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Shift', 'X'],
      linux: ['Ctrl', 'Shift', 'X'],
      macos: ['Cmd', 'Shift', 'X'],
      web: ['Ctrl', 'Shift', 'X']
    },
    context: 'На выделенном тексте',
    popularity: 88
  },
  {
    id: 'gd-superscript-format',
    appId: 'gdocs',
    title: 'Надстрочный знак (Superscript)',
    description: 'Преобразование выделенных символов в верхний индекс (например, м²).',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', '.'],
      linux: ['Ctrl', '.'],
      macos: ['Cmd', '.'],
      web: ['Ctrl', '.']
    },
    context: 'На выделенном тексте',
    popularity: 87
  },
  {
    id: 'gd-subscript-format',
    appId: 'gdocs',
    title: 'Подстрочный знак (Subscript)',
    description: 'Преобразование выделенных символов в нижний индекс (например, H₂O).',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', ','],
      linux: ['Ctrl', ','],
      macos: ['Cmd', ','],
      web: ['Ctrl', ',']
    },
    context: 'На выделенном тексте',
    popularity: 86
  },
  {
    id: 'gd-align-left-format',
    appId: 'gdocs',
    title: 'Выравнивание по левому краю',
    description: 'Выравнивание строк текста по левой границе страницы.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Shift', 'L'],
      linux: ['Ctrl', 'Shift', 'L'],
      macos: ['Cmd', 'Shift', 'L'],
      web: ['Ctrl', 'Shift', 'L']
    },
    context: 'В текущем абзаце',
    popularity: 91
  },
  {
    id: 'gd-align-center-format',
    appId: 'gdocs',
    title: 'Выравнивание по центру',
    description: 'Выравнивание строк текста строго по центру страницы.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Shift', 'E'],
      linux: ['Ctrl', 'Shift', 'E'],
      macos: ['Cmd', 'Shift', 'E'],
      web: ['Ctrl', 'Shift', 'E']
    },
    context: 'В текущем абзаце',
    popularity: 94
  },
  {
    id: 'gd-align-right-format',
    appId: 'gdocs',
    title: 'Выравнивание по правому краю',
    description: 'Выравнивание текста по правой границе документа.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Shift', 'R'],
      linux: ['Ctrl', 'Shift', 'R'],
      macos: ['Cmd', 'Shift', 'R'],
      web: ['Ctrl', 'Shift', 'R']
    },
    context: 'В текущем абзаце',
    popularity: 87
  },
  {
    id: 'gd-align-justify-format',
    appId: 'gdocs',
    title: 'Выравнивание по ширине',
    description: 'Равномерное распределение слов по левой и правой границам страницы.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Shift', 'J'],
      linux: ['Ctrl', 'Shift', 'J'],
      macos: ['Cmd', 'Shift', 'J'],
      web: ['Ctrl', 'Shift', 'J']
    },
    context: 'В текущем абзаце',
    popularity: 88
  },
  {
    id: 'gd-copy-formatting',
    appId: 'gdocs',
    title: 'Копировать форматирование',
    description: 'Копирование стиля шрифта, размера и цвета выделенного фрагмента в буфер стилей.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Alt', 'C'],
      linux: ['Ctrl', 'Alt', 'C'],
      macos: ['Cmd', 'Option', 'C'],
      web: ['Ctrl', 'Alt', 'C']
    },
    context: 'На образцовом тексте (аналог значка малярного валика)',
    popularity: 93
  },
  {
    id: 'gd-paste-formatting',
    appId: 'gdocs',
    title: 'Применить скопированное форматирование',
    description: 'Назначение скопированного ранее стиля оформления новому фрагменту текста.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Alt', 'V'],
      linux: ['Ctrl', 'Alt', 'V'],
      macos: ['Cmd', 'Option', 'V'],
      web: ['Ctrl', 'Alt', 'V']
    },
    context: 'На целевом тексте',
    popularity: 93
  },
  {
    id: 'gd-search-menus-command',
    appId: 'gdocs',
    title: 'Поиск по меню и командам',
    description: 'Мгновенный поиск любого пункта меню или функции Google Docs без ручного перелистывания вкладок.',
    category: 'Поиск и навигация',
    keys: {
      windows: ['Alt', '/'],
      linux: ['Alt', '/'],
      macos: ['Option', '/'],
      web: ['Alt', '/']
    },
    context: 'Глобально в Google Docs',
    popularity: 95
  },
  {
    id: 'gd-keyboard-shortcuts-help',
    appId: 'gdocs',
    title: 'Справка по горячим клавишам',
    description: 'Вызов встроенного справочного окна со списком всех клавиатурных комбинаций Google Docs.',
    category: 'Инструменты и статистика',
    keys: {
      windows: ['Ctrl', '/'],
      linux: ['Ctrl', '/'],
      macos: ['Cmd', '/'],
      web: ['Ctrl', '/']
    },
    context: 'Глобально в Google Docs',
    popularity: 90
  },
  {
    id: 'gd-explore-research-panel',
    appId: 'gdocs',
    title: 'Панель «Обзор» (Explore)',
    description: 'Открытие панели интеллектуального веб-поиска информации, цитат и картинок прямо в документе.',
    category: 'Инструменты и статистика',
    keys: {
      windows: ['Ctrl', 'Alt', 'Shift', 'I'],
      linux: ['Ctrl', 'Alt', 'Shift', 'I'],
      macos: ['Cmd', 'Option', 'Shift', 'I'],
      web: ['Ctrl', 'Alt', 'Shift', 'I']
    },
    context: 'В документе Google Docs',
    popularity: 86
  },
  {
    id: 'gd-print-document-action',
    appId: 'gdocs',
    title: 'Печать документа',
    description: 'Открытие браузерного окна подготовки документа к печати или сохранению в PDF.',
    category: 'Файл и экспорт',
    keys: {
      windows: ['Ctrl', 'P'],
      linux: ['Ctrl', 'P'],
      macos: ['Cmd', 'P'],
      web: ['Ctrl', 'P']
    },
    context: 'В любом документе Google Docs',
    popularity: 97
  }
];

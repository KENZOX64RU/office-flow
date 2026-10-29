import type { Shortcut } from '../../types/index.ts';

export const LIBRE_WRITER_SHORTCUTS: Shortcut[] = [
  // --- Стили и форматирование ---
  {
    id: 'lw-clear-direct-formatting',
    appId: 'libre-writer',
    title: 'Очистить прямое форматирование',
    description: 'Сбрасывает все локально назначенные шрифты, цвета и отступы к базовым настройкам примененного стиля абзаца',
    keys: {
      windows: ['Ctrl', 'M'],
      linux: ['Ctrl', 'M'],
      macos: ['Cmd', 'M']
    },
    category: 'Стили и форматирование',
    popularity: 100
  },
  {
    id: 'lw-styles-sidebar',
    appId: 'libre-writer',
    title: 'Открыть панель «Стили» в боковой панели (Styles)',
    description: 'Открывает менеджер иерархических стилей абзацев, символов, врезок, страниц и списков',
    keys: {
      windows: ['F11'],
      linux: ['F11'],
      macos: ['Cmd', 'T']
    },
    category: 'Стили и форматирование',
    popularity: 98
  },
  {
    id: 'lw-heading-1',
    appId: 'libre-writer',
    title: 'Применить стиль «Заголовок 1»',
    description: 'Назначает текущему абзацу стиль заголовка первого уровня для оглавления и структуры',
    keys: {
      windows: ['Ctrl', '1'],
      linux: ['Ctrl', '1'],
      macos: ['Cmd', '1']
    },
    category: 'Стили и форматирование',
    popularity: 97
  },
  {
    id: 'lw-heading-2',
    appId: 'libre-writer',
    title: 'Применить стиль «Заголовок 2»',
    description: 'Назначает текущему абзацу стиль подзаголовка второго уровня',
    keys: {
      windows: ['Ctrl', '2'],
      linux: ['Ctrl', '2'],
      macos: ['Cmd', '2']
    },
    category: 'Стили и форматирование',
    popularity: 95
  },
  {
    id: 'lw-heading-3',
    appId: 'libre-writer',
    title: 'Применить стиль «Заголовок 3»',
    description: 'Назначает текущему абзацу стиль заголовка третьего уровня',
    keys: {
      windows: ['Ctrl', '3'],
      linux: ['Ctrl', '3'],
      macos: ['Cmd', '3']
    },
    category: 'Стили и форматирование',
    popularity: 92
  },
  {
    id: 'lw-normal-text',
    appId: 'libre-writer',
    title: 'Применить стиль «Основной текст» (Default Paragraph Style)',
    description: 'Возвращает текущий абзац к стандартному стилю обычного текста',
    keys: {
      windows: ['Ctrl', '0'],
      linux: ['Ctrl', '0'],
      macos: ['Cmd', '0']
    },
    category: 'Стили и форматирование',
    popularity: 96
  },
  {
    id: 'lw-paste-unformatted',
    appId: 'libre-writer',
    title: 'Вставить как неформатированный текст',
    description: 'Вставляет текст из буфера обмена без чужих шрифтов, фонов и разметки с автоматическим принятием текущего стиля',
    keys: {
      windows: ['Ctrl', 'Alt', 'Shift', 'V'],
      linux: ['Ctrl', 'Alt', 'Shift', 'V'],
      macos: ['Cmd', 'Option', 'Shift', 'V']
    },
    category: 'Стили и форматирование',
    popularity: 99
  },

  // --- Разрывы и структура страниц ---
  {
    id: 'lw-insert-page-break',
    appId: 'libre-writer',
    title: 'Вставить разрыв страницы',
    description: 'Завершает текущую страницу и переносит курсор на чистый лист',
    keys: {
      windows: ['Ctrl', 'Enter'],
      linux: ['Ctrl', 'Enter'],
      macos: ['Cmd', 'Enter']
    },
    category: 'Разметка страницы',
    popularity: 99
  },
  {
    id: 'lw-insert-line-break',
    appId: 'libre-writer',
    title: 'Вставить разрыв строки без создания нового абзаца',
    description: 'Переносит текст на следующую строку с сохранением межстрочного интервала и свойств текущего абзаца',
    keys: {
      windows: ['Shift', 'Enter'],
      linux: ['Shift', 'Enter'],
      macos: ['Shift', 'Enter']
    },
    category: 'Разметка страницы',
    popularity: 94
  },
  {
    id: 'lw-insert-column-break',
    appId: 'libre-writer',
    title: 'Вставить разрыв колонки (в многоколоночном тексте)',
    description: 'Завершает текущую колонку и переносит набор текста в начало следующей колонки',
    keys: {
      windows: ['Ctrl', 'Shift', 'Enter'],
      linux: ['Ctrl', 'Shift', 'Enter'],
      macos: ['Cmd', 'Shift', 'Enter']
    },
    category: 'Разметка страницы',
    popularity: 88
  },
  {
    id: 'lw-nonbreaking-space',
    appId: 'libre-writer',
    title: 'Вставить неразрывный пробел',
    description: 'Связывает два слова (например число и единицу измерения), предотвращая их разрыв на разные строки',
    keys: {
      windows: ['Ctrl', 'Shift', 'Space'],
      linux: ['Ctrl', 'Shift', 'Space'],
      macos: ['Cmd', 'Shift', 'Space']
    },
    category: 'Типографика',
    popularity: 93
  },
  {
    id: 'lw-soft-hyphen',
    appId: 'libre-writer',
    title: 'Вставить мягкий перенос (Soft Hyphen)',
    description: 'Указывает место допустимого разрыва длинного слова: дефис появится только если слово не помещается в строке',
    keys: {
      windows: ['Ctrl', '-'],
      linux: ['Ctrl', '-'],
      macos: ['Cmd', '-']
    },
    category: 'Типографика',
    popularity: 87
  },

  // --- Навигация и поиск ---
  {
    id: 'lw-navigator',
    appId: 'libre-writer',
    title: 'Открыть Навигатор (F5)',
    description: 'Открывает интерактивное дерево структуры документа: заголовки, таблицы, изображения, закладки, сноски и гиперссылки',
    keys: {
      windows: ['F5'],
      linux: ['F5'],
      macos: ['F5']
    },
    category: 'Навигация',
    popularity: 98
  },
  {
    id: 'lw-sidebar-toggle',
    appId: 'libre-writer',
    title: 'Показать или скрыть боковую панель (Sidebar)',
    description: 'Разворачивает или сворачивает универсальную боковую панель свойств, стилей и галереи',
    keys: {
      windows: ['Ctrl', 'F5'],
      linux: ['Ctrl', 'F5'],
      macos: ['Cmd', 'F5']
    },
    category: 'Интерфейс',
    popularity: 92
  },
  {
    id: 'lw-find-replace-regex',
    appId: 'libre-writer',
    title: 'Открыть диалог «Найти и заменить» (с поддержкой Regex)',
    description: 'Открывает окно расширенного поиска с возможностью применения регулярных выражений и стилей',
    keys: {
      windows: ['Ctrl', 'H'],
      linux: ['Ctrl', 'H'],
      macos: ['Cmd', 'Alt', 'F']
    },
    category: 'Поиск и замена',
    popularity: 97
  },
  {
    id: 'lw-find-next',
    appId: 'libre-writer',
    title: 'Найти следующее совпадение',
    description: 'Перемещает курсор к следующему вхождению искомого слова или регулярного выражения',
    keys: {
      windows: ['Ctrl', 'G'],
      linux: ['Ctrl', 'G'],
      macos: ['Cmd', 'G']
    },
    category: 'Поиск и замена',
    popularity: 90
  },

  // --- Таблицы и вычисления ---
  {
    id: 'lw-insert-table',
    appId: 'libre-writer',
    title: 'Вставить таблицу (Insert Table)',
    description: 'Открывает диалог быстрого создания таблицы с указанием строк, колонок и стилей оформления',
    keys: {
      windows: ['Ctrl', 'F12'],
      linux: ['Ctrl', 'F12'],
      macos: ['Cmd', 'F12']
    },
    category: 'Таблицы',
    popularity: 96
  },
  {
    id: 'lw-table-formula-bar',
    appId: 'libre-writer',
    title: 'Панель формул таблицы (Formula Bar)',
    description: 'Активирует строку математических вычислений прямо в ячейке таблицы Writer (=sum, =average)',
    keys: {
      windows: ['F2'],
      linux: ['F2'],
      macos: ['F2']
    },
    category: 'Таблицы',
    popularity: 94
  },
  {
    id: 'lw-table-exit-down',
    appId: 'libre-writer',
    title: 'Выйти из таблицы в новый абзац снизу',
    description: 'Вставляет новый пустой абзац под таблицей, находясь в крайней правой нижней ячейке',
    keys: {
      windows: ['Alt', 'Enter'],
      linux: ['Alt', 'Enter'],
      macos: ['Option', 'Enter']
    },
    category: 'Таблицы',
    popularity: 93
  },
  {
    id: 'lw-table-exit-up',
    appId: 'libre-writer',
    title: 'Вставить абзац перед таблицей, стоящей в начале листа',
    description: 'Вставляет свободную строку текста перед таблицей, если она прижата к верхней границе страницы',
    keys: {
      windows: ['Alt', 'Enter'],
      linux: ['Alt', 'Enter'],
      macos: ['Option', 'Enter']
    },
    category: 'Таблицы',
    popularity: 91,
    context: 'В первой ячейке таблицы в начале страницы'
  },

  // --- Поля и автоматизация ---
  {
    id: 'lw-insert-field-dialog',
    appId: 'libre-writer',
    title: 'Вставить поле (Insert Fields Dialog)',
    description: 'Открывает диалог расширенной вставки полей: статистика, дата изменения, переменные и ссылки',
    keys: {
      windows: ['Ctrl', 'F2'],
      linux: ['Ctrl', 'F2'],
      macos: ['Cmd', 'F2']
    },
    category: 'Поля и автоматизация',
    popularity: 95
  },
  {
    id: 'lw-toggle-field-names',
    appId: 'libre-writer',
    title: 'Переключить отображение имен полей / значений',
    description: 'Показывает исходные системные коды полей вместо их вычисленных текстовых значений',
    keys: {
      windows: ['Ctrl', 'F9'],
      linux: ['Ctrl', 'F9'],
      macos: ['Cmd', 'F9']
    },
    category: 'Поля и автоматизация',
    popularity: 92
  },
  {
    id: 'lw-toggle-field-shading',
    appId: 'libre-writer',
    title: 'Включить / отключить подсветку полей серым фоном',
    description: 'Управляет визуальным выделением динамических полей на экране для легкого отличия от обычного текста',
    keys: {
      windows: ['Ctrl', 'F8'],
      linux: ['Ctrl', 'F8'],
      macos: ['Cmd', 'F8']
    },
    category: 'Поля и автоматизация',
    popularity: 90
  },
  {
    id: 'lw-update-fields',
    appId: 'libre-writer',
    title: 'Обновить все поля и ссылки в документе',
    description: 'Принудительно пересчитывает формулы в таблицах, перекрестные ссылки, номера страниц и оглавление',
    keys: {
      windows: ['F9'],
      linux: ['F9'],
      macos: ['F9']
    },
    category: 'Поля и автоматизация',
    popularity: 96
  },
  {
    id: 'lw-autotext-insert',
    appId: 'libre-writer',
    title: 'Вставить блок Автотекста по аббревиатуре',
    description: 'Мгновенно разворачивает набранную аббревиатуру в заготовленный блок текста, таблицу или формулу',
    keys: {
      windows: ['F3'],
      linux: ['F3'],
      macos: ['F3']
    },
    category: 'Автотекст',
    popularity: 97
  },
  {
    id: 'lw-autotext-dialog',
    appId: 'libre-writer',
    title: 'Диалог управления Автотекстом (AutoText)',
    description: 'Открывает окно создания, редактирования и сохранения новых блоков Автотекста в шаблоны',
    keys: {
      windows: ['Ctrl', 'F3'],
      linux: ['Ctrl', 'F3'],
      macos: ['Cmd', 'F3']
    },
    category: 'Автотекст',
    popularity: 91
  },

  // --- Рецензирование и комментарии ---
  {
    id: 'lw-insert-comment',
    appId: 'libre-writer',
    title: 'Вставить комментарий к выделенному тексту',
    description: 'Создает карточку комментария на правом поле листа с указанием автора и даты',
    keys: {
      windows: ['Ctrl', 'Alt', 'C'],
      linux: ['Ctrl', 'Alt', 'C'],
      macos: ['Cmd', 'Option', 'C']
    },
    category: 'Рецензирование',
    popularity: 96
  },
  {
    id: 'lw-track-changes-toggle',
    appId: 'libre-writer',
    title: 'Включить / отключить режим записи изменений (Track Changes)',
    description: 'Активирует протоколирование правок: удаленный текст перечеркивается, добавленный подсвечивается',
    keys: {
      windows: ['Ctrl', 'Shift', 'C'],
      linux: ['Ctrl', 'Shift', 'C'],
      macos: ['Cmd', 'Shift', 'C']
    },
    category: 'Рецензирование',
    popularity: 95
  },
  {
    id: 'lw-spelling-grammar',
    appId: 'libre-writer',
    title: 'Запустить проверку орфографии и грамматики',
    description: 'Открывает окно пошаговой проверки ошибок по словарям Hunspell с предложениями вариантов',
    keys: {
      windows: ['F7'],
      linux: ['F7'],
      macos: ['F7']
    },
    category: 'Проверка и язык',
    popularity: 97
  },
  {
    id: 'lw-thesaurus',
    appId: 'libre-writer',
    title: 'Открыть Тезаурус (словарь синонимов)',
    description: 'Предлагает синонимы и контекстные замены для выделенного слова',
    keys: {
      windows: ['Ctrl', 'F7'],
      linux: ['Ctrl', 'F7'],
      macos: ['Cmd', 'F7']
    },
    category: 'Проверка и язык',
    popularity: 89
  },

  // --- Списки и абзацы ---
  {
    id: 'lw-toggle-numbered-list',
    appId: 'libre-writer',
    title: 'Включить / отключить нумерованный список',
    description: 'Применяет автоматическую нумерацию к текущему или выделенным абзацам',
    keys: {
      windows: ['F12'],
      linux: ['F12'],
      macos: ['F12']
    },
    category: 'Списки',
    popularity: 94
  },
  {
    id: 'lw-toggle-bullet-list',
    appId: 'libre-writer',
    title: 'Включить / отключить маркированный список',
    description: 'Превращает абзацы в маркированный список с круглыми маркерами',
    keys: {
      windows: ['Shift', 'F12'],
      linux: ['Shift', 'F12'],
      macos: ['Shift', 'F12']
    },
    category: 'Списки',
    popularity: 93
  },
  {
    id: 'lw-move-item-up',
    appId: 'libre-writer',
    title: 'Переместить пункт списка или абзац вверх',
    description: 'Сдвигает выделенный абзац или строку списка выше соседнего текста без вырезания',
    keys: {
      windows: ['Ctrl', 'Alt', 'Up'],
      linux: ['Ctrl', 'Alt', 'Up'],
      macos: ['Cmd', 'Option', 'Up']
    },
    category: 'Стили и форматирование',
    popularity: 91
  },
  {
    id: 'lw-move-item-down',
    appId: 'libre-writer',
    title: 'Переместить пункт списка или абзац вниз',
    description: 'Сдвигает абзац или пункт списка ниже соседнего текста',
    keys: {
      windows: ['Ctrl', 'Alt', 'Down'],
      linux: ['Ctrl', 'Alt', 'Down'],
      macos: ['Cmd', 'Option', 'Down']
    },
    category: 'Стили и форматирование',
    popularity: 90
  },

  // --- Сервис и экспорт ---
  {
    id: 'lw-fullscreen',
    appId: 'libre-writer',
    title: 'Полноэкранный режим чтения и набора текста',
    description: 'Скрывает панели инструментов и системное меню для максимальной концентрации на тексте',
    keys: {
      windows: ['Ctrl', 'Shift', 'J'],
      linux: ['Ctrl', 'Shift', 'J'],
      macos: ['Cmd', 'Shift', 'J']
    },
    category: 'Интерфейс',
    popularity: 92
  },
  {
    id: 'lw-nonprinting-characters',
    appId: 'libre-writer',
    title: 'Отобразить непечатаемые символы (пробелы, разрывы, абзацы)',
    description: 'Включает видимость скрытых символов разметки: точки пробелов, знаки абзацев ¶ и разрывы страниц',
    keys: {
      windows: ['Ctrl', 'F10'],
      linux: ['Ctrl', 'F10'],
      macos: ['Cmd', 'F10']
    },
    category: 'Интерфейс',
    popularity: 97
  }
];

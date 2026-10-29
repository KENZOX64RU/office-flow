import type { Shortcut } from '../../types/index.ts';

export const ONENOTE_SHORTCUTS: Shortcut[] = [
  // --- Создание и структура страниц ---
  {
    id: 'on-new-page',
    appId: 'onenote',
    title: 'Создать новую страницу в текущем разделе',
    description: 'Добавляет чистую страницу в конец активного раздела записной книжки',
    keys: {
      windows: ['Ctrl', 'N'],
      macos: ['Cmd', 'N'],
      web: ['Ctrl', 'Alt', 'N']
    },
    category: 'Страницы и разделы',
    popularity: 99
  },
  {
    id: 'on-new-page-below',
    appId: 'onenote',
    title: 'Создать новую страницу сразу под текущей',
    description: 'Вставляет новый пустой лист непосредственно после активной страницы, не переходя в конец списка',
    keys: {
      windows: ['Ctrl', 'Alt', 'N'],
      macos: ['Cmd', 'Option', 'N']
    },
    category: 'Страницы и разделы',
    popularity: 88,
    notes: 'В веб-версии OneNote используйте контекстное меню списка страниц'
  },
  {
    id: 'on-new-section',
    appId: 'onenote',
    title: 'Создать новый раздел в записной книжке',
    description: 'Добавляет новую цветную вкладку-раздел для тематической группировки страниц',
    keys: {
      windows: ['Ctrl', 'T'],
      macos: ['Cmd', 'T'],
      web: ['Ctrl', 'Alt', 'Shift', 'N']
    },
    category: 'Страницы и разделы',
    popularity: 96
  },
  {
    id: 'on-make-subpage',
    appId: 'onenote',
    title: 'Сделать страницу подстраницей (понизить уровень)',
    description: 'Сдвигает страницу вправо в иерархии списка, превращая её во вложенную подстраницу (до 3 уровней)',
    keys: {
      windows: ['Ctrl', 'Alt', ']'],
      macos: ['Cmd', 'Option', ']'],
      web: ['Alt', 'Shift', 'Right']
    },
    category: 'Страницы и разделы',
    popularity: 92
  },
  {
    id: 'on-promote-subpage',
    appId: 'onenote',
    title: 'Повысить уровень страницы (убрать подстраницу)',
    description: 'Сдвигает подстраницу влево, возвращая её на родительский уровень списка',
    keys: {
      windows: ['Ctrl', 'Alt', '['],
      macos: ['Cmd', 'Option', '['],
      web: ['Alt', 'Shift', 'Left']
    },
    category: 'Страницы и разделы',
    popularity: 89
  },
  {
    id: 'on-collapse-subpages',
    appId: 'onenote',
    title: 'Свернуть или развернуть группу подстраниц',
    description: 'Прячет вложенные страницы под родительской для компактного обзора длинных конспектов',
    keys: {
      windows: ['Ctrl', 'Shift', '*'],
      macos: ['Cmd', 'Shift', '*']
    },
    category: 'Страницы и разделы',
    popularity: 85
  },
  {
    id: 'on-next-page',
    appId: 'onenote',
    title: 'Перейти к следующей странице раздела',
    description: 'Мгновенное переключение на следующий лист без использования мыши',
    keys: {
      windows: ['Ctrl', 'Page Down'],
      macos: ['Option', 'Page Down']
    },
    category: 'Навигация',
    popularity: 91
  },
  {
    id: 'on-prev-page',
    appId: 'onenote',
    title: 'Перейти к предыдущей странице раздела',
    description: 'Мгновенное переключение на предыдущий лист в списке',
    keys: {
      windows: ['Ctrl', 'Page Up'],
      macos: ['Option', 'Page Up']
    },
    category: 'Навигация',
    popularity: 90
  },
  {
    id: 'on-nav-sections-focus',
    appId: 'onenote',
    title: 'Фокус на панель разделов и страниц',
    description: 'Переводит клавиатурный фокус на боковую панель навигации для быстрого выбора стрелками',
    keys: {
      windows: ['Ctrl', 'G'],
      macos: ['Cmd', 'G']
    },
    category: 'Навигация',
    popularity: 86
  },
  {
    id: 'on-nav-page-body-focus',
    appId: 'onenote',
    title: 'Вернуть фокус в текст текущей страницы',
    description: 'Переносит курсор из панели навигации или поиска обратно в рабочий контейнер заметок',
    keys: {
      windows: ['Ctrl', 'Shift', 'G'],
      macos: ['Cmd', 'Shift', 'G']
    },
    category: 'Навигация',
    popularity: 84
  },
  {
    id: 'on-nav-history-back',
    appId: 'onenote',
    title: 'Вернуться к ранее просмотренной странице',
    description: 'Переход назад по хронологической истории открытых страниц записной книжки',
    keys: {
      windows: ['Alt', 'Left'],
      macos: ['Cmd', '[']
    },
    category: 'Навигация',
    popularity: 93
  },
  {
    id: 'on-nav-history-forward',
    appId: 'onenote',
    title: 'Перейти вперед по истории просмотров',
    description: 'Возврат к странице, с которой был выполнен переход назад',
    keys: {
      windows: ['Alt', 'Right'],
      macos: ['Cmd', ']']
    },
    category: 'Навигация',
    popularity: 87
  },

  // --- Теги и списки задач ---
  {
    id: 'on-tag-todo',
    appId: 'onenote',
    title: 'Поставить тег «Дело» (чекбокс To-Do)',
    description: 'Добавляет интерактивный квадратный флажок к текущей строке или переключает его состояние',
    keys: {
      windows: ['Ctrl', '1'],
      macos: ['Cmd', '1'],
      web: ['Ctrl', '1']
    },
    category: 'Теги и задачи',
    popularity: 100
  },
  {
    id: 'on-tag-important',
    appId: 'onenote',
    title: 'Поставить тег «Важно» (звезда)',
    description: 'Маркирует абзац значком золотой звезды для расстановки ключевых приоритетов',
    keys: {
      windows: ['Ctrl', '2'],
      macos: ['Cmd', '2'],
      web: ['Ctrl', '2']
    },
    category: 'Теги и задачи',
    popularity: 95
  },
  {
    id: 'on-tag-question',
    appId: 'onenote',
    title: 'Поставить тег «Вопрос»',
    description: 'Маркирует блок текста желтым значком вопроса для моментов, требующих уточнения',
    keys: {
      windows: ['Ctrl', '3'],
      macos: ['Cmd', '3'],
      web: ['Ctrl', '3']
    },
    category: 'Теги и задачи',
    popularity: 92
  },
  {
    id: 'on-tag-remember',
    appId: 'onenote',
    title: 'Поставить тег «Запомнить для дальнейшего»',
    description: 'Маркирует строку иконкой желтого маркера/лампочки для справочной информации',
    keys: {
      windows: ['Ctrl', '4'],
      macos: ['Cmd', '4'],
      web: ['Ctrl', '4']
    },
    category: 'Теги и задачи',
    popularity: 86
  },
  {
    id: 'on-tag-definition',
    appId: 'onenote',
    title: 'Поставить тег «Определение»',
    description: 'Помечает термин или ключевое понятие специальным маркером конспекта',
    keys: {
      windows: ['Ctrl', '5'],
      macos: ['Cmd', '5'],
      web: ['Ctrl', '5']
    },
    category: 'Теги и задачи',
    popularity: 82
  },
  {
    id: 'on-tag-clear-all',
    appId: 'onenote',
    title: 'Удалить все теги с текущей строки',
    description: 'Очищает строку от чекбоксов, звездочек и других значков тегов в одно нажатие',
    keys: {
      windows: ['Ctrl', '0'],
      macos: ['Cmd', '0'],
      web: ['Ctrl', '0']
    },
    category: 'Теги и задачи',
    popularity: 94
  },

  // --- Форматирование текста и списки ---
  {
    id: 'on-format-heading-1',
    appId: 'onenote',
    title: 'Стиль «Заголовок 1»',
    description: 'Применяет крупный заголовок первого уровня к текущему абзацу',
    keys: {
      windows: ['Ctrl', 'Alt', '1'],
      macos: ['Cmd', 'Option', '1'],
      web: ['Ctrl', 'Alt', '1']
    },
    category: 'Форматирование',
    popularity: 95
  },
  {
    id: 'on-format-heading-2',
    appId: 'onenote',
    title: 'Стиль «Заголовок 2»',
    description: 'Применяет подзаголовок второго уровня',
    keys: {
      windows: ['Ctrl', 'Alt', '2'],
      macos: ['Cmd', 'Option', '2'],
      web: ['Ctrl', 'Alt', '2']
    },
    category: 'Форматирование',
    popularity: 93
  },
  {
    id: 'on-format-heading-3',
    appId: 'onenote',
    title: 'Стиль «Заголовок 3»',
    description: 'Применяет заголовок третьего уровня для структурирования разделов заметки',
    keys: {
      windows: ['Ctrl', 'Alt', '3'],
      macos: ['Cmd', 'Option', '3'],
      web: ['Ctrl', 'Alt', '3']
    },
    category: 'Форматирование',
    popularity: 89
  },
  {
    id: 'on-format-clear',
    appId: 'onenote',
    title: 'Очистить форматирование (стиль «Обычный»)',
    description: 'Сбрасывает шрифт, цвет и стили к стандартному тексту страницы',
    keys: {
      windows: ['Ctrl', 'Shift', 'N'],
      macos: ['Cmd', 'Shift', 'N'],
      web: ['Ctrl', 'Shift', 'N']
    },
    category: 'Форматирование',
    popularity: 96
  },
  {
    id: 'on-list-bullet',
    appId: 'onenote',
    title: 'Маркированный список',
    description: 'Вставляет круглый маркер списка перед строкой или превращает абзацы в список',
    keys: {
      windows: ['Ctrl', '.'],
      macos: ['Cmd', '.'],
      web: ['Ctrl', '.']
    },
    category: 'Форматирование',
    popularity: 97
  },
  {
    id: 'on-list-number',
    appId: 'onenote',
    title: 'Нумерованный список',
    description: 'Включает автоматическую нумерацию строк (1, 2, 3...)',
    keys: {
      windows: ['Ctrl', '/'],
      macos: ['Cmd', '/'],
      web: ['Ctrl', '/']
    },
    category: 'Форматирование',
    popularity: 95
  },
  {
    id: 'on-highlight-text',
    appId: 'onenote',
    title: 'Выделить текст маркером (Highlighter)',
    description: 'Подсвечивает выделенные слова ярко-желтым цветом маркера',
    keys: {
      windows: ['Ctrl', 'Shift', 'H'],
      macos: ['Cmd', 'Shift', 'H']
    },
    category: 'Форматирование',
    popularity: 92
  },
  {
    id: 'on-move-paragraph-up',
    appId: 'onenote',
    title: 'Переместить строку или пункт списка вверх',
    description: 'Сдвигает текущий абзац или пункт выше соседнего текста без вырезания и вставки',
    keys: {
      windows: ['Alt', 'Shift', 'Up'],
      macos: ['Option', 'Shift', 'Up']
    },
    category: 'Форматирование',
    popularity: 94
  },
  {
    id: 'on-move-paragraph-down',
    appId: 'onenote',
    title: 'Переместить строку или пункт списка вниз',
    description: 'Сдвигает текущий абзац или строку ниже соседнего текста',
    keys: {
      windows: ['Alt', 'Shift', 'Down'],
      macos: ['Option', 'Shift', 'Down']
    },
    category: 'Форматирование',
    popularity: 93
  },
  {
    id: 'on-indent-increase',
    appId: 'onenote',
    title: 'Увеличить отступ строки (вложенность)',
    description: 'Сдвигает пункт списка или строку вправо, создавая подуровень',
    keys: {
      windows: ['Alt', 'Shift', 'Right'],
      macos: ['Option', 'Shift', 'Right'],
      web: ['Tab']
    },
    category: 'Форматирование',
    popularity: 91
  },
  {
    id: 'on-indent-decrease',
    appId: 'onenote',
    title: 'Уменьшить отступ строки',
    description: 'Сдвигает строку влево, уменьшая отступ',
    keys: {
      windows: ['Alt', 'Shift', 'Left'],
      macos: ['Option', 'Shift', 'Left'],
      web: ['Shift', 'Tab']
    },
    category: 'Форматирование',
    popularity: 90
  },

  // --- Таблицы ---
  {
    id: 'on-table-create-tab',
    appId: 'onenote',
    title: 'Создать таблицу клавишей Tab',
    description: 'Наберите слово на пустом месте страницы и нажмите Tab — OneNote мгновенно превратит текст в ячейку двухколоночной таблицы',
    keys: {
      windows: ['Tab'],
      macos: ['Tab'],
      web: ['Tab']
    },
    category: 'Таблицы',
    popularity: 98
  },
  {
    id: 'on-table-new-row',
    appId: 'onenote',
    title: 'Добавить новую строку в таблице',
    description: 'Нажатие Enter в последней правой ячейке автоматически создает чистую строку снизу',
    keys: {
      windows: ['Enter'],
      macos: ['Return'],
      web: ['Enter']
    },
    category: 'Таблицы',
    popularity: 96
  },
  {
    id: 'on-table-newline-in-cell',
    appId: 'onenote',
    title: 'Перенос строки внутри одной ячейки таблицы',
    description: 'Вставляет вторую строку текста в ту же ячейку без перехода к новой строке таблицы',
    keys: {
      windows: ['Ctrl', 'Enter'],
      macos: ['Cmd', 'Return'],
      web: ['Shift', 'Enter']
    },
    category: 'Таблицы',
    popularity: 89
  },

  // --- Поиск ---
  {
    id: 'on-search-all-notebooks',
    appId: 'onenote',
    title: 'Поиск по всем записным книжкам',
    description: 'Глобальный поиск по всем текстам, таблицам, вложенным файлам, тегам и распознанному тексту на изображениях (OCR)',
    keys: {
      windows: ['Ctrl', 'E'],
      macos: ['Cmd', 'Option', 'F'],
      web: ['Ctrl', 'E']
    },
    category: 'Поиск',
    popularity: 99
  },
  {
    id: 'on-search-current-page',
    appId: 'onenote',
    title: 'Поиск только на текущей странице',
    description: 'Открывает строку локального поиска для быстрого нахождения совпадений на открытом листе',
    keys: {
      windows: ['Ctrl', 'F'],
      macos: ['Cmd', 'F'],
      web: ['Ctrl', 'F']
    },
    category: 'Поиск',
    popularity: 97
  },
  {
    id: 'on-search-find-next',
    appId: 'onenote',
    title: 'Найти следующее совпадение',
    description: 'Перемещает курсор к следующему результату текущего поискового запроса',
    keys: {
      windows: ['F3'],
      macos: ['Cmd', 'G'],
      web: ['Enter']
    },
    category: 'Поиск',
    popularity: 91
  },

  // --- Вставка и Умные функции ---
  {
    id: 'on-insert-screen-clipping',
    appId: 'onenote',
    title: 'Вырезка фрагмента экрана (Screen Clipping)',
    description: 'Создает скриншот прямоугольной области экрана и сразу вставляет его на текущую страницу с фиксацией даты и времени',
    keys: {
      windows: ['Win', 'Shift', 'S'],
      macos: ['Cmd', 'Control', 'Shift', '4']
    },
    category: 'Вставка',
    popularity: 98
  },
  {
    id: 'on-insert-date',
    appId: 'onenote',
    title: 'Вставить текущую дату',
    description: 'Мгновенно вставляет статическую текущую дату в текстовое поле',
    keys: {
      windows: ['Alt', 'Shift', 'D'],
      macos: ['Cmd', 'Shift', 'D']
    },
    category: 'Вставка',
    popularity: 94
  },
  {
    id: 'on-insert-time',
    appId: 'onenote',
    title: 'Вставить текущее время',
    description: 'Вставляет текущее время с минутами для ведения хронометража',
    keys: {
      windows: ['Alt', 'Shift', 'T'],
      macos: ['Cmd', 'Shift', 'T']
    },
    category: 'Вставка',
    popularity: 92
  },
  {
    id: 'on-insert-date-time',
    appId: 'onenote',
    title: 'Вставить текущую дату и время',
    description: 'Вставляет полную отметку времени одной командой',
    keys: {
      windows: ['Alt', 'Shift', 'F'],
      macos: ['Cmd', 'Shift', 'F']
    },
    category: 'Вставка',
    popularity: 95
  },
  {
    id: 'on-insert-hyperlink',
    appId: 'onenote',
    title: 'Вставить гиперссылку или ссылку на страницу',
    description: 'Открывает окно создания ссылки на внешний веб-сайт, локальный файл или другую страницу OneNote',
    keys: {
      windows: ['Ctrl', 'K'],
      macos: ['Cmd', 'K'],
      web: ['Ctrl', 'K']
    },
    category: 'Вставка',
    popularity: 96
  },
  {
    id: 'on-math-instant-calc',
    appId: 'onenote',
    title: 'Мгновенный математический расчет в строке',
    description: 'Наберите арифметическое выражение со знаком равенства на конце и нажмите пробел: например 1250*1.2= и OneNote сам вычислит 1500',
    keys: {
      windows: ['= + Пробел'],
      macos: ['= + Пробел'],
      web: ['= + Пробел']
    },
    category: 'Умные функции',
    popularity: 98
  },
  {
    id: 'on-math-equation-editor',
    appId: 'onenote',
    title: 'Вставить математическую формулу (Equation)',
    description: 'Создает блок для ввода уравнений, дробей, корней, интегралов и символов LaTeX',
    keys: {
      windows: ['Alt', '='],
      macos: ['Control', '=']
    },
    category: 'Умные функции',
    popularity: 90
  },

  // --- Окна, синхронизация и экспорт ---
  {
    id: 'on-window-new',
    appId: 'onenote',
    title: 'Открыть новое независимое окно OneNote',
    description: 'Открывает второе окно программы для параллельной работы с двумя разными страницами или разделами',
    keys: {
      windows: ['Ctrl', 'M'],
      macos: ['Cmd', 'Shift', 'N']
    },
    category: 'Интерфейс',
    popularity: 91
  },
  {
    id: 'on-fullscreen-view',
    appId: 'onenote',
    title: 'Полноэкранный режим чтения и письма',
    description: 'Скрывает панели и ленты инструментов для максимального фокуса на рукописных заметках или чтении',
    keys: {
      windows: ['F11'],
      macos: ['Cmd', 'Control', 'F']
    },
    category: 'Интерфейс',
    popularity: 93
  },
  {
    id: 'on-sync-current-notebook',
    appId: 'onenote',
    title: 'Синхронизировать текущую записную книжку',
    description: 'Принудительно отправляет все локальные правки активного блокнота в облако OneDrive',
    keys: {
      windows: ['Shift', 'F9'],
      macos: ['Cmd', 'S']
    },
    category: 'Синхронизация',
    popularity: 94
  },
  {
    id: 'on-sync-all-notebooks',
    appId: 'onenote',
    title: 'Синхронизировать все записные книжки',
    description: 'Запускает полную двустороннюю синхронизацию всех открытых блокнотов',
    keys: {
      windows: ['F9'],
      macos: ['Cmd', 'Shift', 'S']
    },
    category: 'Синхронизация',
    popularity: 93
  },
  {
    id: 'on-email-page',
    appId: 'onenote',
    title: 'Отправить страницу по почте через Outlook',
    description: 'Создает новое письмо в Outlook с полным форматированным содержимым страницы OneNote',
    keys: {
      windows: ['Ctrl', 'Shift', 'E'],
      macos: ['Cmd', 'Shift', 'E']
    },
    category: 'Интеграция',
    popularity: 88,
    notes: 'Требует установленного классического клиента Outlook'
  }
];

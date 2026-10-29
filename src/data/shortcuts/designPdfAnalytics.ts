import type { Shortcut } from '../../types/index.ts';

export const DESIGN_PDF_ANALYTICS_SHORTCUTS: Shortcut[] = [
  {
    "id": "acr-find",
    "appId": "acrobat-reader",
    "title": "Поиск по тексту PDF-документа",
    "description": "Открывает строку поиска по словам и фразам внутри PDF",
    "keys": {
      "windows": [
        "Ctrl",
        "F"
      ],
      "macos": [
        "Cmd",
        "F"
      ]
    },
    "category": "Навигация и чтение",
    "popularity": 98
  },
  {
    "id": "acr-fit-page",
    "appId": "acrobat-reader",
    "title": "По размеру страницы (целиком)",
    "description": "Масштабирует документ так, чтобы страница целиком помещалась на экране",
    "keys": {
      "windows": [
        "Ctrl",
        "0"
      ],
      "macos": [
        "Cmd",
        "0"
      ]
    },
    "category": "Масштабирование",
    "popularity": 95
  },
  {
    "id": "acr-fit-width",
    "appId": "acrobat-reader",
    "title": "По ширине окна",
    "description": "Масштабирует документ по ширине экрана для комфортного чтения строк",
    "keys": {
      "windows": [
        "Ctrl",
        "2"
      ],
      "macos": [
        "Cmd",
        "2"
      ]
    },
    "category": "Масштабирование",
    "popularity": 94
  },
  {
    "id": "acr-rotate",
    "appId": "acrobat-reader",
    "title": "Повернуть страницу по часовой стрелке",
    "description": "Поворачивает отображение страницы на 90 градусов",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "+"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "+"
      ]
    },
    "category": "Просмотр",
    "popularity": 91
  },
  {
    "id": "acr-pro-combine",
    "appId": "acrobat-pro",
    "title": "Объединить файлы в один PDF",
    "description": "Открывает инструмент слияния нескольких разнородных документов в единый файл",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "C"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "C"
      ]
    },
    "category": "Редактирование PDF",
    "popularity": 96
  },
  {
    "id": "acr-pro-ocr",
    "appId": "acrobat-pro",
    "title": "Распознать текст скана (OCR)",
    "description": "Превращает отсканированное изображение в доступный для поиска и копирования текст",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "T"
      ],
      "macos": [
        "Cmd",
        "Option",
        "T"
      ]
    },
    "category": "Распознавание текста",
    "popularity": 94
  },
  {
    "id": "px-highlight",
    "appId": "pdf-xchange",
    "title": "Инструмент «Маркер текста» (Highlight)",
    "description": "Активирует маркер для выделения важных фраз желтым или цветным маркером",
    "keys": {
      "windows": [
        "H"
      ]
    },
    "category": "Аннотации",
    "popularity": 95
  },
  {
    "id": "px-typewriter",
    "appId": "pdf-xchange",
    "title": "Инструмент «Печатная машинка» (Текст поверх)",
    "description": "Позволяет впечатать текст в любую строку или форму сканированного бланка",
    "keys": {
      "windows": [
        "T"
      ]
    },
    "category": "Аннотации",
    "popularity": 93
  },
  {
    "id": "fx-redact",
    "appId": "foxit",
    "title": "Скрытие конфиденциальных данных (Redaction)",
    "description": "Безвозвратно закрашивает черным и вырезает персональные данные из структуры PDF",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "Y"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "Y"
      ]
    },
    "category": "Безопасность",
    "popularity": 92
  },
  {
    "id": "fr-ocr-all",
    "appId": "finereader",
    "title": "Распознать все страницы книги или договора",
    "description": "Запускает интеллектуальное OCR-распознавание с сохранением колонок и таблиц",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "R"
      ]
    },
    "category": "OCR Распознавание",
    "popularity": 98
  },
  {
    "id": "fr-compare",
    "appId": "finereader",
    "title": "Сравнить две редакции документа",
    "description": "Показывает расхождения и скрытые правки между скан-копией и исходным файлом Word",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "C"
      ]
    },
    "category": "Сравнение документов",
    "popularity": 95
  },
  {
    "id": "pbi-matrix",
    "appId": "powerbi",
    "title": "Создать матрицу или сводную визуализацию",
    "description": "Добавляет матричную таблицу с группировками на аналитический дашборд",
    "keys": {
      "windows": [
        "Ctrl",
        "M"
      ]
    },
    "category": "Визуализация",
    "popularity": 94
  },
  {
    "id": "pbi-dax-newline",
    "appId": "powerbi",
    "title": "Перенос строки в редакторе формул DAX",
    "description": "Начинает новую строку кода меры без преждевременного подтверждения формулы",
    "keys": {
      "windows": [
        "Shift",
        "Enter"
      ]
    },
    "category": "DAX-моделирование",
    "popularity": 99
  },
  {
    "id": "pbi-publish",
    "appId": "powerbi",
    "title": "Опубликовать отчёт в Power BI Service",
    "description": "Выгружает готовый интерактивный дашборд в корпоративное облако",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "P"
      ]
    },
    "category": "Публикация",
    "popularity": 93
  },
  {
    "id": "tb-swap-axes",
    "appId": "tableau",
    "title": "Поменять строки и столбцы местами (Swap)",
    "description": "Меняет оси графика местами за один клик (Swap Rows and Columns)",
    "keys": {
      "windows": [
        "Ctrl",
        "W"
      ],
      "macos": [
        "Cmd",
        "W"
      ]
    },
    "category": "Визуализация",
    "popularity": 96
  },
  {
    "id": "tb-describe-sheet",
    "appId": "tableau",
    "title": "Сводное описание листа и мер (Describe Sheet)",
    "description": "Показывает математическую статистику и источники данных активного листа",
    "keys": {
      "windows": [
        "Ctrl",
        "E"
      ],
      "macos": [
        "Cmd",
        "E"
      ]
    },
    "category": "Анализ данных",
    "popularity": 90
  },
  {
    "id": "pq-advanced-editor",
    "appId": "powerquery",
    "title": "Открыть Расширенный редактор M-кода",
    "description": "Открывает окно прямой правки скрипта трансформации данных Power Query на языке M",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "M"
      ]
    },
    "category": "M-код и трансформация",
    "popularity": 98
  },
  {
    "id": "pq-refresh-preview",
    "appId": "powerquery",
    "title": "Обновить предварительный просмотр данных",
    "description": "Подтягивает свежие первые 1000 строк из источника для отладки шагов",
    "keys": {
      "windows": [
        "F5"
      ]
    },
    "category": "Трансформация",
    "popularity": 95
  },
  {
    "id": "pp-relationships",
    "appId": "powerpivot",
    "title": "Перейти в режим диаграммы связей",
    "description": "Показывает графическую схему моделей связей 1:N между таблицами базы данных",
    "keys": {
      "windows": [
        "Alt",
        "H",
        "D",
        "V"
      ]
    },
    "category": "Моделирование",
    "popularity": 93
  },
  {
    "id": "nt-slash-commands",
    "appId": "notion",
    "title": "Меню блоков через косую черту (Slash command)",
    "description": "Ввод знака / открывает меню создания заголовка, таблицы, списка, карточки или callout",
    "keys": {
      "web": [
        "/"
      ],
      "windows": [
        "/"
      ],
      "macos": [
        "/"
      ]
    },
    "category": "Блоки и разметка",
    "popularity": 100
  },
  {
    "id": "nt-toggle-list",
    "appId": "notion",
    "title": "Превратить строку в раскрывающийся список (Toggle)",
    "description": "Создает аккуратный спойлер для скрытия длинных описаний или инструкций",
    "keys": {
      "web": [
        "Ctrl",
        "Shift",
        "7"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "7"
      ]
    },
    "category": "Форматирование",
    "popularity": 94
  },
  {
    "id": "nt-quick-find",
    "appId": "notion",
    "title": "Глобальный поиск по всем страницам Notion",
    "description": "Открывает строку поиска Quick Find по всей базе знаний рабочего пространства",
    "keys": {
      "web": [
        "Ctrl",
        "P"
      ],
      "macos": [
        "Cmd",
        "P"
      ]
    },
    "category": "Навигация",
    "popularity": 99
  },
  {
    "id": "tr-new-card",
    "appId": "trello",
    "title": "Быстрое создание карточки под курсором",
    "description": "Наведите курсор мыши на любую колонку и нажмите N для создания задачи",
    "keys": {
      "web": [
        "N"
      ]
    },
    "category": "Канбан-доска",
    "popularity": 96
  },
  {
    "id": "tr-filter-cards",
    "appId": "trello",
    "title": "Фильтрация карточек по меткам или исполнителям",
    "description": "Мгновенно открывает строку фильтрации задач доски",
    "keys": {
      "web": [
        "F"
      ]
    },
    "category": "Поиск и фильтры",
    "popularity": 94
  },
  {
    "id": "jr-create-issue",
    "appId": "jira",
    "title": "Создать новую задачу или баг (Create Issue)",
    "description": "Открывает диалоговое окно заведения задачи в текущем проекте",
    "keys": {
      "web": [
        "C"
      ]
    },
    "category": "Управление задачами",
    "popularity": 98
  },
  {
    "id": "jr-assign-to-me",
    "appId": "jira",
    "title": "Назначить открытую задачу на себя (Assign to me)",
    "description": "Делает вас ответственным исполнителем задачи в один клик",
    "keys": {
      "web": [
        "I"
      ]
    },
    "category": "Задачи",
    "popularity": 94
  },
  {
    "id": "as-new-task",
    "appId": "asana",
    "title": "Создать задачу в списке",
    "description": "Добавляет строчку новой задачи в активный проект",
    "keys": {
      "web": [
        "Tab",
        "Q"
      ]
    },
    "category": "Задачи",
    "popularity": 96
  },
  {
    "id": "as-mark-complete",
    "appId": "asana",
    "title": "Отметить задачу выполненной",
    "description": "Ставит галочку завершения задачи",
    "keys": {
      "web": [
        "Ctrl",
        "Enter"
      ],
      "macos": [
        "Cmd",
        "Enter"
      ]
    },
    "category": "Задачи",
    "popularity": 98
  },
  {
    "id": "cu-quick-create",
    "appId": "clickup",
    "title": "Окно быстрого создания задачи",
    "description": "Открывает плавающее окно создания задачи из любого места рабочего пространства",
    "keys": {
      "web": [
        "T"
      ]
    },
    "category": "Задачи",
    "popularity": 96
  },
  {
    "id": "fg-autolayout",
    "appId": "figma",
    "title": "Добавить Auto Layout",
    "description": "Оборачивает выбранные элементы в контейнер с автоматическим выравниванием и отступами",
    "keys": {
      "windows": [
        "Shift",
        "A"
      ],
      "macos": [
        "Shift",
        "A"
      ]
    },
    "category": "Специализированные",
    "popularity": 100
  },
  {
    "id": "fg-create-component",
    "appId": "figma",
    "title": "Создать мастер-компонент",
    "description": "Превращает выделенный фрейм в переиспользуемый компонент дизайна",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "K"
      ],
      "macos": [
        "Cmd",
        "Option",
        "K"
      ]
    },
    "category": "Компоненты",
    "popularity": 97
  },
  {
    "id": "fg-detach-instance",
    "appId": "figma",
    "title": "Отсоединить экземпляр от компонента",
    "description": "Отвязывает копию от мастер-компонента, превращая её в обычный фрейм",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "B"
      ],
      "macos": [
        "Cmd",
        "Option",
        "B"
      ]
    },
    "category": "Компоненты",
    "popularity": 92
  },
  {
    "id": "fg-scale-tool",
    "appId": "figma",
    "title": "Инструмент пропорционального масштабирования (Scale)",
    "description": "Масштабирует фрейм вместе со всеми шрифтами, толщинами обводок и эффектами",
    "keys": {
      "windows": [
        "K"
      ],
      "macos": [
        "K"
      ]
    },
    "category": "Инструменты",
    "popularity": 95
  },
  {
    "id": "cn-group",
    "appId": "canva",
    "title": "Сгруппировать выбранные элементы",
    "description": "Объединяет надписи и иллюстрации в один блок",
    "keys": {
      "web": [
        "Ctrl",
        "G"
      ],
      "macos": [
        "Cmd",
        "G"
      ]
    },
    "category": "Макет",
    "popularity": 96
  },
  {
    "id": "cn-duplicate",
    "appId": "canva",
    "title": "Дублировать элемент дизайна",
    "description": "Создает точную копию активного текстового блока или фото",
    "keys": {
      "web": [
        "Ctrl",
        "D"
      ],
      "macos": [
        "Cmd",
        "D"
      ]
    },
    "category": "Редактирование",
    "popularity": 95
  },
  {
    "id": "ps-free-transform",
    "appId": "photoshop",
    "title": "Свободное трансформирование слоя",
    "description": "Масштабирование, поворот, наклон и деформация выделенного слоя",
    "keys": {
      "windows": [
        "Ctrl",
        "T"
      ],
      "macos": [
        "Cmd",
        "T"
      ]
    },
    "category": "Слои и трансформация",
    "popularity": 100
  },
  {
    "id": "ps-deselect",
    "appId": "photoshop",
    "title": "Снять выделение (Deselect)",
    "description": "Снимает бегущую рамку выделения пикселей",
    "keys": {
      "windows": [
        "Ctrl",
        "D"
      ],
      "macos": [
        "Cmd",
        "D"
      ]
    },
    "category": "Выделение",
    "popularity": 98
  },
  {
    "id": "ps-new-layer",
    "appId": "photoshop",
    "title": "Создать новый пустой слой",
    "description": "Добавляет прозрачный слой поверх активного слоя в палитре слоев",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "N"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "N"
      ]
    },
    "category": "Слои",
    "popularity": 95
  },
  {
    "id": "ps-merge-visible",
    "appId": "photoshop",
    "title": "Объединить копию всех видимых слоев в один новый",
    "description": "Создает объединенный «слепок» изображения на новом верхнем слое (Stamp Visible)",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "Shift",
        "E"
      ],
      "macos": [
        "Cmd",
        "Option",
        "Shift",
        "E"
      ]
    },
    "category": "Слои",
    "popularity": 92
  },
  {
    "id": "ai-pen-tool",
    "appId": "illustrator",
    "title": "Инструмент «Перо» (Pen Tool)",
    "description": "Главный инструмент векторного рисования узловых точек и кривых Безье",
    "keys": {
      "windows": [
        "P"
      ],
      "macos": [
        "P"
      ]
    },
    "category": "Инструменты рисования",
    "popularity": 99
  },
  {
    "id": "ai-direct-selection",
    "appId": "illustrator",
    "title": "Прямое выделение опорных точек (Direct Selection)",
    "description": "Выделяет отдельные векторные точки и манипуляторы кривой",
    "keys": {
      "windows": [
        "A"
      ],
      "macos": [
        "A"
      ]
    },
    "category": "Инструменты",
    "popularity": 97
  },
  {
    "id": "ai-outline-preview",
    "appId": "illustrator",
    "title": "Режим контуров (Outline view)",
    "description": "Показывает векторные каркасы без заливок и эффектов для проверки точности стыковки",
    "keys": {
      "windows": [
        "Ctrl",
        "Y"
      ],
      "macos": [
        "Cmd",
        "Y"
      ]
    },
    "category": "Просмотр",
    "popularity": 94
  },
  {
    "id": "fg-eyedropper",
    "appId": "figma",
    "title": "Инструмент «Пипетка» (выбор цвета)",
    "description": "Активирует лупу пипетки для взятия цвета с любого пикселя холста",
    "keys": {
      "windows": [
        "I"
      ],
      "macos": [
        "I"
      ]
    },
    "category": "Основные операции",
    "popularity": 93
  },
  {
    "id": "acr-read-mode",
    "appId": "acrobat-reader",
    "title": "Режим чтения (Read Mode) со скрытием всех панелей",
    "description": "Убирает все боковые панели и меню, оставляя только чистый документ для максимальной фокусировки",
    "keys": {
      "windows": [
        "Ctrl",
        "H"
      ]
    },
    "category": "Режимы просмотра",
    "popularity": 96
  },
  {
    "id": "acr-fullscreen",
    "appId": "acrobat-reader",
    "title": "Полноэкранный режим презентации документа",
    "description": "Разворачивает PDF на весь монитор для доклада или совещания",
    "keys": {
      "windows": [
        "Ctrl",
        "L"
      ]
    },
    "category": "Режимы просмотра",
    "popularity": 94
  },
  {
    "id": "acr-rotate-cw",
    "appId": "acrobat-reader",
    "title": "Повернуть страницу по часовой стрелке на 90°",
    "description": "Быстро переворачивает перевернутые при сканировании страницы",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "Plus"
      ]
    },
    "category": "Ориентация страниц",
    "popularity": 93
  },
  {
    "id": "pro-ocr-text",
    "appId": "acrobat-pro",
    "title": "Оптическое распознавание текста (OCR)",
    "description": "Превращает сканированный PDF-документ в документ с возможностью поиска и копирования текста",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "T"
      ]
    },
    "category": "Инструменты Pro",
    "popularity": 98
  },
  {
    "id": "pro-delete-pages",
    "appId": "acrobat-pro",
    "title": "Удалить выбранные страницы из PDF-файла",
    "description": "Открывает окно удаления лишних или пустых страниц из состава документа",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "D"
      ]
    },
    "category": "Управление страницами",
    "popularity": 95
  },
  {
    "id": "pro-insert-pages",
    "appId": "acrobat-pro",
    "title": "Вставить страницы из другого PDF-документа",
    "description": "Объединение нескольких файлов или добавление приложений к договору",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "I"
      ]
    },
    "category": "Управление страницами",
    "popularity": 96
  },
  {
    "id": "pro-redact",
    "appId": "acrobat-pro",
    "title": "Инструмент цензурирования и удаления персональных данных (Redact)",
    "description": "Безвозвратно закрашивает черным цветом конфиденциальные данные, паспорта и суммы",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "Y"
      ]
    },
    "category": "Безопасность и конфиденциальность",
    "popularity": 94
  },
  {
    "id": "pro-extract-pages",
    "appId": "acrobat-pro",
    "title": "Извлечь страницы в отдельный файл",
    "description": "Сохраняет выбранный диапазон страниц как самостоятельный новый PDF",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "X"
      ]
    },
    "category": "Управление страницами",
    "popularity": 92
  },
  {
    "id": "px-rotate",
    "appId": "pdf-xchange",
    "title": "Поворот текущей или выделенных страниц",
    "description": "Диалог точного поворота четных, нечетных или выбранных страниц документа",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "R"
      ]
    },
    "category": "Страницы",
    "popularity": 95
  },
  {
    "id": "px-ocr",
    "appId": "pdf-xchange",
    "title": "Запуск модуля распознавания текста OCR",
    "description": "Интегрированный движок распознавания русского и английского языков",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "O"
      ]
    },
    "category": "Инструменты OCR",
    "popularity": 96
  },
  {
    "id": "px-export-images",
    "appId": "pdf-xchange",
    "title": "Экспорт страниц PDF в растровые изображения (PNG, JPEG)",
    "description": "Пакетное преобразование страниц в графические форматы высокого разрешения",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "E"
      ]
    },
    "category": "Экспорт",
    "popularity": 91
  },
  {
    "id": "px-bookmark",
    "appId": "pdf-xchange",
    "title": "Добавить закладку на текущую страницу",
    "description": "Формирует интерактивное дерево содержания документа",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "B"
      ]
    },
    "category": "Навигация и закладки",
    "popularity": 89
  },
  {
    "id": "px-delete-pages",
    "appId": "pdf-xchange",
    "title": "Удаление страниц документа",
    "description": "Быстрое удаление ненужных страниц из открытого файла",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "D"
      ]
    },
    "category": "Страницы",
    "popularity": 92
  },
  {
    "id": "foxit-rotate",
    "appId": "foxit",
    "title": "Повернуть страницу на 90 градусов",
    "description": "Исправляет альбомную или портретную ориентацию отсканированного листа",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "R"
      ]
    },
    "category": "Страницы",
    "popularity": 95
  },
  {
    "id": "foxit-ocr",
    "appId": "foxit",
    "title": "Оптическое распознавание текста (OCR)",
    "description": "Преобразует изображение страницы в распознанный текст",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "O"
      ]
    },
    "category": "Инструменты распознавания",
    "popularity": 96
  },
  {
    "id": "foxit-split",
    "appId": "foxit",
    "title": "Разделить документ на несколько файлов",
    "description": "Разбивает многостраничный архив документов на отдельные файлы по числу страниц или закладкам",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "S"
      ]
    },
    "category": "Управление документами",
    "popularity": 91
  },
  {
    "id": "foxit-insert",
    "appId": "foxit",
    "title": "Вставить страницы из файла",
    "description": "Добавление приложений или дополнительных листов в текущий файл",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "I"
      ]
    },
    "category": "Страницы",
    "popularity": 93
  },
  {
    "id": "fine-recognize-page",
    "appId": "finereader",
    "title": "Распознать текущую страницу",
    "description": "Запуск анализа структуры блоков (текст, таблицы, картинки) для активного листа",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "R"
      ]
    },
    "category": "Распознавание",
    "popularity": 98
  },
  {
    "id": "fine-recognize-all",
    "appId": "finereader",
    "title": "Распознать весь документ целиком",
    "description": "Пакетная обработка всех страниц с сохранением исходной верстки",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "F"
      ]
    },
    "category": "Распознавание",
    "popularity": 99
  },
  {
    "id": "fine-export-word",
    "appId": "finereader",
    "title": "Сохранить распознанный текст в Microsoft Word (.docx)",
    "description": "Экспорт отсканированного документа в редактируемый файл Word с точным сохранением шрифтов и таблиц",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "S"
      ]
    },
    "category": "Экспорт и сохранение",
    "popularity": 97
  },
  {
    "id": "fine-export-excel",
    "appId": "finereader",
    "title": "Экспорт таблиц в Microsoft Excel (.xlsx)",
    "description": "Извлечение отсканированных таблиц в формат Excel для последующего пересчета формулами",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "X"
      ]
    },
    "category": "Экспорт и сохранение",
    "popularity": 96
  },
  {
    "id": "fine-compare-docs",
    "appId": "finereader",
    "title": "Запустить модуль сравнения двух документов",
    "description": "Автоматически находит различия в тексте договоров в разных форматах (скан против docx)",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "C"
      ]
    },
    "category": "Сравнение документов",
    "popularity": 94
  },
  {
    "id": "pbi-open-powerquery",
    "appId": "powerbi",
    "title": "Открыть редактор запросов Power Query",
    "description": "Переход к модулю очистки, фильтрации и преобразования данных",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "D"
      ]
    },
    "category": "Моделирование данных",
    "popularity": 98
  },
  {
    "id": "pbi-focus-mode",
    "appId": "powerbi",
    "title": "Режим фокусировки на выбранном визуале",
    "description": "Разворачивает диаграмму или матрицу на весь экран для детального исследования данных",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "F"
      ]
    },
    "category": "Визуализация",
    "popularity": 95
  },
  {
    "id": "pbi-confirm-dax",
    "appId": "powerbi",
    "title": "Применить формулу меры DAX",
    "description": "Подтверждает и компилирует расчетную меру в строке формул",
    "keys": {
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "Формулы DAX",
    "popularity": 97
  },
  {
    "id": "pbi-shortcuts-help",
    "appId": "powerbi",
    "title": "Справочник всех горячих клавиш Power BI Desktop",
    "description": "Открывает официальную памятку по клавиатурным командам",
    "keys": {
      "windows": [
        "Shift",
        "?"
      ]
    },
    "category": "Справка",
    "popularity": 90
  },
  {
    "id": "tab-new-sheet",
    "appId": "tableau",
    "title": "Создать новый рабочий лист (Worksheet)",
    "description": "Добавляет чистый лист визуализации данных",
    "keys": {
      "windows": [
        "Ctrl",
        "M"
      ]
    },
    "category": "Рабочие листы",
    "popularity": 96
  },
  {
    "id": "tab-new-dashboard",
    "appId": "tableau",
    "title": "Создать новый дашборд (Dashboard)",
    "description": "Открывает холст компоновки интерактивных графиков и фильтров",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "M"
      ]
    },
    "category": "Дашборды",
    "popularity": 95
  },
  {
    "id": "tab-swap-rows-cols",
    "appId": "tableau",
    "title": "Поменять местами строки и столбцы (Swap Rows & Columns)",
    "description": "Мгновенно меняет ориентацию диаграммы (например, вертикальные столбцы на горизонтальные полосы)",
    "keys": {
      "windows": [
        "Ctrl",
        "W"
      ]
    },
    "category": "Визуализация",
    "popularity": 98
  },
  {
    "id": "tab-refresh-data",
    "appId": "tableau",
    "title": "Обновить источник данных (Refresh Data Source)",
    "description": "Подтягивает свежие записи из SQL-базы или файла Excel",
    "keys": {
      "windows": [
        "F9"
      ]
    },
    "category": "Данные",
    "popularity": 93
  },
  {
    "id": "pq-close-apply",
    "appId": "powerquery",
    "title": "Применить изменения и загрузить данные (Close & Apply)",
    "description": "Сохраняет цепочку шагов ETL и загружает результат в модель данных",
    "keys": {
      "windows": [
        "Alt",
        "Shift",
        "Enter"
      ]
    },
    "category": "ETL процессы",
    "popularity": 99
  },
  {
    "id": "pq-autocomplete-m",
    "appId": "powerquery",
    "title": "Автодополнение функций языка M в строке формул",
    "description": "Всплывающие подсказки по синтаксису и аргументам функций преобразования",
    "keys": {
      "windows": [
        "Ctrl",
        "Space"
      ]
    },
    "category": "Формулы языка M",
    "popularity": 96
  },
  {
    "id": "pq-rename-step",
    "appId": "powerquery",
    "title": "Переименовать выбранный шаг трансформации",
    "description": "Присваивает осмысленное название шагу в панели «Примененные шаги»",
    "keys": {
      "windows": [
        "F2"
      ]
    },
    "category": "Шаги трансформации",
    "popularity": 94
  },
  {
    "id": "pq-delete-step",
    "appId": "powerquery",
    "title": "Удалить выбранный шаг трансформации",
    "description": "Откатывает конкретную операцию фильтрации или изменения типа данных",
    "keys": {
      "windows": [
        "Delete"
      ]
    },
    "category": "Шаги трансформации",
    "popularity": 92
  },
  {
    "id": "pp-manage-model",
    "appId": "powerpivot",
    "title": "Открыть окно управления реляционной моделью данных Power Pivot",
    "description": "Переход к диаграмме связей (Diagram View) между таблицами фактов и измерений",
    "keys": {
      "windows": [
        "Ctrl",
        "F2"
      ]
    },
    "category": "Модель данных",
    "popularity": 98
  },
  {
    "id": "pp-confirm-measure",
    "appId": "powerpivot",
    "title": "Подтвердить расчетную меру DAX",
    "description": "Компилирует меру в области вычислений",
    "keys": {
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "Меры DAX",
    "popularity": 96
  },
  {
    "id": "pp-new-calc-column",
    "appId": "powerpivot",
    "title": "Создать вычисляемый столбец",
    "description": "Добавляет столбец с расчетом по формуле на уровне строк",
    "keys": {
      "windows": [
        "Ctrl",
        "T"
      ]
    },
    "category": "Модель данных",
    "popularity": 92
  },
  {
    "id": "figma-auto-layout",
    "appId": "figma",
    "title": "Добавить Автолейаут (Auto Layout)",
    "description": "Делает фрейм адаптивным: элементы автоматически перестраиваются при изменении контента",
    "keys": {
      "windows": [
        "Shift",
        "A"
      ]
    },
    "category": "Сетка и верстка",
    "popularity": 99
  },
  {
    "id": "figma-create-component",
    "appId": "figma",
    "title": "Создать переиспользуемый мастер-компонент",
    "description": "Превращает выделенный элемент интерфейса в компонент дизайн-системы",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "K"
      ],
      "macos": [
        "Cmd",
        "Opt",
        "K"
      ]
    },
    "category": "Компоненты",
    "popularity": 98
  },
  {
    "id": "figma-detach-instance",
    "appId": "figma",
    "title": "Отсоединить экземпляр от компонента (Detach Instance)",
    "description": "Разрывает связь с мастер-компонентом для свободного редактирования структуры",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "B"
      ],
      "macos": [
        "Cmd",
        "Opt",
        "B"
      ]
    },
    "category": "Компоненты",
    "popularity": 95
  },
  {
    "id": "figma-swap-fill-stroke",
    "appId": "figma",
    "title": "Поменять местами заливку (Fill) и обводку (Stroke)",
    "description": "Мгновенное переключение между контурным и сплошным отображением фигуры или иконки",
    "keys": {
      "windows": [
        "Shift",
        "X"
      ]
    },
    "category": "Стили и цвета",
    "popularity": 94
  },
  {
    "id": "ps-duplicate-layer",
    "appId": "photoshop",
    "title": "Дублировать текущий слой или выделение",
    "description": "Создает копию активного слоя без вызова контекстных меню",
    "keys": {
      "windows": [
        "Ctrl",
        "J"
      ],
      "macos": [
        "Cmd",
        "J"
      ]
    },
    "category": "Слои",
    "popularity": 99
  },
  {
    "id": "ps-stamp-visible",
    "appId": "photoshop",
    "title": "Создать объединенный слепок всех видимых слоев (Stamp Visible)",
    "description": "Создает новый объединенный слой поверх текущих, сохраняя все исходные слои нетронутыми",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "Alt",
        "E"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "Opt",
        "E"
      ]
    },
    "category": "Слои",
    "popularity": 97
  },
  {
    "id": "ps-invert-selection",
    "appId": "photoshop",
    "title": "Инвертировать выделенную область",
    "description": "Меняет выделение местами: выделяет всё кроме текущего объекта",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "I"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "I"
      ]
    },
    "category": "Выделение",
    "popularity": 96
  },
  {
    "id": "ai-create-outlines",
    "appId": "illustrator",
    "title": "Преобразовать текст в кривые (Create Outlines)",
    "description": "Переводит шрифтовые надписи в векторные контуры для отправки в типографию без шрифтовых сбоев",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "O"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "O"
      ]
    },
    "category": "Типографика",
    "popularity": 99
  },
  {
    "id": "ai-clipping-mask",
    "appId": "illustrator",
    "title": "Создать обтравочную маску (Clipping Mask)",
    "description": "Обрезает нижележащие векторные объекты или фото по форме верхнего контура",
    "keys": {
      "windows": [
        "Ctrl",
        "7"
      ],
      "macos": [
        "Cmd",
        "7"
      ]
    },
    "category": "Маски и слои",
    "popularity": 97
  },
  {
    "id": "ai-shape-builder",
    "appId": "illustrator",
    "title": "Инструмент создания фигур (Shape Builder Tool)",
    "description": "Быстрое объединение и вычитание пересекающихся векторных контуров курсором",
    "keys": {
      "windows": [
        "Shift",
        "M"
      ]
    },
    "category": "Инструменты векторной графики",
    "popularity": 98
  },
  {
    "id": "ai-outline-view",
    "appId": "illustrator",
    "title": "Режим контуров (Outline View)",
    "description": "Отображает каркас векторных линий без заливок и эффектов для проверки точности стыковки",
    "keys": {
      "windows": [
        "Ctrl",
        "Y"
      ],
      "macos": [
        "Cmd",
        "Y"
      ]
    },
    "category": "Режимы просмотра",
    "popularity": 95
  },
  {
    "id": "cnv-text",
    "appId": "canva",
    "title": "Быстрое добавление текстового блока",
    "description": "Создает новое текстовое поле на активном слайде",
    "keys": {
      "windows": [
        "T"
      ]
    },
    "category": "Текст и фигуры",
    "popularity": 96
  },
  {
    "id": "cnv-rect",
    "appId": "canva",
    "title": "Вставить прямоугольник",
    "description": "Быстрое создание прямоугольника для плашек или фона",
    "keys": {
      "windows": [
        "R"
      ]
    },
    "category": "Текст и фигуры",
    "popularity": 94
  },
  {
    "id": "cnv-circle",
    "appId": "canva",
    "title": "Вставить круг",
    "description": "Создание круглой формы под аватар или бейдж",
    "keys": {
      "windows": [
        "C"
      ]
    },
    "category": "Текст и фигуры",
    "popularity": 93
  },
  {
    "id": "cnv-group",
    "appId": "canva",
    "title": "Сгруппировать / разгруппировать объекты",
    "description": "Объединение графики и текста для совместного перемещения",
    "keys": {
      "windows": [
        "Ctrl",
        "G"
      ]
    },
    "category": "Объекты и слои",
    "popularity": 95
  },
  {
    "id": "cnv-copy-style",
    "appId": "canva",
    "title": "Копировать стиль оформления (кисть формата)",
    "description": "Переносит шрифт, цвет и тени на другой элемент",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "C"
      ]
    },
    "category": "Стилизация",
    "popularity": 91
  },
  {
    "id": "pp-open-window",
    "appId": "powerpivot",
    "title": "Открыть окно Power Pivot (Управление моделью)",
    "description": "Запуск отдельного окна управления реляционной моделью данных Excel",
    "keys": {
      "windows": [
        "Alt -> Y2 -> M"
      ]
    },
    "category": "Модель данных",
    "popularity": 98
  },
  {
    "id": "pp-diagram-view",
    "appId": "powerpivot",
    "title": "Режим представления диаграммы (Diagram View)",
    "description": "Графическое отображение таблиц фактов, измерений и связей между ними",
    "keys": {
      "windows": [
        "Кнопка «Представление диаграммы»"
      ]
    },
    "category": "Модель данных",
    "popularity": 99
  },
  {
    "id": "pp-create-relationship",
    "appId": "powerpivot",
    "title": "Создать связь между таблицами протягиванием",
    "description": "Соединение поля внешнего ключа с полем первичного ключа мыши",
    "keys": {
      "windows": [
        "Drag and Drop между полями"
      ]
    },
    "category": "Связи",
    "popularity": 99
  },
  {
    "id": "pp-new-measure",
    "appId": "powerpivot",
    "title": "Создать вычисляемую меру DAX (New Measure)",
    "description": "Добавление агрегирующей меры для анализа в сводных таблицах",
    "keys": {
      "windows": [
        "Кнопка «Новая мера»"
      ]
    },
    "category": "DAX меры",
    "popularity": 98
  },
  {
    "id": "pp-calc-column",
    "appId": "powerpivot",
    "title": "Добавить вычисляемый столбец (Calculated Column)",
    "description": "Построчный расчет значений с использованием формул DAX",
    "keys": {
      "windows": [
        "Клик по колонке «Добавить столбец»"
      ]
    },
    "category": "Вычисления",
    "popularity": 96
  },
  {
    "id": "pp-hierarchy-create",
    "appId": "powerpivot",
    "title": "Создать аналитическую иерархию (Год -> Месяц -> День)",
    "description": "Группировка связанных столбцов для быстрого бурения (Drilldown)",
    "keys": {
      "windows": [
        "Создать иерархию на панели диаграммы"
      ]
    },
    "category": "Иерархии",
    "popularity": 94
  },
  {
    "id": "pp-format-currency",
    "appId": "powerpivot",
    "title": "Формат числа как денежный с разделителями тысяч",
    "description": "Настройка формата отображения финансовой меры",
    "keys": {
      "windows": [
        "Форматирование -> Денежный"
      ]
    },
    "category": "Форматирование",
    "popularity": 95
  },
  {
    "id": "pp-mark-date-table",
    "appId": "powerpivot",
    "title": "Пометить как таблицу дат (Mark as Date Table)",
    "description": "Включает функции Time Intelligence (YTD, QTD, SAMEPERIODLASTYEAR) в DAX",
    "keys": {
      "windows": [
        "Конструкт -> Пометить как таблицу дат"
      ]
    },
    "category": "Настройки",
    "popularity": 97
  },
  {
    "id": "pq-unpivot-columns",
    "appId": "powerquery",
    "title": "Отменить свертывание столбцов (Unpivot Columns)",
    "description": "Трансформация матрицы дат и сумм в плоскую таблицу: Атрибут и Значение",
    "keys": {
      "windows": [
        "Преобразование -> Отменить свертывание"
      ]
    },
    "category": "Трансформация",
    "popularity": 99
  },
  {
    "id": "pq-merge-queries",
    "appId": "powerquery",
    "title": "Объединить запросы (Merge Queries — аналог ВПР / SQL JOIN)",
    "description": "Подтягивание столбцов из справочника по общему ключу",
    "keys": {
      "windows": [
        "Главная -> Объединить запросы"
      ]
    },
    "category": "Связи",
    "popularity": 98
  },
  {
    "id": "pq-append-queries",
    "appId": "powerquery",
    "title": "Добавить запросы (Append Queries — аналог UNION ALL)",
    "description": "Вертикальное склеивание нескольких одинаковых отчетов за разные месяцы",
    "keys": {
      "windows": [
        "Главная -> Добавить запросы"
      ]
    },
    "category": "Трансформация",
    "popularity": 97
  },
  {
    "id": "pq-split-column",
    "appId": "powerquery",
    "title": "Разделить столбец по разделителю (пробел, точка с запятой)",
    "description": "Разбивка ФИО или артикула на независимые колонки",
    "keys": {
      "windows": [
        "Преобразование -> Разделить столбец"
      ]
    },
    "category": "Трансформация",
    "popularity": 98
  },
  {
    "id": "pq-conditional-column",
    "appId": "powerquery",
    "title": "Добавить условный столбец (ЕСЛИ / ТОГДА / ИНАЧЕ)",
    "description": "Категоризация данных по условиям диапазонов значений",
    "keys": {
      "windows": [
        "Добавление столбца -> Условный столбец"
      ]
    },
    "category": "Вычисления",
    "popularity": 96
  },
  {
    "id": "pq-remove-duplicates",
    "appId": "powerquery",
    "title": "Удалить дубликаты строк",
    "description": "Оставляет только уникальные записи по выделенным колонкам",
    "keys": {
      "windows": [
        "Правый клик по заголовку -> Удалить дубликаты"
      ]
    },
    "category": "Очистка",
    "popularity": 98
  },
  {
    "id": "fx-merge-pdf",
    "appId": "foxit",
    "title": "Объединить несколько файлов в один PDF",
    "description": "Склеивание документов, договоров и сканов в единый файл",
    "keys": {
      "windows": [
        "Файл -> Объединить файлы"
      ]
    },
    "category": "Страницы",
    "popularity": 98
  },
  {
    "id": "fx-organize-pages",
    "appId": "foxit",
    "title": "Управление страницами (поворот, удаление, перестановка)",
    "description": "Визуальная сетка миниатюр для сортировки листов документа",
    "keys": {
      "windows": [
        "Вкладка «Страницы»"
      ]
    },
    "category": "Страницы",
    "popularity": 99
  },
  {
    "id": "fx-edit-text",
    "appId": "foxit",
    "title": "Редактировать существующий текст в PDF",
    "description": "Исправление опечаток и дат прямо внутри готового файла PDF",
    "keys": {
      "windows": [
        "Правка -> Редактировать текст"
      ]
    },
    "category": "Редактирование",
    "popularity": 98
  },
  {
    "id": "fx-add-stamp",
    "appId": "foxit",
    "title": "Поставить штамп (Оплачено, Согласовано, Копия верна)",
    "description": "Наложение электронных штампов с датой и фамилией",
    "keys": {
      "windows": [
        "Комментарии -> Штамп"
      ]
    },
    "category": "Рецензирование",
    "popularity": 97
  },
  {
    "id": "fx-redact-protect",
    "appId": "foxit",
    "title": "Скрытие конфиденциальных данных (Redaction)",
    "description": "Безвозвратное удаление персональных данных и номеров счетов под черную плашку",
    "keys": {
      "windows": [
        "Защита -> Пометить для скрытия"
      ]
    },
    "category": "Безопасность",
    "popularity": 96
  },
  {
    "id": "fx-ocr-scan",
    "appId": "foxit",
    "title": "Распознавание текста со скана (OCR)",
    "description": "Превращение отсканированной картинки в документ с поиском и копированием текста",
    "keys": {
      "windows": [
        "Преобразовать -> Распознать текст"
      ]
    },
    "category": "OCR",
    "popularity": 97
  },
  {
    "id": "fx-compare-documents",
    "appId": "foxit",
    "title": "Сравнение двух редакций PDF документа",
    "description": "Наглядное выделение изменений, удалений и правок в договоре",
    "keys": {
      "windows": [
        "Вид -> Сравнить"
      ]
    },
    "category": "Анализ",
    "popularity": 95
  },
  {
    "id": "tb-show-me",
    "appId": "tableau",
    "title": "Панель Show Me (Быстрый выбор типа визуализации)",
    "description": "Рекомендации графиков на основе выделенных измерений и показателей",
    "keys": {
      "windows": [
        "Ctrl",
        "1"
      ]
    },
    "category": "Визуализация",
    "popularity": 99
  },
  {
    "id": "tb-calculated-field",
    "appId": "tableau",
    "title": "Создать вычисляемое поле (Create Calculated Field)",
    "description": "Написание формул, условий IF и агрегаций SUM, AVG, LOD",
    "keys": {
      "windows": [
        "Анализ -> Создать вычисляемое поле"
      ]
    },
    "category": "Вычисления",
    "popularity": 99
  },
  {
    "id": "tb-filter-shelf",
    "appId": "tableau",
    "title": "Перетащить поле на полку фильтров (Filter Shelf)",
    "description": "Ограничение диапазона отображаемых данных",
    "keys": {
      "windows": [
        "Drag на полку Filters"
      ]
    },
    "category": "Фильтры",
    "popularity": 97
  },
  {
    "id": "tb-new-worksheet",
    "appId": "tableau",
    "title": "Создать новый рабочий лист (New Worksheet)",
    "description": "Добавляет новый аналитический лист",
    "keys": {
      "windows": [
        "Ctrl",
        "M"
      ]
    },
    "category": "Листы",
    "popularity": 98
  },
  {
    "id": "tb-new-dashboard",
    "appId": "tableau",
    "title": "Создать новый дашборд (New Dashboard)",
    "description": "Компоновка интерактивной сводной панели из созданных графиков",
    "keys": {
      "windows": [
        "Дашборд -> Новый дашборд"
      ]
    },
    "category": "Дашборды",
    "popularity": 97
  },
  {
    "id": "tb-export-image",
    "appId": "tableau",
    "title": "Экспорт графика в виде изображения высокого разрешения",
    "description": "Сохранение визуализации для презентаций и отчетов",
    "keys": {
      "windows": [
        "Рабочий лист -> Экспорт -> Изображение"
      ]
    },
    "category": "Экспорт",
    "popularity": 95
  },
  {
    "id": "reader-fit-width",
    "appId": "acrobat-reader",
    "title": "По ширине окна просмотра",
    "description": "Масштабирует страницу по ширине окна",
    "keys": { "windows": ["Ctrl", "2"] },
    "category": "Масштаб",
    "popularity": 95
  },
  {
    "id": "reader-fit-page",
    "appId": "acrobat-reader",
    "title": "Страница целиком (Fit Page)",
    "description": "Вписывает страницу целиком в окно программы",
    "keys": { "windows": ["Ctrl", "0"] },
    "category": "Масштаб",
    "popularity": 97
  },
  {
    "id": "reader-actual-size",
    "appId": "acrobat-reader",
    "title": "Реальный масштаб 100%",
    "description": "Отображение страницы в масштабе 1:1",
    "keys": { "windows": ["Ctrl", "1"] },
    "category": "Масштаб",
    "popularity": 91
  },
  {
    "id": "reader-rotate-clockwise",
    "appId": "acrobat-reader",
    "title": "Повернуть по часовой стрелке",
    "description": "Поворот текущего разворота на 90 градусов",
    "keys": { "windows": ["Ctrl", "Shift", "+"] },
    "category": "Ориентация",
    "popularity": 94
  },
  {
    "id": "reader-rotate-counter",
    "appId": "acrobat-reader",
    "title": "Повернуть против часовой стрелки",
    "description": "Поворот текущего листа влево на 90 градусов",
    "keys": { "windows": ["Ctrl", "Shift", "-"] },
    "category": "Ориентация",
    "popularity": 90
  },
  {
    "id": "reader-first-page",
    "appId": "acrobat-reader",
    "title": "К первой странице",
    "description": "Мгновенный переход к титульной странице документа",
    "keys": { "windows": ["Home"] },
    "category": "Навигация",
    "popularity": 92
  },
  {
    "id": "reader-last-page",
    "appId": "acrobat-reader",
    "title": "К последней странице",
    "description": "Переход к заключительной странице документа",
    "keys": { "windows": ["End"] },
    "category": "Навигация",
    "popularity": 91
  },
  {
    "id": "reader-bookmarks-panel",
    "appId": "acrobat-reader",
    "title": "Панель закладок и оглавления",
    "description": "Быстрое открытие и скрытие интерактивного содержания",
    "keys": { "windows": ["F4"] },
    "category": "Интерфейс",
    "popularity": 89
  },
  {
    "id": "reader-search-advanced",
    "appId": "acrobat-reader",
    "title": "Расширенный поиск по всем PDF в папке",
    "description": "Глубокий сквозной поиск по каталогу документов",
    "keys": { "windows": ["Ctrl", "Shift", "F"] },
    "category": "Поиск",
    "popularity": 93
  },
  {
    "id": "pro-edit-pdf",
    "appId": "acrobat-pro",
    "title": "Редактировать текст и изображения PDF",
    "description": "Переход в режим прямого редактирования абзацев и векторных картинок",
    "keys": { "windows": ["Инструменты -> Редактировать PDF"] },
    "category": "Редактирование",
    "popularity": 98
  },
  {
    "id": "pro-organize-pages",
    "appId": "acrobat-pro",
    "title": "Организация страниц (Thumbnails)",
    "description": "Сортировка, перемещение и удаление страниц в виде эскизов",
    "keys": { "windows": ["Shift", "Ctrl", "T"] },
    "category": "Страницы",
    "popularity": 96
  },
  {
    "id": "pro-insert-pages",
    "appId": "acrobat-pro",
    "title": "Вставить страницы из файла",
    "description": "Добавление листов из другого PDF файла в заданную позицию",
    "keys": { "windows": ["Ctrl", "Shift", "I"] },
    "category": "Страницы",
    "popularity": 94
  },
  {
    "id": "pro-extract-pages",
    "appId": "acrobat-pro",
    "title": "Извлечь страницы в отдельный PDF",
    "description": "Экспорт выбранных листов в новый самостоятельный документ",
    "keys": { "windows": ["Ctrl", "Shift", "D"] },
    "category": "Страницы",
    "popularity": 93
  },
  {
    "id": "pro-ocr-text",
    "appId": "acrobat-pro",
    "title": "Распознать текст OCR",
    "description": "Превращение отсканированного изображения в редактируемый текст",
    "keys": { "windows": ["Инструменты -> Распознать текст"] },
    "category": "Распознавание",
    "popularity": 95
  },
  {
    "id": "pro-redact-text",
    "appId": "acrobat-pro",
    "title": "Безвозвратное сокрытие персональных данных (Redact)",
    "description": "Чернение конфиденциальных реквизитов с гарантией невосстановимости",
    "keys": { "windows": ["Shift", "Ctrl", "Y"] },
    "category": "Безопасность",
    "popularity": 92
  },
  {
    "id": "pro-optimize-pdf",
    "appId": "acrobat-pro",
    "title": "Оптимизация и сжатие размера файла",
    "description": "Уменьшение веса PDF для удобной отправки по электронной почте",
    "keys": { "windows": ["Файл -> Сжать PDF"] },
    "category": "Оптимизация",
    "popularity": 91
  },
  {
    "id": "pro-combine-files",
    "appId": "acrobat-pro",
    "title": "Объединить файлы в единый PDF",
    "description": "Мастер слияния документов Word, Excel и картинок в один том",
    "keys": { "windows": ["Инструменты -> Объединить файлы"] },
    "category": "Объединение",
    "popularity": 97
  },
  {
    "id": "pro-digital-signature",
    "appId": "acrobat-pro",
    "title": "Сертификация и цифровая подпись документа",
    "description": "Подписание PDF криптографическим сертификатом с меткой времени",
    "keys": { "windows": ["Инструменты -> Сертификаты"] },
    "category": "Безопасность",
    "popularity": 93
  },
  {
    "id": "pdfx-new-document",
    "appId": "pdf-xchange",
    "title": "Создать новый документ",
    "description": "Создание чистого листа или импорт со сканера",
    "keys": { "windows": ["Ctrl", "N"] },
    "category": "Документы",
    "popularity": 92
  },
  {
    "id": "pdfx-rotate-pages",
    "appId": "pdf-xchange",
    "title": "Поворот выбранных страниц",
    "description": "Диалог точного поворота четных или нечетных листов",
    "keys": { "windows": ["Ctrl", "Shift", "R"] },
    "category": "Страницы",
    "popularity": 96
  },
  {
    "id": "pdfx-delete-pages",
    "appId": "pdf-xchange",
    "title": "Удалить выбранные страницы",
    "description": "Удаление диапазона листов из файла",
    "keys": { "windows": ["Ctrl", "Shift", "D"] },
    "category": "Страницы",
    "popularity": 95
  },
  {
    "id": "pdfx-insert-pages",
    "appId": "pdf-xchange",
    "title": "Вставить страницы из файла",
    "description": "Внедрение листов из внешнего PDF",
    "keys": { "windows": ["Ctrl", "Shift", "I"] },
    "category": "Страницы",
    "popularity": 94
  },
  {
    "id": "pdfx-extract-pages",
    "appId": "pdf-xchange",
    "title": "Извлечь страницы",
    "description": "Сохранение диапазона страниц в отдельный файл",
    "keys": { "windows": ["Ctrl", "Shift", "E"] },
    "category": "Страницы",
    "popularity": 93
  },
  {
    "id": "pdfx-ocr-dialog",
    "appId": "pdf-xchange",
    "title": "Распознавание текста OCR",
    "description": "Быстрый запуск оптического распознавания страниц",
    "keys": { "windows": ["Ctrl", "Shift", "C"] },
    "category": "OCR",
    "popularity": 97
  },
  {
    "id": "pdfx-snapshot-tool",
    "appId": "pdf-xchange",
    "title": "Инструмент «Снимок»",
    "description": "Копирование выбранной области страницы в буфер как изображение",
    "keys": { "windows": ["G"] },
    "category": "Инструменты",
    "popularity": 94
  },
  {
    "id": "pdfx-hand-tool",
    "appId": "pdf-xchange",
    "title": "Инструмент «Рука»",
    "description": "Свободная прокрутка и панорамирование страниц",
    "keys": { "windows": ["H"] },
    "category": "Инструменты",
    "popularity": 96
  },
  {
    "id": "pdfx-highlight-text",
    "appId": "pdf-xchange",
    "title": "Маркер выделения текста",
    "description": "Выделение ключевых строк цветным маркером",
    "keys": { "windows": ["Ctrl", "Shift", "H"] },
    "category": "Аннотации",
    "popularity": 95
  },
  {
    "id": "foxit-fit-width",
    "appId": "foxit",
    "title": "По ширине окна",
    "description": "Вписывание страницы по ширине экрана",
    "keys": { "windows": ["Ctrl", "2"] },
    "category": "Масштаб",
    "popularity": 94
  },
  {
    "id": "foxit-fit-page",
    "appId": "foxit",
    "title": "Страница целиком",
    "description": "Отображение одной страницы целиком",
    "keys": { "windows": ["Ctrl", "0"] },
    "category": "Масштаб",
    "popularity": 96
  },
  {
    "id": "foxit-rotate-right",
    "appId": "foxit",
    "title": "Повернуть вправо на 90 градусов",
    "description": "Быстрый поворот страницы по часовой стрелке",
    "keys": { "windows": ["Ctrl", "Shift", "+"] },
    "category": "Ориентация",
    "popularity": 95
  },
  {
    "id": "foxit-flatten-doc",
    "appId": "foxit",
    "title": "Сведение аннотаций (Flatten Document)",
    "description": "Впекание комментариев и штампов в базовый слой",
    "keys": { "windows": ["Ctrl", "Shift", "F"] },
    "category": "Безопасность",
    "popularity": 91
  },
  {
    "id": "foxit-ocr-run",
    "appId": "foxit",
    "title": "Запуск распознавания текста OCR",
    "description": "Оцифровка сканированных бланков",
    "keys": { "windows": ["Преобразовать -> Распознать текст"] },
    "category": "OCR",
    "popularity": 93
  },
  {
    "id": "fr-new-ocr-task",
    "appId": "finereader",
    "title": "Новая задача распознавания",
    "description": "Создание нового проекта оцифровки",
    "keys": { "windows": ["Ctrl", "N"] },
    "category": "Задачи",
    "popularity": 96
  },
  {
    "id": "fr-open-in-ocr",
    "appId": "finereader",
    "title": "Открыть в OCR-редакторе",
    "description": "Открытие документа для ручной разметки областей текста и таблиц",
    "keys": { "windows": ["Ctrl", "O"] },
    "category": "Файлы",
    "popularity": 97
  },
  {
    "id": "fr-recognize-all",
    "appId": "finereader",
    "title": "Распознать все страницы",
    "description": "Пакетная обработка всех листов книги или папки",
    "keys": { "windows": ["Ctrl", "Shift", "R"] },
    "category": "OCR",
    "popularity": 99
  },
  {
    "id": "fr-recognize-page",
    "appId": "finereader",
    "title": "Распознать текущую страницу",
    "description": "Оцифровка только открытой активной страницы",
    "keys": { "windows": ["Ctrl", "R"] },
    "category": "OCR",
    "popularity": 95
  },
  {
    "id": "fr-save-docx",
    "appId": "finereader",
    "title": "Сохранить в Microsoft Word",
    "description": "Экспорт распознанного текста в редактируемый формат DOCX",
    "keys": { "windows": ["Ctrl", "S"] },
    "category": "Экспорт",
    "popularity": 98
  },
  {
    "id": "fr-save-searchable-pdf",
    "appId": "finereader",
    "title": "Сохранить как PDF с поиском",
    "description": "Экспорт в архивный формат PDF/A со скрытым текстовым слоем",
    "keys": { "windows": ["Ctrl", "Shift", "S"] },
    "category": "Экспорт",
    "popularity": 97
  },
  {
    "id": "fr-image-editor",
    "appId": "finereader",
    "title": "Открыть редактор изображений",
    "description": "Устранение перекосов, удаление теней и осветление фона",
    "keys": { "windows": ["Ctrl", "Shift", "D"] },
    "category": "Изображения",
    "popularity": 93
  },
  {
    "id": "fr-zoom-in",
    "appId": "finereader",
    "title": "Увеличить масштаб",
    "description": "Приближение для проверки сомнительно распознанных символов",
    "keys": { "windows": ["Ctrl", "+"] },
    "category": "Масштаб",
    "popularity": 92
  },
  {
    "id": "fr-zoom-out",
    "appId": "finereader",
    "title": "Уменьшить масштаб",
    "description": "Отдаление для общего обзора структуры страницы",
    "keys": { "windows": ["Ctrl", "-"] },
    "category": "Масштаб",
    "popularity": 90
  },
  {
    "id": "pbi-refresh-data",
    "appId": "powerbi",
    "title": "Обновить все данные модели",
    "description": "Перезапрос всех подключенных таблиц, SQL и веб-источников",
    "keys": { "windows": ["Ctrl", "F5"] },
    "category": "Данные",
    "popularity": 98
  },
  {
    "id": "pbi-new-measure",
    "appId": "powerbi",
    "title": "Создать новую меру DAX",
    "description": "Быстрое добавление вычисляемой бизнес-меры",
    "keys": { "windows": ["Моделирование -> Создать меру"] },
    "category": "DAX",
    "popularity": 99
  },
  {
    "id": "pbi-new-column",
    "appId": "powerbi",
    "title": "Создать вычисляемый столбец",
    "description": "Добавление вычисляемого поля в таблицу данных",
    "keys": { "windows": ["Моделирование -> Создать столбец"] },
    "category": "DAX",
    "popularity": 95
  },
  {
    "id": "pbi-focus-mode",
    "appId": "powerbi",
    "title": "Режим фокусировки визуализации",
    "description": "Разворачивание выбранного графика на весь рабочий экран",
    "keys": { "windows": ["Alt", "Shift", "F10"] },
    "category": "Визуализация",
    "popularity": 94
  },
  {
    "id": "pbi-selection-pane",
    "appId": "powerbi",
    "title": "Панель выбора (Selection Pane)",
    "description": "Управление порядком наложения и видимостью графиков и карточек",
    "keys": { "windows": ["Вид -> Панель выбора"] },
    "category": "Интерфейс",
    "popularity": 92
  },
  {
    "id": "pbi-bookmarks-pane",
    "appId": "powerbi",
    "title": "Панель закладок (Bookmarks)",
    "description": "Создание состояний дашборда для интерактивного переключения",
    "keys": { "windows": ["Вид -> Закладки"] },
    "category": "Интерфейс",
    "popularity": 93
  },
  {
    "id": "pbi-publish-cloud",
    "appId": "powerbi",
    "title": "Опубликовать в Power BI Service",
    "description": "Отправка готового отчета в облачное пространство компании",
    "keys": { "windows": ["Главная -> Опубликовать"] },
    "category": "Публикация",
    "popularity": 97
  },
  {
    "id": "pbi-performance-analyzer",
    "appId": "powerbi",
    "title": "Анализатор производительности",
    "description": "Замер времени выполнения запросов DAX и отрисовки графиков",
    "keys": { "windows": ["Оптимизация -> Анализатор производительности"] },
    "category": "Оптимизация",
    "popularity": 90
  },
  {
    "id": "pbi-mobile-layout",
    "appId": "powerbi",
    "title": "Макет для мобильных телефонов",
    "description": "Верстка вертикальной версии дашборда для смартфонов",
    "keys": { "windows": ["Вид -> Мобильный макет"] },
    "category": "Верстка",
    "popularity": 91
  },
  {
    "id": "tab-swap-shelves",
    "appId": "tableau",
    "title": "Поменять местами строки и столбцы (Swap)",
    "description": "Мгновенная смена осей X и Y диаграммы",
    "keys": { "windows": ["Ctrl", "W"] },
    "category": "Построение",
    "popularity": 98
  },
  {
    "id": "tab-clear-sheet",
    "appId": "tableau",
    "title": "Очистить текущий лист",
    "description": "Сброс всех полей и фильтров на листе",
    "keys": { "windows": ["Alt", "Shift", "Backspace"] },
    "category": "Построение",
    "popularity": 92
  },
  {
    "id": "tab-describe-sheet",
    "appId": "tableau",
    "title": "Описание структуры листа",
    "description": "Сводка параметров, фильтров и формул активного листа",
    "keys": { "windows": ["Ctrl", "E"] },
    "category": "Диагностика",
    "popularity": 89
  },
  {
    "id": "tab-show-me",
    "appId": "tableau",
    "title": "Палитра диаграмм «Show Me»",
    "description": "Быстрый выбор рекомендованного типа графика",
    "keys": { "windows": ["Ctrl", "1"] },
    "category": "Интерфейс",
    "popularity": 95
  },
  {
    "id": "tab-presentation-mode",
    "appId": "tableau",
    "title": "Презентационный полноэкранный режим",
    "description": "Скрытие всех панелей инструментов для демонстрации руководителям",
    "keys": { "windows": ["F7"] },
    "category": "Презентация",
    "popularity": 94
  },
  {
    "id": "pq-advanced-editor",
    "appId": "powerquery",
    "title": "Расширенный редактор кода M",
    "description": "Прямое редактирование программного кода преобразования данных",
    "keys": { "windows": ["Просмотр -> Расширенный редактор"] },
    "category": "Код M",
    "popularity": 98
  },
  {
    "id": "pq-close-and-load",
    "appId": "powerquery",
    "title": "Закрыть и загрузить в модель",
    "description": "Применение всех шагов и передача таблицы в Excel",
    "keys": { "windows": ["Главная -> Закрыть и применить"] },
    "category": "Загрузка",
    "popularity": 99
  },
  {
    "id": "pq-refresh-preview",
    "appId": "powerquery",
    "title": "Обновить предварительный просмотр",
    "description": "Перерасчет данных для текущего шага",
    "keys": { "windows": ["F5"] },
    "category": "Данные",
    "popularity": 96
  },
  {
    "id": "pq-go-to-column",
    "appId": "powerquery",
    "title": "Перейти к столбцу по имени",
    "description": "Быстрый поиск нужной колонки среди сотен столбцов таблицы",
    "keys": { "windows": ["Ctrl", "G"] },
    "category": "Навигация",
    "popularity": 93
  },
  {
    "id": "pq-remove-columns",
    "appId": "powerquery",
    "title": "Удалить выделенные столбцы",
    "description": "Исключение ненужных колонок из модели данных",
    "keys": { "windows": ["Del"] },
    "category": "Преобразование",
    "popularity": 95
  },
  {
    "id": "pp-diagram-view",
    "appId": "powerpivot",
    "title": "Представление диаграммы связей",
    "description": "Визуальное отображение схемы «Звезда» и связей таблиц",
    "keys": { "windows": ["Главная -> Представление диаграммы"] },
    "category": "Модель",
    "popularity": 97
  },
  {
    "id": "pp-calculation-area",
    "appId": "powerpivot",
    "title": "Область вычислений мер",
    "description": "Показать/скрыть нижнюю сетку создания DAX формул",
    "keys": { "windows": ["Главная -> Область вычислений"] },
    "category": "DAX",
    "popularity": 96
  },
  {
    "id": "pp-manage-relationships",
    "appId": "powerpivot",
    "title": "Управление связями",
    "description": "Окно настройки кратности и направления фильтрации связей",
    "keys": { "windows": ["Конструктор -> Управление связями"] },
    "category": "Модель",
    "popularity": 94
  },
  {
    "id": "pp-create-hierarchy",
    "appId": "powerpivot",
    "title": "Создать иерархию полей",
    "description": "Группировка полей даты или географии в многоуровневую структуру",
    "keys": { "windows": ["Конструктор -> Создать иерархию"] },
    "category": "Иерархии",
    "popularity": 92
  },
  {
    "id": "pp-auto-sum",
    "appId": "powerpivot",
    "title": "Автосумма столбца",
    "description": "Мгновенное создание базовой меры SUM для выбранного столбца",
    "keys": { "windows": ["Alt", "="] },
    "category": "Меры",
    "popularity": 95
  },
  {
    "id": "figma-frame-tool",
    "appId": "figma",
    "title": "Инструмент создания фрейма (Frame)",
    "description": "Создание артборда или контейнера с готовыми размерами экранов",
    "keys": { "windows": ["F"], "macos": ["F"] },
    "category": "Инструменты",
    "popularity": 99
  },
  {
    "id": "figma-text-tool",
    "appId": "figma",
    "title": "Инструмент «Текст»",
    "description": "Вставка текстового блока",
    "keys": { "windows": ["T"], "macos": ["T"] },
    "category": "Инструменты",
    "popularity": 99
  },
  {
    "id": "figma-auto-layout",
    "appId": "figma",
    "title": "Обернуть в Auto Layout",
    "description": "Превращение слоев в адаптивную верстку с гибкими отступами",
    "keys": { "windows": ["Shift", "A"], "macos": ["Shift", "A"] },
    "category": "Auto Layout",
    "popularity": 99
  },
  {
    "id": "figma-remove-auto-layout",
    "appId": "figma",
    "title": "Удалить Auto Layout",
    "description": "Превращение автолейаута в обычную группу или фрейм",
    "keys": { "windows": ["Alt", "Shift", "A"], "macos": ["Option", "Shift", "A"] },
    "category": "Auto Layout",
    "popularity": 92
  },
  {
    "id": "figma-create-component",
    "appId": "figma",
    "title": "Создать мастер-компонент",
    "description": "Превращает выделенный элемент в переиспользуемый компонент дизайн-системы",
    "keys": { "windows": ["Ctrl", "Alt", "K"], "macos": ["Cmd", "Option", "K"] },
    "category": "Компоненты",
    "popularity": 98
  },
  {
    "id": "figma-detach-instance",
    "appId": "figma",
    "title": "Отвязать инстанс компонента (Detach)",
    "description": "Отсоединение копии от мастер-компонента для индивидуальной правки",
    "keys": { "windows": ["Ctrl", "Alt", "B"], "macos": ["Cmd", "Option", "B"] },
    "category": "Компоненты",
    "popularity": 95
  },
  {
    "id": "figma-deep-select",
    "appId": "figma",
    "title": "Прямой глубокий выбор вложенного слоя",
    "description": "Клик сквозь группы прямо по вложенному векторному объекту",
    "keys": { "windows": ["Ctrl", "Click"], "macos": ["Cmd", "Click"] },
    "category": "Выделение",
    "popularity": 97
  },
  {
    "id": "figma-show-hide-ui",
    "appId": "figma",
    "title": "Показать/скрыть панели интерфейса",
    "description": "Чистый экран для оценки дизайна без боковых панелей инструментов",
    "keys": { "windows": ["Ctrl", "\\"], "macos": ["Cmd", "\\"] },
    "category": "Интерфейс",
    "popularity": 94
  },
  {
    "id": "canva-add-text",
    "appId": "canva",
    "title": "Быстро добавить текстовый блок",
    "description": "Мгновенная вставка текста в центр активного листа",
    "keys": { "windows": ["T"] },
    "category": "Элементы",
    "popularity": 98
  },
  {
    "id": "canva-add-rectangle",
    "appId": "canva",
    "title": "Добавить прямоугольник",
    "description": "Вставка прямоугольной векторной фигуры",
    "keys": { "windows": ["R"] },
    "category": "Фигуры",
    "popularity": 97
  },
  {
    "id": "canva-add-circle",
    "appId": "canva",
    "title": "Добавить круг",
    "description": "Вставка круглого графического элемента",
    "keys": { "windows": ["C"] },
    "category": "Фигуры",
    "popularity": 96
  },
  {
    "id": "canva-add-line",
    "appId": "canva",
    "title": "Добавить линию",
    "description": "Вставка прямой соединительной или декоративной линии",
    "keys": { "windows": ["L"] },
    "category": "Фигуры",
    "popularity": 95
  },
  {
    "id": "canva-group-elements",
    "appId": "canva",
    "title": "Сгруппировать элементы",
    "description": "Объединение выделенных объектов в группу",
    "keys": { "windows": ["Ctrl", "G"], "macos": ["Cmd", "G"] },
    "category": "Группировка",
    "popularity": 96
  },
  {
    "id": "canva-ungroup-elements",
    "appId": "canva",
    "title": "Разгруппировать элементы",
    "description": "Разбиение группы на независимые слои",
    "keys": { "windows": ["Ctrl", "Shift", "G"], "macos": ["Cmd", "Shift", "G"] },
    "category": "Группировка",
    "popularity": 94
  },
  {
    "id": "canva-duplicate",
    "appId": "canva",
    "title": "Дублировать элемент",
    "description": "Создание точной копии объекта со сдвигом",
    "keys": { "windows": ["Ctrl", "D"], "macos": ["Cmd", "D"] },
    "category": "Редактирование",
    "popularity": 97
  },
  {
    "id": "canva-bring-forward",
    "appId": "canva",
    "title": "На один слой выше",
    "description": "Перемещение объекта поверх соседнего слоя",
    "keys": { "windows": ["Ctrl", "]"], "macos": ["Cmd", "]"] },
    "category": "Слои",
    "popularity": 92
  },
  {
    "id": "canva-send-backward",
    "appId": "canva",
    "title": "На один слой ниже",
    "description": "Перемещение объекта под соседний слой",
    "keys": { "windows": ["Ctrl", "["], "macos": ["Cmd", "["] },
    "category": "Слои",
    "popularity": 92
  },
  {
    "id": "ps-new-layer",
    "appId": "photoshop",
    "title": "Создать новый слой",
    "description": "Добавление чистого прозрачного растрового слоя",
    "keys": { "windows": ["Ctrl", "Shift", "N"], "macos": ["Cmd", "Shift", "N"] },
    "category": "Слои",
    "popularity": 99
  },
  {
    "id": "ps-duplicate-layer",
    "appId": "photoshop",
    "title": "Дублировать слой или выделение (Ctrl+J)",
    "description": "Копирование активного слоя или выделенной области на новый слой",
    "keys": { "windows": ["Ctrl", "J"], "macos": ["Cmd", "J"] },
    "category": "Слои",
    "popularity": 99
  },
  {
    "id": "ps-free-transform",
    "appId": "photoshop",
    "title": "Свободное трансформирование (Free Transform)",
    "description": "Масштабирование, поворот и наклон слоя",
    "keys": { "windows": ["Ctrl", "T"], "macos": ["Cmd", "T"] },
    "category": "Трансформация",
    "popularity": 99
  },
  {
    "id": "ps-merge-visible",
    "appId": "photoshop",
    "title": "Слить копию всех слоев в новый слой",
    "description": "Создание результирующего отпечатка всего коллажа без схлопывания слоев",
    "keys": { "windows": ["Ctrl", "Alt", "Shift", "E"], "macos": ["Cmd", "Option", "Shift", "E"] },
    "category": "Слои",
    "popularity": 97
  },
  {
    "id": "ps-invert-selection",
    "appId": "photoshop",
    "title": "Инвертировать выделение",
    "description": "Выделение всего, кроме текущего фрагмента",
    "keys": { "windows": ["Ctrl", "Shift", "I"], "macos": ["Cmd", "Shift", "I"] },
    "category": "Выделение",
    "popularity": 96
  },
  {
    "id": "ps-deselect",
    "appId": "photoshop",
    "title": "Снять выделение",
    "description": "Снятие марширующих муравьев выделенной зоны",
    "keys": { "windows": ["Ctrl", "D"], "macos": ["Cmd", "D"] },
    "category": "Выделение",
    "popularity": 98
  },
  {
    "id": "ps-fit-on-screen",
    "appId": "photoshop",
    "title": "По размеру экрана",
    "description": "Вписывание холста в видимую область окна",
    "keys": { "windows": ["Ctrl", "0"], "macos": ["Cmd", "0"] },
    "category": "Вид",
    "popularity": 98
  },
  {
    "id": "ps-actual-pixels",
    "appId": "photoshop",
    "title": "Реальный масштаб 100%",
    "description": "Просмотр деталей изображения в оригинальном разрешении",
    "keys": { "windows": ["Ctrl", "1"], "macos": ["Cmd", "1"] },
    "category": "Вид",
    "popularity": 95
  },
  {
    "id": "ps-brush-tool",
    "appId": "photoshop",
    "title": "Инструмент «Кисть»",
    "description": "Основной инструмент рисования и маскирования",
    "keys": { "windows": ["B"], "macos": ["B"] },
    "category": "Инструменты",
    "popularity": 99
  },
  {
    "id": "ps-brush-size-dec",
    "appId": "photoshop",
    "title": "Уменьшить диаметр кисти",
    "description": "Быстрое уменьшение размера кончика кисти",
    "keys": { "windows": ["["] },
    "category": "Кисти",
    "popularity": 97
  },
  {
    "id": "ps-brush-size-inc",
    "appId": "photoshop",
    "title": "Увеличить диаметр кисти",
    "description": "Быстрое увеличение размера кончика кисти",
    "keys": { "windows": ["]"] },
    "category": "Кисти",
    "popularity": 97
  },
  {
    "id": "ai-selection-tool",
    "appId": "illustrator",
    "title": "Инструмент выделения (Selection Tool)",
    "description": "Черная стрелка для перемещения и масштабирования фигур",
    "keys": { "windows": ["V"], "macos": ["V"] },
    "category": "Инструменты",
    "popularity": 99
  },
  {
    "id": "ai-direct-selection",
    "appId": "illustrator",
    "title": "Прямое выделение узлов (Direct Selection)",
    "description": "Белая стрелка для редактирования отдельных опорных точек кривых",
    "keys": { "windows": ["A"], "macos": ["A"] },
    "category": "Инструменты",
    "popularity": 99
  },
  {
    "id": "ai-pen-tool",
    "appId": "illustrator",
    "title": "Инструмент «Перо» (Pen Tool)",
    "description": "Построение прецизионных кривых Безье",
    "keys": { "windows": ["P"], "macos": ["P"] },
    "category": "Инструменты",
    "popularity": 99
  },
  {
    "id": "ai-make-clipping-mask",
    "appId": "illustrator",
    "title": "Создать обтравочную маску (Clipping Mask)",
    "description": "Ограничение видимости объектов контуром верхней фигуры",
    "keys": { "windows": ["Ctrl", "7"], "macos": ["Cmd", "7"] },
    "category": "Маски",
    "popularity": 97
  },
  {
    "id": "ai-release-clipping-mask",
    "appId": "illustrator",
    "title": "Отменить обтравочную маску",
    "description": "Извлечение элементов из маскирующего контура",
    "keys": { "windows": ["Ctrl", "Alt", "7"], "macos": ["Cmd", "Option", "7"] },
    "category": "Маски",
    "popularity": 93
  },
  {
    "id": "ai-group",
    "appId": "illustrator",
    "title": "Сгруппировать объекты",
    "description": "Объединение нескольких векторных контуров в группу",
    "keys": { "windows": ["Ctrl", "G"], "macos": ["Cmd", "G"] },
    "category": "Группировка",
    "popularity": 98
  },
  {
    "id": "ai-ungroup",
    "appId": "illustrator",
    "title": "Разгруппировать объекты",
    "description": "Разбиение векторной группы на отдельные фигуры",
    "keys": { "windows": ["Ctrl", "Shift", "G"], "macos": ["Cmd", "Shift", "G"] },
    "category": "Группировка",
    "popularity": 96
  },
  {
    "id": "ai-outline-mode",
    "appId": "illustrator",
    "title": "Каркасный режим контуров (Outline)",
    "description": "Отображение векторных скелетов линий без заливок и толщин",
    "keys": { "windows": ["Ctrl", "Y"], "macos": ["Cmd", "Y"] },
    "category": "Вид",
    "popularity": 96
  },
  {
    "id": "ai-join-paths",
    "appId": "illustrator",
    "title": "Соединить разомкнутые точки (Join)",
    "description": "Замыкание контура отрезком между двумя выбранными узлами",
    "keys": { "windows": ["Ctrl", "J"], "macos": ["Cmd", "J"] },
    "category": "Контуры",
    "popularity": 95
  },
  {
    "id": "ai-send-to-back",
    "appId": "illustrator",
    "title": "На самый задний план",
    "description": "Перемещение объекта в основание стека слоев",
    "keys": { "windows": ["Ctrl", "Shift", "["], "macos": ["Cmd", "Shift", "["] },
    "category": "Слои",
    "popularity": 94
  },
  {
    "id": "ai-bring-to-front",
    "appId": "illustrator",
    "title": "На самый передний план",
    "description": "Перемещение объекта на вершину стека слоев",
    "keys": { "windows": ["Ctrl", "Shift", "]"], "macos": ["Cmd", "Shift", "]"] },
    "category": "Слои",
    "popularity": 94
  }
];

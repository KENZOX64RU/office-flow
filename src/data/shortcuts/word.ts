import type { Shortcut } from '../../types/index.ts';

export const WORD_SHORTCUTS: Shortcut[] = [
  // ==========================================
  // 1. ТЕКСТ И СИМВОЛЫ
  // ==========================================
  {
    id: "wd-bold",
    appId: "word",
    title: "Полужирное начертание шрифта",
    description: "Делает выделенный текст полужирным или возвращает обычное начертание",
    keys: {
      windows: ["Ctrl", "B"],
      macos: ["Cmd", "B"],
      web: ["Ctrl", "B"]
    },
    category: "Текст и символы",
    popularity: 99
  },
  {
    id: "wd-italic",
    appId: "word",
    title: "Курсивное начертание",
    description: "Наклоняет выделенный текст курсивом",
    keys: {
      windows: ["Ctrl", "I"],
      macos: ["Cmd", "I"],
      web: ["Ctrl", "I"]
    },
    category: "Текст и символы",
    popularity: 98
  },
  {
    id: "wd-underline",
    appId: "word",
    title: "Подчёркивание текста",
    description: "Добавляет сплошную линию подчёркивания под выделенным фрагментом",
    keys: {
      windows: ["Ctrl", "U"],
      macos: ["Cmd", "U"],
      web: ["Ctrl", "U"]
    },
    category: "Текст и символы",
    popularity: 97
  },
  {
    id: "wd-double-underline",
    appId: "word",
    title: "Двойное подчёркивание",
    description: "Применяет строгое двойное подчёркивание текста (стандарт оформления сумм и итогов)",
    keys: {
      windows: ["Ctrl", "Shift", "D"],
      macos: ["Cmd", "Shift", "D"]
    },
    category: "Текст и символы",
    popularity: 82
  },
  {
    id: "wd-superscript",
    appId: "word",
    title: "Надстрочный знак (степень / верхний индекс)",
    description: "Превращает символ в степень или верхний индекс (например, м² или X³)",
    keys: {
      windows: ["Ctrl", "Shift", "+"],
      macos: ["Cmd", "Shift", "+"],
      web: ["Ctrl", "Shift", "+"]
    },
    category: "Текст и символы",
    popularity: 90
  },
  {
    id: "wd-subscript",
    appId: "word",
    title: "Подстрочный знак (нижний индекс)",
    description: "Превращает символ в нижний химический или математический индекс (например, H₂O)",
    keys: {
      windows: ["Ctrl", "="],
      macos: ["Cmd", "="],
      web: ["Ctrl", "="]
    },
    category: "Текст и символы",
    popularity: 87
  },
  {
    id: "wd-cycle-case",
    appId: "word",
    title: "Циклическое изменение регистра букв",
    description: "Переключает выделенный текст: ВСЕ ПРОПИСНЫЕ → все строчные → Как в предложениях",
    keys: {
      windows: ["Shift", "F3"],
      macos: ["Shift", "F3"]
    },
    category: "Текст и символы",
    popularity: 96
  },
  {
    id: "wd-all-caps",
    appId: "word",
    title: "Переключение режима ВСЕ ПРОПИСНЫЕ",
    description: "Форматирует все выделенные буквы как заглавные без ручного перенабора",
    keys: {
      windows: ["Ctrl", "Shift", "A"],
      macos: ["Cmd", "Shift", "A"]
    },
    category: "Текст и символы",
    popularity: 84
  },
  {
    id: "wd-small-caps",
    appId: "word",
    title: "Капитель (малые прописные буквы)",
    description: "Оформляет строчные буквы в виде уменьшенных заглавных для академических заголовков",
    keys: {
      windows: ["Ctrl", "Shift", "K"],
      macos: ["Cmd", "Shift", "K"]
    },
    category: "Текст и символы",
    popularity: 76
  },
  {
    id: "wd-font-increase-1pt",
    appId: "word",
    title: "Увеличить размер шрифта на 1 пункт",
    description: "Точная регулировка размера кегля с шагом ровно в 1 пт (например, с 11 до 12 пт)",
    keys: {
      windows: ["Ctrl", "]"],
      macos: ["Cmd", "]"]
    },
    category: "Текст и символы",
    popularity: 92
  },
  {
    id: "wd-font-decrease-1pt",
    appId: "word",
    title: "Уменьшить размер шрифта на 1 пункт",
    description: "Точная регулировка размера кегля в сторону уменьшения на 1 пт",
    keys: {
      windows: ["Ctrl", "["],
      macos: ["Cmd", "["]
    },
    category: "Текст и символы",
    popularity: 91
  },
  {
    id: "wd-font-grow-step",
    appId: "word",
    title: "Увеличить шрифт по стандартной шкале кеглей",
    description: "Шаговое увеличение размера шрифта по стандартному ряду (12 → 14 → 16 → 18 пт)",
    keys: {
      windows: ["Ctrl", "Shift", ">"],
      macos: ["Cmd", "Shift", ">"],
      web: ["Ctrl", "Shift", ">"]
    },
    category: "Текст и символы",
    popularity: 88
  },
  {
    id: "wd-font-shrink-step",
    appId: "word",
    title: "Уменьшить шрифт по стандартной шкале кеглей",
    description: "Шаговое уменьшение размера шрифта по стандартному ряду кеглей",
    keys: {
      windows: ["Ctrl", "Shift", "<"],
      macos: ["Cmd", "Shift", "<"],
      web: ["Ctrl", "Shift", "<"]
    },
    category: "Текст и символы",
    popularity: 88
  },
  {
    id: "wd-font-dialog",
    appId: "word",
    title: "Диалоговое окно «Шрифт»",
    description: "Открывает полное окно настройки гарнитуры, видоизменений, межзнакового интервала и кернинга",
    keys: {
      windows: ["Ctrl", "D"],
      macos: ["Cmd", "D"]
    },
    category: "Текст и символы",
    popularity: 89
  },
  {
    id: "wd-clear-format",
    appId: "word",
    title: "Очистить ручное форматирование символов",
    description: "Сбрасывает шрифт, цвет, размер и выделение к стандартному стилю абзаца",
    keys: {
      windows: ["Ctrl", "Space"],
      macos: ["Ctrl", "Space"],
      web: ["Ctrl", "Space"]
    },
    category: "Текст и символы",
    popularity: 96
  },
  {
    id: "wd-copy-format",
    appId: "word",
    title: "Скопировать формат («Формат по образцу»)",
    description: "Копирует параметры шрифта и абзаца без копирования самого текста",
    keys: {
      windows: ["Ctrl", "Shift", "C"],
      macos: ["Cmd", "Shift", "C"]
    },
    category: "Текст и символы",
    popularity: 95
  },
  {
    id: "wd-paste-format",
    appId: "word",
    title: "Вставить скопированный формат",
    description: "Применяет ранее скопированные параметры оформления к новому выделенному фрагменту",
    keys: {
      windows: ["Ctrl", "Shift", "V"],
      macos: ["Cmd", "Shift", "V"]
    },
    category: "Текст и символы",
    popularity: 95
  },

  // ==========================================
  // 2. АБЗАЦЫ И ВЫРАВНИВАНИЕ
  // ==========================================
  {
    id: "wd-align-center",
    appId: "word",
    title: "Выравнивание абзаца по центру",
    description: "Центрирует текущий абзац или выделенные строки между полями страницы",
    keys: {
      windows: ["Ctrl", "E"],
      macos: ["Cmd", "E"],
      web: ["Ctrl", "E"]
    },
    category: "Абзацы и выравнивание",
    popularity: 97
  },
  {
    id: "wd-align-left",
    appId: "word",
    title: "Выравнивание по левому краю",
    description: "Прижимает текст текущего абзаца к левому полю документа",
    keys: {
      windows: ["Ctrl", "L"],
      macos: ["Cmd", "L"],
      web: ["Ctrl", "L"]
    },
    category: "Абзацы и выравнивание",
    popularity: 96
  },
  {
    id: "wd-align-right",
    appId: "word",
    title: "Выравнивание по правому краю",
    description: "Прижимает текст к правому полю (стандарт для дат, реквизитов и подписей)",
    keys: {
      windows: ["Ctrl", "R"],
      macos: ["Cmd", "R"],
      web: ["Ctrl", "R"]
    },
    category: "Абзацы и выравнивание",
    popularity: 95
  },
  {
    id: "wd-align-justify",
    appId: "word",
    title: "Выравнивание по ширине страницы",
    description: "Растягивает текст между левым и правым полями с равномерными пробелами по ГОСТу",
    keys: {
      windows: ["Ctrl", "J"],
      macos: ["Cmd", "J"],
      web: ["Ctrl", "J"]
    },
    category: "Абзацы и выравнивание",
    popularity: 98
  },
  {
    id: "wd-line-space-1",
    appId: "word",
    title: "Одинарный межстрочный интервал (1.0)",
    description: "Устанавливает одинарный шаг между строками текущего абзаца",
    keys: {
      windows: ["Ctrl", "1"],
      macos: ["Cmd", "1"]
    },
    category: "Абзацы и выравнивание",
    popularity: 91
  },
  {
    id: "wd-line-space-2",
    appId: "word",
    title: "Двойной межстрочный интервал (2.0)",
    description: "Устанавливает двойной интервал для академических статей и черновиков",
    keys: {
      windows: ["Ctrl", "2"],
      macos: ["Cmd", "2"]
    },
    category: "Абзацы и выравнивание",
    popularity: 86
  },
  {
    id: "wd-line-space-15",
    appId: "word",
    title: "Полуторный межстрочный интервал (1.5)",
    description: "Устанавливает полуторный интервал между строками — обязательный стандарт ГОСТ",
    keys: {
      windows: ["Ctrl", "5"],
      macos: ["Cmd", "5"]
    },
    category: "Абзацы и выравнивание",
    popularity: 94
  },
  {
    id: "wd-paragraph-space-toggle",
    appId: "word",
    title: "Добавить или удалить 12 пт перед абзацем",
    description: "Переключает дополнительный вертикальный отступ перед началом текущего абзаца",
    keys: {
      windows: ["Ctrl", "0"],
      macos: ["Cmd", "0"]
    },
    category: "Абзацы и выравнивание",
    popularity: 79
  },
  {
    id: "wd-indent-left",
    appId: "word",
    title: "Увеличить отступ абзаца слева",
    description: "Сдвигает весь абзац вправо на один стандартный шаг табуляции (1,25 см)",
    keys: {
      windows: ["Ctrl", "M"],
      macos: ["Cmd", "M"]
    },
    category: "Абзацы и выравнивание",
    popularity: 88
  },
  {
    id: "wd-unindent-left",
    appId: "word",
    title: "Уменьшить отступ абзаца слева",
    description: "Возвращает абзац влево на один шаг табуляции",
    keys: {
      windows: ["Ctrl", "Shift", "M"],
      macos: ["Cmd", "Shift", "M"]
    },
    category: "Абзацы и выравнивание",
    popularity: 85
  },
  {
    id: "wd-hanging-indent",
    appId: "word",
    title: "Создать висячий отступ первой строки",
    description: "Сдвигает вправо все строки абзаца, кроме самой первой (идеально для библиографии)",
    keys: {
      windows: ["Ctrl", "T"],
      macos: ["Cmd", "T"]
    },
    category: "Абзацы и выравнивание",
    popularity: 83
  },
  {
    id: "wd-unhanging-indent",
    appId: "word",
    title: "Уменьшить висячий отступ",
    description: "Возвращает последующие строки абзаца влево",
    keys: {
      windows: ["Ctrl", "Shift", "T"],
      macos: ["Cmd", "Shift", "T"]
    },
    category: "Абзацы и выравнивание",
    popularity: 78
  },
  {
    id: "wd-clear-para",
    appId: "word",
    title: "Сбросить форматирование абзаца",
    description: "Сбрасывает отступы, межстрочные интервалы и выравнивание к стандартным параметрам стиля",
    keys: {
      windows: ["Ctrl", "Q"],
      macos: ["Cmd", "Option", "Q"]
    },
    category: "Абзацы и выравнивание",
    popularity: 85
  },

  // ==========================================
  // 3. СТИЛИ И СТРУКТУРА
  // ==========================================
  {
    id: "wd-heading-1",
    appId: "word",
    title: "Применить стиль «Заголовок 1»",
    description: "Быстро назначает выделенному абзацу стиль первого уровня для оглавления",
    keys: {
      windows: ["Ctrl", "Alt", "1"],
      macos: ["Cmd", "Option", "1"],
      web: ["Alt", "Win", "1"]
    },
    category: "Стили и структура",
    popularity: 96
  },
  {
    id: "wd-heading-2",
    appId: "word",
    title: "Применить стиль «Заголовок 2»",
    description: "Назначает выделенному абзацу стиль второго уровня (подраздел)",
    keys: {
      windows: ["Ctrl", "Alt", "2"],
      macos: ["Cmd", "Option", "2"],
      web: ["Alt", "Win", "2"]
    },
    category: "Стили и структура",
    popularity: 93
  },
  {
    id: "wd-heading-3",
    appId: "word",
    title: "Применить стиль «Заголовок 3»",
    description: "Назначает выделенному абзацу стиль третьего уровня (пункт подраздела)",
    keys: {
      windows: ["Ctrl", "Alt", "3"],
      macos: ["Cmd", "Option", "3"],
      web: ["Alt", "Win", "3"]
    },
    category: "Стили и структура",
    popularity: 89
  },
  {
    id: "wd-style-normal",
    appId: "word",
    title: "Применить стиль «Обычный» (Normal)",
    description: "Сбрасывает заголовок или спец-блок к стандартному тексту документа",
    keys: {
      windows: ["Ctrl", "Shift", "N"],
      macos: ["Cmd", "Shift", "N"]
    },
    category: "Стили и структура",
    popularity: 90
  },
  {
    id: "wd-apply-styles-pane",
    appId: "word",
    title: "Открыть диалог «Применить стили»",
    description: "Открывает компактное плавающее поле быстрого выбора и назначения стиля по имени",
    keys: {
      windows: ["Ctrl", "Shift", "S"],
      macos: ["Cmd", "Shift", "Option", "S"]
    },
    category: "Стили и структура",
    popularity: 82
  },
  {
    id: "wd-styles-task-pane",
    appId: "word",
    title: "Открыть боковую панель «Стили»",
    description: "Вызывает полную панель инспекции стилей со всеми доступными стилями документа",
    keys: {
      windows: ["Ctrl", "Alt", "Shift", "S"],
      macos: ["Cmd", "Option", "Shift", "S"]
    },
    category: "Стили и структура",
    popularity: 81
  },
  {
    id: "wd-move-paragraph-up",
    appId: "word",
    title: "Переместить абзац или строку вверх",
    description: "Сдвигает текущий абзац или строку выше соседнего текста без вырезания и вставки",
    keys: {
      windows: ["Alt", "Shift", "Up"],
      macos: ["Option", "Shift", "Up"]
    },
    category: "Стили и структура",
    popularity: 92
  },
  {
    id: "wd-move-paragraph-down",
    appId: "word",
    title: "Переместить абзац или строку вниз",
    description: "Сдвигает текущий абзац ниже следующего без использования буфера обмена",
    keys: {
      windows: ["Alt", "Shift", "Down"],
      macos: ["Option", "Shift", "Down"]
    },
    category: "Стили и структура",
    popularity: 92
  },

  // ==========================================
  // 4. РАЗРЫВЫ, СИМВОЛЫ И ВСТАВКА
  // ==========================================
  {
    id: "wd-page-break",
    appId: "word",
    title: "Вставить принудительный разрыв страницы",
    description: "Мгновенно переносит последующий текст на новую страницу без пустых абзацев",
    keys: {
      windows: ["Ctrl", "Enter"],
      macos: ["Cmd", "Enter"],
      web: ["Ctrl", "Enter"]
    },
    category: "Разрывы и спецсимволы",
    popularity: 99
  },
  {
    id: "wd-line-break",
    appId: "word",
    title: "Вставить мягкий разрыв строки (без нового абзаца)",
    description: "Переносит текст на новую строку внутри того же абзаца (сохраняя списки и отступы)",
    keys: {
      windows: ["Shift", "Enter"],
      macos: ["Shift", "Enter"],
      web: ["Shift", "Enter"]
    },
    category: "Разрывы и спецсимволы",
    popularity: 96
  },
  {
    id: "wd-column-break",
    appId: "word",
    title: "Вставить разрыв колонки",
    description: "В многоколоночной вёрстке переносит текст в начало следующей колонки",
    keys: {
      windows: ["Ctrl", "Shift", "Enter"],
      macos: ["Cmd", "Shift", "Enter"]
    },
    category: "Разрывы и спецсимволы",
    popularity: 80
  },
  {
    id: "wd-nonbreaking-space",
    appId: "word",
    title: "Вставить неразрывный пробел",
    description: "Предотвращает перенос на следующую строку предлогов, единиц («100 руб.») и инициалов («А. С. Пушкин»)",
    keys: {
      windows: ["Ctrl", "Shift", "Space"],
      macos: ["Option", "Space"],
      web: ["Ctrl", "Shift", "Space"]
    },
    category: "Разрывы и спецсимволы",
    popularity: 95
  },
  {
    id: "wd-nonbreaking-hyphen",
    appId: "word",
    title: "Вставить неразрывный дефис",
    description: "Запрещает разрыв слов с дефисом на границе строк (например, ГОСТ 7.0.5–2008 или Ростов-на-Дону)",
    keys: {
      windows: ["Ctrl", "Shift", "-"],
      macos: ["Cmd", "Shift", "-"]
    },
    category: "Разрывы и спецсимволы",
    popularity: 88
  },
  {
    id: "wd-em-dash",
    appId: "word",
    title: "Вставить длинное тире (—)",
    description: "Вставляет типографское длинное тире без автозамены с цифровой клавиатуры",
    keys: {
      windows: ["Ctrl", "Alt", "Num -"],
      macos: ["Option", "Shift", "-"]
    },
    category: "Разрывы и спецсимволы",
    popularity: 93
  },
  {
    id: "wd-en-dash",
    appId: "word",
    title: "Вставить среднее тире (–)",
    description: "Вставляет короткое тире для числовых интервалов (например: 2020–2026)",
    keys: {
      windows: ["Ctrl", "Num -"],
      macos: ["Option", "-"]
    },
    category: "Разрывы и спецсимволы",
    popularity: 87
  },
  {
    id: "wd-insert-date",
    appId: "word",
    title: "Вставить текущую дату как обновляемое поле",
    description: "Вставляет поле даты DATE, которое автоматически принимает сегодняшнее число",
    keys: {
      windows: ["Alt", "Shift", "D"],
      macos: ["Ctrl", "Shift", "D"]
    },
    category: "Разрывы и спецсимволы",
    popularity: 89
  },
  {
    id: "wd-insert-time",
    appId: "word",
    title: "Вставить текущее время",
    description: "Вставляет поле TIME с текущим системным временем",
    keys: {
      windows: ["Alt", "Shift", "T"],
      macos: ["Ctrl", "Shift", "T"]
    },
    category: "Разрывы и спецсимволы",
    popularity: 81
  },
  {
    id: "wd-insert-equation",
    appId: "word",
    title: "Вставить математическое уравнение / формулу",
    description: "Мгновенно создаёт блок формулы с поддержкой ввода LaTeX и спецсимволов",
    keys: {
      windows: ["Alt", "="],
      macos: ["Ctrl", "="]
    },
    category: "Разрывы и спецсимволы",
    popularity: 89
  },
  {
    id: "wd-copyright-symbol",
    appId: "word",
    title: "Вставить знак копирайта ©",
    description: "Быстрая вставка символа авторского права без меню вставки спецсимволов",
    keys: {
      windows: ["Ctrl", "Alt", "C"],
      macos: ["Option", "G"]
    },
    category: "Разрывы и спецсимволы",
    popularity: 85
  },
  {
    id: "wd-trademark-symbol",
    appId: "word",
    title: "Вставить символ торговой марки ™",
    description: "Быстрая вставка знака Trademark",
    keys: {
      windows: ["Ctrl", "Alt", "T"],
      macos: ["Option", "2"]
    },
    category: "Разрывы и спецсимволы",
    popularity: 80
  },

  // ==========================================
  // 5. НАВИГАЦИЯ И ВЫДЕЛЕНИЕ
  // ==========================================
  {
    id: "wd-nav-pane",
    appId: "word",
    title: "Открыть панель навигации по заголовкам",
    description: "Открывает левую боковую панель со структурой разделов, миниатюрами страниц и поиском",
    keys: {
      windows: ["Ctrl", "F"],
      macos: ["Cmd", "F"],
      web: ["Ctrl", "F"]
    },
    category: "Навигация и выделение",
    popularity: 98
  },
  {
    id: "wd-goto-dialog",
    appId: "word",
    title: "Перейти к странице / разделу / строке (Go To)",
    description: "Открывает окно мгновенного прыжка к конкретной странице, сноске, разделу или закладке",
    keys: {
      windows: ["Ctrl", "G"],
      macos: ["Cmd", "Option", "G"],
      web: ["F5"]
    },
    category: "Навигация и выделение",
    popularity: 91
  },
  {
    id: "wd-doc-start",
    appId: "word",
    title: "Перейти в самое начало документа",
    description: "Мгновенно перемещает курсор в первую позицию первой страницы",
    keys: {
      windows: ["Ctrl", "Home"],
      macos: ["Cmd", "Home"],
      web: ["Ctrl", "Home"]
    },
    category: "Навигация и выделение",
    popularity: 93
  },
  {
    id: "wd-doc-end",
    appId: "word",
    title: "Перейти в самый конец документа",
    description: "Перемещает курсор за последний знак последней страницы",
    keys: {
      windows: ["Ctrl", "End"],
      macos: ["Cmd", "End"],
      web: ["Ctrl", "End"]
    },
    category: "Навигация и выделение",
    popularity: 93
  },
  {
    id: "wd-word-left",
    appId: "word",
    title: "Переместиться на одно слово влево",
    description: "Прыжок курсора к началу текущего или предыдущего слова",
    keys: {
      windows: ["Ctrl", "Left"],
      macos: ["Option", "Left"],
      web: ["Ctrl", "Left"]
    },
    category: "Навигация и выделение",
    popularity: 92
  },
  {
    id: "wd-word-right",
    appId: "word",
    title: "Переместиться на одно слово вправо",
    description: "Прыжок курсора к началу следующего слова",
    keys: {
      windows: ["Ctrl", "Right"],
      macos: ["Option", "Right"],
      web: ["Ctrl", "Right"]
    },
    category: "Навигация и выделение",
    popularity: 92
  },
  {
    id: "wd-para-up",
    appId: "word",
    title: "Переместиться к началу предыдущего абзаца",
    description: "Прыжок курсора вверх через абзац",
    keys: {
      windows: ["Ctrl", "Up"],
      macos: ["Option", "Up"],
      web: ["Ctrl", "Up"]
    },
    category: "Навигация и выделение",
    popularity: 87
  },
  {
    id: "wd-para-down",
    appId: "word",
    title: "Переместиться к началу следующего абзаца",
    description: "Прыжок курсора вниз через абзац",
    keys: {
      windows: ["Ctrl", "Down"],
      macos: ["Option", "Down"],
      web: ["Ctrl", "Down"]
    },
    category: "Навигация и выделение",
    popularity: 87
  },
  {
    id: "wd-last-edit-pos",
    appId: "word",
    title: "Вернуться к последнему месту редактирования",
    description: "Возвращает курсор точно в то место текста, где вы вносили правки до перемещения по файлу",
    keys: {
      windows: ["Shift", "F5"],
      macos: ["Shift", "F5"]
    },
    category: "Навигация и выделение",
    popularity: 94
  },
  {
    id: "wd-select-all",
    appId: "word",
    title: "Выделить весь документ целиком",
    description: "Выделяет абсолютно весь текст, таблицы и иллюстрации документа",
    keys: {
      windows: ["Ctrl", "A"],
      macos: ["Cmd", "A"],
      web: ["Ctrl", "A"]
    },
    category: "Навигация и выделение",
    popularity: 99
  },
  {
    id: "wd-extend-selection",
    appId: "word",
    title: "Режим расширения выделения (F8)",
    description: "Одно нажатие включает режим, второе выделяет слово, третье — предложение, четвертое — абзац, пятое — весь документ. Для выхода нажмите Esc.",
    keys: {
      windows: ["F8"],
      macos: ["F8"]
    },
    category: "Навигация и выделение",
    popularity: 86
  },
  {
    id: "wd-select-to-doc-start",
    appId: "word",
    title: "Выделить текст от курсора до начала документа",
    description: "Быстрое выделение всей верхней части документа",
    keys: {
      windows: ["Ctrl", "Shift", "Home"],
      macos: ["Cmd", "Shift", "Home"]
    },
    category: "Навигация и выделение",
    popularity: 86
  },
  {
    id: "wd-select-to-doc-end",
    appId: "word",
    title: "Выделить текст от курсора до конца документа",
    description: "Быстрое выделение всей нижней части документа",
    keys: {
      windows: ["Ctrl", "Shift", "End"],
      macos: ["Cmd", "Shift", "End"]
    },
    category: "Навигация и выделение",
    popularity: 86
  },
  {
    id: "wd-vertical-block-select",
    appId: "word",
    title: "Выделение вертикального столбца текста",
    description: "Зажмите клавишу Alt и протяните мышь по диагонали — выделится прямоугольный вертикальный столбец текста",
    keys: {
      windows: ["Alt", "Мышь"],
      macos: ["Option", "Мышь"]
    },
    category: "Навигация и выделение",
    popularity: 91
  },

  // ==========================================
  // 6. ПОИСК, ЗАМЕНА И РЕЦЕНЗИРОВАНИЕ
  // ==========================================
  {
    id: "wd-find-advanced",
    appId: "word",
    title: "Открыть диалог «Найти и заменить»",
    description: "Вызывает классическое окно замены текста, спецсимволов и форматирования",
    keys: {
      windows: ["Ctrl", "H"],
      macos: ["Cmd", "Shift", "H"],
      web: ["Ctrl", "H"]
    },
    category: "Редактирование и поиск",
    popularity: 98
  },
  {
    id: "wd-find-next",
    appId: "word",
    title: "Найти следующее вхождение поискового запроса",
    description: "Переходит к следующему найденному совпадению без открытия панели поиска",
    keys: {
      windows: ["Shift", "F4"],
      macos: ["Cmd", "G"]
    },
    category: "Редактирование и поиск",
    popularity: 85
  },
  {
    id: "wd-repeat-action",
    appId: "word",
    title: "Повторить последнее действие (Repeat)",
    description: "Повторяет последнюю команду форматирования, вставки или удаления",
    keys: {
      windows: ["F4"],
      macos: ["Cmd", "Y"]
    },
    category: "Редактирование и поиск",
    popularity: 94
  },
  {
    id: "wd-undo",
    appId: "word",
    title: "Отменить последнее действие",
    description: "Откатывает последнее изменение в тексте или оформлении",
    keys: {
      windows: ["Ctrl", "Z"],
      macos: ["Cmd", "Z"],
      web: ["Ctrl", "Z"]
    },
    category: "Редактирование и поиск",
    popularity: 99
  },
  {
    id: "wd-redo",
    appId: "word",
    title: "Вернуть отменённое действие",
    description: "Повторно применяет отмененное через Ctrl + Z изменение",
    keys: {
      windows: ["Ctrl", "Y"],
      macos: ["Cmd", "Y"],
      web: ["Ctrl", "Y"]
    },
    category: "Редактирование и поиск",
    popularity: 97
  },

  // ==========================================
  // 7. СНОСКИ, ССЫЛКИ И ПОЛЯ
  // ==========================================
  {
    id: "wd-insert-footnote",
    appId: "word",
    title: "Вставить сноску внизу страницы",
    description: "Ставит индекс сноски и перемещает курсор в нижнее поле страницы для ввода примечания",
    keys: {
      windows: ["Ctrl", "Alt", "F"],
      macos: ["Cmd", "Option", "F"]
    },
    category: "Сноски, ссылки и поля",
    popularity: 95
  },
  {
    id: "wd-insert-endnote",
    appId: "word",
    title: "Вставить концевую сноску в конец документа",
    description: "Добавляет сноску в самый конец книги или раздела с римской нумерацией",
    keys: {
      windows: ["Ctrl", "Alt", "D"],
      macos: ["Cmd", "Option", "E"]
    },
    category: "Сноски, ссылки и поля",
    popularity: 87
  },
  {
    id: "wd-hyperlink",
    appId: "word",
    title: "Вставить или изменить гиперссылку",
    description: "Открывает окно связывания текста с веб-сайтом, локальным файлом или заголовком",
    keys: {
      windows: ["Ctrl", "K"],
      macos: ["Cmd", "K"],
      web: ["Ctrl", "K"]
    },
    category: "Сноски, ссылки и поля",
    popularity: 96
  },
  {
    id: "wd-update-field",
    appId: "word",
    title: "Обновить выбранное поле или оглавление",
    description: "Пересчитывает оглавление, перекрёстные ссылки, формулы в таблицах и даты",
    keys: {
      windows: ["F9"],
      macos: ["F9"],
      web: ["F9"]
    },
    category: "Сноски, ссылки и поля",
    popularity: 97
  },
  {
    id: "wd-toggle-field-codes",
    appId: "word",
    title: "Переключить отображение кода поля",
    description: "Переключает вид между кодом поля (например, { TOC \\o \"1-3\" }) и его вычисленным значением",
    keys: {
      windows: ["Shift", "F9"],
      macos: ["Shift", "F9"]
    },
    category: "Сноски, ссылки и поля",
    popularity: 88
  },
  {
    id: "wd-toggle-all-field-codes",
    appId: "word",
    title: "Переключить коды всех полей в документе",
    description: "Отображает исходный служебный синтаксис всех полей во всем файле разом",
    keys: {
      windows: ["Alt", "F9"],
      macos: ["Option", "F9"]
    },
    category: "Сноски, ссылки и поля",
    popularity: 84
  },
  {
    id: "wd-insert-empty-field",
    appId: "word",
    title: "Вставить пустое поле { }",
    description: "Создает фигурные скобки кода поля (ручной ввод фигурных скобок с клавиатуры не работает)",
    keys: {
      windows: ["Ctrl", "F9"],
      macos: ["Cmd", "F9"]
    },
    category: "Сноски, ссылки и поля",
    popularity: 86
  },
  {
    id: "wd-unlink-field",
    appId: "word",
    title: "Превратить поле в постоянный обычный текст",
    description: "Разрывает связь с оглавлением или источником и превращает поле в фиксированный статический текст",
    keys: {
      windows: ["Ctrl", "Shift", "F9"],
      macos: ["Cmd", "Shift", "F9"]
    },
    category: "Сноски, ссылки и поля",
    popularity: 83
  },

  // ==========================================
  // 8. РЕЦЕНЗИРОВАНИЕ И ИСПРАВЛЕНИЯ
  // ==========================================
  {
    id: "wd-track-changes",
    appId: "word",
    title: "Включить / отключить запись исправлений",
    description: "Включает режим трекинга всех удалений, вставок и правок форматирования",
    keys: {
      windows: ["Ctrl", "Shift", "E"],
      macos: ["Cmd", "Shift", "E"]
    },
    category: "Рецензирование и исправления",
    popularity: 96
  },
  {
    id: "wd-insert-comment",
    appId: "word",
    title: "Вставить примечание / комментарий",
    description: "Добавляет плавающее примечание к выделенному фрагменту для коллеги",
    keys: {
      windows: ["Ctrl", "Alt", "M"],
      macos: ["Cmd", "Option", "M"],
      web: ["Ctrl", "Alt", "M"]
    },
    category: "Рецензирование и исправления",
    popularity: 94
  },
  {
    id: "wd-spell-check",
    appId: "word",
    title: "Запустить проверку правописания и грамматики",
    description: "Открывает панель «Редактор» с пошаговой проверкой орфографии",
    keys: {
      windows: ["F7"],
      macos: ["Option", "F7"]
    },
    category: "Рецензирование и исправления",
    popularity: 95
  },
  {
    id: "wd-thesaurus",
    appId: "word",
    title: "Открыть тезаурус (подбор синонимов)",
    description: "Ищет синонимы и близкие по смыслу слова к выделенному термину",
    keys: {
      windows: ["Shift", "F7"],
      macos: ["Option", "Shift", "Cmd", "R"]
    },
    category: "Рецензирование и исправления",
    popularity: 86
  },
  {
    id: "wd-show-nonprinting",
    appId: "word",
    title: "Показать / скрыть непечатаемые знаки (¶)",
    description: "Отображает скрытые знаки абзацев, пробелы, неразрывные пробелы и разрывы страниц",
    keys: {
      windows: ["Ctrl", "Shift", "8"],
      macos: ["Cmd", "8"],
      web: ["Ctrl", "Shift", "8"]
    },
    category: "Редактирование и поиск",
    popularity: 98
  },

  // ==========================================
  // 9. ТАБЛИЦЫ
  // ==========================================
  {
    id: "wd-table-next-cell",
    appId: "word",
    title: "Перейти к следующей ячейке таблицы",
    description: "Перемещает курсор в соседнюю ячейку справа (или на новую строку)",
    keys: {
      windows: ["Tab"],
      macos: ["Tab"],
      web: ["Tab"]
    },
    category: "Таблицы и графика",
    popularity: 98
  },
  {
    id: "wd-table-prev-cell",
    appId: "word",
    title: "Перейти к предыдущей ячейке таблицы",
    description: "Перемещает курсор в ячейку слева",
    keys: {
      windows: ["Shift", "Tab"],
      macos: ["Shift", "Tab"],
      web: ["Shift", "Tab"]
    },
    category: "Таблицы и графика",
    popularity: 93
  },
  {
    id: "wd-table-new-row",
    appId: "word",
    title: "Добавить новую строку в конец таблицы",
    description: "В последней ячейке таблицы нажмите Tab — Word автоматически создаст новую строку",
    keys: {
      windows: ["Tab в последней ячейке"],
      macos: ["Tab в последней ячейке"],
      web: ["Tab в последней ячейке"]
    },
    category: "Таблицы и графика",
    popularity: 96
  },
  {
    id: "wd-table-split",
    appId: "word",
    title: "Разделить таблицу над текущей строкой",
    description: "Разрезает таблицу на две независимые таблицы прямо над строкой курсора",
    keys: {
      windows: ["Ctrl", "Shift", "Enter"],
      macos: ["Cmd", "Shift", "Enter"]
    },
    category: "Таблицы и графика",
    popularity: 89
  },
  {
    id: "wd-table-row-start",
    appId: "word",
    title: "Перейти в первую ячейку строки таблицы",
    description: "Мгновенно перемещает курсор в начало текущей строки таблицы",
    keys: {
      windows: ["Alt", "Home"],
      macos: ["Option", "Home"]
    },
    category: "Таблицы и графика",
    popularity: 84
  },
  {
    id: "wd-table-row-end",
    appId: "word",
    title: "Перейти в последнюю ячейку строки таблицы",
    description: "Перемещает курсор в правую ячейку текущей строки таблицы",
    keys: {
      windows: ["Alt", "End"],
      macos: ["Option", "End"]
    },
    category: "Таблицы и графика",
    popularity: 84
  },

  // ==========================================
  // 10. ДОКУМЕНТЫ, ОКНА И ПЕЧАТЬ
  // ==========================================
  {
    id: "wd-save",
    appId: "word",
    title: "Быстрое сохранение документа",
    description: "Сохраняет текущие изменения в открытом документе",
    keys: {
      windows: ["Ctrl", "S"],
      macos: ["Cmd", "S"],
      web: ["Ctrl", "S"]
    },
    category: "Документы, окна и печать",
    popularity: 99
  },
  {
    id: "wd-save-as",
    appId: "word",
    title: "Сохранить как (F12)",
    description: "Мгновенно открывает классическое диалоговое окно «Сохранить как» для экспорта в PDF или смены имени",
    keys: {
      windows: ["F12"],
      macos: ["Cmd", "Shift", "S"]
    },
    category: "Документы, окна и печать",
    popularity: 95
  },
  {
    id: "wd-print",
    appId: "word",
    title: "Печать документа / предпросмотр",
    description: "Открывает меню печати с предварительным просмотром страниц",
    keys: {
      windows: ["Ctrl", "P"],
      macos: ["Cmd", "P"],
      web: ["Ctrl", "P"]
    },
    category: "Документы, окна и печать",
    popularity: 97
  },
  {
    id: "wd-print-preview",
    appId: "word",
    title: "Режим предварительного просмотра",
    description: "Быстро открывает окно предпросмотра перед отправкой на принтер",
    keys: {
      windows: ["Ctrl", "F2"],
      macos: ["Cmd", "Option", "I"]
    },
    category: "Документы, окна и печать",
    popularity: 90
  },
  {
    id: "wd-split-window",
    appId: "word",
    title: "Разделить окно документа по горизонтали",
    description: "Делит рабочую область на два независимых экрана для сверки начала и конца документа",
    keys: {
      windows: ["Ctrl", "Alt", "S"],
      macos: ["Cmd", "Option", "S"]
    },
    category: "Документы, окна и печать",
    popularity: 91
  },
  {
    id: "wd-toggle-ribbon",
    appId: "word",
    title: "Свернуть или развернуть ленту команд",
    description: "Освобождает вертикальное пространство экрана, скрывая ленту вкладок",
    keys: {
      windows: ["Ctrl", "F1"],
      macos: ["Cmd", "Option", "R"]
    },
    category: "Документы, окна и печать",
    popularity: 90
  },
  {
    id: "wd-tell-me",
    appId: "word",
    title: "Поиск функций и команд («Помощник»)",
    description: "Активирует строку умного поиска инструментов и настроек Word",
    keys: {
      windows: ["Alt", "Q"],
      macos: ["Option", "Q"]
    },
    category: "Документы, окна и печать",
    popularity: 88
  },
  {
    id: "wd-context-menu",
    appId: "word",
    title: "Вызвать контекстное меню без мыши",
    description: "Открывает меню правой кнопки мыши для слова или объекта под курсором",
    keys: {
      windows: ["Shift", "F10"],
      macos: ["Shift", "F10"]
    },
    category: "Документы, окна и печать",
    popularity: 87
  },
  {
    id: "wd-close-document",
    appId: "word",
    title: "Закрыть текущий документ",
    description: "Закрывает активный файл без выхода из самой программы Word",
    keys: {
      windows: ["Ctrl", "W"],
      macos: ["Cmd", "W"],
      web: ["Ctrl", "W"]
    },
    category: "Документы, окна и печать",
    popularity: 94
  }
];

import type { Shortcut } from '../../types/index.ts';

export const EXCEL_SHORTCUTS: Shortcut[] = [
  // ==========================================
  // 1. ОСНОВНЫЕ ОПЕРАЦИИ И ФАЙЛЫ
  // ==========================================
  {
    id: "xl-save",
    appId: "excel",
    title: "Быстрое сохранение книги",
    description: "Мгновенно сохраняет все внесённые изменения в текущий файл книги",
    keys: {
      windows: ["Ctrl", "S"],
      macos: ["Cmd", "S"],
      web: ["Ctrl", "S"]
    },
    category: "Основные операции",
    popularity: 99
  },
  {
    id: "xl-save-as",
    appId: "excel",
    title: "Сохранить как (экспорт / PDF)",
    description: "Мгновенно открывает диалог сохранения файла под новым именем, в другую папку или в формате PDF/CSV",
    keys: {
      windows: ["F12"],
      macos: ["Cmd", "Shift", "S"],
      web: ["Alt", "F", "A"]
    },
    category: "Основные операции",
    popularity: 91
  },
  {
    id: "xl-new-workbook",
    appId: "excel",
    title: "Создать новую книгу",
    description: "Открывает чистую рабочую книгу с дефолтным листом",
    keys: {
      windows: ["Ctrl", "N"],
      macos: ["Cmd", "N"],
      web: ["Alt", "Win", "N"]
    },
    category: "Основные операции",
    popularity: 88
  },
  {
    id: "xl-open-workbook",
    appId: "excel",
    title: "Открыть существующую книгу",
    description: "Открывает меню выбора файла или список недавних документов Excel",
    keys: {
      windows: ["Ctrl", "O"],
      macos: ["Cmd", "O"],
      web: ["Ctrl", "O"]
    },
    category: "Основные операции",
    popularity: 85
  },
  {
    id: "xl-close-window",
    appId: "excel",
    title: "Закрыть текущую книгу",
    description: "Закрывает активную рабочую книгу с запросом сохранения без закрытия программы",
    keys: {
      windows: ["Ctrl", "W"],
      macos: ["Cmd", "W"],
      web: ["Ctrl", "W"]
    },
    category: "Основные операции",
    popularity: 84
  },
  {
    id: "xl-print",
    appId: "excel",
    title: "Печать / Предварительный просмотр",
    description: "Переход в меню настройки области печати и предпросмотра страниц",
    keys: {
      windows: ["Ctrl", "P"],
      macos: ["Cmd", "P"],
      web: ["Ctrl", "P"]
    },
    category: "Основные операции",
    popularity: 89
  },
  {
    id: "xl-undo",
    appId: "excel",
    title: "Отменить последнее действие",
    description: "Пошагово отменяет последние операции редактирования или форматирования",
    keys: {
      windows: ["Ctrl", "Z"],
      macos: ["Cmd", "Z"],
      web: ["Ctrl", "Z"]
    },
    category: "Основные операции",
    popularity: 99
  },
  {
    id: "xl-redo",
    appId: "excel",
    title: "Повторить отменённое действие",
    description: "Возвращает отменённую операцию или повторяет ввод",
    keys: {
      windows: ["Ctrl", "Y"],
      macos: ["Cmd", "Y"],
      web: ["Ctrl", "Y"]
    },
    category: "Основные операции",
    popularity: 90
  },
  {
    id: "xl-find",
    appId: "excel",
    title: "Поиск текста и чисел",
    description: "Открывает окно быстрого поиска по ячейкам текущего листа или всей книги",
    keys: {
      windows: ["Ctrl", "F"],
      macos: ["Cmd", "F"],
      web: ["Ctrl", "F"]
    },
    category: "Основные операции",
    popularity: 95
  },
  {
    id: "xl-replace",
    appId: "excel",
    title: "Найти и заменить",
    description: "Открывает вкладку «Заменить» для массового исправления символов или слов",
    keys: {
      windows: ["Ctrl", "H"],
      macos: ["Ctrl", "H"],
      web: ["Ctrl", "H"]
    },
    category: "Основные операции",
    popularity: 94
  },

  // ==========================================
  // 2. ФОРМУЛЫ И ВЫЧИСЛЕНИЯ
  // ==========================================
  {
    id: "xl-autosum",
    appId: "excel",
    title: "Быстрая автосумма",
    description: "Автоматически вставляет формулу =СУММ() для текущей колонки или строки",
    keys: {
      windows: ["Alt", "="],
      macos: ["Cmd", "Shift", "T"],
      web: ["Alt", "="]
    },
    category: "Формулы и вычисления",
    popularity: 97
  },
  {
    id: "xl-f4-repeat",
    appId: "excel",
    title: "Зафиксировать ссылку ($) / Повторить действие",
    description: "В строке формул циклически переключает абсолютные ссылки ($A$1 -> A$1 -> $A1 -> A1); в ячейке повторяет последнюю операцию",
    keys: {
      windows: ["F4"],
      macos: ["Cmd", "T"],
      web: ["F4"]
    },
    category: "Формулы и вычисления",
    notes: "На ноутбуках может потребоваться нажать клавишу Fn + F4",
    popularity: 98
  },
  {
    id: "xl-show-formulas",
    appId: "excel",
    title: "Показать формулы во всех ячейках",
    description: "Переключает режим отображения: вместо результатов показывает исходные формулы ячеек",
    keys: {
      windows: ["Ctrl", "`"],
      macos: ["Ctrl", "`"],
      web: ["Ctrl", "`"]
    },
    category: "Формулы и вычисления",
    notes: "Клавиша с буквой Ё или знаком грависа (`) под кнопкой Esc",
    popularity: 86
  },
  {
    id: "xl-calc-now",
    appId: "excel",
    title: "Принудительный пересчет всей книги",
    description: "Пересчитывает все формулы во всех открытых листах и книгах Excel",
    keys: {
      windows: ["F9"],
      macos: ["F9"],
      web: ["F9"]
    },
    category: "Формулы и вычисления",
    popularity: 87
  },
  {
    id: "xl-calc-active-sheet",
    appId: "excel",
    title: "Пересчитать только активный лист",
    description: "Выполняет перерасчет формул исключительно в текущем рабочем листе без ожидания тяжелой книги",
    keys: {
      windows: ["Shift", "F9"],
      macos: ["Shift", "F9"],
      web: ["Shift", "F9"]
    },
    category: "Формулы и вычисления",
    popularity: 82
  },
  {
    id: "xl-insert-function",
    appId: "excel",
    title: "Мастер функций («Вставка функции»)",
    description: "Открывает диалоговое окно поиска формул с подсказками по аргументам",
    keys: {
      windows: ["Shift", "F3"],
      macos: ["Shift", "F3"],
      web: ["Shift", "F3"]
    },
    category: "Формулы и вычисления",
    popularity: 89
  },
  {
    id: "xl-evaluate-part",
    appId: "excel",
    title: "Вычислить выделенную часть формулы на лету",
    description: "В строке формул заменяет выделенный кусок на его промежуточный расчёт (для отмены нажмите Esc)",
    keys: {
      windows: ["F9"],
      macos: ["F9"],
      web: ["F9"]
    },
    category: "Формулы и вычисления",
    notes: "Всегда нажимайте Esc после проверки, чтобы не зафиксировать статическое значение вместо формулы",
    popularity: 92
  },
  {
    id: "xl-name-manager",
    appId: "excel",
    title: "Диспетчер имён",
    description: "Открывает управление именованными диапазонами ячеек и формулами",
    keys: {
      windows: ["Ctrl", "F3"],
      macos: ["Cmd", "F3"],
      web: ["Alt", "M", "N"]
    },
    category: "Формулы и вычисления",
    popularity: 80
  },
  {
    id: "xl-paste-name",
    appId: "excel",
    title: "Вставить имя диапазона в формулу",
    description: "Открывает список существующих имён для быстрой подстановки в активную формулу",
    keys: {
      windows: ["F3"],
      macos: ["F3"],
      web: ["F3"]
    },
    category: "Формулы и вычисления",
    popularity: 79
  },
  {
    id: "xl-array-enter",
    appId: "excel",
    title: "Ввод классической формулы массива (CSE)",
    description: "Заключает формулу в фигурные скобки { } для обработки массивов в Excel 2019 и старше",
    keys: {
      windows: ["Ctrl", "Shift", "Enter"],
      macos: ["Cmd", "Shift", "Return"],
      web: ["Ctrl", "Shift", "Enter"]
    },
    category: "Формулы и вычисления",
    notes: "В Microsoft 365 и Excel 2021 формулы массивов динамические и работают по обычному Enter",
    popularity: 85
  },
  {
    id: "xl-expand-formula-bar",
    appId: "excel",
    title: "Развернуть / свернуть строку формул",
    description: "Увеличивает высоту поля формулы для удобного чтения многострочных длинных выражений",
    keys: {
      windows: ["Ctrl", "Shift", "U"],
      macos: ["Ctrl", "Shift", "U"],
      web: ["Ctrl", "Shift", "U"]
    },
    category: "Формулы и вычисления",
    popularity: 84
  },

  // ==========================================
  // 3. НАВИГАЦИЯ И ВЫДЕЛЕНИЕ
  // ==========================================
  {
    id: "xl-edit-cell",
    appId: "excel",
    title: "Редактировать активную ячейку",
    description: "Перемещает курсор внутрь ячейки в конец текста без использования мыши",
    keys: {
      windows: ["F2"],
      macos: ["Ctrl", "U"],
      web: ["F2"]
    },
    category: "Навигация и выделение",
    popularity: 96
  },
  {
    id: "xl-select-to-edge",
    appId: "excel",
    title: "Выделить диапазон до границы данных",
    description: "Мгновенно выделяет блок ячеек до первой пустой клетки в направлении стрелки",
    keys: {
      windows: ["Ctrl", "Shift", "Down"],
      macos: ["Cmd", "Shift", "Down"],
      web: ["Ctrl", "Shift", "Down"]
    },
    category: "Навигация и выделение",
    popularity: 97
  },
  {
    id: "xl-jump-to-edge",
    appId: "excel",
    title: "Перейти к границе заполненных данных",
    description: "Быстро перемещает активную ячейку в самый край таблицы без скролла мышью",
    keys: {
      windows: ["Ctrl", "Down"],
      macos: ["Cmd", "Down"],
      web: ["Ctrl", "Down"]
    },
    category: "Навигация и выделение",
    popularity: 93
  },
  {
    id: "xl-select-all",
    appId: "excel",
    title: "Выделить всю таблицу / весь лист",
    description: "Первое нажатие выделяет текущий блок данных; второе нажатие — абсолютно все ячейки листа",
    keys: {
      windows: ["Ctrl", "A"],
      macos: ["Cmd", "A"],
      web: ["Ctrl", "A"]
    },
    category: "Навигация и выделение",
    popularity: 98
  },
  {
    id: "xl-select-row",
    appId: "excel",
    title: "Выделить всю текущую строку",
    description: "Выделяет строку целиком от колонки A до XFD",
    keys: {
      windows: ["Shift", "Space"],
      macos: ["Shift", "Space"],
      web: ["Shift", "Space"]
    },
    category: "Навигация и выделение",
    popularity: 92
  },
  {
    id: "xl-select-column",
    appId: "excel",
    title: "Выделить весь текущий столбец",
    description: "Выделяет колонку целиком от 1-й строки до 1 048 576-й",
    keys: {
      windows: ["Ctrl", "Space"],
      macos: ["Ctrl", "Space"],
      web: ["Ctrl", "Space"]
    },
    category: "Навигация и выделение",
    popularity: 94
  },
  {
    id: "xl-jump-home",
    appId: "excel",
    title: "Переход к началу листа (A1)",
    description: "Мгновенно возвращает курсор в верхний левый угол рабочего листа",
    keys: {
      windows: ["Ctrl", "Home"],
      macos: ["Cmd", "Fn", "Left"],
      web: ["Ctrl", "Home"]
    },
    category: "Навигация и выделение",
    popularity: 88
  },
  {
    id: "xl-jump-end",
    appId: "excel",
    title: "Переход к последней ячейке листа",
    description: "Перемещает фокус в крайнюю правую нижнюю заполненную ячейку диапазона",
    keys: {
      windows: ["Ctrl", "End"],
      macos: ["Cmd", "Fn", "Right"],
      web: ["Ctrl", "End"]
    },
    category: "Навигация и выделение",
    popularity: 85
  },
  {
    id: "xl-go-to-dialog",
    appId: "excel",
    title: "Окно «Переход» (к ячейке или диапазону)",
    description: "Быстрый переход к любой ячейке по адресу (например, CZ500) или вызов окна «Выделить группу ячеек»",
    keys: {
      windows: ["Ctrl", "G"],
      macos: ["Cmd", "G"],
      web: ["Ctrl", "G"]
    },
    category: "Навигация и выделение",
    notes: "Также работает клавиша F5",
    popularity: 87
  },
  {
    id: "xl-select-visible",
    appId: "excel",
    title: "Выделить ТОЛЬКО видимые ячейки",
    description: "Исключает из выделения скрытые фильтром или вручную строки перед копированием",
    keys: {
      windows: ["Alt", ";"],
      macos: ["Cmd", "Shift", "Z"],
      web: ["Alt", ";"]
    },
    category: "Навигация и выделение",
    notes: "Критично при копировании отфильтрованных таблиц, чтобы скрытые строки не скопировались",
    popularity: 95
  },
  {
    id: "xl-scroll-active",
    appId: "excel",
    title: "Прокрутить экран к активной ячейке",
    description: "Центрирует видимую область листа на ячейке с фокусом, если вы случайно прокрутили экран в сторону",
    keys: {
      windows: ["Ctrl", "Backspace"],
      macos: ["Cmd", "Delete"],
      web: ["Ctrl", "Backspace"]
    },
    category: "Навигация и выделение",
    popularity: 81
  },

  // ==========================================
  // 4. СТРОКИ, СТОЛБЦЫ И ЯЧЕЙКИ
  // ==========================================
  {
    id: "xl-insert-cells",
    appId: "excel",
    title: "Вставить ячейки, строки или столбцы",
    description: "Открывает окно вставки ячеек со сдвигом; если строка/столбец выделены — вставляет их сразу",
    keys: {
      windows: ["Ctrl", "Shift", "+"],
      macos: ["Cmd", "Shift", "+"],
      web: ["Ctrl", "Shift", "+"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 96
  },
  {
    id: "xl-delete-cells",
    appId: "excel",
    title: "Удалить ячейки, строки или столбцы",
    description: "Удаляет выделенный диапазон ячеек или полностью строки/столбцы со сдвигом",
    keys: {
      windows: ["Ctrl", "-"],
      macos: ["Cmd", "-"],
      web: ["Ctrl", "-"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 95
  },
  {
    id: "xl-hide-row",
    appId: "excel",
    title: "Скрыть текущую строку",
    description: "Скрывает выделенные строки из видимой области таблицы",
    keys: {
      windows: ["Ctrl", "9"],
      macos: ["Ctrl", "9"],
      web: ["Ctrl", "9"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 86
  },
  {
    id: "xl-unhide-row",
    appId: "excel",
    title: "Отобразить скрытые строки",
    description: "Раскрывает скрытые строки внутри выделенного диапазона",
    keys: {
      windows: ["Ctrl", "Shift", "9"],
      macos: ["Ctrl", "Shift", "9"],
      web: ["Ctrl", "Shift", "9"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 83
  },
  {
    id: "xl-hide-column",
    appId: "excel",
    title: "Скрыть текущий столбец",
    description: "Скрывает выделенные столбцы без удаления данных",
    keys: {
      windows: ["Ctrl", "0"],
      macos: ["Ctrl", "0"],
      web: ["Ctrl", "0"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 85
  },
  {
    id: "xl-unhide-column",
    appId: "excel",
    title: "Отобразить скрытые столбцы",
    description: "Раскрывает скрытые столбцы между выделенными граничными колонками",
    keys: {
      windows: ["Ctrl", "Shift", "0"],
      macos: ["Ctrl", "Shift", "0"],
      web: ["Ctrl", "Shift", "0"]
    },
    category: "Строки, столбцы и ячейки",
    notes: "В Windows может конфликтовать с переключателем языка ввода системы",
    popularity: 80
  },
  {
    id: "xl-fill-down",
    appId: "excel",
    title: "Заполнить вниз (дублировать верхнюю)",
    description: "Копирует значение и формулу из верхней ячейки во все выделенные ниже",
    keys: {
      windows: ["Ctrl", "D"],
      macos: ["Cmd", "D"],
      web: ["Ctrl", "D"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 93
  },
  {
    id: "xl-fill-right",
    appId: "excel",
    title: "Заполнить вправо (дублировать левую)",
    description: "Копирует формулу и форматирование из крайней левой ячейки во все выделенные справа",
    keys: {
      windows: ["Ctrl", "R"],
      macos: ["Cmd", "R"],
      web: ["Ctrl", "R"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 88
  },
  {
    id: "xl-flash-fill",
    appId: "excel",
    title: "Мгновенное заполнение (Flash Fill)",
    description: "Автоматически распознает шаблон заполнения (извлечение имени, разделение адреса, формат номера) и заполняет колонку",
    keys: {
      windows: ["Ctrl", "E"],
      macos: ["Ctrl", "E"],
      web: ["Ctrl", "E"]
    },
    category: "Строки, столбцы и ячейки",
    notes: "Впервые появилось в Excel 2013; работает без единой формулы",
    popularity: 97
  },
  {
    id: "xl-enter-same-all",
    appId: "excel",
    title: "Ввести одинаковое значение во все ячейки",
    description: "После ввода значения или формулы заполняет ею весь заранее выделенный массив ячеек",
    keys: {
      windows: ["Ctrl", "Enter"],
      macos: ["Cmd", "Return"],
      web: ["Ctrl", "Enter"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 91
  },
  {
    id: "xl-line-break",
    appId: "excel",
    title: "Перенос строки внутри одной ячейки",
    description: "Начинает новый абзац текста внутри активной ячейки без перехода на следующую строку таблицы",
    keys: {
      windows: ["Alt", "Enter"],
      macos: ["Ctrl", "Option", "Enter"],
      web: ["Alt", "Enter"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 96
  },
  {
    id: "xl-dropdown-values",
    appId: "excel",
    title: "Выпадающий список значений столбца",
    description: "Показывает контекстное меню автоподстановки из всех уникальных текстовых значений этого столбца",
    keys: {
      windows: ["Alt", "Down"],
      macos: ["Option", "Down"],
      web: ["Alt", "Down"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 86
  },

  // ==========================================
  // 5. ФОРМАТИРОВАНИЕ И СТИЛИ
  // ==========================================
  {
    id: "xl-format-cells",
    appId: "excel",
    title: "Диалоговое окно «Формат ячеек»",
    description: "Быстрый вызов полного меню настройки числовых форматов, выравнивания, шрифта, заливки и защиты ячеек",
    keys: {
      windows: ["Ctrl", "1"],
      macos: ["Cmd", "1"],
      web: ["Ctrl", "1"]
    },
    category: "Форматирование и стили",
    popularity: 97
  },
  {
    id: "xl-format-general",
    appId: "excel",
    title: "Применить общий (стандартный) формат",
    description: "Сбрасывает дату, проценты или деньги к базовому числовому формату ячейки",
    keys: {
      windows: ["Ctrl", "Shift", "~"],
      macos: ["Ctrl", "Shift", "~"],
      web: ["Ctrl", "Shift", "~"]
    },
    category: "Форматирование и стили",
    popularity: 85
  },
  {
    id: "xl-format-currency",
    appId: "excel",
    title: "Применить денежный формат",
    description: "Быстро форматирует выделенные числа в денежный стиль с разделителем тысяч и двумя знаками копеек",
    keys: {
      windows: ["Ctrl", "Shift", "$"],
      macos: ["Ctrl", "Shift", "$"],
      web: ["Ctrl", "Shift", "$"]
    },
    category: "Форматирование и стили",
    popularity: 92
  },
  {
    id: "xl-format-percent",
    appId: "excel",
    title: "Применить процентный формат (%)",
    description: "Мгновенно умножает значение на 100 и отображает знак процента без десятичных знаков",
    keys: {
      windows: ["Ctrl", "Shift", "%"],
      macos: ["Ctrl", "Shift", "%"],
      web: ["Ctrl", "Shift", "%"]
    },
    category: "Форматирование и стили",
    popularity: 93
  },
  {
    id: "xl-format-date",
    appId: "excel",
    title: "Применить формат даты (ДД.ММ.ГГГГ)",
    description: "Переводит серийный номер даты Excel в наглядный календарный формат с днём, месяцем и годом",
    keys: {
      windows: ["Ctrl", "Shift", "#"],
      macos: ["Ctrl", "Shift", "#"],
      web: ["Ctrl", "Shift", "#"]
    },
    category: "Форматирование и стили",
    popularity: 89
  },
  {
    id: "xl-format-time",
    appId: "excel",
    title: "Применить формат времени (ЧЧ:ММ)",
    description: "Форматирует число как время суток с часами и минутами",
    keys: {
      windows: ["Ctrl", "Shift", "@"],
      macos: ["Ctrl", "Shift", "@"],
      web: ["Ctrl", "Shift", "@"]
    },
    category: "Форматирование и стили",
    popularity: 83
  },
  {
    id: "xl-format-number-thousands",
    appId: "excel",
    title: "Числовой формат с разделителем тысяч",
    description: "Добавляет пробелы между тысячами (1 000 000,00) и фиксирует два десятичных знака",
    keys: {
      windows: ["Ctrl", "Shift", "!"],
      macos: ["Ctrl", "Shift", "!"],
      web: ["Ctrl", "Shift", "!"]
    },
    category: "Форматирование и стили",
    popularity: 94
  },
  {
    id: "xl-bold",
    appId: "excel",
    title: "Полужирное начертание",
    description: "Включает или выключает полужирный шрифт для выделенного диапазона",
    keys: {
      windows: ["Ctrl", "B"],
      macos: ["Cmd", "B"],
      web: ["Ctrl", "B"]
    },
    category: "Форматирование и стили",
    popularity: 96
  },
  {
    id: "xl-italic",
    appId: "excel",
    title: "Курсивное начертание",
    description: "Включает или выключает курсив текста",
    keys: {
      windows: ["Ctrl", "I"],
      macos: ["Cmd", "I"],
      web: ["Ctrl", "I"]
    },
    category: "Форматирование и стили",
    popularity: 89
  },
  {
    id: "xl-underline",
    appId: "excel",
    title: "Подчёркивание текста",
    description: "Добавляет одинарное нижнее подчеркивание ячейки",
    keys: {
      windows: ["Ctrl", "U"],
      macos: ["Cmd", "U"],
      web: ["Ctrl", "U"]
    },
    category: "Форматирование и стили",
    popularity: 86
  },
  {
    id: "xl-strikethrough",
    appId: "excel",
    title: "Зачёркнутый текст",
    description: "Применяет или снимает зачёркивание текста в ячейке",
    keys: {
      windows: ["Ctrl", "5"],
      macos: ["Cmd", "Shift", "X"],
      web: ["Ctrl", "5"]
    },
    category: "Форматирование и стили",
    popularity: 84
  },
  {
    id: "xl-add-border",
    appId: "excel",
    title: "Добавить внешние границы",
    description: "Очерчивает тонкую внешнюю контурную рамку вокруг выделенного блока",
    keys: {
      windows: ["Ctrl", "Shift", "&"],
      macos: ["Cmd", "Option", "0"],
      web: ["Ctrl", "Shift", "&"]
    },
    category: "Форматирование и стили",
    popularity: 87
  },
  {
    id: "xl-remove-borders",
    appId: "excel",
    title: "Снять все границы ячеек",
    description: "Быстро удаляет сетку обрамления с выделенных ячеек",
    keys: {
      windows: ["Ctrl", "Shift", "_"],
      macos: ["Cmd", "Option", "_"],
      web: ["Ctrl", "Shift", "_"]
    },
    category: "Форматирование и стили",
    popularity: 83
  },

  // ==========================================
  // 6. ТАБЛИЦЫ, ДАННЫЕ И СПЕЦИАЛЬНАЯ ВСТАВКА
  // ==========================================
  {
    id: "xl-create-table",
    appId: "excel",
    title: "Преобразовать в «Умную таблицу»",
    description: "Преобразует диапазон в форматированную структурированную таблицу Excel с авторасширением и формулами",
    keys: {
      windows: ["Ctrl", "T"],
      macos: ["Cmd", "T"],
      web: ["Ctrl", "T"]
    },
    category: "Таблицы и данные",
    notes: "Также работает комбинация Ctrl + L",
    popularity: 97
  },
  {
    id: "xl-filter",
    appId: "excel",
    title: "Включить / отключить Автофильтр",
    description: "Мгновенно добавляет или скрывает стрелки фильтров в заголовках колонок",
    keys: {
      windows: ["Ctrl", "Shift", "L"],
      macos: ["Cmd", "Shift", "F"],
      web: ["Ctrl", "Shift", "L"]
    },
    category: "Таблицы и данные",
    popularity: 99
  },
  {
    id: "xl-special-paste",
    appId: "excel",
    title: "Окно специальной вставки",
    description: "Открывает меню вставки: только значения, форматы, формулы, ширина столбцов или транспонирование",
    keys: {
      windows: ["Ctrl", "Alt", "V"],
      macos: ["Ctrl", "Cmd", "V"],
      web: ["Ctrl", "Alt", "V"]
    },
    category: "Таблицы и данные",
    popularity: 98
  },
  {
    id: "xl-paste-values",
    appId: "excel",
    title: "Вставить только значения (без формул)",
    description: "Мгновенная замена формул их вычисленными статическими значениями",
    keys: {
      windows: ["Ctrl", "Shift", "V"],
      macos: ["Cmd", "Shift", "V"],
      web: ["Ctrl", "Shift", "V"]
    },
    category: "Таблицы и данные",
    notes: "Прямая горячая клавиша в Excel 365 (2023+); в старых версиях: Ctrl+Alt+V затем V и Enter",
    popularity: 98
  },
  {
    id: "xl-quick-analysis",
    appId: "excel",
    title: "Меню «Быстрый анализ» (Quick Analysis)",
    description: "Всплывающее меню для мгновенного построения спарклайнов, итогов, диаграмм и цветовых шкал",
    keys: {
      windows: ["Ctrl", "Q"],
      macos: ["Cmd", "Q"],
      web: ["Ctrl", "Q"]
    },
    category: "Таблицы и данные",
    popularity: 88
  },
  {
    id: "xl-create-chart-sheet",
    appId: "excel",
    title: "Создать диаграмму на отдельном листе",
    description: "Мгновенно строит полноразмерный график из выделенных данных на отдельном вкладке-листе книги",
    keys: {
      windows: ["F11"],
      macos: ["Fn", "F11"],
      web: ["F11"]
    },
    category: "Таблицы и данные",
    popularity: 85
  },
  {
    id: "xl-create-embedded-chart",
    appId: "excel",
    title: "Вставить диаграмму на текущий лист",
    description: "Создает встроенную стандартную гистограмму рядом с выделенной таблицей",
    keys: {
      windows: ["Alt", "F1"],
      macos: ["Option", "F1"],
      web: ["Alt", "F1"]
    },
    category: "Таблицы и данные",
    popularity: 89
  },
  {
    id: "xl-open-filter-menu",
    appId: "excel",
    title: "Раскрыть выпадающее меню фильтра",
    description: "В ячейке заголовка открывает фильтр и сортировку столбца без мыши",
    keys: {
      windows: ["Alt", "Down"],
      macos: ["Option", "Down"],
      web: ["Alt", "Down"]
    },
    category: "Таблицы и данные",
    popularity: 90
  },

  // ==========================================
  // 7. ОКНА, ЛИСТЫ И АУДИТ
  // ==========================================
  {
    id: "xl-insert-date",
    appId: "excel",
    title: "Вставить текущую дату",
    description: "Вставляет сегодняшнюю дату в статическом текстовом виде (не пересчитывается со временем)",
    keys: {
      windows: ["Ctrl", ";"],
      macos: ["Ctrl", ";"],
      web: ["Ctrl", ";"]
    },
    category: "Окна, листы и аудит",
    popularity: 91
  },
  {
    id: "xl-insert-time",
    appId: "excel",
    title: "Вставить текущее время",
    description: "Вставляет текущее системное время в ячейку в виде фиксированного значения",
    keys: {
      windows: ["Ctrl", "Shift", ":"],
      macos: ["Cmd", ";"],
      web: ["Ctrl", "Shift", ":"]
    },
    category: "Окна, листы и аудит",
    popularity: 86
  },
  {
    id: "xl-switch-sheet-next",
    appId: "excel",
    title: "Перейти на следующий лист",
    description: "Быстрое переключение на соседний лист книги справа",
    keys: {
      windows: ["Ctrl", "PageDown"],
      macos: ["Option", "Right"],
      web: ["Ctrl", "PageDown"]
    },
    category: "Окна, листы и аудит",
    popularity: 93
  },
  {
    id: "xl-switch-sheet-prev",
    appId: "excel",
    title: "Перейти на предыдущий лист",
    description: "Быстрое переключение на соседний лист книги слева",
    keys: {
      windows: ["Ctrl", "PageUp"],
      macos: ["Option", "Left"],
      web: ["Ctrl", "PageUp"]
    },
    category: "Окна, листы и аудит",
    popularity: 92
  },
  {
    id: "xl-insert-new-sheet",
    appId: "excel",
    title: "Вставить новый лист в книгу",
    description: "Создает новый чистый лист перед активным листом",
    keys: {
      windows: ["Shift", "F11"],
      macos: ["Shift", "F11"],
      web: ["Shift", "F11"]
    },
    category: "Окна, листы и аудит",
    popularity: 88
  },
  {
    id: "xl-trace-precedents",
    appId: "excel",
    title: "Показать влияющие ячейки (стрелки аудита)",
    description: "Рисует синие стрелки к ячейкам, значения которых используются в текущей формуле",
    keys: {
      windows: ["Alt", "M", "P"],
      macos: ["Ctrl", "["],
      web: ["Alt", "M", "P"]
    },
    category: "Окна, листы и аудит",
    popularity: 86
  },
  {
    id: "xl-trace-dependents",
    appId: "excel",
    title: "Показать зависимые ячейки (стрелки аудита)",
    description: "Показывает стрелками, в каких других формулах книги используется текущая ячейка",
    keys: {
      windows: ["Alt", "M", "D"],
      macos: ["Ctrl", "]"],
      web: ["Alt", "M", "D"]
    },
    category: "Окна, листы и аудит",
    popularity: 84
  },
  {
    id: "xl-remove-arrows",
    appId: "excel",
    title: "Убрать все стрелки аудита формул",
    description: "Очищает экран листа от всех синих и красных проверочных стрелок зависимостей",
    keys: {
      windows: ["Alt", "M", "A", "A"],
      macos: ["Alt", "M", "A", "A"],
      web: ["Alt", "M", "A", "A"]
    },
    category: "Окна, листы и аудит",
    popularity: 82
  },
  {
    id: "xl-group-rows-cols",
    appId: "excel",
    title: "Сгруппировать строки или столбцы",
    description: "Создает сворачиваемую структуру (+ / -) на полях листа для аккуратного скрытия детализации",
    keys: {
      windows: ["Shift", "Alt", "Right"],
      macos: ["Cmd", "Shift", "K"],
      web: ["Shift", "Alt", "Right"]
    },
    category: "Окна, листы и аудит",
    popularity: 90
  },

  {
    id: "xl-ungroup-rows-cols",
    appId: "excel",
    title: "Разгруппировать строки или столбцы",
    description: "Удаляет выделенный блок строк или столбцов из иерархической структуры листа",
    keys: {
      windows: ["Shift", "Alt", "Left"],
      macos: ["Cmd", "Shift", "J"],
      web: ["Shift", "Alt", "Left"]
    },
    category: "Окна, листы и аудит",
    popularity: 85
  },
  {
    id: "xl-toggle-ribbon",
    appId: "excel",
    title: "Свернуть / развернуть верхнюю ленту",
    description: "Освобождает вертикальное пространство экрана, оставляя только названия вкладок",
    keys: {
      windows: ["Ctrl", "F1"],
      macos: ["Cmd", "Option", "R"],
      web: ["Ctrl", "F1"]
    },
    category: "Окна, листы и аудит",
    popularity: 87
  },

  // ==========================================
  // 8. ДОПОЛНИТЕЛЬНЫЕ ПРОВЕРЕННЫЕ ОПЕРАЦИИ EXCEL
  // ==========================================
  {
    id: "xl-insert-hyperlink",
    appId: "excel",
    title: "Вставить гиперссылку / веб-ссылку",
    description: "Открывает диалог привязки ячейки к веб-странице, файлу на диске или другому листу книги",
    keys: {
      windows: ["Ctrl", "K"],
      macos: ["Cmd", "K"],
      web: ["Ctrl", "K"]
    },
    category: "Основные операции",
    popularity: 88
  },
  {
    id: "xl-spell-check",
    appId: "excel",
    title: "Проверка орфографии листа",
    description: "Запускает встроенную проверку грамматики и опечаток на активном листе",
    keys: {
      windows: ["F7"],
      macos: ["F7"],
      web: ["F7"]
    },
    category: "Основные операции",
    popularity: 76
  },
  {
    id: "xl-help-dialog",
    appId: "excel",
    title: "Открыть справку Microsoft Excel",
    description: "Вызывает официальную справочную систему Microsoft Office с поиском по темам",
    keys: {
      windows: ["F1"],
      macos: ["Cmd", "/"],
      web: ["F1"]
    },
    category: "Основные операции",
    popularity: 70
  },
  {
    id: "xl-search-ribbon",
    appId: "excel",
    title: "Поиск действий («Что вы хотите сделать?» / Поиск)",
    description: "Активирует строку поиска команд в заголовке окна для запуска инструментов без кликов по меню",
    keys: {
      windows: ["Alt", "Q"],
      macos: ["Option", "Q"],
      web: ["Alt", "Q"]
    },
    category: "Основные операции",
    popularity: 92
  },
  {
    id: "xl-open-context-menu",
    appId: "excel",
    title: "Контекстное меню активной ячейки",
    description: "Открывает меню правой кнопки мыши для активной ячейки с клавиатуры",
    keys: {
      windows: ["Shift", "F10"],
      macos: ["Shift", "F10"],
      web: ["Shift", "F10"]
    },
    category: "Основные операции",
    popularity: 81
  },

  // ==========================================
  // 9. ФОРМУЛЫ И ВЫЧИСЛЕНИЯ (РАСШИРЕННЫЙ НАБОР)
  // ==========================================
  {
    id: "xl-formula-autocomplete",
    appId: "excel",
    title: "Принять подсказку автозавершения формулы",
    description: "При наборе названия формулы (например, =ВПР или =XLOOKUP) клавиша Tab мгновенно подставляет имя и открывающую скобку",
    keys: {
      windows: ["Tab"],
      macos: ["Tab"],
      web: ["Tab"]
    },
    category: "Формулы и вычисления",
    popularity: 95
  },
  {
    id: "xl-copy-formula-above",
    appId: "excel",
    title: "Скопировать формулу из верхней ячейки (без сдвига ссылок)",
    description: "Копирует формулу точно в исходном виде из ячейки прямо над курсором без автоматической перенастройки относительных адресов",
    keys: {
      windows: ["Ctrl", "'"],
      macos: ["Ctrl", "'"],
      web: ["Ctrl", "'"]
    },
    category: "Формулы и вычисления",
    popularity: 89
  },
  {
    id: "xl-copy-value-above",
    appId: "excel",
    title: "Скопировать точное значение из ячейки сверху",
    description: "Вставляет в текущую ячейку вычисленное значение из ячейки над ней как чистый текст или число",
    keys: {
      windows: ["Ctrl", "Shift", "\""],
      macos: ["Ctrl", "Shift", "\""],
      web: ["Ctrl", "Shift", "\""]
    },
    category: "Формулы и вычисления",
    popularity: 86
  },
  {
    id: "xl-insert-function-args",
    appId: "excel",
    title: "Вставить шаблон аргументов функции",
    description: "После ввода имени функции вставляет круглые скобки и шаблон именованных аргументов для заполнения",
    keys: {
      windows: ["Ctrl", "Shift", "A"],
      macos: ["Ctrl", "Shift", "A"],
      web: ["Ctrl", "Shift", "A"]
    },
    category: "Формулы и вычисления",
    popularity: 78
  },
  {
    id: "xl-full-recalc-all",
    appId: "excel",
    title: "Полный пересчет книги с перестроением дерева формул",
    description: "Принудительно очищает кэш расчётов и заново вычисляет все формулы во всех открытых документах Excel",
    keys: {
      windows: ["Ctrl", "Alt", "Shift", "F9"],
      macos: ["Cmd", "Option", "Shift", "F9"],
      web: ["F9"]
    },
    category: "Формулы и вычисления",
    popularity: 84
  },
  {
    id: "xl-recalc-dirty",
    appId: "excel",
    title: "Пересчитать все изменившиеся ячейки",
    description: "Форсирует пересчет зависимых ячеек во всех открытых книгах, минуя стандартный фоновый цикл",
    keys: {
      windows: ["Ctrl", "Alt", "F9"],
      macos: ["Cmd", "Option", "F9"],
      web: ["F9"]
    },
    category: "Формулы и вычисления",
    popularity: 80
  },
  {
    id: "xl-create-names-from-selection",
    appId: "excel",
    title: "Создать имена диапазонов по заголовкам строк и столбцов",
    description: "Мгновенно создает именованные диапазоны в Диспетчере имён по выделенным ячейкам и их текстовым заголовкам",
    keys: {
      windows: ["Ctrl", "Shift", "F3"],
      macos: ["Cmd", "Shift", "F3"],
      web: ["Alt", "M", "C"]
    },
    category: "Формулы и вычисления",
    popularity: 83
  },
  {
    id: "xl-select-precedents-direct",
    appId: "excel",
    title: "Выделить влияющие ячейки (источники формулы)",
    description: "Мгновенно выделяет на листе все ячейки, которые непосредственно подаются на вход текущей формулы",
    keys: {
      windows: ["Ctrl", "["],
      macos: ["Ctrl", "["],
      web: ["Ctrl", "["]
    },
    category: "Формулы и вычисления",
    popularity: 87
  },
  {
    id: "xl-select-dependents-direct",
    appId: "excel",
    title: "Выделить зависимые ячейки (потребители значения)",
    description: "Мгновенно находит и выделяет ячейки, которые зависят от значения в активной ячейке",
    keys: {
      windows: ["Ctrl", "]"],
      macos: ["Ctrl", "]"],
      web: ["Ctrl", "]"]
    },
    category: "Формулы и вычисления",
    popularity: 85
  },
  {
    id: "xl-select-precedents-all",
    appId: "excel",
    title: "Выделить все уровни влияющих ячеек",
    description: "Рекурсивно выделяет всю цепочку предшествующих ячеек до самого первого первоисточника",
    keys: {
      windows: ["Ctrl", "Shift", "{" ],
      macos: ["Ctrl", "Shift", "{" ],
      web: ["Ctrl", "Shift", "{" ]
    },
    category: "Формулы и вычисления",
    popularity: 79
  },
  {
    id: "xl-select-dependents-all",
    appId: "excel",
    title: "Выделить все уровни зависимых ячеек",
    description: "Рекурсивно выделяет все зависимые формулы книги, на которые косвенно влияет текущая ячейка",
    keys: {
      windows: ["Ctrl", "Shift", "}" ],
      macos: ["Ctrl", "Shift", "}" ],
      web: ["Ctrl", "Shift", "}" ]
    },
    category: "Формулы и вычисления",
    popularity: 78
  },

  // ==========================================
  // 10. НАВИГАЦИЯ И ВЫДЕЛЕНИЕ (РАСШИРЕННЫЙ НАБОР)
  // ==========================================
  {
    id: "xl-select-current-region",
    appId: "excel",
    title: "Выделить текущую область данных (Current Region)",
    description: "Выделяет весь сплошной прямоугольный массив заполненных данных вокруг текущей ячейки до первых пустых строк и колонок",
    keys: {
      windows: ["Ctrl", "Shift", "*"],
      macos: ["Cmd", "Shift", "*"],
      web: ["Ctrl", "Shift", "8"]
    },
    category: "Навигация и выделение",
    popularity: 94
  },
  {
    id: "xl-select-multiple-sheets-next",
    appId: "excel",
    title: "Сгруппировать активный и следующий лист",
    description: "Добавляет следующий лист в группу выделения для одновременного ввода данных и синхронного форматирования",
    keys: {
      windows: ["Ctrl", "Shift", "PageDown"],
      macos: ["Shift", "Option", "Right"],
      web: ["Ctrl", "Shift", "PageDown"]
    },
    category: "Навигация и выделение",
    popularity: 82
  },
  {
    id: "xl-select-multiple-sheets-prev",
    appId: "excel",
    title: "Сгруппировать активный и предыдущий лист",
    description: "Добавляет предыдущий лист книги в групповое выделение",
    keys: {
      windows: ["Ctrl", "Shift", "PageUp"],
      macos: ["Shift", "Option", "Left"],
      web: ["Ctrl", "Shift", "PageUp"]
    },
    category: "Навигация и выделение",
    popularity: 81
  },
  {
    id: "xl-scroll-left-screen",
    appId: "excel",
    title: "Прокрутка листа на экран влево",
    description: "Сдвигает видимую область книги ровно на одну ширину текущего окна влево",
    keys: {
      windows: ["Alt", "PageUp"],
      macos: ["Option", "PageUp"],
      web: ["Alt", "PageUp"]
    },
    category: "Навигация и выделение",
    popularity: 77
  },
  {
    id: "xl-scroll-right-screen",
    appId: "excel",
    title: "Прокрутка листа на экран вправо",
    description: "Сдвигает видимую область книги ровно на одну ширину текущего окна вправо",
    keys: {
      windows: ["Alt", "PageDown"],
      macos: ["Option", "PageDown"],
      web: ["Alt", "PageDown"]
    },
    category: "Навигация и выделение",
    popularity: 78
  },
  {
    id: "xl-collapse-selection",
    appId: "excel",
    title: "Свернуть выделение к активной ячейке",
    description: "Сбрасывает выделение большого диапазона, оставляя выбранной только одну исходную активную ячейку",
    keys: {
      windows: ["Shift", "Backspace"],
      macos: ["Shift", "Delete"],
      web: ["Shift", "Backspace"]
    },
    category: "Навигация и выделение",
    popularity: 83
  },
  {
    id: "xl-return-to-active-cell",
    appId: "excel",
    title: "Показать активную ячейку в центре экрана без потери выделения",
    description: "Возвращает фокус экрана к активной ячейке, если вы случайно прокрутили лист мышью в сторону",
    keys: {
      windows: ["Ctrl", "Backspace"],
      macos: ["Cmd", "Delete"],
      web: ["Ctrl", "Backspace"]
    },
    category: "Навигация и выделение",
    popularity: 89
  },
  {
    id: "xl-select-diff-cells",
    appId: "excel",
    title: "Выделить отличающиеся ячейки в строках (Row Differences)",
    description: "Сравнивает ячейки в каждой строке выделения с первой ячейкой этой строки и подсвечивает отличия",
    keys: {
      windows: ["Ctrl", "\\"],
      macos: ["Ctrl", "\\"],
      web: ["Ctrl", "\\"]
    },
    category: "Навигация и выделение",
    popularity: 80
  },
  {
    id: "xl-select-diff-cells-col",
    appId: "excel",
    title: "Выделить отличающиеся ячейки в столбцах (Column Differences)",
    description: "Сравнивает ячейки в каждом столбце выделения с верхней ячейкой и подсвечивает отличия",
    keys: {
      windows: ["Ctrl", "Shift", "|"],
      macos: ["Ctrl", "Shift", "|"],
      web: ["Ctrl", "Shift", "|"]
    },
    category: "Навигация и выделение",
    popularity: 79
  },

  // ==========================================
  // 11. СТРОКИ, СТОЛБЦЫ И ЯЧЕЙКИ (РАСШИРЕННЫЙ НАБОР)
  // ==========================================
  {
    id: "xl-insert-comment-note",
    appId: "excel",
    title: "Вставить или редактировать примечание ячейки (Note)",
    description: "Открывает классическую жёлтую карточку примечания к ячейке для служебных пометок",
    keys: {
      windows: ["Shift", "F2"],
      macos: ["Shift", "F2"],
      web: ["Shift", "F2"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 88
  },
  {
    id: "xl-insert-threaded-comment",
    appId: "excel",
    title: "Создать цепочку комментариев (Threaded Comment / @mentions)",
    description: "Создает современный комментарий с возможностью тегать коллег через @ и вести переписку в облаке",
    keys: {
      windows: ["Ctrl", "Shift", "F2"],
      macos: ["Cmd", "Shift", "F2"],
      web: ["Ctrl", "Shift", "F2"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 85
  },
  {
    id: "xl-autofit-column-width",
    appId: "excel",
    title: "Автоподбор ширины столбца по самому длинному тексту",
    description: "Клавиатурная последовательность ленты для мгновенного раскрытия столбцов без появления знаков ###",
    keys: {
      windows: ["Alt", "H", "O", "I"],
      macos: ["Option", "Cmd", "R"],
      web: ["Alt", "H", "O", "I"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 96
  },
  {
    id: "xl-autofit-row-height",
    appId: "excel",
    title: "Автоподбор высоты строки по содержимому",
    description: "Выравнивает высоту строк под количество строк переноса текста внутри ячеек",
    keys: {
      windows: ["Alt", "H", "O", "A"],
      macos: ["Option", "Cmd", "A"],
      web: ["Alt", "H", "O", "A"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 91
  },
  {
    id: "xl-delete-cell-contents",
    appId: "excel",
    title: "Очистить содержимое ячеек (сохраняя форматы)",
    description: "Стирает текст и числа, сохраняя границы, заливку и правила условного форматирования ячеек",
    keys: {
      windows: ["Delete"],
      macos: ["Delete"],
      web: ["Delete"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 98
  },
  {
    id: "xl-clear-all-cell",
    appId: "excel",
    title: "Очистить всё (содержимое, форматирование, ссылки и заметки)",
    description: "Полностью обнуляет выделенные клетки до абсолютно чистого белого состояния",
    keys: {
      windows: ["Alt", "H", "E", "A"],
      macos: ["Alt", "H", "E", "A"],
      web: ["Alt", "H", "E", "A"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 84
  },
  {
    id: "xl-clear-formats-only",
    appId: "excel",
    title: "Очистить только форматы (оставить сырые данные)",
    description: "Сбрасывает чужие шрифты, фоны и рамки, сохраняя исходные цифры и текст",
    keys: {
      windows: ["Alt", "H", "E", "F"],
      macos: ["Alt", "H", "E", "F"],
      web: ["Alt", "H", "E", "F"]
    },
    category: "Строки, столбцы и ячейки",
    popularity: 89
  },

  // ==========================================
  // 12. ФОРМАТИРОВАНИЕ И ВЫРАВНИВАНИЕ
  // ==========================================
  {
    id: "xl-format-scientific",
    appId: "excel",
    title: "Экспоненциальный (научный) формат числа",
    description: "Применяет научный формат представления чисел с плавающей точкой (например, 1,00E+06)",
    keys: {
      windows: ["Ctrl", "Shift", "^"],
      macos: ["Ctrl", "Shift", "^"],
      web: ["Ctrl", "Shift", "^"]
    },
    category: "Форматирование и стили",
    popularity: 72
  },
  {
    id: "xl-align-center",
    appId: "excel",
    title: "Выравнивание текста по горизонтали по центру",
    description: "Центрирует содержимое всех выделенных ячеек",
    keys: {
      windows: ["Alt", "H", "A", "C"],
      macos: ["Cmd", "E"],
      web: ["Alt", "H", "A", "C"]
    },
    category: "Форматирование и стили",
    popularity: 90
  },
  {
    id: "xl-align-left",
    appId: "excel",
    title: "Выравнивание текста по левому краю",
    description: "Прижимает текст и числа к левой границе ячейки",
    keys: {
      windows: ["Alt", "H", "A", "L"],
      macos: ["Cmd", "L"],
      web: ["Alt", "H", "A", "L"]
    },
    category: "Форматирование и стили",
    popularity: 86
  },
  {
    id: "xl-align-right",
    appId: "excel",
    title: "Выравнивание текста по правому краю",
    description: "Выравнивает значения по правому краю ячейки (стандарт для числовых колонок)",
    keys: {
      windows: ["Alt", "H", "A", "R"],
      macos: ["Cmd", "R"],
      web: ["Alt", "H", "A", "R"]
    },
    category: "Форматирование и стили",
    popularity: 87
  },
  {
    id: "xl-merge-center",
    appId: "excel",
    title: "Объединить ячейки и поместить в центре",
    description: "Объединяет диапазон смежных ячеек в одну крупную шапку с центрированием текста",
    keys: {
      windows: ["Alt", "H", "M", "C"],
      macos: ["Alt", "H", "M", "C"],
      web: ["Alt", "H", "M", "C"]
    },
    category: "Форматирование и стили",
    popularity: 89
  },
  {
    id: "xl-wrap-text",
    appId: "excel",
    title: "Переносить текст по словам",
    description: "Включает многострочный перенос длинного текста без расширения ширины столбца",
    keys: {
      windows: ["Alt", "H", "W"],
      macos: ["Alt", "H", "W"],
      web: ["Alt", "H", "W"]
    },
    category: "Форматирование и стили",
    popularity: 94
  },

  // ==========================================
  // 13. ТАБЛИЦЫ, ДАННЫЕ И СВОДНЫЕ ОТЧЕТЫ
  // ==========================================
  {
    id: "xl-refresh-pivot",
    appId: "excel",
    title: "Обновить текущую сводную таблицу или активный запрос",
    description: "Перечитывает исходные данные и мгновенно пересчитывает активный отчет Pivot Table",
    keys: {
      windows: ["Alt", "F5"],
      macos: ["Option", "F5"],
      web: ["Alt", "F5"]
    },
    category: "Таблицы и данные",
    popularity: 95
  },
  {
    id: "xl-refresh-all-data",
    appId: "excel",
    title: "Обновить ВСЕ подключения, сводные таблицы и Power Query в книге",
    description: "Запускает глобальное параллельное обновление всех внешних коннекторов, баз данных и сводных отчётов",
    keys: {
      windows: ["Ctrl", "Alt", "F5"],
      macos: ["Cmd", "Option", "F5"],
      web: ["Ctrl", "Alt", "F5"]
    },
    category: "Таблицы и данные",
    popularity: 97
  },
  {
    id: "xl-insert-pivottable",
    appId: "excel",
    title: "Создать новую сводную таблицу (Pivot Table)",
    description: "Вызывает мастер построения сводной таблицы по текущему диапазону данных",
    keys: {
      windows: ["Alt", "N", "V"],
      macos: ["Option", "Cmd", "P"],
      web: ["Alt", "N", "V"]
    },
    category: "Таблицы и данные",
    popularity: 93
  },
  {
    id: "xl-show-total-row",
    appId: "excel",
    title: "Включить / скрыть строку итогов умной таблицы",
    description: "Добавляет автоматическую нижнюю строку с суммами, средними или количеством значений",
    keys: {
      windows: ["Ctrl", "Shift", "T"],
      macos: ["Cmd", "Shift", "T"],
      web: ["Ctrl", "Shift", "T"]
    },
    category: "Таблицы и данные",
    popularity: 91
  },
  {
    id: "xl-clear-filter",
    appId: "excel",
    title: "Очистить фильтр в текущем столбце",
    description: "Сбрасывает фильтрацию в активной колонке таблицы, возвращая показ всех скрытых строк",
    keys: {
      windows: ["Alt", "A", "C"],
      macos: ["Alt", "A", "C"],
      web: ["Alt", "A", "C"]
    },
    category: "Таблицы и данные",
    popularity: 88
  },
  {
    id: "xl-reapply-filter",
    appId: "excel",
    title: "Повторно применить фильтр и сортировку",
    description: "Перезапускает условия фильтрации после добавления или изменения значений в строках таблицы",
    keys: {
      windows: ["Ctrl", "Alt", "L"],
      macos: ["Cmd", "Option", "L"],
      web: ["Ctrl", "Alt", "L"]
    },
    category: "Таблицы и данные",
    popularity: 87
  },
  {
    id: "xl-data-validation-open",
    appId: "excel",
    title: "Диалоговое окно «Проверка данных» (Data Validation)",
    description: "Открывает настройку выпадающих списков, диапазона допустимых чисел и ограничений ввода",
    keys: {
      windows: ["Alt", "A", "V", "V"],
      macos: ["Alt", "A", "V", "V"],
      web: ["Alt", "A", "V", "V"]
    },
    category: "Таблицы и данные",
    popularity: 90
  },

  // ==========================================
  // 14. ОКНА, ЛИСТЫ И СТРУКТУРА
  // ==========================================
  {
    id: "xl-rename-sheet",
    appId: "excel",
    title: "Переименовать текущий рабочий лист",
    description: "Переводит название активного ярлычка листа в режим редактирования с клавиатуры",
    keys: {
      windows: ["Alt", "H", "O", "R"],
      macos: ["Alt", "H", "O", "R"],
      web: ["Alt", "H", "O", "R"]
    },
    category: "Окна, листы и аудит",
    popularity: 86
  },
  {
    id: "xl-move-copy-sheet",
    appId: "excel",
    title: "Диалог «Переместить или скопировать лист»",
    description: "Открывает окно дублирования текущего листа в новую или существующую книгу",
    keys: {
      windows: ["Alt", "H", "O", "M"],
      macos: ["Alt", "H", "O", "M"],
      web: ["Alt", "H", "O", "M"]
    },
    category: "Окна, листы и аудит",
    popularity: 82
  },
  {
    id: "xl-delete-sheet",
    appId: "excel",
    title: "Удалить активный лист книги",
    description: "Вызывает запрос на безвозвратное удаление текущего листа книги",
    keys: {
      windows: ["Alt", "H", "D", "S"],
      macos: ["Alt", "H", "D", "S"],
      web: ["Alt", "H", "D", "S"]
    },
    category: "Окна, листы и аудит",
    popularity: 79
  },
  {
    id: "xl-zoom-dialog",
    appId: "excel",
    title: "Окно масштабирования отображения листа",
    description: "Быстрый выбор процента масштаба листа (50%, 75%, 100%, 200% или по выделению)",
    keys: {
      windows: ["Alt", "W", "Q"],
      macos: ["Cmd", "Option", "+"],
      web: ["Alt", "W", "Q"]
    },
    category: "Окна, листы и аудит",
    popularity: 81
  },
  {
    id: "xl-freeze-panes-toggle",
    appId: "excel",
    title: "Закрепить / открепить области (верхние строки и столбцы)",
    description: "Фиксирует заголовки таблицы сверху и слева при прокрутке многостраничных массивов данных",
    keys: {
      windows: ["Alt", "W", "F", "F"],
      macos: ["Alt", "W", "F", "F"],
      web: ["Alt", "W", "F", "F"]
    },
    category: "Окна, листы и аудит",
    popularity: 96
  },
  {
    id: "xl-split-panes",
    appId: "excel",
    title: "Разделить окно на 4 независимые панели прокрутки",
    description: "Разбивает экран листа на 4 квадранта с независимыми полосами прокрутки для одновременного сравнения разных частей",
    keys: {
      windows: ["Alt", "W", "S"],
      macos: ["Alt", "W", "S"],
      web: ["Alt", "W", "S"]
    },
    category: "Окна, листы и аудит",
    popularity: 80
  },
  {
    id: "xl-new-window-view",
    appId: "excel",
    title: "Создать новое окно для текущей книги",
    description: "Открывает второй независимый видовой экран той же книги для параллельной работы с двумя разными листами",
    keys: {
      windows: ["Alt", "W", "N"],
      macos: ["Alt", "W", "N"],
      web: ["Alt", "W", "N"]
    },
    category: "Окна, листы и аудит",
    popularity: 84
  },
  {
    id: "xl-toggle-outline-symbols",
    appId: "excel",
    title: "Скрыть / показать значки структуры (плюсики и минусики группировки)",
    description: "Мгновенно освобождает левое поле листа от служебных кнопок уровней группировки",
    keys: {
      windows: ["Ctrl", "8"],
      macos: ["Ctrl", "8"],
      web: ["Ctrl", "8"]
    },
    category: "Окна, листы и аудит",
    popularity: 81
  },

  // ==========================================
  // 15. АВТОМАТИЗАЦИЯ И МАКРОСЫ
  // ==========================================
  {
    id: "xl-vba-editor",
    appId: "excel",
    title: "Открыть редактор макросов Visual Basic for Applications (VBA)",
    description: "Запускает встроенную среду разработки VBA IDE для написания пользовательских макросов и процедур",
    keys: {
      windows: ["Alt", "F11"],
      macos: ["Option", "F11"],
      web: ["Alt", "F11"]
    },
    category: "Автоматизация и макросы",
    popularity: 91
  },
  {
    id: "xl-macros-dialog",
    appId: "excel",
    title: "Диалоговое окно списка макросов (выбор и запуск)",
    description: "Открывает список всех записанных и импортированных макросов книги для запуска, отладки или редактирования",
    keys: {
      windows: ["Alt", "F8"],
      macos: ["Option", "F8"],
      web: ["Alt", "F8"]
    },
    category: "Автоматизация и макросы",
    popularity: 87
  },
  {
    id: "xl-office-scripts",
    appId: "excel",
    title: "Панель автоматизации Office Scripts (TypeScript-скрипты)",
    description: "Открывает панель создания и запуска облачных скриптов автоматизации на TypeScript для Excel 365 и Web",
    keys: {
      windows: ["Alt", "A", "U"],
      macos: ["Alt", "A", "U"],
      web: ["Alt", "A", "U"]
    },
    category: "Автоматизация и макросы",
    popularity: 76
  }
];


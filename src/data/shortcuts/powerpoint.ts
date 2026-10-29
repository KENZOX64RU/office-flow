import type { Shortcut } from '../../types/index.ts';

export const POWERPOINT_SHORTCUTS: Shortcut[] = [
  // ==========================================
  // 1. СОЗДАНИЕ И МАКЕТЫ СЛАЙДОВ
  // ==========================================
  {
    id: "ppt-new-slide",
    appId: "powerpoint",
    title: "Вставить новый слайд",
    description: "Добавляет новый слайд с макетом по умолчанию сразу после текущего",
    keys: {
      windows: ["Ctrl", "M"],
      macos: ["Cmd", "Shift", "N"],
      web: ["Ctrl", "M"]
    },
    category: "Создание и макеты",
    popularity: 98
  },
  {
    id: "ppt-duplicate-slide",
    appId: "powerpoint",
    title: "Дублировать выделенный слайд или объект",
    description: "Создает точную копию выбранных слайдов или графических блоков с сохранением координат",
    keys: {
      windows: ["Ctrl", "D"],
      macos: ["Cmd", "D"],
      web: ["Ctrl", "D"]
    },
    category: "Создание и макеты",
    popularity: 97
  },
  {
    id: "ppt-new-presentation",
    appId: "powerpoint",
    title: "Создать новую презентацию",
    description: "Открывает чистую презентацию с титульным слайдом",
    keys: {
      windows: ["Ctrl", "N"],
      macos: ["Cmd", "N"],
      web: ["Alt", "Win", "N"]
    },
    category: "Создание и макеты",
    popularity: 88
  },
  {
    id: "ppt-delete-slide",
    appId: "powerpoint",
    title: "Удалить выделенные слайды",
    description: "Безвозвратно удаляет выбранные слайды из структуры презентации",
    keys: {
      windows: ["Delete"],
      macos: ["Delete"],
      web: ["Delete"]
    },
    category: "Создание и макеты",
    popularity: 94
  },
  {
    id: "ppt-slide-master-view",
    appId: "powerpoint",
    title: "Открыть режим «Образец слайдов»",
    description: "Переключает вид в Slide Master для глобальной настройки шаблонов, шрифтов и логотипов",
    keys: {
      windows: ["Alt", "W", "M"],
      macos: ["Cmd", "Option", "1"]
    },
    category: "Создание и макеты",
    popularity: 86
  },
  {
    id: "ppt-normal-view",
    appId: "powerpoint",
    title: "Вернуться в обычный режим редактирования",
    description: "Выход из образца слайдов или сортировщика в стандартный режим с лентой слайдов слева",
    keys: {
      windows: ["Alt", "W", "L"],
      macos: ["Cmd", "1"]
    },
    category: "Создание и макеты",
    popularity: 85
  },

  // ==========================================
  // 2. ПОКАЗ СЛАЙДОВ И РЕЖИМ ДОКЛАДЧИКА
  // ==========================================
  {
    id: "ppt-start-show",
    appId: "powerpoint",
    title: "Запустить показ слайдов с самого начала",
    description: "Включает полноэкранный режим демонстрации с 1-го слайда",
    keys: {
      windows: ["F5"],
      macos: ["Cmd", "Shift", "Enter"],
      web: ["F5"]
    },
    category: "Показ слайдов",
    popularity: 99
  },
  {
    id: "ppt-show-from-current",
    appId: "powerpoint",
    title: "Запустить показ с текущего слайда",
    description: "Запускает полноэкранную демонстрацию именно с того слайда, который открыт на экране",
    keys: {
      windows: ["Shift", "F5"],
      macos: ["Cmd", "Enter"],
      web: ["Shift", "F5"]
    },
    category: "Показ слайдов",
    popularity: 99
  },
  {
    id: "ppt-presenter-view-toggle",
    appId: "powerpoint",
    title: "Переключить режим докладчика",
    description: "Открывает специальный экран спикера с заметками, таймером и превью следующего слайда",
    keys: {
      windows: ["Alt", "F5"],
      macos: ["Option", "Enter"]
    },
    category: "Показ слайдов",
    popularity: 92
  },
  {
    id: "ppt-end-show",
    appId: "powerpoint",
    title: "Завершить показ слайдов",
    description: "Выход из полноэкранного режима презентации обратно в редактор",
    keys: {
      windows: ["Esc"],
      macos: ["Esc"],
      web: ["Esc"]
    },
    category: "Показ слайдов",
    popularity: 99
  },
  {
    id: "ppt-next-slide",
    appId: "powerpoint",
    title: "Следующий слайд или анимация",
    description: "Переход к следующему эффекту анимации или к следующему слайду презентации",
    keys: {
      windows: ["Space"],
      macos: ["Space"],
      web: ["Space"]
    },
    category: "Показ слайдов",
    popularity: 98
  },
  {
    id: "ppt-prev-slide",
    appId: "powerpoint",
    title: "Предыдущий слайд или шаг анимации",
    description: "Возврат к предыдущему слайду или предыдущему шагу анимации",
    keys: {
      windows: ["Backspace"],
      macos: ["Backspace"],
      web: ["Backspace"]
    },
    category: "Показ слайдов",
    popularity: 95
  },
  {
    id: "ppt-jump-to-slide-number",
    appId: "powerpoint",
    title: "Быстрый переход к номеру слайда в показе",
    description: "Во время показа наберите цифру номера слайда и нажмите Enter для мгновенного прыжка",
    keys: {
      windows: ["Номер", "Enter"],
      macos: ["Номер", "Enter"],
      web: ["Номер", "Enter"]
    },
    category: "Показ слайдов",
    popularity: 93
  },
  {
    id: "ppt-see-all-slides",
    appId: "powerpoint",
    title: "Сетка всех слайдов во время показа (Slide Navigator)",
    description: "Показывает спикеру миниатюры всех слайдов для выбора нужного без листания всей колоды",
    keys: {
      windows: ["Ctrl", "S"],
      macos: ["Cmd", "S"]
    },
    category: "Показ слайдов",
    popularity: 90
  },

  // ==========================================
  // 3. ИНСТРУМЕНТЫ ДОКЛАДЧИКА ПРИ ПОКАЗЕ
  // ==========================================
  {
    id: "ppt-black-screen",
    appId: "powerpoint",
    title: "Затемнить экран (Black Screen)",
    description: "Переключает экран в сплошной черный цвет, переключая внимание зала на спикера",
    keys: {
      windows: ["B"],
      macos: ["B"],
      web: ["B"]
    },
    category: "Инструменты докладчика",
    popularity: 96
  },
  {
    id: "ppt-white-screen",
    appId: "powerpoint",
    title: "Осветлить экран (White Screen)",
    description: "Переключает экран в белый цвет (удобно для рисования маркером во время ответа на вопросы)",
    keys: {
      windows: ["W"],
      macos: ["W"],
      web: ["W"]
    },
    category: "Инструменты докладчика",
    popularity: 91
  },
  {
    id: "ppt-laser-pointer",
    appId: "powerpoint",
    title: "Виртуальная лазерная указка",
    description: "Превращает курсор мыши в яркую красную точку лазерной указки",
    keys: {
      windows: ["Ctrl", "L"],
      macos: ["Cmd", "L"]
    },
    category: "Инструменты докладчика",
    popularity: 95
  },
  {
    id: "ppt-pen-draw",
    appId: "powerpoint",
    title: "Инструмент «Перо» для рисования поверх слайда",
    description: "Позволяет рисовать пометки и стрелки прямо по работающему слайду",
    keys: {
      windows: ["Ctrl", "P"],
      macos: ["Cmd", "P"]
    },
    category: "Инструменты докладчика",
    popularity: 93
  },
  {
    id: "ppt-highlighter",
    appId: "powerpoint",
    title: "Инструмент «Текстовыделитель» (маркер)",
    description: "Включает полупрозрачный желтый маркер для выделения слов на слайде во время речи",
    keys: {
      windows: ["Ctrl", "I"],
      macos: ["Cmd", "Shift", "I"]
    },
    category: "Инструменты докладчика",
    popularity: 88
  },
  {
    id: "ppt-pointer-arrow",
    appId: "powerpoint",
    title: "Вернуть стандартный курсор-стрелку",
    description: "Выключает перо, маркер или указку и возвращает обычную стрелку мыши",
    keys: {
      windows: ["Ctrl", "A"],
      macos: ["Cmd", "A"]
    },
    category: "Инструменты докладчика",
    popularity: 89
  },
  {
    id: "ppt-erase-drawings",
    appId: "powerpoint",
    title: "Стереть все рукописные рисунки со слайда",
    description: "Мгновенно очищает текущий слайд от всех нарисованных во время презентации пометок",
    keys: {
      windows: ["E"],
      macos: ["E"],
      web: ["E"]
    },
    category: "Инструменты докладчика",
    popularity: 91
  },

  // ==========================================
  // 4. ФИГУРЫ, ОБЪЕКТЫ И ВЫРАВНИВАНИЕ
  // ==========================================
  {
    id: "ppt-group-shapes",
    appId: "powerpoint",
    title: "Сгруппировать выделенные объекты",
    description: "Объединяет несколько фигур, надписей или картинок в единую группу",
    keys: {
      windows: ["Ctrl", "G"],
      macos: ["Cmd", "Option", "G"],
      web: ["Ctrl", "G"]
    },
    category: "Фигуры и объекты",
    popularity: 98
  },
  {
    id: "ppt-ungroup-shapes",
    appId: "powerpoint",
    title: "Разгруппировать объекты",
    description: "Разбивает группу обратно на независимые геометрические элементы",
    keys: {
      windows: ["Ctrl", "Shift", "G"],
      macos: ["Cmd", "Option", "Shift", "G"],
      web: ["Ctrl", "Shift", "G"]
    },
    category: "Фигуры и объекты",
    popularity: 96
  },
  {
    id: "ppt-regroup-shapes",
    appId: "powerpoint",
    title: "Повторно сгруппировать объекты",
    description: "Мгновенно восстанавливает последнюю расформированную группу без повторного выбора",
    keys: {
      windows: ["Ctrl", "Shift", "J"],
      macos: ["Cmd", "Option", "J"]
    },
    category: "Фигуры и объекты",
    popularity: 82
  },
  {
    id: "ppt-bring-to-front",
    appId: "powerpoint",
    title: "Поместить объект на передний план",
    description: "Переносит фигуру или рисунок на самый верхний слой наложения",
    keys: {
      windows: ["Ctrl", "Shift", "]"],
      macos: ["Cmd", "Shift", "]"]
    },
    category: "Фигуры и объекты",
    popularity: 93
  },
  {
    id: "ppt-send-to-back",
    appId: "powerpoint",
    title: "Поместить объект на задний план",
    description: "Переносит выделенный блок под все остальные элементы слайда",
    keys: {
      windows: ["Ctrl", "Shift", "["],
      macos: ["Cmd", "Shift", "["]
    },
    category: "Фигуры и объекты",
    popularity: 93
  },
  {
    id: "ppt-bring-forward-1",
    appId: "powerpoint",
    title: "Переместить вперед на один уровень",
    description: "Поднимает выбранный объект на один слой выше",
    keys: {
      windows: ["Ctrl", "]"],
      macos: ["Cmd", "]"]
    },
    category: "Фигуры и объекты",
    popularity: 87
  },
  {
    id: "ppt-send-backward-1",
    appId: "powerpoint",
    title: "Переместить назад на один уровень",
    description: "Опускает объект на один слой ниже",
    keys: {
      windows: ["Ctrl", "["],
      macos: ["Cmd", "["]
    },
    category: "Фигуры и объекты",
    popularity: 87
  },
  {
    id: "ppt-selection-pane",
    appId: "powerpoint",
    title: "Открыть панель выделения слоев (Selection Pane)",
    description: "Открывает боковой список всех объектов на слайде для скрытия, переименования и смены порядка слоев",
    keys: {
      windows: ["Alt", "F10"],
      macos: ["Option", "F10"]
    },
    category: "Фигуры и объекты",
    popularity: 92
  },
  {
    id: "ppt-rotate-right-15",
    appId: "powerpoint",
    title: "Повернуть объект вправо на 15 градусов",
    description: "Точный шаговый поворот выделенной фигуры по часовой стрелке",
    keys: {
      windows: ["Alt", "Right"],
      macos: ["Option", "Right"]
    },
    category: "Фигуры и объекты",
    popularity: 85
  },
  {
    id: "ppt-rotate-left-15",
    appId: "powerpoint",
    title: "Повернуть объект влево на 15 градусов",
    description: "Шаговый поворот фигуры против часовой стрелки",
    keys: {
      windows: ["Alt", "Left"],
      macos: ["Option", "Left"]
    },
    category: "Фигуры и объекты",
    popularity: 85
  },
  {
    id: "ppt-nudge-pixel",
    appId: "powerpoint",
    title: "Микросдвиг объекта на 1 пиксель",
    description: "Прецизионное перемещение фигуры стрелками с зажатой клавишей Ctrl в обход сетки привязки",
    keys: {
      windows: ["Ctrl", "Стрелки"],
      macos: ["Cmd", "Стрелки"]
    },
    category: "Фигуры и объекты",
    popularity: 91
  },
  {
    id: "ppt-copy-shape-format",
    appId: "powerpoint",
    title: "Скопировать оформление фигуры («Формат по образцу»)",
    description: "Копирует заливку, контур, тень и параметры шрифта выбранного объекта",
    keys: {
      windows: ["Ctrl", "Shift", "C"],
      macos: ["Cmd", "Shift", "C"]
    },
    category: "Фигуры и объекты",
    popularity: 96
  },
  {
    id: "ppt-paste-shape-format",
    appId: "powerpoint",
    title: "Вставить скопированное оформление фигуры",
    description: "Применяет цвет, границу и спецэффекты к новому объекту в один клик",
    keys: {
      windows: ["Ctrl", "Shift", "V"],
      macos: ["Cmd", "Shift", "V"]
    },
    category: "Фигуры и объекты",
    popularity: 96
  },

  // ==========================================
  // 5. ТЕКСТ И ТИПОГРАФИКА
  // ==========================================
  {
    id: "ppt-text-bold",
    appId: "powerpoint",
    title: "Полужирное начертание шрифта",
    description: "Делает выделенный заголовок или фразу полужирной",
    keys: {
      windows: ["Ctrl", "B"],
      macos: ["Cmd", "B"],
      web: ["Ctrl", "B"]
    },
    category: "Текст и типографика",
    popularity: 99
  },
  {
    id: "ppt-text-italic",
    appId: "powerpoint",
    title: "Курсивное начертание текста",
    description: "Наклоняет выделенный текст курсивом",
    keys: {
      windows: ["Ctrl", "I"],
      macos: ["Cmd", "I"],
      web: ["Ctrl", "I"]
    },
    category: "Текст и типографика",
    popularity: 96
  },
  {
    id: "ppt-text-underline",
    appId: "powerpoint",
    title: "Подчёркивание текста",
    description: "Добавляет линию подчёркивания под выделенным фрагментом",
    keys: {
      windows: ["Ctrl", "U"],
      macos: ["Cmd", "U"],
      web: ["Ctrl", "U"]
    },
    category: "Текст и типографика",
    popularity: 94
  },
  {
    id: "ppt-align-center",
    appId: "powerpoint",
    title: "Выравнивание текста по центру",
    description: "Центрирует строки внутри текстового блока",
    keys: {
      windows: ["Ctrl", "E"],
      macos: ["Cmd", "E"],
      web: ["Ctrl", "E"]
    },
    category: "Текст и типографика",
    popularity: 97
  },
  {
    id: "ppt-align-left",
    appId: "powerpoint",
    title: "Выравнивание по левому краю",
    description: "Прижимает текст к левой границе блока надписи",
    keys: {
      windows: ["Ctrl", "L"],
      macos: ["Cmd", "L"],
      web: ["Ctrl", "L"]
    },
    category: "Текст и типографика",
    popularity: 97
  },
  {
    id: "ppt-align-right",
    appId: "powerpoint",
    title: "Выравнивание по правому краю",
    description: "Прижимает текст к правой границе блока (для дат и подписей слайда)",
    keys: {
      windows: ["Ctrl", "R"],
      macos: ["Cmd", "R"],
      web: ["Ctrl", "R"]
    },
    category: "Текст и типографика",
    popularity: 92
  },
  {
    id: "ppt-align-justify",
    appId: "powerpoint",
    title: "Выравнивание по ширине блока",
    description: "Растягивает текст с равномерными интервалами между границами текстового поля",
    keys: {
      windows: ["Ctrl", "J"],
      macos: ["Cmd", "J"],
      web: ["Ctrl", "J"]
    },
    category: "Текст и типографика",
    popularity: 88
  },
  {
    id: "ppt-font-grow",
    appId: "powerpoint",
    title: "Увеличить размер шрифта",
    description: "Шаговое увеличение кегля шрифта выделенного текста",
    keys: {
      windows: ["Ctrl", "Shift", ">"],
      macos: ["Cmd", "Shift", ">"],
      web: ["Ctrl", "Shift", ">"]
    },
    category: "Текст и типографика",
    popularity: 94
  },
  {
    id: "ppt-font-shrink",
    appId: "powerpoint",
    title: "Уменьшить размер шрифта",
    description: "Шаговое уменьшение кегля шрифта выделенного текста",
    keys: {
      windows: ["Ctrl", "Shift", "<"],
      macos: ["Cmd", "Shift", "<"],
      web: ["Ctrl", "Shift", "<"]
    },
    category: "Текст и типографика",
    popularity: 94
  },
  {
    id: "ppt-cycle-case",
    appId: "powerpoint",
    title: "Смена регистра букв (Shift + F3)",
    description: "Циклическое переключение: все строчные → ВСЕ ПРОПИСНЫЕ → Как в предложениях",
    keys: {
      windows: ["Shift", "F3"],
      macos: ["Shift", "F3"]
    },
    category: "Текст и типографика",
    popularity: 93
  },
  {
    id: "ppt-hyperlink",
    appId: "powerpoint",
    title: "Вставить интерактивную гиперссылку",
    description: "Привязывает к фигуре или тексту ссылку на веб-сайт, внешний файл или другой слайд презентации",
    keys: {
      windows: ["Ctrl", "K"],
      macos: ["Cmd", "K"],
      web: ["Ctrl", "K"]
    },
    category: "Текст и типографика",
    popularity: 95
  },

  // ==========================================
  // 6. НАВИГАЦИЯ, СЕТКА И ВИД
  // ==========================================
  {
    id: "ppt-toggle-guides",
    appId: "powerpoint",
    title: "Показать / скрыть направляющие линии",
    description: "Включает настроенные горизонтальные и вертикальные направляющие для идеального выравнивания",
    keys: {
      windows: ["Alt", "F9"],
      macos: ["Option", "F9"]
    },
    category: "Навигация и сетка",
    popularity: 91
  },
  {
    id: "ppt-toggle-grid",
    appId: "powerpoint",
    title: "Показать / скрыть координатную сетку",
    description: "Отображает миллиметровую сетку точек для контроля отступов и пропорций",
    keys: {
      windows: ["Shift", "F9"],
      macos: ["Shift", "F9"]
    },
    category: "Навигация и сетка",
    popularity: 88
  },
  {
    id: "ppt-zoom-fit",
    appId: "powerpoint",
    title: "Подогнать масштаб слайда под размер окна",
    description: "Центрирует активный слайд и выставляет оптимальный масштаб рабочей области",
    keys: {
      windows: ["Alt", "W", "F"],
      macos: ["Cmd", "Option", "O"]
    },
    category: "Навигация и сетка",
    popularity: 87
  },
  {
    id: "ppt-slide-sorter",
    appId: "powerpoint",
    title: "Открыть режим «Сортировщик слайдов»",
    description: "Показывает компактную плитку всех слайдов для быстрой перестановки порядка и группировки по разделам",
    keys: {
      windows: ["Alt", "W", "I"],
      macos: ["Cmd", "2"]
    },
    category: "Навигация и сетка",
    popularity: 89
  },
  {
    id: "ppt-notes-pane",
    appId: "powerpoint",
    title: "Показать / скрыть поле заметок к слайду",
    description: "Раскрывает нижнюю панель для набора подсказок спикера под текущим слайдом",
    keys: {
      windows: ["Alt", "W", "P", "N"],
      macos: ["Cmd", "Shift", "H"]
    },
    category: "Навигация и сетка",
    popularity: 86
  },

  // ==========================================
  // 7. МУЛЬТИМЕДИА, АНИМАЦИЯ И ПРАВКИ
  // ==========================================
  {
    id: "ppt-animation-pane",
    appId: "powerpoint",
    title: "Открыть панель «Область анимации»",
    description: "Открывает боковую таймлайн-панель со списком всех анимационных эффектов текущего слайда",
    keys: {
      windows: ["Alt", "A", "C"],
      macos: ["Cmd", "Option", "A"]
    },
    category: "Мультимедиа и анимация",
    popularity: 91
  },
  {
    id: "ppt-media-play-pause",
    appId: "powerpoint",
    title: "Воспроизведение / пауза видео или звука",
    description: "Управляет проигрыванием выбранного видеоролика или звуковой дорожки на слайде",
    keys: {
      windows: ["Alt", "P"],
      macos: ["Cmd", "Option", "P"]
    },
    category: "Мультимедиа и анимация",
    popularity: 87
  },
  {
    id: "ppt-repeat-action",
    appId: "powerpoint",
    title: "Повторить последнее действие (Repeat)",
    description: "Повторяет последнюю команду вставки, форматирования, выравнивания или покраски",
    keys: {
      windows: ["F4"],
      macos: ["Cmd", "Y"]
    },
    category: "Мультимедиа и анимация",
    popularity: 95
  },
  {
    id: "ppt-undo",
    appId: "powerpoint",
    title: "Отменить последнее действие",
    description: "Откатывает случайное удаление или сдвиг фигуры на один шаг назад",
    keys: {
      windows: ["Ctrl", "Z"],
      macos: ["Cmd", "Z"],
      web: ["Ctrl", "Z"]
    },
    category: "Мультимедиа и анимация",
    popularity: 99
  },
  {
    id: "ppt-redo",
    appId: "powerpoint",
    title: "Вернуть отменённое действие",
    description: "Повторно применяет отмененную через Ctrl + Z правку",
    keys: {
      windows: ["Ctrl", "Y"],
      macos: ["Cmd", "Y"],
      web: ["Ctrl", "Y"]
    },
    category: "Мультимедиа и анимация",
    popularity: 96
  },
  {
    id: "ppt-insert-comment",
    appId: "powerpoint",
    title: "Добавить примечание / комментарий к слайду",
    description: "Оставляет заметку для коллег с возможностью обсуждения в облаке",
    keys: {
      windows: ["Ctrl", "Alt", "M"],
      macos: ["Cmd", "Option", "M"],
      web: ["Ctrl", "Alt", "M"]
    },
    category: "Мультимедиа и анимация",
    popularity: 89
  },

  // ==========================================
  // 8. ФАЙЛЫ, ЭКСПОРТ И ИНТЕРФЕЙС
  // ==========================================
  {
    id: "ppt-save",
    appId: "powerpoint",
    title: "Быстрое сохранение презентации",
    description: "Мгновенно сохраняет файл PPTX со всеми изменениями",
    keys: {
      windows: ["Ctrl", "S"],
      macos: ["Cmd", "S"],
      web: ["Ctrl", "S"]
    },
    category: "Файлы и экспорт",
    popularity: 99
  },
  {
    id: "ppt-save-as",
    appId: "powerpoint",
    title: "Сохранить как (F12)",
    description: "Открывает диалог сохранения презентации под новым именем, в PDF или MP4-видео",
    keys: {
      windows: ["F12"],
      macos: ["Cmd", "Shift", "S"]
    },
    category: "Файлы и экспорт",
    popularity: 93
  },
  {
    id: "ppt-print",
    appId: "powerpoint",
    title: "Печать слайдов / раздаточного материала",
    description: "Открывает меню печати с выбором выдач (по 3 слайда с линиями для заметок или по 6 слайдов на лист)",
    keys: {
      windows: ["Ctrl", "P"],
      macos: ["Cmd", "P"],
      web: ["Ctrl", "P"]
    },
    category: "Файлы и экспорт",
    popularity: 94
  },
  {
    id: "ppt-toggle-ribbon",
    appId: "powerpoint",
    title: "Свернуть или развернуть ленту команд",
    description: "Скрывает верхнюю ленту вкладок для увеличения площади слайда на экране ноутбука",
    keys: {
      windows: ["Ctrl", "F1"],
      macos: ["Cmd", "Option", "R"]
    },
    category: "Файлы и экспорт",
    popularity: 88
  },
  {
    id: "ppt-tell-me",
    appId: "powerpoint",
    title: "Поиск инструментов и команд («Помощник»)",
    description: "Активирует интеллектуальную строку поиска нужного инструмента PowerPoint",
    keys: {
      windows: ["Alt", "Q"],
      macos: ["Option", "Q"]
    },
    category: "Файлы и экспорт",
    popularity: 87
  },
  {
    id: "ppt-close",
    appId: "powerpoint",
    title: "Закрыть активную презентацию",
    description: "Закрывает текущий файл без закрытия приложения PowerPoint",
    keys: {
      windows: ["Ctrl", "W"],
      macos: ["Cmd", "W"],
      web: ["Ctrl", "W"]
    },
    category: "Файлы и экспорт",
    popularity: 92
  }
];

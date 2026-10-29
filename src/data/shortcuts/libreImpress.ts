import type { Shortcut } from '../../types/index.ts';

export const LIBRE_IMPRESS_SHORTCUTS: Shortcut[] = [
  {
    id: 'li-start-first',
    appId: 'libre-impress',
    title: 'Запуск показа с первого слайда',
    description: 'Начало полноэкранной демонстрации презентации с самого первого слайда.',
    category: 'Показ презентации',
    keys: {
      windows: ['F5'],
      linux: ['F5'],
      macos: ['F5']
    },
    context: 'В любом режиме работы с презентацией',
    popularity: 99
  },
  {
    id: 'li-start-current',
    appId: 'libre-impress',
    title: 'Запуск показа с текущего слайда',
    description: 'Демонстрация презентации начиная с активного выбранного слайда.',
    category: 'Показ презентации',
    keys: {
      windows: ['Shift', 'F5'],
      linux: ['Shift', 'F5'],
      macos: ['Shift', 'F5']
    },
    context: 'Для быстрой проверки оформления текущего слайда',
    popularity: 98
  },
  {
    id: 'li-exit-show',
    appId: 'libre-impress',
    title: 'Выход из режима показа',
    description: 'Завершение демонстрации презентации и возврат в окно редактирования слайдов.',
    category: 'Показ презентации',
    keys: {
      windows: ['Esc'],
      linux: ['Esc'],
      macos: ['Esc']
    },
    context: 'Во время показа презентации',
    popularity: 99
  },
  {
    id: 'li-next-step',
    appId: 'libre-impress',
    title: 'Следующий слайд или анимация',
    description: 'Переход к следующему эффекту анимации или к следующему слайду презентации.',
    category: 'Показ презентации',
    keys: {
      windows: ['Space'],
      linux: ['Space'],
      macos: ['Space']
    },
    context: 'Во время демонстрации (также работают N, Стрелка вправо, PageDown)',
    popularity: 97
  },
  {
    id: 'li-prev-step',
    appId: 'libre-impress',
    title: 'Предыдущий слайд или шаг',
    description: 'Возврат к предыдущему шагу анимации или предыдущему слайду презентации.',
    category: 'Показ презентации',
    keys: {
      windows: ['Backspace'],
      linux: ['Backspace'],
      macos: ['Delete']
    },
    context: 'Во время демонстрации (также работают P, Стрелка влево, PageUp)',
    popularity: 92
  },
  {
    id: 'li-goto-slide-num',
    appId: 'libre-impress',
    title: 'Переход к слайду по номеру',
    description: 'Быстрый переход к конкретному слайду: введите номер слайда на клавиатуре и нажмите Enter.',
    category: 'Показ презентации',
    keys: {
      windows: ['Enter'],
      linux: ['Enter'],
      macos: ['Enter']
    },
    context: 'Во время показа наберите цифры номера и нажмите Enter',
    popularity: 88
  },
  {
    id: 'li-black-screen',
    appId: 'libre-impress',
    title: 'Черный экран во время показа',
    description: 'Временное затемнение экрана демонстрации для переключения внимания аудитории на спикера.',
    category: 'Показ презентации',
    keys: {
      windows: ['B'],
      linux: ['B'],
      macos: ['B']
    },
    context: 'Во время показа (нажатие B или точки повторно возвращает слайд)',
    popularity: 94
  },
  {
    id: 'li-white-screen',
    appId: 'libre-impress',
    title: 'Белый экран во время показа',
    description: 'Временная заливка экрана белым цветом (удобно для рисования на доске или пауз).',
    category: 'Показ презентации',
    keys: {
      windows: ['W'],
      linux: ['W'],
      macos: ['W']
    },
    context: 'Во время показа (нажатие W или запятой повторно возвращает слайд)',
    popularity: 86
  },
  {
    id: 'li-goto-first-slide',
    appId: 'libre-impress',
    title: 'Переход к первому слайду',
    description: 'Мгновенный возврат к титульному первому слайду презентации.',
    category: 'Показ презентации',
    keys: {
      windows: ['Home'],
      linux: ['Home'],
      macos: ['Fn', 'Left']
    },
    context: 'Во время демонстрации презентации',
    popularity: 85
  },
  {
    id: 'li-goto-last-slide',
    appId: 'libre-impress',
    title: 'Переход к последнему слайду',
    description: 'Мгновенный переход к финальному слайду с контактами или выводами.',
    category: 'Показ презентации',
    keys: {
      windows: ['End'],
      linux: ['End'],
      macos: ['Fn', 'Right']
    },
    context: 'Во время демонстрации презентации',
    popularity: 85
  },
  {
    id: 'li-new-slide',
    appId: 'libre-impress',
    title: 'Вставить новый слайд',
    description: 'Создание нового пустого слайда с текущим выбранным макетом после активного слайда.',
    category: 'Управление слайдами',
    keys: {
      windows: ['Ctrl', 'M'],
      linux: ['Ctrl', 'M'],
      macos: ['Cmd', 'M']
    },
    context: 'В панели слайдов или окне редактирования',
    popularity: 98
  },
  {
    id: 'li-duplicate-slide',
    appId: 'libre-impress',
    title: 'Дублировать слайд',
    description: 'Создание точной копии активного слайда со всеми объектами, фонами и анимациями.',
    category: 'Управление слайдами',
    keys: {
      windows: ['Ctrl', 'Shift', 'D'],
      linux: ['Ctrl', 'Shift', 'D'],
      macos: ['Cmd', 'Shift', 'D']
    },
    context: 'При выделении слайда в левой панели миниатюр',
    popularity: 93
  },
  {
    id: 'li-delete-slide',
    appId: 'libre-impress',
    title: 'Удалить выделенный слайд',
    description: 'Удаление выбранного слайда или группы слайдов из презентации.',
    category: 'Управление слайдами',
    keys: {
      windows: ['Delete'],
      linux: ['Delete'],
      macos: ['Delete']
    },
    context: 'При выделении миниатюры слайда в левой панели',
    popularity: 96
  },
  {
    id: 'li-navigator',
    appId: 'libre-impress',
    title: 'Навигатор Impress',
    description: 'Открытие окна Навигатора со списком всех слайдов, фигур, изображений и объектов.',
    category: 'Навигация и структура',
    keys: {
      windows: ['Ctrl', 'Shift', 'F5'],
      linux: ['Ctrl', 'Shift', 'F5'],
      macos: ['Cmd', 'Shift', 'F5']
    },
    context: 'Для поиска скрытых и перекрытых объектов на слайде',
    popularity: 89
  },
  {
    id: 'li-styles-sidebar',
    appId: 'libre-impress',
    title: 'Панель стилей оформления',
    description: 'Открытие панели управления стилями графики и стилями презентации (F11).',
    category: 'Дизайн и оформление',
    keys: {
      windows: ['F11'],
      linux: ['F11'],
      macos: ['Cmd', 'T']
    },
    context: 'Для единообразного оформления шрифтов и рамок',
    popularity: 87
  },
  {
    id: 'li-group-objects',
    appId: 'libre-impress',
    title: 'Сгруппировать объекты',
    description: 'Объединение нескольких выделенных фигур, блоков и картинок в единый составной объект.',
    category: 'Работа с объектами',
    keys: {
      windows: ['Ctrl', 'Shift', 'G'],
      linux: ['Ctrl', 'Shift', 'G'],
      macos: ['Cmd', 'Option', 'G']
    },
    context: 'При выделении двух или более объектов на слайде',
    popularity: 96
  },
  {
    id: 'li-ungroup-objects',
    appId: 'libre-impress',
    title: 'Разгруппировать объект',
    description: 'Разбиение сгруппированного составного объекта на отдельные исходные элементы.',
    category: 'Работа с объектами',
    keys: {
      windows: ['Ctrl', 'Alt', 'Shift', 'G'],
      linux: ['Ctrl', 'Alt', 'Shift', 'G'],
      macos: ['Cmd', 'Option', 'Shift', 'G']
    },
    context: 'При выделении сгруппированного блока',
    popularity: 91
  },
  {
    id: 'li-next-text-frame',
    appId: 'libre-impress',
    title: 'Переход в следующий текстовый фрейм',
    description: 'Перемещение фокуса текстового ввода в следующий блок макета слайда (например, из заголовка в список).',
    category: 'Текст и ввод',
    keys: {
      windows: ['Ctrl', 'Enter'],
      linux: ['Ctrl', 'Enter'],
      macos: ['Cmd', 'Enter']
    },
    context: 'В текстовом поле слайда',
    popularity: 90
  },
  {
    id: 'li-text-tool',
    appId: 'libre-impress',
    title: 'Текстовый инструмент / Редактирование текста',
    description: 'Включение инструмента создания текстовой надписи или переход в режим правки текста внутри фигуры.',
    category: 'Текст и ввод',
    keys: {
      windows: ['F2'],
      linux: ['F2'],
      macos: ['F2']
    },
    context: 'На слайде или выделенной фигуре',
    popularity: 95
  },
  {
    id: 'li-edit-points',
    appId: 'libre-impress',
    title: 'Редактирование узловых точек кривой (Безье)',
    description: 'Переход в режим редактирования узлов и направляющих векторных фигур и полигонов.',
    category: 'Работа с объектами',
    keys: {
      windows: ['F8'],
      linux: ['F8'],
      macos: ['F8']
    },
    context: 'На выделенной векторной фигуре или кривой',
    popularity: 84
  },
  {
    id: 'li-bring-to-front',
    appId: 'libre-impress',
    title: 'Переместить на передний план',
    description: 'Поднятие выделенного объекта на самый верхний слой стопки (поверх всех остальных фигур).',
    category: 'Порядок слоев',
    keys: {
      windows: ['Ctrl', 'Shift', '+'],
      linux: ['Ctrl', 'Shift', '+'],
      macos: ['Cmd', 'Shift', '+']
    },
    context: 'На выделенном объекте',
    popularity: 92
  },
  {
    id: 'li-send-to-back',
    appId: 'libre-impress',
    title: 'Переместить на задний план',
    description: 'Опускание выделенного объекта на самый нижний слой (под все остальные фигуры и текст).',
    category: 'Порядок слоев',
    keys: {
      windows: ['Ctrl', 'Shift', '-'],
      linux: ['Ctrl', 'Shift', '-'],
      macos: ['Cmd', 'Shift', '-']
    },
    context: 'На выделенном объекте',
    popularity: 92
  },
  {
    id: 'li-bring-forward',
    appId: 'libre-impress',
    title: 'Переместить вперед на один уровень',
    description: 'Поднятие объекта на один шаг выше по слоям относительно соседних элементов.',
    category: 'Порядок слоев',
    keys: {
      windows: ['Ctrl', '+'],
      linux: ['Ctrl', '+'],
      macos: ['Cmd', '+']
    },
    context: 'На выделенном объекте',
    popularity: 88
  },
  {
    id: 'li-send-backward',
    appId: 'libre-impress',
    title: 'Переместить назад на один уровень',
    description: 'Опускание объекта на один шаг ниже по слоям относительно соседних элементов.',
    category: 'Порядок слоев',
    keys: {
      windows: ['Ctrl', '-'],
      linux: ['Ctrl', '-'],
      macos: ['Cmd', '-']
    },
    context: 'На выделенном объекте',
    popularity: 88
  },
  {
    id: 'li-insert-hyperlink',
    appId: 'libre-impress',
    title: 'Вставить гиперссылку / действие',
    description: 'Открытие окна настройки ссылки на веб-сайт, внешний файл или другой слайд презентации.',
    category: 'Интерактивность',
    keys: {
      windows: ['Ctrl', 'K'],
      linux: ['Ctrl', 'K'],
      macos: ['Cmd', 'K']
    },
    context: 'На выделенном тексте или объекте',
    popularity: 93
  },
  {
    id: 'li-format-bold',
    appId: 'libre-impress',
    title: 'Полужирный шрифт',
    description: 'Применение полужирного начертания к выделенному тексту на слайде.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'B'],
      linux: ['Ctrl', 'B'],
      macos: ['Cmd', 'B']
    },
    context: 'При выделении фрагмента текста',
    popularity: 97
  },
  {
    id: 'li-format-italic',
    appId: 'libre-impress',
    title: 'Курсивный шрифт',
    description: 'Применение курсивного начертания к выделенному тексту на слайде.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'I'],
      linux: ['Ctrl', 'I'],
      macos: ['Cmd', 'I']
    },
    context: 'При выделении фрагмента текста',
    popularity: 94
  },
  {
    id: 'li-format-underline',
    appId: 'libre-impress',
    title: 'Подчеркивание текста',
    description: 'Включение или отключение нижнего подчеркивания выделенных слов.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'U'],
      linux: ['Ctrl', 'U'],
      macos: ['Cmd', 'U']
    },
    context: 'При выделении фрагмента текста',
    popularity: 91
  },
  {
    id: 'li-align-center',
    appId: 'libre-impress',
    title: 'Выравнивание по центру',
    description: 'Центрирование текстовых строк внутри текстового фрейма или фигуры.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'E'],
      linux: ['Ctrl', 'E'],
      macos: ['Cmd', 'E']
    },
    context: 'В текстовом блоке слайда',
    popularity: 93
  },
  {
    id: 'li-align-left',
    appId: 'libre-impress',
    title: 'Выравнивание по левому краю',
    description: 'Выравнивание текста по левой границе текстового фрейма.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'L'],
      linux: ['Ctrl', 'L'],
      macos: ['Cmd', 'L']
    },
    context: 'В текстовом блоке слайда',
    popularity: 92
  },
  {
    id: 'li-align-right',
    appId: 'libre-impress',
    title: 'Выравнивание по правому краю',
    description: 'Выравнивание текста по правой границе текстового фрейма.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'R'],
      linux: ['Ctrl', 'R'],
      macos: ['Cmd', 'R']
    },
    context: 'В текстовом блоке слайда',
    popularity: 87
  },
  {
    id: 'li-align-justify',
    appId: 'libre-impress',
    title: 'Выравнивание по ширине',
    description: 'Равномерное распределение слов строки по левому и правому краям текстового блока.',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'J'],
      linux: ['Ctrl', 'J'],
      macos: ['Cmd', 'J']
    },
    context: 'В текстовом блоке слайда',
    popularity: 86
  },
  {
    id: 'li-superscript',
    appId: 'libre-impress',
    title: 'Надстрочный знак',
    description: 'Преобразование выделенных символов в верхний индекс (например, м² или сноска).',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Shift', 'P'],
      linux: ['Ctrl', 'Shift', 'P'],
      macos: ['Cmd', 'Shift', 'P']
    },
    context: 'При выделении фрагмента текста',
    popularity: 85
  },
  {
    id: 'li-subscript',
    appId: 'libre-impress',
    title: 'Подстрочный знак',
    description: 'Преобразование выделенных символов в нижний индекс (например, H₂O).',
    category: 'Форматирование текста',
    keys: {
      windows: ['Ctrl', 'Shift', 'B'],
      linux: ['Ctrl', 'Shift', 'B'],
      macos: ['Cmd', 'Shift', 'B']
    },
    context: 'При выделении фрагмента текста',
    popularity: 85
  },
  {
    id: 'li-print-preview',
    appId: 'libre-impress',
    title: 'Предварительный просмотр печати',
    description: 'Переход в режим просмотра раздаточных материалов и слайдов перед печатью.',
    category: 'Печать и экспорт',
    keys: {
      windows: ['Ctrl', 'Shift', 'O'],
      linux: ['Ctrl', 'Shift', 'O'],
      macos: ['Cmd', 'Shift', 'O']
    },
    context: 'В окне редактирования презентации',
    popularity: 89
  },
  {
    id: 'li-fullscreen-ui',
    appId: 'libre-impress',
    title: 'Полноэкранный режим интерфейса',
    description: 'Скрытие панелей инструментов и меню для максимального рабочего пространства при верстке.',
    category: 'Вид и интерфейс',
    keys: {
      windows: ['Ctrl', 'Shift', 'J'],
      linux: ['Ctrl', 'Shift', 'J'],
      macos: ['Cmd', 'Shift', 'J']
    },
    context: 'В окне редактирования Impress',
    popularity: 82
  }
];

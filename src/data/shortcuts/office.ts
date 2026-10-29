import type { Shortcut } from '../../types/index.ts';
import { EXCEL_SHORTCUTS } from './excel.ts';
import { WORD_SHORTCUTS } from './word.ts';
import { POWERPOINT_SHORTCUTS } from './powerpoint.ts';
import { OUTLOOK_SHORTCUTS } from './outlook.ts';
import { ONENOTE_SHORTCUTS } from './onenote.ts';
import { ACCESS_SHORTCUTS } from './access.ts';
import { M365_SHORTCUTS } from './m365.ts';
import { LIBRE_WRITER_SHORTCUTS } from './libreWriter.ts';
import { LIBRE_CALC_SHORTCUTS } from './libreCalc.ts';
import { LIBRE_BASE_SHORTCUTS } from './libreBase.ts';
import { LIBRE_IMPRESS_SHORTCUTS } from './libreImpress.ts';
import { ONLYOFFICE_SHORTCUTS } from './onlyoffice.ts';
import { GDOCS_SHORTCUTS } from './gdocs.ts';
import { GDRIVE_SHORTCUTS } from './gdrive.ts';

export const OFFICE_SHORTCUTS: Shortcut[] = [
  ...EXCEL_SHORTCUTS,
  ...WORD_SHORTCUTS,
  ...POWERPOINT_SHORTCUTS,
  ...OUTLOOK_SHORTCUTS,
  ...ONENOTE_SHORTCUTS,
  ...ACCESS_SHORTCUTS,
  ...M365_SHORTCUTS,
  ...LIBRE_WRITER_SHORTCUTS,
  ...LIBRE_CALC_SHORTCUTS,
  ...LIBRE_BASE_SHORTCUTS,
  ...LIBRE_IMPRESS_SHORTCUTS,
  ...ONLYOFFICE_SHORTCUTS,
  ...GDOCS_SHORTCUTS,
  ...GDRIVE_SHORTCUTS,
  {
  "id": "tm-mute",
  "appId": "teams",
  "title": "Включить / выключить микрофон во звонке",
  "description": "Быстро глушит или включает микрофон на онлайн-встрече",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "M"
    ],
    "macos": [
      "Cmd",
      "Shift",
      "M"
    ]
  },
  "category": "Звонки и встречи",
  "popularity": 99
},
  {
  "id": "tm-camera",
  "appId": "teams",
  "title": "Включить / выключить веб-камеру",
  "description": "Активирует или глушит передачу видео с веб-камеры",
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
  "category": "Звонки и встречи",
  "popularity": 95
},
  {
  "id": "tm-raise-hand",
  "appId": "teams",
  "title": "Поднять / опустить руку на встрече",
  "description": "Сигнализирует спикеру о желании задать вопрос",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "K"
    ],
    "macos": [
      "Cmd",
      "Shift",
      "K"
    ]
  },
  "category": "Звонки и встречи",
  "popularity": 92
},
  {
  "id": "tm-search-messages",
  "appId": "teams",
  "title": "Поиск по сообщениям и людям",
  "description": "Фокусируется в верхнюю строку глобального поиска Teams",
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
  "category": "Навигация и чат",
  "popularity": 94
},
  {
  "id": "tm-open-chat",
  "appId": "teams",
  "title": "Перейти в раздел «Чаты»",
  "description": "Мгновенный переход к списку личных и групповых переписок",
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
  "category": "Навигация и чат",
  "popularity": 90
},
  {
  "id": "gs-insert-link",
  "appId": "gsheets",
  "title": "Вставить гиперссылку в ячейку",
  "description": "Связывает ячейку с веб-сайтом, файлом Google Drive или другим листом таблицы",
  "keys": {
    "windows": [
      "Ctrl",
      "K"
    ],
    "macos": [
      "Cmd",
      "K"
    ]
  },
  "category": "Таблицы и данные",
  "popularity": 91
},
  {
  "id": "gs-newline-in-cell",
  "appId": "gsheets",
  "title": "Перенос строки внутри ячейки",
  "description": "Разрывает строку внутри ячейки без завершения ввода",
  "keys": {
    "windows": [
      "Ctrl",
      "Enter"
    ],
    "macos": [
      "Cmd",
      "Enter"
    ]
  },
  "category": "Форматирование",
  "popularity": 93
},
  {
  "id": "gs-filter-view",
  "appId": "gsheets",
  "title": "Включить / создать фильтр",
  "description": "Включает режим фильтрации диапазона данных для всех пользователей",
  "keys": {
    "windows": [
      "Ctrl",
      "Alt",
      "R"
    ],
    "macos": [
      "Cmd",
      "Option",
      "R"
    ]
  },
  "category": "Таблицы и данные",
  "popularity": 88
},
  {
  "id": "gs-format-currency",
  "appId": "gsheets",
  "title": "Денежный формат чисел",
  "description": "Применяет денежное отображение с двумя знаками после запятой",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "4"
    ],
    "macos": [
      "Cmd",
      "Shift",
      "4"
    ]
  },
  "category": "Форматирование",
  "popularity": 89
},
  {
  "id": "gsl-new-slide",
  "appId": "gslides",
  "title": "Создать новый слайд",
  "description": "Добавляет слайд в текущую презентацию",
  "keys": {
    "windows": [
      "Ctrl",
      "M"
    ],
    "macos": [
      "Cmd",
      "M"
    ]
  },
  "category": "Слайды",
  "popularity": 96
},
  {
  "id": "gsl-present",
  "appId": "gslides",
  "title": "Запустить демонстрацию презентации",
  "description": "Полноэкранный показ слайдов с текущего слайда",
  "keys": {
    "windows": [
      "Ctrl",
      "F5"
    ],
    "macos": [
      "Cmd",
      "Enter"
    ]
  },
  "category": "Показ слайдов",
  "popularity": 97
},
  {
  "id": "gsl-group",
  "appId": "gslides",
  "title": "Сгруппировать объекты на слайде",
  "description": "Объединяет выделенные картинки и текстовые блоки",
  "keys": {
    "windows": [
      "Ctrl",
      "Alt",
      "G"
    ],
    "macos": [
      "Cmd",
      "Option",
      "G"
    ]
  },
  "category": "Объекты",
  "popularity": 90
},
  {
  "id": "gs-today-date",
  "appId": "gsheets",
  "title": "Вставить сегодняшнюю дату",
  "description": "Фиксирует дату в ячейке без использования волатильной функции СЕГОДНЯ()",
  "keys": {
    "windows": [
      "Ctrl",
      ";"
    ],
    "macos": [
      "Cmd",
      ";"
    ]
  },
  "category": "Ввод данных",
  "popularity": 96
},
  {
  "id": "gs-today-time",
  "appId": "gsheets",
  "title": "Вставить текущее время",
  "description": "Фиксирует часы и минуты в ячейке",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      ";"
    ],
    "macos": [
      "Cmd",
      "Shift",
      ";"
    ]
  },
  "category": "Ввод данных",
  "popularity": 90
},
  {
  "id": "gs-hide-row",
  "appId": "gsheets",
  "title": "Скрыть текущую строку",
  "description": "Временно скрывает строку листа без удаления данных",
  "keys": {
    "windows": [
      "Ctrl",
      "Alt",
      "9"
    ],
    "macos": [
      "Cmd",
      "Opt",
      "9"
    ]
  },
  "category": "Строки и столбцы",
  "popularity": 89
},
  {
  "id": "gs-hide-col",
  "appId": "gsheets",
  "title": "Скрыть текущий столбец",
  "description": "Временно скрывает столбец листа",
  "keys": {
    "windows": [
      "Ctrl",
      "Alt",
      "0"
    ],
    "macos": [
      "Cmd",
      "Opt",
      "0"
    ]
  },
  "category": "Строки и столбцы",
  "popularity": 89
},
  {
  "id": "gs-array-formula",
  "appId": "gsheets",
  "title": "Обернуть в ARRAYFORMULA",
  "description": "Позволяет формуле автоматически распространяться на весь массив строк",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "Enter"
    ],
    "macos": [
      "Cmd",
      "Shift",
      "Enter"
    ]
  },
  "category": "Формулы и массивы",
  "popularity": 95
},
  {
  "id": "gsl-new",
  "appId": "gslides",
  "title": "Создать новый слайд",
  "description": "Добавляет следующий слайд в презентацию",
  "keys": {
    "windows": [
      "Ctrl",
      "M"
    ]
  },
  "category": "Слайды",
  "popularity": 98
},
  {
  "id": "gsl-duplicate",
  "appId": "gslides",
  "title": "Дублировать выбранный элемент или слайд",
  "description": "Быстрое клонирование слайда с сохранением верстки",
  "keys": {
    "windows": [
      "Ctrl",
      "D"
    ]
  },
  "category": "Слайды и объекты",
  "popularity": 95
},
  {
  "id": "gsl-bring-front",
  "appId": "gslides",
  "title": "Переместить слой на передний план",
  "description": "Поднимает выделенную фигуру над остальными слоями",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "Up"
    ]
  },
  "category": "Слои",
  "popularity": 92
},
  {
  "id": "teams-mute-toggle",
  "appId": "teams",
  "title": "Включить / выключить микрофон во звонке",
  "description": "Быстрое переключение звука во время конференции",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "M"
    ]
  },
  "category": "Звонки",
  "popularity": 99
},
  {
  "id": "teams-camera-toggle",
  "appId": "teams",
  "title": "Включить / выключить камеру",
  "description": "Управление передачей видео",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "O"
    ]
  },
  "category": "Звонки",
  "popularity": 97
},
  {
  "id": "teams-raise-hand",
  "appId": "teams",
  "title": "Поднять / опустить руку",
  "description": "Сигнал ведущему о желании задать вопрос",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "K"
    ]
  },
  "category": "Звонки",
  "popularity": 95
},
  {
  "id": "teams-share-screen",
  "appId": "teams",
  "title": "Открыть панель демонстрации экрана",
  "description": "Выбор окна программы или монитора для показа коллегам",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "E"
    ]
  },
  "category": "Звонки",
  "popularity": 98
},
  {
  "id": "teams-search-command",
  "appId": "teams",
  "title": "Строка быстрого поиска и команд",
  "description": "Фокус в строку поиска: ввод /dnd, /call, /files",
  "keys": {
    "windows": [
      "Ctrl",
      "E"
    ]
  },
  "category": "Навигация",
  "popularity": 96
},
  {
  "id": "teams-jump-chat",
  "appId": "teams",
  "title": "Перейти к чатам",
  "description": "Открывает список последних личных и групповых чатов",
  "keys": {
    "windows": [
      "Ctrl",
      "2"
    ]
  },
  "category": "Навигация",
  "popularity": 94
},
  {
  "id": "teams-jump-calendar",
  "appId": "teams",
  "title": "Перейти в календарь встреч",
  "description": "Открывает рабочий календарь собраний Teams",
  "keys": {
    "windows": [
      "Ctrl",
      "4"
    ]
  },
  "category": "Навигация",
  "popularity": 93
},
  {
  "id": "teams-filter-chats",
  "appId": "teams",
  "title": "Фильтр чатов по ключевым словам",
  "description": "Быстрый поиск среди бесед и контактов",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "F"
    ]
  },
  "category": "Поиск",
  "popularity": 91
},
  {
  "id": "gsl-duplicate-slide",
  "appId": "gslides",
  "title": "Дублировать выбранный слайд",
  "description": "Создает копию текущего слайда со всем контентом",
  "keys": {
    "windows": [
      "Ctrl",
      "D"
    ]
  },
  "category": "Слайды",
  "popularity": 98
},
  {
  "id": "gsl-ungroup",
  "appId": "gslides",
  "title": "Разгруппировать объекты",
  "description": "Разделяет сгруппированные элементы",
  "keys": {
    "windows": [
      "Ctrl",
      "Alt",
      "Shift",
      "G"
    ]
  },
  "category": "Объекты",
  "popularity": 92
},
  {
  "id": "gsl-bring-forward",
  "appId": "gslides",
  "title": "Переместить вперед по слоям",
  "description": "Поднимает выделенный элемент на один уровень выше",
  "keys": {
    "windows": [
      "Ctrl",
      "Up"
    ]
  },
  "category": "Слои",
  "popularity": 94
},
  {
  "id": "gsl-send-backward",
  "appId": "gslides",
  "title": "Переместить назад по слоям",
  "description": "Опускает элемент под другие объекты",
  "keys": {
    "windows": [
      "Ctrl",
      "Down"
    ]
  },
  "category": "Слои",
  "popularity": 94
},
  {
  "id": "gsl-speaker-notes",
  "appId": "gslides",
  "title": "Показать / скрыть заметки докладчика",
  "description": "Управление панелью комментариев к слайду",
  "keys": {
    "windows": [
      "Вид -> Показать заметки"
    ]
  },
  "category": "Вид",
  "popularity": 91
},
  {
  "id": "teams-toggle-mute",
  "appId": "teams",
  "title": "Включить/выключить микрофон во звонке",
  "description": "Быстрое глушение звука микрофона",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "M"
    ]
  },
  "category": "Звонки",
  "popularity": 99
},
  {
  "id": "teams-toggle-camera",
  "appId": "teams",
  "title": "Включить/выключить видеокамеру",
  "description": "Управление передачей видеоизображения",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "O"
    ]
  },
  "category": "Звонки",
  "popularity": 98
},
  {
  "id": "teams-share-screen",
  "appId": "teams",
  "title": "Демонстрация экрана",
  "description": "Открытие панели выбора окна или рабочего стола для трансляции",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "E"
    ]
  },
  "category": "Звонки",
  "popularity": 97
},
  {
  "id": "teams-raise-hand",
  "appId": "teams",
  "title": "Поднять или опустить руку",
  "description": "Сигнал ведущему собрания о желании взять слово",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "K"
    ]
  },
  "category": "Звонки",
  "popularity": 96
},
  {
  "id": "teams-search-bar",
  "appId": "teams",
  "title": "Фокус в строку поиска команд",
  "description": "Переход к верхнему универсальному поисковому полю",
  "keys": {
    "windows": [
      "Ctrl",
      "E"
    ]
  },
  "category": "Поиск",
  "popularity": 97
},
  {
  "id": "teams-quick-action",
  "appId": "teams",
  "title": "Список быстрых слэш-команд (/)",
  "description": "Вызов меню команд статуса, звонка и перехода",
  "keys": {
    "windows": [
      "/"
    ]
  },
  "category": "Команды",
  "popularity": 94
},
  {
  "id": "gs-insert-checkbox",
  "appId": "gsheets",
  "title": "Вставить интерактивный флажок (Checkbox)",
  "description": "Превращает выделенные ячейки в кликабельные чекбоксы TRUE/FALSE",
  "keys": {
    "windows": [
      "Вставка -> Флажок"
    ]
  },
  "category": "Вставка",
  "popularity": 98
},
  {
  "id": "gs-insert-comment",
  "appId": "gsheets",
  "title": "Добавить комментарий к ячейке",
  "description": "Вставка обсуждения для коллег",
  "keys": {
    "windows": [
      "Ctrl",
      "Alt",
      "M"
    ],
    "macos": [
      "Cmd",
      "Option",
      "M"
    ]
  },
  "category": "Комментарии",
  "popularity": 97
},
  {
  "id": "gs-format-currency",
  "appId": "gsheets",
  "title": "Денежный формат чисел",
  "description": "Применение формата рублей с разделителем тысяч",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "4"
    ],
    "macos": [
      "Cmd",
      "Shift",
      "4"
    ]
  },
  "category": "Форматирование",
  "popularity": 97
},
  {
  "id": "gs-format-percent",
  "appId": "gsheets",
  "title": "Процентный формат ячеек",
  "description": "Превращение десятичной дроби в проценты",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "5"
    ],
    "macos": [
      "Cmd",
      "Shift",
      "5"
    ]
  },
  "category": "Форматирование",
  "popularity": 96
},
  {
  "id": "gs-insert-current-date",
  "appId": "gsheets",
  "title": "Вставить текущую дату",
  "description": "Статическая подстановка даты",
  "keys": {
    "windows": [
      "Ctrl",
      ";"
    ],
    "macos": [
      "Cmd",
      ";"
    ]
  },
  "category": "Ввод данных",
  "popularity": 99
},
  {
  "id": "gs-insert-current-time",
  "appId": "gsheets",
  "title": "Вставить текущее время",
  "description": "Статическая подстановка времени",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      ";"
    ],
    "macos": [
      "Cmd",
      "Shift",
      ";"
    ]
  },
  "category": "Ввод данных",
  "popularity": 95
},
  {
  "id": "gs-hide-row",
  "appId": "gsheets",
  "title": "Скрыть выбранную строку",
  "description": "Быстрое сокрытие активной строки",
  "keys": {
    "windows": [
      "Ctrl",
      "Alt",
      "9"
    ],
    "macos": [
      "Cmd",
      "Option",
      "9"
    ]
  },
  "category": "Строки и столбцы",
  "popularity": 94
},
  {
  "id": "gs-hide-column",
  "appId": "gsheets",
  "title": "Скрыть выбранный столбец",
  "description": "Быстрое сокрытие активной колонки",
  "keys": {
    "windows": [
      "Ctrl",
      "Alt",
      "0"
    ],
    "macos": [
      "Cmd",
      "Option",
      "0"
    ]
  },
  "category": "Строки и столбцы",
  "popularity": 94
},
  {
  "id": "gs-show-formulas",
  "appId": "gsheets",
  "title": "Показать формулы вместо значений",
  "description": "Режим сквозной проверки формул во всех ячейках листа",
  "keys": {
    "windows": [
      "Ctrl",
      "`"
    ],
    "macos": [
      "Cmd",
      "`"
    ]
  },
  "category": "Аудит формул",
  "popularity": 93
},
  {
  "id": "gsl-duplicate-slide",
  "appId": "gslides",
  "title": "Дублировать слайд",
  "description": "Создание точной копии текущего слайда",
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
  "category": "Слайды",
  "popularity": 99
},
  {
  "id": "gsl-group",
  "appId": "gslides",
  "title": "Сгруппировать объекты",
  "description": "Объединение графики и текстов в группу",
  "keys": {
    "windows": [
      "Ctrl",
      "Alt",
      "G"
    ],
    "macos": [
      "Cmd",
      "Option",
      "G"
    ]
  },
  "category": "Группировка",
  "popularity": 97
},
  {
  "id": "gsl-ungroup",
  "appId": "gslides",
  "title": "Разгруппировать объекты",
  "description": "Разбиение группы на составные части",
  "keys": {
    "windows": [
      "Ctrl",
      "Alt",
      "Shift",
      "G"
    ],
    "macos": [
      "Cmd",
      "Option",
      "Shift",
      "G"
    ]
  },
  "category": "Группировка",
  "popularity": 95
},
  {
  "id": "gsl-present-from-beginning",
  "appId": "gslides",
  "title": "Показ с первого слайда",
  "description": "Запуск презентации с титульного листа",
  "keys": {
    "windows": [
      "Ctrl",
      "F5"
    ],
    "macos": [
      "Cmd",
      "Enter"
    ]
  },
  "category": "Показ",
  "popularity": 98
},
  {
  "id": "gsl-present-from-current",
  "appId": "gslides",
  "title": "Показ с текущего слайда",
  "description": "Демонстрация с выбранного слайда",
  "keys": {
    "windows": [
      "Ctrl",
      "Shift",
      "F5"
    ],
    "macos": [
      "Cmd",
      "Shift",
      "Enter"
    ]
  },
  "category": "Показ",
  "popularity": 97
},
  {
  "id": "gsl-qa-session",
  "appId": "gslides",
  "title": "Инструменты докладчика и сессия Q&A",
  "description": "Запуск экрана заметок спикера и приема вопросов зрителей",
  "keys": {
    "windows": [
      "S"
    ]
  },
  "category": "Показ",
  "popularity": 93
},
];

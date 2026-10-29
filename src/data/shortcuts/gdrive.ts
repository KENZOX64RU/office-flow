import type { Shortcut } from '../../types/index.ts';

export const GDRIVE_SHORTCUTS: Shortcut[] = [
  // --- Создание и загрузка ---
  {
    id: 'gdr-create-folder',
    appId: 'gdrive',
    title: 'Создать новую папку',
    description: 'Открывает модальное окно для ввода названия и создания новой папки в текущей директории Google Диска',
    keys: {
      windows: ['Shift', 'F'],
      macos: ['Shift', 'F'],
      linux: ['Shift', 'F'],
      web: ['Shift', 'F']
    },
    category: 'Создание и загрузка',
    context: 'В веб-интерфейсе Google Диска вне текстовых полей ввода',
    popularity: 98
  },
  {
    id: 'gdr-upload-file',
    appId: 'gdrive',
    title: 'Загрузить файл с компьютера',
    description: 'Открывает системный проводник или Finder для выбора и пакетной загрузки файлов в текущую папку',
    keys: {
      windows: ['Shift', 'U'],
      macos: ['Shift', 'U'],
      linux: ['Shift', 'U'],
      web: ['Shift', 'U']
    },
    category: 'Создание и загрузка',
    context: 'В веб-интерфейсе Google Диска',
    popularity: 95
  },
  {
    id: 'gdr-upload-folder',
    appId: 'gdrive',
    title: 'Загрузить папку целиком',
    description: 'Открывает диалог загрузки всей локальной папки со всеми вложенными подпапками и файлами',
    keys: {
      windows: ['Shift', 'I'],
      macos: ['Shift', 'I'],
      linux: ['Shift', 'I'],
      web: ['Shift', 'I']
    },
    category: 'Создание и загрузка',
    context: 'В веб-интерфейсе Google Диска (поддерживается в Chromium-браузерах)',
    popularity: 88
  },
  {
    id: 'gdr-new-doc',
    appId: 'gdrive',
    title: 'Создать новый Google Документ',
    description: 'Создает новый текстовый документ Google Документы и открывает его в новой вкладке браузера',
    keys: {
      windows: ['Shift', 'T'],
      macos: ['Shift', 'T'],
      linux: ['Shift', 'T'],
      web: ['Shift', 'T']
    },
    category: 'Создание и загрузка',
    context: 'В веб-интерфейсе Google Диска',
    popularity: 94
  },
  {
    id: 'gdr-new-sheet',
    appId: 'gdrive',
    title: 'Создать новую Google Таблицу',
    description: 'Создает новую электронную таблицу Google Sheets в текущей папке и открывает её в новой вкладке',
    keys: {
      windows: ['Shift', 'S'],
      macos: ['Shift', 'S'],
      linux: ['Shift', 'S'],
      web: ['Shift', 'S']
    },
    category: 'Создание и загрузка',
    context: 'В веб-интерфейсе Google Диска',
    popularity: 93
  },
  {
    id: 'gdr-new-slide',
    appId: 'gdrive',
    title: 'Создать новую Google Презентацию',
    description: 'Создает презентацию Google Slides в текущей папке и запускает слайд-редактор в новой вкладке',
    keys: {
      windows: ['Shift', 'P'],
      macos: ['Shift', 'P'],
      linux: ['Shift', 'P'],
      web: ['Shift', 'P']
    },
    category: 'Создание и загрузка',
    context: 'В веб-интерфейсе Google Диска',
    popularity: 87
  },
  {
    id: 'gdr-new-form',
    appId: 'gdrive',
    title: 'Создать новую Google Форму',
    description: 'Создает опрос или форму анкетирования Google Forms в текущей папке Диска',
    keys: {
      windows: ['Shift', 'O'],
      macos: ['Shift', 'O'],
      linux: ['Shift', 'O'],
      web: ['Shift', 'O']
    },
    category: 'Создание и загрузка',
    context: 'В веб-интерфейсе Google Диска',
    popularity: 82
  },
  {
    id: 'gdr-new-drawing',
    appId: 'gdrive',
    title: 'Создать новый Google Рисунок',
    description: 'Создает векторную схему Google Drawings в новой вкладке',
    keys: {
      windows: ['Shift', 'D'],
      macos: ['Shift', 'D'],
      linux: ['Shift', 'D'],
      web: ['Shift', 'D']
    },
    category: 'Создание и загрузка',
    context: 'В веб-интерфейсе Google Диска',
    popularity: 76
  },

  // --- Действия с объектами ---
  {
    id: 'gdr-share',
    appId: 'gdrive',
    title: 'Открыть окно общего доступа (Поделиться)',
    description: 'Вызывает диалоговое окно «Поделиться» для выбранного файла или папки с настройкой ролей и ссылок',
    keys: {
      windows: ['.'],
      macos: ['.'],
      linux: ['.'],
      web: ['.']
    },
    category: 'Действия с объектами',
    context: 'При выделении одного или нескольких файлов/папок',
    popularity: 99
  },
  {
    id: 'gdr-rename',
    appId: 'gdrive',
    title: 'Переименовать выбранный объект',
    description: 'Открывает окно быстрого переименования файла или папки без открытия контекстного меню',
    keys: {
      windows: ['N'],
      macos: ['N'],
      linux: ['N'],
      web: ['N']
    },
    category: 'Действия с объектами',
    context: 'При выделенном файле или папке',
    popularity: 96
  },
  {
    id: 'gdr-star-toggle',
    appId: 'gdrive',
    title: 'Добавить в «Помеченные» / Снять пометку',
    description: 'Устанавливает или снимает звёздочку с выбранного файла/папки для быстрого доступа в разделе «Помеченные»',
    keys: {
      windows: ['S'],
      macos: ['S'],
      linux: ['S'],
      web: ['S']
    },
    category: 'Действия с объектами',
    context: 'При выделенном объекте',
    popularity: 91
  },
  {
    id: 'gdr-move',
    appId: 'gdrive',
    title: 'Переместить объект в другую папку',
    description: 'Открывает диалоговое окно навигатора папок Диска для быстрого переноса выбранных файлов',
    keys: {
      windows: ['Z'],
      macos: ['Z'],
      linux: ['Z'],
      web: ['Z']
    },
    category: 'Действия с объектами',
    context: 'При выделенном объекте',
    popularity: 92
  },
  {
    id: 'gdr-add-shortcut',
    appId: 'gdrive',
    title: 'Создать ярлык на Диске (Add Shortcut)',
    description: 'Создает ссылку-ярлык на выбранный файл или папку в любом другом каталоге без дублирования места',
    keys: {
      windows: ['Shift', 'Z'],
      macos: ['Shift', 'Z'],
      linux: ['Shift', 'Z'],
      web: ['Shift', 'Z']
    },
    category: 'Действия с объектами',
    context: 'При выделенном объекте',
    popularity: 89
  },
  {
    id: 'gdr-delete',
    appId: 'gdrive',
    title: 'Переместить в корзину',
    description: 'Отправляет выбранные файлы или папки в Корзину Google Диска (хранятся 30 дней перед автоудалением)',
    keys: {
      windows: ['Delete'],
      macos: ['Delete'],
      linux: ['Delete'],
      web: ['Delete']
    },
    category: 'Действия с объектами',
    context: 'При выделенных объектах (также поддерживается клавиша #)',
    popularity: 97
  },
  {
    id: 'gdr-copy',
    appId: 'gdrive',
    title: 'Копировать файл в буфер обмена',
    description: 'Копирует выбранный файл в буфер Google Диска для последующей вставки дубликата',
    keys: {
      windows: ['Ctrl', 'C'],
      macos: ['Cmd', 'C'],
      linux: ['Ctrl', 'C'],
      web: ['Ctrl', 'C']
    },
    category: 'Действия с объектами',
    context: 'В списке файлов Google Диска',
    popularity: 90
  },
  {
    id: 'gdr-cut',
    appId: 'gdrive',
    title: 'Вырезать файл для перемещения',
    description: 'Помещает файл в буфер перемещения, чтобы вставить его в целевую папку сочетанием вставки',
    keys: {
      windows: ['Ctrl', 'X'],
      macos: ['Cmd', 'X'],
      linux: ['Ctrl', 'X'],
      web: ['Ctrl', 'X']
    },
    category: 'Действия с объектами',
    context: 'В списке файлов Google Диска',
    popularity: 88
  },
  {
    id: 'gdr-paste',
    appId: 'gdrive',
    title: 'Вставить файл из буфера обмена',
    description: 'Вставляет скопированный или вырезанный файл в открытую директорию',
    keys: {
      windows: ['Ctrl', 'V'],
      macos: ['Cmd', 'V'],
      linux: ['Ctrl', 'V'],
      web: ['Ctrl', 'V']
    },
    category: 'Действия с объектами',
    context: 'В целевой папке Google Диска',
    popularity: 90
  },
  {
    id: 'gdr-undo',
    appId: 'gdrive',
    title: 'Отменить последнее действие',
    description: 'Отменяет последнюю операцию перемещения, переименования или удаления файла на Диске',
    keys: {
      windows: ['Ctrl', 'Z'],
      macos: ['Cmd', 'Z'],
      linux: ['Ctrl', 'Z'],
      web: ['Ctrl', 'Z']
    },
    category: 'Действия с объектами',
    context: 'Сразу после выполнения действия на Диске',
    popularity: 94
  },
  {
    id: 'gdr-redo',
    appId: 'gdrive',
    title: 'Повторить отменённое действие',
    description: 'Повторно выполняет ранее отмененную операцию',
    keys: {
      windows: ['Ctrl', 'Shift', 'Z'],
      macos: ['Cmd', 'Shift', 'Z'],
      linux: ['Ctrl', 'Shift', 'Z'],
      web: ['Ctrl', 'Shift', 'Z']
    },
    category: 'Действия с объектами',
    context: 'После нажатия Undo',
    popularity: 79
  },
  {
    id: 'gdr-comment',
    appId: 'gdrive',
    title: 'Добавить комментарий к файлу',
    description: 'Открывает интерфейс добавления комментария к выбранному объекту в режиме предпросмотра',
    keys: {
      windows: ['C'],
      macos: ['C'],
      linux: ['C'],
      web: ['C']
    },
    category: 'Действия с объектами',
    context: 'При выделенном файле в списке или в окне предпросмотра',
    popularity: 84
  },

  // --- Просмотр и навигация ---
  {
    id: 'gdr-preview',
    appId: 'gdrive',
    title: 'Быстрый предпросмотр файла (Quick Look)',
    description: 'Мгновенно открывает модальное окно полноэкранного предпросмотра файла без запуска полного приложения',
    keys: {
      windows: ['Space'],
      macos: ['Space'],
      linux: ['Space'],
      web: ['Space']
    },
    category: 'Просмотр и навигация',
    context: 'При выделенном файле (также работает клавиша P)',
    popularity: 98
  },
  {
    id: 'gdr-open',
    appId: 'gdrive',
    title: 'Открыть выбранный объект',
    description: 'Открывает выбранный файл в соответствующем редакторе или переходит внутрь выбранной папки',
    keys: {
      windows: ['Enter'],
      macos: ['Enter'],
      linux: ['Enter'],
      web: ['Enter']
    },
    category: 'Просмотр и навигация',
    context: 'При выделенном файле или папке',
    popularity: 99
  },
  {
    id: 'gdr-open-new-window',
    appId: 'gdrive',
    title: 'Открыть файл в новой вкладке',
    description: 'Запускает документ или просмотр папки в новой независимой вкладке браузера',
    keys: {
      windows: ['Ctrl', 'Enter'],
      macos: ['Cmd', 'Enter'],
      linux: ['Ctrl', 'Enter'],
      web: ['Ctrl', 'Enter']
    },
    category: 'Просмотр и навигация',
    context: 'При выделенном объекте',
    popularity: 91
  },
  {
    id: 'gdr-toggle-view',
    appId: 'gdrive',
    title: 'Переключить вид: Сетка / Список',
    description: 'Переключает режим отображения файлов между компактной таблицей с метаданными и сеткой крупных карточек-плиток',
    keys: {
      windows: ['V'],
      macos: ['V'],
      linux: ['V'],
      web: ['V']
    },
    category: 'Просмотр и навигация',
    context: 'В веб-интерфейсе Google Диска',
    popularity: 93
  },
  {
    id: 'gdr-toggle-details',
    appId: 'gdrive',
    title: 'Показать / скрыть панель свойств файла',
    description: 'Отображает правую боковую панель с детальными метаданными: размер, тип, владелец, дата изменения и права доступа',
    keys: {
      windows: ['D'],
      macos: ['D'],
      linux: ['D'],
      web: ['D']
    },
    category: 'Просмотр и навигация',
    context: 'При выделенном объекте на Диске',
    popularity: 88
  },
  {
    id: 'gdr-toggle-activity',
    appId: 'gdrive',
    title: 'Показать / скрыть журнал активности',
    description: 'Открывает правую панель на вкладке истории событий: кто редактировал, перемещал или комментировал файл',
    keys: {
      windows: ['I'],
      macos: ['I'],
      linux: ['I'],
      web: ['I']
    },
    category: 'Просмотр и навигация',
    context: 'При выделенном объекте на Диске',
    popularity: 86
  },
  {
    id: 'gdr-nav-down',
    appId: 'gdrive',
    title: 'Перейти к следующему объекту в списке',
    description: 'Перемещает фокус выделения на один элемент вниз по списку файлов',
    keys: {
      windows: ['J'],
      macos: ['J'],
      linux: ['J'],
      web: ['J']
    },
    category: 'Просмотр и навигация',
    context: 'В списке файлов (работает по аналогии с Vi/Vim и клавишей ↓)',
    popularity: 83
  },
  {
    id: 'gdr-nav-up',
    appId: 'gdrive',
    title: 'Перейти к предыдущему объекту в списке',
    description: 'Перемещает фокус выделения на один элемент вверх по списку файлов',
    keys: {
      windows: ['K'],
      macos: ['K'],
      linux: ['K'],
      web: ['K']
    },
    category: 'Просмотр и навигация',
    context: 'В списке файлов (работает по аналогии с Vi/Vim и клавишей ↑)',
    popularity: 83
  },
  {
    id: 'gdr-nav-left',
    appId: 'gdrive',
    title: 'Перейти влево в режиме сетки',
    description: 'Перемещает фокус на соседнюю карточку файла слева при плиточном отображении',
    keys: {
      windows: ['H'],
      macos: ['H'],
      linux: ['H'],
      web: ['H']
    },
    category: 'Просмотр и навигация',
    context: 'В режиме сетки файлов (Grid view) и стрелка ←',
    popularity: 81
  },
  {
    id: 'gdr-nav-right',
    appId: 'gdrive',
    title: 'Перейти вправо в режиме сетки',
    description: 'Перемещает фокус на соседнюю карточку файла справа при плиточном отображении',
    keys: {
      windows: ['L'],
      macos: ['L'],
      linux: ['L'],
      web: ['L']
    },
    category: 'Просмотр и навигация',
    context: 'В режиме сетки файлов (Grid view) и стрелка →',
    popularity: 81
  },
  {
    id: 'gdr-switch-section',
    appId: 'gdrive',
    title: 'Переключить фокус на боковую панель навигации',
    description: 'Циклически переключает фокус клавиатуры между левым меню навигации («Мой диск», «Общие диски», «Корзина») и рабочей областью файлов',
    keys: {
      windows: ['M'],
      macos: ['M'],
      linux: ['M'],
      web: ['M']
    },
    category: 'Просмотр и навигация',
    context: 'В веб-интерфейсе Google Диска',
    popularity: 78
  },

  // --- Выделение и поиск ---
  {
    id: 'gdr-select-item',
    appId: 'gdrive',
    title: 'Выделить / Снять выделение с текущего элемента',
    description: 'Позволяет точечно помечать файлы пробелом или клавишей X для групповых операций без использования мыши',
    keys: {
      windows: ['X'],
      macos: ['X'],
      linux: ['X'],
      web: ['X']
    },
    category: 'Выделение и поиск',
    context: 'В списке файлов Google Диска',
    popularity: 87
  },
  {
    id: 'gdr-select-all',
    appId: 'gdrive',
    title: 'Выделить все файлы в текущей папке',
    description: 'Выделяет абсолютно все файлы и подпапки в текущем каталоге для группового скачивания, переноса или удаления',
    keys: {
      windows: ['Shift', 'A'],
      macos: ['Shift', 'A'],
      linux: ['Shift', 'A'],
      web: ['Shift', 'A']
    },
    category: 'Выделение и поиск',
    context: 'В списке файлов Google Диска (также Ctrl + A в зависимости от фокуса)',
    popularity: 92
  },
  {
    id: 'gdr-deselect-all',
    appId: 'gdrive',
    title: 'Снять выделение со всех файлов',
    description: 'Сбрасывает выделение со всех выбранных элементов',
    keys: {
      windows: ['Shift', 'N'],
      macos: ['Shift', 'N'],
      linux: ['Shift', 'N'],
      web: ['Shift', 'N']
    },
    category: 'Выделение и поиск',
    context: 'Когда выделен один или несколько файлов',
    popularity: 82
  },
  {
    id: 'gdr-search-focus',
    appId: 'gdrive',
    title: 'Фокус в строку поиска по Диску',
    description: 'Мгновенно переводит курсор в поисковую строку Google Диска для ввода запроса, фильтрации по типу или операторам',
    keys: {
      windows: ['/'],
      macos: ['/'],
      linux: ['/'],
      web: ['/']
    },
    category: 'Выделение и поиск',
    context: 'В любом месте веб-интерфейса Google Диска вне текстовых полей',
    popularity: 99
  },
  {
    id: 'gdr-shortcuts-help',
    appId: 'gdrive',
    title: 'Открыть справку по всем горячим клавишам',
    description: 'Вызывает модальное окно с полным интерактивным справочником быстрых клавиш Google Диска',
    keys: {
      windows: ['?'],
      macos: ['?'],
      linux: ['?'],
      web: ['?']
    },
    category: 'Выделение и поиск',
    context: 'В веб-интерфейсе Google Диска (также сочетание Ctrl + / или Cmd + /)',
    popularity: 94
  }
];

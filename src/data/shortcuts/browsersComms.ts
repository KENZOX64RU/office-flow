import type { Shortcut } from '../../types/index.ts';

export const BROWSERS_COMMS_SHORTCUTS: Shortcut[] = [
  {
    "id": "br-reopen-tab",
    "appId": "chrome",
    "title": "Восстановить закрытую вкладку",
    "description": "Открывает последнюю закрытую вкладку с сохранением позиции",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "T"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "T"
      ]
    },
    "category": "Окна и вкладки",
    "popularity": 100
  },
  {
    "id": "br-focus-url",
    "appId": "chrome",
    "title": "Фокус в адресную строку (Omnibox)",
    "description": "Мгновенно выделяет URL для ввода нового поискового запроса",
    "keys": {
      "windows": [
        "Ctrl",
        "L"
      ],
      "macos": [
        "Cmd",
        "L"
      ]
    },
    "category": "Навигация",
    "popularity": 97
  },
  {
    "id": "br-incognito",
    "appId": "chrome",
    "title": "Новое окно в режиме Инкогнито",
    "description": "Открывает приватное окно без сохранения истории и куки",
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
    "category": "Окна и вкладки",
    "popularity": 95
  },
  {
    "id": "br-hard-reload",
    "appId": "chrome",
    "title": "Принудительная перезагрузка без кэша",
    "description": "Игнорирует кэш страницы и скачивает свежие файлы стилей и скриптов",
    "keys": {
      "windows": [
        "Ctrl",
        "F5"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "R"
      ]
    },
    "category": "Основные операции",
    "popularity": 94
  },
  {
    "id": "br-switch-tabs",
    "appId": "chrome",
    "title": "Переключение на следующую вкладку",
    "description": "Переходит на вкладку справа",
    "keys": {
      "windows": [
        "Ctrl",
        "Tab"
      ],
      "macos": [
        "Ctrl",
        "Tab"
      ]
    },
    "category": "Окна и вкладки",
    "popularity": 92
  },
  {
    "id": "br-bookmarks-bar",
    "appId": "chrome",
    "title": "Показать / скрыть панель закладок",
    "description": "Отображает горизонтальную строку избранных сайтов под адресной строкой",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "B"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "B"
      ]
    },
    "category": "Закладки",
    "popularity": 91
  },
  {
    "id": "edge-vertical-tabs",
    "appId": "edge",
    "title": "Включить / скрыть вертикальные вкладки",
    "description": "Размещает список открытых сайтов в виде удобной вертикальной боковой панели",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        ","
      ],
      "macos": [
        "Cmd",
        "Shift",
        ","
      ]
    },
    "category": "Вкладки Edge",
    "popularity": 96
  },
  {
    "id": "edge-collections",
    "appId": "edge",
    "title": "Открыть панель коллекций Edge",
    "description": "Сохраняет группы веб-страниц, статей и заметок по проектам",
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
    "category": "Коллекции",
    "popularity": 92
  },
  {
    "id": "edge-read-aloud",
    "appId": "edge",
    "title": "Чтение веб-страницы вслух",
    "description": "Запускает естественный речевой синтез содержимого статьи",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "U"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "U"
      ]
    },
    "category": "Специальные возможности",
    "popularity": 88
  },
  {
    "id": "ff-downloads",
    "appId": "firefox",
    "title": "Открыть панель загрузок",
    "description": "Показывает список скачанных файлов и прогресс загрузки",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "Y"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "J"
      ],
      "linux": [
        "Ctrl",
        "Shift",
        "Y"
      ]
    },
    "category": "Загрузки",
    "popularity": 92
  },
  {
    "id": "ff-sidebar-bookmarks",
    "appId": "firefox",
    "title": "Открыть боковую панель закладок",
    "description": "Отображает дерево закладок в левой панели браузера",
    "keys": {
      "windows": [
        "Ctrl",
        "B"
      ],
      "macos": [
        "Cmd",
        "B"
      ],
      "linux": [
        "Ctrl",
        "B"
      ]
    },
    "category": "Закладки",
    "popularity": 90
  },
  {
    "id": "yb-sidebar",
    "appId": "yandex-browser",
    "title": "Показать / скрыть умную боковую панель",
    "description": "Переключает боковую полосу с Алисой, переводчиком, мессенджерами и заметками",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "E"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "E"
      ]
    },
    "category": "Боковая панель",
    "popularity": 94
  },
  {
    "id": "yb-pip-video",
    "appId": "yandex-browser",
    "title": "Вынести видео в отдельное окно (Картинка в картинке)",
    "description": "Открепляет плеер видео поверх всех других окон рабочего стола",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "V"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "V"
      ]
    },
    "category": "Медиа",
    "popularity": 91
  },
  {
    "id": "op-workspaces",
    "appId": "opera",
    "title": "Переключение рабочих пространств (Workspaces)",
    "description": "Быстро переключает рабочее окружение с личного на рабочее",
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
    "category": "Вкладки и пространства",
    "popularity": 90
  },
  {
    "id": "op-snapshot",
    "appId": "opera",
    "title": "Инструмент скриншота страницы в Opera",
    "description": "Встроенный инструмент захвата всей страницы или выделенной области",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "2"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "2"
      ]
    },
    "category": "Инструменты",
    "popularity": 88
  },
  {
    "id": "tg-bold-text",
    "appId": "telegram",
    "title": "Сделать текст жирным",
    "description": "Форматирует выделенный фрагмент сообщения полужирным начертанием",
    "keys": {
      "windows": [
        "Ctrl",
        "B"
      ],
      "macos": [
        "Cmd",
        "B"
      ]
    },
    "category": "Форматирование",
    "popularity": 97
  },
  {
    "id": "tg-italic-text",
    "appId": "telegram",
    "title": "Сделать текст курсивом",
    "description": "Форматирует выделенный фрагмент курсивом",
    "keys": {
      "windows": [
        "Ctrl",
        "I"
      ],
      "macos": [
        "Cmd",
        "I"
      ]
    },
    "category": "Форматирование",
    "popularity": 94
  },
  {
    "id": "tg-insert-link",
    "appId": "telegram",
    "title": "Вставить гиперссылку в текст сообщения",
    "description": "Превращает выделенное слово в аккуратную кликабельную ссылку",
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
    "category": "Форматирование",
    "popularity": 95
  },
  {
    "id": "tg-monospace-text",
    "appId": "telegram",
    "title": "Моноширинный шрифт (код)",
    "description": "Форматирует фрагмент шрифтом кода для номеров счетов или команд",
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
    "category": "Форматирование",
    "popularity": 90
  },
  {
    "id": "tg-search-chat",
    "appId": "telegram",
    "title": "Поиск по сообщениям текущего чата",
    "description": "Открывает строку поиска внутри открытой переписки",
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
    "category": "Поиск",
    "popularity": 96
  },
  {
    "id": "tg-switch-chat-up",
    "appId": "telegram",
    "title": "Перейти к чату выше в списке",
    "description": "Быстрое переключение по списку чатов без мыши",
    "keys": {
      "windows": [
        "Alt",
        "Up"
      ],
      "macos": [
        "Option",
        "Up"
      ]
    },
    "category": "Навигация",
    "popularity": 88
  },
  {
    "id": "tb-write",
    "appId": "thunderbird",
    "title": "Создать новое письмо",
    "description": "Открывает окно составления почтового сообщения",
    "keys": {
      "windows": [
        "Ctrl",
        "N"
      ],
      "macos": [
        "Cmd",
        "N"
      ],
      "linux": [
        "Ctrl",
        "N"
      ]
    },
    "category": "Почта",
    "popularity": 96
  },
  {
    "id": "tb-reply",
    "appId": "thunderbird",
    "title": "Ответить автору письма",
    "description": "Создает ответ отправителю входящего сообщения",
    "keys": {
      "windows": [
        "Ctrl",
        "R"
      ],
      "macos": [
        "Cmd",
        "R"
      ],
      "linux": [
        "Ctrl",
        "R"
      ]
    },
    "category": "Почта",
    "popularity": 94
  },
  {
    "id": "tb-archive",
    "appId": "thunderbird",
    "title": "Отправить письмо в архив",
    "description": "Быстро убирает прочитанное письмо из входящих в папку Архива",
    "keys": {
      "windows": [
        "A"
      ],
      "macos": [
        "A"
      ],
      "linux": [
        "A"
      ]
    },
    "category": "Управление письмами",
    "popularity": 92
  },
  {
    "id": "zm-mute",
    "appId": "zoom",
    "title": "Включить / отключить микрофон (Mute)",
    "description": "Мгновенное переключение звука микрофона во время видеоконференции",
    "keys": {
      "windows": [
        "Alt",
        "A"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "A"
      ]
    },
    "category": "Звонки и встречи",
    "popularity": 99
  },
  {
    "id": "zm-video",
    "appId": "zoom",
    "title": "Включить / остановить камеру",
    "description": "Активирует или глушит передачу видеопотока с веб-камеры",
    "keys": {
      "windows": [
        "Alt",
        "V"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "V"
      ]
    },
    "category": "Звонки и встречи",
    "popularity": 96
  },
  {
    "id": "zm-screen-share",
    "appId": "zoom",
    "title": "Начать / остановить демонстрацию экрана",
    "description": "Открывает окно выбора рабочего стола или приложения для показа участникам",
    "keys": {
      "windows": [
        "Alt",
        "S"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "S"
      ]
    },
    "category": "Звонки и встречи",
    "popularity": 97
  },
  {
    "id": "dc-mute-mic",
    "appId": "discord",
    "title": "Заглушить / включить микрофон (Mute)",
    "description": "Быстрое глушение микрофона на голосовом сервере",
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
    "category": "Голосовая связь",
    "popularity": 98
  },
  {
    "id": "dc-deafen",
    "appId": "discord",
    "title": "Заглушить звук сервера (Deafen)",
    "description": "Отключает и микрофон, и звук динамиков на время важного разговора в комнате",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "D"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "D"
      ]
    },
    "category": "Голосовая связь",
    "popularity": 95
  },
  {
    "id": "dc-quick-switcher",
    "appId": "discord",
    "title": "Быстрый переход по каналам и серверам",
    "description": "Открывает поиск для мгновенного перехода к любому каналу или другу",
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
    "category": "Навигация",
    "popularity": 99
  },
  {
    "id": "sl-quick-switcher",
    "appId": "slack",
    "title": "Быстрый переключатель каналов (Quick Switcher)",
    "description": "Поиск по каналам, коллегам и сообщениям в Slack",
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
    "category": "Навигация",
    "popularity": 99
  },
  {
    "id": "sl-all-unread",
    "appId": "slack",
    "title": "Перейти ко всем непрочитанным сообщениям",
    "description": "Открывает сводную ленту всех новых упоминаний и сообщений",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "A"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "A"
      ]
    },
    "category": "Сообщения",
    "popularity": 94
  },
  {
    "id": "sl-mark-read",
    "appId": "slack",
    "title": "Пометить все сообщения канала прочитанными",
    "description": "Сбрасывает бейдж непрочитанных сообщений в текущем канале",
    "keys": {
      "windows": [
        "Esc"
      ],
      "macos": [
        "Esc"
      ]
    },
    "category": "Сообщения",
    "popularity": 96
  },
  {
    "id": "br-devtools",
    "appId": "chrome",
    "title": "Открыть инструменты разработчика (DevTools)",
    "description": "Вызов консоли браузера, инспектора элементов и вкладки Network",
    "keys": {
      "windows": [
        "F12"
      ],
      "macos": [
        "Cmd",
        "Option",
        "I"
      ]
    },
    "category": "Специализированные",
    "popularity": 88
  },
  {
    "id": "chr-hard-reload",
    "appId": "chrome",
    "title": "Жесткая перезагрузка страницы с очисткой кэша",
    "description": "Принудительно загружает свежие стили и скрипты сайта минуя локальный кэш браузера",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "R"
      ]
    },
    "category": "Инструменты веб-мастера",
    "popularity": 97
  },
  {
    "id": "chr-device-toolbar",
    "appId": "chrome",
    "title": "Режим эмуляции мобильных устройств в DevTools",
    "description": "Позволяет проверить верстку и адаптивность сайта под iPhone, iPad и Android",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "M"
      ]
    },
    "category": "Инструменты веб-мастера",
    "popularity": 96
  },
  {
    "id": "chr-inspect-element",
    "appId": "chrome",
    "title": "Инспектор элементов под курсором",
    "description": "Мгновенно открывает дерево DOM и стили для выбранного на странице блока",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "C"
      ]
    },
    "category": "Инструменты веб-мастера",
    "popularity": 98
  },
  {
    "id": "chr-clear-browsing-data",
    "appId": "chrome",
    "title": "Открыть меню очистки истории, куки и кэша",
    "description": "Быстрый переход к безопасному удалению временных файлов браузера",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "Delete"
      ]
    },
    "category": "Безопасность и приватность",
    "popularity": 95
  },
  {
    "id": "chr-toggle-bookmarks",
    "appId": "chrome",
    "title": "Показать / скрыть панель закладок",
    "description": "Освобождает вертикальное пространство экрана при чтении сайтов",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "B"
      ]
    },
    "category": "Закладки и интерфейс",
    "popularity": 94
  },
  {
    "id": "edge-web-capture",
    "appId": "edge",
    "title": "Снимок всей веб-страницы с автопрокруткой",
    "description": "Делает скриншот длинных страниц и дашбордов целиком с возможностью рисования заметок",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "S"
      ]
    },
    "category": "Инструменты работы с контентом",
    "popularity": 97
  },
  {
    "id": "edge-favorites-hub",
    "appId": "edge",
    "title": "Открыть всплывающее меню Избранного",
    "description": "Быстрый доступ к сохраненным ссылкам без отображения постоянной полосы",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "O"
      ]
    },
    "category": "Закладки",
    "popularity": 91
  },
  {
    "id": "edge-inprivate",
    "appId": "edge",
    "title": "Новое окно в режиме InPrivate",
    "description": "Сессия без сохранения истории просмотров, cookies и данных автозаполнения",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "N"
      ]
    },
    "category": "Приватность",
    "popularity": 94
  },
  {
    "id": "ff-private-window",
    "appId": "firefox",
    "title": "Новое приватное окно со строгой защитой от трекеров",
    "description": "Блокирует трекеры социальных сетей, аналитику и не сохраняет историю",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "P"
      ]
    },
    "category": "Приватность и безопасность",
    "popularity": 97
  },
  {
    "id": "ff-library-bookmarks",
    "appId": "firefox",
    "title": "Библиотека управления закладками",
    "description": "Полноценный диспетчер с тегами, папками и экспортом в HTML",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "O"
      ]
    },
    "category": "Закладки",
    "popularity": 93
  },
  {
    "id": "ff-reopen-tab",
    "appId": "firefox",
    "title": "Восстановить случайно закрытую вкладку",
    "description": "Открывает последнюю закрытую вкладку с сохранением всей истории переходов",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "T"
      ]
    },
    "category": "Вкладки",
    "popularity": 99
  },
  {
    "id": "ff-developer-tools",
    "appId": "firefox",
    "title": "Инструменты веб-разработчика Firefox",
    "description": "Открывает отладчик CSS Grid, Flexbox и консоль сетевых запросов",
    "keys": {
      "windows": [
        "F12"
      ]
    },
    "category": "Разработка",
    "popularity": 92
  },
  {
    "id": "ya-sidebar",
    "appId": "yandex-browser",
    "title": "Открыть боковую панель инструментов и сервисов",
    "description": "Быстрый доступ к голосовому помощнику Алиса, закладкам и истории",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "E"
      ]
    },
    "category": "Интерфейс и сервисы",
    "popularity": 94
  },
  {
    "id": "ya-incognito",
    "appId": "yandex-browser",
    "title": "Открыть окно в режиме инкогнито",
    "description": "Запуск приватного сеанса без сохранения поисковых запросов и истории",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "N"
      ]
    },
    "category": "Приватность",
    "popularity": 95
  },
  {
    "id": "ya-reopen-tab",
    "appId": "yandex-browser",
    "title": "Восстановление последней закрытой вкладки",
    "description": "Мгновенно открывает вкладку, которую вы случайно закрыли",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "T"
      ]
    },
    "category": "Вкладки",
    "popularity": 98
  },
  {
    "id": "ya-tablo",
    "appId": "yandex-browser",
    "title": "Новая вкладка и Табло любимых сайтов",
    "description": "Открывает умную строку поиска и плитки популярных сайтов",
    "keys": {
      "windows": [
        "Ctrl",
        "T"
      ]
    },
    "category": "Вкладки",
    "popularity": 97
  },
  {
    "id": "op-search-tabs",
    "appId": "opera",
    "title": "Поиск по открытым вкладкам",
    "description": "Быстрый поиск нужной вкладки среди сотен открытых окон",
    "keys": {
      "windows": [
        "Ctrl",
        "Space"
      ]
    },
    "category": "Вкладки",
    "popularity": 93
  },
  {
    "id": "op-settings",
    "appId": "opera",
    "title": "Быстрый переход к настройкам Opera",
    "description": "Настройка VPN, блокировщика рекламы и боковой панели",
    "keys": {
      "windows": [
        "Alt",
        "P"
      ]
    },
    "category": "Настройки",
    "popularity": 91
  },
  {
    "id": "tb-send-later",
    "appId": "thunderbird",
    "title": "Отправить письмо позже (в Исходящие)",
    "description": "Сохраняет готовое сообщение в локальную очередь для отправки по расписанию",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "Enter"
      ]
    },
    "category": "Почта и отправка",
    "popularity": 94
  },
  {
    "id": "tb-archive-mail",
    "appId": "thunderbird",
    "title": "Архивировать выбранное письмо",
    "description": "Переносит письмо в архивную папку по годам, очищая папку «Входящие»",
    "keys": {
      "windows": [
        "A"
      ]
    },
    "category": "Организация почты",
    "popularity": 95
  },
  {
    "id": "tb-mark-spam",
    "appId": "thunderbird",
    "title": "Пометить письмо как спам (Junk)",
    "description": "Обучает байесовский фильтр нежелательной почты и перемещает спам в корзину",
    "keys": {
      "windows": [
        "J"
      ]
    },
    "category": "Организация почты",
    "popularity": 91
  },
  {
    "id": "zoom-toggle-audio",
    "appId": "zoom",
    "title": "Включить / отключить микрофон (Mute/Unmute)",
    "description": "Мгновенное переключение микрофона во время конференции",
    "keys": {
      "windows": [
        "Alt",
        "A"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "A"
      ]
    },
    "category": "Аудио и видео",
    "popularity": 99
  },
  {
    "id": "zoom-toggle-video",
    "appId": "zoom",
    "title": "Включить / отключить веб-камеру",
    "description": "Управление передачей видеосигнала",
    "keys": {
      "windows": [
        "Alt",
        "V"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "V"
      ]
    },
    "category": "Аудио и видео",
    "popularity": 98
  },
  {
    "id": "zoom-screen-share",
    "appId": "zoom",
    "title": "Начать / остановить показ экрана",
    "description": "Запуск демонстрации рабочего стола или окна отдельного приложения",
    "keys": {
      "windows": [
        "Alt",
        "S"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "S"
      ]
    },
    "category": "Демонстрация",
    "popularity": 97
  },
  {
    "id": "zoom-raise-hand",
    "appId": "zoom",
    "title": "Поднять / опустить руку спикеру",
    "description": "Сигнализирует организатору встречи о желании задать вопрос",
    "keys": {
      "windows": [
        "Alt",
        "Y"
      ],
      "macos": [
        "Opt",
        "Y"
      ]
    },
    "category": "Участие во встрече",
    "popularity": 96
  },
  {
    "id": "disc-quick-switcher",
    "appId": "discord",
    "title": "Быстрый переход к серверу, каналу или ЛС (Quick Switcher)",
    "description": "Мгновенное перемещение по серверам без ручного клика по иконкам",
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
    "category": "Навигация",
    "popularity": 99
  },
  {
    "id": "disc-toggle-mute",
    "appId": "discord",
    "title": "Заглушить свой микрофон (Mute)",
    "description": "Глобальное отключение микрофона в голосовом канале",
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
    "category": "Голос и звук",
    "popularity": 98
  },
  {
    "id": "disc-toggle-deafen",
    "appId": "discord",
    "title": "Заглушить звук в наушниках (Deafen)",
    "description": "Полностью отключает входящий звук конференции и свой микрофон",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "D"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "D"
      ]
    },
    "category": "Голос и звук",
    "popularity": 95
  },
  {
    "id": "disc-mark-channel-read",
    "appId": "discord",
    "title": "Пометить текущий текстовый канал как прочитанный",
    "description": "Сбрасывает счетчик непрочитанных сообщений в канале",
    "keys": {
      "windows": [
        "Esc"
      ]
    },
    "category": "Сообщения",
    "popularity": 92
  },
  {
    "id": "slack-quick-switcher",
    "appId": "slack",
    "title": "Быстрый поиск каналов и диалогов (Quick Switcher)",
    "description": "Позволяет за доли секунды переключиться в любой канал или ЛС",
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
    "category": "Навигация",
    "popularity": 99
  },
  {
    "id": "slack-all-unreads",
    "appId": "slack",
    "title": "Все непрочитанные сообщения (All Unreads)",
    "description": "Единая лента всех сообщений из каналов, требующих вашего внимания",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "A"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "A"
      ]
    },
    "category": "Чтение сообщений",
    "popularity": 97
  },
  {
    "id": "slack-threads",
    "appId": "slack",
    "title": "Лента тредов и ответов на ваши сообщения",
    "description": "Открывает все активные цепочки обсуждений, в которых вы участвуете",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "T"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "T"
      ]
    },
    "category": "Чтение сообщений",
    "popularity": 96
  },
  {
    "id": "slack-add-reaction",
    "appId": "slack",
    "title": "Добавить быструю эмодзи-реакцию к последнему сообщению",
    "description": "Открывает палитру смайликов для одобрения или подтверждения без отправки текста",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "\\"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "\\"
      ]
    },
    "category": "Общение",
    "popularity": 93
  },
  {
    "id": "op-workspaces-next",
    "appId": "opera",
    "title": "Переключение между рабочими пространствами (Workspaces)",
    "description": "Быстрый переход между пространствами «Работа», «Покупки» и «Личное»",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "Right"
      ]
    },
    "category": "Пространства",
    "popularity": 96
  },
  {
    "id": "op-workspaces-prev",
    "appId": "opera",
    "title": "Переключение на предыдущее пространство",
    "description": "Смена рабочего пространства влево",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "Left"
      ]
    },
    "category": "Пространства",
    "popularity": 96
  },
  {
    "id": "op-sidebar-toggle",
    "appId": "opera",
    "title": "Показать / скрыть боковую панель Opera",
    "description": "Быстрый доступ к мессенджерам, истории и плееру",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "S"
      ]
    },
    "category": "Интерфейс",
    "popularity": 94
  },
  {
    "id": "op-private-window",
    "appId": "opera",
    "title": "Новое приватное окно со встроенным VPN",
    "description": "Запуск приватного сеанса без сохранения истории и куки",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "N"
      ]
    },
    "category": "Приватность",
    "popularity": 98
  },
  {
    "id": "op-downloads-panel",
    "appId": "opera",
    "title": "Панель загрузок",
    "description": "Открывает список загруженных файлов",
    "keys": {
      "windows": [
        "Ctrl",
        "J"
      ]
    },
    "category": "Загрузки",
    "popularity": 95
  },
  {
    "id": "op-reopen-tab",
    "appId": "opera",
    "title": "Восстановить случайно закрытую вкладку",
    "description": "Возвращает последнюю закрытую страницу",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "T"
      ]
    },
    "category": "Вкладки",
    "popularity": 99
  },
  {
    "id": "op-flow-share",
    "appId": "opera",
    "title": "Мой Flow (My Flow)",
    "description": "Отправка заметок, ссылок и файлов между телефоном и компьютером",
    "keys": {
      "windows": [
        "Иконка Flow на панели"
      ]
    },
    "category": "Синхронизация",
    "popularity": 92
  },
  {
    "id": "edge-split-screen",
    "appId": "edge",
    "title": "Разделение экрана (Split Screen) — две вкладки рядом",
    "description": "Открывает две веб-страницы параллельно в одном окне браузера",
    "keys": {
      "windows": [
        "Кнопка Split Screen / Ctrl + Shift + 2"
      ]
    },
    "category": "Вкладки",
    "popularity": 95
  },
  {
    "id": "edge-immersive-reader",
    "appId": "edge",
    "title": "Режим иммерсивного чтения (без рекламы)",
    "description": "Очищает страницу от баннеров и меню, оставляя чистый текст и иллюстрации",
    "keys": {
      "windows": [
        "F9"
      ]
    },
    "category": "Чтение",
    "popularity": 97
  },
  {
    "id": "ff-containers",
    "appId": "firefox",
    "title": "Изолированные контейнеры Multi-Account Containers",
    "description": "Изоляция сессий: работа, личное, покупки в независимых куки-контейнерах",
    "keys": {
      "windows": [
        "Alt -> Контейнеры"
      ]
    },
    "category": "Приватность",
    "popularity": 98
  },
  {
    "id": "ff-screenshot",
    "appId": "firefox",
    "title": "Снимок страницы встроенным инструментом",
    "description": "Создает скриншот видимой части или всей страницы",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "S"
      ]
    },
    "category": "Инструменты",
    "popularity": 97
  },
  {
    "id": "ff-reader-view",
    "appId": "firefox",
    "title": "Режим для чтения (Reader View)",
    "description": "Отображение статьи без рекламы и посторонних скриптов",
    "keys": {
      "windows": [
        "F9"
      ]
    },
    "category": "Чтение",
    "popularity": 96
  },
  {
    "id": "ff-library-history",
    "appId": "firefox",
    "title": "Библиотека: журнал и загрузки",
    "description": "Открывает полное окно управления историей посещений и закладками",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "O"
      ]
    },
    "category": "История",
    "popularity": 95
  },
  {
    "id": "ff-pip-video",
    "appId": "firefox",
    "title": "Режим «Картинка в картинке» для видео",
    "description": "Выносит видеоролик в плавающее окно поверх всех программ",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "]"
      ]
    },
    "category": "Медиа",
    "popularity": 97
  },
  {
    "id": "ff-forget-button",
    "appId": "firefox",
    "title": "Функция «Забыть» (очистка недавней активности)",
    "description": "Удаляет историю и куки за последние 5 минут, 2 часа или 24 часа",
    "keys": {
      "windows": [
        "Кнопка Forget"
      ]
    },
    "category": "Приватность",
    "popularity": 92
  },
  {
    "id": "yb-ai-translate-video",
    "appId": "yandex-browser",
    "title": "Нейросетевой закадровый перевод видео",
    "description": "Синхронный голосовой перевод иностранных видео на русский язык",
    "keys": {
      "windows": [
        "Кнопка перевода на видео"
      ]
    },
    "category": "Нейросети",
    "popularity": 99
  },
  {
    "id": "yb-tab-groups",
    "appId": "yandex-browser",
    "title": "Группировка вкладок по проектам",
    "description": "Объединение связанных сайтов в именованную цветовую группу",
    "keys": {
      "windows": [
        "Контекстное меню вкладки -> Добавить в группу"
      ]
    },
    "category": "Вкладки",
    "popularity": 95
  },
  {
    "id": "yb-screenshot-tool",
    "appId": "yandex-browser",
    "title": "Встроенный инструмент создания скриншотов",
    "description": "Скриншот с добавлением стрелок, рамок и размытия персональных данных",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "S"
      ]
    },
    "category": "Инструменты",
    "popularity": 96
  },
  {
    "id": "yb-passwords-master",
    "appId": "yandex-browser",
    "title": "Менеджер паролей с мастер-паролем",
    "description": "Безопасное хранение и автозаполнение учетных записей",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "L"
      ]
    },
    "category": "Безопасность",
    "popularity": 93
  },
  {
    "id": "yb-turbomode",
    "appId": "yandex-browser",
    "title": "Режим Турбо при медленном интернете",
    "description": "Сжатие трафика и ускорение загрузки тяжелых страниц",
    "keys": {
      "windows": [
        "Меню -> Режим Турбо"
      ]
    },
    "category": "Сеть",
    "popularity": 90
  },
  {
    "id": "tg-scheduled-message",
    "appId": "telegram",
    "title": "Отложенная отправка сообщения",
    "description": "Выбор точной даты и времени отправки сообщения собеседнику",
    "keys": {
      "windows": [
        "Правый клик по кнопке отправки"
      ]
    },
    "category": "Отправка",
    "popularity": 98
  },
  {
    "id": "tg-silent-message",
    "appId": "telegram",
    "title": "Отправить без звука",
    "description": "Доставка сообщения без звукового уведомления на телефоне получателя",
    "keys": {
      "windows": [
        "Правый клик по кнопке отправки -> Без звука"
      ]
    },
    "category": "Отправка",
    "popularity": 96
  },
  {
    "id": "tg-lock-passcode",
    "appId": "telegram",
    "title": "Заблокировать Telegram код-паролем",
    "description": "Мгновенная блокировка интерфейса приложения при уходе от компьютера",
    "keys": {
      "windows": [
        "Ctrl",
        "L"
      ]
    },
    "category": "Безопасность",
    "popularity": 99
  },
  {
    "id": "tg-folders-switch",
    "appId": "telegram",
    "title": "Переключение между папками чатов",
    "description": "Переход между вкладками папок (Работа, Личное, Каналы)",
    "keys": {
      "windows": [
        "Ctrl",
        "1 .. 9"
      ]
    },
    "category": "Навигация",
    "popularity": 97
  },
  {
    "id": "tg-format-spoiler",
    "appId": "telegram",
    "title": "Скрыть текст под спойлер",
    "description": "Форматирует выделенный фрагмент как скрытый спойлер",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "P"
      ]
    },
    "category": "Форматирование",
    "popularity": 95
  },
  {
    "id": "tg-format-quote",
    "appId": "telegram",
    "title": "Оформить текст как цитату",
    "description": "Блочное оформление цитаты",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "."
      ]
    },
    "category": "Форматирование",
    "popularity": 94
  },
  {
    "id": "chrome-incognito",
    "appId": "chrome",
    "title": "Новое окно в режиме инкогнито",
    "description": "Открывает приватное окно без сохранения истории и cookies",
    "keys": { "windows": ["Ctrl", "Shift", "N"], "macos": ["Cmd", "Shift", "N"] },
    "category": "Окна и вкладки",
    "popularity": 96
  },
  {
    "id": "chrome-reopen-closed-tab",
    "appId": "chrome",
    "title": "Восстановить последнюю закрытую вкладку",
    "description": "Мгновенно открывает случайно закрытую вкладку с сохранением истории",
    "keys": { "windows": ["Ctrl", "Shift", "T"], "macos": ["Cmd", "Shift", "T"] },
    "category": "Окна и вкладки",
    "popularity": 98
  },
  {
    "id": "chrome-downloads",
    "appId": "chrome",
    "title": "Открыть список загрузок",
    "description": "Переход к загруженным файлам и дистрибутивам",
    "keys": { "windows": ["Ctrl", "J"], "macos": ["Cmd", "Shift", "J"] },
    "category": "Навигация",
    "popularity": 90
  },
  {
    "id": "chrome-history",
    "appId": "chrome",
    "title": "Открыть историю просмотров",
    "description": "Просмотр журнала посещенных сайтов и закрытых вкладок",
    "keys": { "windows": ["Ctrl", "H"], "macos": ["Cmd", "Y"] },
    "category": "Навигация",
    "popularity": 92
  },
  {
    "id": "chrome-bookmark-all",
    "appId": "chrome",
    "title": "Добавить все открытые вкладки в закладки",
    "description": "Создает папку с закладками для всех вкладок текущего окна",
    "keys": { "windows": ["Ctrl", "Shift", "D"], "macos": ["Cmd", "Shift", "D"] },
    "category": "Закладки",
    "popularity": 86
  },
  {
    "id": "chrome-clear-browsing-data",
    "appId": "chrome",
    "title": "Очистить историю и кэш браузера",
    "description": "Быстрый вызов диалогового окна очистки кэша и cookies",
    "keys": { "windows": ["Ctrl", "Shift", "Del"], "macos": ["Cmd", "Shift", "Del"] },
    "category": "Настройки",
    "popularity": 88
  },
  {
    "id": "edge-vertical-tabs-toggle",
    "appId": "edge",
    "title": "Включить/выключить вертикальные вкладки",
    "description": "Переключает отображение вкладок между горизонтальной полосой и левой панелью",
    "keys": { "windows": ["Ctrl", "Shift", ","] },
    "category": "Интерфейс",
    "popularity": 95
  },
  {
    "id": "edge-collections-open",
    "appId": "edge",
    "title": "Открыть панель «Коллекции»",
    "description": "Панель подборок ссылок, заметок и картинок",
    "keys": { "windows": ["Ctrl", "Shift", "Y"], "macos": ["Cmd", "Shift", "Y"] },
    "category": "Инструменты",
    "popularity": 90
  },
  {
    "id": "edge-web-capture",
    "appId": "edge",
    "title": "Веб-захват: снимок фрагмента или страницы целиком",
    "description": "Инструмент захвата области или всей прокручиваемой страницы с разметкой пером",
    "keys": { "windows": ["Ctrl", "Shift", "S"] },
    "category": "Скриншоты",
    "popularity": 94
  },
  {
    "id": "edge-read-aloud",
    "appId": "edge",
    "title": "Чтение страницы вслух (Read Aloud)",
    "description": "Запуск голосового воспроизведения статьи естественным голосом нейросети",
    "keys": { "windows": ["Ctrl", "Shift", "U"] },
    "category": "Инструменты",
    "popularity": 88
  },
  {
    "id": "edge-favorites-bar",
    "appId": "edge",
    "title": "Показать/скрыть панель избранного",
    "description": "Быстрое переключение видимости панели закладок",
    "keys": { "windows": ["Ctrl", "Shift", "O"] },
    "category": "Закладки",
    "popularity": 89
  },
  {
    "id": "edge-downloads-menu",
    "appId": "edge",
    "title": "Открыть всплывающее меню загрузок",
    "description": "Просмотр активных и завершенных загрузок",
    "keys": { "windows": ["Ctrl", "J"] },
    "category": "Навигация",
    "popularity": 91
  },
  {
    "id": "edge-reopen-tab",
    "appId": "edge",
    "title": "Восстановить закрытую вкладку",
    "description": "Открывает последнюю закрытую вкладку",
    "keys": { "windows": ["Ctrl", "Shift", "T"] },
    "category": "Вкладки",
    "popularity": 97
  },
  {
    "id": "edge-sidebar-toggle",
    "appId": "edge",
    "title": "Показать или скрыть боковую панель Edge",
    "description": "Переключение правой боковой панели с инструментами и приложениями",
    "keys": { "windows": ["Ctrl", "Shift", "."] },
    "category": "Интерфейс",
    "popularity": 87
  },
  {
    "id": "edge-inprivate",
    "appId": "edge",
    "title": "Открыть окно InPrivate",
    "description": "Запуск сеанса без сохранения журнала и файлов cookie",
    "keys": { "windows": ["Ctrl", "Shift", "N"] },
    "category": "Приватность",
    "popularity": 93
  },
  {
    "id": "ff-reopen-closed-tab",
    "appId": "firefox",
    "title": "Восстановить закрытую вкладку",
    "description": "Мгновенно открывает последнюю закрытую вкладку",
    "keys": { "windows": ["Ctrl", "Shift", "T"], "macos": ["Cmd", "Shift", "T"] },
    "category": "Вкладки",
    "popularity": 98
  },
  {
    "id": "ff-library-bookmarks",
    "appId": "firefox",
    "title": "Открыть библиотеку закладок и журнала",
    "description": "Окно управления закладками, тегами и историей",
    "keys": { "windows": ["Ctrl", "Shift", "O"], "macos": ["Cmd", "Shift", "O"] },
    "category": "Закладки",
    "popularity": 90
  },
  {
    "id": "ff-private-window",
    "appId": "firefox",
    "title": "Новое приватное окно",
    "description": "Просмотр сайтов с блокировкой трекеров без сохранения истории",
    "keys": { "windows": ["Ctrl", "Shift", "P"], "macos": ["Cmd", "Shift", "P"] },
    "category": "Приватность",
    "popularity": 94
  },
  {
    "id": "ff-devtools-toggle",
    "appId": "firefox",
    "title": "Открыть инструменты разработчика",
    "description": "Инспектор элементов, консоль JavaScript и монитор сети",
    "keys": { "windows": ["F12"], "macos": ["Cmd", "Option", "I"] },
    "category": "Разработка",
    "popularity": 92
  },
  {
    "id": "ff-responsive-design",
    "appId": "firefox",
    "title": "Режим адаптивного дизайна мобильных экранов",
    "description": "Тестирование отображения сайта на экранах смартфонов и планшетов",
    "keys": { "windows": ["Ctrl", "Shift", "M"], "macos": ["Cmd", "Option", "M"] },
    "category": "Разработка",
    "popularity": 89
  },
  {
    "id": "ff-forget-history",
    "appId": "firefox",
    "title": "Очистить недавнюю историю",
    "description": "Удаление кэша, cookies и истории за последний час или сутки",
    "keys": { "windows": ["Ctrl", "Shift", "Del"] },
    "category": "Приватность",
    "popularity": 87
  },
  {
    "id": "yb-incognito",
    "appId": "yandex-browser",
    "title": "Режим инкогнито",
    "description": "Открывает окно инкогнито без фиксации поисковых запросов и истории",
    "keys": { "windows": ["Ctrl", "Shift", "N"] },
    "category": "Приватность",
    "popularity": 95
  },
  {
    "id": "yb-reopen-tab",
    "appId": "yandex-browser",
    "title": "Восстановить закрытую вкладку",
    "description": "Возврат случайно закрытой страницы",
    "keys": { "windows": ["Ctrl", "Shift", "T"] },
    "category": "Вкладки",
    "popularity": 97
  },
  {
    "id": "yb-tableau-open",
    "appId": "yandex-browser",
    "title": "Открыть Табло с быстрыми ссылками",
    "description": "Открытие новой вкладки с плитками избранных сайтов и виджетами",
    "keys": { "windows": ["Ctrl", "T"] },
    "category": "Интерфейс",
    "popularity": 96
  },
  {
    "id": "yb-sidebar-toggle",
    "appId": "yandex-browser",
    "title": "Скрыть или показать боковую панель",
    "description": "Переключение видимости левой панели с историей, заметками и сервисами",
    "keys": { "windows": ["Ctrl", "Shift", "E"] },
    "category": "Интерфейс",
    "popularity": 90
  },
  {
    "id": "yb-downloads",
    "appId": "yandex-browser",
    "title": "Открыть панель загрузок",
    "description": "Управление скачанными файлами и документами",
    "keys": { "windows": ["Ctrl", "J"] },
    "category": "Навигация",
    "popularity": 91
  },
  {
    "id": "yb-smartbox-focus",
    "appId": "yandex-browser",
    "title": "Фокус в Умную строку",
    "description": "Мгновенный переход к поисковой строке с выделением адреса",
    "keys": { "windows": ["Ctrl", "L"] },
    "category": "Поиск",
    "popularity": 94
  },
  {
    "id": "opera-snapshot",
    "appId": "opera",
    "title": "Сделать снимок экрана (Snapshot)",
    "description": "Создание снимка экрана с возможностью разметки и добавления стикеров",
    "keys": { "windows": ["Ctrl", "Shift", "5"] },
    "category": "Инструменты",
    "popularity": 92
  },
  {
    "id": "opera-reopen-tab",
    "appId": "opera",
    "title": "Восстановить закрытую вкладку",
    "description": "Открытие недавно закрытой вкладки",
    "keys": { "windows": ["Ctrl", "Shift", "T"] },
    "category": "Вкладки",
    "popularity": 97
  },
  {
    "id": "opera-private-window",
    "appId": "opera",
    "title": "Новое приватное окно",
    "description": "Запуск приватного сеанса с автоматическим включением VPN",
    "keys": { "windows": ["Ctrl", "Shift", "N"] },
    "category": "Приватность",
    "popularity": 95
  },
  {
    "id": "opera-history",
    "appId": "opera",
    "title": "Открыть историю просмотров",
    "description": "Полный журнал посещенных страниц",
    "keys": { "windows": ["Ctrl", "H"] },
    "category": "Навигация",
    "popularity": 90
  },
  {
    "id": "opera-workspaces-next",
    "appId": "opera",
    "title": "Следующее рабочее пространство",
    "description": "Циклическое переключение между рабочими пространствами (Workspaces)",
    "keys": { "windows": ["Ctrl", "`"] },
    "category": "Пространства",
    "popularity": 91
  },
  {
    "id": "opera-downloads",
    "appId": "opera",
    "title": "Открыть менеджер загрузок",
    "description": "Просмотр прогресса загрузки файлов",
    "keys": { "windows": ["Ctrl", "J"] },
    "category": "Навигация",
    "popularity": 89
  },
  {
    "id": "tg-search-chat",
    "appId": "telegram",
    "title": "Поиск сообщений в чате",
    "description": "Открывает строку поиска по истории активной переписки",
    "keys": { "windows": ["Ctrl", "F"], "macos": ["Cmd", "F"] },
    "category": "Поиск",
    "popularity": 97
  },
  {
    "id": "tg-lock-app",
    "appId": "telegram",
    "title": "Блокировка приложения код-паролем",
    "description": "Мгновенная блокировка десктопного клиента при отходе от компьютера",
    "keys": { "windows": ["Ctrl", "L"], "macos": ["Cmd", "L"] },
    "category": "Безопасность",
    "popularity": 95
  },
  {
    "id": "tg-edit-last-message",
    "appId": "telegram",
    "title": "Редактировать последнее отправленное сообщение",
    "description": "Позволяет быстро исправить опечатку в последнем сообщении",
    "keys": { "windows": ["ArrowUp"], "macos": ["ArrowUp"] },
    "category": "Сообщения",
    "popularity": 98
  },
  {
    "id": "tg-record-voice",
    "appId": "telegram",
    "title": "Запись голосового сообщения",
    "description": "Начало записи аудиосообщения без клика мышью по микрофону",
    "keys": { "windows": ["Ctrl", "R"], "macos": ["Cmd", "R"] },
    "category": "Сообщения",
    "popularity": 89
  },
  {
    "id": "tg-format-bold",
    "appId": "telegram",
    "title": "Сделать текст полужирным",
    "description": "Форматирование выделенного фрагмента полужирным начертанием",
    "keys": { "windows": ["Ctrl", "B"], "macos": ["Cmd", "B"] },
    "category": "Форматирование",
    "popularity": 96
  },
  {
    "id": "tg-format-italic",
    "appId": "telegram",
    "title": "Сделать текст курсивом",
    "description": "Форматирование выделенного текста курсивом",
    "keys": { "windows": ["Ctrl", "I"], "macos": ["Cmd", "I"] },
    "category": "Форматирование",
    "popularity": 94
  },
  {
    "id": "tb-new-message",
    "appId": "thunderbird",
    "title": "Создать новое письмо",
    "description": "Открывает окно составления нового почтового сообщения",
    "keys": { "windows": ["Ctrl", "N"] },
    "category": "Почта",
    "popularity": 98
  },
  {
    "id": "tb-reply",
    "appId": "thunderbird",
    "title": "Ответить отправителю",
    "description": "Создание ответа автору выбранного письма",
    "keys": { "windows": ["Ctrl", "R"] },
    "category": "Почта",
    "popularity": 97
  },
  {
    "id": "tb-reply-all",
    "appId": "thunderbird",
    "title": "Ответить всем участникам",
    "description": "Создание ответа с включением всех адресатов из копии",
    "keys": { "windows": ["Ctrl", "Shift", "R"] },
    "category": "Почта",
    "popularity": 94
  },
  {
    "id": "tb-forward",
    "appId": "thunderbird",
    "title": "Переслать письмо",
    "description": "Пересылка письма новому адресату с вложениями",
    "keys": { "windows": ["Ctrl", "L"] },
    "category": "Почта",
    "popularity": 93
  },
  {
    "id": "tb-archive",
    "appId": "thunderbird",
    "title": "Переместить в архив",
    "description": "Отправляет выделенное письмо в архивную папку года",
    "keys": { "windows": ["A"] },
    "category": "Организация",
    "popularity": 95
  },
  {
    "id": "tb-quick-filter",
    "appId": "thunderbird",
    "title": "Строка быстрой фильтрации",
    "description": "Активация мгновенного поиска по теме, отправителю и дате в текущей папке",
    "keys": { "windows": ["Ctrl", "Shift", "K"] },
    "category": "Поиск",
    "popularity": 92
  },
  {
    "id": "tb-mark-read",
    "appId": "thunderbird",
    "title": "Пометить как прочитанное",
    "description": "Снятие статуса непрочитанного сообщения",
    "keys": { "windows": ["M"] },
    "category": "Организация",
    "popularity": 91
  },
  {
    "id": "tb-address-book",
    "appId": "thunderbird",
    "title": "Открыть адресную книгу",
    "description": "Справочник контактов и списков рассылок",
    "keys": { "windows": ["Ctrl", "Shift", "B"] },
    "category": "Контакты",
    "popularity": 89
  },
  {
    "id": "tb-calendar-view",
    "appId": "thunderbird",
    "title": "Переключиться на календарь",
    "description": "Открытие сетки событий и расписания",
    "keys": { "windows": ["Ctrl", "Shift", "C"] },
    "category": "Календарь",
    "popularity": 90
  },
  {
    "id": "tb-tasks-view",
    "appId": "thunderbird",
    "title": "Переключиться на список задач",
    "description": "Открытие панели поручений и дел",
    "keys": { "windows": ["Ctrl", "Shift", "D"] },
    "category": "Задачи",
    "popularity": 88
  },
  {
    "id": "zoom-mute-audio",
    "appId": "zoom",
    "title": "Включить/выключить микрофон (Mute/Unmute)",
    "description": "Быстрое включение и глушение звука микрофона",
    "keys": { "windows": ["Alt", "A"], "macos": ["Cmd", "Shift", "A"] },
    "category": "Управление аудио",
    "popularity": 99
  },
  {
    "id": "zoom-start-video",
    "appId": "zoom",
    "title": "Включить/выключить камеру",
    "description": "Быстрое управление трансляцией видео с веб-камеры",
    "keys": { "windows": ["Alt", "V"], "macos": ["Cmd", "Shift", "V"] },
    "category": "Управление видео",
    "popularity": 97
  },
  {
    "id": "zoom-share-screen",
    "appId": "zoom",
    "title": "Начать/остановить демонстрацию экрана",
    "description": "Трансляция рабочего стола или окна выбранной программы",
    "keys": { "windows": ["Alt", "S"], "macos": ["Cmd", "Shift", "S"] },
    "category": "Трансляция",
    "popularity": 96
  },
  {
    "id": "zoom-raise-hand",
    "appId": "zoom",
    "title": "Поднять или опустить руку",
    "description": "Сигнал спикеру и модератору о желании задать вопрос",
    "keys": { "windows": ["Alt", "Y"], "macos": ["Option", "Y"] },
    "category": "Взаимодействие",
    "popularity": 93
  },
  {
    "id": "zoom-chat-toggle",
    "appId": "zoom",
    "title": "Показать/скрыть чат встречи",
    "description": "Боковая панель текстовых сообщений участников",
    "keys": { "windows": ["Alt", "H"], "macos": ["Cmd", "Shift", "H"] },
    "category": "Интерфейс",
    "popularity": 94
  },
  {
    "id": "zoom-record-meeting",
    "appId": "zoom",
    "title": "Начать/остановить локальную запись",
    "description": "Запись видео и звука конференции на жесткий диск",
    "keys": { "windows": ["Alt", "R"], "macos": ["Cmd", "Shift", "R"] },
    "category": "Запись",
    "popularity": 90
  },
  {
    "id": "zoom-participants",
    "appId": "zoom",
    "title": "Показать список участников",
    "description": "Панель состава участников встречи и их статусов",
    "keys": { "windows": ["Alt", "U"], "macos": ["Cmd", "U"] },
    "category": "Интерфейс",
    "popularity": 91
  },
  {
    "id": "zoom-leave-meeting",
    "appId": "zoom",
    "title": "Завершить или покинуть встречу",
    "description": "Диалог выхода из текущей конференции",
    "keys": { "windows": ["Alt", "Q"], "macos": ["Cmd", "W"] },
    "category": "Сессия",
    "popularity": 92
  },
  {
    "id": "zoom-pause-share",
    "appId": "zoom",
    "title": "Приостановить демонстрацию экрана",
    "description": "Заморозка кадра трансляции экрана для слушателей",
    "keys": { "windows": ["Alt", "T"], "macos": ["Cmd", "Shift", "T"] },
    "category": "Трансляция",
    "popularity": 87
  },
  {
    "id": "discord-mute-mic",
    "appId": "discord",
    "title": "Заглушить микрофон (Mute)",
    "description": "Быстрое отключение передачи голоса",
    "keys": { "windows": ["Ctrl", "Shift", "M"] },
    "category": "Голос",
    "popularity": 98
  },
  {
    "id": "discord-deafen",
    "appId": "discord",
    "title": "Заглушить звук в наушниках (Deafen)",
    "description": "Полное отключение звука голосового канала и микрофона",
    "keys": { "windows": ["Ctrl", "Shift", "D"] },
    "category": "Голос",
    "popularity": 96
  },
  {
    "id": "discord-quick-switcher",
    "appId": "discord",
    "title": "Быстрый переход (Quick Switcher)",
    "description": "Мгновенный поиск сервера, голосового или текстового канала",
    "keys": { "windows": ["Ctrl", "K"], "macos": ["Cmd", "K"] },
    "category": "Навигация",
    "popularity": 97
  },
  {
    "id": "discord-search-channel",
    "appId": "discord",
    "title": "Поиск по каналу или серверу",
    "description": "Поиск сообщений с фильтрами from, has, mentions",
    "keys": { "windows": ["Ctrl", "F"] },
    "category": "Поиск",
    "popularity": 94
  },
  {
    "id": "discord-mark-server-read",
    "appId": "discord",
    "title": "Пометить сервер как прочитанный",
    "description": "Снятие индикаторов непрочитанных со всех каналов сервера",
    "keys": { "windows": ["Shift", "Esc"] },
    "category": "Сообщения",
    "popularity": 95
  },
  {
    "id": "discord-inbox",
    "appId": "discord",
    "title": "Открыть почту входящих упоминаний",
    "description": "Лента персональных упоминаний @user и непрочитанных тем",
    "keys": { "windows": ["Ctrl", "I"] },
    "category": "Уведомления",
    "popularity": 91
  },
  {
    "id": "discord-pin-messages",
    "appId": "discord",
    "title": "Закрепленные сообщения",
    "description": "Просмотр закрепленных регламентов и важных ссылок канала",
    "keys": { "windows": ["Ctrl", "P"] },
    "category": "Каналы",
    "popularity": 89
  },
  {
    "id": "discord-edit-last",
    "appId": "discord",
    "title": "Редактировать последнее сообщение",
    "description": "Быстрое редактирование предыдущего текста",
    "keys": { "windows": ["ArrowUp"] },
    "category": "Сообщения",
    "popularity": 97
  },
  {
    "id": "discord-emoji-picker",
    "appId": "discord",
    "title": "Открыть панель выбора эмодзи",
    "description": "Всплывающее меню смайликов и анимированных стикеров",
    "keys": { "windows": ["Ctrl", "E"] },
    "category": "Чат",
    "popularity": 92
  },
  {
    "id": "slack-quick-switcher",
    "appId": "slack",
    "title": "Быстрый переход (Quick Switcher)",
    "description": "Мгновенное переключение между каналами, тредами и личными сообщениями",
    "keys": { "windows": ["Ctrl", "K"], "macos": ["Cmd", "K"] },
    "category": "Навигация",
    "popularity": 99
  },
  {
    "id": "slack-mute-mic",
    "appId": "slack",
    "title": "Включить/выключить микрофон в хадле (Huddle)",
    "description": "Глушение звука в голосовой комнате Huddle",
    "keys": { "windows": ["Ctrl", "Shift", "Space"], "macos": ["Cmd", "Shift", "Space"] },
    "category": "Голос",
    "popularity": 97
  },
  {
    "id": "slack-all-unreads",
    "appId": "slack",
    "title": "Показать все непрочитанные сообщения",
    "description": "Сводная лента сообщений, требующих внимания",
    "keys": { "windows": ["Ctrl", "Shift", "A"], "macos": ["Cmd", "Shift", "A"] },
    "category": "Сообщения",
    "popularity": 95
  },
  {
    "id": "slack-mark-all-read",
    "appId": "slack",
    "title": "Пометить канал как прочитанный",
    "description": "Снятие счетчика новых сообщений текущего канала",
    "keys": { "windows": ["Esc"] },
    "category": "Сообщения",
    "popularity": 96
  },
  {
    "id": "slack-threads",
    "appId": "slack",
    "title": "Открыть ветки обсуждений (Threads)",
    "description": "Панель тредов, в которых вы участвуете",
    "keys": { "windows": ["Ctrl", "Shift", "T"], "macos": ["Cmd", "Shift", "T"] },
    "category": "Обсуждения",
    "popularity": 93
  },
  {
    "id": "slack-search",
    "appId": "slack",
    "title": "Глобальный поиск",
    "description": "Поиск по архиву сообщений, прикрепленным файлам и участникам",
    "keys": { "windows": ["Ctrl", "G"], "macos": ["Cmd", "G"] },
    "category": "Поиск",
    "popularity": 94
  },
  {
    "id": "slack-edit-last",
    "appId": "slack",
    "title": "Редактировать последнее сообщение",
    "description": "Исправление последней отправленной реплики в активном канале",
    "keys": { "windows": ["ArrowUp"] },
    "category": "Сообщения",
    "popularity": 98
  },
  {
    "id": "slack-activity",
    "appId": "slack",
    "title": "Открыть ленту активности и реакций",
    "description": "Просмотр реакций коллег и цитирований ваших постов",
    "keys": { "windows": ["Ctrl", "Shift", "M"], "macos": ["Cmd", "Shift", "M"] },
    "category": "Уведомления",
    "popularity": 91
  },
  {
    "id": "slack-format-code",
    "appId": "slack",
    "title": "Оформить фрагмент как моноширинный код",
    "description": "Выделение текста стилем встроенного программного кода",
    "keys": { "windows": ["Ctrl", "Shift", "C"], "macos": ["Cmd", "Shift", "C"] },
    "category": "Форматирование",
    "popularity": 92
  }
];

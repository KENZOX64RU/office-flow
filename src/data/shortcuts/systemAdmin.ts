import type { Shortcut } from '../../types/index.ts';

export const SYSTEM_ADMIN_SHORTCUTS: Shortcut[] = [
  {
    "id": "w11-snap",
    "appId": "win11",
    "title": "Макеты привязки окон (Snap Layouts)",
    "description": "Открывает меню готовых сеток расположения окон на экране",
    "keys": {
      "windows": [
        "Win",
        "Z"
      ]
    },
    "category": "Управление окнами",
    "popularity": 98
  },
  {
    "id": "w11-clipboard",
    "appId": "win11",
    "title": "Журнал буфера обмена и эмодзи",
    "description": "Открывает историю скопированных фрагментов текста, картинок и спецсимволов",
    "keys": {
      "windows": [
        "Win",
        "V"
      ]
    },
    "category": "Основные операции",
    "popularity": 99
  },
  {
    "id": "w11-screenshot",
    "appId": "win11",
    "title": "Фрагмент экрана (Ножницы)",
    "description": "Запуск быстрого инструмента выделения области, окна или всего экрана для скриншота",
    "keys": {
      "windows": [
        "Win",
        "Shift",
        "S"
      ]
    },
    "category": "Основные операции",
    "popularity": 97
  },
  {
    "id": "w11-quick-settings",
    "appId": "win11",
    "title": "Быстрые настройки (Wi-Fi, звук, Bluetooth)",
    "description": "Мгновенно открывает всплывающую панель регулировки громкости, сетей и яркости",
    "keys": {
      "windows": [
        "Win",
        "A"
      ]
    },
    "category": "Система и навигация",
    "popularity": 90
  },
  {
    "id": "w11-notifications",
    "appId": "win11",
    "title": "Центр уведомлений и календарь",
    "description": "Открывает боковую панель уведомлений и раскрывающийся календарь",
    "keys": {
      "windows": [
        "Win",
        "N"
      ]
    },
    "category": "Система и навигация",
    "popularity": 88
  },
  {
    "id": "w11-virtual-desktop-new",
    "appId": "win11",
    "title": "Создать новый виртуальный рабочий стол",
    "description": "Создает независимое чистое пространство для другой рабочей задачи",
    "keys": {
      "windows": [
        "Win",
        "Ctrl",
        "D"
      ]
    },
    "category": "Управление окнами",
    "popularity": 89
  },
  {
    "id": "w11-virtual-desktop-switch",
    "appId": "win11",
    "title": "Переключение между рабочими столами",
    "description": "Мгновенный переход к соседнему виртуальному экрану влево или вправо",
    "keys": {
      "windows": [
        "Win",
        "Ctrl",
        "Left / Right"
      ]
    },
    "category": "Управление окнами",
    "popularity": 92
  },
  {
    "id": "w11-lock",
    "appId": "win11",
    "title": "Мгновенная блокировка компьютера",
    "description": "Блокирует экран рабочей станции при отходе от рабочего места",
    "keys": {
      "windows": [
        "Win",
        "L"
      ]
    },
    "category": "Система и навигация",
    "popularity": 96
  },
  {
    "id": "w11-open-explorer",
    "appId": "win11",
    "title": "Открыть Проводник («Этот компьютер»)",
    "description": "Быстро запускает окно Проводника для работы с дисками и папками",
    "keys": {
      "windows": [
        "Win",
        "E"
      ]
    },
    "category": "Система и навигация",
    "popularity": 95
  },
  {
    "id": "w11-run-dialog",
    "appId": "win11",
    "title": "Диалоговое окно «Выполнить» (Run)",
    "description": "Вызов строки быстрого запуска системных оснасток (regedit, cmd, appwiz.cpl)",
    "keys": {
      "windows": [
        "Win",
        "R"
      ]
    },
    "category": "Система и навигация",
    "popularity": 94
  },
  {
    "id": "w10-clipboard",
    "appId": "win10",
    "title": "Журнал буфера обмена",
    "description": "Показывает историю копирования текста и изображений с возможностью закрепления",
    "keys": {
      "windows": [
        "Win",
        "V"
      ]
    },
    "category": "Основные операции",
    "popularity": 98
  },
  {
    "id": "w10-snippet",
    "appId": "win10",
    "title": "Снимок области экрана",
    "description": "Вызывает мини-панель инструмента создания снимков экрана",
    "keys": {
      "windows": [
        "Win",
        "Shift",
        "S"
      ]
    },
    "category": "Основные операции",
    "popularity": 96
  },
  {
    "id": "w10-power-menu",
    "appId": "win10",
    "title": "Меню опытного пользователя (Power User Menu)",
    "description": "Быстрый доступ к диспетчеру устройств, управлению дисками, терминалу и параметрам",
    "keys": {
      "windows": [
        "Win",
        "X"
      ]
    },
    "category": "Система и навигация",
    "popularity": 94
  },
  {
    "id": "w10-minimize-all",
    "appId": "win10",
    "title": "Свернуть / восстановить все окна",
    "description": "Сворачивает все активные окна на рабочий стол; повторное нажатие возвращает их",
    "keys": {
      "windows": [
        "Win",
        "D"
      ]
    },
    "category": "Управление окнами",
    "popularity": 95
  },
  {
    "id": "w10-settings",
    "appId": "win10",
    "title": "Параметры Windows",
    "description": "Открывает системное приложение настроек Windows 10",
    "keys": {
      "windows": [
        "Win",
        "I"
      ]
    },
    "category": "Система и навигация",
    "popularity": 91
  },
  {
    "id": "w10-snap-window",
    "appId": "win10",
    "title": "Привязка окна к половине или четверти экрана",
    "description": "Перемещает активное окно к левому, правому краю или в угол монитора",
    "keys": {
      "windows": [
        "Win",
        "Стрелки"
      ]
    },
    "category": "Управление окнами",
    "popularity": 93
  },
  {
    "id": "exp-new-folder",
    "appId": "explorer",
    "title": "Создать новую папку",
    "description": "Создает каталог в текущей директории с фокусом на вводе имени",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "N"
      ]
    },
    "category": "Основные операции",
    "popularity": 96
  },
  {
    "id": "exp-rename",
    "appId": "explorer",
    "title": "Переименовать выделенный файл или папку",
    "description": "Активирует поле редактирования имени объекта",
    "keys": {
      "windows": [
        "F2"
      ]
    },
    "category": "Основные операции",
    "popularity": 98
  },
  {
    "id": "exp-properties",
    "appId": "explorer",
    "title": "Свойства файла или папки",
    "description": "Мгновенно открывает окно системных свойств и прав доступа к файлу",
    "keys": {
      "windows": [
        "Alt",
        "Enter"
      ]
    },
    "category": "Файловые операции",
    "popularity": 92
  },
  {
    "id": "exp-preview",
    "appId": "explorer",
    "title": "Панель предварительного просмотра",
    "description": "Включает или выключает правую панель быстрого просмотра документов и картинок",
    "keys": {
      "windows": [
        "Alt",
        "P"
      ]
    },
    "category": "Интерфейс",
    "popularity": 89
  },
  {
    "id": "exp-address-bar",
    "appId": "explorer",
    "title": "Перейти в адресную строку (копирование пути)",
    "description": "Выделяет полный путь директории для быстрого ввода пути или копирования",
    "keys": {
      "windows": [
        "Alt",
        "D"
      ]
    },
    "category": "Навигация",
    "popularity": 94
  },
  {
    "id": "exp-perm-delete",
    "appId": "explorer",
    "title": "Удалить безвозвратно (мимо Корзины)",
    "description": "Удаляет файл сразу без помещения в Корзину с запросом подтверждения",
    "keys": {
      "windows": [
        "Shift",
        "Delete"
      ]
    },
    "category": "Файловые операции",
    "popularity": 93
  },
  {
    "id": "tm-open",
    "appId": "taskmgr",
    "title": "Прямой запуск Диспетчера задач",
    "description": "Открывает Диспетчер задач напрямую без промежуточного системного экрана",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "Esc"
      ]
    },
    "category": "Основные операции",
    "popularity": 100
  },
  {
    "id": "tm-kill-process",
    "appId": "taskmgr",
    "title": "Снять задачу (завершить процесс)",
    "description": "Принудительно останавливает выбранную зависшую программу",
    "keys": {
      "windows": [
        "Delete"
      ]
    },
    "category": "Управление процессами",
    "popularity": 97
  },
  {
    "id": "tm-switch-tab",
    "appId": "taskmgr",
    "title": "Переключение вкладок",
    "description": "Переход между процессами, производительностью, автозагрузкой и службами",
    "keys": {
      "windows": [
        "Ctrl",
        "Tab"
      ]
    },
    "category": "Навигация",
    "popularity": 88
  },
  {
    "id": "tm-refresh",
    "appId": "taskmgr",
    "title": "Обновить данные",
    "description": "Принудительно обновляет показатели процессора, памяти и диска",
    "keys": {
      "windows": [
        "F5"
      ]
    },
    "category": "Мониторинг",
    "popularity": 85
  },
  {
    "id": "ps-autocomplete",
    "appId": "powershell",
    "title": "Автодополнение команд и путей файлов",
    "description": "Циклически подставляет подходящие имена командлетов, параметров и файлов",
    "keys": {
      "windows": [
        "Tab"
      ]
    },
    "category": "Набор команд",
    "popularity": 99
  },
  {
    "id": "ps-clear-screen",
    "appId": "powershell",
    "title": "Очистить экран терминала",
    "description": "Очищает видимую область консоли от предыдущего вывода (Clear-Host)",
    "keys": {
      "windows": [
        "Ctrl",
        "L"
      ]
    },
    "category": "Интерфейс",
    "popularity": 94
  },
  {
    "id": "ps-bsearch",
    "appId": "powershell",
    "title": "Поиск по истории команд (Reverse Search)",
    "description": "Интерактивный поиск ранее выполненной команды по ключевому слову в PSReadLine",
    "keys": {
      "windows": [
        "Ctrl",
        "R"
      ]
    },
    "category": "Навигация и история",
    "popularity": 96
  },
  {
    "id": "ps-interrupt",
    "appId": "powershell",
    "title": "Прервать выполнение текущей команды/скрипта",
    "description": "Посылает сигнал остановки выполняющемуся процессу или бесконечному циклу",
    "keys": {
      "windows": [
        "Ctrl",
        "C"
      ]
    },
    "category": "Управление",
    "popularity": 98
  },
  {
    "id": "ps-history-gui",
    "appId": "powershell",
    "title": "Окно графической истории команд",
    "description": "Выводит всплывающее диалоговое окно со списком всех команд текущей сессии",
    "keys": {
      "windows": [
        "F7"
      ]
    },
    "category": "Навигация и история",
    "popularity": 90
  },
  {
    "id": "cmd-autocomplete",
    "appId": "cmd",
    "title": "Автодополнение пути к файлу/папке",
    "description": "Автоматически дописывает имя файла или каталога в командной строке",
    "keys": {
      "windows": [
        "Tab"
      ]
    },
    "category": "Набор команд",
    "popularity": 96
  },
  {
    "id": "cmd-repeat-last",
    "appId": "cmd",
    "title": "Повторить предыдущую команду целиком",
    "description": "Вставляет последнюю выполненную команду из буфера истории",
    "keys": {
      "windows": [
        "F3"
      ]
    },
    "category": "История",
    "popularity": 92
  },
  {
    "id": "cmd-history-menu",
    "appId": "cmd",
    "title": "Всплывающее меню истории команд",
    "description": "Открывает список последних команд консоли для выбора стрелками",
    "keys": {
      "windows": [
        "F7"
      ]
    },
    "category": "История",
    "popularity": 93
  },
  {
    "id": "cmd-interrupt",
    "appId": "cmd",
    "title": "Прервать выполнение пакетного файла или команды",
    "description": "Останавливает пинг, трассировку или исполняемый batch-скрипт",
    "keys": {
      "windows": [
        "Ctrl",
        "C"
      ]
    },
    "category": "Управление",
    "popularity": 97
  },
  {
    "id": "wt-new-tab",
    "appId": "winterminal",
    "title": "Открыть новую вкладку профиля по умолчанию",
    "description": "Создает новую вкладку терминала (PowerShell или WSL)",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "T"
      ]
    },
    "category": "Вкладки",
    "popularity": 97
  },
  {
    "id": "wt-close-tab",
    "appId": "winterminal",
    "title": "Закрыть текущую вкладку или панель",
    "description": "Закрывает активную вкладку терминала",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "W"
      ]
    },
    "category": "Вкладки",
    "popularity": 94
  },
  {
    "id": "wt-split-pane",
    "appId": "winterminal",
    "title": "Разделить панель пополам (Split Pane)",
    "description": "Автоматически делит текущую вкладку на две параллельные консольные панели",
    "keys": {
      "windows": [
        "Alt",
        "Shift",
        "D"
      ]
    },
    "category": "Панели",
    "popularity": 95
  },
  {
    "id": "wt-search",
    "appId": "winterminal",
    "title": "Поиск текста в выводе консоли",
    "description": "Открывает строку поиска по логам и результатам команд терминала",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "F"
      ]
    },
    "category": "Навигация",
    "popularity": 91
  },
  {
    "id": "wt-switch-tab",
    "appId": "winterminal",
    "title": "Переключение на вкладку по номеру",
    "description": "Мгновенный переход на вкладку 1–9",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "1..9"
      ]
    },
    "category": "Вкладки",
    "popularity": 89
  },
  {
    "id": "putty-paste",
    "appId": "putty",
    "title": "Вставить текст из буфера обмена",
    "description": "Вставляет скопированную команду или ключ в сессию SSH",
    "keys": {
      "windows": [
        "Shift",
        "Insert"
      ]
    },
    "category": "Основные операции",
    "popularity": 98
  },
  {
    "id": "putty-copy",
    "appId": "putty",
    "title": "Копировать выделенный текст",
    "description": "Копирует выделенный фрагмент текста в системный буфер обмена",
    "keys": {
      "windows": [
        "Ctrl",
        "Insert"
      ]
    },
    "category": "Основные операции",
    "popularity": 94
  },
  {
    "id": "putty-clear",
    "appId": "putty",
    "title": "Очистить экран удаленного сервера",
    "description": "Очищает экран удаленной Linux-сессии (аналог команды reset/clear)",
    "keys": {
      "windows": [
        "Ctrl",
        "L"
      ]
    },
    "category": "Управление сессией",
    "popularity": 92
  },
  {
    "id": "putty-exit",
    "appId": "putty",
    "title": "Завершить текущую сессию (EOF / Logout)",
    "description": "Корректно закрывает активную SSH сессию и отключается от сервера",
    "keys": {
      "windows": [
        "Ctrl",
        "D"
      ]
    },
    "category": "Управление сессией",
    "popularity": 90
  },
  {
    "id": "winscp-copy-file",
    "appId": "winscp",
    "title": "Копировать файл между сервером и компьютером",
    "description": "Копирует выбранный файл или каталог на противоположную панель",
    "keys": {
      "windows": [
        "F5"
      ]
    },
    "category": "Файловые операции",
    "popularity": 97
  },
  {
    "id": "winscp-move-file",
    "appId": "winscp",
    "title": "Переместить файл на сервере / локально",
    "description": "Перемещает выбранный файл на противоположную панель",
    "keys": {
      "windows": [
        "F6"
      ]
    },
    "category": "Файловые операции",
    "popularity": 93
  },
  {
    "id": "winscp-mkdir",
    "appId": "winscp",
    "title": "Создать новый каталог",
    "description": "Создает новую папку на сервере или локальном компьютере",
    "keys": {
      "windows": [
        "F7"
      ]
    },
    "category": "Файловые операции",
    "popularity": 95
  },
  {
    "id": "winscp-sync",
    "appId": "winscp",
    "title": "Синхронизировать директории",
    "description": "Открывает диалог сравнения и синхронизации локальной и удаленной папок",
    "keys": {
      "windows": [
        "Ctrl",
        "R"
      ]
    },
    "category": "Синхронизация",
    "popularity": 91
  },
  {
    "id": "winscp-new-session",
    "appId": "winscp",
    "title": "Подключиться к новому сайту",
    "description": "Открывает окно диспетчера сайтов для нового SFTP/FTP подключения",
    "keys": {
      "windows": [
        "Ctrl",
        "N"
      ]
    },
    "category": "Подключение",
    "popularity": 92
  },
  {
    "id": "rdp-fullscreen",
    "appId": "rdp",
    "title": "Переключить полноэкранный режим",
    "description": "Переводит окно RDP-клиента между полноэкранным и оконным режимами",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "Break"
      ]
    },
    "category": "Управление экраном",
    "popularity": 98
  },
  {
    "id": "rdp-cad",
    "appId": "rdp",
    "title": "Аналог Ctrl+Alt+Del на удаленном ПК",
    "description": "Вызывает меню безопасности и блокировки на удаленном компьютере",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "End"
      ]
    },
    "category": "Системные команды",
    "popularity": 99
  },
  {
    "id": "rdp-app-switch",
    "appId": "rdp",
    "title": "Переключение окон на удаленном ПК",
    "description": "Аналог Alt+Tab для переключения запущенных программ на удаленном сервере",
    "keys": {
      "windows": [
        "Alt",
        "Page Up"
      ]
    },
    "category": "Навигация",
    "popularity": 93
  },
  {
    "id": "rdp-window-screenshot",
    "appId": "rdp",
    "title": "Снимок активного удаленного окна",
    "description": "Копирует снимок текущего окна удаленного рабочего стола в буфер",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "Plus (+)"
      ]
    },
    "category": "Снимок экрана",
    "popularity": 88
  },
  {
    "id": "sys-find-handle",
    "appId": "sysinternals",
    "title": "Найти занятый хэндл или DLL (Process Explorer)",
    "description": "Показывает, какой именно процесс держит и блокирует файл или папку",
    "keys": {
      "windows": [
        "Ctrl",
        "F"
      ]
    },
    "category": "Диагностика",
    "popularity": 99
  },
  {
    "id": "sys-pause-capture",
    "appId": "sysinternals",
    "title": "Приостановить захват событий (ProcMon / ProcExp)",
    "description": "Ставит сбор телеметрии или обновление мониторинга на паузу для анализа",
    "keys": {
      "windows": [
        "Ctrl",
        "E"
      ]
    },
    "category": "Управление захватом",
    "popularity": 95
  },
  {
    "id": "sys-clear-events",
    "appId": "sysinternals",
    "title": "Очистить список захваченных событий (ProcMon)",
    "description": "Мгновенно очищает накопленный буфер миллионов системных событий",
    "keys": {
      "windows": [
        "Ctrl",
        "X"
      ]
    },
    "category": "Управление захватом",
    "popularity": 92
  },
  {
    "id": "sys-lower-pane",
    "appId": "sysinternals",
    "title": "Показать нижнюю панель DLL / Handles (ProcExp)",
    "description": "Включает отображение потоков, открытых дескрипторов и подгруженных библиотек",
    "keys": {
      "windows": [
        "Ctrl",
        "H"
      ]
    },
    "category": "Интерфейс",
    "popularity": 90
  },
  {
    "id": "w11-snap-layouts",
    "appId": "win11",
    "title": "Макеты привязки окон Snap Layouts",
    "description": "Открывает меню расположения окон на экране: две колонки, три колонки или сетка 2x2",
    "keys": {
      "windows": [
        "Win",
        "Z"
      ]
    },
    "category": "Управление окнами",
    "popularity": 98
  },
  {
    "id": "w11-new-desktop",
    "appId": "win11",
    "title": "Создать новый виртуальный рабочий стол",
    "description": "Разделяет рабочие задачи и личные дела по изолированным рабочим столам",
    "keys": {
      "windows": [
        "Win",
        "Ctrl",
        "D"
      ]
    },
    "category": "Виртуальные столы",
    "popularity": 95
  },
  {
    "id": "w11-switch-desktop",
    "appId": "win11",
    "title": "Переключение между виртуальными рабочими столами",
    "description": "Быстрый переход влево или вправо между созданными пространствами",
    "keys": {
      "windows": [
        "Win",
        "Ctrl",
        "Left / Right"
      ]
    },
    "category": "Виртуальные столы",
    "popularity": 96
  },
  {
    "id": "w11-close-desktop",
    "appId": "win11",
    "title": "Закрыть текущий виртуальный рабочий стол",
    "description": "Все открытые окна перемещаются на соседний рабочий стол",
    "keys": {
      "windows": [
        "Win",
        "Ctrl",
        "F4"
      ]
    },
    "category": "Виртуальные столы",
    "popularity": 91
  },
  {
    "id": "w10-task-view",
    "appId": "win10",
    "title": "Представление задач (Task View)",
    "description": "Показывает миниатюры всех запущенных приложений и виртуальные столы",
    "keys": {
      "windows": [
        "Win",
        "Tab"
      ]
    },
    "category": "Навигация и многозадачность",
    "popularity": 97
  },
  {
    "id": "w10-snap-left-right",
    "appId": "win10",
    "title": "Привязка активного окна к левой или правой половине экрана",
    "description": "Позволяет быстро разделить монитор пополам для параллельной работы в двух программах",
    "keys": {
      "windows": [
        "Win",
        "Left / Right"
      ]
    },
    "category": "Управление окнами",
    "popularity": 98
  },
  {
    "id": "exp-up-folder",
    "appId": "explorer",
    "title": "Подняться на один уровень папок вверх",
    "description": "Переход в родительскую директорию",
    "keys": {
      "windows": [
        "Alt",
        "Up"
      ]
    },
    "category": "Навигация",
    "popularity": 97
  },
  {
    "id": "exp-preview-pane",
    "appId": "explorer",
    "title": "Панель предварительного просмотра файлов (Preview Pane)",
    "description": "Показывает содержимое PDF, Word, Excel и картинок справа без запуска программ",
    "keys": {
      "windows": [
        "Alt",
        "P"
      ]
    },
    "category": "Интерфейс",
    "popularity": 95
  },
  {
    "id": "exp-permanent-delete",
    "appId": "explorer",
    "title": "Удалить файл навсегда (минуя Корзину)",
    "description": "Окончательное удаление без заполнения корзины",
    "keys": {
      "windows": [
        "Shift",
        "Delete"
      ]
    },
    "category": "Файловые операции",
    "popularity": 95
  },
  {
    "id": "tm-launch-task",
    "appId": "taskmgr",
    "title": "Запустить новую задачу (Диалог создания процесса)",
    "description": "Позволяет запустить explorer.exe, cmd или powershell с правами администратора",
    "keys": {
      "windows": [
        "Alt",
        "N"
      ]
    },
    "category": "Процессы",
    "popularity": 96
  },
  {
    "id": "tm-end-process",
    "appId": "taskmgr",
    "title": "Завершить выбранный зависший процесс",
    "description": "Принудительно снимает зависшее приложение (End Task)",
    "keys": {
      "windows": [
        "Delete"
      ]
    },
    "category": "Процессы",
    "popularity": 98
  },
  {
    "id": "tm-refresh-metrics",
    "appId": "taskmgr",
    "title": "Принудительно обновить метрики CPU, RAM и диска",
    "description": "Мгновенно обновляет показания загрузки ресурсов в реальном времени",
    "keys": {
      "windows": [
        "F5"
      ]
    },
    "category": "Мониторинг",
    "popularity": 92
  },
  {
    "id": "ps-reverse-search",
    "appId": "powershell",
    "title": "Интерактивный реверсивный поиск по истории команд (PSReadLine)",
    "description": "Позволяет найти сложную команду по части текста (например, Get-ADUser или docker)",
    "keys": {
      "windows": [
        "Ctrl",
        "R"
      ]
    },
    "category": "История и поиск",
    "popularity": 99
  },
  {
    "id": "ps-param-menu",
    "appId": "powershell",
    "title": "Интерактивное меню параметров командлета (MenuComplete)",
    "description": "Отображает список всех доступных параметров с возможностью выбора стрелками",
    "keys": {
      "windows": [
        "Ctrl",
        "Space"
      ]
    },
    "category": "Автодополнение",
    "popularity": 97
  },
  {
    "id": "ps-abort-script",
    "appId": "powershell",
    "title": "Прервать выполнение текущей команды или скрипта",
    "description": "Останавливает бесконечный цикл или длительный опрос сети",
    "keys": {
      "windows": [
        "Ctrl",
        "C"
      ]
    },
    "category": "Управление выполнением",
    "popularity": 99
  },
  {
    "id": "cmd-history-window",
    "appId": "cmd",
    "title": "Окно истории выполненных команд с выбором по номеру",
    "description": "Всплывающий графический список всех ранее введенных инструкций",
    "keys": {
      "windows": [
        "F7"
      ]
    },
    "category": "История команд",
    "popularity": 97
  },
  {
    "id": "cmd-clear-line",
    "appId": "cmd",
    "title": "Очистить текущую строку ввода",
    "description": "Сбрасывает ошибочно набранную строку",
    "keys": {
      "windows": [
        "Esc"
      ]
    },
    "category": "Редактирование",
    "popularity": 94
  },
  {
    "id": "wt-split-pane-h",
    "appId": "winterminal",
    "title": "Разделить текущую панель по горизонтали (Split Pane)",
    "description": "Создает вторую консоль рядом в том же окне",
    "keys": {
      "windows": [
        "Alt",
        "Shift",
        "D"
      ]
    },
    "category": "Панели и вкладки",
    "popularity": 98
  },
  {
    "id": "wt-split-pane-v",
    "appId": "winterminal",
    "title": "Разделить текущую панель по вертикали",
    "description": "Создает дополнительную консоль снизу",
    "keys": {
      "windows": [
        "Alt",
        "Shift",
        "+"
      ]
    },
    "category": "Панели и вкладки",
    "popularity": 97
  },
  {
    "id": "wt-command-palette",
    "appId": "winterminal",
    "title": "Палитра команд Terminal Command Palette",
    "description": "Поиск и запуск любых действий терминала по названию",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "P"
      ]
    },
    "category": "Управление",
    "popularity": 96
  },
  {
    "id": "wt-new-tab-profile",
    "appId": "winterminal",
    "title": "Открыть вкладку профиля по номеру",
    "description": "Быстрый запуск PowerShell (1), CMD (2) или WSL Ubuntu (3)",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "1...9"
      ]
    },
    "category": "Панели и вкладки",
    "popularity": 95
  },
  {
    "id": "putty-suspend",
    "appId": "putty",
    "title": "Приостановить процесс и отправить в фон (SIGTSTP)",
    "description": "Возвращает шелл на удаленном сервере без закрытия программы (разбудить командой fg)",
    "keys": {
      "windows": [
        "Ctrl",
        "Z"
      ]
    },
    "category": "Управление сессией",
    "popularity": 95
  },
  {
    "id": "putty-end-session",
    "appId": "putty",
    "title": "Завершить сессию терминала (EOF / Logout)",
    "description": "Корректно закрывает SSH-подключение к серверу",
    "keys": {
      "windows": [
        "Ctrl",
        "D"
      ]
    },
    "category": "Управление сессией",
    "popularity": 97
  },
  {
    "id": "putty-line-start-end",
    "appId": "putty",
    "title": "Переход в начало / конец строки на сервере",
    "description": "Мгновенное перемещение курсора в командной строке Linux",
    "keys": {
      "windows": [
        "Ctrl",
        "A / Ctrl",
        "E"
      ]
    },
    "category": "Навигация в шелле",
    "popularity": 96
  },
  {
    "id": "wscp-sync-dirs",
    "appId": "winscp",
    "title": "Открыть окно синхронизации директорий",
    "description": "Автоматически сравнивает файлы по дате и размеру и копирует только изменения",
    "keys": {
      "windows": [
        "Ctrl",
        "U"
      ]
    },
    "category": "Синхронизация",
    "popularity": 97
  },
  {
    "id": "wscp-edit-file",
    "appId": "winscp",
    "title": "Редактировать удаленный файл конфигурации (nginx, conf, php)",
    "description": "Открывает файл во встроенном или настроенном внешнем редакторе (VS Code / Notepad++)",
    "keys": {
      "windows": [
        "F4"
      ]
    },
    "category": "Работа с файлами",
    "popularity": 98
  },
  {
    "id": "wscp-open-terminal",
    "appId": "winscp",
    "title": "Открыть SSH-терминал в текущем каталоге",
    "description": "Запускает связанную консоль PuTTY прямо в открытой папке сервера",
    "keys": {
      "windows": [
        "Ctrl",
        "T"
      ]
    },
    "category": "Инструменты",
    "popularity": 94
  },
  {
    "id": "rdp-toggle-fullscreen",
    "appId": "rdp",
    "title": "Переключить полноэкранный / оконный режим сессии",
    "description": "Позволяет освободить локальную панель задач без отключения от удаленного сервера",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "Break"
      ]
    },
    "category": "Управление окном сессии",
    "popularity": 98
  },
  {
    "id": "rdp-security-screen",
    "appId": "rdp",
    "title": "Окно безопасности Windows на удаленном сервере",
    "description": "Эквивалент Ctrl+Alt+Del для удаленного ПК (смена пароля, блокировка, диспетчер задач)",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "End"
      ]
    },
    "category": "Безопасность сессии",
    "popularity": 99
  },
  {
    "id": "rdp-cycle-apps",
    "appId": "rdp",
    "title": "Переключение между приложениями на удаленном рабочем столе",
    "description": "Эквивалент Alt+Tab внутри удаленной сессии",
    "keys": {
      "windows": [
        "Alt",
        "PageUp / PageDown"
      ]
    },
    "category": "Навигация в сессии",
    "popularity": 96
  },
  {
    "id": "sys-freeze-refresh",
    "appId": "sysinternals",
    "title": "Поставить обновление процессов на паузу",
    "description": "Замораживает список в Process Explorer, чтобы успеть кликнуть по кратковременному процессу",
    "keys": {
      "windows": [
        "Пробел"
      ]
    },
    "category": "Process Explorer",
    "popularity": 96
  },
  {
    "id": "sys-capture-events",
    "appId": "sysinternals",
    "title": "Старт / пауза захвата событий файловой системы и реестра (ProcMon)",
    "description": "Управление мониторингом активности приложений в Process Monitor",
    "keys": {
      "windows": [
        "Ctrl",
        "E"
      ]
    },
    "category": "Process Monitor",
    "popularity": 97
  },
  {
    "id": "w10-task-view-tl",
    "appId": "win10",
    "title": "Представление задач (Task View)",
    "description": "Показывает все активные окна и историю открытых файлов",
    "keys": {
      "windows": [
        "Win",
        "Tab"
      ]
    },
    "category": "Виртуальные столы",
    "popularity": 96
  },
  {
    "id": "w10-new-desktop",
    "appId": "win10",
    "title": "Создать виртуальный рабочий стол",
    "description": "Создает новое изолированное рабочее пространство",
    "keys": {
      "windows": [
        "Win",
        "Ctrl",
        "D"
      ]
    },
    "category": "Виртуальные столы",
    "popularity": 95
  },
  {
    "id": "w10-switch-desktop",
    "appId": "win10",
    "title": "Переключение между виртуальными столами",
    "description": "Быстрый переход к соседнему рабочему столу влево или вправо",
    "keys": {
      "windows": [
        "Win",
        "Ctrl",
        "Left / Right"
      ]
    },
    "category": "Виртуальные столы",
    "popularity": 94
  },
  {
    "id": "w10-close-desktop",
    "appId": "win10",
    "title": "Закрыть текущий виртуальный рабочий стол",
    "description": "Закрывает рабочий стол, перенося окна на соседний",
    "keys": {
      "windows": [
        "Win",
        "Ctrl",
        "F4"
      ]
    },
    "category": "Виртуальные столы",
    "popularity": 90
  },
  {
    "id": "w10-snap-left",
    "appId": "win10",
    "title": "Привязка окна к левой половине экрана",
    "description": "Закрепляет активное окно ровно на 50% экрана слева",
    "keys": {
      "windows": [
        "Win",
        "Left"
      ]
    },
    "category": "Управление окнами",
    "popularity": 96
  },
  {
    "id": "w10-snap-right",
    "appId": "win10",
    "title": "Привязка окна к правой половине экрана",
    "description": "Закрепляет активное окно ровно на 50% экрана справа",
    "keys": {
      "windows": [
        "Win",
        "Right"
      ]
    },
    "category": "Управление окнами",
    "popularity": 96
  },
  {
    "id": "w10-maximize",
    "appId": "win10",
    "title": "Развернуть окно на весь экран",
    "description": "Максимизирует активное окно",
    "keys": {
      "windows": [
        "Win",
        "Up"
      ]
    },
    "category": "Управление окнами",
    "popularity": 97
  },
  {
    "id": "w10-restore-minimize",
    "appId": "win10",
    "title": "Восстановить размер или свернуть окно",
    "description": "Возвращает исходный размер окна или сворачивает его в панель",
    "keys": {
      "windows": [
        "Win",
        "Down"
      ]
    },
    "category": "Управление окнами",
    "popularity": 94
  },
  {
    "id": "w10-move-monitor",
    "appId": "win10",
    "title": "Переместить окно на другой монитор",
    "description": "Мгновенно переносит окно на левый или правый экран в многомониторной конфигурации",
    "keys": {
      "windows": [
        "Win",
        "Shift",
        "Left / Right"
      ]
    },
    "category": "Управление окнами",
    "popularity": 93
  },
  {
    "id": "w10-action-center",
    "appId": "win10",
    "title": "Центр уведомлений (Action Center)",
    "description": "Открывает боковую панель уведомлений и быстрых переключателей (Wi-Fi, ночной свет)",
    "keys": {
      "windows": [
        "Win",
        "A"
      ]
    },
    "category": "Система и навигация",
    "popularity": 93
  },
  {
    "id": "w10-search-bar",
    "appId": "win10",
    "title": "Глобальный поиск Windows",
    "description": "Открывает панель поиска по файлам, программам и настройкам системы",
    "keys": {
      "windows": [
        "Win",
        "S"
      ]
    },
    "category": "Система и навигация",
    "popularity": 95
  },
  {
    "id": "w10-run-dialog",
    "appId": "win10",
    "title": "Диалоговое окно «Выполнить»",
    "description": "Быстрый запуск утилит, команд, реестра и путей",
    "keys": {
      "windows": [
        "Win",
        "R"
      ]
    },
    "category": "Система и навигация",
    "popularity": 97
  },
  {
    "id": "w10-file-explorer",
    "appId": "win10",
    "title": "Открыть Проводник (File Explorer)",
    "description": "Запускает новое окно проводника файлов",
    "keys": {
      "windows": [
        "Win",
        "E"
      ]
    },
    "category": "Система и навигация",
    "popularity": 98
  },
  {
    "id": "w10-lock-pc",
    "appId": "win10",
    "title": "Заблокировать компьютер",
    "description": "Мгновенно блокирует экран и защищает данные при отходе от рабочего места",
    "keys": {
      "windows": [
        "Win",
        "L"
      ]
    },
    "category": "Система и навигация",
    "popularity": 99
  },
  {
    "id": "w10-project-screen",
    "appId": "win10",
    "title": "Проецирование на второй экран или проектор",
    "description": "Выбор режима: только экран ПК, повторение, расширение или только второй экран",
    "keys": {
      "windows": [
        "Win",
        "P"
      ]
    },
    "category": "Система и навигация",
    "popularity": 91
  },
  {
    "id": "w10-connect-device",
    "appId": "win10",
    "title": "Панель подключения беспроводных экранов и аудио",
    "description": "Быстрый поиск Miracast и Bluetooth дисплеев",
    "keys": {
      "windows": [
        "Win",
        "K"
      ]
    },
    "category": "Система и навигация",
    "popularity": 85
  },
  {
    "id": "w10-game-bar",
    "appId": "win10",
    "title": "Игровая панель Xbox Game Bar",
    "description": "Запись видео с экрана, мониторинг FPS, CPU и звуковых каналов",
    "keys": {
      "windows": [
        "Win",
        "G"
      ]
    },
    "category": "Система и навигация",
    "popularity": 88
  },
  {
    "id": "w10-emoji-panel",
    "appId": "win10",
    "title": "Панель эмодзи и спецсимволов",
    "description": "Вставка смайлов, знаков валют, математических символов и каомодзи",
    "keys": {
      "windows": [
        "Win",
        "."
      ]
    },
    "category": "Основные операции",
    "popularity": 92
  },
  {
    "id": "w10-shake-minimize",
    "appId": "win10",
    "title": "Свернуть все фоновые окна (Aero Shake)",
    "description": "Оставляет на экране только текущее окно, сворачивая остальные",
    "keys": {
      "windows": [
        "Win",
        "Home"
      ]
    },
    "category": "Управление окнами",
    "popularity": 89
  },
  {
    "id": "w10-restart-gpu",
    "appId": "win10",
    "title": "Перезапуск видеодрайвера",
    "description": "Экстренный перезапуск видеодрайвера при зависании экрана или артефактах",
    "keys": {
      "windows": [
        "Win",
        "Ctrl",
        "Shift",
        "B"
      ]
    },
    "category": "Система и навигация",
    "popularity": 92
  },
  {
    "id": "w10-task-mgr-direct",
    "appId": "win10",
    "title": "Диспетчер задач напрямую",
    "description": "Запуск Диспетчера задач без промежуточного экрана безопасности",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "Esc"
      ]
    },
    "category": "Система и навигация",
    "popularity": 99
  },
  {
    "id": "w10-app-switch",
    "appId": "win10",
    "title": "Переключение между окнами (Alt + Tab)",
    "description": "Быстрое переключение между открытыми приложениями",
    "keys": {
      "windows": [
        "Alt",
        "Tab"
      ]
    },
    "category": "Управление окнами",
    "popularity": 99
  },
  {
    "id": "w10-zoom-magnifier",
    "appId": "win10",
    "title": "Включить экранную лупу",
    "description": "Увеличивает масштаб отображения экрана",
    "keys": {
      "windows": [
        "Win",
        "+"
      ]
    },
    "category": "Специальные возможности",
    "popularity": 84
  },
  {
    "id": "cmd-cls",
    "appId": "cmd",
    "title": "Очистить экран консоли",
    "description": "Очищает видимую область терминала",
    "keys": {
      "windows": [
        "CLS"
      ]
    },
    "category": "Команды",
    "popularity": 98
  },
  {
    "id": "cmd-tab-complete",
    "appId": "cmd",
    "title": "Автодополнение пути файла или папки",
    "description": "Автоматически подставляет имена файлов и директорий",
    "keys": {
      "windows": [
        "Tab"
      ]
    },
    "category": "Навигация",
    "popularity": 97
  },
  {
    "id": "cmd-cancel-proc",
    "appId": "cmd",
    "title": "Прервать текущую команду (SIGINT)",
    "description": "Останавливает выполнение бесконечного пинга, скрипта или процесса",
    "keys": {
      "windows": [
        "Ctrl",
        "C"
      ]
    },
    "category": "Управление",
    "popularity": 99
  },
  {
    "id": "cmd-pause-output",
    "appId": "cmd",
    "title": "Приостановить вывод текста",
    "description": "Останавливает прокрутку длинного лога",
    "keys": {
      "windows": [
        "Pause / Break"
      ]
    },
    "category": "Управление",
    "popularity": 85
  },
  {
    "id": "cmd-fullscreen",
    "appId": "cmd",
    "title": "Полноэкранный режим",
    "description": "Переключает окно командной строки во весь экран",
    "keys": {
      "windows": [
        "Alt",
        "Enter"
      ]
    },
    "category": "Интерфейс",
    "popularity": 89
  },
  {
    "id": "cmd-history-f7",
    "appId": "cmd",
    "title": "Окно истории выполненных команд",
    "description": "Показывает нумерованный список последних введенных команд",
    "keys": {
      "windows": [
        "F7"
      ]
    },
    "category": "История",
    "popularity": 92
  },
  {
    "id": "cmd-repeat-f3",
    "appId": "cmd",
    "title": "Повторить последнюю команду",
    "description": "Вставляет в строку последнюю выполненную команду",
    "keys": {
      "windows": [
        "F3"
      ]
    },
    "category": "История",
    "popularity": 90
  },
  {
    "id": "sys-procexp-replace-tm",
    "appId": "sysinternals",
    "title": "Заменить стандартный Диспетчер задач",
    "description": "В Process Explorer: Options -> Replace Task Manager",
    "keys": {
      "windows": [
        "Options -> Replace Task Manager"
      ]
    },
    "category": "Настройки",
    "popularity": 95
  },
  {
    "id": "sys-procexp-find-handle",
    "appId": "sysinternals",
    "title": "Поиск дескриптора или DLL (Find Handle or DLL)",
    "description": "Находит процесс, который заблокировал файл или папку",
    "keys": {
      "windows": [
        "Ctrl",
        "F"
      ]
    },
    "category": "Диагностика",
    "popularity": 99
  },
  {
    "id": "sys-procexp-kill-tree",
    "appId": "sysinternals",
    "title": "Завершить дерево процессов (Kill Process Tree)",
    "description": "Уничтожает процесс вместе со всеми его дочерними процессами",
    "keys": {
      "windows": [
        "Shift",
        "Del"
      ]
    },
    "category": "Управление",
    "popularity": 96
  },
  {
    "id": "sys-procexp-verify-sig",
    "appId": "sysinternals",
    "title": "Проверка цифровых подписей (Verify Image Signatures)",
    "description": "Проверяет подлинность всех запущенных исполняемых файлов",
    "keys": {
      "windows": [
        "Options -> Verify Signatures"
      ]
    },
    "category": "Безопасность",
    "popularity": 92
  },
  {
    "id": "sys-procexp-virustotal",
    "appId": "sysinternals",
    "title": "Проверка процессов через VirusTotal",
    "description": "Отправляет хэши процессов в базу VirusTotal для выявления угроз",
    "keys": {
      "windows": [
        "Options -> VirusTotal Check"
      ]
    },
    "category": "Безопасность",
    "popularity": 97
  },
  {
    "id": "sys-autoruns-jump-entry",
    "appId": "sysinternals",
    "title": "Перейти к записи в Реестре (Jump to Entry)",
    "description": "В Autoruns: открывает раздел реестра с автозагрузкой",
    "keys": {
      "windows": [
        "Ctrl",
        "J"
      ]
    },
    "category": "Навигация",
    "popularity": 94
  },
  {
    "id": "sys-autoruns-filter",
    "appId": "sysinternals",
    "title": "Быстрый фильтр записей автозагрузки",
    "description": "Фильтрует службы, драйверы и задачи по имени",
    "keys": {
      "windows": [
        "Ctrl",
        "F"
      ]
    },
    "category": "Поиск",
    "popularity": 93
  },
  {
    "id": "sys-procmon-filter",
    "appId": "sysinternals",
    "title": "Настройка фильтров событий (Filter)",
    "description": "В Process Monitor: открывает окно сложных фильтров по процессам и путям",
    "keys": {
      "windows": [
        "Ctrl",
        "L"
      ]
    },
    "category": "Мониторинг",
    "popularity": 98
  },
  {
    "id": "sys-procmon-capture",
    "appId": "sysinternals",
    "title": "Включить / остановить перехват событий",
    "description": "Запуск и пауза записи активности реестра и диска",
    "keys": {
      "windows": [
        "Ctrl",
        "E"
      ]
    },
    "category": "Мониторинг",
    "popularity": 97
  },
  {
    "id": "putty-copy-selection",
    "appId": "putty",
    "title": "Копирование текста в буфер",
    "description": "В PuTTY выделение мышью автоматически копирует текст без нажатия клавиш",
    "keys": {
      "windows": [
        "Выделение мышью"
      ]
    },
    "category": "Буфер обмена",
    "popularity": 99
  },
  {
    "id": "putty-paste-text",
    "appId": "putty",
    "title": "Вставить текст из буфера",
    "description": "Вставляет текст в терминал PuTTY",
    "keys": {
      "windows": [
        "Правый клик или Shift + Insert"
      ]
    },
    "category": "Буфер обмена",
    "popularity": 99
  },
  {
    "id": "putty-sysmenu",
    "appId": "putty",
    "title": "Системное контекстное меню окна",
    "description": "Доступ к настройкам сессии Change Settings, дублированию и логам",
    "keys": {
      "windows": [
        "Alt",
        "Space"
      ]
    },
    "category": "Настройки",
    "popularity": 94
  },
  {
    "id": "putty-duplicate-session",
    "appId": "putty",
    "title": "Дублировать текущую SSH-сессию",
    "description": "Открывает новое окно с тем же хостом и параметрами",
    "keys": {
      "windows": [
        "Системное меню -> Duplicate Session"
      ]
    },
    "category": "Сессии",
    "popularity": 95
  },
  {
    "id": "putty-clear-scrollback",
    "appId": "putty",
    "title": "Очистить буфер прокрутки",
    "description": "Удаляет старую историю строк сессии для чистого экрана",
    "keys": {
      "windows": [
        "Системное меню -> Clear Scrollback"
      ]
    },
    "category": "Терминал",
    "popularity": 88
  },
  {
    "id": "putty-fullscreen-toggle",
    "appId": "putty",
    "title": "Полноэкранный режим терминала",
    "description": "Разворачивает консоль PuTTY без рамок окна",
    "keys": {
      "windows": [
        "Alt",
        "Enter"
      ]
    },
    "category": "Терминал",
    "popularity": 90
  },
  {
    "id": "putty-scroll-up-page",
    "appId": "putty",
    "title": "Прокрутка терминала вверх на страницу",
    "description": "Листает историю вывода команд вверх",
    "keys": {
      "windows": [
        "Shift",
        "Page Up"
      ]
    },
    "category": "Навигация",
    "popularity": 96
  },
  {
    "id": "putty-scroll-down-page",
    "appId": "putty",
    "title": "Прокрутка терминала вниз на страницу",
    "description": "Листает историю вывода команд вниз",
    "keys": {
      "windows": [
        "Shift",
        "Page Down"
      ]
    },
    "category": "Навигация",
    "popularity": 96
  },
  {
    "id": "winscp-switch-panels",
    "appId": "winscp",
    "title": "Переключение между локальной и удаленной панелью",
    "description": "Смена фокуса между файлами на ПК и на сервере",
    "keys": {
      "windows": [
        "Tab"
      ]
    },
    "category": "Навигация",
    "popularity": 99
  },
  {
    "id": "winscp-view-file",
    "appId": "winscp",
    "title": "Просмотр файла во встроенном вьювере",
    "description": "Быстрый просмотр содержимого без скачивания",
    "keys": {
      "windows": [
        "F3"
      ]
    },
    "category": "Файлы",
    "popularity": 96
  },
  {
    "id": "winscp-edit-remote",
    "appId": "winscp",
    "title": "Редактировать файл на сервере",
    "description": "Открывает удаленный файл во встроенном или внешнем редакторе",
    "keys": {
      "windows": [
        "F4"
      ]
    },
    "category": "Файлы",
    "popularity": 98
  },
  {
    "id": "winscp-copy-upload",
    "appId": "winscp",
    "title": "Копировать / Загрузить файл на сервер",
    "description": "Передает выделенные файлы на удаленный сервер",
    "keys": {
      "windows": [
        "F5"
      ]
    },
    "category": "Файлы",
    "popularity": 99
  },
  {
    "id": "winscp-move-remote",
    "appId": "winscp",
    "title": "Переместить файл на сервере",
    "description": "Перемещение или переименование файла",
    "keys": {
      "windows": [
        "F6"
      ]
    },
    "category": "Файлы",
    "popularity": 94
  },
  {
    "id": "winscp-new-folder",
    "appId": "winscp",
    "title": "Создать новую папку на сервере",
    "description": "Создает удаленный каталог",
    "keys": {
      "windows": [
        "F7"
      ]
    },
    "category": "Файлы",
    "popularity": 97
  },
  {
    "id": "winscp-delete-remote",
    "appId": "winscp",
    "title": "Удалить файл на сервере",
    "description": "Удаление выделенных файлов с удаленного сервера",
    "keys": {
      "windows": [
        "F8 / Del"
      ]
    },
    "category": "Файлы",
    "popularity": 95
  },
  {
    "id": "winscp-sync-dialog",
    "appId": "winscp",
    "title": "Синхронизация каталогов (Synchronize)",
    "description": "Сравнивает локальную и удаленную директории и передает измененные файлы",
    "keys": {
      "windows": [
        "Ctrl",
        "S"
      ]
    },
    "category": "Синхронизация",
    "popularity": 97
  },
  {
    "id": "winscp-open-putty",
    "appId": "winscp",
    "title": "Открыть PuTTY SSH-терминал для текущей сессии",
    "description": "Мгновенно запускает консоль PuTTY с теми же учетными данными",
    "keys": {
      "windows": [
        "Ctrl",
        "P"
      ]
    },
    "category": "Терминал",
    "popularity": 98
  },
  {
    "id": "rdp-cad-remote",
    "appId": "rdp",
    "title": "Передать Ctrl + Alt + Del на удаленный ПК",
    "description": "Открывает экран безопасности, блокировки и диспетчера задач на удаленном сервере",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "End"
      ]
    },
    "category": "Система",
    "popularity": 99
  },
  {
    "id": "rdp-switch-remote-apps",
    "appId": "rdp",
    "title": "Переключение окон внутри удаленного сеанса (Alt + Tab)",
    "description": "Переключает окна на удаленном компьютере",
    "keys": {
      "windows": [
        "Alt",
        "Page Up"
      ]
    },
    "category": "Навигация",
    "popularity": 95
  },
  {
    "id": "rdp-switch-remote-reverse",
    "appId": "rdp",
    "title": "Обратное переключение окон на удаленном сервере",
    "description": "Переключает окна в обратном порядке",
    "keys": {
      "windows": [
        "Alt",
        "Page Down"
      ]
    },
    "category": "Навигация",
    "popularity": 91
  },
  {
    "id": "rdp-remote-taskmgr",
    "appId": "rdp",
    "title": "Открыть Диспетчер задач на удаленном сервере",
    "description": "Запуск диспетчера задач напрямую на сервере",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "Esc"
      ]
    },
    "category": "Система",
    "popularity": 97
  },
  {
    "id": "rdp-remote-start",
    "appId": "rdp",
    "title": "Открыть меню Пуск на удаленном сервере",
    "description": "Передает нажатие клавиши Windows в удаленный сеанс",
    "keys": {
      "windows": [
        "Alt",
        "Home"
      ]
    },
    "category": "Система",
    "popularity": 94
  },
  {
    "id": "rdp-window-menu",
    "appId": "rdp",
    "title": "Окно управления сеансом RDP",
    "description": "Показывает панель подключения и меню завершения сеанса",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "Left / Right"
      ]
    },
    "category": "Управление экраном",
    "popularity": 89
  },
  {
    "id": "wt-split-vertical",
    "appId": "winterminal",
    "title": "Разделить панель по вертикали (Split Pane)",
    "description": "Открывает вторую параллельную консоль рядом",
    "keys": {
      "windows": [
        "Alt",
        "Shift",
        "+"
      ]
    },
    "category": "Панели",
    "popularity": 97
  },
  {
    "id": "wt-split-horizontal",
    "appId": "winterminal",
    "title": "Разделить панель по горизонтали",
    "description": "Делит окно консоли пополам снизу",
    "keys": {
      "windows": [
        "Alt",
        "Shift",
        "-"
      ]
    },
    "category": "Панели",
    "popularity": 96
  },
  {
    "id": "wt-close-pane",
    "appId": "winterminal",
    "title": "Закрыть активную разделенную панель",
    "description": "Закрывает текущую субпанель",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "W"
      ]
    },
    "category": "Панели",
    "popularity": 95
  },
  {
    "id": "wt-navigate-pane",
    "appId": "winterminal",
    "title": "Перемещение фокуса между разделенными панелями",
    "description": "Переход к соседней панели со стрелками",
    "keys": {
      "windows": [
        "Alt",
        "Стрелки"
      ]
    },
    "category": "Панели",
    "popularity": 94
  },
  {
    "id": "wt-duplicate-tab",
    "appId": "winterminal",
    "title": "Дублировать текущую вкладку с тем же путем",
    "description": "Создает копию сессии в той же рабочей папке",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "D"
      ]
    },
    "category": "Вкладки",
    "popularity": 93
  },
  {
    "id": "wt-settings-json",
    "appId": "winterminal",
    "title": "Параметры Windows Terminal",
    "description": "Открывает графический интерфейс настроек или settings.json",
    "keys": {
      "windows": [
        "Ctrl",
        ","
      ]
    },
    "category": "Настройки",
    "popularity": 95
  },
  {
    "id": "exp-tabs-new",
    "appId": "explorer",
    "title": "Новая вкладка в Проводнике",
    "description": "Открывает дополнительную вкладку для работы с файлами",
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
    "id": "exp-tabs-close",
    "appId": "explorer",
    "title": "Закрыть текущую вкладку Проводника",
    "description": "Закрывает активную вкладку файлового менеджера",
    "keys": {
      "windows": [
        "Ctrl",
        "W"
      ]
    },
    "category": "Вкладки",
    "popularity": 96
  },
  {
    "id": "exp-duplicate-tab",
    "appId": "explorer",
    "title": "Дублировать вкладку",
    "description": "Открывает ту же папку в новой вкладке",
    "keys": {
      "windows": [
        "Ctrl",
        "K"
      ]
    },
    "category": "Вкладки",
    "popularity": 91
  },
  {
    "id": "exp-focus-address",
    "appId": "explorer",
    "title": "Фокус в адресную строку пути (Path Bar)",
    "description": "Выделяет путь для быстрого копирования или перехода к папке",
    "keys": {
      "windows": [
        "Alt",
        "D / Ctrl + L"
      ]
    },
    "category": "Навигация",
    "popularity": 98
  },
  {
    "id": "exp-focus-search",
    "appId": "explorer",
    "title": "Фокус в строку поиска по текущей папке",
    "description": "Активирует фильтрацию файлов по имени и маске",
    "keys": {
      "windows": [
        "Ctrl",
        "F / F3"
      ]
    },
    "category": "Поиск",
    "popularity": 96
  },
  {
    "id": "exp-go-up",
    "appId": "explorer",
    "title": "Перейти на один уровень вверх к родительской папке",
    "description": "Поднимается к папке выше в дереве каталогов",
    "keys": {
      "windows": [
        "Alt",
        "Up"
      ]
    },
    "category": "Навигация",
    "popularity": 97
  },
  {
    "id": "exp-details-pane",
    "appId": "explorer",
    "title": "Панель сведений о файле (размер, дата, метаданные)",
    "description": "Показывает технические свойства выделенного файла",
    "keys": {
      "windows": [
        "Alt",
        "Shift",
        "P"
      ]
    },
    "category": "Вид",
    "popularity": 90
  }
];

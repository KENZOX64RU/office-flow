# -*- coding: utf-8 -*-
"""
Helper script to output structured JSON data for each category.
"""
import json

SYSTEM_SHORTCUTS_ADDITIONS = [
    # Windows 10 additions
    {"id": "w10-task-view-tl", "appId": "win10", "title": "Представление задач (Task View)", "description": "Показывает все активные окна и историю открытых файлов", "keys": ["Win", "Tab"], "category": "Виртуальные столы", "popularity": 96},
    {"id": "w10-new-desktop", "appId": "win10", "title": "Создать виртуальный рабочий стол", "description": "Создает новое изолированное рабочее пространство", "keys": ["Win", "Ctrl", "D"], "category": "Виртуальные столы", "popularity": 95},
    {"id": "w10-switch-desktop", "appId": "win10", "title": "Переключение между виртуальными столами", "description": "Быстрый переход к соседнему рабочему столу влево или вправо", "keys": ["Win", "Ctrl", "Left / Right"], "category": "Виртуальные столы", "popularity": 94},
    {"id": "w10-close-desktop", "appId": "win10", "title": "Закрыть текущий виртуальный рабочий стол", "description": "Закрывает рабочий стол, перенося окна на соседний", "keys": ["Win", "Ctrl", "F4"], "category": "Виртуальные столы", "popularity": 90},
    {"id": "w10-snap-left", "appId": "win10", "title": "Привязка окна к левой половине экрана", "description": "Закрепляет активное окно ровно на 50% экрана слева", "keys": ["Win", "Left"], "category": "Управление окнами", "popularity": 96},
    {"id": "w10-snap-right", "appId": "win10", "title": "Привязка окна к правой половине экрана", "description": "Закрепляет активное окно ровно на 50% экрана справа", "keys": ["Win", "Right"], "category": "Управление окнами", "popularity": 96},
    {"id": "w10-maximize", "appId": "win10", "title": "Развернуть окно на весь экран", "description": "Максимизирует активное окно", "keys": ["Win", "Up"], "category": "Управление окнами", "popularity": 97},
    {"id": "w10-restore-minimize", "appId": "win10", "title": "Восстановить размер или свернуть окно", "description": "Возвращает исходный размер окна или сворачивает его в панель", "keys": ["Win", "Down"], "category": "Управление окнами", "popularity": 94},
    {"id": "w10-move-monitor", "appId": "win10", "title": "Переместить окно на другой монитор", "description": "Мгновенно переносит окно на левый или правый экран в многомониторной конфигурации", "keys": ["Win", "Shift", "Left / Right"], "category": "Управление окнами", "popularity": 93},
    {"id": "w10-action-center", "appId": "win10", "title": "Центр уведомлений (Action Center)", "description": "Открывает боковую панель уведомлений и быстрых переключателей (Wi-Fi, ночной свет)", "keys": ["Win", "A"], "category": "Система и навигация", "popularity": 93},
    {"id": "w10-search-bar", "appId": "win10", "title": "Глобальный поиск Windows", "description": "Открывает панель поиска по файлам, программам и настройкам системы", "keys": ["Win", "S"], "category": "Система и навигация", "popularity": 95},
    {"id": "w10-run-dialog", "appId": "win10", "title": "Диалоговое окно «Выполнить»", "description": "Быстрый запуск утилит, команд, реестра и путей", "keys": ["Win", "R"], "category": "Система и навигация", "popularity": 97},
    {"id": "w10-file-explorer", "appId": "win10", "title": "Открыть Проводник (File Explorer)", "description": "Запускает новое окно проводника файлов", "keys": ["Win", "E"], "category": "Система и навигация", "popularity": 98},
    {"id": "w10-lock-pc", "appId": "win10", "title": "Заблокировать компьютер", "description": "Мгновенно блокирует экран и защищает данные при отходе от рабочего места", "keys": ["Win", "L"], "category": "Система и навигация", "popularity": 99},
    {"id": "w10-project-screen", "appId": "win10", "title": "Проецирование на второй экран или проектор", "description": "Выбор режима: только экран ПК, повторение, расширение или только второй экран", "keys": ["Win", "P"], "category": "Система и навигация", "popularity": 91},
    {"id": "w10-connect-device", "appId": "win10", "title": "Панель подключения беспроводных экранов и аудио", "description": "Быстрый поиск Miracast и Bluetooth дисплеев", "keys": ["Win", "K"], "category": "Система и навигация", "popularity": 85},
    {"id": "w10-game-bar", "appId": "win10", "title": "Игровая панель Xbox Game Bar", "description": "Запись видео с экрана, мониторинг FPS, CPU и звуковых каналов", "keys": ["Win", "G"], "category": "Система и навигация", "popularity": 88},
    {"id": "w10-emoji-panel", "appId": "win10", "title": "Панель эмодзи и спецсимволов", "description": "Вставка смайлов, знаков валют, математических символов и каомодзи", "keys": ["Win", "."], "category": "Основные операции", "popularity": 92},
    {"id": "w10-shake-minimize", "appId": "win10", "title": "Свернуть все фоновые окна (Aero Shake)", "description": "Оставляет на экране только текущее окно, сворачивая остальные", "keys": ["Win", "Home"], "category": "Управление окнами", "popularity": 89},
    {"id": "w10-restart-gpu", "appId": "win10", "title": "Перезапуск видеодрайвера", "description": "Экстренный перезапуск видеодрайвера при зависании экрана или артефактах", "keys": ["Win", "Ctrl", "Shift", "B"], "category": "Система и навигация", "popularity": 92},
    {"id": "w10-task-mgr-direct", "appId": "win10", "title": "Диспетчер задач напрямую", "description": "Запуск Диспетчера задач без промежуточного экрана безопасности", "keys": ["Ctrl", "Shift", "Esc"], "category": "Система и навигация", "popularity": 99},
    {"id": "w10-app-switch", "appId": "win10", "title": "Переключение между окнами (Alt + Tab)", "description": "Быстрое переключение между открытыми приложениями", "keys": ["Alt", "Tab"], "category": "Управление окнами", "popularity": 99},
    {"id": "w10-zoom-magnifier", "appId": "win10", "title": "Включить экранную лупу", "description": "Увеличивает масштаб отображения экрана", "keys": ["Win", "+"], "category": "Специальные возможности", "popularity": 84},

    # CMD additions
    {"id": "cmd-cls", "appId": "cmd", "title": "Очистить экран консоли", "description": "Очищает видимую область терминала", "keys": ["CLS"], "category": "Команды", "popularity": 98},
    {"id": "cmd-tab-complete", "appId": "cmd", "title": "Автодополнение пути файла или папки", "description": "Автоматически подставляет имена файлов и директорий", "keys": ["Tab"], "category": "Навигация", "popularity": 97},
    {"id": "cmd-cancel-proc", "appId": "cmd", "title": "Прервать текущую команду (SIGINT)", "description": "Останавливает выполнение бесконечного пинга, скрипта или процесса", "keys": ["Ctrl", "C"], "category": "Управление", "popularity": 99},
    {"id": "cmd-pause-output", "appId": "cmd", "title": "Приостановить вывод текста", "description": "Останавливает прокрутку длинного лога", "keys": ["Pause / Break"], "category": "Управление", "popularity": 85},
    {"id": "cmd-fullscreen", "appId": "cmd", "title": "Полноэкранный режим", "description": "Переключает окно командной строки во весь экран", "keys": ["Alt", "Enter"], "category": "Интерфейс", "popularity": 89},
    {"id": "cmd-history-f7", "appId": "cmd", "title": "Окно истории выполненных команд", "description": "Показывает нумерованный список последних введенных команд", "keys": ["F7"], "category": "История", "popularity": 92},
    {"id": "cmd-repeat-f3", "appId": "cmd", "title": "Повторить последнюю команду", "description": "Вставляет в строку последнюю выполненную команду", "keys": ["F3"], "category": "История", "popularity": 90},
    {"id": "cmd-clear-line", "appId": "cmd", "title": "Очистить текущую строку ввода", "description": "Удаляет набранный текст команды до курсора", "keys": ["Esc"], "category": "Редактирование", "popularity": 91},

    # Sysinternals additions
    {"id": "sys-procexp-replace-tm", "appId": "sysinternals", "title": "Заменить стандартный Диспетчер задач", "description": "В Process Explorer: Options -> Replace Task Manager", "keys": ["Options -> Replace Task Manager"], "category": "Настройки", "popularity": 95},
    {"id": "sys-procexp-find-handle", "appId": "sysinternals", "title": "Поиск дескриптора или DLL (Find Handle or DLL)", "description": "Находит процесс, который заблокировал файл или папку", "keys": ["Ctrl", "F"], "category": "Диагностика", "popularity": 99},
    {"id": "sys-procexp-kill-tree", "appId": "sysinternals", "title": "Завершить дерево процессов (Kill Process Tree)", "description": "Уничтожает процесс вместе со всеми его дочерними процессами", "keys": ["Shift", "Del"], "category": "Управление", "popularity": 96},
    {"id": "sys-procexp-verify-sig", "appId": "sysinternals", "title": "Проверка цифровых подписей (Verify Image Signatures)", "description": "Проверяет подлинность всех запущенных исполняемых файлов", "keys": ["Options -> Verify Signatures"], "category": "Безопасность", "popularity": 92},
    {"id": "sys-procexp-virustotal", "appId": "sysinternals", "title": "Проверка процессов через VirusTotal", "description": "Отправляет хэши процессов в базу VirusTotal для выявления угроз", "keys": ["Options -> VirusTotal Check"], "category": "Безопасность", "popularity": 97},
    {"id": "sys-autoruns-jump-entry", "appId": "sysinternals", "title": "Перейти к записи в Реестре (Jump to Entry)", "description": "В Autoruns: открывает раздел реестра с автозагрузкой", "keys": ["Ctrl", "J"], "category": "Навигация", "popularity": 94},
    {"id": "sys-autoruns-filter", "appId": "sysinternals", "title": "Быстрый фильтр записей автозагрузки", "description": "Фильтрует службы, драйверы и задачи по имени", "keys": ["Ctrl", "F"], "category": "Поиск", "popularity": 93},
    {"id": "sys-procmon-filter", "appId": "sysinternals", "title": "Настройка фильтров событий (Filter)", "description": "В Process Monitor: открывает окно сложных фильтров по процессам и путям", "keys": ["Ctrl", "L"], "category": "Мониторинг", "popularity": 98},
    {"id": "sys-procmon-capture", "appId": "sysinternals", "title": "Включить / остановить перехват событий", "description": "Запуск и пауза записи активности реестра и диска", "keys": ["Ctrl", "E"], "category": "Мониторинг", "popularity": 97},

    # PuTTY additions
    {"id": "putty-copy-selection", "appId": "putty", "title": "Копирование текста в буфер", "description": "В PuTTY выделение мышью автоматически копирует текст без нажатия клавиш", "keys": ["Выделение мышью"], "category": "Буфер обмена", "popularity": 99},
    {"id": "putty-paste-text", "appId": "putty", "title": "Вставить текст из буфера", "description": "Вставляет текст в терминал PuTTY", "keys": ["Правый клик или Shift + Insert"], "category": "Буфер обмена", "popularity": 99},
    {"id": "putty-sysmenu", "appId": "putty", "title": "Системное контекстное меню окна", "description": "Доступ к настройкам сессии Change Settings, дублированию и логам", "keys": ["Alt", "Space"], "category": "Настройки", "popularity": 94},
    {"id": "putty-duplicate-session", "appId": "putty", "title": "Дублировать текущую SSH-сессию", "description": "Открывает новое окно с тем же хостом и параметрами", "keys": ["Системное меню -> Duplicate Session"], "category": "Сессии", "popularity": 95},
    {"id": "putty-clear-scrollback", "appId": "putty", "title": "Очистить буфер прокрутки", "description": "Удаляет старую историю строк сессии для чистого экрана", "keys": ["Системное меню -> Clear Scrollback"], "category": "Терминал", "popularity": 88},
    {"id": "putty-fullscreen-toggle", "appId": "putty", "title": "Полноэкранный режим терминала", "description": "Разворачивает консоль PuTTY без рамок окна", "keys": ["Alt", "Enter"], "category": "Терминал", "popularity": 90},
    {"id": "putty-scroll-up-page", "appId": "putty", "title": "Прокрутка терминала вверх на страницу", "description": "Листает историю вывода команд вверх", "keys": ["Shift", "Page Up"], "category": "Навигация", "popularity": 96},
    {"id": "putty-scroll-down-page", "appId": "putty", "title": "Прокрутка терминала вниз на страницу", "description": "Листает историю вывода команд вниз", "keys": ["Shift", "Page Down"], "category": "Навигация", "popularity": 96},

    # WinSCP additions
    {"id": "winscp-switch-panels", "appId": "winscp", "title": "Переключение между локальной и удаленной панелью", "description": "Смена фокуса между файлами на ПК и на сервере", "keys": ["Tab"], "category": "Навигация", "popularity": 99},
    {"id": "winscp-view-file", "appId": "winscp", "title": "Просмотр файла во встроенном вьювере", "description": "Быстрый просмотр содержимого без скачивания", "keys": ["F3"], "category": "Файлы", "popularity": 96},
    {"id": "winscp-edit-remote", "appId": "winscp", "title": "Редактировать файл на сервере", "description": "Открывает удаленный файл во встроенном или внешнем редакторе", "keys": ["F4"], "category": "Файлы", "popularity": 98},
    {"id": "winscp-copy-upload", "appId": "winscp", "title": "Копировать / Загрузить файл на сервер", "description": "Передает выделенные файлы на удаленный сервер", "keys": ["F5"], "category": "Файлы", "popularity": 99},
    {"id": "winscp-move-remote", "appId": "winscp", "title": "Переместить файл на сервере", "description": "Перемещение или переименование файла", "keys": ["F6"], "category": "Файлы", "popularity": 94},
    {"id": "winscp-new-folder", "appId": "winscp", "title": "Создать новую папку на сервере", "description": "Создает удаленный каталог", "keys": ["F7"], "category": "Файлы", "popularity": 97},
    {"id": "winscp-delete-remote", "appId": "winscp", "title": "Удалить файл на сервере", "description": "Удаление выделенных файлов с удаленного сервера", "keys": ["F8 / Del"], "category": "Файлы", "popularity": 95},
    {"id": "winscp-sync-dialog", "appId": "winscp", "title": "Синхронизация каталогов (Synchronize)", "description": "Сравнивает локальную и удаленную директории и передает измененные файлы", "keys": ["Ctrl", "S"], "category": "Синхронизация", "popularity": 97},
    {"id": "winscp-open-putty", "appId": "winscp", "title": "Открыть PuTTY SSH-терминал для текущей сессии", "description": "Мгновенно запускает консоль PuTTY с теми же учетными данными", "keys": ["Ctrl", "P"], "category": "Терминал", "popularity": 98},

    # RDP additions
    {"id": "rdp-toggle-fullscreen", "appId": "rdp", "title": "Переключение полноэкранного режима", "description": "Возвращает окно удаленного рабочего стола в оконный режим или разворачивает на весь экран", "keys": ["Ctrl", "Alt", "Pause / Break"], "category": "Управление экраном", "popularity": 98},
    {"id": "rdp-cad-remote", "appId": "rdp", "title": "Передать Ctrl + Alt + Del на удаленный ПК", "description": "Открывает экран безопасности, блокировки и диспетчера задач на удаленном сервере", "keys": ["Ctrl", "Alt", "End"], "category": "Система", "popularity": 99},
    {"id": "rdp-switch-remote-apps", "appId": "rdp", "title": "Переключение окон внутри удаленного сеанса (Alt + Tab)", "description": "Переключает окна на удаленном компьютере", "keys": ["Alt", "Page Up"], "category": "Навигация", "popularity": 95},
    {"id": "rdp-switch-remote-reverse", "appId": "rdp", "title": "Обратное переключение окон на удаленном сервере", "description": "Переключает окна в обратном порядке", "keys": ["Alt", "Page Down"], "category": "Навигация", "popularity": 91},
    {"id": "rdp-remote-taskmgr", "appId": "rdp", "title": "Открыть Диспетчер задач на удаленном сервере", "description": "Запуск диспетчера задач напрямую на сервере", "keys": ["Ctrl", "Shift", "Esc"], "category": "Система", "popularity": 97},
    {"id": "rdp-remote-start", "appId": "rdp", "title": "Открыть меню Пуск на удаленном сервере", "description": "Передает нажатие клавиши Windows в удаленный сеанс", "keys": ["Alt", "Home"], "category": "Система", "popularity": 94},
    {"id": "rdp-window-menu", "appId": "rdp", "title": "Окно управления сеансом RDP", "description": "Показывает панель подключения и меню завершения сеанса", "keys": ["Ctrl", "Alt", "Left / Right"], "category": "Управление экраном", "popularity": 89},

    # Windows Terminal additions
    {"id": "wt-split-vertical", "appId": "winterminal", "title": "Разделить панель по вертикали (Split Pane)", "description": "Открывает вторую параллельную консоль рядом", "keys": ["Alt", "Shift", "+"], "category": "Панели", "popularity": 97},
    {"id": "wt-split-horizontal", "appId": "winterminal", "title": "Разделить панель по горизонтали", "description": "Делит окно консоли пополам снизу", "keys": ["Alt", "Shift", "-"], "category": "Панели", "popularity": 96},
    {"id": "wt-close-pane", "appId": "winterminal", "title": "Закрыть активную разделенную панель", "description": "Закрывает текущую субпанель", "keys": ["Ctrl", "Shift", "W"], "category": "Панели", "popularity": 95},
    {"id": "wt-navigate-pane", "appId": "winterminal", "title": "Перемещение фокуса между разделенными панелями", "description": "Переход к соседней панели со стрелками", "keys": ["Alt", "Стрелки"], "category": "Панели", "popularity": 94},
    {"id": "wt-command-palette", "appId": "winterminal", "title": "Палитра команд Terminal (Command Palette)", "description": "Быстрый поиск команд, смена профилей, темы и шрифтов", "keys": ["Ctrl", "Shift", "P"], "category": "Управление", "popularity": 98},
    {"id": "wt-new-tab", "appId": "winterminal", "title": "Новая вкладка по умолчанию", "description": "Запуск новой вкладки PowerShell или WSL", "keys": ["Ctrl", "Shift", "T"], "category": "Вкладки", "popularity": 99},
    {"id": "wt-duplicate-tab", "appId": "winterminal", "title": "Дублировать текущую вкладку с тем же путем", "description": "Создает копию сессии в той же рабочей папке", "keys": ["Ctrl", "Shift", "D"], "category": "Вкладки", "popularity": 93},
    {"id": "wt-settings-json", "appId": "winterminal", "title": "Параметры Windows Terminal", "description": "Открывает графический интерфейс настроек или settings.json", "keys": ["Ctrl", ","], "category": "Настройки", "popularity": 95},

    # Explorer additions
    {"id": "exp-tabs-new", "appId": "explorer", "title": "Новая вкладка в Проводнике", "description": "Открывает дополнительную вкладку для работы с файлами", "keys": ["Ctrl", "T"], "category": "Вкладки", "popularity": 97},
    {"id": "exp-tabs-close", "appId": "explorer", "title": "Закрыть текущую вкладку Проводника", "description": "Закрывает активную вкладку файлового менеджера", "keys": ["Ctrl", "W"], "category": "Вкладки", "popularity": 96},
    {"id": "exp-duplicate-tab", "appId": "explorer", "title": "Дублировать вкладку", "description": "Открывает ту же папку в новой вкладке", "keys": ["Ctrl", "K"], "category": "Вкладки", "popularity": 91},
    {"id": "exp-focus-address", "appId": "explorer", "title": "Фокус в адресную строку пути (Path Bar)", "description": "Выделяет путь для быстрого копирования или перехода к папке", "keys": ["Alt", "D / Ctrl + L"], "category": "Навигация", "popularity": 98},
    {"id": "exp-focus-search", "appId": "explorer", "title": "Фокус в строку поиска по текущей папке", "description": "Активирует фильтрацию файлов по имени и маске", "keys": ["Ctrl", "F / F3"], "category": "Поиск", "popularity": 96},
    {"id": "exp-go-up", "appId": "explorer", "title": "Перейти на один уровень вверх к родительской папке", "description": "Поднимается к папке выше в дереве каталогов", "keys": ["Alt", "Up"], "category": "Навигация", "popularity": 97},
    {"id": "exp-preview-pane", "appId": "explorer", "title": "Включить / отключить панель предпросмотра файлов", "description": "Показывает содержимое документов, PDF и фото справа", "keys": ["Alt", "P"], "category": "Вид", "popularity": 95},
    {"id": "exp-details-pane", "appId": "explorer", "title": "Панель сведений о файле (размер, дата, метаданные)", "description": "Показывает технические свойства выделенного файла", "keys": ["Alt", "Shift", "P"], "category": "Вид", "popularity": 90},
]

print(f"Generated {len(SYSTEM_SHORTCUTS_ADDITIONS)} system shortcuts")

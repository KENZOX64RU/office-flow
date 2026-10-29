# -*- coding: utf-8 -*-
"""
Browsers, Comms, Design, PDF & Analytics additions:
opera, edge, firefox, yandex-browser, telegram, thunderbird, zoom, discord, slack,
powerpivot, powerquery, tableau, foxit, acrobat-reader, acrobat-pro, pdf-xchange, finereader, powerbi, canva, photoshop, illustrator
"""

BROWSERS_SHORTCUTS_ADDITIONS = [
    # Opera
    {"id": "op-workspaces-next", "appId": "opera", "title": "Переключение между рабочими пространствами (Workspaces)", "description": "Быстрый переход между пространствами «Работа», «Покупки» и «Личное»", "keys": ["Ctrl", "Alt", "Right"], "category": "Пространства", "popularity": 96},
    {"id": "op-workspaces-prev", "appId": "opera", "title": "Переключение на предыдущее пространство", "description": "Смена рабочего пространства влево", "keys": ["Ctrl", "Alt", "Left"], "category": "Пространства", "popularity": 96},
    {"id": "op-sidebar-toggle", "appId": "opera", "title": "Показать / скрыть боковую панель Opera", "description": "Быстрый доступ к мессенджерам, истории и плееру", "keys": ["Ctrl", "Shift", "S"], "category": "Интерфейс", "popularity": 94},
    {"id": "op-snapshot", "appId": "opera", "title": "Снимок веб-страницы (Snapshot)", "description": "Инструмент вырезки скриншота экрана, всей длинной страницы или фрагмента", "keys": ["Ctrl", "Shift", "2"], "category": "Скриншоты", "popularity": 97},
    {"id": "op-search-tabs", "appId": "opera", "title": "Поиск по открытым и недавно закрытым вкладкам", "description": "Мгновенный поиск нужного сайта среди 50+ вкладок", "keys": ["Ctrl", "Space"], "category": "Вкладки", "popularity": 98},
    {"id": "op-private-window", "appId": "opera", "title": "Новое приватное окно со встроенным VPN", "description": "Запуск приватного сеанса без сохранения истории и куки", "keys": ["Ctrl", "Shift", "N"], "category": "Приватность", "popularity": 98},
    {"id": "op-downloads-panel", "appId": "opera", "title": "Панель загрузок", "description": "Открывает список загруженных файлов", "keys": ["Ctrl", "J"], "category": "Загрузки", "popularity": 95},
    {"id": "op-reopen-tab", "appId": "opera", "title": "Восстановить случайно закрытую вкладку", "description": "Возвращает последнюю закрытую страницу", "keys": ["Ctrl", "Shift", "T"], "category": "Вкладки", "popularity": 99},
    {"id": "op-flow-share", "appId": "opera", "title": "Мой Flow (My Flow)", "description": "Отправка заметок, ссылок и файлов между телефоном и компьютером", "keys": ["Иконка Flow на панели"], "category": "Синхронизация", "popularity": 92},

    # Microsoft Edge
    {"id": "edge-vertical-tabs", "appId": "edge", "title": "Включить / отключить вертикальные вкладки", "description": "Переносит вкладки на левую панель, освобождая вертикальное пространство экрана", "keys": ["Ctrl", "Shift", ","], "category": "Вкладки", "popularity": 97},
    {"id": "edge-read-aloud", "appId": "edge", "title": "Чтение веб-страницы вслух (Read Aloud)", "description": "Озвучивание текста страницы естественным синтезированным голосом", "keys": ["Ctrl", "Shift", "U"], "category": "Чтение", "popularity": 96},
    {"id": "edge-web-capture", "appId": "edge", "title": "Снимок всей веб-страницы целиком (Web Capture)", "description": "Создает скриншот длинной статьи с автоматической прокруткой", "keys": ["Ctrl", "Shift", "S"], "category": "Инструменты", "popularity": 98},
    {"id": "edge-split-screen", "appId": "edge", "title": "Разделение экрана (Split Screen) — две вкладки рядом", "description": "Открывает две веб-страницы параллельно в одном окне браузера", "keys": ["Кнопка Split Screen / Ctrl + Shift + 2"], "category": "Вкладки", "popularity": 95},
    {"id": "edge-collections", "appId": "edge", "title": "Панель коллекций (Collections)", "description": "Сохранение страниц, картинок и заметок по проектам", "keys": ["Ctrl", "Shift", "Y"], "category": "Коллекции", "popularity": 94},
    {"id": "edge-immersive-reader", "appId": "edge", "title": "Режим иммерсивного чтения (без рекламы)", "description": "Очищает страницу от баннеров и меню, оставляя чистый текст и иллюстрации", "keys": ["F9"], "category": "Чтение", "popularity": 97},
    {"id": "edge-favorites-hub", "appId": "edge", "title": "Панель избранного (Favorites)", "description": "Быстрый вызов сохраненных закладок", "keys": ["Ctrl", "Shift", "O"], "category": "Закладки", "popularity": 95},

    # Mozilla Firefox
    {"id": "ff-containers", "appId": "firefox", "title": "Изолированные контейнеры Multi-Account Containers", "description": "Изоляция сессий: работа, личное, покупки в независимых куки-контейнерах", "keys": ["Alt -> Контейнеры"], "category": "Приватность", "popularity": 98},
    {"id": "ff-screenshot", "appId": "firefox", "title": "Снимок страницы встроенным инструментом", "description": "Создает скриншот видимой части или всей страницы", "keys": ["Ctrl", "Shift", "S"], "category": "Инструменты", "popularity": 97},
    {"id": "ff-reader-view", "appId": "firefox", "title": "Режим для чтения (Reader View)", "description": "Отображение статьи без рекламы и посторонних скриптов", "keys": ["F9"], "category": "Чтение", "popularity": 96},
    {"id": "ff-library-history", "appId": "firefox", "title": "Библиотека: журнал и загрузки", "description": "Открывает полное окно управления историей посещений и закладками", "keys": ["Ctrl", "Shift", "O"], "category": "История", "popularity": 95},
    {"id": "ff-pip-video", "appId": "firefox", "title": "Режим «Картинка в картинке» для видео", "description": "Выносит видеоролик в плавающее окно поверх всех программ", "keys": ["Ctrl", "Shift", "]"], "category": "Медиа", "popularity": 97},
    {"id": "ff-forget-button", "appId": "firefox", "title": "Функция «Забыть» (очистка недавней активности)", "description": "Удаляет историю и куки за последние 5 минут, 2 часа или 24 часа", "keys": ["Кнопка Forget"], "category": "Приватность", "popularity": 92},

    # Яндекс Браузер
    {"id": "yb-ai-translate-video", "appId": "yandex-browser", "title": "Нейросетевой закадровый перевод видео", "description": "Синхронный голосовой перевод иностранных видео на русский язык", "keys": ["Кнопка перевода на видео"], "category": "Нейросети", "popularity": 99},
    {"id": "yb-sidebar", "appId": "yandex-browser", "title": "Боковая панель Яндекса", "description": "Быстрый доступ к заметкам, истории, уведомлениям и Алисе", "keys": ["Ctrl", "Shift", "E"], "category": "Интерфейс", "popularity": 94},
    {"id": "yb-tab-groups", "appId": "yandex-browser", "title": "Группировка вкладок по проектам", "description": "Объединение связанных сайтов в именованную цветовую группу", "keys": ["Контекстное меню вкладки -> Добавить в группу"], "category": "Вкладки", "popularity": 95},
    {"id": "yb-screenshot-tool", "appId": "yandex-browser", "title": "Встроенный инструмент создания скриншотов", "description": "Скриншот с добавлением стрелок, рамок и размытия персональных данных", "keys": ["Ctrl", "Shift", "S"], "category": "Инструменты", "popularity": 96},
    {"id": "yb-passwords-master", "appId": "yandex-browser", "title": "Менеджер паролей с мастер-паролем", "description": "Безопасное хранение и автозаполнение учетных записей", "keys": ["Ctrl", "Shift", "L"], "category": "Безопасность", "popularity": 93},
    {"id": "yb-turbomode", "appId": "yandex-browser", "title": "Режим Турбо при медленном интернете", "description": "Сжатие трафика и ускорение загрузки тяжелых страниц", "keys": ["Меню -> Режим Турбо"], "category": "Сеть", "popularity": 90},

    # Telegram Desktop
    {"id": "tg-search-chat", "appId": "telegram", "title": "Поиск сообщений в текущем чате", "description": "Мгновенный поиск по переписке активного диалога", "keys": ["Ctrl", "F"], "category": "Поиск", "popularity": 99},
    {"id": "tg-scheduled-message", "appId": "telegram", "title": "Отложенная отправка сообщения", "description": "Выбор точной даты и времени отправки сообщения собеседнику", "keys": ["Правый клик по кнопке отправки"], "category": "Отправка", "popularity": 98},
    {"id": "tg-silent-message", "appId": "telegram", "title": "Отправить без звука", "description": "Доставка сообщения без звукового уведомления на телефоне получателя", "keys": ["Правый клик по кнопке отправки -> Без звука"], "category": "Отправка", "popularity": 96},
    {"id": "tg-lock-passcode", "appId": "telegram", "title": "Заблокировать Telegram код-паролем", "description": "Мгновенная блокировка интерфейса приложения при уходе от компьютера", "keys": ["Ctrl", "L"], "category": "Безопасность", "popularity": 99},
    {"id": "tg-folders-switch", "appId": "telegram", "title": "Переключение между папками чатов", "description": "Переход между вкладками папок (Работа, Личное, Каналы)", "keys": ["Ctrl", "1 .. 9"], "category": "Навигация", "popularity": 97},
    {"id": "tg-format-spoiler", "appId": "telegram", "title": "Скрыть текст под спойлер", "description": "Форматирует выделенный фрагмент как скрытый спойлер", "keys": ["Ctrl", "Shift", "P"], "category": "Форматирование", "popularity": 95},
    {"id": "tg-format-quote", "appId": "telegram", "title": "Оформить текст как цитату", "description": "Блочное оформление цитаты", "keys": ["Ctrl", "Shift", "."], "category": "Форматирование", "popularity": 94},
]

DESIGN_SHORTCUTS_ADDITIONS = [
    # Microsoft Power Pivot
    {"id": "pp-open-window", "appId": "powerpivot", "title": "Открыть окно Power Pivot (Управление моделью)", "description": "Запуск отдельного окна управления реляционной моделью данных Excel", "keys": ["Alt -> Y2 -> M"], "category": "Модель данных", "popularity": 98},
    {"id": "pp-diagram-view", "appId": "powerpivot", "title": "Режим представления диаграммы (Diagram View)", "description": "Графическое отображение таблиц фактов, измерений и связей между ними", "keys": ["Кнопка «Представление диаграммы»"], "category": "Модель данных", "popularity": 99},
    {"id": "pp-create-relationship", "appId": "powerpivot", "title": "Создать связь между таблицами протягиванием", "description": "Соединение поля внешнего ключа с полем первичного ключа мыши", "keys": ["Drag and Drop между полями"], "category": "Связи", "popularity": 99},
    {"id": "pp-new-measure", "appId": "powerpivot", "title": "Создать вычисляемую меру DAX (New Measure)", "description": "Добавление агрегирующей меры для анализа в сводных таблицах", "keys": ["Кнопка «Новая мера»"], "category": "DAX меры", "popularity": 98},
    {"id": "pp-calc-column", "appId": "powerpivot", "title": "Добавить вычисляемый столбец (Calculated Column)", "description": "Построчный расчет значений с использованием формул DAX", "keys": ["Клик по колонке «Добавить столбец»"], "category": "Вычисления", "popularity": 96},
    {"id": "pp-hierarchy-create", "appId": "powerpivot", "title": "Создать аналитическую иерархию (Год -> Месяц -> День)", "description": "Группировка связанных столбцов для быстрого бурения (Drilldown)", "keys": ["Создать иерархию на панели диаграммы"], "category": "Иерархии", "popularity": 94},
    {"id": "pp-format-currency", "appId": "powerpivot", "title": "Формат числа как денежный с разделителями тысяч", "description": "Настройка формата отображения финансовой меры", "keys": ["Форматирование -> Денежный"], "category": "Форматирование", "popularity": 95},
    {"id": "pp-mark-date-table", "appId": "powerpivot", "title": "Пометить как таблицу дат (Mark as Date Table)", "description": "Включает функции Time Intelligence (YTD, QTD, SAMEPERIODLASTYEAR) в DAX", "keys": ["Конструкт -> Пометить как таблицу дат"], "category": "Настройки", "popularity": 97},

    # Power Query
    {"id": "pq-advanced-editor", "appId": "powerquery", "title": "Расширенный редактор кода M (Advanced Editor)", "description": "Просмотр и ручное редактирование программного кода шагов запроса на языке M", "keys": ["Главная -> Расширенный редактор"], "category": "Код M", "popularity": 99},
    {"id": "pq-close-apply", "appId": "powerquery", "title": "Закрыть и применить (Close & Apply)", "description": "Загрузка обработанных таблиц в Excel или модель Power BI", "keys": ["Главная -> Закрыть и применить"], "category": "Загрузка", "popularity": 99},
    {"id": "pq-unpivot-columns", "appId": "powerquery", "title": "Отменить свертывание столбцов (Unpivot Columns)", "description": "Трансформация матрицы дат и сумм в плоскую таблицу: Атрибут и Значение", "keys": ["Преобразование -> Отменить свертывание"], "category": "Трансформация", "popularity": 99},
    {"id": "pq-merge-queries", "appId": "powerquery", "title": "Объединить запросы (Merge Queries — аналог ВПР / SQL JOIN)", "description": "Подтягивание столбцов из справочника по общему ключу", "keys": ["Главная -> Объединить запросы"], "category": "Связи", "popularity": 98},
    {"id": "pq-append-queries", "appId": "powerquery", "title": "Добавить запросы (Append Queries — аналог UNION ALL)", "description": "Вертикальное склеивание нескольких одинаковых отчетов за разные месяцы", "keys": ["Главная -> Добавить запросы"], "category": "Трансформация", "popularity": 97},
    {"id": "pq-split-column", "appId": "powerquery", "title": "Разделить столбец по разделителю (пробел, точка с запятой)", "description": "Разбивка ФИО или артикула на независимые колонки", "keys": ["Преобразование -> Разделить столбец"], "category": "Трансформация", "popularity": 98},
    {"id": "pq-conditional-column", "appId": "powerquery", "title": "Добавить условный столбец (ЕСЛИ / ТОГДА / ИНАЧЕ)", "description": "Категоризация данных по условиям диапазонов значений", "keys": ["Добавление столбца -> Условный столбец"], "category": "Вычисления", "popularity": 96},
    {"id": "pq-remove-duplicates", "appId": "powerquery", "title": "Удалить дубликаты строк", "description": "Оставляет только уникальные записи по выделенным колонкам", "keys": ["Правый клик по заголовку -> Удалить дубликаты"], "category": "Очистка", "popularity": 98},

    # Foxit PDF Editor
    {"id": "fx-merge-pdf", "appId": "foxit", "title": "Объединить несколько файлов в один PDF", "description": "Склеивание документов, договоров и сканов в единый файл", "keys": ["Файл -> Объединить файлы"], "category": "Страницы", "popularity": 98},
    {"id": "fx-organize-pages", "appId": "foxit", "title": "Управление страницами (поворот, удаление, перестановка)", "description": "Визуальная сетка миниатюр для сортировки листов документа", "keys": ["Вкладка «Страницы»"], "category": "Страницы", "popularity": 99},
    {"id": "fx-edit-text", "appId": "foxit", "title": "Редактировать существующий текст в PDF", "description": "Исправление опечаток и дат прямо внутри готового файла PDF", "keys": ["Правка -> Редактировать текст"], "category": "Редактирование", "popularity": 98},
    {"id": "fx-add-stamp", "appId": "foxit", "title": "Поставить штамп (Оплачено, Согласовано, Копия верна)", "description": "Наложение электронных штампов с датой и фамилией", "keys": ["Комментарии -> Штамп"], "category": "Рецензирование", "popularity": 97},
    {"id": "fx-redact-protect", "appId": "foxit", "title": "Скрытие конфиденциальных данных (Redaction)", "description": "Безвозвратное удаление персональных данных и номеров счетов под черную плашку", "keys": ["Защита -> Пометить для скрытия"], "category": "Безопасность", "popularity": 96},
    {"id": "fx-ocr-scan", "appId": "foxit", "title": "Распознавание текста со скана (OCR)", "description": "Превращение отсканированной картинки в документ с поиском и копированием текста", "keys": ["Преобразовать -> Распознать текст"], "category": "OCR", "popularity": 97},
    {"id": "fx-compare-documents", "appId": "foxit", "title": "Сравнение двух редакций PDF документа", "description": "Наглядное выделение изменений, удалений и правок в договоре", "keys": ["Вид -> Сравнить"], "category": "Анализ", "popularity": 95},

    # Tableau
    {"id": "tb-show-me", "appId": "tableau", "title": "Панель Show Me (Быстрый выбор типа визуализации)", "description": "Рекомендации графиков на основе выделенных измерений и показателей", "keys": ["Ctrl", "1"], "category": "Визуализация", "popularity": 99},
    {"id": "tb-swap-axes", "appId": "tableau", "title": "Поменять местами строки и столбцы (Swap Rows and Columns)", "description": "Мгновенное транспонирование осей координат графика", "keys": ["Ctrl", "W"], "category": "Визуализация", "popularity": 98},
    {"id": "tb-calculated-field", "appId": "tableau", "title": "Создать вычисляемое поле (Create Calculated Field)", "description": "Написание формул, условий IF и агрегаций SUM, AVG, LOD", "keys": ["Анализ -> Создать вычисляемое поле"], "category": "Вычисления", "popularity": 99},
    {"id": "tb-filter-shelf", "appId": "tableau", "title": "Перетащить поле на полку фильтров (Filter Shelf)", "description": "Ограничение диапазона отображаемых данных", "keys": ["Drag на полку Filters"], "category": "Фильтры", "popularity": 97},
    {"id": "tb-new-worksheet", "appId": "tableau", "title": "Создать новый рабочий лист (New Worksheet)", "description": "Добавляет новый аналитический лист", "keys": ["Ctrl", "M"], "category": "Листы", "popularity": 98},
    {"id": "tb-new-dashboard", "appId": "tableau", "title": "Создать новый дашборд (New Dashboard)", "description": "Компоновка интерактивной сводной панели из созданных графиков", "keys": ["Дашборд -> Новый дашборд"], "category": "Дашборды", "popularity": 97},
    {"id": "tb-export-image", "appId": "tableau", "title": "Экспорт графика в виде изображения высокого разрешения", "description": "Сохранение визуализации для презентаций и отчетов", "keys": ["Рабочий лист -> Экспорт -> Изображение"], "category": "Экспорт", "popularity": 95},
]

print("Generated browsers and design additions")

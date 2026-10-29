# -*- coding: utf-8 -*-
"""
Office category shortcuts and tasks additions:
access, onenote, powerpoint, outlook, teams, m365, libre-calc, libre-impress, onlyoffice, gdocs, gsheets, gslides, gdrive
"""

OFFICE_SHORTCUTS_ADDITIONS = [
    # Microsoft Access
    {"id": "acc-save-record", "appId": "access", "title": "Сохранить текущую запись", "description": "Мгновенно сохраняет изменения в активной строке таблицы или формы", "keys": ["Shift", "Enter"], "category": "Ввод данных", "popularity": 98},
    {"id": "acc-insert-date", "appId": "access", "title": "Вставить текущую дату", "description": "Подставляет системную дату в активное поле", "keys": ["Ctrl", ";"], "category": "Ввод данных", "popularity": 96},
    {"id": "acc-insert-time", "appId": "access", "title": "Вставить текущее время", "description": "Подставляет системное время", "keys": ["Ctrl", "Shift", ":"], "category": "Ввод данных", "popularity": 92},
    {"id": "acc-copy-above", "appId": "access", "title": "Скопировать значение из поля предыдущей записи", "description": "Дублирует значение из той же колонки верхней строки", "keys": ["Ctrl", "'"], "category": "Ввод данных", "popularity": 95},
    {"id": "acc-design-view", "appId": "access", "title": "Режим конструктора (Design View)", "description": "Переключает таблицу, запрос или форму в режим редактирования структуры", "keys": ["Ctrl", "D"], "category": "Режимы", "popularity": 94},
    {"id": "acc-vba-editor", "appId": "access", "title": "Открыть редактор кода Visual Basic (VBA)", "description": "Запуск среды разработки макросов и модулей Access", "keys": ["Alt", "F11"], "category": "Разработка", "popularity": 97},
    {"id": "acc-property-sheet", "appId": "access", "title": "Окно свойств объекта (Property Sheet)", "description": "Показывает панель параметров выделенного элемента управления формы/отчета", "keys": ["F4"], "category": "Конструктор", "popularity": 96},
    {"id": "acc-zoom-box", "appId": "access", "title": "Окно детального ввода Zoom Box", "description": "Открывает большое текстовое окно для ввода длинных формул и SQL-запросов", "keys": ["Shift", "F2"], "category": "Редактирование", "popularity": 95},
    {"id": "acc-run-query", "appId": "access", "title": "Выполнить текущий SQL-запрос", "description": "Запускает запрос на выборку, добавление или обновление", "keys": ["! / F5"], "category": "Запросы", "popularity": 93},
    {"id": "acc-relationships", "appId": "access", "title": "Схема данных (Relationships)", "description": "Открывает графическую схему связей между таблицами", "keys": ["Alt -> D -> R"], "category": "База данных", "popularity": 92},
    {"id": "acc-new-record", "appId": "access", "title": "Перейти к новой пустой записи", "description": "Перемещает курсор в конец таблицы для добавления новой строки", "keys": ["Ctrl", "+"], "category": "Навигация", "popularity": 94},
    {"id": "acc-find-replace", "appId": "access", "title": "Поиск и замена в таблице", "description": "Открывает диалог поиска по текущему полю или всей таблице", "keys": ["Ctrl", "F"], "category": "Поиск", "popularity": 97},

    # Microsoft OneNote
    {"id": "on-new-page", "appId": "onenote", "title": "Создать новую страницу в текущем разделе", "description": "Добавляет пустую страницу в конец списка страниц", "keys": ["Ctrl", "N"], "category": "Страницы", "popularity": 98},
    {"id": "on-new-subpage", "appId": "onenote", "title": "Сделать страницу подстраницей (Subpage)", "description": "Повышает или понижает иерархический уровень страницы", "keys": ["Ctrl", "Alt", "]"], "category": "Страницы", "popularity": 92},
    {"id": "on-todo-tag", "appId": "onenote", "title": "Поставить / снять чекбокс задачи (To-Do Tag)", "description": "Добавляет интерактивный флажок списка дел к текущей строке", "keys": ["Ctrl", "1"], "category": "Теги", "popularity": 99},
    {"id": "on-important-tag", "appId": "onenote", "title": "Пометить тегом «Важно» (Звездочка)", "description": "Добавляет маркер приоритета к абзацу", "keys": ["Ctrl", "2"], "category": "Теги", "popularity": 95},
    {"id": "on-question-tag", "appId": "onenote", "title": "Пометить тегом «Вопрос» (Знак вопроса)", "description": "Маркирует блок текста, требующий уточнения", "keys": ["Ctrl", "3"], "category": "Теги", "popularity": 89},
    {"id": "on-insert-table", "appId": "onenote", "title": "Быстрое создание таблицы клавишей Tab", "description": "Наберите текст и нажмите Tab — автоматически создастся таблица с двумя колонками", "keys": ["Tab"], "category": "Таблицы", "popularity": 98},
    {"id": "on-timestamp-date", "appId": "onenote", "title": "Вставить текущую дату и время", "description": "Фиксирует точный момент создания протокола или заметки", "keys": ["Alt", "Shift", "F"], "category": "Редактирование", "popularity": 96},
    {"id": "on-screen-clipping", "appId": "onenote", "title": "Вырезка фрагмента экрана в OneNote", "description": "Мгновенно вставляет скриншот выделенной области на текущую страницу", "keys": ["Win", "Shift", "S"], "category": "Вставка", "popularity": 97},
    {"id": "on-search-all-notebooks", "appId": "onenote", "title": "Поиск по всем записным книжкам", "description": "Ищет ключевые слова по всем разделам, страницам и тексту на картинках", "keys": ["Ctrl", "E"], "category": "Поиск", "popularity": 98},
    {"id": "on-search-current-page", "appId": "onenote", "title": "Поиск только на текущей странице", "description": "Находит вхождения слов на активном листе", "keys": ["Ctrl", "F"], "category": "Поиск", "popularity": 96},
    {"id": "on-math-calc", "appId": "onenote", "title": "Автоматический математический расчет", "description": "Наберите математическое выражение со знаком = и нажмите пробел: OneNote посчитает результат", "keys": ["= + Пробел"], "category": "Умные функции", "popularity": 97},

    # Microsoft PowerPoint
    {"id": "ppt-duplicate-slide", "appId": "powerpoint", "title": "Дублировать выделенный слайд", "description": "Создает точную копию текущего слайда с сохранением всех элементов и стилей", "keys": ["Ctrl", "D"], "category": "Слайды", "popularity": 99},
    {"id": "ppt-group-objects", "appId": "powerpoint", "title": "Сгруппировать выделенные объекты", "description": "Объединяет несколько фигур, картинок и текстовых блоков в единую группу", "keys": ["Ctrl", "G"], "category": "Объекты", "popularity": 98},
    {"id": "ppt-ungroup-objects", "appId": "powerpoint", "title": "Разгруппировать объекты", "description": "Разделяет группу на независимые элементы", "keys": ["Ctrl", "Shift", "G"], "category": "Объекты", "popularity": 95},
    {"id": "ppt-start-show-current", "appId": "powerpoint", "title": "Запуск показа слайдов с текущего слайда", "description": "Начинает демонстрацию презентации ровно с того места, где вы находитесь", "keys": ["Shift", "F5"], "category": "Показ", "popularity": 99},
    {"id": "ppt-black-screen", "appId": "powerpoint", "title": "Черный экран во время показа (B)", "description": "Временно затемняет экран, переключая внимание аудитории на спикера", "keys": ["B"], "category": "Показ", "popularity": 94},
    {"id": "ppt-white-screen", "appId": "powerpoint", "title": "Белый экран во время показа (W)", "description": "Делает экран полностью белым во время демонстрации", "keys": ["W"], "category": "Показ", "popularity": 90},
    {"id": "ppt-laser-pointer", "appId": "powerpoint", "title": "Включить виртуальную лазерную указку", "description": "Превращает курсор мыши в яркую красную точку во время показа слайдов", "keys": ["Ctrl + Левый клик мышью"], "category": "Показ", "popularity": 96},
    {"id": "ppt-pen-draw", "appId": "powerpoint", "title": "Инструмент рисования «Перо» во время презентации", "description": "Позволяет рисовать поверх слайда в реальном времени", "keys": ["Ctrl", "P"], "category": "Показ", "popularity": 95},

    # Microsoft Teams
    {"id": "teams-mute-toggle", "appId": "teams", "title": "Включить / выключить микрофон во звонке", "description": "Быстрое переключение звука во время конференции", "keys": ["Ctrl", "Shift", "M"], "category": "Звонки", "popularity": 99},
    {"id": "teams-camera-toggle", "appId": "teams", "title": "Включить / выключить камеру", "description": "Управление передачей видео", "keys": ["Ctrl", "Shift", "O"], "category": "Звонки", "popularity": 97},
    {"id": "teams-raise-hand", "appId": "teams", "title": "Поднять / опустить руку", "description": "Сигнал ведущему о желании задать вопрос", "keys": ["Ctrl", "Shift", "K"], "category": "Звонки", "popularity": 95},
    {"id": "teams-share-screen", "appId": "teams", "title": "Открыть панель демонстрации экрана", "description": "Выбор окна программы или монитора для показа коллегам", "keys": ["Ctrl", "Shift", "E"], "category": "Звонки", "popularity": 98},
    {"id": "teams-search-command", "appId": "teams", "title": "Строка быстрого поиска и команд", "description": "Фокус в строку поиска: ввод /dnd, /call, /files", "keys": ["Ctrl", "E"], "category": "Навигация", "popularity": 96},
    {"id": "teams-jump-chat", "appId": "teams", "title": "Перейти к чатам", "description": "Открывает список последних личных и групповых чатов", "keys": ["Ctrl", "2"], "category": "Навигация", "popularity": 94},
    {"id": "teams-jump-calendar", "appId": "teams", "title": "Перейти в календарь встреч", "description": "Открывает рабочий календарь собраний Teams", "keys": ["Ctrl", "4"], "category": "Навигация", "popularity": 93},
    {"id": "teams-filter-chats", "appId": "teams", "title": "Фильтр чатов по ключевым словам", "description": "Быстрый поиск среди бесед и контактов", "keys": ["Ctrl", "Shift", "F"], "category": "Поиск", "popularity": 91},

    # LibreOffice Impress
    {"id": "lo-imp-new-slide", "appId": "libre-impress", "title": "Вставить новый слайд", "description": "Добавляет следующий слайд презентации", "keys": ["Ctrl", "M"], "category": "Слайды", "popularity": 97},
    {"id": "lo-imp-duplicate-slide", "appId": "libre-impress", "title": "Дублировать слайд", "description": "Создает точную копию активного слайда", "keys": ["Слайд -> Дублировать слайд"], "category": "Слайды", "popularity": 94},
    {"id": "lo-imp-start-presentation", "appId": "libre-impress", "title": "Начать демонстрацию сначала", "description": "Запуск полноэкранного показа с первого слайда", "keys": ["F5"], "category": "Демонстрация", "popularity": 99},
    {"id": "lo-imp-start-from-current", "appId": "libre-impress", "title": "Показ с текущего слайда", "description": "Запуск демонстрации с активного слайда", "keys": ["Shift", "F5"], "category": "Демонстрация", "popularity": 98},
    {"id": "lo-imp-master-slides", "appId": "libre-impress", "title": "Режим мастер-слайдов (Мастер слайдов)", "description": "Настройка глобального фона, шрифтов и колонтитулов для всех слайдов", "keys": ["Вид -> Мастер слайдов"], "category": "Дизайн", "popularity": 92},
    {"id": "lo-imp-export-pdf", "appId": "libre-impress", "title": "Прямой экспорт в PDF", "description": "Сохранение презентации в универсальный файл PDF одним кликом", "keys": ["Файл -> Экспорт в PDF"], "category": "Экспорт", "popularity": 96},
    {"id": "lo-imp-group", "appId": "libre-impress", "title": "Сгруппировать фигуры", "description": "Объединение графических элементов на слайде", "keys": ["Ctrl", "Shift", "G"], "category": "Объекты", "popularity": 95},
    {"id": "lo-imp-ungroup", "appId": "libre-impress", "title": "Разгруппировать фигуры", "description": "Разделение объединенных объектов", "keys": ["Ctrl", "Alt", "Shift", "G"], "category": "Объекты", "popularity": 91},

    # Google Slides
    {"id": "gsl-new-slide", "appId": "gslides", "title": "Новый слайд", "description": "Создает следующий слайд в презентации", "keys": ["Ctrl", "M"], "category": "Слайды", "popularity": 99},
    {"id": "gsl-duplicate-slide", "appId": "gslides", "title": "Дублировать выбранный слайд", "description": "Создает копию текущего слайда со всем контентом", "keys": ["Ctrl", "D"], "category": "Слайды", "popularity": 98},
    {"id": "gsl-present", "appId": "gslides", "title": "Запуск презентации с текущего слайда", "description": "Переход в полноэкранный режим показа", "keys": ["Ctrl", "F5"], "category": "Показ", "popularity": 99},
    {"id": "gsl-group", "appId": "gslides", "title": "Сгруппировать объекты", "description": "Связывает несколько блоков в единую группу", "keys": ["Ctrl", "Alt", "G"], "category": "Объекты", "popularity": 96},
    {"id": "gsl-ungroup", "appId": "gslides", "title": "Разгруппировать объекты", "description": "Разделяет сгруппированные элементы", "keys": ["Ctrl", "Alt", "Shift", "G"], "category": "Объекты", "popularity": 92},
    {"id": "gsl-bring-forward", "appId": "gslides", "title": "Переместить вперед по слоям", "description": "Поднимает выделенный элемент на один уровень выше", "keys": ["Ctrl", "Up"], "category": "Слои", "popularity": 94},
    {"id": "gsl-send-backward", "appId": "gslides", "title": "Переместить назад по слоям", "description": "Опускает элемент под другие объекты", "keys": ["Ctrl", "Down"], "category": "Слои", "popularity": 94},
    {"id": "gsl-speaker-notes", "appId": "gslides", "title": "Показать / скрыть заметки докладчика", "description": "Управление панелью комментариев к слайду", "keys": ["Вид -> Показать заметки"], "category": "Вид", "popularity": 91},
]

OFFICE_TASKS_ADDITIONS = [
    {
        "id": "acc-task-rel-builder",
        "appId": "access",
        "title": "Построение схемы связей между таблицами с обеспечением целостности данных",
        "summary": "Создание реляционных связей «один-ко-многим» между первичным и внешним ключом с каскадным обновлением.",
        "whenToUse": "При проектировании базы данных клиентов, заказов, номенклатуры или сотрудников.",
        "expectedResult": "Настроена устойчивая схема данных, предотвращающая появление висячих записей-сирот.",
        "category": "Архитектура БД",
        "difficulty": "medium",
        "estimatedTime": "5 минут",
        "tags": ["схема данных", "связи", "первичный ключ", "целостность", "access"],
        "steps": [
            {
                "stepNumber": 1,
                "title": "Откройте окно Схемы данных",
                "instruction": "На вкладке «Работа с базами данных» нажмите кнопку «Схема данных» (Relationships)."
            },
            {
                "stepNumber": 2,
                "title": "Добавьте связываемые таблицы",
                "instruction": "В окне добавления таблиц выберите родительскую таблицу (например, «Клиенты») и дочернюю («Заказы»)."
            },
            {
                "stepNumber": 3,
                "title": "Протяните связь между полями",
                "instruction": "Зажмите левую кнопку мыши на первичном ключе (ID_Клиента) и перетащите курсор на внешнее поле в таблице заказов."
            },
            {
                "stepNumber": 4,
                "title": "Включите обеспечение целостности",
                "instruction": "В открывшемся окне изменения связей обязательно отметьте флажок «Обеспечение целостности данных» и нажмите «Создать»."
            }
        ]
    },
    {
        "id": "on-task-ocr-extract",
        "appId": "onenote",
        "title": "Распознавание текста с картинки или скана (OCR) без сторонних утилит",
        "summary": "Извлечение печатного текста со скриншота, чека, квитанции или фото документа прямо в буфер обмена.",
        "whenToUse": "Когда есть изображение с таблицей, ИНН или реквизитами, и текст нужно быстро отредактировать.",
        "expectedResult": "Распознанный редактируемый текст скопирован в буфер за 2 секунды.",
        "category": "Интеллектуальные функции",
        "difficulty": "easy",
        "estimatedTime": "30 секунд",
        "tags": ["распознавание текста", "ocr", "картинка в текст", "onenote"],
        "steps": [
            {
                "stepNumber": 1,
                "title": "Вставьте изображение на страницу OneNote",
                "instruction": "Вставьте скриншот или скан через Ctrl + V или меню «Вставка» -> «Рисунки»."
            },
            {
                "stepNumber": 2,
                "title": "Вызовите распознавание текста",
                "instruction": "Кликните правой кнопкой мыши по картинке и выберите пункт «Копировать текст из рисунка»."
            },
            {
                "stepNumber": 3,
                "title": "Вставьте готовый текст",
                "instruction": "Кликните в любое место страницы или текстовый редактор и нажмите Ctrl + V."
            }
        ]
    },
    {
        "id": "teams-task-background-blur",
        "appId": "teams",
        "title": "Настройка размытия или замены фона во время видеозвонка Teams",
        "summary": "Сокрытие домашней или офисной обстановки за счет нейросетевого маскирования заднего плана.",
        "whenToUse": "Перед важным совещанием с клиентами или руководством для соблюдения конфиденциальности.",
        "expectedResult": "Четкий силуэт спикера на размытом профессиональном фоне.",
        "category": "Видеоконференции",
        "difficulty": "easy",
        "estimatedTime": "1 минута",
        "tags": ["размытие фона", "камера", "конфиденциальность", "teams"],
        "steps": [
            {
                "stepNumber": 1,
                "title": "Откройте эффекты до входа во встречу",
                "instruction": "На экране предварительного просмотра перед нажатием «Присоединиться» включите камеру и нажмите «Эффекты и фон»."
            },
            {
                "stepNumber": 2,
                "title": "Выберите нужный фильтр",
                "instruction": "Выберите «Размытие» (Blur) для аккуратного размытия интерьера или официальный корпоративный фон."
            },
            {
                "stepNumber": 3,
                "title": "Примените во время идущего звонка",
                "instruction": "Если звонок уже идет: нажмите «...» (Еще) на верхней панели звонка -> «Видеоэффекты» -> выберите фон и нажмите «Применить»."
            }
        ]
    }
]

print(f"Generated {len(OFFICE_SHORTCUTS_ADDITIONS)} office shortcuts and {len(OFFICE_TASKS_ADDITIONS)} tasks")

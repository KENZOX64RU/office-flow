import type { Shortcut } from '../../types/index.ts';

export const BUSINESS_SHORTCUTS: Shortcut[] = [
  {
    "id": "1c-insert-row",
    "appId": "1c-enterprise",
    "title": "Создать новый элемент / строку",
    "description": "Создает новый документ в списке или добавляет новую строку в табличную часть",
    "keys": {
      "windows": [
        "Ins"
      ]
    },
    "category": "Основные операции",
    "popularity": 99
  },
  {
    "id": "1c-copy-item",
    "appId": "1c-enterprise",
    "title": "Копировать элемент / строку с сохранением данных",
    "description": "Создает точную копию текущего документа, контрагента или строки с автозаполнением всех полей",
    "keys": {
      "windows": [
        "F9"
      ]
    },
    "category": "Основные операции",
    "popularity": 98
  },
  {
    "id": "1c-post-close",
    "appId": "1c-enterprise",
    "title": "Провести и закрыть документ",
    "description": "Выполняет проведение документа по регистрам учёта и закрывает форму",
    "keys": {
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "Основные операции",
    "popularity": 97
  },
  {
    "id": "1c-mark-delete",
    "appId": "1c-enterprise",
    "title": "Пометить на удаление / Снять пометку",
    "description": "Устанавливает или снимает пометку на удаление объекта базы данных",
    "keys": {
      "windows": [
        "Delete"
      ]
    },
    "category": "Основные операции",
    "popularity": 95
  },
  {
    "id": "1c-clear-form-cache",
    "appId": "1c-enterprise",
    "title": "Очистить пользовательские настройки формы (сброс зависания)",
    "description": "Сбрасывает испорченные пользовательские настройки колонок и фильтров формы на заводские",
    "keys": {
      "windows": [
        "Shift",
        "F5"
      ]
    },
    "category": "Специализированные функции",
    "notes": "Часто спасает, если форма документа открывается пустой или зависла",
    "popularity": 92
  },
  {
    "id": "1c-quick-filter",
    "appId": "1c-enterprise",
    "title": "Быстрый отбор по значению текущей колонки",
    "description": "Мгновенно фильтрует журнал или список по значению в активной ячейке",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "L"
      ]
    },
    "category": "Таблицы и данные",
    "popularity": 94
  },
  {
    "id": "1c-find-in-list",
    "appId": "1c-enterprise",
    "title": "Поиск в текущем списке",
    "description": "Активирует строку поиска в журнале или справочнике",
    "keys": {
      "windows": [
        "Ctrl",
        "F"
      ]
    },
    "category": "Поиск",
    "popularity": 96
  },
  {
    "id": "1c-repeat-search",
    "appId": "1c-enterprise",
    "title": "Повторить поиск далее",
    "description": "Переходит к следующему совпадению по ранее заданному поисковому запросу",
    "keys": {
      "windows": [
        "F3"
      ]
    },
    "category": "Поиск",
    "popularity": 88
  },
  {
    "id": "1c-global-search",
    "appId": "1c-enterprise",
    "title": "Полнотекстовый глобальный поиск по базе",
    "description": "Ищет введённую строку во всех документах, контрагентах и регистрах конфигурации",
    "keys": {
      "windows": [
        "Alt",
        "F"
      ]
    },
    "category": "Поиск",
    "popularity": 90
  },
  {
    "id": "1c-built-in-calc",
    "appId": "1c-enterprise",
    "title": "Встроенный калькулятор 1С",
    "description": "Открывает фирменный калькулятор 1С с возможностью вставки результата в поле ввода",
    "keys": {
      "windows": [
        "Ctrl",
        "Q"
      ]
    },
    "category": "Специализированные функции",
    "popularity": 87
  },
  {
    "id": "1c-built-in-calendar",
    "appId": "1c-enterprise",
    "title": "Встроенный календарь 1С",
    "description": "Быстрый вызов всплывающего календаря для выбора рабочей даты",
    "keys": {
      "windows": [
        "Ctrl",
        "F7"
      ]
    },
    "category": "Специализированные функции",
    "popularity": 81
  },
  {
    "id": "1cb-osv",
    "appId": "1c-buh",
    "title": "Сформировать ОСВ / отчет",
    "description": "В открытом окне настройки отчета запускает пересчет проводок и построение ведомости",
    "keys": {
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "Отчёты и ОСВ",
    "popularity": 98
  },
  {
    "id": "1cb-drilldown",
    "appId": "1c-buh",
    "title": "Расшифровка сальдо (drill-down в карточку счета)",
    "description": "Открывает подробную карточку счета или аналитику субконто по выбранной строке",
    "keys": {
      "windows": [
        "Enter"
      ]
    },
    "category": "Отчёты и ОСВ",
    "popularity": 97
  },
  {
    "id": "1cb-show-postings",
    "appId": "1c-buh",
    "title": "Показать движения документа (Дт/Кт)",
    "description": "Открывает бухгалтерские и налоговые проводки, сформированные проведенным документом",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "D"
      ]
    },
    "category": "Проводки и документы",
    "popularity": 94
  },
  {
    "id": "1cb-period-change",
    "appId": "1c-buh",
    "title": "Быстрый выбор периода отчета",
    "description": "Открывает диалог выбора стандартных интервалов (Квартал, Месяц, Год)",
    "keys": {
      "windows": [
        "F4"
      ]
    },
    "category": "Отчёты и ОСВ",
    "popularity": 90
  },
  {
    "id": "zup-calc-salary",
    "appId": "1c-zup",
    "title": "Пересчитать зарплату сотрудника",
    "description": "В документе «Начисление зарплаты и взносов» запускает автоматический перерасчет по выделенной строке",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "C"
      ]
    },
    "category": "Расчёт зарплаты",
    "popularity": 95
  },
  {
    "id": "zup-staff-list",
    "appId": "1c-zup",
    "title": "Открыть штатное расписание и сотрудников",
    "description": "Переход в справочник физических лиц и трудовых договоров",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "E"
      ]
    },
    "category": "Кадровый учёт",
    "popularity": 91
  },
  {
    "id": "zup-timesheet",
    "appId": "1c-zup",
    "title": "Заполнить табель учета рабочего времени",
    "description": "Автоматически заполняет явки, выходные и больничные дни по производственному календарю",
    "keys": {
      "windows": [
        "Alt",
        "Z"
      ]
    },
    "category": "Учёт времени",
    "popularity": 89
  },
  {
    "id": "ut-item-pickup",
    "appId": "1c-ut",
    "title": "Открыть подбор товаров и остатков",
    "description": "Вызывает удобную форму подбора номенклатуры с актуальными свободными остатками и ценами",
    "keys": {
      "windows": [
        "F11"
      ]
    },
    "category": "Торговля и склад",
    "popularity": 96
  },
  {
    "id": "ut-reserve-check",
    "appId": "1c-ut",
    "title": "Проверить состояние обеспечения (резерв)",
    "description": "Показывает обеспеченность позиций заказа на складе или статус закупки у поставщика",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "O"
      ]
    },
    "category": "Заказы и резервы",
    "popularity": 93
  },
  {
    "id": "ut-price-types",
    "appId": "1c-ut",
    "title": "Выбрать вид цены (Оптовая, Розничная, Дилерская)",
    "description": "Пересчитывает колонки стоимости в табличной части по выбранному прайс-листу",
    "keys": {
      "windows": [
        "Alt",
        "P"
      ]
    },
    "category": "Ценообразование",
    "popularity": 90
  },
  {
    "id": "doc-approve-task",
    "appId": "1c-doc",
    "title": "Исполнить / Согласовать задачу",
    "description": "Подтверждает согласование документа и передает его следующему участнику маршрута",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "Enter"
      ]
    },
    "category": "Согласование процессов",
    "popularity": 95
  },
  {
    "id": "doc-attach-file",
    "appId": "1c-doc",
    "title": "Прикрепить файл к карточке документа",
    "description": "Открывает окно добавления скан-копии, проекта договора или приложения",
    "keys": {
      "windows": [
        "Ins"
      ]
    },
    "category": "Делопроизводство",
    "popularity": 92
  },
  {
    "id": "dia-sign",
    "appId": "diadoc",
    "title": "Подписать и отправить документ (КЭП)",
    "description": "Применяет квалифицированную электронную подпись к выделенному УПД или акту",
    "keys": {
      "web": [
        "Ctrl",
        "Enter"
      ],
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "ЭДО и подпись",
    "popularity": 98
  },
  {
    "id": "dia-filter-status",
    "appId": "diadoc",
    "title": "Фильтрация по статусу «Требуется подпись»",
    "description": "Мгновенно оставляет в списке только входящие документы, ожидающие подписания",
    "keys": {
      "web": [
        "Alt",
        "1"
      ],
      "windows": [
        "Alt",
        "1"
      ]
    },
    "category": "Журнал документов",
    "popularity": 92
  },
  {
    "id": "dia-reject",
    "appId": "diadoc",
    "title": "Отказать в подписи с комментарием",
    "description": "Формирует мотивированный отказ в подписании первичного документа",
    "keys": {
      "web": [
        "Alt",
        "D"
      ],
      "windows": [
        "Alt",
        "D"
      ]
    },
    "category": "ЭДО и подпись",
    "popularity": 88
  },
  {
    "id": "ext-verify",
    "appId": "extern",
    "title": "Контроль ошибок отчёта перед отправкой",
    "description": "Запускает форматно-логический контроль отчёта по проверочным базам налоговой службы",
    "keys": {
      "web": [
        "Ctrl",
        "Shift",
        "V"
      ],
      "windows": [
        "Ctrl",
        "Shift",
        "V"
      ]
    },
    "category": "Отчётность",
    "popularity": 97
  },
  {
    "id": "ext-receipt-status",
    "appId": "extern",
    "title": "Обновить квитанции из ведомств (ФНС, СФР)",
    "description": "Запрашивает извещения о вводе и квитанции о приеме отправленных налоговых деклараций",
    "keys": {
      "web": [
        "F5"
      ],
      "windows": [
        "F5"
      ]
    },
    "category": "Отчётность",
    "popularity": 94
  },
  {
    "id": "sbis-sign-all",
    "appId": "sbis",
    "title": "Массовое подписание пакета документов",
    "description": "Подписывает сертификатом электронной подписи все отмеченные галочками документы",
    "keys": {
      "web": [
        "Ctrl",
        "Shift",
        "S"
      ],
      "windows": [
        "Ctrl",
        "Shift",
        "S"
      ]
    },
    "category": "ЭДО и отчётность",
    "popularity": 96
  },
  {
    "id": "sbis-reconciliation",
    "appId": "sbis",
    "title": "Сверка с контрагентами и бюджетом",
    "description": "Открывает акт автоматической сверки взаиморасчетов по НДС и первичке",
    "keys": {
      "web": [
        "Alt",
        "S"
      ],
      "windows": [
        "Alt",
        "S"
      ]
    },
    "category": "Сверка",
    "popularity": 91
  },
  {
    "id": "ms-barcode-scan",
    "appId": "moysklad",
    "title": "Фокус в строку сканирования штрихкода",
    "description": "Переводит курсор для немедленного считывания товара сканером или ввода артикула",
    "keys": {
      "web": [
        "F7"
      ],
      "windows": [
        "F7"
      ]
    },
    "category": "Склад и касса",
    "popularity": 98
  },
  {
    "id": "ms-new-order",
    "appId": "moysklad",
    "title": "Создать новый заказ покупателя",
    "description": "Быстрое создание заявки на отгрузку",
    "keys": {
      "web": [
        "Alt",
        "N"
      ],
      "windows": [
        "Alt",
        "N"
      ]
    },
    "category": "Продажи",
    "popularity": 94
  },
  {
    "id": "bx-global-search",
    "appId": "bitrix24",
    "title": "Быстрый умный поиск Битрикс24",
    "description": "Открывает строку поиска по задачам, сотрудникам, CRM-сделкам и чатам",
    "keys": {
      "web": [
        "Ctrl",
        "Space"
      ],
      "windows": [
        "Ctrl",
        "Space"
      ],
      "macos": [
        "Cmd",
        "Space"
      ]
    },
    "category": "Навигация и портал",
    "popularity": 96
  },
  {
    "id": "bx-new-task",
    "appId": "bitrix24",
    "title": "Создать быструю задачу",
    "description": "Открывает окно постановки задачи с ответственным и крайним сроком (дедлайном)",
    "keys": {
      "web": [
        "Alt",
        "T"
      ],
      "windows": [
        "Alt",
        "T"
      ],
      "macos": [
        "Option",
        "T"
      ]
    },
    "category": "Задачи и проекты",
    "popularity": 95
  },
  {
    "id": "amo-new-lead",
    "appId": "amocrm",
    "title": "Быстрое добавление сделки",
    "description": "Создает карточку сделки в первом этапе текущей воронки продаж",
    "keys": {
      "web": [
        "Alt",
        "N"
      ],
      "windows": [
        "Alt",
        "N"
      ]
    },
    "category": "Воронка продаж",
    "popularity": 96
  },
  {
    "id": "amo-task-create",
    "appId": "amocrm",
    "title": "Поставить напоминание / задачу по клиенту",
    "description": "Назначает дату следующего звонка или отправки коммерческого предложения",
    "keys": {
      "web": [
        "Alt",
        "T"
      ],
      "windows": [
        "Alt",
        "T"
      ]
    },
    "category": "Задачи менеджера",
    "popularity": 94
  },
  {
    "id": "1c-list-customize",
    "appId": "1c-enterprise",
    "title": "Настроить список (колонки и группировка)",
    "description": "Открывает окно настройки видимости полей, сортировки и условного оформления списка",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "A"
      ]
    },
    "category": "Таблицы и данные",
    "popularity": 85
  },
  {
    "id": "1c-save-as",
    "appId": "1c-enterprise",
    "title": "Сохранить отчёт или печатную форму как файл",
    "description": "Сохраняет сформированную таблицу отчёта в файл Excel (.xlsx) или PDF",
    "keys": {
      "windows": [
        "Ctrl",
        "S"
      ]
    },
    "category": "Файлы и документы",
    "popularity": 91
  },
  {
    "id": "1c-print-doc",
    "appId": "1c-enterprise",
    "title": "Печать печатной формы",
    "description": "Отправляет активную печатную форму на системный принтер",
    "keys": {
      "windows": [
        "Ctrl",
        "P"
      ]
    },
    "category": "Файлы и документы",
    "popularity": 93
  },
  {
    "id": "1c-buh-osv",
    "appId": "1c-buh",
    "title": "Сформировать ОСВ (в форме отчета)",
    "description": "В открытом отчёте Оборотно-сальдовая ведомость запускает расчёт и построение таблицы",
    "keys": {
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "Основные операции",
    "popularity": 95
  },
  {
    "id": "1c-buh-drilldown",
    "appId": "1c-buh",
    "title": "Расшифровка строки отчёта (drill-down)",
    "description": "Открывает детальную карточку счёта или отчёт по субконто для выделенной строки сальдо",
    "keys": {
      "windows": [
        "Enter"
      ]
    },
    "category": "Таблицы и данные",
    "popularity": 97
  },
  {
    "id": "zup-copy-doc",
    "appId": "1c-zup",
    "title": "Копирование документа начисления или приказа",
    "description": "Создает точную копию документа расчета зарплаты или кадрового перевода для ускорения ввода",
    "keys": {
      "windows": [
        "F9"
      ]
    },
    "category": "Документы и кадры",
    "popularity": 95
  },
  {
    "id": "zup-employee-search",
    "appId": "1c-zup",
    "title": "Поиск сотрудника по ФИО, табельному номеру или СНИЛС",
    "description": "Мгновенная фильтрация справочника сотрудников",
    "keys": {
      "windows": [
        "Ctrl",
        "F"
      ]
    },
    "category": "Справочники",
    "popularity": 96
  },
  {
    "id": "zup-calc-settings",
    "appId": "1c-zup",
    "title": "Настройка состава начислений и удержаний",
    "description": "Быстрый переход к видам расчетов и формулам надбавок",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "F11"
      ]
    },
    "category": "Настройки зарплаты",
    "popularity": 88
  },
  {
    "id": "zup-post-close",
    "appId": "1c-zup",
    "title": "Провести и закрыть документ",
    "description": "Регистрирует движения по регистрам зарплаты и налогов и закрывает форму",
    "keys": {
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "Документы и кадры",
    "popularity": 98
  },
  {
    "id": "zup-calc-field",
    "appId": "1c-zup",
    "title": "Быстрый калькулятор в числовом поле",
    "description": "Позволяет выполнять арифметические действия прямо в ячейке суммы",
    "keys": {
      "windows": [
        "Ctrl",
        "Q"
      ]
    },
    "category": "Ввод данных",
    "popularity": 91
  },
  {
    "id": "zup-mark-deletion",
    "appId": "1c-zup",
    "title": "Пометить на удаление / отменить пометку",
    "description": "Устанавливает признак удаления на ошибочно введенный документ",
    "keys": {
      "windows": [
        "Delete"
      ]
    },
    "category": "Редактирование",
    "popularity": 89
  },
  {
    "id": "ut-copy-order",
    "appId": "1c-ut",
    "title": "Копирование заказа клиента или реализации",
    "description": "Позволяет быстро перевыставить регулярный заказ постоянному покупателю",
    "keys": {
      "windows": [
        "F9"
      ]
    },
    "category": "Продажи и заказы",
    "popularity": 97
  },
  {
    "id": "ut-print-package",
    "appId": "1c-ut",
    "title": "Печать комплекта отгрузочных документов",
    "description": "Пакетная печать ТОРГ-12, счета-фактуры, УПД и транспортной накладной",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "P"
      ]
    },
    "category": "Печать и экспорт",
    "popularity": 94
  },
  {
    "id": "ut-barcode-search",
    "appId": "1c-ut",
    "title": "Поиск номенклатуры по штрихкоду или артикулу",
    "description": "Подбор позиции сканером или ручным вводом кода EAN-13",
    "keys": {
      "windows": [
        "F7"
      ]
    },
    "category": "Склад и номенклатура",
    "popularity": 96
  },
  {
    "id": "ut-doc-chain",
    "appId": "1c-ut",
    "title": "Открыть структуру подчиненности документа",
    "description": "Визуализация всей цепочки: Сделка -> Заказ -> Реализация -> Оплата",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "D"
      ]
    },
    "category": "Анализ цепочки",
    "popularity": 92
  },
  {
    "id": "ut-post-close",
    "appId": "1c-ut",
    "title": "Провести и закрыть документ отгрузки",
    "description": "Списывает остатки со склада и формирует задолженность клиента",
    "keys": {
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "Продажи и заказы",
    "popularity": 98
  },
  {
    "id": "ut-insert-row",
    "appId": "1c-ut",
    "title": "Добавить новую строку в табличную часть товаров",
    "description": "Вставляет новую позицию в список реализуемой продукции",
    "keys": {
      "windows": [
        "Insert"
      ]
    },
    "category": "Ввод данных",
    "popularity": 90
  },
  {
    "id": "doc-send-for-approval",
    "appId": "1c-doc",
    "title": "Отправить документ на согласование по маршруту",
    "description": "Запускает процесс согласования по настроенной матрице согласующих лиц",
    "keys": {
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "Процессы и согласование",
    "popularity": 96
  },
  {
    "id": "doc-my-tasks",
    "appId": "1c-doc",
    "title": "Перейти в список «Задачи мне»",
    "description": "Открывает входящую очередь поручений, документов на рассмотрение и подписание",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "T"
      ]
    },
    "category": "Навигация",
    "popularity": 95
  },
  {
    "id": "doc-version-history",
    "appId": "1c-doc",
    "title": "История версий прикрепленного файла договора",
    "description": "Показывает журнал правок файлов Word/PDF с возможностью сравнения версий",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "S"
      ]
    },
    "category": "Файлы и версии",
    "popularity": 91
  },
  {
    "id": "doc-create-based-on",
    "appId": "1c-doc",
    "title": "Создать процесс на основании документа",
    "description": "Позволяет запустить ознакомление, исполнение или поручение",
    "keys": {
      "windows": [
        "F9"
      ]
    },
    "category": "Процессы и согласование",
    "popularity": 89
  },
  {
    "id": "doc-search-reg-number",
    "appId": "1c-doc",
    "title": "Поиск документа по регистрационному номеру",
    "description": "Быстрый отбор по входящему или исходящему индексу канцелярии",
    "keys": {
      "windows": [
        "Ctrl",
        "F"
      ]
    },
    "category": "Канцелярия",
    "popularity": 92
  },
  {
    "id": "dia-sign-send",
    "appId": "diadoc",
    "title": "Подписать и отправить выбранные пакеты документов",
    "description": "Заверяет УПД, акты или счета усиленной квалифицированной электронной подписью (КЭП)",
    "keys": {
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "ЭДО и подписание",
    "popularity": 98
  },
  {
    "id": "dia-download-pdf-stamp",
    "appId": "diadoc",
    "title": "Скачать документ с синей визуализацией штампа ЭП",
    "description": "Формирует печатную форму с отметкой о сертификате, владельце и дате подписания",
    "keys": {
      "windows": [
        "Ctrl",
        "P"
      ]
    },
    "category": "Печать и экспорт",
    "popularity": 95
  },
  {
    "id": "dia-reject-comment",
    "appId": "diadoc",
    "title": "Отказать в подписи с обязательным комментарием",
    "description": "Отклоняет входящий документ с указанием расхождений в суммах или номенклатуре",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "D"
      ]
    },
    "category": "ЭДО и подписание",
    "popularity": 90
  },
  {
    "id": "dia-upload-file",
    "appId": "diadoc",
    "title": "Загрузить документ с диска компьютера",
    "description": "Открывает проводник для добавления неформализованных файлов или сканов договоров",
    "keys": {
      "windows": [
        "Ctrl",
        "U"
      ]
    },
    "category": "Отправка",
    "popularity": 88
  },
  {
    "id": "dia-find-inn",
    "appId": "diadoc",
    "title": "Поиск контрагента по ИНН в каталоге Диадока",
    "description": "Проверяет наличие роуминга или прямого подключения партнера к системе",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "F"
      ]
    },
    "category": "Контрагенты",
    "popularity": 92
  },
  {
    "id": "ext-check-report",
    "appId": "extern",
    "title": "Контроль и проверка отчета перед отправкой",
    "description": "Запускает встроенный камеральный контроль ФНС и СФР на контрольные соотношения",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "K"
      ]
    },
    "category": "Проверка отчетности",
    "popularity": 97
  },
  {
    "id": "ext-send-report",
    "appId": "extern",
    "title": "Отправить отчет в контролирующий орган",
    "description": "Шифрует и отправляет налоговую или статистическую декларацию",
    "keys": {
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "Отправка",
    "popularity": 98
  },
  {
    "id": "ext-status-refresh",
    "appId": "extern",
    "title": "Обновить статусы документооборота",
    "description": "Проверяет поступление извещений о доставке и квитанций о приеме от ФНС",
    "keys": {
      "windows": [
        "F5"
      ]
    },
    "category": "Статусы сдачи",
    "popularity": 95
  },
  {
    "id": "ext-print-receipt",
    "appId": "extern",
    "title": "Печать квитанции о приеме с ЭП",
    "description": "Формирует юридически значимое подтверждение успешной сдачи отчета",
    "keys": {
      "windows": [
        "Ctrl",
        "P"
      ]
    },
    "category": "Печать и экспорт",
    "popularity": 92
  },
  {
    "id": "ext-export-xml",
    "appId": "extern",
    "title": "Выгрузить отчет в формате XML",
    "description": "Экспорт формализованного файла для архива или загрузки в сторонние системы",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "E"
      ]
    },
    "category": "Экспорт",
    "popularity": 89
  },
  {
    "id": "sbis-sign",
    "appId": "sbis",
    "title": "Массовое подписание документов КЭП",
    "description": "Заверяет все выделенные документы сертификатом электронной подписи за один клик",
    "keys": {
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "ЭДО и отчетность",
    "popularity": 98
  },
  {
    "id": "sbis-upload-1c",
    "appId": "sbis",
    "title": "Загрузить документы из внешней базы 1С",
    "description": "Импортирует готовые накладные, счета и отчеты прямо из учетной программы",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "U"
      ]
    },
    "category": "Импорт и интеграция",
    "popularity": 94
  },
  {
    "id": "sbis-search-doc",
    "appId": "sbis",
    "title": "Поиск документа по номеру или сумме",
    "description": "Мгновенная фильтрация журнала по контрагенту, номеру счета или сумме с НДС",
    "keys": {
      "windows": [
        "Ctrl",
        "F"
      ]
    },
    "category": "Поиск",
    "popularity": 92
  },
  {
    "id": "sbis-verify-partner",
    "appId": "sbis",
    "title": "Проверка благонадежности контрагента (Все о компаниях)",
    "description": "Показывает выручку, арбитражи, риски банкротства и блокировки счетов партнера",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "B"
      ]
    },
    "category": "Проверка партнеров",
    "popularity": 93
  },
  {
    "id": "sbis-clarify",
    "appId": "sbis",
    "title": "Запросить уточнение / корректировку документа",
    "description": "Отправляет запрос контрагенту на исправление реквизитов или цен",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "R"
      ]
    },
    "category": "ЭДО и отчетность",
    "popularity": 88
  },
  {
    "id": "ms-new-supply",
    "appId": "moysklad",
    "title": "Создать Приемку товаров от поставщика",
    "description": "Оприходование поступившей партии продукции на склад",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "P"
      ]
    },
    "category": "Закупки и склад",
    "popularity": 92
  },
  {
    "id": "ms-barcode-search",
    "appId": "moysklad",
    "title": "Быстрый поиск товара по штрихкоду",
    "description": "Позиционирует курсор в строке поиска товаров для ввода сканером",
    "keys": {
      "windows": [
        "F7"
      ]
    },
    "category": "Склад",
    "popularity": 95
  },
  {
    "id": "ms-save-conduct",
    "appId": "moysklad",
    "title": "Сохранить и провести документ",
    "description": "Фиксирует проводки и обновляет складские остатки в реальном времени",
    "keys": {
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "Документы",
    "popularity": 98
  },
  {
    "id": "ms-print-labels",
    "appId": "moysklad",
    "title": "Печать ценников и термоэтикеток со штрихкодами",
    "description": "Отправляет макет этикеток на термопринтер для маркировки товара",
    "keys": {
      "windows": [
        "Alt",
        "P"
      ]
    },
    "category": "Печать",
    "popularity": 90
  },
  {
    "id": "ms-inventory",
    "appId": "moysklad",
    "title": "Создать документ инвентаризации остатков",
    "description": "Сверка фактического наличия товара на складе с учетными данными",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "I"
      ]
    },
    "category": "Склад",
    "popularity": 87
  },
  {
    "id": "b24-send-comment",
    "appId": "bitrix24",
    "title": "Отправить комментарий или результат задачи",
    "description": "Быстрая отправка текста в ленту комментариев без клика мышью",
    "keys": {
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "Задачи и проекты",
    "popularity": 98
  },
  {
    "id": "b24-new-task",
    "appId": "bitrix24",
    "title": "Быстрое создание задачи из любого раздела",
    "description": "Открывает форму постановки задачи с выбором крайнего срока и ответственного",
    "keys": {
      "windows": [
        "Shift",
        "Alt",
        "N"
      ]
    },
    "category": "Задачи и проекты",
    "popularity": 96
  },
  {
    "id": "b24-global-search",
    "appId": "bitrix24",
    "title": "Глобальный поиск по всей системе Битрикс24",
    "description": "Поиск сделок, контактов, лидов, документов и сообщений коллег",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "F"
      ]
    },
    "category": "Поиск",
    "popularity": 94
  },
  {
    "id": "b24-open-chat",
    "appId": "bitrix24",
    "title": "Открыть мессенджер и список корпоративных чатов",
    "description": "Быстрый вызов боковой панели диалогов и видеозвонков",
    "keys": {
      "windows": [
        "Shift",
        "Alt",
        "M"
      ]
    },
    "category": "Коммуникации",
    "popularity": 92
  },
  {
    "id": "b24-crm-lead",
    "appId": "bitrix24",
    "title": "Создать новую сделку или лид в CRM",
    "description": "Внесение нового контакта или заявки в канбан продаж",
    "keys": {
      "windows": [
        "Shift",
        "Alt",
        "C"
      ]
    },
    "category": "CRM и сделки",
    "popularity": 93
  },
  {
    "id": "b24-time-tracker",
    "appId": "bitrix24",
    "title": "Панель учета рабочего дня и тайм-трекинга",
    "description": "Начало / завершение рабочего дня и отчет о проделанной работе",
    "keys": {
      "windows": [
        "Shift",
        "Alt",
        "T"
      ]
    },
    "category": "Рабочий день",
    "popularity": 89
  },
  {
    "id": "amo-save",
    "appId": "amocrm",
    "title": "Сохранить карточку сделки или контакта",
    "description": "Сохранение всех внесенных правок в CRM",
    "keys": {
      "windows": [
        "Ctrl",
        "Enter"
      ]
    },
    "category": "Сделки и продажи",
    "popularity": 98
  },
  {
    "id": "amo-search",
    "appId": "amocrm",
    "title": "Фокус на строке поиска сделок и контактов",
    "description": "Позволяет быстро найти клиента по номеру телефона или имени",
    "keys": {
      "windows": [
        "F"
      ]
    },
    "category": "Поиск",
    "popularity": 96
  },
  {
    "id": "amo-new-task",
    "appId": "amocrm",
    "title": "Поставить задачу менеджеру по сделке",
    "description": "Создает напоминание связаться с клиентом или отправить КП",
    "keys": {
      "windows": [
        "T"
      ]
    },
    "category": "Задачи и контроль",
    "popularity": 94
  },
  {
    "id": "amo-new-contact",
    "appId": "amocrm",
    "title": "Создать нового покупателя / контактное лицо",
    "description": "Открывает окно ввода телефона, почты и реквизитов партнера",
    "keys": {
      "windows": [
        "C"
      ]
    },
    "category": "База контактов",
    "popularity": 91
  },
  {
    "id": "amo-switch-pipeline",
    "appId": "amocrm",
    "title": "Переключение этапов воронки продаж",
    "description": "Быстрый переход между этапами сделок в режиме канбан-доски",
    "keys": {
      "windows": [
        "Alt",
        "1"
      ]
    },
    "category": "Сделки и продажи",
    "popularity": 87
  },
  {
    "id": "notion-slash",
    "appId": "notion",
    "title": "Меню команд и блоков Notion (Slash Commands)",
    "description": "Вставка заголовков, таблиц, чекбоксов, баз данных и разделителей",
    "keys": {
      "windows": [
        "/"
      ]
    },
    "category": "Создание блоков",
    "popularity": 99
  },
  {
    "id": "notion-quick-find",
    "appId": "notion",
    "title": "Быстрый поиск и переход на страницу (Quick Find)",
    "description": "Глобальный поиск по всем базам знаний и рабочим пространствам",
    "keys": {
      "windows": [
        "Ctrl",
        "P"
      ],
      "macos": [
        "Cmd",
        "P"
      ]
    },
    "category": "Навигация",
    "popularity": 97
  },
  {
    "id": "notion-toggle-theme",
    "appId": "notion",
    "title": "Переключить темную / светлую тему оформления",
    "description": "Мгновенное переключение цветовой схемы интерфейса",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "L"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "L"
      ]
    },
    "category": "Интерфейс",
    "popularity": 92
  },
  {
    "id": "notion-highlight",
    "appId": "notion",
    "title": "Выделить текст последним цветом маркера",
    "description": "Быстрая цветовая подсветка ключевых мыслей и тезисов в конспекте",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "H"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "H"
      ]
    },
    "category": "Форматирование",
    "popularity": 93
  },
  {
    "id": "notion-toggle-list",
    "appId": "notion",
    "title": "Превратить блок в раскрывающийся список (Toggle)",
    "description": "Сворачивает детальную информацию под аккуратный интерактивный заголовок",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "8"
      ],
      "macos": [
        "Cmd",
        "Shift",
        "8"
      ]
    },
    "category": "Структура блоков",
    "popularity": 94
  },
  {
    "id": "notion-todo",
    "appId": "notion",
    "title": "Превратить блок в чекбокс задачи (To-Do)",
    "description": "Создает кликабельный флажок для отслеживания выполнения",
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
    "category": "Структура блоков",
    "popularity": 95
  },
  {
    "id": "notion-nav-back",
    "appId": "notion",
    "title": "Перейти назад по истории посещенных страниц",
    "description": "Возвращает на предыдущую страницу в пространстве",
    "keys": {
      "windows": [
        "Ctrl",
        "["
      ],
      "macos": [
        "Cmd",
        "["
      ]
    },
    "category": "Навигация",
    "popularity": 91
  },
  {
    "id": "notion-fold-toggles",
    "appId": "notion",
    "title": "Свернуть / развернуть все тоглы на странице",
    "description": "Быстро наводит порядок на насыщенной текстовой странице",
    "keys": {
      "windows": [
        "Ctrl",
        "Alt",
        "T"
      ],
      "macos": [
        "Cmd",
        "Opt",
        "T"
      ]
    },
    "category": "Навигация",
    "popularity": 88
  },
  {
    "id": "trello-archive",
    "appId": "trello",
    "title": "Архивировать карточку под курсором",
    "description": "Быстро убирает завершенную задачу с доски в архив",
    "keys": {
      "windows": [
        "C"
      ]
    },
    "category": "Управление карточками",
    "popularity": 94
  },
  {
    "id": "trello-assign-me",
    "appId": "trello",
    "title": "Назначить себя ответственным на карточку",
    "description": "Добавляет ваш аватар к задаче под курсором мыши",
    "keys": {
      "windows": [
        "Space"
      ]
    },
    "category": "Участники",
    "popularity": 96
  },
  {
    "id": "trello-labels",
    "appId": "trello",
    "title": "Открыть меню цветных меток (Labels)",
    "description": "Присвоение цветных тегов приоритетов и направлений",
    "keys": {
      "windows": [
        "L"
      ]
    },
    "category": "Управление карточками",
    "popularity": 93
  },
  {
    "id": "trello-due-date",
    "appId": "trello",
    "title": "Установить срок выполнения задачи (Due date)",
    "description": "Открывает календарь дедлайна для карточки под курсором",
    "keys": {
      "windows": [
        "D"
      ]
    },
    "category": "Сроки и дедлайны",
    "popularity": 92
  },
  {
    "id": "trello-filter",
    "appId": "trello",
    "title": "Открыть панель фильтрации карточек доски",
    "description": "Фильтрация по участникам, срокам или цветным меткам",
    "keys": {
      "windows": [
        "F"
      ]
    },
    "category": "Фильтрация и поиск",
    "popularity": 95
  },
  {
    "id": "trello-help",
    "appId": "trello",
    "title": "Справочник всех горячих клавиш Trello",
    "description": "Показывает памятку по клавиатурной навигации по доске",
    "keys": {
      "windows": [
        "?"
      ]
    },
    "category": "Справка",
    "popularity": 86
  },
  {
    "id": "jira-create-issue",
    "appId": "jira",
    "title": "Быстрое создание задачи или бага (Create issue)",
    "description": "Открывает диалог заведения задачи из любого экрана Jira",
    "keys": {
      "windows": [
        "C"
      ]
    },
    "category": "Задачи и баги",
    "popularity": 98
  },
  {
    "id": "jira-edit-issue",
    "appId": "jira",
    "title": "Редактировать выбранную задачу",
    "description": "Переводит карточку задачи в режим редактирования полей",
    "keys": {
      "windows": [
        "E"
      ]
    },
    "category": "Задачи и баги",
    "popularity": 95
  },
  {
    "id": "jira-assign-me",
    "appId": "jira",
    "title": "Назначить задачу на себя (Assign to me)",
    "description": "Быстро берет задачу в личную работу без поиска своего имени",
    "keys": {
      "windows": [
        "I"
      ]
    },
    "category": "Исполнители",
    "popularity": 96
  },
  {
    "id": "jira-assign-other",
    "appId": "jira",
    "title": "Назначить исполнителя на задачу",
    "description": "Открывает выпадающий список участников команды для делегирования",
    "keys": {
      "windows": [
        "M"
      ]
    },
    "category": "Исполнители",
    "popularity": 93
  },
  {
    "id": "jira-navigate-issues",
    "appId": "jira",
    "title": "Перемещение по списку задач вверх / вниз",
    "description": "Быстрый просмотр бэклога спринта без использования мыши",
    "keys": {
      "windows": [
        "J",
        "K"
      ]
    },
    "category": "Навигация по бэклогу",
    "popularity": 92
  },
  {
    "id": "jira-search",
    "appId": "jira",
    "title": "Фокус на строке поиска задач и фильтров",
    "description": "Позволяет быстро найти тикет по номеру ключа (например, PROJ-104)",
    "keys": {
      "windows": [
        "/"
      ]
    },
    "category": "Поиск",
    "popularity": 94
  },
  {
    "id": "asana-quick-task",
    "appId": "asana",
    "title": "Быстрое создание задачи из любого места Asana",
    "description": "Открывает окно создания задачи с клавиатурным заполнением полей",
    "keys": {
      "windows": [
        "Tab",
        "Q"
      ]
    },
    "category": "Задачи и проекты",
    "popularity": 97
  },
  {
    "id": "asana-assign-me",
    "appId": "asana",
    "title": "Назначить задачу на себя",
    "description": "Устанавливает текущего пользователя исполнителем задачи",
    "keys": {
      "windows": [
        "Tab",
        "M"
      ]
    },
    "category": "Исполнители",
    "popularity": 95
  },
  {
    "id": "asana-due-date",
    "appId": "asana",
    "title": "Установить срок выполнения (Due date)",
    "description": "Открывает всплывающий календарь для выбора даты сдачи",
    "keys": {
      "windows": [
        "Tab",
        "D"
      ]
    },
    "category": "Сроки",
    "popularity": 94
  },
  {
    "id": "asana-my-tasks",
    "appId": "asana",
    "title": "Перейти в список «Мои задачи»",
    "description": "Открывает ваш персональный фокус задач на сегодня, неделю и позже",
    "keys": {
      "windows": [
        "Tab",
        "Y"
      ]
    },
    "category": "Навигация",
    "popularity": 93
  },
  {
    "id": "asana-subtask",
    "appId": "asana",
    "title": "Сделать задачу подзадачей (Indent)",
    "description": "Превращает выделенный пункт в дочернюю подзадачу родительского тикета",
    "keys": {
      "windows": [
        "Tab",
        "B"
      ]
    },
    "category": "Структура задач",
    "popularity": 89
  },
  {
    "id": "asana-search",
    "appId": "asana",
    "title": "Фокус на строке глобального поиска",
    "description": "Поиск по проектам, портфелям, задачам и коллегам",
    "keys": {
      "windows": [
        "Tab",
        "/"
      ]
    },
    "category": "Поиск",
    "popularity": 91
  },
  {
    "id": "clickup-new-task",
    "appId": "clickup",
    "title": "Быстрое создание задачи (New task modal)",
    "description": "Открывает окно создания задачи в выбранном пространстве",
    "keys": {
      "windows": [
        "T"
      ]
    },
    "category": "Задачи и списки",
    "popularity": 97
  },
  {
    "id": "clickup-search",
    "appId": "clickup",
    "title": "Глобальный командный поиск (Command Center)",
    "description": "Мгновенный поиск по всем папкам, документам и дашбордам ClickUp",
    "keys": {
      "windows": [
        "S"
      ]
    },
    "category": "Навигация и поиск",
    "popularity": 96
  },
  {
    "id": "clickup-assign-me",
    "appId": "clickup",
    "title": "Назначить задачу на себя",
    "description": "Присваивает исполнителем текущего пользователя",
    "keys": {
      "windows": [
        "M"
      ]
    },
    "category": "Исполнители",
    "popularity": 95
  },
  {
    "id": "clickup-due-date",
    "appId": "clickup",
    "title": "Выбор даты дедлайна задачи",
    "description": "Открывает диалог выбора срока завершения",
    "keys": {
      "windows": [
        "D"
      ]
    },
    "category": "Дедлайны",
    "popularity": 93
  },
  {
    "id": "clickup-priority",
    "appId": "clickup",
    "title": "Установить приоритет (Urgent, High, Normal, Low)",
    "description": "Быстрая цветовая расстановка критичности задачи",
    "keys": {
      "windows": [
        "P"
      ]
    },
    "category": "Приоритеты",
    "popularity": 91
  },
  {
    "id": "clickup-comment",
    "appId": "clickup",
    "title": "Фокус на поле ввода комментария",
    "description": "Позволяет быстро написать сообщение исполнителю",
    "keys": {
      "windows": [
        "C"
      ]
    },
    "category": "Обсуждения",
    "popularity": 89
  },
  {
    "id": "1cb-calc-field",
    "appId": "1c-buh",
    "title": "Встроенный калькулятор в числовых полях",
    "description": "Позволяет выполнять арифметические действия прямо внутри ячейки суммы",
    "keys": {
      "windows": [
        "F4"
      ]
    },
    "category": "Ввод данных",
    "popularity": 97
  },
  {
    "id": "1cb-open-history",
    "appId": "1c-buh",
    "title": "История открытых документов и отчетов",
    "description": "Вызов списка недавно просмотренных накладных и проводок",
    "keys": {
      "windows": [
        "Ctrl",
        "H"
      ]
    },
    "category": "Навигация",
    "popularity": 96
  },
  {
    "id": "1cb-print-document",
    "appId": "1c-buh",
    "title": "Печать текущего документа (ТОРГ-12, акт, счет)",
    "description": "Формирует типовую печатную форму с реквизитами",
    "keys": {
      "windows": [
        "Ctrl",
        "P"
      ]
    },
    "category": "Документы",
    "popularity": 98
  },
  {
    "id": "1cb-select-all-lines",
    "appId": "1c-buh",
    "title": "Выделить все строки табличной части",
    "description": "Массовое выделение позиций номенклатуры в документе",
    "keys": {
      "windows": [
        "Ctrl",
        "A"
      ]
    },
    "category": "Табличная часть",
    "popularity": 95
  },
  {
    "id": "1cb-move-row-up",
    "appId": "1c-buh",
    "title": "Переместить строку вверх в накладной",
    "description": "Сдвигает выделенную позицию номенклатуры на одну строчку выше",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "Up"
      ]
    },
    "category": "Табличная часть",
    "popularity": 91
  },
  {
    "id": "1cb-move-row-down",
    "appId": "1c-buh",
    "title": "Переместить строку вниз в накладной",
    "description": "Сдвигает выделенную позицию на одну строчку ниже",
    "keys": {
      "windows": [
        "Ctrl",
        "Shift",
        "Down"
      ]
    },
    "category": "Табличная часть",
    "popularity": 91
  },
  {
    "id": "1cb-account-drilldown",
    "appId": "1c-buh",
    "title": "Расшифровка оборотов по субсчетам (Drilldown)",
    "description": "Проваливается из ОСВ в карточку или анализ счета двойным кликом или Enter",
    "keys": {
      "windows": [
        "Enter / F2"
      ]
    },
    "category": "Отчеты",
    "popularity": 99
  },
  {
    "id": "1cb-refresh-report",
    "appId": "1c-buh",
    "title": "Переформировать бухгалтерский отчет",
    "description": "Обновляет данные отчета с учетом только что проведенных документов",
    "keys": {
      "windows": [
        "F5"
      ]
    },
    "category": "Отчеты",
    "popularity": 98
  },
  {
    "id": "1cb-find-in-list",
    "appId": "1c-buh",
    "title": "Поиск в списке по текущей колонке",
    "description": "Мгновенная фильтрация журнала документов по контрагенту, номеру или сумме",
    "keys": {
      "windows": [
        "Ctrl",
        "F"
      ]
    },
    "category": "Списки",
    "popularity": 99
  },
  {
    "id": "1cb-cancel-filter",
    "appId": "1c-buh",
    "title": "Снять фильтр и показать весь список",
    "description": "Сбрасывает установленные условия отбора в журнале",
    "keys": {
      "windows": [
        "Ctrl",
        "Q"
      ]
    },
    "category": "Списки",
    "popularity": 97
  },
  {
    "id": "1cb-open-calendar",
    "appId": "1c-buh",
    "title": "Вызов календаря в поле даты",
    "description": "Открывает календарный виджет для удобного выбора даты документа",
    "keys": {
      "windows": [
        "F4"
      ]
    },
    "category": "Ввод данных",
    "popularity": 96
  },
  {
    "id": "1cb-mark-delete",
    "appId": "1c-buh",
    "title": "Установить / снять пометку на удаление",
    "description": "Помечает документ или справочник для последующего удаления",
    "keys": {
      "windows": [
        "Del"
      ]
    },
    "category": "Операции",
    "popularity": 98
  },
  {
    "id": "zup-timesheet-fill",
    "appId": "1c-zup",
    "title": "Автозаполнение табеля учета рабочего времени (Т-13)",
    "description": "Заполняет явки, выходные и праздничные дни по производственному календарю",
    "keys": {
      "windows": [
        "Заполнить по графику"
      ]
    },
    "category": "Табель",
    "popularity": 97
  },
  {
    "id": "zup-employee-card",
    "appId": "1c-zup",
    "title": "Быстрый переход в карточку сотрудника",
    "description": "Открытие личных данных, истории начислений и вычетов",
    "keys": {
      "windows": [
        "F2 / Enter"
      ]
    },
    "category": "Справочники",
    "popularity": 96
  },
  {
    "id": "zup-print-payslip",
    "appId": "1c-zup",
    "title": "Печать расчетных листков сотрудников",
    "description": "Формирует расчетные листки с детализацией начислений и удержаний",
    "keys": {
      "windows": [
        "Ctrl",
        "P"
      ]
    },
    "category": "Печать",
    "popularity": 99
  },
  {
    "id": "zup-filter-subdiv",
    "appId": "1c-zup",
    "title": "Отбор сотрудников по подразделению",
    "description": "Фильтрация списка персонала в документах",
    "keys": {
      "windows": [
        "Ctrl",
        "F"
      ]
    },
    "category": "Списки",
    "popularity": 95
  },
  {
    "id": "zup-history-moves",
    "appId": "1c-zup",
    "title": "История кадровых перемещений сотрудника",
    "description": "Просмотр приказов о приеме, переводах и изменениях оплаты труда",
    "keys": {
      "windows": [
        "Ссылка «История» в карточке"
      ]
    },
    "category": "Кадры",
    "popularity": 92
  },
  {
    "id": "zup-ndfl-register",
    "appId": "1c-zup",
    "title": "Регистр налогового учета по НДФЛ",
    "description": "Сводка исчисленного и удержанного налога в разрезе дат выплат",
    "keys": {
      "windows": [
        "Отчеты -> Налоги -> Регистр НДФЛ"
      ]
    },
    "category": "Налоги",
    "popularity": 94
  },
  {
    "id": "dd-mass-sign",
    "appId": "diadoc",
    "title": "Массовое подписание документов сертификатом КЭП",
    "description": "Выделение группы УПД и актов для одновременного подписания электронной подписью",
    "keys": {
      "windows": [
        "Чекбоксы -> Подписать и отправить"
      ]
    },
    "category": "ЭДО",
    "popularity": 99
  },
  {
    "id": "dd-search-inn",
    "appId": "diadoc",
    "title": "Поиск контрагента по ИНН или названию",
    "description": "Находит цепочки входящих и исходящих документов партнера",
    "keys": {
      "windows": [
        "Ctrl",
        "F"
      ]
    },
    "category": "Поиск",
    "popularity": 98
  },
  {
    "id": "dd-filter-status",
    "appId": "diadoc",
    "title": "Фильтрация по статусу документа",
    "description": "Отбор: «Требуется подпись», «Подписан», «Отказан в подписи»",
    "keys": {
      "windows": [
        "Вкладки статусов"
      ]
    },
    "category": "Фильтры",
    "popularity": 96
  },
  {
    "id": "dd-reject-sign",
    "appId": "diadoc",
    "title": "Отказать в подписи с указанием причины",
    "description": "Формирует официальное уведомление об уточнении или отказе",
    "keys": {
      "windows": [
        "Кнопка «Отказать»"
      ]
    },
    "category": "ЭДО",
    "popularity": 95
  },
  {
    "id": "dd-download-zip",
    "appId": "diadoc",
    "title": "Выгрузка архива документов с электронными подписями (.sig)",
    "description": "Экспорт юридически значимого комплекта для налоговой проверки",
    "keys": {
      "windows": [
        "Скачать -> Документы с подписями"
      ]
    },
    "category": "Экспорт",
    "popularity": 97
  },
  {
    "id": "dd-invite-partner",
    "appId": "diadoc",
    "title": "Отправить приглашение к электронному документообороту",
    "description": "Установка связи с новым контрагентом в сети Диадок",
    "keys": {
      "windows": [
        "Контрагенты -> Поиск и приглашение"
      ]
    },
    "category": "Связи",
    "popularity": 93
  },
  {
    "id": "dd-roaming-connect",
    "appId": "diadoc",
    "title": "Роуминговая отправка документов",
    "description": "Передача УПД партнерам, работающим через СБИС, Такском или Калугу Астрал",
    "keys": {
      "windows": [
        "Настройка роуминга в карточке"
      ]
    },
    "category": "ЭДО",
    "popularity": 91
  },
  {
    "id": "ext-submit-report",
    "appId": "extern",
    "title": "Подписать и отправить отчет в контролирующий орган",
    "description": "Шифрование отчета на сертификате инспекции и отправка",
    "keys": {
      "windows": [
        "Кнопка «Подписать и отправить»"
      ]
    },
    "category": "Сдача отчетности",
    "popularity": 99
  },
  {
    "id": "ext-tax-calendar",
    "appId": "extern",
    "title": "Календарь бухгалтера по срокам сдачи",
    "description": "Отображает дедлайны по НДС, прибыли, 6-НДФЛ, РСВ и взносам",
    "keys": {
      "windows": [
        "Вкладка «Таблица отчетности»"
      ]
    },
    "category": "Сроки",
    "popularity": 97
  },
  {
    "id": "ext-fns-demand",
    "appId": "extern",
    "title": "Требования ИФНС и отправка квитанции о приеме",
    "description": "Мониторинг поступивших требований и подтверждение получения в течение 6 дней",
    "keys": {
      "windows": [
        "Раздел «Требования»"
      ]
    },
    "category": "ФНС",
    "popularity": 98
  },
  {
    "id": "ext-ens-statement",
    "appId": "extern",
    "title": "Запрос справки о сальдо ЕНС (Единый налоговый счет)",
    "description": "Сверка распределения платежей и задолженностей с налоговой инспекцией",
    "keys": {
      "windows": [
        "Запросы -> Справка о сальдо ЕНС"
      ]
    },
    "category": "ЕНС",
    "popularity": 98
  },
  {
    "id": "ext-cert-install",
    "appId": "extern",
    "title": "Установка и обновление сертификата КЭП в Контур.Плагине",
    "description": "Автоматическая настройка рабочего места для работы с электронной подписью",
    "keys": {
      "windows": [
        "Диагностика рабочего места"
      ]
    },
    "category": "Настройки",
    "popularity": 95
  },
  {
    "id": "ext-print-protocol",
    "appId": "extern",
    "title": "Печать квитанции о приеме и извещения о вводе",
    "description": "Подтверждение факта своевременной сдачи отчета",
    "keys": {
      "windows": [
        "Ctrl",
        "P"
      ]
    },
    "category": "Документы",
    "popularity": 96
  },
  {
    "id": "sbis-calendar-deadlines",
    "appId": "sbis",
    "title": "Календарь отчетности со статусами сдачи",
    "description": "Зеленые и красные индикаторы сдачи отчетов по всем юрлицам холдинга",
    "keys": {
      "windows": [
        "Раздел «Отчетность»"
      ]
    },
    "category": "Календарь",
    "popularity": 99
  },
  {
    "id": "sbis-super-check",
    "appId": "sbis",
    "title": "Суперсверка НДС и книги покупок/продаж с контрагентами",
    "description": "Автоматическое сопоставление счетов-фактур до отправки декларации по НДС",
    "keys": {
      "windows": [
        "Сверка -> НДС"
      ]
    },
    "category": "Сверка",
    "popularity": 99
  },
  {
    "id": "sbis-mass-send",
    "appId": "sbis",
    "title": "Массовая отправка документов клиентам",
    "description": "Пакетная подпись и отправка первичных документов покупателям",
    "keys": {
      "windows": [
        "Документы -> Исходящие -> Отправить"
      ]
    },
    "category": "ЭДО",
    "popularity": 97
  },
  {
    "id": "sbis-ens-balance",
    "appId": "sbis",
    "title": "Сверка ЕНС и распределение пеней",
    "description": "Интеграция с личным кабинетом ФНС для отображения реального сальдо",
    "keys": {
      "windows": [
        "Налоги -> Сальдо ЕНС"
      ]
    },
    "category": "Налоги",
    "popularity": 98
  },
  {
    "id": "sbis-edo-archive",
    "appId": "sbis",
    "title": "Поиск в архиве электронных документов",
    "description": "Мгновенный поиск договоров и актов по любому реквизиту",
    "keys": {
      "windows": [
        "Ctrl",
        "F"
      ]
    },
    "category": "Поиск",
    "popularity": 96
  },
  {
    "id": "sbis-sign-cloud",
    "appId": "sbis",
    "title": "Подписание документов мобильной или облачной подписью",
    "description": "Подтверждение отправки документа через приложение Saby",
    "keys": {
      "windows": [
        "Push-уведомление"
      ]
    },
    "category": "ЭДО",
    "popularity": 94
  },
  {
    "id": "sbis-buh-import",
    "appId": "sbis",
    "title": "Импорт отчетов из 1С в СБИС",
    "description": "Автоматическая загрузка выгруженных XML-файлов отчетности",
    "keys": {
      "windows": [
        "Загрузить из 1С"
      ]
    },
    "category": "Интеграция",
    "popularity": 97
  },
  {
    "id": "ms-remains-report",
    "appId": "moysklad",
    "title": "Отчет по остаткам товаров на складах",
    "description": "Контроль свободных остатков, резервов и себестоимости",
    "keys": {
      "windows": [
        "Товары -> Остатки"
      ]
    },
    "category": "Отчеты",
    "popularity": 97
  },
  {
    "id": "ms-stock-in",
    "appId": "moysklad",
    "title": "Оприходование и приемка товара от поставщика",
    "description": "Фиксация поступления новой партии на баланс склада",
    "keys": {
      "windows": [
        "Закупки -> Приемка"
      ]
    },
    "category": "Закупки",
    "popularity": 96
  },
  {
    "id": "ms-mass-status",
    "appId": "moysklad",
    "title": "Массовая смена статуса заказов",
    "description": "Перевод группы заказов в «Собран», «Отправлен» или «Доставлен»",
    "keys": {
      "windows": [
        "Выделение -> Изменить статус"
      ]
    },
    "category": "Продажи",
    "popularity": 95
  },
  {
    "id": "ms-cash-shift",
    "appId": "moysklad",
    "title": "Кассовая смена и чек в МойСклад Розница",
    "description": "Формирование чека по 54-ФЗ с фискализацией через онлайн-кассу",
    "keys": {
      "windows": [
        "Розница -> Открыть смену"
      ]
    },
    "category": "Касса",
    "popularity": 96
  }
];

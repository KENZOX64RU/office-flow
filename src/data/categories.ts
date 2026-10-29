import type { CategoryMeta } from '../types/index.ts';

export const APP_CATEGORIES: CategoryMeta[] = [
  {
    id: 'office',
    name: 'Офисные пакеты',
    description: 'Текстовые редакторы, презентации и офисные среды',
    icon: 'Briefcase'
  },
  {
    id: 'accounting',
    name: 'Бухгалтерия и учёт',
    description: '1С:Предприятие, ЭДО, складской и налоговый учёт',
    icon: 'Calculator'
  },
  {
    id: 'browsers',
    name: 'Браузеры и интернет',
    description: 'Веб-обозреватели, управление вкладками и кэшем',
    icon: 'Globe'
  },
  {
    id: 'communication',
    name: 'Почта и коммуникации',
    description: 'Мессенджеры, корпоративные чаты и видеоконференции',
    icon: 'MessageSquare'
  },
  {
    id: 'pdf',
    name: 'PDF и документы',
    description: 'Просмотр, редактирование, распознавание и объединение PDF',
    icon: 'FileText'
  },
  {
    id: 'analytics',
    name: 'Таблицы и аналитика',
    description: 'Электронные таблицы, BI-системы, сводки и трансформация',
    icon: 'BarChart3'
  },
  {
    id: 'pm',
    name: 'Проектное управление',
    description: 'Таск-трекеры, базы знаний, канбан-доски и agile',
    icon: 'CheckSquare'
  },
  {
    id: 'graphics',
    name: 'Графика и презентации',
    description: 'Интерфейсный дизайн, растровая и векторная графика',
    icon: 'Palette'
  },
  {
    id: 'windows',
    name: 'Системные инструменты Windows',
    description: 'Диспетчер задач, проводник, горячие клавиши ОС',
    icon: 'Monitor'
  },
  {
    id: 'admin',
    name: 'IT-инструменты и администрирование',
    description: 'PowerShell, командная строка, сетевые утилиты, SSH',
    icon: 'Terminal'
  }
];

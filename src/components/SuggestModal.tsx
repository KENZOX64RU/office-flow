import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { APP_CATEGORIES } from '../data/categories';
import { AppCategory } from '../types';

export const SuggestModal: React.FC = () => {
  const { suggestModalOpen, setSuggestModalOpen, showToast } = useApp();
  const [appName, setAppName] = useState('');
  const [category, setCategory] = useState<AppCategory>('office');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!suggestModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appName.trim()) return;

    // Save proposal to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('officeflow_proposals') || '[]');
      existing.push({
        id: Date.now(),
        appName,
        category,
        details,
        date: new Date().toISOString()
      });
      localStorage.setItem('officeflow_proposals', JSON.stringify(existing));
    } catch {}

    setSubmitted(true);
    showToast('Предложение отправлено! Спасибо за вклад.');
    setTimeout(() => {
      setSubmitted(false);
      setAppName('');
      setDetails('');
      setSuggestModalOpen(false);
    }, 1800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Предложить программу или дополнить справочник"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm animate-in fade-in duration-150 touch-none overscroll-none"
      onClick={() => setSuggestModalOpen(false)}
      onWheel={e => e.stopPropagation()}
    >
      <div
        className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800
          overflow-hidden animate-in zoom-in-95 duration-150 overscroll-contain"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Предложить программу или команду
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setSuggestModalOpen(false)}
            className="p-1 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Предложение принято!
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Мы добавим эту программу и проверим официальные сочетания клавиш в следующем обновлении базы.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                Название программы или инструмента *
              </label>
              <input
                type="text"
                required
                value={appName}
                onChange={e => setAppName(e.target.value)}
                placeholder="Например: Blender, VS Code, МойСклад Касса..."
                className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                Категория
              </label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as AppCategory)}
                className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {APP_CATEGORIES.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                Какие полезные горячие клавиши или инструкции добавить?
              </label>
              <textarea
                rows={3}
                value={details}
                onChange={e => setDetails(e.target.value)}
                placeholder="Опишите команды, версию программы или ссылку на официальную документацию..."
                className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSuggestModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Отмена
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Отправить</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

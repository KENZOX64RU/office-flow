import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl
        bg-zinc-900/95 dark:bg-zinc-100/95 text-white dark:text-zinc-900 text-sm font-medium
        shadow-xl shadow-black/15 backdrop-blur-md border border-white/10 dark:border-black/10
        animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 flex-shrink-0" />
      <span>{toastMessage}</span>
    </div>
  );
};

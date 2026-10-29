import React, { useState } from 'react';
import { Platform } from '../types';
import { formatKeyBadge, formatShortcutString } from '../utils/keyFormatter';
import { Copy, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface KeyComboBadgeProps {
  keys: string[];
  platform?: Platform;
  showCopyButton?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClickCopy?: (e: React.MouseEvent) => void;
}

export const KeyComboBadge: React.FC<KeyComboBadgeProps> = ({
  keys,
  platform,
  showCopyButton = true,
  size = 'md',
  className = '',
  onClickCopy
}) => {
  const { currentPlatform, copyText } = useApp();
  const activePlatform = platform || currentPlatform;
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClickCopy) {
      onClickCopy(e);
      return;
    }
    const str = formatShortcutString(keys, activePlatform);
    const success = await copyText(str);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };

  const sizeClasses = {
    sm: 'text-[11px] px-1.5 py-0.5 min-h-[22px]',
    md: 'text-xs px-2 py-1 min-h-[26px]',
    lg: 'text-sm px-2.5 py-1.5 min-h-[32px]'
  };

  return (
    <div className={`inline-flex items-center gap-1.5 flex-wrap ${className}`}>
      <div className="inline-flex items-center gap-1 flex-wrap">
        {keys.map((k, index) => {
          const badge = formatKeyBadge(k, activePlatform);
          return (
            <React.Fragment key={`${k}-${index}`}>
              <kbd
                className={`inline-flex items-center justify-center font-mono font-medium rounded-md
                  bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200
                  border border-zinc-200/90 dark:border-zinc-700/80
                  shadow-[0_1px_1px_rgba(0,0,0,0.06),0_2px_0_rgba(0,0,0,0.04)]
                  dark:shadow-[0_1px_1px_rgba(0,0,0,0.4),0_2px_0_rgba(0,0,0,0.3)]
                  select-all transition-all duration-150 hover:border-zinc-300 dark:hover:border-zinc-600
                  ${sizeClasses[size]}
                `}
              >
                <span className="font-semibold">{badge.label}</span>
              </kbd>
              {index < keys.length - 1 && (
                <span className="text-zinc-400 dark:text-zinc-500 text-xs font-medium select-none">+</span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {showCopyButton && (
        <button
          type="button"
          onClick={handleCopy}
          title="Скопировать комбинацию клавиш"
          aria-label="Скопировать комбинацию клавиш"
          className="p-1 rounded-md text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-200
            hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-400"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500 animate-in fade-in" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      )}
    </div>
  );
};

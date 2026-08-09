import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  accent?: 'bleu' | 'rouge';
  action?: ReactNode;
}

export function PageHeader({ icon: Icon, title, description, accent = 'bleu', action }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div className="flex items-center gap-3.5">
        <div
          className={clsx(
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl',
            accent === 'bleu'
              ? 'bg-bleu-50 text-bleu-600 dark:bg-bleu-950 dark:text-bleu-400'
              : 'bg-rouge-50 text-rouge-600 dark:bg-rouge-950 dark:text-rouge-400',
          )}
        >
          <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-800 dark:text-slate-100">{title}</h1>
          {description && <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>}
        </div>
      </div>
      {action}
    </div>
  );
}

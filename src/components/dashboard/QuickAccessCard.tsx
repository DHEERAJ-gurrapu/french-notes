import { Link } from 'react-router-dom';
import clsx from 'clsx';
import type { ResourceMeta } from '@/utils/resourceMeta';

interface QuickAccessCardProps {
  meta: ResourceMeta;
  count: number;
}

export function QuickAccessCard({ meta, count }: QuickAccessCardProps) {
  const Icon = meta.icon;
  return (
    <Link
      to={meta.path}
      className="group animate-fade-up flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/30"
    >
      <div
        className={clsx(
          'mb-4 flex h-11 w-11 items-center justify-center rounded-2xl transition-transform group-hover:scale-105',
          meta.accent === 'bleu'
            ? 'bg-bleu-50 text-bleu-600 dark:bg-bleu-950 dark:text-bleu-400'
            : 'bg-rouge-50 text-rouge-600 dark:bg-rouge-950 dark:text-rouge-400',
        )}
      >
        <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
      </div>
      <span className="font-display text-2xl font-bold text-slate-800 dark:text-slate-100">{count}</span>
      <span className="text-sm text-slate-500 dark:text-slate-400">{meta.label}</span>
    </Link>
  );
}

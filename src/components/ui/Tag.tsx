import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface TagProps {
  label: string;
  size?: 'sm' | 'md';
  active?: boolean;
  interactive?: boolean;
}

export function Tag({ label, size = 'sm', active = false, interactive = true }: TagProps) {
  const classes = clsx(
    'inline-flex items-center rounded-full font-medium transition-colors',
    size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm',
    active
      ? 'bg-bleu-600 text-white dark:bg-bleu-500'
      : 'bg-slate-100 text-slate-600 hover:bg-bleu-100 hover:text-bleu-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-bleu-900/60 dark:hover:text-bleu-300',
  );

  if (!interactive) {
    return <span className={classes}>{label}</span>;
  }

  return (
    <Link to={`/tags/${encodeURIComponent(label)}`} className={classes}>
      {label}
    </Link>
  );
}

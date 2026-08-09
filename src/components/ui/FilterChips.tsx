import clsx from 'clsx';

interface FilterChipsProps {
  options: { value: string; label: string; count?: number }[];
  active: string | null;
  onChange: (value: string | null) => void;
  allLabel?: string;
}

export function FilterChips({ options, active, onChange, allLabel = 'All' }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange(null)}
        className={clsx(
          'rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
          active === null
            ? 'bg-bleu-600 text-white dark:bg-bleu-500'
            : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800',
        )}
      >
        {allLabel}
      </button>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={clsx(
            'rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
            active === opt.value
              ? 'bg-bleu-600 text-white dark:bg-bleu-500'
              : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800',
          )}
        >
          {opt.label}
          {opt.count !== undefined && <span className="ml-1 opacity-60">({opt.count})</span>}
        </button>
      ))}
    </div>
  );
}

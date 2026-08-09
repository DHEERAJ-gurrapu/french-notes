import { ArrowUpDown } from 'lucide-react';

export type SortKey = 'updated' | 'created' | 'title';

const OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'updated', label: 'Recently updated' },
  { value: 'created', label: 'Recently added' },
  { value: 'title', label: 'Title A–Z' },
];

export function SortSelect({ value, onChange }: { value: SortKey; onChange: (v: SortKey) => void }) {
  return (
    <div className="relative">
      <ArrowUpDown className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortKey)}
        className="appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-8 pr-8 text-sm text-slate-600 focus:border-bleu-400 focus:outline-none focus:ring-2 focus:ring-bleu-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:focus:ring-bleu-900/50"
      >
        {OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

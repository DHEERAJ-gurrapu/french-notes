import type { ConjugationTable } from '@/types';

export function ConjugationTableView({ table }: { table: ConjugationTable }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
      <table className="w-full text-sm">
        <tbody>
          {table.rows.map((row) => (
            <tr
              key={row.pronoun}
              className="border-b border-slate-100 last:border-0 odd:bg-slate-50/60 dark:border-slate-800 dark:odd:bg-slate-800/30"
            >
              <td className="w-2/5 px-4 py-2.5 font-medium text-slate-500 dark:text-slate-400">{row.pronoun}</td>
              <td className="px-4 py-2.5 font-semibold text-slate-800 dark:text-slate-100">{row.form}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

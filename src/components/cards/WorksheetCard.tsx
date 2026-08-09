import { Link } from 'react-router-dom';
import { FileStack, Paperclip } from 'lucide-react';
import type { Worksheet } from '@/types';
import { Tag } from '@/components/ui/Tag';
import { FavoriteButton } from '@/components/ui/FavoriteButton';
import { formatDate } from '@/utils/date';

export function WorksheetCard({ worksheet }: { worksheet: Worksheet }) {
  return (
    <Link
      to={`/worksheets/${worksheet.id}`}
      className="group animate-fade-up flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-rouge-200 hover:shadow-lg hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-rouge-900 dark:hover:shadow-black/30"
    >
      <div className="mb-3 flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rouge-50 text-rouge-600 dark:bg-rouge-950 dark:text-rouge-400">
          <FileStack className="h-4.5 w-4.5" strokeWidth={1.75} />
        </div>
        <FavoriteButton id={worksheet.id} />
      </div>
      <h3 className="line-clamp-2 font-semibold text-slate-800 group-hover:text-rouge-700 dark:text-slate-100 dark:group-hover:text-rouge-400">
        {worksheet.title}
      </h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{worksheet.subject}</p>

      <div className="mt-3 flex flex-1 flex-wrap items-end gap-1.5">
        {worksheet.tags.slice(0, 3).map((t) => (
          <Tag key={t} label={t} interactive={false} />
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
        <span className="flex items-center gap-1">
          <Paperclip className="h-3 w-3" /> {worksheet.files.length} file{worksheet.files.length === 1 ? '' : 's'}
        </span>
        <span>{formatDate(worksheet.date)}</span>
      </div>
    </Link>
  );
}

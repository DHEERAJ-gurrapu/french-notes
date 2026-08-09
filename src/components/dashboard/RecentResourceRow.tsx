import { Link } from 'react-router-dom';
import clsx from 'clsx';
import type { Resource } from '@/types';
import { RESOURCE_META, resourcePath } from '@/utils/resourceMeta';
import { relativeTime } from '@/utils/date';

export function RecentResourceRow({ resource }: { resource: Resource }) {
  const meta = RESOURCE_META[resource.type];
  const Icon = meta.icon;
  return (
    <Link
      to={resourcePath(resource.id, resource.type)}
      className="flex items-center gap-3 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60"
    >
      <div
        className={clsx(
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
          meta.accent === 'bleu'
            ? 'bg-bleu-50 text-bleu-600 dark:bg-bleu-950 dark:text-bleu-400'
            : 'bg-rouge-50 text-rouge-600 dark:bg-rouge-950 dark:text-rouge-400',
        )}
      >
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">{resource.title}</p>
        <p className="truncate text-xs text-slate-400 dark:text-slate-500">{meta.label}</p>
      </div>
      <span className="shrink-0 text-xs text-slate-400 dark:text-slate-500">{relativeTime(resource.updatedAt)}</span>
    </Link>
  );
}

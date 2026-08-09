import { Link } from 'react-router-dom';
import clsx from 'clsx';
import type { Resource } from '@/types';
import { RESOURCE_META, resourcePath, resourceSubtitle } from '@/utils/resourceMeta';
import { relativeTime } from '@/utils/date';
import { Tag } from '@/components/ui/Tag';
import { FavoriteButton } from '@/components/ui/FavoriteButton';

export function ResourceCard({ resource }: { resource: Resource }) {
  const meta = RESOURCE_META[resource.type];
  const Icon = meta.icon;
  const subtitle = resourceSubtitle(resource);

  return (
    <Link
      to={resourcePath(resource.id, resource.type)}
      className="group animate-fade-up relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-bleu-200 hover:shadow-lg hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-bleu-800 dark:hover:shadow-black/30"
    >
      <div className="mb-3 flex items-start justify-between">
        <div
          className={clsx(
            'flex h-9 w-9 items-center justify-center rounded-xl',
            meta.accent === 'bleu'
              ? 'bg-bleu-50 text-bleu-600 dark:bg-bleu-950 dark:text-bleu-400'
              : 'bg-rouge-50 text-rouge-600 dark:bg-rouge-950 dark:text-rouge-400',
          )}
        >
          <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
        </div>
        <FavoriteButton id={resource.id} />
      </div>

      <h3 className="line-clamp-2 font-semibold text-slate-800 group-hover:text-bleu-700 dark:text-slate-100 dark:group-hover:text-bleu-400">
        {resource.title}
      </h3>
      {subtitle && (
        <p className="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
      )}

      <div className="mt-4 flex flex-1 flex-wrap items-end gap-1.5">
        {resource.tags.slice(0, 3).map((t) => (
          <Tag key={t} label={t} interactive={false} />
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
        <span>{meta.singular}</span>
        <span>{relativeTime(resource.updatedAt)}</span>
      </div>
    </Link>
  );
}

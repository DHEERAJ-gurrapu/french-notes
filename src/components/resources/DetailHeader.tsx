import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Pencil } from 'lucide-react';
import clsx from 'clsx';
import { Tag } from '@/components/ui/Tag';
import { FavoriteButton } from '@/components/ui/FavoriteButton';
import { LinkButton } from '@/components/ui/Button';
import { DeleteResourceButton } from './DeleteResourceButton';

interface DetailHeaderProps {
  icon: LucideIcon;
  accent?: 'bleu' | 'rouge';
  eyebrow: string;
  title: string;
  id: string;
  tags: string[];
  meta?: ReactNode;
  editHref: string;
  listHref: string;
}

export function DetailHeader({
  icon: Icon,
  accent = 'bleu',
  eyebrow,
  title,
  id,
  tags,
  meta,
  editHref,
  listHref,
}: DetailHeaderProps) {
  return (
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3.5">
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
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
              {eyebrow}
            </p>
            <h1 className="font-display text-xl font-bold text-slate-800 dark:text-slate-100 sm:text-2xl">
              {title}
            </h1>
            {meta && <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{meta}</div>}
          </div>
        </div>
        <FavoriteButton id={id} className="h-9 w-9" />
      </div>

      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      )}

      <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
        <LinkButton to={editHref} variant="secondary" size="sm" icon={<Pencil className="h-3.5 w-3.5" />}>
          Edit
        </LinkButton>
        <DeleteResourceButton id={id} title={title} redirectTo={listHref} />
      </div>
    </div>
  );
}

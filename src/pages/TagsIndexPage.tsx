import { Link } from 'react-router-dom';
import { TagIcon } from 'lucide-react';
import { useAllTags } from '@/hooks/useResources';
import { PageHeader } from '@/components/ui/PageHeader';
import { EmptyState } from '@/components/ui/EmptyState';

export function TagsIndexPage() {
  const tags = useAllTags();

  return (
    <div>
      <PageHeader icon={TagIcon} title="Tags" description="Browse every resource by the tags you've attached to it." />
      {tags.length === 0 ? (
        <EmptyState icon={TagIcon} title="No tags yet" description="Tags will appear here once your resources have some." />
      ) : (
        <div className="flex flex-wrap gap-2.5">
          {tags.map(({ tag, count }) => (
            <Link
              key={tag}
              to={`/tags/${encodeURIComponent(tag)}`}
              className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 ring-1 ring-slate-200 transition-colors hover:bg-bleu-50 hover:text-bleu-700 hover:ring-bleu-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-bleu-950 dark:hover:text-bleu-300"
            >
              {tag}
              <span className="rounded-full bg-slate-100 px-1.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                {count}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

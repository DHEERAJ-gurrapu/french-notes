import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, SearchX } from 'lucide-react';
import { useAllResources } from '@/hooks/useResources';
import { searchResources, groupResultsByType } from '@/utils/search';
import { PageHeader } from '@/components/ui/PageHeader';
import { SearchBar } from '@/components/ui/SearchBar';
import { EmptyState } from '@/components/ui/EmptyState';
import { Tag } from '@/components/ui/Tag';
import { RESOURCE_META, resourcePath } from '@/utils/resourceMeta';
import type { ResourceType } from '@/types';

const TYPE_ORDER: ResourceType[] = ['note', 'worksheet', 'grammar', 'vocabulary', 'verb', 'pdf'];

export function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const resources = useAllResources();

  const grouped = useMemo(() => groupResultsByType(searchResources(resources, query)), [resources, query]);
  const totalCount = TYPE_ORDER.reduce((sum, t) => sum + grouped[t].length, 0);

  return (
    <div>
      <PageHeader icon={SearchIcon} title="Search" description="Search across every note, worksheet, grammar topic, vocabulary word, verb and PDF." />

      <div className="mb-8 max-w-xl">
        <SearchBar
          size="lg"
          value={query}
          onChange={(q) => setParams(q ? { q } : {}, { replace: true })}
          placeholder="Search my French notes…"
          autoFocus
        />
      </div>

      {!query.trim() ? (
        <EmptyState icon={SearchIcon} title="Start typing to search" description="Try “passé composé”, “family”, or any tag." />
      ) : totalCount === 0 ? (
        <EmptyState icon={SearchX} title="No results" description={`Nothing matched “${query}”. Try a different term.`} />
      ) : (
        <div className="space-y-8">
          {TYPE_ORDER.filter((type) => grouped[type].length > 0).map((type) => {
            const meta = RESOURCE_META[type];
            const Icon = meta.icon;
            return (
              <section key={type}>
                <h2 className="mb-3 flex items-center gap-2 font-display text-base font-semibold text-slate-800 dark:text-slate-100">
                  <Icon className="h-4.5 w-4.5" /> {meta.label}
                  <span className="text-sm font-normal text-slate-400">({grouped[type].length})</span>
                </h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {grouped[type].map((result) => (
                    <Link
                      key={result.resource.id}
                      to={resourcePath(result.resource.id, result.resource.type)}
                      className="rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-bleu-200 hover:bg-bleu-50/40 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-bleu-900 dark:hover:bg-bleu-950/20"
                    >
                      <p className="font-medium text-slate-800 dark:text-slate-100">{result.resource.title}</p>
                      <p className="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">{result.snippet}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {result.resource.tags.slice(0, 3).map((t) => (
                          <Tag key={t} label={t} interactive={false} />
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

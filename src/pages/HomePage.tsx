import { useMemo } from 'react';
import { Clock, Sparkles } from 'lucide-react';
import { useAllResources } from '@/hooks/useResources';
import { useRecentlyViewedResources } from '@/hooks/useFavoritesAndRecents';
import { SearchBar } from '@/components/ui/SearchBar';
import { QuickAccessCard } from '@/components/dashboard/QuickAccessCard';
import { RecentResourceRow } from '@/components/dashboard/RecentResourceRow';
import { RESOURCE_META } from '@/utils/resourceMeta';
import type { ResourceType } from '@/types';

const TYPE_ORDER: ResourceType[] = ['note', 'worksheet', 'grammar', 'vocabulary', 'verb', 'pdf'];

export function HomePage() {
  const resources = useAllResources();
  const recentlyViewed = useRecentlyViewedResources();

  const counts = useMemo(() => {
    const map = new Map<ResourceType, number>();
    for (const r of resources) map.set(r.type, (map.get(r.type) ?? 0) + 1);
    return map;
  }, [resources]);

  const recentlyAdded = useMemo(
    () => [...resources].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 6),
    [resources],
  );

  return (
    <div>
      {/* Hero */}
      <section className="mb-10 flex flex-col items-center rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-6 py-14 text-center dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-bleu-50 px-3.5 py-1.5 text-xs font-semibold text-bleu-700 dark:bg-bleu-950 dark:text-bleu-300">
          <Sparkles className="h-3.5 w-3.5" /> Your personal French knowledge base
        </span>
        <h1 className="font-display max-w-2xl text-balance text-3xl font-bold text-slate-800 dark:text-slate-100 sm:text-4xl">
          My French Study Hub
        </h1>
        <p className="mt-3 max-w-xl text-balance text-slate-500 dark:text-slate-400">
          Everything I need to learn, revise and practise French — all in one place.
        </p>
        <div className="mt-7 w-full max-w-lg">
          <SearchBar size="lg" navigateOnSubmit placeholder="🔍 Search my French notes…" autoFocus={false} />
        </div>
      </section>

      {/* Quick access */}
      <section className="mb-10">
        <h2 className="mb-4 font-display text-lg font-semibold text-slate-800 dark:text-slate-100">
          Jump back in
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {TYPE_ORDER.map((type) => (
            <QuickAccessCard key={type} meta={RESOURCE_META[type]} count={counts.get(type) ?? 0} />
          ))}
        </div>
      </section>

      {/* Recently added / Continue studying */}
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-2 flex items-center gap-1.5 font-display text-base font-semibold text-slate-800 dark:text-slate-100">
            <Sparkles className="h-4 w-4 text-bleu-500" /> Recently Added
          </h2>
          {recentlyAdded.length === 0 ? (
            <p className="px-2.5 py-6 text-center text-sm text-slate-400 dark:text-slate-500">
              Nothing added yet.
            </p>
          ) : (
            <div className="flex flex-col gap-0.5">
              {recentlyAdded.map((r) => (
                <RecentResourceRow key={r.id} resource={r} />
              ))}
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-2 flex items-center gap-1.5 font-display text-base font-semibold text-slate-800 dark:text-slate-100">
            <Clock className="h-4 w-4 text-rouge-500" /> Continue Studying
          </h2>
          {recentlyViewed.length === 0 ? (
            <p className="px-2.5 py-6 text-center text-sm text-slate-400 dark:text-slate-500">
              Open a note, worksheet or verb to see it here next time.
            </p>
          ) : (
            <div className="flex flex-col gap-0.5">
              {recentlyViewed.slice(0, 6).map((r) => (
                <RecentResourceRow key={r.id} resource={r} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

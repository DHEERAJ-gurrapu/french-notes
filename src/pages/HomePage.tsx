import { useMemo } from 'react';
import { Clock, Sparkles, Target } from 'lucide-react';
import dheerajProfile from '@/assets/dheeraj-gurrapu-profile.png';
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
      <section className="mb-10 grid overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-bleu-50/60 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-bleu-950/30 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="flex flex-col items-center px-6 py-12 text-center sm:px-10 lg:items-start lg:py-14 lg:text-left">
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
        </div>

        <aside className="border-t border-slate-200/80 bg-white/70 p-6 dark:border-slate-800 dark:bg-slate-900/60 lg:border-l lg:border-t-0 lg:p-7">
          <div className="mb-5 flex items-center gap-3">
            <img
              src={dheerajProfile}
              alt="Dheeraj Gurrapu"
              className="h-12 w-12 rounded-full border-2 border-white object-cover object-[center_28%] shadow-sm ring-1 ring-bleu-200 dark:border-slate-900 dark:ring-bleu-800"
            />
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Founder & student</p>
              <p className="font-display text-lg font-semibold text-slate-800 dark:text-slate-100">Dheeraj Gurrapu</p>
            </div>
          </div>
          <div className="border-l-2 border-rouge-400 pl-3.5">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-rouge-700 dark:text-rouge-300">
              <Target className="h-3.5 w-3.5" /> Purpose
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              A personal French study hub where I can organize my class notes, worksheets, vocabulary, grammar, and revision material in one place for easy reference and studying.
            </p>
          </div>
        </aside>
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

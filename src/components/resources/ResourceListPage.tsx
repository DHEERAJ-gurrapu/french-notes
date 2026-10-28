import { useMemo, useState, type ReactNode } from 'react';
import { SearchX } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Resource } from '@/types';
import { PageHeader } from '@/components/ui/PageHeader';
import { SearchBar } from '@/components/ui/SearchBar';
import { SortSelect } from '@/components/ui/SortSelect';
import { FilterChips } from '@/components/ui/FilterChips';
import { EmptyState } from '@/components/ui/EmptyState';
import { ResourceCard } from '@/components/cards/ResourceCard';
import { useListControls } from '@/hooks/useListControls';

interface ResourceListPageProps<T extends Resource> {
  items: T[];
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: 'bleu' | 'rouge';
  getSearchableText: (item: T) => string;
  getFilterValue?: (item: T) => string | string[] | undefined;
  getSubtopicValue?: (item: T) => string | undefined;
  getProgressValue?: (item: T) => string | undefined;
  filterLabel?: string;
  emptyTitle: string;
  emptyDescription: string;
  extraFilters?: ReactNode;
  renderItem?: (item: T) => ReactNode;
}

export function ResourceListPage<T extends Resource>({
  items,
  icon,
  title,
  description,
  accent = 'bleu',
  getSearchableText,
  getFilterValue,
  getSubtopicValue,
  getProgressValue,
  filterLabel,
  emptyTitle,
  emptyDescription,
  extraFilters,
  renderItem,
}: ResourceListPageProps<T>) {
  const { query, setQuery, filter, setFilter, sort, setSort, filterOptions, filtered } = useListControls(
    items,
    getSearchableText,
    getFilterValue,
  );
  const [subtopic, setSubtopic] = useState<string | null>(null);
  const [progress, setProgress] = useState<string | null>(null);
  const subtopicOptions = useMemo(() => {
    if (!filter || !getFilterValue || !getSubtopicValue) return [];
    const counts = new Map<string, number>();
    for (const item of items) {
      const chapter = getFilterValue(item);
      const belongsToChapter = Array.isArray(chapter) ? chapter.includes(filter) : chapter === filter;
      const value = belongsToChapter ? getSubtopicValue(item) : undefined;
      if (value) counts.set(value, (counts.get(value) ?? 0) + 1);
    }
    return [...counts.entries()]
      .map(([value, count]) => ({ value, label: value, count }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [items, filter, getFilterValue, getSubtopicValue]);
  const visibleItems = useMemo(
    () => filtered.filter((item) =>
      (!subtopic || getSubtopicValue?.(item) === subtopic) &&
      (!progress || getProgressValue?.(item) === progress),
    ),
    [filtered, subtopic, progress, getSubtopicValue, getProgressValue],
  );
  const progressOptions = useMemo(() => {
    if (!getProgressValue) return [];
    const counts = new Map<string, number>();
    for (const item of items) {
      const chapter = getFilterValue?.(item);
      const belongsToChapter = !filter || (Array.isArray(chapter) ? chapter.includes(filter) : chapter === filter);
      const value = belongsToChapter ? getProgressValue(item) : undefined;
      if (value) counts.set(value, (counts.get(value) ?? 0) + 1);
    }
    return [...counts.entries()].map(([value, count]) => ({ value, label: value, count }));
  }, [items, filter, getFilterValue, getProgressValue]);

  const selectChapter = (value: string | null) => {
    setFilter(value);
    setSubtopic(null);
  };

  return (
    <div>
      <PageHeader
        icon={icon}
        title={title}
        description={description}
        accent={accent}
      />

      {items.length > 0 && (
        <div className="mb-6 flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder={`Search ${title.toLowerCase()}…`}
              className="sm:max-w-xs"
            />
            <SortSelect value={sort} onChange={setSort} />
          </div>
          {extraFilters}
          {getFilterValue && filterOptions.length > 0 && (
            filterLabel === 'chapters' ? (
              <section
                aria-label="Browse by chapter"
                className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <h2 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-100">Browse by chapter</h2>
                <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
                  Select a chapter to show only its {title.toLowerCase()}.
                </p>
                <FilterChips
                  options={filterOptions}
                  active={filter}
                  onChange={selectChapter}
                  allLabel="All chapters"
                />
                {filter && getSubtopicValue && subtopicOptions.length > 0 && (
                  <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <h3 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-100">Chapter subtopics</h3>
                    <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
                      Choose a subtopic to narrow down {title.toLowerCase()} in this chapter.
                    </p>
                    <FilterChips
                      options={subtopicOptions}
                      active={subtopic}
                      onChange={setSubtopic}
                      allLabel="All subtopics"
                    />
                  </div>
                )}
                {getProgressValue && progressOptions.length > 0 && (
                  <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <h3 className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-100">Study progress</h3>
                    <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
                      Keep track of vocabulary you have finished.
                    </p>
                    <FilterChips
                      options={progressOptions}
                      active={progress}
                      onChange={setProgress}
                      allLabel="All vocabulary"
                    />
                  </div>
                )}
              </section>
            ) : (
              <FilterChips
                options={filterOptions}
                active={filter}
                onChange={setFilter}
                allLabel={`All${filterLabel ? ` ${filterLabel}` : ''}`}
              />
            )
          )}
        </div>
      )}

      {items.length === 0 ? (
        <EmptyState
          icon={icon}
          title={emptyTitle}
          description={emptyDescription}
        />
      ) : visibleItems.length === 0 ? (
        <EmptyState icon={SearchX} title="No matches" description="Try a different search term or filter." />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (renderItem ? renderItem(item) : <ResourceCard key={item.id} resource={item} />))}
        </div>
      )}
    </div>
  );
}

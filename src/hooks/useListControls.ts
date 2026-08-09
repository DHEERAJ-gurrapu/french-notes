import { useMemo, useState } from 'react';
import type { SortKey } from '@/components/ui/SortSelect';
import type { Resource } from '@/types';

export function useListControls<T extends Resource>(
  items: T[],
  getSearchableText: (item: T) => string,
  getFilterValue?: (item: T) => string | undefined,
) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<string | null>(null);
  const [sort, setSort] = useState<SortKey>('updated');

  const filterOptions = useMemo(() => {
    if (!getFilterValue) return [];
    const counts = new Map<string, number>();
    for (const item of items) {
      const v = getFilterValue(item);
      if (v) counts.set(v, (counts.get(v) ?? 0) + 1);
    }
    return [...counts.entries()]
      .map(([value, count]) => ({ value, label: value, count }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [items, getFilterValue]);

  const filtered = useMemo(() => {
    let result = items;
    if (filter && getFilterValue) {
      result = result.filter((i) => getFilterValue(i) === filter);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter((i) => getSearchableText(i).toLowerCase().includes(q));
    }
    const sorted = [...result];
    if (sort === 'title') sorted.sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === 'created') sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    else sorted.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    return sorted;
  }, [items, filter, query, sort, getSearchableText, getFilterValue]);

  return { query, setQuery, filter, setFilter, sort, setSort, filterOptions, filtered };
}

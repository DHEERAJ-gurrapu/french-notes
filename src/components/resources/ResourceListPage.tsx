import type { ReactNode } from 'react';
import { Plus, SearchX } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Resource } from '@/types';
import { PageHeader } from '@/components/ui/PageHeader';
import { SearchBar } from '@/components/ui/SearchBar';
import { SortSelect } from '@/components/ui/SortSelect';
import { FilterChips } from '@/components/ui/FilterChips';
import { EmptyState } from '@/components/ui/EmptyState';
import { LinkButton } from '@/components/ui/Button';
import { ResourceCard } from '@/components/cards/ResourceCard';
import { useListControls } from '@/hooks/useListControls';

interface ResourceListPageProps<T extends Resource> {
  items: T[];
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: 'bleu' | 'rouge';
  addHref: string;
  addLabel: string;
  getSearchableText: (item: T) => string;
  getFilterValue?: (item: T) => string | undefined;
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
  addHref,
  addLabel,
  getSearchableText,
  getFilterValue,
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

  return (
    <div>
      <PageHeader
        icon={icon}
        title={title}
        description={description}
        accent={accent}
        action={
          <LinkButton to={addHref} icon={<Plus className="h-4 w-4" />}>
            {addLabel}
          </LinkButton>
        }
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
            <FilterChips
              options={filterOptions}
              active={filter}
              onChange={setFilter}
              allLabel={`All${filterLabel ? ` ${filterLabel}` : ''}`}
            />
          )}
        </div>
      )}

      {items.length === 0 ? (
        <EmptyState
          icon={icon}
          title={emptyTitle}
          description={emptyDescription}
          action={
            <LinkButton to={addHref} variant="secondary" icon={<Plus className="h-4 w-4" />}>
              {addLabel}
            </LinkButton>
          }
        />
      ) : filtered.length === 0 ? (
        <EmptyState icon={SearchX} title="No matches" description="Try a different search term or filter." />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (renderItem ? renderItem(item) : <ResourceCard key={item.id} resource={item} />))}
        </div>
      )}
    </div>
  );
}

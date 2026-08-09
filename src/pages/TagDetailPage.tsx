import { useParams } from 'react-router-dom';
import { Tag as TagIcon } from 'lucide-react';
import { useResourcesByTag } from '@/hooks/useResources';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHeader } from '@/components/ui/PageHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { ResourceCard } from '@/components/cards/ResourceCard';

export function TagDetailPage() {
  const { tag } = useParams<{ tag: string }>();
  const decoded = tag ? decodeURIComponent(tag) : '';
  const resources = useResourcesByTag(decoded);

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Tags', to: '/tags' }, { label: decoded }]} />
      <PageHeader
        icon={TagIcon}
        title={`#${decoded}`}
        description={`${resources.length} resource${resources.length === 1 ? '' : 's'} tagged “${decoded}”.`}
      />
      {resources.length === 0 ? (
        <EmptyState icon={TagIcon} title="No resources with this tag" description="This tag isn't attached to anything yet." />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      )}
    </div>
  );
}

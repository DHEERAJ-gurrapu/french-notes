import { useParams, Navigate, Link } from 'react-router-dom';
import { Plus, Pencil } from 'lucide-react';
import { useAllResources } from '@/hooks/useResources';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageHeader } from '@/components/ui/PageHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { LinkButton } from '@/components/ui/Button';
import { DeleteResourceButton } from '@/components/resources/DeleteResourceButton';
import { RESOURCE_META, resourcePath, resourceSubtitle } from '@/utils/resourceMeta';
import { formatDate } from '@/utils/date';
import type { ResourceType } from '@/types';

const VALID_TYPES: ResourceType[] = ['note', 'worksheet', 'grammar', 'vocabulary', 'verb', 'pdf'];

export function AdminResourceListPage() {
  const { type } = useParams<{ type: string }>();
  const resources = useAllResources();

  if (!type || !VALID_TYPES.includes(type as ResourceType)) {
    return <Navigate to="/admin" replace />;
  }
  const resourceType = type as ResourceType;
  const meta = RESOURCE_META[resourceType];
  const items = resources.filter((r) => r.type === resourceType);

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Admin', to: '/admin' }, { label: meta.label }]} />
      <PageHeader
        icon={meta.icon}
        title={`Manage ${meta.label}`}
        description={`${items.length} ${items.length === 1 ? meta.singular.toLowerCase() : meta.label.toLowerCase()}`}
        accent={meta.accent}
        action={
          <LinkButton to={`/admin/${resourceType}/new`} icon={<Plus className="h-4 w-4" />}>
            Add {meta.singular.toLowerCase()}
          </LinkButton>
        }
      />

      {items.length === 0 ? (
        <EmptyState
          icon={meta.icon}
          title={`No ${meta.label.toLowerCase()} yet`}
          description={`Add your first ${meta.singular.toLowerCase()} to get started.`}
          action={
            <LinkButton to={`/admin/${resourceType}/new`} variant="secondary" icon={<Plus className="h-4 w-4" />}>
              Add {meta.singular.toLowerCase()}
            </LinkButton>
          }
        />
      ) : (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 p-4 ${i !== 0 ? 'border-t border-slate-100 dark:border-slate-800' : ''}`}
            >
              <div className="min-w-0 flex-1">
                <Link
                  to={resourcePath(item.id, resourceType)}
                  className="truncate font-medium text-slate-800 hover:text-bleu-700 dark:text-slate-100 dark:hover:text-bleu-400"
                >
                  {item.title}
                </Link>
                <p className="truncate text-sm text-slate-500 dark:text-slate-400">{resourceSubtitle(item)}</p>
              </div>
              <span className="hidden shrink-0 text-xs text-slate-400 sm:block">{formatDate(item.updatedAt)}</span>
              <LinkButton to={`/admin/${resourceType}/${item.id}/edit`} variant="secondary" size="sm" icon={<Pencil className="h-3.5 w-3.5" />}>
                Edit
              </LinkButton>
              <DeleteResourceButton id={item.id} title={item.title} redirectTo={`/admin/${resourceType}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

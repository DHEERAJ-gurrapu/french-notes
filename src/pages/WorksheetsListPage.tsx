import { FileStack } from 'lucide-react';
import { useWorksheets } from '@/hooks/useResources';
import { ResourceListPage } from '@/components/resources/ResourceListPage';
import { WorksheetCard } from '@/components/cards/WorksheetCard';

export function WorksheetsListPage() {
  const worksheets = useWorksheets();

  return (
    <ResourceListPage
      items={worksheets}
      icon={FileStack}
      title="Worksheets"
      description="Completed worksheets with question sheets, answers and corrections."
      addHref="/admin/worksheet/new"
      addLabel="Add worksheet"
      getSearchableText={(w) =>
        `${w.title} ${w.subject} ${w.description ?? ''} ${w.notes ?? ''} ${w.corrections ?? ''} ${w.tags.join(' ')}`
      }
      getFilterValue={(w) => w.subject}
      filterLabel="subjects"
      emptyTitle="No worksheets yet"
      emptyDescription="Add your first French worksheet to start building your library."
      renderItem={(w) => <WorksheetCard key={w.id} worksheet={w} />}
    />
  );
}

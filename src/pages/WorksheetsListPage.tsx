import { FileStack } from 'lucide-react';
import { useWorksheets } from '@/hooks/useResources';
import { ResourceListPage } from '@/components/resources/ResourceListPage';
import { WorksheetCard } from '@/components/cards/WorksheetCard';
import { chapterLabels } from '@/utils/chapter';

export function WorksheetsListPage() {
  const worksheets = useWorksheets();

  return (
    <ResourceListPage
      items={worksheets}
      icon={FileStack}
      title="Worksheets"
      description="Browse worksheets by chapter."
      getSearchableText={(w) =>
        `${w.title} ${w.subject} ${w.description ?? ''} ${w.notes ?? ''} ${w.corrections ?? ''} ${w.tags.join(' ')}`
      }
      getFilterValue={(w) => chapterLabels(w.tags)}
      getSubtopicValue={(w) => w.subject}
      filterLabel="chapters"
      emptyTitle="No worksheets yet"
      emptyDescription="Worksheets will appear here when available."
      renderItem={(w) => <WorksheetCard key={w.id} worksheet={w} />}
    />
  );
}

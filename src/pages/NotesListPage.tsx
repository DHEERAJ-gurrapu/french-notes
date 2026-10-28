import { NotebookPen } from 'lucide-react';
import { useNotes } from '@/hooks/useResources';
import { ResourceListPage } from '@/components/resources/ResourceListPage';
import { chapterLabels } from '@/utils/chapter';

export function NotesListPage() {
  const notes = useNotes();

  return (
    <ResourceListPage
      items={notes}
      icon={NotebookPen}
      title="Notes"
      description="Browse your French class notes by chapter or topic."
      getSearchableText={(n) => `${n.title} ${n.description ?? ''} ${n.content} ${n.tags.join(' ')}`}
      getFilterValue={(n) => chapterLabels(n.tags)}
      getSubtopicValue={(n) => n.topic}
      filterLabel="chapters"
      emptyTitle="No notes yet"
      emptyDescription="Notes will appear here when available."
    />
  );
}

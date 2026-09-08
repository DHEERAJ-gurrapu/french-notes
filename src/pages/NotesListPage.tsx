import { NotebookPen } from 'lucide-react';
import { useNotes } from '@/hooks/useResources';
import { ResourceListPage } from '@/components/resources/ResourceListPage';

export function NotesListPage() {
  const notes = useNotes();

  return (
    <ResourceListPage
      items={notes}
      icon={NotebookPen}
      title="Notes"
      description="Your French class notes, organised by topic."
      getSearchableText={(n) => `${n.title} ${n.description ?? ''} ${n.content} ${n.tags.join(' ')}`}
      getFilterValue={(n) => n.topic}
      filterLabel="topics"
      emptyTitle="No notes yet"
      emptyDescription="Notes will appear here when available."
    />
  );
}

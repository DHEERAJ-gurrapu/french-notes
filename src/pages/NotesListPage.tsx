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
      addHref="/admin/note/new"
      addLabel="Add note"
      getSearchableText={(n) => `${n.title} ${n.description ?? ''} ${n.content} ${n.tags.join(' ')}`}
      getFilterValue={(n) => n.topic}
      filterLabel="topics"
      emptyTitle="No notes yet"
      emptyDescription="Add your first French note to start building your library."
    />
  );
}

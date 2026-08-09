import { useParams } from 'react-router-dom';
import { NotebookPen } from 'lucide-react';
import { useResourceById } from '@/hooks/useResources';
import { useRecordView } from '@/hooks/useRecordView';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DetailHeader } from '@/components/resources/DetailHeader';
import { MarkdownContent } from '@/components/ui/MarkdownContent';
import { ErrorState } from '@/components/ui/ErrorState';
import { formatDate } from '@/utils/date';
import type { Note } from '@/types';

export function NoteDetailPage() {
  const { id } = useParams<{ id: string }>();
  const resource = useResourceById(id);
  useRecordView(resource?.id);

  if (!resource || resource.type !== 'note') {
    return <ErrorState title="Note not found" description="This note may have been deleted." />;
  }
  const note = resource as Note;

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs items={[{ label: 'Notes', to: '/notes' }, { label: note.title }]} />
      <DetailHeader
        icon={NotebookPen}
        eyebrow={note.topic}
        title={note.title}
        id={note.id}
        tags={note.tags}
        meta={`Added ${formatDate(note.createdAt)}`}
        editHref={`/admin/note/${note.id}/edit`}
        listHref="/notes"
      />
      {note.description && (
        <p className="mb-4 text-slate-600 dark:text-slate-300">{note.description}</p>
      )}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <MarkdownContent content={note.content} />
      </div>
    </div>
  );
}

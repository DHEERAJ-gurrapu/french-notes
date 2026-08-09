import { useState, type FormEvent } from 'react';
import type { Note } from '@/types';
import { AdminFormShell } from '@/components/admin/AdminFormShell';
import { TextInput, TextArea } from '@/components/ui/FormField';
import { TagInput } from '@/components/ui/TagInput';

type NotePayload = Omit<Note, 'id' | 'type' | 'createdAt' | 'updatedAt'>;

interface NoteFormProps {
  initial?: Note;
  backHref: string;
  onSubmit: (payload: NotePayload) => void;
}

export function NoteForm({ initial, backHref, onSubmit }: NoteFormProps) {
  const [title, setTitle] = useState(initial?.title ?? '');
  const [topic, setTopic] = useState(initial?.topic ?? '');
  const [description, setDescription] = useState(initial?.description ?? '');
  const [content, setContent] = useState(initial?.content ?? '');
  const [tags, setTags] = useState<string[]>(initial?.tags ?? []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({
      title,
      topic,
      description: description || undefined,
      content,
      tags,
      attachments: initial?.attachments,
    });
  }

  return (
    <AdminFormShell
      title={initial ? 'Edit note' : 'Add note'}
      crumbLabel="Notes"
      crumbHref="/admin/note"
      backHref={backHref}
      onSubmit={handleSubmit}
    >
      <TextInput label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <TextInput
        label="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        required
        hint="e.g. Family & Relationships"
      />
      <TextInput
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        hint="A short one-line summary shown on the note's card."
      />
      <TextArea
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={12}
        required
        hint="Supports Markdown: ## headings, **bold**, lists and | table | syntax |."
      />
      <TagInput value={tags} onChange={setTags} />
    </AdminFormShell>
  );
}

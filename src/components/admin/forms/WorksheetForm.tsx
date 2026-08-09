import { useState, type FormEvent } from 'react';
import type { Worksheet } from '@/types';
import { AdminFormShell } from '@/components/admin/AdminFormShell';
import { TextInput, TextArea } from '@/components/ui/FormField';
import { TagInput } from '@/components/ui/TagInput';
import { FilesEditor } from '@/components/admin/FilesEditor';

type WorksheetPayload = Omit<Worksheet, 'id' | 'type' | 'createdAt' | 'updatedAt'>;

interface WorksheetFormProps {
  initial?: Worksheet;
  backHref: string;
  onSubmit: (payload: WorksheetPayload) => void;
}

export function WorksheetForm({ initial, backHref, onSubmit }: WorksheetFormProps) {
  const [title, setTitle] = useState(initial?.title ?? '');
  const [subject, setSubject] = useState(initial?.subject ?? '');
  const [date, setDate] = useState(initial?.date ?? new Date().toISOString().slice(0, 10));
  const [description, setDescription] = useState(initial?.description ?? '');
  const [files, setFiles] = useState(initial?.files ?? []);
  const [notes, setNotes] = useState(initial?.notes ?? '');
  const [corrections, setCorrections] = useState(initial?.corrections ?? '');
  const [tags, setTags] = useState<string[]>(initial?.tags ?? []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({
      title,
      subject,
      date,
      description: description || undefined,
      files,
      notes: notes || undefined,
      corrections: corrections || undefined,
      tags,
    });
  }

  return (
    <AdminFormShell
      title={initial ? 'Edit worksheet' : 'Add worksheet'}
      crumbLabel="Worksheets"
      crumbHref="/admin/worksheet"
      backHref={backHref}
      onSubmit={handleSubmit}
    >
      <TextInput label="Worksheet name" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextInput
          label="Subject / topic"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          hint="e.g. ER Verbs"
        />
        <TextInput label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <TextInput label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Files (question sheet, your answers, corrections…)
        </label>
        <FilesEditor files={files} onChange={setFiles} />
      </div>

      <TextArea
        label="Notes / comments"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={3}
      />
      <TextArea
        label="Corrections"
        value={corrections}
        onChange={(e) => setCorrections(e.target.value)}
        rows={3}
      />
      <TagInput value={tags} onChange={setTags} />
    </AdminFormShell>
  );
}

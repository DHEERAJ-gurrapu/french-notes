import { useState, type FormEvent } from 'react';
import type { FileRef, PdfDocument } from '@/types';
import { AdminFormShell } from '@/components/admin/AdminFormShell';
import { TextInput } from '@/components/ui/FormField';
import { TagInput } from '@/components/ui/TagInput';
import { FilesEditor } from '@/components/admin/FilesEditor';

type PdfPayload = Omit<PdfDocument, 'id' | 'type' | 'createdAt' | 'updatedAt'>;

interface PdfFormProps {
  initial?: PdfDocument;
  backHref: string;
  onSubmit: (payload: PdfPayload) => void;
}

export function PdfForm({ initial, backHref, onSubmit }: PdfFormProps) {
  const [title, setTitle] = useState(initial?.title ?? '');
  const [description, setDescription] = useState(initial?.description ?? '');
  const [category, setCategory] = useState(initial?.category ?? '');
  const [tags, setTags] = useState<string[]>(initial?.tags ?? []);
  const [file, setFile] = useState<FileRef[]>(
    initial ? [{ id: 'existing', fileId: initial.fileId, fileName: initial.fileName, kind: 'pdf' }] : [],
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const f = file[0];
    if (!f) return;
    onSubmit({
      title,
      description: description || undefined,
      category,
      tags,
      fileId: f.fileId,
      fileName: f.fileName,
    });
  }

  return (
    <AdminFormShell
      title={initial ? 'Edit PDF' : 'Add PDF'}
      crumbLabel="PDFs"
      crumbHref="/admin/pdf"
      backHref={backHref}
      onSubmit={handleSubmit}
    >
      <TextInput label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <TextInput label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <TextInput
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        hint="e.g. Grammar, Vocabulary, Revision"
      />
      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          PDF file <span className="text-rouge-500">*</span>
        </label>
        <FilesEditor files={file} onChange={setFile} multiple={false} accept="application/pdf" dropzoneLabel="Click or drag a PDF here" />
      </div>
      <TagInput value={tags} onChange={setTags} />
    </AdminFormShell>
  );
}

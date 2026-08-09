import { useState } from 'react';
import { FileText, Image as ImageIcon, X, Loader2 } from 'lucide-react';
import type { FileRef } from '@/types';
import { saveFile, inferFileKind } from '@/services/fileStore';
import { generateId } from '@/utils/id';
import { FileDropzone } from './FileDropzone';

interface FilesEditorProps {
  files: FileRef[];
  onChange: (files: FileRef[]) => void;
  multiple?: boolean;
  accept?: string;
  dropzoneLabel?: string;
}

export function FilesEditor({
  files,
  onChange,
  multiple = true,
  accept = 'application/pdf,image/*',
  dropzoneLabel,
}: FilesEditorProps) {
  const [uploading, setUploading] = useState(false);

  async function handleFilesAdded(newFiles: File[]) {
    setUploading(true);
    try {
      const refs: FileRef[] = [];
      for (const file of newFiles) {
        const stored = await saveFile(file);
        const kind = inferFileKind(file);
        refs.push({
          id: generateId('fileref'),
          fileId: stored.id,
          fileName: file.name,
          kind,
          label: kind === 'pdf' ? 'Document' : 'Image',
        });
      }
      onChange(multiple ? [...files, ...refs] : refs);
    } finally {
      setUploading(false);
    }
  }

  function updateLabel(id: string, label: string) {
    onChange(files.map((f) => (f.id === id ? { ...f, label } : f)));
  }

  function removeFile(id: string) {
    onChange(files.filter((f) => f.id !== id));
  }

  return (
    <div className="space-y-3">
      {files.map((f) => (
        <div
          key={f.id}
          className="flex items-center gap-3 rounded-xl border border-slate-200 p-2.5 dark:border-slate-700"
        >
          {f.kind === 'pdf' ? (
            <FileText className="h-4 w-4 shrink-0 text-rouge-500" />
          ) : (
            <ImageIcon className="h-4 w-4 shrink-0 text-bleu-500" />
          )}
          <input
            value={f.label ?? ''}
            onChange={(e) => updateLabel(f.id, e.target.value)}
            placeholder="Label (e.g. Question Sheet)"
            className="min-w-0 flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm text-slate-800 focus:border-bleu-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
          <span className="hidden max-w-[8rem] shrink-0 truncate text-xs text-slate-400 sm:block">
            {f.fileName}
          </span>
          <button
            type="button"
            onClick={() => removeFile(f.id)}
            className="shrink-0 text-slate-400 hover:text-rouge-500"
            aria-label={`Remove ${f.fileName}`}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}

      {(multiple || files.length === 0) && (
        <FileDropzone accept={accept} multiple={multiple} label={dropzoneLabel} onFilesAdded={handleFilesAdded} />
      )}
      {uploading && (
        <p className="flex items-center gap-1.5 text-xs text-slate-400">
          <Loader2 className="h-3 w-3 animate-spin" /> Uploading…
        </p>
      )}
    </div>
  );
}

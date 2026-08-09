import { useRef, useState } from 'react';
import { Upload } from 'lucide-react';
import clsx from 'clsx';

interface FileDropzoneProps {
  accept?: string;
  multiple?: boolean;
  label?: string;
  onFilesAdded: (files: File[]) => void;
}

export function FileDropzone({ accept, multiple = true, label, onFilesAdded }: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  function handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    onFilesAdded(Array.from(fileList));
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        handleFiles(e.dataTransfer.files);
      }}
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click();
      }}
      className={clsx(
        'cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-colors',
        dragOver
          ? 'border-bleu-400 bg-bleu-50 dark:bg-bleu-950/30'
          : 'border-slate-200 hover:border-bleu-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-bleu-800 dark:hover:bg-slate-800/50',
      )}
    >
      <Upload className="mx-auto mb-2 h-6 w-6 text-slate-400" />
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {label ?? 'Click or drag files here to upload'}
      </p>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => {
          handleFiles(e.target.files);
          e.target.value = '';
        }}
      />
    </div>
  );
}

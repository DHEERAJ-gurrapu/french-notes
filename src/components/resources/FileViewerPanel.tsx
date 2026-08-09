import { Loader2, FileX, ExternalLink } from 'lucide-react';
import { useFileUrl } from '@/hooks/useFileUrl';

interface FileViewerPanelProps {
  fileId: string;
  kind: 'pdf' | 'image';
  fileName: string;
}

export function FileViewerPanel({ fileId, kind, fileName }: FileViewerPanelProps) {
  const { url, loading } = useFileUrl(fileId);

  if (loading) {
    return (
      <div className="flex h-72 items-center justify-center rounded-xl border border-slate-200 text-slate-400 dark:border-slate-800">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (!url) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 py-16 text-center dark:border-slate-700">
        <FileX className="h-6 w-6 text-slate-400" />
        <p className="text-sm text-slate-500 dark:text-slate-400">
          This file could not be loaded from local storage.
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2 dark:border-slate-800 dark:bg-slate-800/50">
        <span className="truncate text-sm text-slate-600 dark:text-slate-300">{fileName}</span>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="flex shrink-0 items-center gap-1 text-xs font-medium text-bleu-600 hover:underline dark:text-bleu-400"
        >
          Open in new tab <ExternalLink className="h-3 w-3" />
        </a>
      </div>
      {kind === 'pdf' ? (
        <iframe src={url} title={fileName} className="h-[70vh] w-full bg-white" />
      ) : (
        <img src={url} alt={fileName} className="max-h-[70vh] w-full bg-slate-50 object-contain dark:bg-slate-900" />
      )}
    </div>
  );
}

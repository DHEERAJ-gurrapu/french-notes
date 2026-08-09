import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FileStack, FileText, Image as ImageIcon, Paperclip } from 'lucide-react';
import clsx from 'clsx';
import { useResourceById } from '@/hooks/useResources';
import { useRecordView } from '@/hooks/useRecordView';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DetailHeader } from '@/components/resources/DetailHeader';
import { FileViewerPanel } from '@/components/resources/FileViewerPanel';
import { EmptyState } from '@/components/ui/EmptyState';
import { ErrorState } from '@/components/ui/ErrorState';
import { formatDate } from '@/utils/date';
import type { Worksheet } from '@/types';

export function WorksheetDetailPage() {
  const { id } = useParams<{ id: string }>();
  const resource = useResourceById(id);
  useRecordView(resource?.id);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!resource || resource.type !== 'worksheet') {
    return <ErrorState title="Worksheet not found" description="This worksheet may have been deleted." />;
  }
  const worksheet = resource as Worksheet;
  const activeFile = worksheet.files[Math.min(activeIndex, worksheet.files.length - 1)];

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs items={[{ label: 'Worksheets', to: '/worksheets' }, { label: worksheet.title }]} />
      <DetailHeader
        icon={FileStack}
        accent="rouge"
        eyebrow={worksheet.subject}
        title={worksheet.title}
        id={worksheet.id}
        tags={worksheet.tags}
        meta={`Dated ${formatDate(worksheet.date)}`}
        editHref={`/admin/worksheet/${worksheet.id}/edit`}
        listHref="/worksheets"
      />

      {worksheet.description && (
        <p className="mb-4 text-slate-600 dark:text-slate-300">{worksheet.description}</p>
      )}

      <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-3 flex items-center gap-1.5 font-display text-base font-semibold text-slate-800 dark:text-slate-100">
          <Paperclip className="h-4 w-4" /> Files
        </h2>
        {worksheet.files.length === 0 ? (
          <EmptyState
            icon={FileStack}
            title="No files attached"
            description="Edit this worksheet to upload a question sheet, your answers or corrections."
          />
        ) : (
          <>
            <div className="mb-4 flex flex-wrap gap-2">
              {worksheet.files.map((f, i) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={clsx(
                    'flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                    i === activeIndex
                      ? 'bg-rouge-600 text-white dark:bg-rouge-600'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700',
                  )}
                >
                  {f.kind === 'pdf' ? <FileText className="h-3.5 w-3.5" /> : <ImageIcon className="h-3.5 w-3.5" />}
                  {f.label || f.fileName}
                </button>
              ))}
            </div>
            {activeFile && (
              <FileViewerPanel fileId={activeFile.fileId} kind={activeFile.kind} fileName={activeFile.fileName} />
            )}
          </>
        )}
      </div>

      {(worksheet.notes || worksheet.corrections) && (
        <div className="grid gap-5 sm:grid-cols-2">
          {worksheet.notes && (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="mb-2 font-display text-sm font-semibold text-slate-800 dark:text-slate-100">
                Notes / Comments
              </h3>
              <p className="whitespace-pre-line text-sm text-slate-600 dark:text-slate-300">{worksheet.notes}</p>
            </div>
          )}
          {worksheet.corrections && (
            <div className="rounded-2xl border border-rouge-100 bg-rouge-50/50 p-5 dark:border-rouge-900/40 dark:bg-rouge-950/20">
              <h3 className="mb-2 font-display text-sm font-semibold text-rouge-800 dark:text-rouge-300">
                Corrections
              </h3>
              <p className="whitespace-pre-line text-sm text-rouge-700/90 dark:text-rouge-300/80">
                {worksheet.corrections}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

import { useParams } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { useResourceById } from '@/hooks/useResources';
import { useRecordView } from '@/hooks/useRecordView';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DetailHeader } from '@/components/resources/DetailHeader';
import { FileViewerPanel } from '@/components/resources/FileViewerPanel';
import { ErrorState } from '@/components/ui/ErrorState';
import { formatDate } from '@/utils/date';
import type { PdfDocument } from '@/types';

export function PdfDetailPage() {
  const { id } = useParams<{ id: string }>();
  const resource = useResourceById(id);
  useRecordView(resource?.id);

  if (!resource || resource.type !== 'pdf') {
    return <ErrorState title="PDF not found" description="This PDF may have been deleted." />;
  }
  const pdf = resource as PdfDocument;

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs items={[{ label: 'PDFs', to: '/pdfs' }, { label: pdf.title }]} />
      <DetailHeader
        icon={FileText}
        accent="rouge"
        eyebrow={pdf.category}
        title={pdf.title}
        id={pdf.id}
        tags={pdf.tags}
        meta={`Added ${formatDate(pdf.createdAt)}`}
        editHref={`/admin/pdf/${pdf.id}/edit`}
        listHref="/pdfs"
      />
      {pdf.description && <p className="mb-4 text-slate-600 dark:text-slate-300">{pdf.description}</p>}
      <FileViewerPanel fileId={pdf.fileId} kind="pdf" fileName={pdf.fileName} />
    </div>
  );
}

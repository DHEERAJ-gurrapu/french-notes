import { FileText } from 'lucide-react';
import { usePdfs } from '@/hooks/useResources';
import { ResourceListPage } from '@/components/resources/ResourceListPage';
import { chapterLabels } from '@/utils/chapter';

export function PdfsListPage() {
  const pdfs = usePdfs();

  return (
    <ResourceListPage
      items={pdfs}
      icon={FileText}
      title="PDF Library"
      description="Browse French PDFs by chapter."
      accent="rouge"
      getSearchableText={(p) => `${p.title} ${p.description ?? ''} ${p.category} ${p.tags.join(' ')}`}
      getFilterValue={(p) => chapterLabels(p.tags)}
      filterLabel="chapters"
      emptyTitle="No PDFs yet"
      emptyDescription="PDFs will appear here when available."
    />
  );
}

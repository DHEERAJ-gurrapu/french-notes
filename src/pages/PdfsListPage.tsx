import { FileText } from 'lucide-react';
import { usePdfs } from '@/hooks/useResources';
import { ResourceListPage } from '@/components/resources/ResourceListPage';

export function PdfsListPage() {
  const pdfs = usePdfs();

  return (
    <ResourceListPage
      items={pdfs}
      icon={FileText}
      title="PDF Library"
      description="French PDFs you can open and read directly in the browser."
      accent="rouge"
      getSearchableText={(p) => `${p.title} ${p.description ?? ''} ${p.category} ${p.tags.join(' ')}`}
      getFilterValue={(p) => p.category}
      filterLabel="categories"
      emptyTitle="No PDFs yet"
      emptyDescription="PDFs will appear here when available."
    />
  );
}

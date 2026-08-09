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
      addHref="/admin/pdf/new"
      addLabel="Add PDF"
      getSearchableText={(p) => `${p.title} ${p.description ?? ''} ${p.category} ${p.tags.join(' ')}`}
      getFilterValue={(p) => p.category}
      filterLabel="categories"
      emptyTitle="No PDFs yet"
      emptyDescription="Upload your first French PDF to start building your library."
    />
  );
}

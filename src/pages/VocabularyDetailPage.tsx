import { useParams } from 'react-router-dom';
import { Languages } from 'lucide-react';
import { useResourceById } from '@/hooks/useResources';
import { useRecordView } from '@/hooks/useRecordView';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DetailHeader } from '@/components/resources/DetailHeader';
import { ErrorState } from '@/components/ui/ErrorState';
import type { VocabularyEntry } from '@/types';

const GENDER_LABEL: Record<NonNullable<VocabularyEntry['gender']>, string> = {
  m: 'masculine',
  f: 'feminine',
  'n/a': '',
};

export function VocabularyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const resource = useResourceById(id);
  useRecordView(resource?.id);

  if (!resource || resource.type !== 'vocabulary') {
    return <ErrorState title="Vocabulary entry not found" description="This word may have been deleted." />;
  }
  const entry = resource as VocabularyEntry;

  return (
    <div className="mx-auto max-w-2xl">
      <Breadcrumbs items={[{ label: 'Vocabulary', to: '/vocabulary' }, { label: entry.french }]} />
      <DetailHeader
        icon={Languages}
        accent="rouge"
        eyebrow={entry.topic}
        title={entry.french}
        id={entry.id}
        tags={entry.tags}
        meta={entry.gender && entry.gender !== 'n/a' ? GENDER_LABEL[entry.gender] : undefined}
        editHref={`/admin/vocabulary/${entry.id}/edit`}
        listHref="/vocabulary"
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">English</p>
        <p className="mb-4 text-xl text-slate-800 dark:text-slate-100">{entry.english}</p>

        {entry.example && (
          <>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
              Example
            </p>
            <p className="italic text-slate-600 dark:text-slate-300">“{entry.example}”</p>
          </>
        )}
      </div>
    </div>
  );
}

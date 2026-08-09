import { useParams, Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { useResourceById } from '@/hooks/useResources';
import { useRecordView } from '@/hooks/useRecordView';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DetailHeader } from '@/components/resources/DetailHeader';
import { MarkdownContent } from '@/components/ui/MarkdownContent';
import { ErrorState } from '@/components/ui/ErrorState';
import type { GrammarSection, GrammarTopic } from '@/types';

const SECTION_LABELS: Record<GrammarSection, string> = {
  basics: 'Basics',
  verbs: 'Verbs',
  tenses: 'Tenses',
  other: 'Other',
};

export function GrammarDetailPage() {
  const { id } = useParams<{ id: string }>();
  const resource = useResourceById(id);
  useRecordView(resource?.id);

  if (!resource || resource.type !== 'grammar') {
    return <ErrorState title="Grammar topic not found" description="This topic may have been deleted." />;
  }
  const topic = resource as GrammarTopic;

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs items={[{ label: 'Grammar', to: '/grammar' }, { label: topic.title }]} />
      <DetailHeader
        icon={BookOpen}
        eyebrow={SECTION_LABELS[topic.section]}
        title={topic.title}
        id={topic.id}
        tags={topic.tags}
        editHref={`/admin/grammar/${topic.id}/edit`}
        listHref="/grammar"
      />
      {topic.description && <p className="mb-4 text-slate-600 dark:text-slate-300">{topic.description}</p>}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <MarkdownContent content={topic.content} />
      </div>

      {topic.examples && topic.examples.length > 0 && (
        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-3 font-display text-base font-semibold text-slate-800 dark:text-slate-100">Examples</h2>
          <ul className="space-y-3">
            {topic.examples.map((ex, i) => (
              <li key={i} className="rounded-xl bg-slate-50 p-3.5 dark:bg-slate-800/50">
                <p className="font-medium text-bleu-700 dark:text-bleu-400">{ex.fr}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{ex.en}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-5 text-sm text-slate-400 dark:text-slate-500">
        Looking for full conjugation tables? Visit the{' '}
        <Link to="/verbs" className="font-medium text-bleu-600 hover:underline dark:text-bleu-400">
          Verbs
        </Link>{' '}
        page.
      </p>
    </div>
  );
}

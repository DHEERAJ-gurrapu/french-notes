import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import clsx from 'clsx';
import { useResourceById } from '@/hooks/useResources';
import { useRecordView } from '@/hooks/useRecordView';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DetailHeader } from '@/components/resources/DetailHeader';
import { ConjugationTableView } from '@/components/resources/ConjugationTableView';
import { ErrorState } from '@/components/ui/ErrorState';
import type { Verb } from '@/types';

const GROUP_LABEL: Record<Verb['group'], string> = {
  er: '-ER verb',
  ir: '-IR verb',
  re: '-RE verb',
  irregular: 'Irregular verb',
  pronominal: 'Pronominal verb',
};

export function VerbDetailPage() {
  const { id } = useParams<{ id: string }>();
  const resource = useResourceById(id);
  useRecordView(resource?.id);
  const [activeTense, setActiveTense] = useState(0);

  if (!resource || resource.type !== 'verb') {
    return <ErrorState title="Verb not found" description="This verb may have been deleted." />;
  }
  const verb = resource as Verb;
  const table = verb.conjugations[Math.min(activeTense, verb.conjugations.length - 1)];

  return (
    <div className="mx-auto max-w-2xl">
      <Breadcrumbs items={[{ label: 'Verbs', to: '/verbs' }, { label: verb.infinitive }]} />
      <DetailHeader
        icon={GraduationCap}
        eyebrow={GROUP_LABEL[verb.group]}
        title={verb.infinitive}
        id={verb.id}
        tags={verb.tags}
        meta={verb.englishMeaning}
        editHref={`/admin/verb/${verb.id}/edit`}
        listHref="/verbs"
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4 flex flex-wrap gap-2">
          {verb.conjugations.map((c, i) => (
            <button
              key={c.tense}
              type="button"
              onClick={() => setActiveTense(i)}
              className={clsx(
                'rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                i === activeTense
                  ? 'bg-bleu-600 text-white dark:bg-bleu-500'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700',
              )}
            >
              {c.tense}
            </button>
          ))}
        </div>
        {table && <ConjugationTableView table={table} />}
      </div>
    </div>
  );
}

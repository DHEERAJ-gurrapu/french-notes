import { GraduationCap } from 'lucide-react';
import { useVerbs } from '@/hooks/useResources';
import { ResourceListPage } from '@/components/resources/ResourceListPage';
import { VerbCard } from '@/components/cards/VerbCard';

const GROUP_LABEL: Record<string, string> = {
  er: '-ER verbs',
  ir: '-IR verbs',
  re: '-RE verbs',
  irregular: 'Irregular',
  pronominal: 'Pronominal',
};

export function VerbsListPage() {
  const verbs = useVerbs();

  return (
    <ResourceListPage
      items={verbs}
      icon={GraduationCap}
      title="Verbs"
      description="Full conjugation tables across present, past and future tenses."
      addHref="/admin/verb/new"
      addLabel="Add verb"
      getSearchableText={(v) =>
        `${v.infinitive} ${v.englishMeaning} ${v.tags.join(' ')} ${v.conjugations
          .flatMap((c) => c.rows.map((r) => r.form))
          .join(' ')}`
      }
      getFilterValue={(v) => GROUP_LABEL[v.group]}
      filterLabel="groups"
      emptyTitle="No verbs yet"
      emptyDescription="Add your first verb conjugation to start building your reference."
      renderItem={(verb) => <VerbCard key={verb.id} verb={verb} />}
    />
  );
}

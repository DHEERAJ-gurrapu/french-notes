import { GraduationCap } from 'lucide-react';
import { useVerbs } from '@/hooks/useResources';
import { ResourceListPage } from '@/components/resources/ResourceListPage';
import { VerbCard } from '@/components/cards/VerbCard';
import { chapterLabel } from '@/utils/chapter';

const GROUP_LABEL: Record<string, string> = {
  er: '-ER verbs',
  ir: '-IR verbs',
  re: '-RE verbs',
  irregular: 'Irregular verbs',
  pronominal: 'Pronominal verbs',
};

export function VerbsListPage() {
  const verbs = useVerbs();

  return (
    <ResourceListPage
      items={verbs}
      icon={GraduationCap}
      title="Verbs"
      description="Choose a chapter to find its verbs and conjugations."
      getSearchableText={(v) =>
        `${v.infinitive} ${v.englishMeaning} ${v.tags.join(' ')} ${v.conjugations
          .flatMap((c) => c.rows.map((r) => r.form))
          .join(' ')}`
      }
      getFilterValue={(v) => chapterLabel(v.tags)}
      getSubtopicValue={(v) => GROUP_LABEL[v.group]}
      filterLabel="chapters"
      emptyTitle="No verbs yet"
      emptyDescription="Verb conjugations will appear here when available."
      renderItem={(verb) => <VerbCard key={verb.id} verb={verb} />}
    />
  );
}

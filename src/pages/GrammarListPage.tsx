import { BookOpen } from 'lucide-react';
import { useGrammarTopics } from '@/hooks/useResources';
import { ResourceListPage } from '@/components/resources/ResourceListPage';
import type { GrammarSection } from '@/types';

const SECTION_LABELS: Record<GrammarSection, string> = {
  basics: 'Basics',
  verbs: 'Verbs',
  tenses: 'Tenses',
  other: 'Other',
};

export function GrammarListPage() {
  const topics = useGrammarTopics();

  return (
    <ResourceListPage
      items={topics}
      icon={BookOpen}
      title="Grammar"
      description="Grammar rules, categorised from the basics through to full tenses."
      addHref="/admin/grammar/new"
      addLabel="Add grammar topic"
      getSearchableText={(g) => `${g.title} ${g.description ?? ''} ${g.content} ${g.tags.join(' ')}`}
      getFilterValue={(g) => SECTION_LABELS[g.section]}
      filterLabel="categories"
      emptyTitle="No grammar topics yet"
      emptyDescription="Add your first grammar topic to start building your reference library."
    />
  );
}

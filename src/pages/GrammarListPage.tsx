import { BookOpen } from 'lucide-react';
import { useGrammarTopics } from '@/hooks/useResources';
import { ResourceListPage } from '@/components/resources/ResourceListPage';
import { chapterLabels } from '@/utils/chapter';
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
      description="Browse grammar topics by chapter."
      getSearchableText={(g) => `${g.title} ${g.description ?? ''} ${g.content} ${g.tags.join(' ')}`}
      getFilterValue={(g) => chapterLabels(g.tags)}
      getSubtopicValue={(g) => SECTION_LABELS[g.section]}
      filterLabel="chapters"
      emptyTitle="No grammar topics yet"
      emptyDescription="Grammar topics will appear here when available."
    />
  );
}

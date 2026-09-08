import { Languages } from 'lucide-react';
import { useVocabulary } from '@/hooks/useResources';
import { ResourceListPage } from '@/components/resources/ResourceListPage';
import { VocabularyCard } from '@/components/cards/VocabularyCard';

export function VocabularyListPage() {
  const vocabulary = useVocabulary();

  return (
    <ResourceListPage
      items={vocabulary}
      icon={Languages}
      title="Vocabulary"
      description="French words and phrases, organised by topic."
      getSearchableText={(v) => `${v.french} ${v.english} ${v.example ?? ''} ${v.topic} ${v.tags.join(' ')}`}
      getFilterValue={(v) => v.topic}
      filterLabel="topics"
      emptyTitle="No vocabulary yet"
      emptyDescription="Vocabulary entries will appear here when available."
      renderItem={(entry) => <VocabularyCard key={entry.id} entry={entry} />}
    />
  );
}

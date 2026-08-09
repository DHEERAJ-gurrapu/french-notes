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
      addHref="/admin/vocabulary/new"
      addLabel="Add word"
      getSearchableText={(v) => `${v.french} ${v.english} ${v.example ?? ''} ${v.topic} ${v.tags.join(' ')}`}
      getFilterValue={(v) => v.topic}
      filterLabel="topics"
      emptyTitle="No vocabulary yet"
      emptyDescription="Add your first French word to start building your vocabulary bank."
      renderItem={(entry) => <VocabularyCard key={entry.id} entry={entry} />}
    />
  );
}

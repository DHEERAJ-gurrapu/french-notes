import { Languages } from 'lucide-react';
import { useVocabulary } from '@/hooks/useResources';
import { ResourceListPage } from '@/components/resources/ResourceListPage';
import { VocabularyCard } from '@/components/cards/VocabularyCard';
import { chapterLabel } from '@/utils/chapter';
import { useUiStore } from '@/store/uiStore';

export function VocabularyListPage() {
  const vocabulary = useVocabulary();
  const completedVocabulary = useUiStore((state) => state.completedVocabulary);

  return (
    <ResourceListPage
      items={vocabulary}
      icon={Languages}
      title="Vocabulary"
      description="Choose a chapter to see all of its vocabulary, or search by French or English."
      getSearchableText={(v) => `${v.french} ${v.english} ${v.example ?? ''} ${v.topic} ${v.tags.join(' ')}`}
      getFilterValue={(v) => chapterLabel(v.tags)}
      getSubtopicValue={(v) => v.topic}
      getProgressValue={(v) => completedVocabulary.includes(v.id) ? 'Done' : 'Not done'}
      filterLabel="chapters"
      emptyTitle="No vocabulary yet"
      emptyDescription="Vocabulary entries will appear here when available."
      renderItem={(entry) => <VocabularyCard key={entry.id} entry={entry} />}
    />
  );
}

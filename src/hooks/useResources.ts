import { useMemo } from 'react';
import { useResourceStore } from '@/store/resourceStore';
import type {
  GrammarTopic,
  Note,
  PdfDocument,
  Resource,
  Verb,
  VocabularyEntry,
  Worksheet,
} from '@/types';

export function useAllResources(): Resource[] {
  return useResourceStore((s) => s.resources);
}

function useTyped<T extends Resource>(type: T['type']): T[] {
  const resources = useResourceStore((s) => s.resources);
  return useMemo(
    () => resources.filter((r): r is T => r.type === type),
    [resources, type],
  );
}

export const useNotes = () => useTyped<Note>('note');
export const useWorksheets = () => useTyped<Worksheet>('worksheet');
export const useGrammarTopics = () => useTyped<GrammarTopic>('grammar');
export const useVocabulary = () => useTyped<VocabularyEntry>('vocabulary');
export const useVerbs = () => useTyped<Verb>('verb');
export const usePdfs = () => useTyped<PdfDocument>('pdf');

export function useResourceById(id: string | undefined): Resource | undefined {
  return useResourceStore((s) => (id ? s.resources.find((r) => r.id === id) : undefined));
}

export function useAllTags(): { tag: string; count: number }[] {
  const resources = useAllResources();
  return useMemo(() => {
    const counts = new Map<string, number>();
    for (const r of resources) {
      for (const tag of r.tags) {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      }
    }
    return [...counts.entries()]
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count);
  }, [resources]);
}

export function useResourcesByTag(tag: string | undefined): Resource[] {
  const resources = useAllResources();
  return useMemo(
    () => (tag ? resources.filter((r) => r.tags.includes(tag)) : []),
    [resources, tag],
  );
}

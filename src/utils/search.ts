import type { Resource, SearchResult, SearchResultsByType } from '@/types';

function fieldsFor(resource: Resource): { field: string; value: string }[] {
  const common = [
    { field: 'title', value: resource.title },
    { field: 'description', value: resource.description ?? '' },
    { field: 'tags', value: resource.tags.join(' ') },
  ];

  switch (resource.type) {
    case 'note':
      return [
        ...common,
        { field: 'topic', value: resource.topic },
        { field: 'content', value: resource.content },
      ];
    case 'worksheet':
      return [
        ...common,
        { field: 'subject', value: resource.subject },
        { field: 'notes', value: resource.notes ?? '' },
        { field: 'corrections', value: resource.corrections ?? '' },
      ];
    case 'grammar':
      return [
        ...common,
        { field: 'content', value: resource.content },
        {
          field: 'examples',
          value: (resource.examples ?? []).map((e) => `${e.fr} ${e.en}`).join(' '),
        },
      ];
    case 'vocabulary':
      return [
        ...common,
        { field: 'french', value: resource.french },
        { field: 'english', value: resource.english },
        { field: 'topic', value: resource.topic },
        { field: 'example', value: resource.example ?? '' },
      ];
    case 'verb':
      return [
        ...common,
        { field: 'infinitive', value: resource.infinitive },
        { field: 'englishMeaning', value: resource.englishMeaning },
        {
          field: 'conjugations',
          value: resource.conjugations
            .flatMap((c) => c.rows.map((r) => r.form))
            .join(' '),
        },
      ];
    case 'pdf':
      return [...common, { field: 'category', value: resource.category }];
    default:
      return common;
  }
}

function snippetAround(text: string, query: string, radius = 40): string {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text.slice(0, radius * 2);
  const start = Math.max(0, idx - radius);
  const end = Math.min(text.length, idx + query.length + radius);
  return `${start > 0 ? '…' : ''}${text.slice(start, end)}${end < text.length ? '…' : ''}`;
}

export function searchResources(resources: Resource[], query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const resource of resources) {
    const fields = fieldsFor(resource);
    for (const { field, value } of fields) {
      if (value.toLowerCase().includes(q)) {
        results.push({
          resource,
          matchedField: field,
          snippet: snippetAround(value, q),
        });
        break;
      }
    }
  }

  return results;
}

export function groupResultsByType(results: SearchResult[]): SearchResultsByType {
  const grouped: SearchResultsByType = {
    note: [],
    worksheet: [],
    grammar: [],
    vocabulary: [],
    verb: [],
    pdf: [],
  };
  for (const r of results) {
    grouped[r.resource.type].push(r);
  }
  return grouped;
}

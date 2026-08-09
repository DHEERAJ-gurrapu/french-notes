export type ResourceType =
  | 'note'
  | 'worksheet'
  | 'grammar'
  | 'vocabulary'
  | 'verb'
  | 'pdf';

export interface BaseResource {
  id: string;
  type: ResourceType;
  title: string;
  description?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

/** Reference to a binary file stored in the file blob store (IndexedDB). */
export interface FileRef {
  id: string;
  fileId: string;
  fileName: string;
  kind: 'pdf' | 'image';
  label?: string;
}

export interface Note extends BaseResource {
  type: 'note';
  topic: string;
  content: string;
  attachments?: FileRef[];
}

export interface Worksheet extends BaseResource {
  type: 'worksheet';
  subject: string;
  date: string;
  files: FileRef[];
  notes?: string;
  corrections?: string;
}

export type GrammarSection = 'basics' | 'verbs' | 'tenses' | 'other';

export interface GrammarExample {
  fr: string;
  en: string;
}

export interface GrammarTopic extends BaseResource {
  type: 'grammar';
  section: GrammarSection;
  content: string;
  examples?: GrammarExample[];
}

export interface VocabularyEntry extends BaseResource {
  type: 'vocabulary';
  topic: string;
  french: string;
  english: string;
  example?: string;
  gender?: 'm' | 'f' | 'n/a';
}

export interface ConjugationRow {
  pronoun: string;
  form: string;
}

export interface ConjugationTable {
  tense: string;
  rows: ConjugationRow[];
}

export type VerbGroup = 'er' | 'ir' | 're' | 'irregular' | 'pronominal';

export interface Verb extends BaseResource {
  type: 'verb';
  infinitive: string;
  englishMeaning: string;
  group: VerbGroup;
  conjugations: ConjugationTable[];
}

export interface PdfDocument extends BaseResource {
  type: 'pdf';
  category: string;
  fileId: string;
  fileName: string;
}

export type Resource =
  | Note
  | Worksheet
  | GrammarTopic
  | VocabularyEntry
  | Verb
  | PdfDocument;

export interface StoredFile {
  id: string;
  name: string;
  mimeType: string;
  blob: Blob;
  createdAt: string;
}

export interface SearchResult {
  resource: Resource;
  matchedField: string;
  snippet: string;
}

type ResourceVariantMap = { [T in Resource['type']]: Extract<Resource, { type: T }> };

/** A new resource payload, distributed per variant so type-specific fields stay intact. */
export type NewResourceInput = {
  [T in Resource['type']]: Omit<ResourceVariantMap[T], 'id' | 'createdAt' | 'updatedAt'>;
}[Resource['type']];

/** A partial update payload, distributed per variant. */
export type ResourcePatch = {
  [T in Resource['type']]: Partial<Omit<ResourceVariantMap[T], 'id' | 'type' | 'createdAt' | 'updatedAt'>>;
}[Resource['type']];

export interface SearchResultsByType {
  note: SearchResult[];
  worksheet: SearchResult[];
  grammar: SearchResult[];
  vocabulary: SearchResult[];
  verb: SearchResult[];
  pdf: SearchResult[];
}

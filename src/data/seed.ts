import type { Resource } from '@/types';
import { notesSeed } from './notes';
import { grammarSeed } from './grammar';
import { vocabularySeed } from './vocabulary';
import { verbsSeed } from './verbs';
import { worksheetsSeed } from './worksheets';
import { pdfsSeed } from './pdfs';

export const seedResources: Resource[] = [
  ...notesSeed,
  ...grammarSeed,
  ...vocabularySeed,
  ...verbsSeed,
  ...worksheetsSeed,
  ...pdfsSeed,
];

export const CATEGORY_LABELS: Record<Resource['type'], string> = {
  note: 'Notes',
  worksheet: 'Worksheets',
  grammar: 'Grammar',
  vocabulary: 'Vocabulary',
  verb: 'Verbs',
  pdf: 'PDFs',
};

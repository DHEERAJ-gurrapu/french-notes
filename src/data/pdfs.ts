import type { PdfDocument } from '@/types';

// Empty on first run — upload your French PDFs from the Admin area or the
// PDF library's "Add PDF" action to populate this shelf.
export const pdfsSeed: PdfDocument[] = [
  {
    id: 'pdf_typed_class_notes_units_1_2',
    type: 'pdf',
    title: 'Typed class notes - Units 1 & 2',
    description: 'Family, relationships, physical description, places and directions from the supplied typed class notes.',
    category: 'Class notes',
    fileId: 'bundled_typed_class_notes_units_1_2',
    fileName: 'French-Typed-Class-Notes-Units-1-and-2.pdf',
    publicUrl: '/French-Typed-Class-Notes-Units-1-and-2.pdf',
    tags: ['typed notes', 'unit-1', 'unit-2', 'family', 'places'],
    createdAt: '2026-09-08T10:00:00.000Z',
    updatedAt: '2026-09-08T10:00:00.000Z',
  },
  {
    id: 'pdf_typed_notebook_unit_2_3',
    type: 'pdf',
    title: 'Typed notebook notes - Units 2 & 3',
    description: 'A clean typed transcription of the uploaded handwritten notebook pages: postcards, revision, leisure, reading and television.',
    category: 'Class notes',
    fileId: 'bundled_typed_notebook_unit_2_3',
    fileName: 'French-Typed-Notebook-Notes-Units-2-and-3.pdf',
    publicUrl: '/French-Typed-Notebook-Notes-Units-2-and-3.pdf',
    tags: ['typed notes', 'unit-2', 'unit-3', 'leisure', 'passé composé'],
    createdAt: '2026-09-08T09:00:00.000Z',
    updatedAt: '2026-09-08T09:00:00.000Z',
  },
];

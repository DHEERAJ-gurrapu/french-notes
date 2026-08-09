import {
  NotebookPen,
  FileStack,
  BookOpen,
  Languages,
  GraduationCap,
  FileText,
  type LucideIcon,
} from 'lucide-react';
import type { Resource, ResourceType } from '@/types';

export interface ResourceMeta {
  label: string;
  singular: string;
  icon: LucideIcon;
  path: string;
  accent: 'bleu' | 'rouge';
}

export const RESOURCE_META: Record<ResourceType, ResourceMeta> = {
  note: { label: 'Notes', singular: 'Note', icon: NotebookPen, path: '/notes', accent: 'bleu' },
  worksheet: {
    label: 'Worksheets',
    singular: 'Worksheet',
    icon: FileStack,
    path: '/worksheets',
    accent: 'rouge',
  },
  grammar: { label: 'Grammar', singular: 'Grammar topic', icon: BookOpen, path: '/grammar', accent: 'bleu' },
  vocabulary: {
    label: 'Vocabulary',
    singular: 'Vocabulary word',
    icon: Languages,
    path: '/vocabulary',
    accent: 'rouge',
  },
  verb: { label: 'Verbs', singular: 'Verb', icon: GraduationCap, path: '/verbs', accent: 'bleu' },
  pdf: { label: 'PDFs', singular: 'PDF', icon: FileText, path: '/pdfs', accent: 'rouge' },
};

export function resourcePath(id: string, type: ResourceType): string {
  return `${RESOURCE_META[type].path}/${id}`;
}

export function resourceSubtitle(resource: Resource): string | undefined {
  switch (resource.type) {
    case 'note':
      return resource.description ?? resource.topic;
    case 'worksheet':
      return resource.description ?? resource.subject;
    case 'grammar':
      return resource.description;
    case 'vocabulary':
      return `${resource.french} — ${resource.english}`;
    case 'verb':
      return resource.englishMeaning;
    case 'pdf':
      return resource.description ?? resource.category;
    default:
      return undefined;
  }
}

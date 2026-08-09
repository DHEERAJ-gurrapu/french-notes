import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useResourceById } from '@/hooks/useResources';
import { useResourceStore } from '@/store/resourceStore';
import { ErrorState } from '@/components/ui/ErrorState';
import { NoteForm } from '@/components/admin/forms/NoteForm';
import { WorksheetForm } from '@/components/admin/forms/WorksheetForm';
import { GrammarForm } from '@/components/admin/forms/GrammarForm';
import { VocabularyForm } from '@/components/admin/forms/VocabularyForm';
import { VerbForm } from '@/components/admin/forms/VerbForm';
import { PdfForm } from '@/components/admin/forms/PdfForm';
import type { GrammarTopic, Note, PdfDocument, ResourceType, Verb, VocabularyEntry, Worksheet } from '@/types';

const VALID_TYPES: ResourceType[] = ['note', 'worksheet', 'grammar', 'vocabulary', 'verb', 'pdf'];

export function AdminResourceFormPage() {
  const { type, id } = useParams<{ type: string; id?: string }>();
  const navigate = useNavigate();
  const existing = useResourceById(id);
  const addResource = useResourceStore((s) => s.add);
  const updateResource = useResourceStore((s) => s.update);

  if (!type || !VALID_TYPES.includes(type as ResourceType)) {
    return <Navigate to="/admin" replace />;
  }
  const resourceType = type as ResourceType;
  const backHref = `/admin/${resourceType}`;

  if (id && !existing) {
    return <ErrorState title="Resource not found" description="It may have already been deleted." />;
  }
  if (id && existing && existing.type !== resourceType) {
    return <Navigate to="/admin" replace />;
  }

  switch (resourceType) {
    case 'note':
      return (
        <NoteForm
          key={id ?? 'new'}
          initial={id ? (existing as Note) : undefined}
          backHref={backHref}
          onSubmit={(payload) => {
            if (id) updateResource(id, payload);
            else addResource({ type: 'note', ...payload });
            navigate(backHref);
          }}
        />
      );
    case 'worksheet':
      return (
        <WorksheetForm
          key={id ?? 'new'}
          initial={id ? (existing as Worksheet) : undefined}
          backHref={backHref}
          onSubmit={(payload) => {
            if (id) updateResource(id, payload);
            else addResource({ type: 'worksheet', ...payload });
            navigate(backHref);
          }}
        />
      );
    case 'grammar':
      return (
        <GrammarForm
          key={id ?? 'new'}
          initial={id ? (existing as GrammarTopic) : undefined}
          backHref={backHref}
          onSubmit={(payload) => {
            if (id) updateResource(id, payload);
            else addResource({ type: 'grammar', ...payload });
            navigate(backHref);
          }}
        />
      );
    case 'vocabulary':
      return (
        <VocabularyForm
          key={id ?? 'new'}
          initial={id ? (existing as VocabularyEntry) : undefined}
          backHref={backHref}
          onSubmit={(payload) => {
            if (id) updateResource(id, payload);
            else addResource({ type: 'vocabulary', ...payload });
            navigate(backHref);
          }}
        />
      );
    case 'verb':
      return (
        <VerbForm
          key={id ?? 'new'}
          initial={id ? (existing as Verb) : undefined}
          backHref={backHref}
          onSubmit={(payload) => {
            if (id) updateResource(id, payload);
            else addResource({ type: 'verb', ...payload });
            navigate(backHref);
          }}
        />
      );
    case 'pdf':
      return (
        <PdfForm
          key={id ?? 'new'}
          initial={id ? (existing as PdfDocument) : undefined}
          backHref={backHref}
          onSubmit={(payload) => {
            if (id) updateResource(id, payload);
            else addResource({ type: 'pdf', ...payload });
            navigate(backHref);
          }}
        />
      );
    default:
      return <Navigate to="/admin" replace />;
  }
}

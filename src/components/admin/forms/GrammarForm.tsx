import { useState, type FormEvent } from 'react';
import type { GrammarSection, GrammarTopic } from '@/types';
import { AdminFormShell } from '@/components/admin/AdminFormShell';
import { TextInput, TextArea, Select } from '@/components/ui/FormField';
import { TagInput } from '@/components/ui/TagInput';
import { ExamplesEditor } from '@/components/admin/ExamplesEditor';

type GrammarPayload = Omit<GrammarTopic, 'id' | 'type' | 'createdAt' | 'updatedAt'>;

interface GrammarFormProps {
  initial?: GrammarTopic;
  backHref: string;
  onSubmit: (payload: GrammarPayload) => void;
}

export function GrammarForm({ initial, backHref, onSubmit }: GrammarFormProps) {
  const [title, setTitle] = useState(initial?.title ?? '');
  const [section, setSection] = useState<GrammarSection>(initial?.section ?? 'basics');
  const [description, setDescription] = useState(initial?.description ?? '');
  const [content, setContent] = useState(initial?.content ?? '');
  const [examples, setExamples] = useState(initial?.examples ?? []);
  const [tags, setTags] = useState<string[]>(initial?.tags ?? []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({
      title,
      section,
      description: description || undefined,
      content,
      examples: examples.length ? examples : undefined,
      tags,
    });
  }

  return (
    <AdminFormShell
      title={initial ? 'Edit grammar topic' : 'Add grammar topic'}
      crumbLabel="Grammar"
      crumbHref="/admin/grammar"
      backHref={backHref}
      onSubmit={handleSubmit}
    >
      <TextInput label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <Select label="Category" value={section} onChange={(e) => setSection(e.target.value as GrammarSection)}>
        <option value="basics">Basics</option>
        <option value="verbs">Verbs</option>
        <option value="tenses">Tenses</option>
        <option value="other">Other</option>
      </Select>
      <TextInput label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <TextArea
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        required
        hint="Supports Markdown."
      />
      <ExamplesEditor examples={examples} onChange={setExamples} />
      <TagInput value={tags} onChange={setTags} />
    </AdminFormShell>
  );
}

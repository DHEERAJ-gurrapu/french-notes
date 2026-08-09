import { useState, type FormEvent } from 'react';
import type { VocabularyEntry } from '@/types';
import { AdminFormShell } from '@/components/admin/AdminFormShell';
import { TextInput, Select } from '@/components/ui/FormField';
import { TagInput } from '@/components/ui/TagInput';

type VocabularyPayload = Omit<VocabularyEntry, 'id' | 'type' | 'createdAt' | 'updatedAt'>;

interface VocabularyFormProps {
  initial?: VocabularyEntry;
  backHref: string;
  onSubmit: (payload: VocabularyPayload) => void;
}

export function VocabularyForm({ initial, backHref, onSubmit }: VocabularyFormProps) {
  const [topic, setTopic] = useState(initial?.topic ?? '');
  const [french, setFrench] = useState(initial?.french ?? '');
  const [english, setEnglish] = useState(initial?.english ?? '');
  const [example, setExample] = useState(initial?.example ?? '');
  const [gender, setGender] = useState<VocabularyEntry['gender']>(initial?.gender ?? 'n/a');
  const [tags, setTags] = useState<string[]>(initial?.tags ?? []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({
      title: `${french} — ${english}`,
      topic,
      french,
      english,
      example: example || undefined,
      gender,
      tags,
    });
  }

  return (
    <AdminFormShell
      title={initial ? 'Edit vocabulary word' : 'Add vocabulary word'}
      crumbLabel="Vocabulary"
      crumbHref="/admin/vocabulary"
      backHref={backHref}
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextInput label="French" value={french} onChange={(e) => setFrench(e.target.value)} required />
        <TextInput label="English" value={english} onChange={(e) => setEnglish(e.target.value)} required />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextInput
          label="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
          hint="e.g. Family, Food, House…"
        />
        <Select
          label="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value as VocabularyEntry['gender'])}
        >
          <option value="n/a">N/A</option>
          <option value="m">Masculine</option>
          <option value="f">Feminine</option>
        </Select>
      </div>
      <TextInput
        label="Example sentence"
        value={example}
        onChange={(e) => setExample(e.target.value)}
        hint="Optional — a sentence showing the word in use."
      />
      <TagInput value={tags} onChange={setTags} />
    </AdminFormShell>
  );
}

import { useState, type FormEvent } from 'react';
import type { Verb } from '@/types';
import { AdminFormShell } from '@/components/admin/AdminFormShell';
import { TextInput, Select } from '@/components/ui/FormField';
import { TagInput } from '@/components/ui/TagInput';
import { ConjugationsEditor } from '@/components/admin/ConjugationsEditor';
import { PRONOUNS_STD } from '@/utils/verbPronouns';

type VerbPayload = Omit<Verb, 'id' | 'type' | 'createdAt' | 'updatedAt'>;

interface VerbFormProps {
  initial?: Verb;
  backHref: string;
  onSubmit: (payload: VerbPayload) => void;
}

export function VerbForm({ initial, backHref, onSubmit }: VerbFormProps) {
  const [infinitive, setInfinitive] = useState(initial?.infinitive ?? '');
  const [englishMeaning, setEnglishMeaning] = useState(initial?.englishMeaning ?? '');
  const [group, setGroup] = useState<Verb['group']>(initial?.group ?? 'er');
  const [conjugations, setConjugations] = useState(
    initial?.conjugations ?? [{ tense: 'Présent', rows: PRONOUNS_STD.map((pronoun) => ({ pronoun, form: '' })) }],
  );
  const [tags, setTags] = useState<string[]>(initial?.tags ?? []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({ title: infinitive, infinitive, englishMeaning, group, conjugations, tags });
  }

  return (
    <AdminFormShell
      title={initial ? 'Edit verb' : 'Add verb'}
      crumbLabel="Verbs"
      crumbHref="/admin/verb"
      backHref={backHref}
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextInput label="Infinitive" value={infinitive} onChange={(e) => setInfinitive(e.target.value)} required />
        <TextInput
          label="English meaning"
          value={englishMeaning}
          onChange={(e) => setEnglishMeaning(e.target.value)}
          required
        />
      </div>
      <Select label="Group" value={group} onChange={(e) => setGroup(e.target.value as Verb['group'])}>
        <option value="er">-ER verb</option>
        <option value="ir">-IR verb</option>
        <option value="re">-RE verb</option>
        <option value="irregular">Irregular</option>
        <option value="pronominal">Pronominal</option>
      </Select>
      <ConjugationsEditor conjugations={conjugations} onChange={setConjugations} />
      <TagInput value={tags} onChange={setTags} />
    </AdminFormShell>
  );
}

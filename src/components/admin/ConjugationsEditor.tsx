import { Plus, X } from 'lucide-react';
import type { ConjugationTable } from '@/types';
import { PRONOUNS_STD } from '@/utils/verbPronouns';

interface ConjugationsEditorProps {
  conjugations: ConjugationTable[];
  onChange: (conjugations: ConjugationTable[]) => void;
}

export function ConjugationsEditor({ conjugations, onChange }: ConjugationsEditorProps) {
  function updateTenseName(i: number, tense: string) {
    onChange(conjugations.map((c, idx) => (idx === i ? { ...c, tense } : c)));
  }
  function updateForm(i: number, rowIdx: number, form: string) {
    onChange(
      conjugations.map((c, idx) =>
        idx === i ? { ...c, rows: c.rows.map((r, ri) => (ri === rowIdx ? { ...r, form } : r)) } : c,
      ),
    );
  }
  function addTense() {
    onChange([
      ...conjugations,
      { tense: 'New tense', rows: PRONOUNS_STD.map((pronoun) => ({ pronoun, form: '' })) },
    ]);
  }
  function removeTense(i: number) {
    onChange(conjugations.filter((_, idx) => idx !== i));
  }

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
        Conjugation tables
      </label>
      <div className="space-y-4">
        {conjugations.map((c, i) => (
          <div key={i} className="rounded-xl border border-slate-200 p-3.5 dark:border-slate-700">
            <div className="mb-2.5 flex items-center gap-2">
              <input
                value={c.tense}
                onChange={(e) => updateTenseName(i, e.target.value)}
                placeholder="Tense name (e.g. Présent)"
                className="min-w-0 flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm font-medium text-slate-800 focus:border-bleu-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
              <button
                type="button"
                onClick={() => removeTense(i)}
                className="shrink-0 text-slate-400 hover:text-rouge-500"
                aria-label="Remove tense"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {c.rows.map((row, ri) => (
                <div key={row.pronoun} className="flex items-center gap-2">
                  <span className="w-28 shrink-0 text-xs text-slate-400 dark:text-slate-500">{row.pronoun}</span>
                  <input
                    value={row.form}
                    onChange={(e) => updateForm(i, ri, e.target.value)}
                    className="min-w-0 flex-1 rounded-lg border border-slate-200 px-2.5 py-1 text-sm text-slate-800 focus:border-bleu-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addTense}
        className="mt-2 flex items-center gap-1 text-sm font-medium text-bleu-600 hover:text-bleu-700 dark:text-bleu-400"
      >
        <Plus className="h-3.5 w-3.5" /> Add tense
      </button>
    </div>
  );
}

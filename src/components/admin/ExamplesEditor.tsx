import { Plus, X } from 'lucide-react';
import type { GrammarExample } from '@/types';

interface ExamplesEditorProps {
  examples: GrammarExample[];
  onChange: (examples: GrammarExample[]) => void;
}

export function ExamplesEditor({ examples, onChange }: ExamplesEditorProps) {
  function update(i: number, field: keyof GrammarExample, value: string) {
    onChange(examples.map((e, idx) => (idx === i ? { ...e, [field]: value } : e)));
  }
  function add() {
    onChange([...examples, { fr: '', en: '' }]);
  }
  function remove(i: number) {
    onChange(examples.filter((_, idx) => idx !== i));
  }

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Examples</label>
      <div className="space-y-2">
        {examples.map((ex, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              value={ex.fr}
              onChange={(e) => update(i, 'fr', e.target.value)}
              placeholder="French sentence"
              className="min-w-0 flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm text-slate-800 focus:border-bleu-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
            <input
              value={ex.en}
              onChange={(e) => update(i, 'en', e.target.value)}
              placeholder="English translation"
              className="min-w-0 flex-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm text-slate-800 focus:border-bleu-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
            <button
              type="button"
              onClick={() => remove(i)}
              className="shrink-0 text-slate-400 hover:text-rouge-500"
              aria-label="Remove example"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={add}
        className="mt-2 flex items-center gap-1 text-sm font-medium text-bleu-600 hover:text-bleu-700 dark:text-bleu-400"
      >
        <Plus className="h-3.5 w-3.5" /> Add example
      </button>
    </div>
  );
}

import { Check } from 'lucide-react';
import clsx from 'clsx';
import { useUiStore } from '@/store/uiStore';

export function VocabularyProgressButton({ id }: { id: string }) {
  const isDone = useUiStore((state) => state.isVocabularyComplete(id));
  const toggleDone = useUiStore((state) => state.toggleVocabularyComplete);

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleDone(id);
      }}
      aria-label={isDone ? 'Mark vocabulary as not done' : 'Mark vocabulary as done'}
      aria-pressed={isDone}
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors',
        isDone
          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
          : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-emerald-950 dark:hover:text-emerald-300',
      )}
      title={isDone ? 'Mark as not done' : 'Mark as done'}
    >
      <span className="inline-flex h-4 w-4 items-center justify-center rounded border border-current">
        {isDone && <Check className="h-3 w-3" strokeWidth={3} />}
      </span>
      {isDone ? 'Done' : 'Mark done'}
    </button>
  );
}

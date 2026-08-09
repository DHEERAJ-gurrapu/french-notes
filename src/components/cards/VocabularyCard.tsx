import { Link } from 'react-router-dom';
import type { VocabularyEntry } from '@/types';
import { Tag } from '@/components/ui/Tag';
import { FavoriteButton } from '@/components/ui/FavoriteButton';

const GENDER_LABEL: Record<NonNullable<VocabularyEntry['gender']>, string> = {
  m: 'masc.',
  f: 'fém.',
  'n/a': '',
};

export function VocabularyCard({ entry }: { entry: VocabularyEntry }) {
  return (
    <Link
      to={`/vocabulary/${entry.id}`}
      className="group animate-fade-up flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-rouge-200 hover:shadow-lg hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-rouge-900 dark:hover:shadow-black/30"
    >
      <div className="mb-2 flex items-start justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
          {entry.topic}
        </span>
        <FavoriteButton id={entry.id} />
      </div>
      <p className="font-display text-lg font-semibold text-bleu-700 group-hover:text-bleu-800 dark:text-bleu-400 dark:group-hover:text-bleu-300">
        {entry.french}
        {entry.gender && entry.gender !== 'n/a' && (
          <span className="ml-1.5 text-xs font-normal text-slate-400 dark:text-slate-500">
            ({GENDER_LABEL[entry.gender]})
          </span>
        )}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400">{entry.english}</p>
      {entry.example && (
        <p className="mt-2 text-sm italic text-slate-400 dark:text-slate-500">“{entry.example}”</p>
      )}
      <div className="mt-3 flex flex-1 flex-wrap items-end gap-1.5">
        {entry.tags.slice(0, 3).map((t) => (
          <Tag key={t} label={t} interactive={false} />
        ))}
      </div>
    </Link>
  );
}

import { Link } from 'react-router-dom';
import type { Verb } from '@/types';
import { Tag } from '@/components/ui/Tag';
import { FavoriteButton } from '@/components/ui/FavoriteButton';

const GROUP_LABEL: Record<Verb['group'], string> = {
  er: '-ER verb',
  ir: '-IR verb',
  re: '-RE verb',
  irregular: 'Irregular',
  pronominal: 'Pronominal',
};

export function VerbCard({ verb }: { verb: Verb }) {
  return (
    <Link
      to={`/verbs/${verb.id}`}
      className="group animate-fade-up flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-bleu-200 hover:shadow-lg hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-bleu-800 dark:hover:shadow-black/30"
    >
      <div className="mb-2 flex items-start justify-between">
        <span className="rounded-full bg-bleu-50 px-2.5 py-0.5 text-xs font-medium text-bleu-700 dark:bg-bleu-950 dark:text-bleu-300">
          {GROUP_LABEL[verb.group]}
        </span>
        <FavoriteButton id={verb.id} />
      </div>
      <p className="font-display text-lg font-semibold text-slate-800 group-hover:text-bleu-700 dark:text-slate-100 dark:group-hover:text-bleu-400">
        {verb.infinitive}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400">{verb.englishMeaning}</p>
      <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
        {verb.conjugations.length} tense{verb.conjugations.length === 1 ? '' : 's'}
      </p>
      <div className="mt-3 flex flex-1 flex-wrap items-end gap-1.5">
        {verb.tags.slice(0, 3).map((t) => (
          <Tag key={t} label={t} interactive={false} />
        ))}
      </div>
    </Link>
  );
}

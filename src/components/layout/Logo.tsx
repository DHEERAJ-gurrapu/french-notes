import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-lg shadow-sm ring-1 ring-black/5">
        <span className="flex-1 bg-bleu-600" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-rouge-600" />
      </span>
      <span className="text-[15px] font-bold tracking-tight text-slate-800 group-hover:text-bleu-700 dark:text-slate-100 dark:group-hover:text-bleu-400">
        French Hub
      </span>
    </Link>
  );
}

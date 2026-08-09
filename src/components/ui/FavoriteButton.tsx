import { Star } from 'lucide-react';
import clsx from 'clsx';
import { useUiStore } from '@/store/uiStore';

export function FavoriteButton({ id, className }: { id: string; className?: string }) {
  const isFavorite = useUiStore((s) => s.isFavorite(id));
  const toggleFavorite = useUiStore((s) => s.toggleFavorite);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(id);
      }}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={isFavorite}
      className={clsx(
        'inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors',
        isFavorite
          ? 'text-rouge-500 hover:bg-rouge-50 dark:hover:bg-rouge-950'
          : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300',
        className,
      )}
    >
      <Star className="h-4.5 w-4.5" fill={isFavorite ? 'currentColor' : 'none'} strokeWidth={2} />
    </button>
  );
}

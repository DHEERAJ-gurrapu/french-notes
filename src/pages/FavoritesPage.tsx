import { Star } from 'lucide-react';
import { useFavoriteResources } from '@/hooks/useFavoritesAndRecents';
import { PageHeader } from '@/components/ui/PageHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { ResourceCard } from '@/components/cards/ResourceCard';

export function FavoritesPage() {
  const favorites = useFavoriteResources();

  return (
    <div>
      <PageHeader icon={Star} title="Favorites" description="Resources you've bookmarked for quick access." />
      {favorites.length === 0 ? (
        <EmptyState
          icon={Star}
          title="No favorites yet"
          description="Tap the star on any note, worksheet, or vocabulary card to save it here."
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      )}
    </div>
  );
}

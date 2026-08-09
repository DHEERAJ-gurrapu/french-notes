import { useMemo } from 'react';
import { useUiStore } from '@/store/uiStore';
import { useAllResources } from './useResources';
import type { Resource } from '@/types';

export function useFavoriteResources(): Resource[] {
  const favorites = useUiStore((s) => s.favorites);
  const resources = useAllResources();
  return useMemo(
    () => favorites.map((id) => resources.find((r) => r.id === id)).filter((r): r is Resource => !!r),
    [favorites, resources],
  );
}

export function useRecentlyViewedResources(): Resource[] {
  const recentlyViewed = useUiStore((s) => s.recentlyViewed);
  const resources = useAllResources();
  return useMemo(
    () =>
      recentlyViewed
        .map((entry) => resources.find((r) => r.id === entry.id))
        .filter((r): r is Resource => !!r),
    [recentlyViewed, resources],
  );
}

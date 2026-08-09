import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeMode = 'light' | 'dark';

interface RecentEntry {
  id: string;
  viewedAt: string;
}

interface UiStore {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;

  favorites: string[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;

  recentlyViewed: RecentEntry[];
  recordView: (id: string) => void;
}

const prefersDark =
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false;

export const useUiStore = create<UiStore>()(
  persist(
    (set, get) => ({
      theme: prefersDark ? 'dark' : 'light',
      toggleTheme: () => set({ theme: get().theme === 'dark' ? 'light' : 'dark' }),
      setTheme: (theme) => set({ theme }),

      favorites: [],
      isFavorite: (id) => get().favorites.includes(id),
      toggleFavorite: (id) => {
        const { favorites } = get();
        set({
          favorites: favorites.includes(id)
            ? favorites.filter((f) => f !== id)
            : [id, ...favorites],
        });
      },

      recentlyViewed: [],
      recordView: (id) => {
        const existing = get().recentlyViewed.filter((r) => r.id !== id);
        set({
          recentlyViewed: [{ id, viewedAt: new Date().toISOString() }, ...existing].slice(0, 20),
        });
      },
    }),
    { name: 'french-hub:ui:v1' },
  ),
);

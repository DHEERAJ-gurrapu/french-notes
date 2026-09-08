import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { NewResourceInput, Resource, ResourcePatch } from '@/types';
import { seedResources } from '@/data/seed';
import { nowIso } from '@/utils/date';
import { generateId } from '@/utils/id';

interface ResourceStore {
  resources: Resource[];
  add: (resource: NewResourceInput & { id?: string }) => Resource;
  update: (id: string, patch: ResourcePatch) => void;
  remove: (id: string) => void;
  resetToSeed: () => void;
}

export const useResourceStore = create<ResourceStore>()(
  persist(
    (set, get) => ({
      resources: seedResources,
      add: (partial) => {
        const now = nowIso();
        const resource = {
          ...partial,
          id: partial.id ?? generateId(partial.type),
          createdAt: now,
          updatedAt: now,
        } as Resource;
        set({ resources: [resource, ...get().resources] });
        return resource;
      },
      update: (id, patch) => {
        set({
          resources: get().resources.map((r) =>
            r.id === id ? ({ ...r, ...patch, updatedAt: nowIso() } as Resource) : r,
          ),
        });
      },
      remove: (id) => {
        set({ resources: get().resources.filter((r) => r.id !== id) });
      },
      resetToSeed: () => set({ resources: seedResources }),
    }),
    {
      name: 'french-hub:resources:v1',
      // Existing users keep every saved resource and edit. New bundled study
      // material is appended by id as local storage is merged with the seed.
      merge: (persistedState, currentState) => {
        const persisted = persistedState as Partial<ResourceStore>;
        const savedResources = persisted.resources ?? currentState.resources;
        const savedIds = new Set(savedResources.map((resource) => resource.id));
        const additions = seedResources.filter((resource) => !savedIds.has(resource.id));
        return { ...currentState, ...persisted, resources: [...additions, ...savedResources] };
      },
    },
  ),
);

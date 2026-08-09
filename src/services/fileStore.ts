import { get, set, del } from 'idb-keyval';
import { generateId } from '@/utils/id';
import { nowIso } from '@/utils/date';
import type { StoredFile } from '@/types';

const PREFIX = 'french-hub:file:';

export async function saveFile(file: File): Promise<StoredFile> {
  const id = generateId('file');
  const stored: StoredFile = {
    id,
    name: file.name,
    mimeType: file.type,
    blob: file,
    createdAt: nowIso(),
  };
  await set(PREFIX + id, stored);
  return stored;
}

export async function getFile(id: string): Promise<StoredFile | undefined> {
  return get(PREFIX + id);
}

export async function deleteFile(id: string): Promise<void> {
  await del(PREFIX + id);
}

/** Caller is responsible for revoking the returned URL when done with it. */
export async function getFileObjectUrl(id: string): Promise<string | undefined> {
  const file = await getFile(id);
  if (!file) return undefined;
  return URL.createObjectURL(file.blob);
}

export function inferFileKind(file: File): 'pdf' | 'image' {
  return file.type === 'application/pdf' ? 'pdf' : 'image';
}

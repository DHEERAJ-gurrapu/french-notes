import { useEffect, useState } from 'react';
import { getFileObjectUrl } from '@/services/fileStore';

export function useFileUrl(fileId: string | undefined) {
  const [url, setUrl] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(!!fileId);

  useEffect(() => {
    let objectUrl: string | undefined;
    let cancelled = false;

    if (!fileId) {
      setUrl(undefined);
      setLoading(false);
      return;
    }

    setLoading(true);
    getFileObjectUrl(fileId).then((result) => {
      if (cancelled) return;
      objectUrl = result;
      setUrl(result);
      setLoading(false);
    });

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [fileId]);

  return { url, loading };
}

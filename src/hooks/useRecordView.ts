import { useEffect } from 'react';
import { useUiStore } from '@/store/uiStore';

export function useRecordView(id: string | undefined) {
  const recordView = useUiStore((s) => s.recordView);
  useEffect(() => {
    if (id) recordView(id);
  }, [id, recordView]);
}

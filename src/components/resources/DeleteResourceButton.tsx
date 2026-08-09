import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Dialog } from '@/components/ui/Dialog';
import { useResourceStore } from '@/store/resourceStore';

export function DeleteResourceButton({
  id,
  title,
  redirectTo,
}: {
  id: string;
  title: string;
  redirectTo: string;
}) {
  const [open, setOpen] = useState(false);
  const remove = useResourceStore((s) => s.remove);
  const navigate = useNavigate();

  return (
    <>
      <Button variant="danger" size="sm" icon={<Trash2 className="h-3.5 w-3.5" />} onClick={() => setOpen(true)}>
        Delete
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} title="Delete this resource?">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Are you sure you want to delete <span className="font-medium">{title}</span>? This action cannot be
          undone.
        </p>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              remove(id);
              setOpen(false);
              navigate(redirectTo);
            }}
          >
            Delete permanently
          </Button>
        </div>
      </Dialog>
    </>
  );
}

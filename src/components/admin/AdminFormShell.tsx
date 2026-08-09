import type { FormEvent, ReactNode } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button, LinkButton } from '@/components/ui/Button';

interface AdminFormShellProps {
  title: string;
  crumbLabel: string;
  crumbHref: string;
  backHref: string;
  onSubmit: (e: FormEvent) => void;
  children: ReactNode;
}

export function AdminFormShell({ title, crumbLabel, crumbHref, backHref, onSubmit, children }: AdminFormShellProps) {
  return (
    <div className="mx-auto max-w-2xl">
      <Breadcrumbs items={[{ label: 'Admin', to: '/admin' }, { label: crumbLabel, to: crumbHref }, { label: title }]} />
      <h1 className="mb-6 font-display text-2xl font-bold text-slate-800 dark:text-slate-100">{title}</h1>
      <form
        onSubmit={onSubmit}
        className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
      >
        {children}
        <div className="flex justify-end gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
          <LinkButton to={backHref} variant="secondary">
            Cancel
          </LinkButton>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
}

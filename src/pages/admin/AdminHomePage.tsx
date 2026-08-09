import { Link } from 'react-router-dom';
import { Settings, ChevronRight, Download, Upload, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import { useAllResources } from '@/hooks/useResources';
import { useResourceStore } from '@/store/resourceStore';
import { RESOURCE_META } from '@/utils/resourceMeta';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { Dialog } from '@/components/ui/Dialog';
import type { Resource, ResourceType } from '@/types';

const TYPE_ORDER: ResourceType[] = ['note', 'worksheet', 'grammar', 'vocabulary', 'verb', 'pdf'];

export function AdminHomePage() {
  const resources = useAllResources();
  const resetToSeed = useResourceStore((s) => s.resetToSeed);
  const [resetOpen, setResetOpen] = useState(false);

  const counts = new Map<ResourceType, number>();
  for (const r of resources) counts.set(r.type, (counts.get(r.type) ?? 0) + 1);

  function handleExport() {
    const blob = new Blob([JSON.stringify(resources, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `french-hub-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result as string) as Resource[];
        if (Array.isArray(imported)) {
          useResourceStore.setState({ resources: imported });
        }
      } catch {
        // Ignore malformed import files.
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  return (
    <div>
      <PageHeader
        icon={Settings}
        title="Admin"
        description="Manage all the content in your French Hub — add, edit and delete resources."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TYPE_ORDER.map((type) => {
          const meta = RESOURCE_META[type];
          const Icon = meta.icon;
          return (
            <Link
              key={type}
              to={`/admin/${type}`}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/30"
            >
              <div
                className={clsx(
                  'flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl',
                  meta.accent === 'bleu'
                    ? 'bg-bleu-50 text-bleu-600 dark:bg-bleu-950 dark:text-bleu-400'
                    : 'bg-rouge-50 text-rouge-600 dark:bg-rouge-950 dark:text-rouge-400',
                )}
              >
                <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-800 dark:text-slate-100">{meta.label}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {counts.get(type) ?? 0} resource{(counts.get(type) ?? 0) === 1 ? '' : 's'}
                </p>
              </div>
              <ChevronRight className="h-4.5 w-4.5 text-slate-300 transition-transform group-hover:translate-x-0.5 dark:text-slate-600" />
            </Link>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-1 font-display text-base font-semibold text-slate-800 dark:text-slate-100">
          Data & backup
        </h2>
        <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
          Everything is stored locally in this browser. Export a backup, or restore one on another device.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" size="sm" icon={<Download className="h-3.5 w-3.5" />} onClick={handleExport}>
            Export backup (JSON)
          </Button>
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
            <Upload className="h-3.5 w-3.5" /> Import backup
            <input type="file" accept="application/json" className="hidden" onChange={handleImport} />
          </label>
          <Button
            variant="danger"
            size="sm"
            icon={<RotateCcw className="h-3.5 w-3.5" />}
            onClick={() => setResetOpen(true)}
          >
            Reset to sample data
          </Button>
        </div>
      </div>

      <Dialog open={resetOpen} onClose={() => setResetOpen(false)} title="Reset all content?">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          This replaces everything with the original sample notes, grammar, vocabulary and verbs. Your worksheets,
          PDFs and any custom resources will be lost. Export a backup first if you want to keep them.
        </p>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="secondary" size="sm" onClick={() => setResetOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              resetToSeed();
              setResetOpen(false);
            }}
          >
            Reset everything
          </Button>
        </div>
      </Dialog>
    </div>
  );
}

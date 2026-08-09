import { AlertTriangle } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  description?: string;
}

export function ErrorState({
  title = 'Something went wrong',
  description = 'Try refreshing the page. If the problem persists, the resource may have been removed.',
}: ErrorStateProps) {
  return (
    <div className="animate-fade-up flex flex-col items-center justify-center rounded-2xl border border-rouge-200 bg-rouge-50 px-6 py-16 text-center dark:border-rouge-900 dark:bg-rouge-950/40">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rouge-100 text-rouge-600 dark:bg-rouge-900 dark:text-rouge-300">
        <AlertTriangle className="h-7 w-7" strokeWidth={1.75} />
      </div>
      <h3 className="text-lg font-semibold text-rouge-800 dark:text-rouge-200">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm text-rouge-600/80 dark:text-rouge-300/80">{description}</p>
    </div>
  );
}

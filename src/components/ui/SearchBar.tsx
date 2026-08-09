import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import clsx from 'clsx';

interface SearchBarProps {
  size?: 'md' | 'lg';
  value?: string;
  onChange?: (q: string) => void;
  navigateOnSubmit?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
}

export function SearchBar({
  size = 'md',
  value,
  onChange,
  navigateOnSubmit = false,
  placeholder = 'Search my French notes…',
  autoFocus,
  className,
}: SearchBarProps) {
  const navigate = useNavigate();
  const [internal, setInternal] = useState('');
  const isControlled = value !== undefined;
  const current = isControlled ? value! : internal;

  function setValue(v: string) {
    if (!isControlled) setInternal(v);
    onChange?.(v);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (navigateOnSubmit && current.trim()) {
      navigate(`/search?q=${encodeURIComponent(current.trim())}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={clsx('relative w-full', className)}>
      <Search
        className={clsx(
          'pointer-events-none absolute top-1/2 -translate-y-1/2 text-slate-400',
          size === 'lg' ? 'left-4.5 h-5 w-5' : 'left-3.5 h-4 w-4',
        )}
      />
      <input
        type="text"
        value={current}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={clsx(
          'w-full rounded-full border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-bleu-400 focus:outline-none focus:ring-4 focus:ring-bleu-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-bleu-900/40',
          size === 'lg' ? 'py-3.5 pl-12 pr-11 text-base shadow-sm' : 'py-2 pl-9 pr-8 text-sm',
        )}
      />
      {current && (
        <button
          type="button"
          onClick={() => setValue('')}
          aria-label="Clear search"
          className={clsx(
            'absolute top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300',
            size === 'lg' ? 'right-4' : 'right-2.5',
          )}
        >
          <X className={size === 'lg' ? 'h-4.5 w-4.5' : 'h-3.5 w-3.5'} />
        </button>
      )}
    </form>
  );
}

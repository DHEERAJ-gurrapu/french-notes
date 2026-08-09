import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

const fieldClasses =
  'w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-bleu-400 focus:outline-none focus:ring-2 focus:ring-bleu-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-bleu-900/50';

interface FieldWrapperProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}

export function FieldWrapper({ label, htmlFor, required, hint, children }: FieldWrapperProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
        {required && <span className="text-rouge-500"> *</span>}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{hint}</p>}
    </div>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string };

export function TextInput({ label, hint, id, required, className, ...rest }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  return (
    <FieldWrapper label={label} htmlFor={inputId} required={required} hint={hint}>
      <input id={inputId} required={required} className={clsx(fieldClasses, className)} {...rest} />
    </FieldWrapper>
  );
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; hint?: string };

export function TextArea({ label, hint, id, required, className, rows = 5, ...rest }: TextareaProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  return (
    <FieldWrapper label={label} htmlFor={inputId} required={required} hint={hint}>
      <textarea
        id={inputId}
        required={required}
        rows={rows}
        className={clsx(fieldClasses, 'resize-y font-mono text-[13px] leading-relaxed', className)}
        {...rest}
      />
    </FieldWrapper>
  );
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & { label: string; hint?: string };

export function Select({ label, hint, id, required, className, children, ...rest }: SelectProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  return (
    <FieldWrapper label={label} htmlFor={inputId} required={required} hint={hint}>
      <select id={inputId} required={required} className={clsx(fieldClasses, className)} {...rest}>
        {children}
      </select>
    </FieldWrapper>
  );
}

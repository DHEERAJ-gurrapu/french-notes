import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-bleu-600 text-white hover:bg-bleu-700 active:bg-bleu-800 shadow-sm shadow-bleu-600/20 dark:bg-bleu-500 dark:hover:bg-bleu-600',
  secondary:
    'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-800',
  ghost:
    'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
  danger:
    'bg-rouge-600 text-white hover:bg-rouge-700 shadow-sm shadow-rouge-600/20 dark:bg-rouge-600 dark:hover:bg-rouge-700',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
};

const base =
  'inline-flex items-center justify-center rounded-xl font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-bleu-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950';

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', icon, className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={clsx(base, variantClasses[variant], sizeClasses[size], className)}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
});

interface LinkButtonProps extends CommonProps {
  to: string;
}

export function LinkButton({ variant = 'primary', size = 'md', icon, className, children, to }: LinkButtonProps) {
  return (
    <Link to={to} className={clsx(base, variantClasses[variant], sizeClasses[size], className)}>
      {icon}
      {children}
    </Link>
  );
}

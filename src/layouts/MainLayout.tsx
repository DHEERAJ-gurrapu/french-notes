import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/layout/Header';

export function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main key={location.pathname} className="animate-fade-up mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
        French Hub — your personal French study companion.
      </footer>
    </div>
  );
}

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, Settings, Search as SearchIcon, Star, Tag as TagIcon } from 'lucide-react';
import clsx from 'clsx';
import { Logo } from './Logo';
import { SearchBar } from '@/components/ui/SearchBar';
import { useDarkMode } from '@/hooks/useDarkMode';
import dheerajProfile from '@/assets/dheeraj-gurrapu-profile.png';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/notes', label: 'Notes' },
  { to: '/worksheets', label: 'Worksheets' },
  { to: '/grammar', label: 'Grammar' },
  { to: '/vocabulary', label: 'Vocabulary' },
  { to: '/verbs', label: 'Verbs' },
  { to: '/pdfs', label: 'PDFs' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { theme, toggleTheme } = useDarkMode();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                clsx(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-bleu-50 text-bleu-700 dark:bg-bleu-950 dark:text-bleu-300'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto hidden max-w-xs flex-1 lg:block">
          <SearchBar size="md" navigateOnSubmit placeholder="Search…" />
        </div>

        <div className="ml-auto flex items-center gap-1 lg:ml-0">
          <button
            type="button"
            onClick={() => setMobileSearchOpen((v) => !v)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Search"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
          <NavLink
            to="/tags"
            className={({ isActive }) =>
              clsx(
                'hidden rounded-lg p-2 sm:block',
                isActive
                  ? 'bg-bleu-50 text-bleu-700 dark:bg-bleu-950 dark:text-bleu-300'
                  : 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800',
              )
            }
            aria-label="Tags"
          >
            <TagIcon className="h-5 w-5" />
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              clsx(
                'rounded-lg p-2',
                isActive
                  ? 'bg-bleu-50 text-bleu-700 dark:bg-bleu-950 dark:text-bleu-300'
                  : 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800',
              )
            }
            aria-label="Favorites"
          >
            <Star className="h-5 w-5" />
          </NavLink>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              clsx(
                'hidden rounded-lg p-2 sm:block',
                isActive
                  ? 'bg-bleu-50 text-bleu-700 dark:bg-bleu-950 dark:text-bleu-300'
                  : 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800',
              )
            }
            aria-label="Admin"
          >
            <Settings className="h-5 w-5" />
          </NavLink>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="ml-1 hidden items-center gap-2 border-l border-slate-200 pl-3 sm:flex dark:border-slate-800">
            <img
              src={dheerajProfile}
              alt="Dheeraj Gurrapu"
              className="h-8 w-8 rounded-full border-2 border-white object-cover object-[center_28%] shadow-sm ring-1 ring-bleu-200 dark:border-slate-900 dark:ring-bleu-800"
            />
            <div className="leading-tight">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">Student</p>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Dheeraj Gurrapu</p>
            </div>
          </div>
        </div>
      </div>

      {mobileSearchOpen && (
        <div className="animate-fade-up border-t border-slate-100 px-4 py-3 dark:border-slate-800 lg:hidden">
          <SearchBar size="md" navigateOnSubmit autoFocus />
        </div>
      )}

      {mobileOpen && (
        <nav className="animate-fade-up border-t border-slate-100 px-4 py-3 dark:border-slate-800 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    'rounded-lg px-3 py-2.5 text-sm font-medium',
                    isActive
                      ? 'bg-bleu-50 text-bleu-700 dark:bg-bleu-950 dark:text-bleu-300'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/favorites"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                clsx(
                  'rounded-lg px-3 py-2.5 text-sm font-medium',
                  isActive
                    ? 'bg-bleu-50 text-bleu-700 dark:bg-bleu-950 dark:text-bleu-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
                )
              }
            >
              Favorites
            </NavLink>
            <NavLink
              to="/tags"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                clsx(
                  'rounded-lg px-3 py-2.5 text-sm font-medium',
                  isActive
                    ? 'bg-bleu-50 text-bleu-700 dark:bg-bleu-950 dark:text-bleu-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
                )
              }
            >
              Tags
            </NavLink>
            <NavLink
              to="/admin"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                clsx(
                  'rounded-lg px-3 py-2.5 text-sm font-medium',
                  isActive
                    ? 'bg-bleu-50 text-bleu-700 dark:bg-bleu-950 dark:text-bleu-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
                )
              }
            >
              Admin
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}

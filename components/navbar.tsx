'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, CalendarHeart } from 'lucide-react';
import { navItems } from '@/lib/data';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isHome = pathname === '/';
  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          isTransparent
            ? 'bg-transparent py-5'
            : 'bg-background/95 py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur-xl'
        )}
      >
        {/* Thin gold top line on scroll */}
        <motion.span
          className={cn(
            'absolute inset-x-0 top-0 h-px origin-center transition-opacity duration-500',
            isTransparent ? 'opacity-0' : 'opacity-100'
          )}
          style={{
            background:
              'linear-gradient(to right, transparent, hsl(var(--accent)/0.5), transparent)',
          }}
          aria-hidden="true"
        />
        <nav className="container-mw flex items-center justify-between px-5 sm:px-8 md:px-12 lg:px-16">
          <Link href="/" aria-label="Shah Ghouse — home" className="shrink-0">
            <Logo light={isTransparent} />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1.5 lg:flex">
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'group relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      isTransparent
                        ? 'text-white/85 hover:text-white'
                        : 'text-foreground/75 hover:text-primary',
                      active && (isTransparent ? 'text-white' : 'text-primary')
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        'absolute inset-x-4 -bottom-0.5 h-px origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100',
                        active && 'scale-x-100',
                        isTransparent ? 'bg-accent' : 'bg-primary'
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Link
              href="/reservation"
              className="btn-sweep inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-wider text-primary-foreground shadow-[0_10px_30px_-12px_hsl(var(--primary)/0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_hsl(var(--primary)/0.6)]"
            >
              <CalendarHeart className="h-4 w-4" />
              Reserve Table
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className={cn(
              'grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden',
              isTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-foreground hover:bg-muted'
            )}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 32 }}
              className="absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-background p-7 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="grid h-11 w-11 place-items-center rounded-full bg-muted text-foreground transition-colors hover:bg-muted/70"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-3 flex items-center gap-3" aria-hidden="true">
                <span className="h-px flex-1 bg-accent/20" />
                <span className="h-1.5 w-1.5 rotate-45 bg-accent/50" />
                <span className="h-px flex-1 bg-accent/20" />
              </div>

              <ul className="mt-6 flex flex-col gap-1">
                {navItems.map((item, i) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== '/' && pathname.startsWith(item.href));
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        className={cn(
                          'flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors',
                          active
                            ? 'bg-primary/8 text-primary'
                            : 'text-foreground/80 hover:bg-muted'
                        )}
                      >
                        {item.label}
                        <span
                          className={cn(
                            'h-1.5 w-1.5 rotate-45 transition-opacity',
                            active ? 'bg-accent opacity-100' : 'bg-accent/30 opacity-0'
                          )}
                          aria-hidden="true"
                        />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <Link
                href="/reservation"
                className="btn-sweep mt-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-4 text-base font-semibold uppercase tracking-wider text-primary-foreground shadow-lg"
              >
                <CalendarHeart className="h-5 w-5" />
                Reserve a Table
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

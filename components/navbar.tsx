'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Menu',
    href: '/menu',
    dropdown: [
      { label: 'All Menu', href: '/menu' },
      { label: 'Starters', href: '/menu#starters' },
      { label: 'Mains', href: '/menu#mains' },
      { label: 'Desserts & Drinks', href: '/menu#desserts' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function TransparentNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 via-black/30 to-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white">
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-bold tracking-wider uppercase text-white hover:opacity-90">
          Maria Havens
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            if (link.dropdown) {
              return (
                <div key={link.label} className="relative group py-2">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 transition-colors ${
                      isActive ? 'text-amber-400 font-semibold' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span className="text-[10px] transition-transform group-hover:rotate-180">▼</span>
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full hidden group-hover:block w-48 pt-2">
                    <div className="rounded-lg bg-zinc-900/95 p-2 shadow-xl backdrop-blur-md border border-white/10">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block rounded-md px-3 py-2 text-sm text-stone-200 hover:bg-white/10 hover:text-amber-400 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive ? 'text-amber-400 font-semibold' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-md border-b border-white/10 px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-white hover:text-amber-400 py-1"
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="pl-4 space-y-1 mt-1 border-l border-white/20">
                  {link.dropdown.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-stone-300 hover:text-amber-400 py-1"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
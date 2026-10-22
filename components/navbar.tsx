'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const navItems = [
  { name: 'Jobs', href: '/jobs' },
  { name: 'Freelancers', href: '/freelancers' },
  { name: 'Employers', href: '/employers' },
  { name: 'Pricing', href: '/pricing' },
];

export function Navbar() {
  const { data: session, status } = useSession();

  return (
    <header className="border-b border-slate-200 bg-[#0B1D3A] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-2xl font-black tracking-tight">
          WorkHub <span className="text-blue-300">PH</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {status === 'authenticated' ? (
            <>
              <Link href="/dashboard" className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
                Dashboard
              </Link>
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: '/' })}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-slate-200 transition hover:text-white">
                Sign in
              </Link>
              <Link href="/register" className="rounded-full bg-[#1455D0] px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600">
                Join now
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

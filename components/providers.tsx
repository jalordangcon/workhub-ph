import type { ReactNode } from 'react';
'use client';

import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

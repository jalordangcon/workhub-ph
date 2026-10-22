import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
  title: 'WorkHub PH | International Job Marketplace',
  description:
    'WorkHub PH helps job seekers, employers, freelancers, clients, and recruitment agencies connect globally.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

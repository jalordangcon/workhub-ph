import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== 'SUPER_ADMIN') {
    redirect('/login');
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1455D0]">Admin</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Super Admin Control Center</h1>
        <p className="mt-3 text-slate-600">User management, moderation, verification, scam reporting, and platform analytics are managed here.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-100 p-5">
            <div className="text-sm text-slate-500">Verified employers</div>
            <div className="mt-2 text-3xl font-bold text-slate-900">2,184</div>
          </div>
          <div className="rounded-2xl bg-slate-100 p-5">
            <div className="text-sm text-slate-500">Open cases</div>
            <div className="mt-2 text-3xl font-bold text-slate-900">54</div>
          </div>
          <div className="rounded-2xl bg-slate-100 p-5">
            <div className="text-sm text-slate-500">Platform revenue</div>
            <div className="mt-2 text-3xl font-bold text-slate-900">$128k</div>
          </div>
        </div>
      </div>
    </div>
  );
}

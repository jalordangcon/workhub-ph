import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1455D0]">Dashboard</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Welcome, {session.user?.name ?? 'there'}.</h1>
        <p className="mt-3 text-slate-600">
          Your role: <span className="font-semibold text-slate-900">{session.user?.role ?? 'JOB_SEEKER'}</span>
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-100 p-5">
            <div className="text-sm text-slate-500">Saved jobs</div>
            <div className="mt-2 text-3xl font-bold text-slate-900">18</div>
          </div>
          <div className="rounded-2xl bg-slate-100 p-5">
            <div className="text-sm text-slate-500">Applications</div>
            <div className="mt-2 text-3xl font-bold text-slate-900">7</div>
          </div>
          <div className="rounded-2xl bg-slate-100 p-5">
            <div className="text-sm text-slate-500">Messages</div>
            <div className="mt-2 text-3xl font-bold text-slate-900">12</div>
          </div>
        </div>
      </div>
    </div>
  );
}

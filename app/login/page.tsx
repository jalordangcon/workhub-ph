import { AuthForm } from '@/components/auth/auth-form';

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-16 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1455D0]">Welcome back</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Log in to WorkHub PH</h1>
        <p className="mt-2 text-slate-600">Access your dashboard, saved jobs, messaging, and employer tools.</p>
        <div className="mt-8">
          <AuthForm mode="login" />
        </div>
      </div>
    </div>
  );
}

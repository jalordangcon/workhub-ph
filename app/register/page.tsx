import { AuthForm } from '@/components/auth/auth-form';

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-16 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1455D0]">Create account</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Join WorkHub PH</h1>
        <p className="mt-2 text-slate-600">Build your professional profile and start connecting with opportunities worldwide.</p>
        <div className="mt-8">
          <AuthForm mode="register" />
        </div>
      </div>
    </div>
  );
}

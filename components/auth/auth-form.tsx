'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const roleOptions = [
  'JOB_SEEKER',
  'EMPLOYER',
  'FREELANCER',
  'CLIENT',
  'RECRUITMENT_AGENCY',
] as const;

export function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'JOB_SEEKER',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (mode === 'register') {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error ?? 'Registration failed.');
        }

        const signInResult = await signIn('credentials', {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        if (signInResult?.error) {
          throw new Error('Unable to sign in after registration.');
        }

        router.push('/dashboard');
        return;
      }

      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error('Invalid email or password.');
      }

      router.push('/dashboard');
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {mode === 'register' && (
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Full name
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#1455D0] focus:ring-2 focus:ring-blue-200"
            placeholder="Jane Doe"
          />
        </div>
      )}

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#1455D0] focus:ring-2 focus:ring-blue-200"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          minLength={8}
          value={formData.password}
          onChange={(event) => setFormData((current) => ({ ...current, password: event.target.value }))}
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#1455D0] focus:ring-2 focus:ring-blue-200"
          placeholder="Minimum 8 characters"
        />
      </div>

      {mode === 'register' && (
        <div>
          <label htmlFor="role" className="mb-2 block text-sm font-medium text-slate-700">
            Account role
          </label>
          <select
            id="role"
            value={formData.role}
            onChange={(event) => setFormData((current) => ({ ...current, role: event.target.value as (typeof roleOptions)[number] }))}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#1455D0] focus:ring-2 focus:ring-blue-200"
          >
            {roleOptions.map((role) => (
              <option key={role} value={role}>
                {role.replace('_', ' ')}
              </option>
            ))}
          </select>
        </div>
      )}

      {error && <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#1455D0] px-4 py-3 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? 'Please wait...' : mode === 'login' ? 'Log in' : 'Create account'}
      </button>
    </form>
  );
}

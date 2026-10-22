import Link from 'next/link';

const stats = [
  { label: 'Active employers', value: '12k+' },
  { label: 'Jobs posted', value: '28k+' },
  { label: 'Recruitment partners', value: '850+' },
  { label: 'Global applications', value: '110k+' },
];

const jobs = [
  {
    title: 'Senior Product Designer',
    company: 'Northstar Labs',
    location: 'Remote · Philippines',
    type: 'Full-time',
    salary: '$2,400 - $3,200 / mo',
  },
  {
    title: 'Full Stack Developer',
    company: 'Apex Digital',
    location: 'Hybrid · Manila',
    type: 'Remote-friendly',
    salary: '$1,800 - $2,600 / mo',
  },
  {
    title: 'Customer Success Manager',
    company: 'P-Work PH',
    location: 'Remote · Global',
    type: 'Contract',
    salary: '$1,500 - $2,200 / mo',
  },
];

const features = [
  'Global job search with country and remote filters',
  'Employer management and candidate pipelines',
  'Freelancer profiles, portfolios, and service listings',
  'Verified agency and company onboarding tools',
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-[#0B1D3A] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-blue-100">
              Built for global hiring and remote work
            </div>

            <h1 className="max-w-xl text-4xl font-bold tracking-tight md:text-6xl">
              Find opportunities. Hire talent. Grow globally.
            </h1>

            <p className="mt-6 max-w-lg text-lg text-slate-300">
              WorkHub PH connects job seekers, employers, freelancers, clients, and recruitment agencies in one secure and professional platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="rounded-full bg-[#1455D0] px-6 py-3 font-medium text-white transition hover:bg-blue-600"
              >
                Join as a professional
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-white/30 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Sign in
              </Link>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-2 text-xs text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/35 p-6 shadow-soft">
            <div className="rounded-2xl bg-white p-5 text-slate-900 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Live pipeline</p>
                  <h2 className="mt-2 text-2xl font-bold">Hiring dashboard</h2>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">+28%</span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Open roles</span>
                    <span className="font-semibold text-slate-700">184</span>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-[78%] rounded-full bg-[#1455D0]" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm text-slate-500">Qualified applicants</div>
                    <div className="mt-2 text-3xl font-bold text-slate-800">3,246</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-sm text-slate-500">Interview scheduled</div>
                    <div className="mt-2 text-3xl font-bold text-slate-800">487</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1455D0]">Featured roles</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Top opportunities</h2>
          </div>
          <Link href="/register" className="text-sm font-semibold text-[#1455D0] hover:text-blue-700">
            Explore all jobs →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {jobs.map((job) => (
            <article key={job.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-[#EAF2FF] text-lg font-bold text-[#1455D0] flex items-center justify-center">
                  {job.company.slice(0, 1)}
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{job.type}</span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-800">{job.title}</h3>
              <p className="mt-1 text-sm font-medium text-slate-600">{job.company}</p>
              <p className="mt-4 text-sm text-slate-500">{job.location}</p>
              <div className="mt-6 border-t border-slate-200 pt-4 text-sm font-semibold text-[#1455D0]">{job.salary}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1455D0]">Platform advantages</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Built for every role in the talent economy</h2>
            <div className="mt-6 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <span className="mt-1 rounded-full bg-green-100 p-1 text-green-700">✓</span>
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#0B1D3A] p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Why teams choose us</p>
            <div className="mt-8 space-y-6">
              <div>
                <div className="text-3xl font-bold">98.4%</div>
                <div className="mt-1 text-slate-300">Candidate response rate across verified employer accounts</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="mt-1 text-slate-300">Platform visibility with self-serve job management and alerts</div>
              </div>
              <div>
                <div className="text-3xl font-bold">Global</div>
                <div className="mt-1 text-slate-300">Designed for cross-border hiring, remote work, and agencies</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

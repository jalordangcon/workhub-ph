const jobCards = [
  { title: 'Senior Product Designer', location: 'Remote • Philippines', type: 'Full-time', salary: '$2,400 - $3,200 / mo' },
  { title: 'Full Stack Developer', location: 'Hybrid • Manila', type: 'Remote-friendly', salary: '$1,800 - $2,600 / mo' },
  { title: 'Customer Success Manager', location: 'Remote • Global', type: 'Contract', salary: '$1,500 - $2,200 / mo' },
];

export default function JobsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1455D0]">Jobs</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Explore global opportunities</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {jobCards.map((job) => (
          <article key={job.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{job.type}</span>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{job.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{job.location}</p>
            <div className="mt-6 border-t border-slate-200 pt-4 text-sm font-semibold text-[#1455D0]">{job.salary}</div>
          </article>
        ))}
      </div>
    </div>
  );
}

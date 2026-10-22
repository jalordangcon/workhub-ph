const employers = [
  { name: 'Northstar Labs', type: 'Software & Product', hires: '1,200 hires' },
  { name: 'Apex Digital', type: 'Marketing & Ops', hires: '870 hires' },
  { name: 'P-Work PH', type: 'Recruitment & Staffing', hires: '2,400 hires' },
];

export default function EmployersPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1455D0]">Employers</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Support teams that scale with confidence</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {employers.map((company) => (
          <article key={company.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="h-12 w-12 rounded-2xl bg-slate-100 text-lg font-bold text-slate-700 flex items-center justify-center">{company.name.slice(0, 1)}</div>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{company.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{company.type}</p>
            <div className="mt-6 text-sm font-semibold text-[#1455D0]">{company.hires}</div>
          </article>
        ))}
      </div>
    </div>
  );
}

const freelancers = [
  { name: 'Maria Santos', specialty: 'UI/UX Designer', rate: '$35/hr' },
  { name: 'Alden Ramos', specialty: 'Full Stack Engineer', rate: '$45/hr' },
  { name: 'Nina Reyes', specialty: 'Content Strategist', rate: '$28/hr' },
];

export default function FreelancersPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1455D0]">Freelancers</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Hire vetted experts worldwide</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {freelancers.map((person) => (
          <article key={person.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF2FF] text-xl font-bold text-[#1455D0]">
              {person.name.charAt(0)}
            </div>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{person.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{person.specialty}</p>
            <div className="mt-6 text-sm font-semibold text-[#1455D0]">{person.rate}</div>
          </article>
        ))}
      </div>
    </div>
  );
}

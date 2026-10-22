const tiers = [
  { name: 'Starter', price: '$29', features: ['2 job postings', 'Basic candidate filters', 'Email support'] },
  { name: 'Growth', price: '$79', features: ['Unlimited job posts', 'Advanced analytics', 'Priority support'], featured: true },
  { name: 'Enterprise', price: '$149', features: ['Custom hiring workflows', 'Dedicated success manager', 'API access'] },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1455D0]">Pricing</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Simple plans built for hiring and service growth</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <article key={tier.name} className={`rounded-3xl border p-6 shadow-soft ${tier.featured ? 'border-[#1455D0] bg-[#0B1D3A] text-white' : 'border-slate-200 bg-white text-slate-900'}`}>
            <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${tier.featured ? 'text-blue-200' : 'text-[#1455D0]'}`}>{tier.name}</p>
            <div className="mt-6 text-4xl font-bold">{tier.price}<span className="text-lg font-medium">/mo</span></div>
            <ul className={`mt-6 space-y-3 text-sm ${tier.featured ? 'text-slate-200' : 'text-slate-600'}`}>
              {tier.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

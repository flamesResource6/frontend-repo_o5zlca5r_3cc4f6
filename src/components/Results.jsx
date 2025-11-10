const results = [
  { metric: '+3.1x', label: 'Paid ROAS' },
  { metric: '+68%', label: 'Sales pipeline QoQ' },
  { metric: '-34%', label: 'CAC reduction' },
  { metric: '+42%', label: 'Demo conversions' },
]

export default function Results() {
  return (
    <section id="results" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Proof, not promises</h2>
          <p className="mt-2 text-gray-600">Outcome-focused work with clear baselines and afters. Attribution available on request.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map(r => (
            <div key={r.label} className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 text-center">
              <div className="text-3xl font-extrabold text-gray-900">{r.metric}</div>
              <div className="mt-1 text-sm text-gray-600">{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

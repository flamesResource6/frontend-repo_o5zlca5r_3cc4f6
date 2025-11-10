import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Fintech SaaS Launch',
    results: '+42% demo conversions',
    tags: ['Positioning', 'Website copy', 'Paid social'],
    summary: 'Reframed value prop, built a messaging map, and shipped a conversion-focused site with a paid engine.'
  },
  {
    title: 'D2C Beauty Scaling',
    results: '3.1x ROAS in 60 days',
    tags: ['UGC', 'Creator collabs', 'Lifecycle'],
    summary: 'Structured content pillars, seeded creators, and matured email/sms flows synced to promos.'
  },
  {
    title: 'B2B DevTools Narrative',
    results: '+68% pipeline QoQ',
    tags: ['Narrative design', 'Content strategy', 'LinkedIn program'],
    summary: 'Unified story across blog, webinars, and sales collateral; turned SMEs into consistent voices.'
  }
]

export default function Work() {
  return (
    <section id="work" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected work</h2>
          <p className="mt-2 text-gray-600">A snapshot of projects I can talk about—more on request.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-100 via-fuchsia-100 to-emerald-100" />
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <span className="text-xs rounded-full bg-gray-900 text-white px-2 py-1">{p.results}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs rounded-full bg-gray-100 px-2 py-1 text-gray-700">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

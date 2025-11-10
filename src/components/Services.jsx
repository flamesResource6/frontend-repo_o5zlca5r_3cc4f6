import { Megaphone, PenSquare, Share2, BarChart3, Sparkles } from 'lucide-react'

const services = [
  {
    icon: PenSquare,
    title: 'Copy & Messaging',
    desc: 'Website, ads, email, and long-form content that turns browsers into buyers.'
  },
  {
    icon: Share2,
    title: 'Socials & Community',
    desc: 'Channel strategy, content systems, and creator collabs for consistent growth.'
  },
  {
    icon: Megaphone,
    title: 'Go-to-Market Strategy',
    desc: 'Positioning, narrative, and launch plans that align revenue with brand.'
  },
  {
    icon: BarChart3,
    title: 'Performance & Ops',
    desc: 'Funnels, dashboards, and experiments that compound results.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            <Sparkles size={14} /> What I do
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">End-to-end marketing, built for outcomes</h2>
          <p className="mt-2 text-gray-600">Three years across startup teams and agency pods—comfortable owning the plan or plugging into yours.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-gray-200 p-6 transition hover:shadow-lg">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

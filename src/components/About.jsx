export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">A marketer who ships</h2>
          <p className="mt-4 text-gray-700">I cut my teeth in fast-moving teams where strategy and execution are the same day. I can write the page, build the funnel, brief the creative, and report the impact.</p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• 3 years across SaaS and D2C</li>
            <li>• Comfortable with paid, lifecycle, and content</li>
            <li>• Strong collaboration with product and sales</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900">Stacks I use</h3>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-gray-700">
            <span className="rounded-lg bg-gray-50 px-3 py-2">GA4 • Looker • Mixpanel</span>
            <span className="rounded-lg bg-gray-50 px-3 py-2">Meta • TikTok • LinkedIn</span>
            <span className="rounded-lg bg-gray-50 px-3 py-2">HubSpot • Klaviyo • Braze</span>
            <span className="rounded-lg bg-gray-50 px-3 py-2">Webflow • Figma • Notion</span>
          </div>
        </div>
      </div>
    </section>
  )
}

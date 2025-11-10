import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to freelance & full-time
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Marketing that blends copy, socials, strategy & performance.
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              I help brands grow with conversion-first storytelling, channel systems that scale, and measurable impact across the funnel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition">Let's work together</a>
              <a href="#work" className="rounded-full bg-white/80 backdrop-blur text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-white transition">
                See recent work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
    </section>
  );
}

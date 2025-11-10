import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message')
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! I will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Tell me about your goal</h2>
          <p className="mt-2 text-gray-600">A quick brief helps me recommend the right next step—audit, roadmap, or execution.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 max-w-2xl">
          <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <input name="email" required type="email" placeholder="Email" className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <textarea name="message" required rows="5" placeholder="Project details, timeline, budget" className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <button className="rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition w-fit">Send message</button>
          {status && <p className="text-sm text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}

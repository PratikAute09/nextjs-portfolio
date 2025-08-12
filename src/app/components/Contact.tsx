'use client'
import React, { useState } from 'react'

export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold">Contact</h2>

      <div className="mt-6 max-w-xl">
        {!sent ? (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              // integrate EmailJS or your API here
              setSent(true)
            }}
            className="grid gap-4"
          >
            <input required placeholder="Your name" className="p-3 rounded border" />
            <input required type="email" placeholder="Email" className="p-3 rounded border" />
            <textarea required placeholder="Message" className="p-3 rounded border h-32" />
            <button className="px-4 py-2 bg-primary text-white rounded">Send Message</button>
          </form>
        ) : (
          <div className="p-6 rounded-lg bg-emerald-50 text-emerald-800">Thanks! Your message has been sent.</div>
        )}
      </div>
    </section>
  )
}
// app/contact/page.tsx
"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("✅ Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-blue-500"
           style={{
             boxShadow: "0 0 20px rgba(0, 183, 255, 0.6)"
           }}>
        
        {/* Header */}
        <div className="text-center mb-6">
          <span role="img" aria-label="mailbox" className="text-4xl">📬</span>
          <h2 className="text-2xl font-bold text-cyan-400 mt-2">Contact Me</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full p-3 bg-transparent border-b-2 border-cyan-500 outline-none focus:border-cyan-300"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full p-3 bg-transparent border-b-2 border-cyan-500 outline-none focus:border-cyan-300"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message..."
            rows={3}
            className="w-full p-3 bg-transparent border-b-2 border-cyan-500 outline-none focus:border-cyan-300"
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 text-black font-semibold py-3 rounded-lg hover:bg-cyan-400 transition"
            style={{
              boxShadow: "0 0 10px rgba(0, 183, 255, 0.8)"
            }}
          >
            ✈ Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

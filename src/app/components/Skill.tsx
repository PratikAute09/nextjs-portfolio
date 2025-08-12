'use client'
import React from 'react'

export default function Skill() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'C',
    'C++',
    'Java',
    'Python',
    'Vercel',
  ]

  return (
    <section className="min-h-screen py-12 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">
          My Skills
        </h1>

        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 text-center border rounded-lg shadow-sm 
                         border-slate-200 dark:border-slate-800 
                         bg-slate-50 dark:bg-slate-800 
                         text-slate-800 dark:text-slate-200 
                         hover:shadow-md hover:scale-105 transition-transform"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

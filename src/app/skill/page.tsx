'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Hosting' | 'Database' | 'Auth' | 'Other';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  percent: number;
  icon?: string;
};

const ALL_SKILLS: Skill[] = [
  { name: 'HTML', category: 'Frontend', level: 'Expert', percent: 95, icon: '🌐' },
  { name: 'CSS', category: 'Frontend', level: 'Expert', percent: 94, icon: '🎨' },
  { name: 'JavaScript', category: 'Frontend', level: 'Expert', percent: 95, icon: '✨' },
  { name: 'TypeScript', category: 'Frontend', level: 'Advanced', percent: 88, icon: '🔷' },
  { name: 'React', category: 'Frontend', level: 'Expert', percent: 93, icon: '⚛️' },
  { name: 'Next.js', category: 'Frontend', level: 'Advanced', percent: 90, icon: '➡️' },
  { name: 'Redux', category: 'Frontend', level: 'Intermediate', percent: 78, icon: '🔁' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Advanced', percent: 91, icon: '💨' },
  { name: 'Bootstrap', category: 'Frontend', level: 'Intermediate', percent: 80, icon: '🅱️' },
  { name: 'Node.js', category: 'Backend', level: 'Advanced', percent: 87, icon: '🟢' },
  { name: 'Express.js', category: 'Backend', level: 'Advanced', percent: 85, icon: '🚂' },
  { name: 'MongoDB', category: 'Database', level: 'Intermediate', percent: 75, icon: '🍃' },
  { name: 'Sql', category: 'Database', level: 'Intermediate', percent: 72, icon: '📊' },
  { name: 'JWT', category: 'Auth', level: 'Intermediate', percent: 70, icon: '🔐' },
  { name: 'Git', category: 'Tools', level: 'Advanced', percent: 88, icon: '📁' },
  { name: 'Postman', category: 'Tools', level: 'Intermediate', percent: 74, icon: '📬' },
  { name: 'Vercel', category: 'Hosting', level: 'Intermediate', percent: 80, icon: '⚡' },
  { name: 'Netlify', category: 'Hosting', level: 'Intermediate', percent: 78, icon: '🛰️' },
  { name: 'Render', category: 'Hosting', level: 'Beginner', percent: 60, icon: '🛠️' },
];

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Database', 'Auth', 'Tools', 'Hosting'] as const;

export default function SkillsPage() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All');
  const [query, setQuery] = useState('');

  const filtered = ALL_SKILLS.filter((s) => {
    if (active !== 'All' && s.category !== active) return false;
    if (query && !s.name.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            Skills & Tools
          </motion.h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
            Technologies I use to build modern, production-ready web applications — with levels and quick
            progress indicators.
          </p>
        </header>

        {/* controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-shadow focus:outline-none shadow-sm
                  ${active === cat ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search skills..."
              className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-400 outline-none text-sm"
            />
          </div>
        </div>

        {/* grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((skill, idx) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{skill.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">{skill.level}</span>
                  </div>

                  <div className="mt-3">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percent}%` }}
                        transition={{ duration: 0.9 }}
                        className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                    <div className="mt-2 text-xs text-gray-500 dark:text-gray-300 flex items-center justify-between">
                      <span>{skill.percent}%</span>
                      <span className="italic">{skill.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">No skills match your search.</div>
          )}
        </div>

        {/* footer note */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8">Built with Next.js, Tailwind CSS & Framer Motion.</p>
      </div>
    </section>
  );
}

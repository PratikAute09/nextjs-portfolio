'use client'
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 mt-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  )
}
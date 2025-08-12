'use client'
import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Full Stack Developer - Yoga Management System (2023-24)',
    description:
      'Designed and implemented a comprehensive Yoga Management System using the MERN stack (MongoDB, Express.js, React, Node.js). This system streamlines operations for yoga studios, offering a user-friendly interface and robust backend functionalities. Key features include user authentication, class scheduling, membership management, and real-time notifications.',
    
  },
  {
    id: 2,
    title: 'User Authentication System (2022-23)',
    description:
      'React-based web application managing user login and registration. Includes form validation, password constraints, and toggling between login and signup forms. Ensures secure data handling and a user-friendly interface.',
  
  },
  {
    id: 3,
    title: 'Bus Management System (2019-22)',
    description:
      'Spring Boot and JSP-based application for managing bus service operations. Features include schedule management, routes, ticket bookings, account management, route tracking, and fare calculation.',
   
  },
]
export const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.id} className="p-6 rounded-lg border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
            <h3 className="font-medium">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
            <div className="mt-4">
              <a className="text-primary underline" href="#">Live</a> · <a className="text-primary underline" href="#">Code</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
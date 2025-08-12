"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Full Stack Developer - Yoga Management System",
    year: "2023-24",
    description:
      "A comprehensive Yoga Management System built with the MERN stack to streamline operations for yoga studios, offering user authentication, class scheduling, membership management, and real-time notifications.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "User Authentication System",
    year: "2022-23",
    description:
      "A React-based authentication system with secure login and registration, form validation, password constraints, and toggle between login/signup forms.",
    tech: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Bus Management System",
    year: "2019-22",
    description:
      "A Spring Boot & JSP-based web app for managing bus schedules, routes, bookings, and accounts with features like fare calculation, bus tracking, and route management.",
    tech: ["Spring Boot", "JSP", "MySQL"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black px-6 py-16 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-4"
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg mb-12 text-gray-600 dark:text-gray-300"
        >
          Here’s a selection of my recent work showcasing my expertise in full-stack development and modern web technologies.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col"
            >
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {project.year}
              </span>
              <p className="text-gray-700 dark:text-gray-300 flex-grow mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

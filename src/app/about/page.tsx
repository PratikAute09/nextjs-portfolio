"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100 px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold mb-6">About Me</h1>
          <p className="mb-4 leading-relaxed">
            My name is <span className="font-semibold">Pratik Aute</span>, a
            passionate Full-Stack Developer based in Pune with over 1 year of
            hands-on experience in{" "}
            <span className="text-indigo-500 font-medium">
              modern web technologies
            </span>
            .
          </p>
          <p className="mb-4 leading-relaxed">
            I thrive on building impactful digital solutions that help
            businesses strengthen their online presence. My expertise spans
            across frontend and backend development, ensuring seamless user
            experiences and robust architectures.
          </p>
          <p className="leading-relaxed">
            With an entrepreneurial mindset, I stay adaptable, goal-oriented,
            and constantly upgrade my skills to deliver{" "}
            <span className="text-purple-500 font-medium">
              cutting-edge solutions
            </span>
            .
          </p>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
          <ul className="space-y-3 list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>
              1+ year as a MERN-stack developer, working on scalable,
              responsive, and secure applications.
            </li>
            <li>
              Built dynamic UI using React.js, Next.js, Tailwind CSS, and
              component-driven architecture.
            </li>
            <li>
              Developed RESTful APIs with Node.js & Express, integrated MongoDB
              with Mongoose, and implemented JWT authentication.
            </li>
            <li>
              Managed state with Redux, Context API, and React Hooks for smooth
              data flow.
            </li>
            <li>
              Used Git, Postman, Vercel, Netlify, and Render for version
              control, testing, and deployment.
            </li>
            <li>
              Collaborated in Agile teams, conducted code reviews, and followed
              best practices.
            </li>
          </ul>
        </motion.div>

        {/* Companies */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-2">Companies Worked At</h2>
          <p>
            <span className="font-semibold">
              Tech Kirtika Technology Pvt Ltd, Pune
            </span>{" "}
            – Full-Stack Developer
          </p>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            July 2024 – Aug 2025
          </span>
        </motion.div>

        {/* Work Policy */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Work Policy</h2>
          <p className="leading-relaxed">
            I dedicate most of my time to learning, building, and improving my
            skills. My philosophy revolves around{" "}
            <span className="text-indigo-500 font-medium">
              continuous improvement
            </span>{" "}
            and staying ahead with the latest technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50 dark:bg-gray-900">
      {/* Intro */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-2 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, It&apos;s Me
      </motion.h1>

      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Pratik Aute
      </motion.h2>

      <motion.h3
        className="text-lg md:text-xl font-medium mb-6 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Full-Stack Developer
      </motion.h3>

      {/* Description */}
      <motion.p
        className="max-w-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        I am a Full-Stack Developer specializing in building modern, high-performance
        web applications using the <span className="font-semibold">MERN stack</span> 
        (MongoDB, Express.js, React.js, Node.js). I’m passionate about writing clean,
        maintainable code and developing responsive, user-centric interfaces that
        ensure a seamless and engaging user experience.
      </motion.p>

      {/* Download CV Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link
          href="/Pratik_Aute_CV.pdf"
          target="_blank"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Download CV
        </Link>
      </motion.div>
    </section>
  );
}

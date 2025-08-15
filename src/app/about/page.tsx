"use client";
import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
          About Me
        </h1>

        {/* Divider */}
        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>

        {/* Profile Image 
        <div className="flex justify-center mb-8">
          <img
            src="/profile.jpg" // Replace with your image path
            alt="Pratik Aute"
            className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-cyan-400"
          />
        </div>  */}

        {/* Intro */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
          I’m <span className="text-cyan-400 font-semibold">Pratik Aute</span> from Pune.  
          I have completed my Master&apos;s in Computer Science in 2024.  
          I’m passionate about <span className="font-semibold text-cyan-300">communication</span> and  
          <span className="font-semibold text-cyan-300"> problem-solving</span>.  
          I enjoy interacting with people, understanding their needs, and finding  
          solutions quickly. I’m looking forward to starting my career in the  
          software industry because it allows me to use my communication skills  
          and work in a dynamic environment.
        </p>

        {/* Skills Section */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["Communication", "Problem Solving", "Teamwork", "Adaptability"].map(
            (skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-700 rounded-full text-sm md:text-base shadow-md border border-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

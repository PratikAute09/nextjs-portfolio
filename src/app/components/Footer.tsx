"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 border-t border-slate-700 mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center items-center text-center">
        
        {/* Copyright */}
        <div className="text-center font-medium">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-500 font-semibold">Pratik Aute</span>. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

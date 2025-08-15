"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skill" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-black z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-cyan-400 flex flex-col leading-tight">
          <span>
            <span className="text-[#09F]">&lt;/&gt;</span> Pratik Aute
          </span>
          <span className="text-xs text-purple-300">MERN-Stack Developer</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-medium hover:text-cyan-400 transition 
                ${pathname === link.href ? "text-cyan-400" : "text-white"}`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0D0D1A] px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block font-medium hover:text-cyan-400 transition 
                ${pathname === link.href ? "text-cyan-400" : "text-white"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

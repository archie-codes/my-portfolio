"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center py-4 text-white">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/pictures/my-logo.png" // 👈 replace with your actual logo path in /public
            alt="My Logo"
            width={120}
            height={120}
            className="rounded-full"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6">
          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-400 transition">
            Blog
          </Link>
          <Link href="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-md text-white px-6 py-4 space-y-4">
          <Link
            href="/about"
            className="block hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

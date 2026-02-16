"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-background/70 backdrop-blur-xl border-b border-white/10 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 text-foreground">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-primary/20 group-hover:border-primary/50 transition-colors">
            <Image
              src="/pictures/A-logo.png"
              alt="ARC CodeTech Logo"
              fill
              className="w-4 h-4 object-contain"
            />
          </div>
          <span className="font-bold text-xl tracking-tight group-hover:text-primary transition-colors">
            ARC <span className="text-primary">CodeTech</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-8 items-center">
          {[
            { name: "Services", href: "#services" },
            { name: "Projects", href: "#projects" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
          >
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border absolute w-full left-0 top-full px-6 py-8 space-y-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {[
            { name: "Services", href: "#services" },
            { name: "Projects", href: "#projects" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90 h-10 text-lg"
          >
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              Get a Quote
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}

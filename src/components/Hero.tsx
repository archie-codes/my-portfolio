"use client";

import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <>
      <div className="hidden dark:block">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
      </div>
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center p-6">
        <div className="z-10 max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 animate-in fade-in zoom-in duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Freelance Projects
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Freelance Web & <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              System Developer
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build high-performance web applications and scalable systems
            tailored to your business needs. Based in Pampanga, serving clients
            globally.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all"
            >
              <Link href="#contact">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/10 hover:bg-white/5 text-white h-12 text-lg hover:border-white/20 transition-all"
            >
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

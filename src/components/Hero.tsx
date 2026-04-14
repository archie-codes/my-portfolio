"use client";

import { Button } from "@/components/ui/button";
import FloatingLines from "@/components/reactbits/FloatingLines";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Shuffle from "@/components/reactbits/Shuffle";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden">
      {/* FloatingLines Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto hidden dark:block">
        <FloatingLines animationSpeed={1} />
      </div>

      <section className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center p-6 pointer-events-none">
        <div className="max-w-4xl mx-auto space-y-8 pointer-events-auto">
          {/* Profile Picture */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-2 group">
            {/* Gradient Aura */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-blue-500 to-purple-500 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl ring-2 ring-primary/20 bg-background">
              <Image
                src="/profile-picture-2.jpg"
                alt="Archie Bauzon - Profile"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
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
            <Shuffle
              text="Freelance Web "
              shuffleDirection="right"
              duration={0.45}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover
              respectReducedMotion={true}
              loop={false}
              loopDelay={0}
            />
            <span className="space-x-2">&nbsp;</span>&{" "}
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 uppercase">
              System Developer
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-muted-foreground dark:text-white">
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
              className="border-border hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-foreground h-12 text-lg transition-all"
            >
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

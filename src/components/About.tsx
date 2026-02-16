"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function About({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image (Placeholder) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
              {/* Replace with actual image */}
              <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground">
                <span className="text-sm">Profile Image</span>
              </div>
              {/* <Image src="/path-to-your-photo.jpg" alt="Archie Bauzon" fill className="object-cover" /> */}
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              About Me
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-primary">
              Archie Bauzon &mdash; Solo Developer
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I am a dedicated freelance developer specializing in building
              efficient, scalable, and user-friendly digital solutions.
              Currently based in Pampanga, I work directly with clients to
              eliminate the overhead of big agencies.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Direct Communication (No Middlemen)",
                "Cost-Effective Solutions",
                "Faster Turnaround Times",
                "Personalized Support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
              >
                <Link href="/contact">Let&apos;s Discuss Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

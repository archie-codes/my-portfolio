"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Import SplitText component
import SplitText from "@/components/reactbits/SplitText";

// Utility function for conditional classNames
import { Spotlight } from "@/components/ui/spotlight";

//
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function Hero() {
  const [key, setKey] = useState(0);

  const handleAnimationComplete = () => {
    // Restart by re-rendering the component
    setTimeout(() => {
      setKey((prev) => prev + 1); // re-mount SplitText
    }, 20000); // delay before restart (ms)
  };

  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <BackgroundBeamsWithCollision>
        <section className="relative min-h-screen flex items-center justify-center text-center text-white bg-hero">
          <div className="container px-6">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              Hi, I’m{" "}
              <span className="text-blue-400">
                <SplitText
                  key={key} // changing key forces re-mount, replaying the animation
                  text="Archie"
                  className="text-4xl md:text-6xl font-semibold"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </span>{" "}
              <br />
              I.T and Web Developer
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg md:text-xl leading-relaxed">
              I build modern, responsive, and user-friendly web applications
              using
              <span className="text-blue-400"> Reactjs, Next.js</span>,{" "}
              <span className="text-purple-400">Tailwind</span>, and{" "}
              <span className="text-pink-400">shadcn/ui</span>. Passionate about
              turning ideas into clean, functional code.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link href="/projects">View My Work</Link>
              </Button>

              <Button asChild size="lg" variant="secondary">
                <Link href="/about">About Me</Link>
              </Button>

              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact 📩</Link>
              </Button>
            </div>
          </div>
        </section>
      </BackgroundBeamsWithCollision>
    </>
  );
}

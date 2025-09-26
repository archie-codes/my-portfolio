import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <section className="py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
          About Me
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A little bit about who I am, what I do, and what drives me.
        </p>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto mb-16">
        <div className="relative aspect-square w-96 rounded-full overflow-hidden border-2 border-blue-600 shadow-lg">
          <Image
            src="/pictures/profile.jpg"
            alt="Archie"
            fill
            className="object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Hi, I’m Archie 👋</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            As an <span className="font-semibold">IT Staff</span>, I handle both{" "}
            <span className="font-semibold">software and hardware support</span>{" "}
            — ensuring smooth operations, troubleshooting systems, and
            maintaining reliable infrastructure. In{" "}
            <span className="font-semibold">Web Development</span>, I focus on
            creating modern, user-friendly, and responsive applications that
            combine performance with great design. As a{" "}
            <span className="font-semibold">Graphics Designer</span>, I craft
            creative materials such as logos, tarpaulins, and photo edits, while
            also managing Facebook pages to strengthen brand presence online.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-4">Skills & Tools</h2>
        <div className="flex flex-wrap gap-3">
          <Badge>React</Badge>
          <Badge>Next.js</Badge>
          <Badge>TypeScript + Javascript</Badge>
          <Badge>Tailwind CSS</Badge>
          <Badge>shadcn/ui</Badge>
          <Badge>Node.js</Badge>
          <Badge>Drizzle + Neon + PostgreSQL</Badge>
          <Badge>Photoshop</Badge>
          <Badge>Networking</Badge>
        </div>
      </div>

      {/* Experience / Timeline */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          <Card className="backdrop-blur-md bg-white/5 border border-white/10 text-gray-300">
            <CardHeader>
              <CardTitle>Frontend Developer @ Tech Company</CardTitle>
            </CardHeader>
            <CardContent>
              <p>2023 – Present</p>
              <p>
                Building and maintaining modern web apps with React, Next.js,
                and Tailwind CSS. Collaborating with designers and backend
                developers to deliver seamless user experiences.
              </p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-md bg-white/5 border border-white/10 text-gray-300">
            <CardHeader>
              <CardTitle>Freelance Web Developer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>2021 – 2023</p>
              <p>
                Worked with clients to design and build responsive websites,
                landing pages, and e-commerce stores. Focused on performance,
                SEO, and usability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

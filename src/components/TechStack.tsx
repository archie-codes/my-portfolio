"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techStack = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase"],
  },
  {
    category: "Design & Tools",
    skills: ["Figma", "Photoshop", "Git", "VS Code", "Vercel"],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My preferred tools and technologies for building high-quality
            digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((group, index) => (
            <Card
              key={index}
              className="bg-card border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-semibold text-center text-primary">
                  {group.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {group.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="px-3 py-1 text-sm bg-background/50 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

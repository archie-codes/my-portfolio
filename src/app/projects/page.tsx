import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek portfolio built with Next.js, Tailwind, and shadcn/ui.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "Tailwind", "shadcn/ui"],
    // demo: "https://myportfolio.com",
    // github: "https://github.com/username/portfolio",
  },
  {
    title: "E-commerce Store",
    description:
      "Full-stack store with authentication, cart, and Stripe payments.",
    image: "/projects/store.png",
    tech: ["React", "Node.js", "Stripe"],
    // demo: "https://store-demo.com",
    // github: "https://github.com/username/store",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Interactive dashboard with charts and role-based authentication.",
    image: "/projects/dashboard.png",
    tech: ["Next.js", "Postgres", "Chart.js"],
    // demo: "https://dashboard-demo.com",
    // github: "https://github.com/username/dashboard",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
          Projects
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          A curated collection of my favorite work — blending clean design with
          powerful functionality.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        <Button variant="default" className="rounded-full text-sm px-6">
          All
        </Button>
        <Button variant="outline" className="rounded-full text-sm text-black px-6">
          Frontend
        </Button>
        <Button variant="outline" className="rounded-full text-sm text-black px-6">
          Fullstack
        </Button>
        <Button variant="outline" className="rounded-full text-sm text-black px-6">
          Design
        </Button>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition border border-white/10 bg-white/5 backdrop-blur-md"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <CardHeader>
              <CardTitle className="text-xl font-semibold tracking-tight">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            {/* Footer */}
            <CardFooter className="flex justify-between">
              <Button asChild variant="secondary" size="sm">
                {/* <Link href={project.github} target="_blank"> */}
                  GitHub
                {/* </Link> */}
              </Button>
              <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                {/* <Link href={project.demo} target="_blank"> */}
                  Live Demo
                {/* </Link> */}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

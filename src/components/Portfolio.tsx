"use client";

import { ProjectCard } from "./ProjectCard";

const webProjects = [
  {
    title: "Company Website",
    description:
      "A full-stack online store with secure payments, inventory tracking, and admin dashboard.",
    image: "/projects/portfolio-v2.png", // Placeholder
    link: "#",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "HR Management System",
    description:
      "Enterprise-grade HRIS for attendance, leave management, and automated payroll.",
    image: "/projects/hris.png", // Placeholder
    link: "#",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    description:
      "Modern landing page for a real estate agency with property listings and contact forms.",
    image: "/projects/portfolio.png", // Placeholder
    link: "#",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
];

const designProjects = [
  {
    title: "Wedding Invitation Suite",
    description: "Elegant floral wedding invitation set designed in Photoshop.",
    image: "/projects/wedding-invitation.jpg", // Placeholder
    link: "#",
    tech: ["Photoshop", "Typography", "Print Design"],
  },
  {
    title: "Corporate Event Invite",
    description:
      "Modern and professional digital invitation for a tech conference.",
    image: "/projects/corporate-invite.jpg", // Placeholder
    link: "#",
    tech: ["Photoshop", "Illustrator"],
  },
  {
    title: "Birthday Party Flyer",
    description:
      "Vibrant and fun birthday party invitation with custom illustrations.",
    image: "/projects/birthday-invite.jpg", // Placeholder
    link: "#",
    tech: ["Photoshop", "Digital Art"],
  },
];

export function Portfolio() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of my recent web development projects and graphic
            designs.
          </p>
        </div>

        {/* Web Development Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 border-l-4 border-primary pl-4 text-foreground">
            Web & Systems
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        {/* Graphic Design Section */}
        <div id="designs">
          <h3 className="text-2xl font-semibold mb-8 border-l-4 border-primary pl-4 text-foreground">
            Graphic Design & Invitations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

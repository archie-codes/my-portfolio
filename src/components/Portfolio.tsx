"use client";

import { ProjectCard } from "./ProjectCard";

const websites = [
  {
    title: "RBP Petrostar Inc.",
    description: "Corporate website for RBP Petrostar Inc.",
    image: "/projects/rbp_screenshot.png",
    link: "#",
    tech: ["Website", "Corporate"],
    gradient: "bg-gradient-to-br from-blue-500/10 via-card to-purple-500/10 border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/10",
  },
  {
    title: "FhernieOtso Corp.",
    description: "Corporate website for FhernieOtso Corp.",
    image: "/projects/fhernie_screenshot.png",
    link: "#",
    tech: ["Website", "Business"],
    gradient: "bg-gradient-to-br from-blue-500/10 via-card to-purple-500/10 border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/10",
  },
  {
    title: "JC&L Proserve Inc.",
    description: "Corporate website for JC&L Proserve Inc.",
    image: "/projects/jcl_screenshot.png",
    link: "#",
    tech: ["Website", "Agency"],
    gradient: "bg-gradient-to-br from-blue-500/10 via-card to-purple-500/10 border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/10",
  },
];

const systems = [
  {
    title: "Otso Sales Monitoring System",
    description: "Real-time sales monitoring and tracking system.",
    image: "/projects/fhernieotso_sale_monitoring_system.png",
    link: "#",
    tech: ["System", "Dashboard", "Analytics"],
    gradient: "bg-gradient-to-br from-emerald-500/10 via-card to-teal-500/10 border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-emerald-500/10",
  },
  {
    title: "HRIS",
    description: "Human Resource Information System for employee management.",
    image: "/projects/jcl_hris.png", 
    link: "#",
    tech: ["HRIS", "Payroll", "Management"],
    gradient: "bg-gradient-to-br from-emerald-500/10 via-card to-teal-500/10 border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-emerald-500/10",
  },
];

const webApps = [
  {
    title: "Cheque and Voucher Printing",
    description: "Application designed for automated cheque and voucher printing.",
    image: "/projects/cheque_printing.png",
    link: "#",
    tech: ["Web App", "Utility", "Automation"],
    gradient: "bg-gradient-to-br from-orange-500/10 via-card to-pink-500/10 border-orange-500/20 hover:border-orange-500/50 hover:shadow-orange-500/10",
  },
  {
    title: "OB Form Generator",
    description: "Generator tool for creating Official Business forms.",
    image: "/projects/ob_form_generator.png",
    link: "#",
    tech: ["Web App", "Forms", "Utility"],
    gradient: "bg-gradient-to-br from-orange-500/10 via-card to-pink-500/10 border-orange-500/20 hover:border-orange-500/50 hover:shadow-orange-500/10",
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
            A selection of my recent websites, systems, and web applications.
          </p>
        </div>

        {/* Websites Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 border-l-4 border-primary pl-4 text-foreground">
            Websites
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websites.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        {/* Systems Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 border-l-4 border-primary pl-4 text-foreground">
            Systems
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systems.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        {/* Web Applications Section */}
        <div id="web-apps">
          <h3 className="text-2xl font-semibold mb-8 border-l-4 border-primary pl-4 text-foreground">
            Web Applications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webApps.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

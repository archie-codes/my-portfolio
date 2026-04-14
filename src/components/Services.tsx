"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Monitor, Server, ShieldCheck, Palette } from "lucide-react";

const services = [
  {
    title: "HRIS",
    description:
      "Custom-built systems to streamline employee management, attendance tracking, and automated payroll processing.",
    icon: <Server className="h-10 w-10 text-indigo-500" />,
    gradient: "bg-gradient-to-br from-indigo-500/10 via-card to-purple-500/10 border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-indigo-500/10",
  },
  {
    title: "Business Websites",
    description:
      "Modern, responsive, and SEO-optimized websites designed to elevate your brand and convert visitors into clients.",
    icon: <Monitor className="h-10 w-10 text-cyan-500" />,
    gradient: "bg-gradient-to-br from-cyan-500/10 via-card to-blue-500/10 border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/10",
  },
  {
    title: "IT Support & CCTV",
    description:
      "Reliable IT infrastructure setup, networking solutions, and professional CCTV installation for business security.",
    icon: <ShieldCheck className="h-10 w-10 text-emerald-500" />,
    gradient: "bg-gradient-to-br from-emerald-500/10 via-card to-teal-500/10 border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-emerald-500/10",
  },
  {
    title: "Graphic Design",
    description:
      "Creative branding, logo design, and marketing materials that give your business a professional visual identity.",
    icon: <Palette className="h-10 w-10 text-amber-500" />,
    gradient: "bg-gradient-to-br from-amber-500/10 via-card to-orange-500/10 border-amber-500/20 hover:border-amber-500/50 hover:shadow-amber-500/10",
  },
];

export function Services({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive tech solutions to help your business grow and operate
            efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${service.gradient}`}
            >
              <CardHeader>
                <div className="mb-4 p-3 rounded-2xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

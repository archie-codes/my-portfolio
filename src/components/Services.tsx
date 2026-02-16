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
    title: "HRIS & Payroll Systems",
    description:
      "Custom-built systems to streamline employee management, attendance tracking, and automated payroll processing.",
    icon: <Server className="h-10 w-10 text-primary" />,
  },
  {
    title: "Business Websites",
    description:
      "Modern, responsive, and SEO-optimized websites designed to elevate your brand and convert visitors into clients.",
    icon: <Monitor className="h-10 w-10 text-primary" />,
  },
  {
    title: "IT Support & CCTV",
    description:
      "Reliable IT infrastructure setup, networking solutions, and professional CCTV installation for business security.",
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
  },
  {
    title: "Graphic Design",
    description:
      "Creative branding, logo design, and marketing materials that give your business a professional visual identity.",
    icon: <Palette className="h-10 w-10 text-primary" />,
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
              className="group border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5"
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

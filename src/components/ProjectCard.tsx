import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  link = "#",
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <span className="text-muted-foreground font-medium">
              No Image Available
            </span>
          </div>
        )}
      </div>

      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <Link
            href={link}
            className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-full hover:bg-muted"
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>

        <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

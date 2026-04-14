"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  gradient?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  link = "#",
  gradient = "",
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <Card className={`group overflow-hidden transition-all duration-300 hover:-translate-y-2 h-full flex flex-col ${gradient || "bg-card border-border hover:border-primary"}`}>
        {/* Image Container */}
        <div 
          className="relative h-48 w-full overflow-hidden cursor-pointer"
          onClick={() => image && setIsOpen(true)}
        >
          {image && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 flex items-end p-4">
              <span className="text-white text-xs font-medium bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to expand
              </span>
            </div>
          )}
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-secondary flex items-center justify-center z-0 relative">
              <span className="text-muted-foreground font-medium">
                No Image Available
              </span>
            </div>
          )}
        </div>

        <CardContent className="p-6 flex-1 flex flex-col relative z-20">
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

          <p className="text-muted-foreground text-sm flex-1 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>

      {/* Lightbox Modal */}
      {isOpen && image && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-50"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <X size={24} />
          </button>
          
          <div 
            className="relative w-full max-w-6xl max-h-[90vh] aspect-video rounded-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}
    </>
  );
}

import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-md py-8 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-foreground">
            ARC CodeTech Solution
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Archie Bauzon. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <Link
            href="https://www.facebook.com/archie.bauzon"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Facebook size={20} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

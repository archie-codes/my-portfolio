import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md py-8 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-white">
            ARC CodeTech Solution
          </p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Archie Bauzon. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <Link
            href="https://github.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModeToggle } from './mode-toggle.tsx';

export default function Navbar() {
  return (
    <nav className="border-border/40 bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-200 ease-in-out">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Site title / logo */}
        <Link
          className="hover:text-primary text-lg font-semibold transition-all duration-200 hover:scale-105"
          to="/"
        >
          <span className="from-foreground to-primary bg-gradient-to-r bg-clip-text text-transparent">
            Albin Jaldevik
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            className="hover:text-primary hover:bg-primary/10 rounded-lg p-2 transition-all duration-200 hover:scale-110"
            href="mailto:albin@jaldevik.com"
            rel="noopener noreferrer"
            target="_blank"
            title="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            className="hover:text-primary hover:bg-primary/10 rounded-lg p-2 transition-all duration-200 hover:scale-110"
            href="https://github.com/albinjal"
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            className="hover:text-primary hover:bg-primary/10 rounded-lg p-2 transition-all duration-200 hover:scale-110"
            href="https://linkedin.com/in/albin-jaldevik"
            rel="noopener noreferrer"
            target="_blank"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <div className="ml-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

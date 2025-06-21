import { ModeToggle } from '@/components/mode-toggle.tsx';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="border-border/40 bg-background/70 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Site title / logo */}
        <Link
          to="/"
          className="hover:text-primary text-lg font-semibold transition-colors"
        >
          Albin Jaldevik
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="mailto:albin@jaldevik.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/jaldevik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/albin-jaldevik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

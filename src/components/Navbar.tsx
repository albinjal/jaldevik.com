import { ModeToggle } from '@/components/mode-toggle';
import { Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="border-border/40 bg-background/70 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Site title / logo */}
        <a href="/" className="text-lg font-semibold">
          Albin Jaldevik
        </a>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/jaldevik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/albin-jaldevik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

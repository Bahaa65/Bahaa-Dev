import Link from "next/link";
import { Github, Linkedin, Phone, Mail } from "lucide-react";
import { TerminalText } from "@/components/typewriter-text";

export function Footer() {
  return (
    <footer className="border-t border-emerald-500/60 dark:border-green-400/60 bg-white/50 dark:bg-black/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-emerald-600/80 dark:text-green-400/80 font-mono">
          © {new Date().getFullYear()} <TerminalText 
            text="Bahaa Mohamed Akl Gaballah" 
            delay={100}
            speed={25}
            type="terminal"
            showCursor={false}
          />
        </div>
        <div className="flex items-center gap-4 text-emerald-600/80 dark:text-green-400/80">
          <Link href="https://github.com/Bahaa65" target="_blank" aria-label="GitHub" className="hover:text-emerald-700 dark:hover:text-green-300 transition-colors">
            <Github className="size-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/bahaa-akl" target="_blank" aria-label="LinkedIn" className="hover:text-emerald-700 dark:hover:text-green-300 transition-colors">
            <Linkedin className="size-5" />
          </Link>
          <Link href="mailto:bahaamohammed955@gmail.com" aria-label="Email" className="hover:text-emerald-700 dark:hover:text-green-300 transition-colors">
            <Mail className="size-5" />
          </Link>
          <Link href="tel:+201205085742" aria-label="Phone" className="hover:text-emerald-700 dark:hover:text-green-300 transition-colors">
            <Phone className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}



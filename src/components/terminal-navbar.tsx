"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { TerminalButton } from "@/components/ui/terminal-button";
import { TerminalText } from "@/components/typewriter-text";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

export function TerminalNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-500/60 dark:border-green-400/60 bg-white/80 dark:bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold text-emerald-700 dark:text-green-400 font-mono cursor-pointer" onClick={(e) => handleNav(e, "/")}>
          <TerminalText 
            text="Bahaa Gaballah" 
            speed={30}
            type="terminal"
            showCursor={false}
            className="text-lg"
          />
        </Link>
        
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-600 dark:hover:text-green-300 font-mono cursor-pointer",
                pathname === link.href 
                  ? "text-emerald-600 dark:text-green-400" 
                  : "text-emerald-600/70 dark:text-green-400/70"
              )}
            >
              <TerminalText 
                text={link.label} 
                delay={index * 200}
                speed={25}
                type="terminal"
                showCursor={false}
              />
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <TerminalButton 
                variant="outline" 
                size="icon" 
                className="md:hidden border-emerald-500/60 dark:border-green-400/60 text-emerald-700 dark:text-green-400"
                delay={1200}
                speed={20}
                textType="terminal"
              >
                <Menu className="size-5" />
              </TerminalButton>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white dark:bg-black border-emerald-500/60 dark:border-green-400/60">
              <SheetHeader>
                <SheetTitle className="text-emerald-700 dark:text-green-400">
                  <TerminalText 
                    text="Navigation" 
                    delay={100}
                    speed={25}
                    type="terminal"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4 grid gap-3">
                {navLinks.map((link, index) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-sm text-emerald-600/80 dark:text-green-400/80 hover:text-emerald-700 dark:hover:text-green-300 font-mono cursor-pointer" 
                    aria-label={link.label}
                  >
                    <TerminalText 
                      text={link.label} 
                      delay={200 + (index * 100)}
                      speed={20}
                      type="terminal"
                      showCursor={false}
                    />
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

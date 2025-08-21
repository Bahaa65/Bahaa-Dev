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
  SheetClose,
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
        <Link href="/" aria-label="Go to home" className="font-semibold text-emerald-700 dark:text-green-400 font-mono cursor-pointer" onClick={(e) => handleNav(e, "/")}>
          <TerminalText 
            text="Bahaa Gaballah" 
            speed={30}
            type="terminal"
            showCursor={false}
            className="text-lg"
          />
        </Link>
        
        <nav className="hidden gap-6 md:flex" role="navigation" aria-label="Main">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-emerald-600 dark:hover:text-green-300 font-mono cursor-pointer",
                pathname === link.href 
                  ? "text-emerald-600 dark:text-green-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-emerald-600 dark:after:bg-green-400" 
                  : "text-emerald-600/70 dark:text-green-400/70 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-emerald-600 dark:after:bg-green-400 hover:after:w-full after:transition-[width] after:duration-200"
              )}
              aria-current={pathname === link.href ? "page" : undefined}
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
            <SheetContent side="right" className="bg-white dark:bg-black border-emerald-500/60 dark:border-green-400/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
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
                  <SheetClose asChild key={link.href}>
                    <Link 
                      href={link.href} 
                      onClick={(e) => handleNav(e, link.href)}
                      className={cn(
                        "text-sm font-mono text-emerald-700 dark:text-green-400 hover:text-white dark:hover:text-black hover:bg-emerald-600 dark:hover:bg-green-400 transition-colors rounded px-2 py-1 cursor-pointer",
                        pathname === link.href && "bg-emerald-50 dark:bg-green-900/30"
                      )}
                      aria-label={link.label}
                      aria-current={pathname === link.href ? "page" : undefined}
                    >
                      <TerminalText 
                        text={link.label} 
                        delay={200 + (index * 100)}
                        speed={20}
                        type="terminal"
                        showCursor={false}
                      />
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

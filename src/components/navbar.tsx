"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
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

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = (href: string) => {
    router.prefetch(href);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60",
      scrolled
        ? "bg-white/85 dark:bg-black/85 border-emerald-500/40 dark:border-green-400/40 shadow-sm"
        : "bg-white/80 dark:bg-black/80 border-emerald-500/60 dark:border-green-400/60"
    )}>
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link 
          href="/" 
          aria-label="Go to home"
          className="font-semibold text-emerald-700 dark:text-green-400 font-mono"
          onMouseEnter={() => handleMouseEnter("/")}
        >
          Bahaa Gaballah
        </Link>
        <nav className="hidden gap-2 md:flex" role="navigation" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => handleMouseEnter(link.href)}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 dark:focus-visible:ring-green-400/50",
                pathname === link.href 
                  ? "text-emerald-700 dark:text-green-300 bg-emerald-100/70 dark:bg-green-900/40 after:absolute after:left-3 after:-bottom-0.5 after:h-0.5 after:w-[calc(100%-1.5rem)] after:bg-emerald-600 dark:after:bg-green-400 after:rounded-full" 
                  : "text-emerald-700/70 dark:text-green-300/70 hover:text-emerald-700 dark:hover:text-green-300 hover:bg-emerald-50 dark:hover:bg-green-900/30 after:absolute after:left-3 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-emerald-600 dark:after:bg-green-400 hover:after:w-[calc(100%-1.5rem)] after:transition-all after:duration-200 after:rounded-full"
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button aria-label="Open menu" variant="outline" size="icon" className="md:hidden border-emerald-500/60 dark:border-green-400/60 text-emerald-700 dark:text-green-400 hover:bg-emerald-50 dark:hover:bg-green-950/40">
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white dark:bg-black border-emerald-500/60 dark:border-green-400/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right">
              <SheetHeader>
                <SheetTitle className="text-emerald-700 dark:text-green-400">Navigation</SheetTitle>
              </SheetHeader>
              <div className="mt-4 grid gap-2">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link 
                      href={link.href} 
                      onMouseEnter={() => handleMouseEnter(link.href)}
                      className={cn(
                        "text-sm font-mono text-emerald-800 dark:text-green-300 rounded-md px-3 py-2 transition-colors",
                        pathname === link.href
                          ? "bg-emerald-100/70 dark:bg-green-900/40 border-l-2 border-emerald-500"
                          : "hover:bg-emerald-50 dark:hover:bg-green-900/30"
                      )}
                      aria-label={link.label}
                      aria-current={pathname === link.href ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* Decorative bottom gradient line */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      </div>
    </header>
  );
}



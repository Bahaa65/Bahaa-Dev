"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { TerminalText } from "@/components/typewriter-text";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-emerald-500/60 dark:border-green-400/60 text-emerald-700 dark:text-green-400 hover:bg-emerald-50 dark:hover:bg-green-400/10">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-black border-emerald-500/60 dark:border-green-400/60">
        <DropdownMenuItem onClick={() => setTheme("light")} className="text-emerald-700 dark:text-green-400 hover:bg-emerald-50 dark:hover:bg-green-400/10">
          <TerminalText 
            text="Light" 
            delay={100}
            speed={20}
            type="terminal"
            showCursor={false}
          />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="text-emerald-700 dark:text-green-400 hover:bg-emerald-50 dark:hover:bg-green-400/10">
          <TerminalText 
            text="Dark" 
            delay={200}
            speed={20}
            type="terminal"
            showCursor={false}
          />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="text-emerald-700 dark:text-green-400 hover:bg-emerald-50 dark:hover:bg-green-400/10">
          <TerminalText 
            text="System" 
            delay={300}
            speed={20}
            type="terminal"
            showCursor={false}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}



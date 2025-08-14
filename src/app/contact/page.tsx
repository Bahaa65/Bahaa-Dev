import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { TerminalShell } from "@/components/terminal/terminal-shell";
import { TerminalText } from "@/components/typewriter-text";
import { TerminalSection } from "@/components/ui/terminal-section";

export const metadata: Metadata = {
  title: "Contact | Bahaa Akl",
  description: "Get in touch with Bahaa",
};

export default function ContactPage() {
  return (
    <TerminalShell>
      <div className="mb-8 text-center">
        <div className="inline-block border border-emerald-500 dark:border-green-400 px-6 py-2 rounded-t-lg bg-white dark:bg-black">
          <TerminalText text="CONTACT.sys" className="font-bold" speed={40} />
        </div>
        <div className="border border-emerald-500 dark:border-green-400 border-t-0 px-6 py-3 bg-white dark:bg-black rounded-b-lg">
          <TerminalText text="Initializing channel... OK" className="text-emerald-700/80 dark:text-green-400/80 text-sm" delay={600} />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TerminalSection
          title="> SEND MESSAGE"
          variant="border"
          delay={900}
          speed={30}
          type="terminal"
        >
          <ContactForm />
        </TerminalSection>

        <TerminalSection
          title="> CONTACT INFO"
          variant="border"
          delay={1200}
          speed={30}
          type="terminal"
        >
          <div className="space-y-3">
            <p>
              Phone: <a href="tel:+201205085742" className="underline">01205085742</a>
            </p>
            <p>
              Email: <a href="mailto:bahaamohammed955@gmail.com" className="underline">bahaamohammed955@gmail.com</a>
            </p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/bahaa-akl" target="_blank" className="underline">linkedin.com/in/bahaa-akl</a>
            </p>
            <p>
              GitHub: <a href="https://github.com/Bahaa65" target="_blank" className="underline">github.com/Bahaa65</a>
            </p>
          </div>
        </TerminalSection>
      </div>
    </TerminalShell>
  );
}



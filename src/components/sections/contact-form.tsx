"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TerminalButton } from "@/components/ui/terminal-button";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    // Google Analytics Event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact_form_submit', {
        event_category: 'engagement',
        event_label: 'contact_form',
        value: 1
      });
    }

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="Name"
          className="bg-white text-emerald-700 border-emerald-500/60 focus-visible:ring-emerald-500 dark:bg-black dark:text-green-400 dark:border-green-400/60"
          {...register("name")}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <Input
          placeholder="Email"
          type="email"
          className="bg-white text-emerald-700 border-emerald-500/60 focus-visible:ring-emerald-500 dark:bg-black dark:text-green-400 dark:border-green-400/60"
          {...register("email")}
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <Textarea
          placeholder="Message"
          rows={5}
          className="bg-white text-emerald-700 border-emerald-500/60 focus-visible:ring-emerald-500 dark:bg-black dark:text-green-400 dark:border-green-400/60"
          {...register("message")}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>
      <TerminalButton 
        type="submit" 
        disabled={isSubmitting} 
        variant="outline"
        className="w-full border-emerald-500 text-emerald-700 hover:bg-emerald-600 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-black transition-all"
        delay={1000}
        speed={25}
        textType="terminal"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </TerminalButton>
      {isSubmitSuccessful ? (
        <p className="text-sm text-emerald-700 dark:text-green-400">Thanks! I will get back to you soon.</p>
      ) : null}
    </form>
  );
}



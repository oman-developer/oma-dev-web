"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/AnimatedSection";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setFormState("success");
      form.reset();
      setTimeout(() => setFormState("idle"), 5000);
    } catch (error) {
      setFormState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <FadeIn>
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        aria-label="Contact form"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
              Full Name <span className="text-cyan">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Ahmed Al-Balushi"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cyan focus:ring-2 focus:ring-cyan/20"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
              Email Address <span className="text-cyan">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="ahmed@company.om"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cyan focus:ring-2 focus:ring-cyan/20"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+968 9XXX XXXX"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cyan focus:ring-2 focus:ring-cyan/20"
            />
          </div>
          <div>
            <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Your Company LLC"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cyan focus:ring-2 focus:ring-cyan/20"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy">
            Service Interested In <span className="text-cyan">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cyan focus:ring-2 focus:ring-cyan/20"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="web-development">Custom Web Development</option>
            <option value="ecommerce">E-commerce Websites</option>
            <option value="automation-ai">Automation & AI Agents</option>
            <option value="seo-aeo-geo">AEO, SEO & GEO</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="web-scraping">Web Scraping</option>
            <option value="django-flask">Django & Flask Backend</option>
            <option value="devops">DevOps</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
            Message <span className="text-cyan">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project and goals..."
            className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-cyan focus:ring-2 focus:ring-cyan/20"
          />
        </div>

        <button
          type="submit"
          disabled={formState === "submitting" || formState === "success"}
          className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {formState === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : formState === "success" ? (
            <>
              <CheckCircle className="h-4 w-4" />
              Message Sent!
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>

        <AnimatePresence>
          {formState === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-green-600"
              role="status"
            >
              Thank you! We&apos;ll get back to you within 24 hours.
            </motion.p>
          )}
          {formState === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-sm text-red-600"
              role="alert"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </FadeIn>
  );
}

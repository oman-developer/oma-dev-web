"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import AnimatedSection, { FadeIn } from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/ui/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

export default function CTASection() {
  return (
    <>
      <AnimatedSection className="section-padding relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="absolute inset-0 mesh-pattern opacity-10" />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Join dozens of Omani businesses that trust oma dev for their
              digital transformation. Get a free consultation and custom quote
              today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/pricing"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold"
              >
                View Pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white" id="contact">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <FadeIn>
                <span className="text-sm font-semibold tracking-wider text-cyan uppercase">
                  Get In Touch
                </span>
                <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
                  Let&apos;s Build Something{" "}
                  <span className="gradient-text">Great Together</span>
                </h2>
                <p className="mt-4 text-muted">
                  Have a project in mind? Fill out the form and our team will
                  respond within 24 hours with a tailored proposal for your
                  business.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mt-8 space-y-4">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-cyan/30 hover:bg-card"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy">Email Us</p>
                      <p className="text-sm text-muted">{SITE_CONFIG.email}</p>
                    </div>
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:border-cyan/30 hover:bg-card"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy">Call Us</p>
                      <p className="text-sm text-muted">{SITE_CONFIG.phone}</p>
                    </div>
                  </a>
                </div>
              </FadeIn>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

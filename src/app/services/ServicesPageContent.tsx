"use client";

import {
  Code2,
  ShoppingCart,
  Bot,
  Search,
  Megaphone,
  Database,
  Server,
  CloudCog,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection, { FadeIn } from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  ShoppingCart,
  Bot,
  Search,
  Megaphone,
  Database,
  Server,
  CloudCog,
};

export default function ServicesPageContent() {
  return (
    <>
      <section className="hero-gradient mesh-pattern pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <FadeIn>
            <span className="text-sm font-semibold tracking-wider text-cyan uppercase">
              Our Services
            </span>
            <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">
              End-to-End{" "}
              <span className="gradient-text">Digital Solutions</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Comprehensive IT services designed to help Omani businesses thrive
              in the digital age — from web development to AI automation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl space-y-16">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            const isEven = index % 2 === 0;

            return (
              <AnimatedSection key={service.id} id={service.id}>
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    isEven ? "" : "lg:[direction:rtl]"
                  }`}
                >
                  <div className={isEven ? "" : "lg:[direction:ltr]"}>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 shrink-0 text-cyan" />
                          <span className="text-sm text-foreground/80">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`relative ${isEven ? "" : "lg:[direction:ltr]"}`}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-cyan/5 p-8 md:p-12">
                      <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-cyan/10 blur-2xl" />
                      <Icon className="relative h-24 w-24 text-cyan/20 md:h-32 md:w-32" />
                      <div className="relative mt-6 space-y-3">
                        {service.features.slice(0, 3).map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 rounded-lg bg-white/80 px-4 py-2.5 text-sm font-medium text-navy shadow-sm"
                          >
                            <div className="h-2 w-2 rounded-full bg-cyan" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {index < SERVICES.length - 1 && (
                  <hr className="mt-16 border-border" />
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <AnimatedSection className="section-padding bg-navy text-white">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-4 text-white/70">
              Book a free consultation and we&apos;ll help you identify the
              perfect solution for your business goals and budget.
            </p>
            <a
              href="/#contact"
              className="btn-primary mt-8 inline-flex rounded-full px-8 py-3.5 text-base font-semibold"
            >
              Schedule Free Consultation
            </a>
          </FadeIn>
        </div>
      </AnimatedSection>
    </>
  );
}

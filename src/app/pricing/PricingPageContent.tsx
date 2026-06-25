"use client";

import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import AnimatedSection, {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import {
  PRICING_TIERS,
  PRICING_SECTIONS,
  type PricingCategory,
} from "@/lib/constants";

function PricingCards({
  category,
  billing,
  bgClass = "bg-white",
}: {
  category: PricingCategory;
  billing: "one-time" | "monthly";
  bgClass?: string;
}) {
  const badgeLabel = category === "webDev" ? "Most Popular" : "Best Value";

  return (
    <StaggerContainer className="grid gap-8 lg:grid-cols-3">
      {PRICING_TIERS.map((tier) => {
        const pkg = tier[category];

        return (
          <StaggerItem key={`${category}-${tier.id}`}>
            <div
              className={`card-hover relative flex h-full flex-col rounded-2xl border p-8 ${
                tier.popular
                  ? "border-cyan bg-gradient-to-b from-cyan/5 to-white shadow-lg shadow-cyan/10"
                  : `border-border ${bgClass === "bg-white" ? "bg-card" : "bg-white"}`
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-cyan px-4 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3 w-3" />
                    {badgeLabel}
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted">{tier.description}</p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-navy">{pkg.price}</span>
                <span className="ml-1 text-lg text-muted">OMR</span>
                <p className="mt-1 text-xs text-muted">
                  {billing === "one-time" ? "one-time payment" : "per month"}
                </p>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-all ${
                  tier.popular ? "btn-primary" : "btn-outline"
                }`}
              >
                Get Started
              </Link>
            </div>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}

export default function PricingPageContent() {
  return (
    <>
      <section className="hero-gradient mesh-pattern pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <FadeIn>
            <span className="text-sm font-semibold tracking-wider text-cyan uppercase">
              Affordable Pricing
            </span>
            <h1 className="mt-3 text-4xl font-bold text-navy md:text-5xl">
              Premium Quality,{" "}
              <span className="gradient-text">SME-Friendly Prices</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Transparent pricing in Omani Rial (OMR) — highly affordable for
              small businesses. No hidden fees, no surprises.
            </p>
          </FadeIn>
        </div>
      </section>

      {PRICING_SECTIONS.map((section, index) => (
        <section
          key={section.key}
          className={`section-padding ${index % 2 === 0 ? "bg-white" : "bg-card"}`}
        >
          <div className="mx-auto max-w-7xl">
            <FadeIn className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-navy md:text-3xl">
                {section.title}
              </h2>
              <p className="mt-2 text-muted">{section.subtitle}</p>
            </FadeIn>

            <PricingCards
              category={section.key}
              billing={section.billing}
              bgClass={index % 2 === 0 ? "bg-white" : "bg-card"}
            />
          </div>
        </section>
      ))}

      <AnimatedSection className="section-padding bg-navy text-white">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold">Need a Custom Quote?</h2>
            <p className="mt-4 text-white/70">
              Every business is unique. Contact us for a tailored package that
              fits your exact requirements and budget.
            </p>
            <Link
              href="/#contact"
              className="btn-primary mt-8 inline-flex rounded-full px-8 py-3.5 text-base font-semibold"
            >
              Request Custom Quote
            </Link>
          </FadeIn>
        </div>
      </AnimatedSection>
    </>
  );
}

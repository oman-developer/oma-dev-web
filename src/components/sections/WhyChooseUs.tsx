"use client";

import {
  Wallet,
  Zap,
  MapPin,
  Award,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection, {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Wallet,
  Zap,
  MapPin,
  Award,
};

export default function WhyChooseUs() {
  return (
    <AnimatedSection className="section-padding bg-navy text-white" id="why-us">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <span className="text-sm font-semibold tracking-wider text-cyan uppercase">
                Why Choose Us
              </span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Enterprise Technology,{" "}
                <span className="text-cyan">SME-Friendly Pricing</span>
              </h2>
              <p className="mt-4 leading-relaxed text-white/70">
                We believe every Omani business deserves access to world-class
                digital solutions — without the enterprise price tag. Our team
                combines deep technical expertise with local market knowledge to
                deliver results that matter.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 space-y-4">
                {[
                  "No hidden fees — transparent pricing in OMR",
                  "Dedicated project manager for every client",
                  "Bilingual support (Arabic & English)",
                  "Post-launch support and maintenance included",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan/20">
                      <div className="h-2 w-2 rounded-full bg-cyan" />
                    </div>
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = iconMap[item.icon] || Zap;
              return (
                <StaggerItem key={item.title}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-cyan/30 hover:bg-white/10">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/20 text-cyan">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}

"use client";

import Link from "next/link";
import {
  Code2,
  ShoppingCart,
  Bot,
  Search,
  Megaphone,
  Database,
  Server,
  CloudCog,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection, {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
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

export default function ServicesOverview() {
  return (
    <AnimatedSection className="section-padding bg-white" id="services">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <span className="text-sm font-semibold tracking-wider text-cyan uppercase">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
              Comprehensive IT Services for{" "}
              <span className="gradient-text">Every Business Need</span>
            </h2>
            <p className="mt-4 text-muted">
              From concept to deployment, we provide end-to-end digital
              solutions tailored for the Omani market.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <StaggerItem key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan transition-colors group-hover:bg-cyan group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/services"
            className="btn-outline inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </AnimatedSection>
  );
}

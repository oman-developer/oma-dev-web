"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/AnimatedSection";

export default function Hero() {
  return (
    <section className="hero-gradient mesh-pattern relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-cyan/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5 text-sm font-medium text-navy">
              <Sparkles className="h-4 w-4 text-cyan" />
              Trusted IT Partner for Omani Businesses
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl leading-tight font-bold tracking-tight text-navy md:text-5xl lg:text-6xl">
              Power Your Business with{" "}
              <span className="gradient-text">Premium Digital Solutions</span>{" "}
              Built for Oman
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              From custom web development and AI automation to SEO, AEO & GEO
              optimization — we deliver enterprise-grade technology at prices
              small businesses across Oman can afford.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold"
              >
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="btn-outline inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "5.0", label: "Clutch Rating" },
                { value: "60%", label: "Below Market Avg." },
                { value: "24/7", label: "Support Available" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-navy md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}

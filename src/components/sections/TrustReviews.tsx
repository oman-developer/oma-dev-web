"use client";

import { Star, Quote } from "lucide-react";
import AnimatedSection, {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";
import {
  ClutchBadge,
  GoogleReviewBadge,
  ClutchLogo,
  ClutchStars,
} from "@/components/ui/ReviewBadges";
import { REVIEWS } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default function TrustReviews() {
  return (
    <AnimatedSection className="section-padding bg-card" id="reviews">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <div className="mb-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <ClutchBadge />
              <div className="hidden h-12 w-px bg-border md:block" aria-hidden />
              <GoogleReviewBadge />
            </div>
            <h2 className="text-3xl font-bold text-navy md:text-4xl">
              Trusted by Businesses{" "}
              <span className="gradient-text">Across Oman</span>
            </h2>
            <p className="mt-4 text-muted">
              Don&apos;t just take our word for it — hear from our satisfied clients.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <StaggerItem key={review.id}>
              <article className="card-hover relative flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium tracking-widest text-[#6B7280] uppercase">
                      Reviewed on
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <ClutchLogo className="h-5 w-auto shrink-0" />
                      <ClutchStars className="h-3" />
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>

                <Quote className="mb-3 h-6 w-6 text-cyan/30" />

                <blockquote className="flex-1 text-sm leading-relaxed text-foreground/80">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                <footer className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-navy">{review.name}</p>
                  <p className="text-xs text-muted">
                    {review.role}, {review.company}
                  </p>
                  <p className="mt-1 text-[10px] text-muted/60">{review.date}</p>
                </footer>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}

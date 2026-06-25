import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import PricingPageContent from "./PricingPageContent";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Affordable IT service pricing for Omani SMEs — web development and SEO packages starting from 99 OMR. Transparent pricing, no hidden fees.",
  path: "/pricing",
  keywords: [
    "affordable web development Oman",
    "cheap SEO Oman",
    "IT pricing Muscat",
    "OMR web development",
    "SME IT packages Oman",
  ],
});

export default function PricingPage() {
  return <PricingPageContent />;
}

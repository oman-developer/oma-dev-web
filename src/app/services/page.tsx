import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = createMetadata({
  title: "IT Services",
  description:
    "Explore our full range of IT services for Omani businesses — web development, e-commerce, SEO, AEO, GEO, AI automation, DevOps, and more.",
  path: "/services",
  keywords: [
    "web development services Oman",
    "SEO services Muscat",
    "DevOps Oman",
    "AI automation Oman",
    "e-commerce development Oman",
  ],
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}

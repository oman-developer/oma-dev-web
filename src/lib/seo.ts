import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

type PageSEO = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: PageSEO): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle = path === "/" || path === ""
    ? `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`
    : `${title} | ${SITE_CONFIG.name}`;

  const defaultKeywords = [
    "IT services Oman",
    "web development Muscat",
    "SEO Oman",
    "digital marketing Oman",
    "DevOps Oman",
    "oma dev",
    "affordable web development Oman",
    "AEO GEO SEO",
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: SITE_CONFIG.locale,
      url,
      siteName: SITE_CONFIG.name,
      title: fullTitle,
      description,
      images: [
        {
          url: "/images/logo.png",
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/images/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/images/logo.png",
      apple: "/images/logo.png",
      shortcut: "/images/logo.png",
    },
  };
}

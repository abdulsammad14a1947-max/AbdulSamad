import type { Metadata, Viewport } from "next";
import {
  Space_Grotesk, Inter, JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { certificates } from "@/data/certificates";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = "Abdul Samad — Agentic AI Engineer & Forward Deployed Engineer";
const description =
  "Portfolio of Abdul Samad, Agentic AI Engineer and Forward Deployed Engineer based in Karachi, Pakistan. I build autonomous AI agents, multi-agent systems, RAG applications, MCP servers, and production-ready full-stack and Flutter applications.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: [profile.titlePrimary, profile.titleSecondary],
  description: profile.intro,
  email: `mailto:${profile.email}`,
  telephone: profile.phoneIntl,
  url: profile.siteUrl,
  image: `${profile.siteUrl}/images/profile/hero-portrait.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [
    profile.socials.linkedin,
    profile.socials.github,
    profile.socials.instagram,
  ],
  knowsAbout: profile.keywords.filter((k) => k !== "Abdul Samad"),
  award: `${certificates.filter((c) => c.image).length}+ verified industry certifications`,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Abdul Samad — Portfolio",
  url: profile.siteUrl,
  author: { "@type": "Person", name: profile.name },
};

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: "%s — Abdul Samad",
  },
  description,
  keywords: [...profile.keywords],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.siteUrl,
    siteName: "Abdul Samad — Portfolio",
    title,
    description,
    images: [
      {
        url: `${profile.siteUrl}/og`,
        width: 1200,
        height: 630,
        alt: "Abdul Samad — Agentic AI Engineer & Forward Deployed Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${profile.siteUrl}/og`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#131313",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="bg-aurora" aria-hidden="true" />
        <div className="bg-grid" aria-hidden="true" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}

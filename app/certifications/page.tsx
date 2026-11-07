import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CertGallery from "@/components/CertGallery";
import { certificates } from "@/data/certificates";
import { profile } from "@/data/profile";

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: profile.siteUrl },
    { "@type": "ListItem", position: 2, name: "Certifications", item: `${profile.siteUrl}/certifications` },
  ],
};

export const metadata: Metadata = {
  title: "Certifications — verified certificates from Anthropic, Microsoft, IBM & more",
  description:
    "Verified certification gallery of Abdul Samad, Agentic AI Engineer: Anthropic Claude development & AI Fluency, Microsoft Azure AI, IBM agentic AI & RAG, Adobe and HP certifications with real certificate images.",
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: "Abdul Samad — Certification Gallery",
    description:
      "Verified certificates across Agentic AI, multi-agent systems, MCP, RAG, and full-stack & Flutter engineering.",
    images: [{ url: `${profile.siteUrl}/og`, width: 1200, height: 630 }],
  },
};

export default function CertificationsPage() {
  const withImages = certificates.filter((c) => c.image).length;
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="cert-page-hero">
          <div className="container">
            <nav className="case-breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep" aria-hidden="true">/</span>
              <span aria-current="page">Certifications</span>
            </nav>
            <p className="eyebrow">Certification gallery</p>
            <h1
              className="section-title"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              {withImages} verified certificates.
            </h1>
            <p className="section-sub" style={{ maxWidth: 640 }}>
              Every card shows the real certificate image — click any card to open
              the full-size, zoomable view. Anthropic, Microsoft, IBM, Adobe, HP
              and more; organized by category, searchable, and open to expansion.
            </p>
          </div>
        </section>

        <CertGallery />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
    </>
  );
}

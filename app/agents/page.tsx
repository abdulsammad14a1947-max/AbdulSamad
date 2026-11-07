import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { agents } from "@/data/agents";
import { creativePosts } from "@/data/creative";
import { profile } from "@/data/profile";

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: profile.siteUrl },
    { "@type": "ListItem", position: 2, name: "Agents", item: `${profile.siteUrl}/agents` },
  ],
};

export const metadata: Metadata = {
  title: "AI Agents — Abdul Samad's agent roster",
  description:
    "The AI agent roster of Abdul Samad, Agentic AI Engineer — seven agents with avatars, plus a creative showcase of recent posts: campaign photography, product edits, and video.",
  alternates: { canonical: "/agents" },
  openGraph: {
    title: "Abdul Samad — AI Agent Roster",
    description: "Seven agents, seven avatars, plus selected creative output — photos and video.",
    images: [{ url: `${profile.siteUrl}/og`, width: 1200, height: 630 }],
  },
};

export default function AgentsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section className="cert-page-hero">
          <div className="container">
            <nav className="case-breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep" aria-hidden="true">/</span>
              <span aria-current="page">Agents</span>
            </nav>
            <p className="eyebrow">Agent roster</p>
            <h1
              className="section-title"
              style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
            >
              My AI agents.
            </h1>
            <p className="section-sub" style={{ maxWidth: 640 }}>
              Seven agents, seven avatars — my roster in one place. Below: a
              creative showcase of recent posts — campaign photography, product
              edits, and video.
            </p>
          </div>
        </section>

        <div className="container">
          <div className="cert-gallery">
            {agents.map((a) => (
              <a
                key={a.slug}
                className="cert-card glass glass-hover media-card"
                href={a.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${a.name} avatar full size`}
                id={a.slug}
              >
                <div className="cert-thumb">
                  <Image
                    src={a.image}
                    alt={`${a.name} — AI agent avatar`}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1100px) 45vw, 300px"
                    style={{ objectPosition: "center 32%" }}
                  />
                </div>
                <div className="cert-info">
                  <h4>{a.name}</h4>
                  <p className="cert-inst">AI agent</p>
                  <span className="cert-cat-tag">Agent</span>
                </div>
              </a>
            ))}
          </div>
          <p className="agents-note">Tap any avatar to view it full size.</p>
        </div>

        <section className="section" id="creative">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Creative output</p>
              <h2 className="section-title">Posts &amp; showcases.</h2>
              <p className="section-sub">
                Recent posts: fashion campaigns, faceless portraits, product
                edits with the logos removed, and short-form video — photos open
                full size, videos play inline.
              </p>
            </div>

            <div className="cert-gallery">
              {creativePosts.map((p) =>
                p.type === "video" ? (
                  <div
                    key={p.slug}
                    className="cert-card glass media-card video-card"
                    id={p.slug}
                  >
                    <div className="cert-thumb">
                      <video
                        src={p.file}
                        controls
                        preload="metadata"
                        playsInline
                        aria-label={`${p.title} video`}
                      />
                    </div>
                    <div className="cert-info">
                      <h4>{p.title}</h4>
                      <p className="cert-inst">Video</p>
                      <span className="cert-cat-tag">Post</span>
                    </div>
                  </div>
                ) : (
                  <a
                    key={p.slug}
                    className="cert-card glass glass-hover media-card"
                    href={p.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${p.title} full size`}
                    id={p.slug}
                  >
                    <div className="cert-thumb">
                      <Image
                        src={p.file}
                        alt={p.title}
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1100px) 45vw, 300px"
                      />
                    </div>
                    <div className="cert-info">
                      <h4>{p.title}</h4>
                      <p className="cert-inst">Image</p>
                      <span className="cert-cat-tag">Post</span>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
    </>
  );
}

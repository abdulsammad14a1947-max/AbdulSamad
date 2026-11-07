import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { certificates } from "@/data/certificates";

const preview = certificates.filter((c) => c.image).slice(0, 10);

export default function CertificationsPreview() {
  const withImages = certificates.filter((c) => c.image).length;
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Certifications</p>
          <h2 className="section-title">
            {withImages} verified certifications, and counting.
          </h2>
          <p className="section-sub">
            Anthropic Claude development &amp; AI Fluency tracks, Microsoft Azure
            &amp; AI, IBM agentic AI &amp; RAG, Adobe, HP — every certificate shown
            with its actual image.
          </p>
        </div>

        <div className="cert-preview-grid">
          {preview.map((c) => (
            <Link
              href={`/certifications#${c.slug}`}
              className="cert-card glass glass-hover"
              key={c.slug}
              aria-label={`${c.title} — view in certificate gallery`}
            >
              <div className="cert-thumb">
                {c.image && (
                  <Image
                    src={c.image}
                    alt={`${c.title} certificate${c.institution ? ` from ${c.institution}` : ""}`}
                    fill
                    sizes="(max-width: 640px) 45vw, 240px"
                  />
                )}
              </div>
              <div className="cert-info">
                <h4>{c.title}</h4>
                <p className="cert-inst">{c.institution ?? "Certificate"}</p>
                <span className="cert-cat-tag">{c.category}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="cert-cta-row">
          <Link className="btn-primary" href="/certifications">
            View full certificate gallery <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

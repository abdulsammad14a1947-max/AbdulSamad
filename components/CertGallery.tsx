"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Search, X, ImageOff, ZoomIn, ArrowUpRight,
} from "lucide-react";
import { certificates, type Certificate } from "@/data/certificates";

const CATS = ["All", ...Array.from(new Set(certificates.map((c) => c.category)))];

export default function CertGallery() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [openCert, setOpenCert] = useState<Certificate | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return certificates.filter((c) => {
      const okCat = cat === "All" || c.category === cat;
      const okQ =
        !q ||
        c.title.toLowerCase().includes(q) ||
        (c.institution ?? "").toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q);
      return okCat && okQ;
    });
  }, [query, cat]);

  // ESC closes the modal; slide from hash (#slug) on first load
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenCert(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const slug = window.location.hash.replace("#", "");
    if (!slug) return;
    const found = certificates.find((c) => c.slug === slug);
    if (found) setOpenCert(found);
  }, []);

  const close = useCallback(() => {
    setOpenCert(null);
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const open = (c: Certificate) => {
    setOpenCert(c);
    setZoomed(false);
    history.replaceState(null, "", `#${c.slug}`);
  };

  return (
    <div className="container">
      <div className="cert-filters-row">
        <div className="cert-search">
          <Search size={15} aria-hidden="true" />
          <input
            type="search"
            placeholder="Search certificates or institutions…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search certificates"
          />
        </div>
        <select
          className="cert-cat-select"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          aria-label="Filter certificates by category"
        >
          {CATS.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <span className="cert-count" aria-live="polite">
          {filtered.filter((c) => c.image).length} certificates · {CATS.length - 1} categories
        </span>
      </div>

      <div className="cert-gallery">
        {filtered.map((c) => (
          <button
            key={c.slug}
            className="cert-card glass glass-hover"
            onClick={() => c.image && open(c)}
            disabled={!c.image}
            aria-label={
              c.image
                ? `View ${c.title} certificate full size`
                : `${c.title} — certificate image not yet added`
            }
            id={c.slug}
          >
            <div className="cert-thumb">
              {c.image ? (
                <Image
                  src={c.image}
                  alt={`${c.title} certificate${c.institution ? ` from ${c.institution}` : ""}`}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1100px) 45vw, 300px"
                />
              ) : (
                <span className="cert-placeholder">
                  <ImageOff size={26} aria-hidden="true" />
                  <span>Certificate image awaiting upload</span>
                </span>
              )}
            </div>
            <div className="cert-info">
              <h4>{c.title}</h4>
              <p className="cert-inst">{c.institution ?? "Institution on record"}</p>
              <span className="cert-cat-tag">{c.category}</span>
            </div>
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="cert-empty">No certificates match your search.</p>
        )}
      </div>

      {openCert && (
        <div
          className="cert-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${openCert.title} certificate`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="cert-modal-backdrop" onClick={close} />
          <div className="cert-modal-panel">
            <div className="cert-modal-imgwrap">
              {openCert.image ? (
                <Image
                  src={openCert.image}
                  alt={`${openCert.title} certificate${openCert.institution ? ` from ${openCert.institution}` : ""} — full view`}
                  width={1400}
                  height={1015}
                  className={zoomed ? "zoomed" : ""}
                  onClick={() => setZoomed((z) => !z)}
                  priority
                />
              ) : (
                <span className="cert-placeholder" style={{ position: "static", borderRadius: 0 }}>
                  <ImageOff size={30} aria-hidden="true" />
                  <span>Certificate image awaiting upload</span>
                </span>
              )}
            </div>
            <div className="cert-modal-info">
              <div>
                <span className="cert-cat-tag">{openCert.category}</span>
                <h3>{openCert.title}</h3>
              </div>
              <div className="rows">
                <div className="row">
                  <span className="k">Institution</span>
                  <span className="v">{openCert.institution ?? "—"}</span>
                </div>
                {openCert.credentialId && (
                  <div className="row">
                    <span className="k">Credential ID</span>
                    <span className="v">{openCert.credentialId}</span>
                  </div>
                )}
                <div className="row">
                  <span className="k">Details</span>
                  <span className="v">
                    open the certificate image and zoom for full information
                  </span>
                </div>
              </div>
              <p style={{ color: "var(--text-3)", fontSize: 12.5, display: "flex", alignItems: "center", gap: 8 }}>
                <ZoomIn size={13} aria-hidden="true" />
                {openCert.image ? "Click the image to zoom in and read the fine print." : "Image pending upload."}
              </p>
              <div className="cert-modal-actions">
                {!openCert.image && (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--lime)", fontSize: 12 }}>
                    <ArrowUpRight size={13} aria-hidden="true" /> add image to /public/images/certificates/
                  </span>
                )}
              </div>
            </div>
            <button className="cert-modal-close" onClick={close} aria-label="Close certificate view">
              <X size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

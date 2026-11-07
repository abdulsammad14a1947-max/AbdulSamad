import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Layers } from "lucide-react";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head-row">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Selected engineering work.</h2>
            <p className="section-sub">
              Agent systems, MCP tooling, RAG products and automation — each with a
              technical case study.
            </p>
          </div>
          <a
            className="hero-social"
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} strokeWidth={1.75} aria-hidden="true" /> More on GitHub
          </a>
        </div>

        <div className="proj-grid" style={{ marginTop: "44px" }}>
          {projects.map((p) => (
            <article className="proj-card glass glass-hover" key={p.slug}>
              <div className="proj-img">
                {p.images[0] ? (
                  <Image
                    src={p.images[0]}
                    alt={`${p.name} — architecture overview`}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1100px) 45vw, 560px"
                    priority={p.featured === true}
                  />
                ) : (
                  <div className="proj-img-fallback" aria-hidden="true">
                    <Layers size={34} strokeWidth={1.2} />
                    <span style={{ fontSize: 11, fontFamily: "var(--font-mono)" }}>
                      case study
                    </span>
                  </div>
                )}
                <span className="proj-overlay">{p.status === "shipped" ? "Live product" : p.status === "internal" ? "Internal / client build" : "Build"}</span>
              </div>
              <div className="proj-body">
                <span className="proj-cat">{p.category}</span>
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
                <div className="proj-tech">
                  {p.stack.slice(0, 5).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                  {p.stack.length > 5 && <span>+{p.stack.length - 5}</span>}
                </div>
                {p.draft ? (
                  <span className="proj-draft-note">
                    case study details under verification
                  </span>
                ) : (
                  <div className="proj-links">
                    <Link href={`/projects/${p.slug}`}>
                      Read case study <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                    {p.liveUrl && (
                      <a className="live" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live site <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                    {p.repoUrl && (
                      <a href={p.repoUrl} target="_blank" rel="noopener noreferrer">
                        Repository <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CircleCheck, ArrowLeft, ArrowRight, Layers, Rocket, BookOpen } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { projects, getProject } from "@/data/projects";
import { profile } from "@/data/profile";

export function generateStaticParams() {
  return projects.filter((p) => !p.draft).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const description =
    p.sections?.problem ??
    p.tagline;
  return {
    title: p.name,
    description: description.slice(0, 200),
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      title: `${p.name} — ${p.category}`,
      description: p.tagline,
      url: `${profile.siteUrl}/projects/${p.slug}`,
      images: p.images.length
        ? p.images.map((img) => ({ url: profile.siteUrl + img }))
        : [{ url: `${profile.siteUrl}/og`, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.draft) notFound();

  const idx = projects.filter((p) => !p.draft).findIndex((p) => p.slug === project.slug);
  const list = projects.filter((p) => !p.draft);
  const prev = list[(idx - 1 + list.length) % list.length];
  const next = list[(idx + 1) % list.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: project.tagline,
    description: project.sections?.problem ?? project.tagline,
    url: `${profile.siteUrl}/projects/${project.slug}`,
    author: { "@type": "Person", name: profile.name, url: profile.siteUrl },
    ...(project.images.length
      ? { image: project.images.map((i) => profile.siteUrl + i) }
      : {}),
    about: project.category,
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: profile.siteUrl },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${profile.siteUrl}/#projects` },
      { "@type": "ListItem", position: 3, name: project.name, item: `${profile.siteUrl}/projects/${project.slug}` },
    ],
  };

  const sections = project.sections;
  let secNum = 0;
  const S = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const n = ++secNum;
    return (
      <section className="case-section">
        <h2>
          <span className="cs-num">0{n}</span> {title}
        </h2>
        {children}
      </section>
    );
  };

  return (
    <>
      <Nav />
      <main id="main-content" style={{ background: "var(--bg)" }}>
        <section className="case-hero">
          <div className="container">
            <nav className="case-breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep" aria-hidden="true">/</span>
              <a href="/#projects">Projects</a>
              <span className="sep" aria-hidden="true">/</span>
              <span aria-current="page">{project.name}</span>
            </nav>
            <p className="eyebrow">{project.category}</p>
            <h1>{project.name}</h1>
            <p style={{ color: "var(--text-2)", marginTop: 16, maxWidth: 720 }}>
              {project.tagline}
            </p>
            <div className="case-tags">
              <span className="lead-pill" style={{ borderColor: "rgba(210,255,82,0.5)", color: "var(--lime)" }}>
                {project.status === "shipped" ? "Shipped product" : project.status === "internal" ? "Internal / client build" : "In progress"}
              </span>
              {project.stack.slice(0, 8).map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        <div className="container case-body">
          <div className="case-main">
            {sections?.problem && (
              <S title="The problem">
                <p>{sections.problem}</p>
              </S>
            )}

            {sections?.solution && (
              <S title="The solution">
                <p>{sections.solution}</p>
              </S>
            )}

            {sections?.architecture && (
              <S title="System architecture">
                <ul className="case-list">
                  {sections.architecture.map((a) => (
                    <li key={a.slice(0, 40)}>{a}</li>
                  ))}
                </ul>
              </S>
            )}

            {project.images.map((img) => (
              <figure className="case-diagram" key={img} style={{ margin: 0 }}>
                <Image
                  src={img}
                  alt={`${project.name} — system architecture diagram`}
                  width={1568}
                  height={1024}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </figure>
            ))}

            {sections?.implementation && (
              <S title="Implementation details">
                <ul className="case-list">
                  {sections.implementation.map((a) => (
                    <li key={a.slice(0, 40)}>{a}</li>
                  ))}
                </ul>
              </S>
            )}

            {sections?.results && (
              <S title="What it delivers">
                <ul className="case-list">
                  {sections.results.map((a) => (
                    <li key={a.slice(0, 40)}>{a}</li>
                  ))}
                </ul>
              </S>
            )}

            <div className="case-prevnext">
              <Link className="glass prev" href={`/projects/${prev.slug}`}>
                <small>Previous project</small>
                <strong>{prev.name}</strong>
              </Link>
              <Link className="glass next" href={`/projects/${next.slug}`}>
                <small>Next project</small>
                <strong>{next.name}</strong>
              </Link>
            </div>
          </div>

          <aside className="case-aside">
            <div className="panel glass">
              <h3 style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Layers size={15} aria-hidden="true" /> Technology stack
              </h3>
              <div className="stack-chips">
                {project.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="panel glass">
              <h3 style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Rocket size={15} aria-hidden="true" /> Key features
              </h3>
              <div className="case-feat">
                {(project.features ?? project.stack.slice(0, 5)).map((f) => (
                  <span key={f}>
                    <CircleCheck size={14} aria-hidden="true" /> {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="panel glass">
              <h3 style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <BookOpen size={15} aria-hidden="true" /> Links
              </h3>
              {project.liveUrl && (
                <a className="hero-social" style={{ marginBottom: 8 }} href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Rocket size={15} aria-hidden="true" /> Live site
                </a>
              )}
              {project.repoUrl && (
                <a className="hero-social" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <ArrowRight size={15} aria-hidden="true" /> Source repository
                </a>
              )}
              {!project.liveUrl && !project.repoUrl && (
                <p style={{ color: "var(--text-3)", fontSize: 12.5 }}>
                  {project.status === "internal"
                    ? "Internal build — code and demo are not public."
                    : "Public links available on request."}
                </p>
              )}
              <a
                className="btn-ghost"
                style={{ marginTop: 14, justifyContent: "center" }}
                href="/#contact"
              >
                <ArrowLeft size={15} aria-hidden="true" /> Discuss this build
              </a>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </>
  );
}

import Reveal from "@/components/ui/Reveal";

type Cert = { title: string; org: string; year: string };

const CATEGORIES: { name: string; items: Cert[] }[] = [
  {
    name: "Claude Platform",
    items: [
      { title: "Claude 101", org: "Anthropic", year: "2025" },
      { title: "Claude Code 101", org: "Anthropic", year: "2025" },
      { title: "Claude Platform 101", org: "Anthropic", year: "2025" },
      { title: "Introduction to Claude Cowork", org: "Anthropic", year: "2025" },
      { title: "Claude Code in Action", org: "Anthropic", year: "2025" },
    ],
  },
  {
    name: "AI Fluency",
    items: [
      { title: "Teaching AI Fluency", org: "Anthropic", year: "2025" },
      { title: "AI Fluency: Framework & Foundations", org: "Anthropic", year: "2025" },
      { title: "AI Fluency for Nonprofits", org: "Anthropic", year: "2025" },
      { title: "AI Fluency for Small Businesses", org: "Anthropic", year: "2025" },
      { title: "AI Fluency for Builders", org: "Anthropic", year: "2025" },
      { title: "AI Capabilities and Limitations", org: "Anthropic", year: "2025" },
    ],
  },
  {
    name: "Claude API & Development",
    items: [
      { title: "Building with the Claude API", org: "Anthropic", year: "2025" },
      { title: "Introduction to Model Context Protocol", org: "Anthropic", year: "2025" },
      { title: "Introduction to Agent Skills", org: "Anthropic", year: "2025" },
      { title: "Introduction to Subagents", org: "Anthropic", year: "2025" },
      { title: "Certification Course", org: "Anthropic", year: "2025" },
      { title: "Implement GitHub Actions", org: "GitHub", year: "2025" },
    ],
  },
  {
    name: "AI Engineering",
    items: [
      { title: "Agentic AI Engineer", org: "SMIT", year: "2025" },
      { title: "AI agent development on Azure", org: "Microsoft", year: "2025" },
      { title: "Introduction to Generative AI Concepts", org: "Microsoft", year: "2025" },
      { title: "Generative AI Complete Certification", org: "SkillUp", year: "2025" },
      { title: "Intelligent by Design: Build an AI Agent", org: "IBM", year: "2025" },
      { title: "Adjunct Work for You", org: "IBM", year: "2026" },
      { title: "Build an AI Agent", org: "IBM", year: "2026" },
    ],
  },
  {
    name: "Design",
    items: [
      { title: "Brand Identity Specialist", org: "Le Wagon", year: "2025" },
      { title: "Complete UI/UX Design", org: "Le Wagon", year: "2025" },
    ],
  },
  {
    name: "Business",
    items: [{ title: "Selling Online", org: "HP LIFE", year: "2025" }],
  },
];

export default function Certifications() {
  const total = CATEGORIES.reduce((n, c) => n + c.items.length, 0);
  const orgs = new Set(CATEGORIES.flatMap((c) => c.items.map((i) => i.org))).size;
  return (
    <section className="section" id="certifications">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Certifications &amp; courses</h2>
          <p className="section-sub">
            Completed across AI engineering, design, and applied AI fluency.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="cert-summary">
            <div className="glass">
              <h3>{total}</h3>
              <p>Certifications</p>
            </div>
            <div className="glass">
              <h3>{orgs}</h3>
              <p>Institutions</p>
            </div>
            <div className="glass">
              <h3>{CATEGORIES.length}</h3>
              <p>Disciplines</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="cert-columns">
            {CATEGORIES.map((cat) => (
              <div className="cert-block glass" key={cat.name}>
                <h4>
                  {cat.name} <small>{cat.items.length}</small>
                </h4>
                <ul>
                  {cat.items.map((c) => (
                    <li key={c.title}>
                      {c.title} <small>{c.org}</small>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

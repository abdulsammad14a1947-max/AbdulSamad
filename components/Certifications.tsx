import { BookOpen } from "lucide-react";
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
    name: "Design",
    items: [
      { title: "Brand Identity Specialist", org: "Le Wagon", year: "2025" },
      { title: "Complete UI/UX Design", org: "Le Wagon", year: "2025" },
    ],
  },
  {
    name: "Business & Entrepreneurship",
    items: [{ title: "Selling Online", org: "HP LIFE", year: "2025" }],
  },
  {
    name: "AI Engineering",
    items: [
      { title: "Agentic AI Engineer", org: "SMIT", year: "2025" },
      { title: "Get started with AI agent development on Azure", org: "Microsoft", year: "2025" },
      { title: "Introduction to Generative AI Concepts", org: "Microsoft", year: "2025" },
      { title: "Generative AI Complete Certification", org: "SkillUp", year: "2025" },
    ],
  },
  {
    name: "Certificate of Completion",
    items: [
      { title: "Intelligent by Design: Build an AI Agent", org: "IBM", year: "2025" },
    ],
  },
];

export default function Certifications() {
  const total = CATEGORIES.reduce((n, c) => n + c.items.length, 0);
  return (
    <section className="section" id="certifications">
      <div className="container">
        <Reveal>
          <div className="section-label">06 &mdash; Certifications</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">Certifications &amp; courses</h2>
          <p className="section-sub">
            {total} certifications and courses completed across AI engineering, design, and applied AI fluency.
          </p>
        </Reveal>

        {CATEGORIES.map((cat) => (
          <div key={cat.name}>
            <Reveal>
              <div className="cat-label">
                {cat.name} <span>({cat.items.length})</span>
              </div>
            </Reveal>
            <div className="cert-grid">
              {cat.items.map((c, i) => (
                <Reveal key={c.title} delay={(i % 2) * 0.06}>
                  <div className="cert-card glass">
                    <div className="cert-ico">
                      <BookOpen className="si" />
                    </div>
                    <div>
                      <h4>{c.title}</h4>
                      <p>{c.org} &middot; {c.year}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

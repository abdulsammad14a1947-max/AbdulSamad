import Reveal from "@/components/ui/Reveal";

type Project = {
  tag: string;
  title: string;
  desc: string;
  tech: string[];
  lead?: boolean;
};

const PROJECTS: Project[] = [
  {
    tag: "AI Agent",
    title: "Autonomous customer support agent",
    desc: "An AI support agent that handles FAQs, booking requests, and customer follow-ups with memory retention and escalation logic.",
    tech: ["OpenClaw", "RAG", "CRM"],
    lead: true,
  },
  {
    tag: "Automation",
    title: "Lead generation & outreach agent",
    desc: "Scrapes leads, qualifies prospects, generates outreach messages, and keeps the CRM up to date.",
    tech: ["Python", "n8n"],
  },
  {
    tag: "Infrastructure",
    title: "OpenClaw task automation system",
    desc: "Local agent workflows for autonomous browser tasks, file management, tool execution, and reporting.",
    tech: ["OpenClaw", "Tools"],
  },
  {
    tag: "Multi-Agent",
    title: "E-commerce fraud detection",
    desc: "A multi-agent system that detects fraudulent transactions using collaborative agents and shared signals.",
    tech: ["Multi-Agent", "Python", "APIs"],
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Selected work</h2>
          <p className="section-sub">
            Agent systems and automation built for real businesses.
          </p>
        </Reveal>
        <div className="proj-list">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 2) * 0.08}
              className={`proj-card glass${p.lead ? " lead" : ""}`}
            >
              <div className="pc-tag">{p.tag}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <div className="pc-tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

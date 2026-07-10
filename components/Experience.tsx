import Reveal from "@/components/ui/Reveal";

const EXPERIENCE = [
  {
    title: "AI Agent Developer / Automation Specialist",
    tag: "2025 – Present",
    org: "Freelance / Remote",
    desc: "Designed and deployed autonomous AI agents for customer support, lead generation, scheduling, and task automation.",
    tech: [
      "Designed and deployed autonomous AI agents for customer support, lead generation, scheduling, and task automation.",
      "Built OpenClaw-based intelligent workflows with custom skill integration and persistent memory handling.",
      "Integrated AI systems with APIs, CRMs, calendars, email tools, and web services.",
      "Developed prompt-driven execution pipelines for business automation and intelligent response systems.",
      "Implemented RAG knowledge bases to improve contextual accuracy and domain-specific AI responses.",
      "Monitored agent performance, applied validation guardrails, and optimized decision-making workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal><div className="section-label">04 &mdash; Work</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">Work &amp; projects</h2>
        </Reveal>
        <div className="timeline">
          {EXPERIENCE.map((e) => (
            <div className="tl-item" key={e.title}>
              <div className="tl-node" />
              <Reveal>
                <div className="tl-card glass">
                  <div className="tl-top">
                    <h3 className="tl-title">{e.title}</h3>
                    <span className="tl-tag">{e.tag}</span>
                  </div>
                  <div className="tl-org">{e.org}</div>
                  <p>{e.desc}</p>
                  <ul className="tl-list">
                    {e.tech.map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

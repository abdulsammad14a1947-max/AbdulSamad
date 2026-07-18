import Reveal from "@/components/ui/Reveal";

const EXPERIENCE = [
  {
    title: "AI Agent Developer / Automation Specialist",
    period: "2025 - Present",
    org: "Freelance / Remote",
    points: [
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
        <Reveal>
          <h2 className="section-title">Experience</h2>
        </Reveal>
        {EXPERIENCE.map((e) => (
          <Reveal key={e.title} delay={0.1}>
            <article className="exp-card glass">
              <div className="exp-top">
                <h3 className="exp-title">{e.title}</h3>
                <span className="exp-period">{e.period}</span>
              </div>
              <div className="exp-org">{e.org}</div>
              <ul className="exp-list">
                {e.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

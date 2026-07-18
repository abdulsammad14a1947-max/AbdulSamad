import Reveal from "@/components/ui/Reveal";

const GROUPS = [
  {
    name: "Agent systems",
    items: [
      { skill: "Agentic AI", note: "design & deployment" },
      { skill: "Multi-agent orchestration", note: "collaboration" },
      { skill: "RAG", note: "knowledge bases" },
      { skill: "Prompt engineering", note: "task chaining" },
      { skill: "AI guardrails", note: "validation & safety" },
    ],
  },
  {
    name: "Automation & integration",
    items: [
      { skill: "OpenClaw", note: "config & orchestration" },
      { skill: "Workflow automation", note: "n8n / Zapier" },
      { skill: "API integration", note: "CRMs & SaaS" },
      { skill: "Browser automation", note: "scraping agents" },
      { skill: "Process pipelines", note: "end to end" },
    ],
  },
  {
    name: "Engineering",
    items: [
      { skill: "Python", note: "automation & data" },
      { skill: "LangChain", note: "LangGraph / CrewAI" },
      { skill: "React & Next.js", note: "web systems" },
      { skill: "TypeScript", note: "typed frontends" },
      { skill: "Node.js", note: "services & tools" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Core capabilities</h2>
          <p className="section-sub">
            Specialized across the AI agent development stack, from prompt engineering
            to multi-agent orchestration.
          </p>
        </Reveal>
        <div className="skill-groups">
          {GROUPS.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.08} className="skill-group glass">
              <h4>{g.name}</h4>
              <ul>
                {g.items.map((it) => (
                  <li key={it.skill}>
                    {it.skill} <small>{it.note}</small>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

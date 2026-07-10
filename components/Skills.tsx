import {
  Bot, Settings2, Zap, PenLine, Layers, Search,
  Code2, Globe, Monitor, Shield, BarChart3, Workflow,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

const SKILLS = [
  { icon: Bot, title: "Agentic AI", desc: "Autonomous agent design & deployment" },
  { icon: Settings2, title: "OpenClaw", desc: "Agent config & orchestration" },
  { icon: Zap, title: "Automation", desc: "Task & process pipelines" },
  { icon: PenLine, title: "Prompt Eng.", desc: "Task chaining & design" },
  { icon: Layers, title: "Multi-Agent", desc: "Distributed collaboration" },
  { icon: Search, title: "RAG", desc: "Retrieval-augmented KB" },
  { icon: Code2, title: "LangChain", desc: "LangGraph / CrewAI" },
  { icon: Globe, title: "API Integr.", desc: "Webhooks, CRMs & SaaS" },
  { icon: Monitor, title: "Browser Auto", desc: "Scraping & task agents" },
  { icon: Shield, title: "AI Guardrails", desc: "Validation & safety" },
  { icon: BarChart3, title: "Python", desc: "Automation & data" },
  { icon: Workflow, title: "n8n / Zapier", desc: "No-code automation" },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal><div className="section-label">02 &mdash; Skills</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">Core capabilities</h2>
          <p className="section-sub">
            Specialized across the AI agent development stack &mdash; from prompt engineering to
            multi-agent orchestration.
          </p>
        </Reveal>
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <TiltCard className="skill-card glass">
                <s.icon className="si" />
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

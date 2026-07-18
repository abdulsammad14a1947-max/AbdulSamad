import {
  Bot, Zap, Code2, PenTool, LayoutDashboard, Globe, Workflow, MessageSquare, Mic,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const SERVICES = [
  { icon: Bot, title: "AI agent development", desc: "Custom autonomous agents that reason, plan, and act. Built on OpenClaw, LangGraph, and CrewAI.", span: "span-2", variant: "featured" },
  { icon: Zap, title: "AI automation", desc: "Self-running pipelines that remove manual work end to end.", span: "", variant: "" },
  { icon: Code2, title: "Full-stack development", desc: "Modern web apps with React, Next.js, and TypeScript.", span: "", variant: "" },
  { icon: PenTool, title: "UI/UX design", desc: "Clear, fast interfaces with careful typography.", span: "", variant: "tinted" },
  { icon: LayoutDashboard, title: "SaaS development", desc: "Scalable products from concept to launch with AI at the core.", span: "span-2", variant: "" },
  { icon: Globe, title: "API integration", desc: "Connect agents to any CRM, tool, or service.", span: "", variant: "" },
  { icon: Workflow, title: "Workflow orchestration", desc: "n8n and Zapier automation at scale.", span: "", variant: "" },
  { icon: MessageSquare, title: "Chatbots", desc: "Context-aware conversational assistants.", span: "", variant: "tinted" },
  { icon: Mic, title: "Voice AI", desc: "Natural voice agents for support, booking, and outreach.", span: "span-2", variant: "" },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal>
          <h2 className="section-title">What I deliver</h2>
          <p className="section-sub">
            End-to-end intelligent systems, from autonomous agents to full product experiences.
          </p>
        </Reveal>
        <div className="bento">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.05} className={`bento-card glass ${s.span} ${s.variant}`}>
              <s.icon className="bc-icon" size={24} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

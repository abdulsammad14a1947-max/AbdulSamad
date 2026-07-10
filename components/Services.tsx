import {
  Bot, Zap, Code2, PenTool, LayoutDashboard, Globe, Workflow, MessageSquare, Mic,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

const SERVICES = [
  { icon: Bot, title: "AI Agent Development", desc: "Custom autonomous agents that reason, plan, and act — built on OpenClaw, LangGraph, and CrewAI.", span: "span-2" },
  { icon: Zap, title: "AI Automation", desc: "Self-running pipelines that remove manual work end-to-end.", span: "" },
  { icon: Code2, title: "Full-Stack Dev", desc: "Modern web apps with React, Next.js & TypeScript.", span: "" },
  { icon: PenTool, title: "UI/UX Design", desc: "Premium, fluid interfaces with glassmorphism polish.", span: "" },
  { icon: LayoutDashboard, title: "SaaS Development", desc: "Scalable products from concept to launch with AI baked in at the core.", span: "span-2" },
  { icon: Globe, title: "API Integration", desc: "Connect agents to any CRM, tool, or service.", span: "" },
  { icon: Workflow, title: "Workflow Auto", desc: "n8n & Zapier orchestration at scale.", span: "" },
  { icon: MessageSquare, title: "Chatbots", desc: "Context-aware conversational assistants.", span: "" },
  { icon: Mic, title: "Voice AI", desc: "Natural voice agents for support, booking, and outreach.", span: "span-2" },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal><div className="section-label">03 &mdash; Services</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">What I deliver</h2>
          <p className="section-sub">
            End-to-end intelligent systems — from autonomous agents to full product experiences.
          </p>
        </Reveal>
        <div className="bento">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.05} scale>
              <TiltCard className={`bento-card glass ${s.span}`}>
                <div className="bc-icon"><s.icon className="si" /></div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

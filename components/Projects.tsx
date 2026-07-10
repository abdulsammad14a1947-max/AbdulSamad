"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

type Project = {
  tag: string;
  title: string;
  desc: string;
  tech: string[];
  span: string;
};

const PROJECTS: Project[] = [
  { tag: "AI Agent", title: "Autonomous Customer Support AI Agent", desc: "Built an AI support agent capable of handling FAQs, booking requests, and customer follow-ups with memory retention and escalation logic.", tech: ["OpenClaw", "RAG", "CRM"], span: "p-wide" },
  { tag: "Automation", title: "Lead Generation & Outreach Agent", desc: "Developed an AI agent for scraping leads, qualifying prospects, generating outreach messages, and managing CRM updates.", tech: ["Python", "n8n"], span: "p-mid p-tall" },
  { tag: "Infrastructure", title: "OpenClaw Task Automation System", desc: "Configured OpenClaw local agent workflows for autonomous browser tasks, file management, tool execution, and reporting.", tech: ["OpenClaw", "Tools"], span: "p-mid" },
  { tag: "Multi-Agent", title: "E-commerce Fraud Detection System", desc: "Multi-agent system for an e-commerce brand that detects fraudulent transactions using collaborative agents and shared signals.", tech: ["Multi-Agent", "Python", "APIs"], span: "p-mid" },
];

function ProjectCard({ p }: { p: Project }) {
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const glow = e.currentTarget.querySelector<HTMLDivElement>(".glow");
    if (!glow) return;
    const r = e.currentTarget.getBoundingClientRect();
    glow.style.background = `radial-gradient(circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(59,130,246,0.55), transparent 60%)`;
  }
  return (
    <motion.div
      className={`proj-card ${p.span}`}
      onMouseMove={onMove}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="glow" />
      <div className="pc-content">
        <div className="pc-tag">{p.tag}</div>
        <h4>{p.title}</h4>
        <p>{p.desc}</p>
        <div className="pc-tech">
          {p.tech.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal><div className="section-label">05 &mdash; Portfolio</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">Featured work</h2>
          <p className="section-sub">AI agent systems and automation solutions built for real-world impact.</p>
        </Reveal>
        <div className="proj-grid">
          {PROJECTS.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}

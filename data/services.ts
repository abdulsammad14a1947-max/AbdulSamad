// ---------------------------------------------------------------------------
// SERVICES — 14 services, engineering-led. No design/UI/UX-first positioning.
// ---------------------------------------------------------------------------

import {
  Bot, Boxes, Workflow, DatabaseZap, Cog, Braces, Plug, Rocket,
  Code2, Layers, Smartphone, Server, Repeat, ArrowLeftRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  span?: "wide" | "tall";
  featured?: boolean;
};

export const services: Service[] = [
  { icon: Bot, title: "Custom AI Agent Development", desc: "Autonomous agents that plan, call tools, and complete real tasks — designed around your business logic.", span: "wide", featured: true },
  { icon: Boxes, title: "Multi-Agent System Development", desc: "Supervisor architectures, role-based agents, delegation and parallel workflows with shared memory.", featured: true },
  { icon: Workflow, title: "AI Workflow Automation", desc: "End-to-end automation of business processes with agents, n8n and custom pipelines.", featured: true },
  { icon: DatabaseZap, title: "RAG & Knowledge Base Development", desc: "Document ingestion, embedding, vector search and citation-grounded answers your team can trust." },
  { icon: Cog, title: "Agent Harness Engineering", desc: "Execution loops, tool runtimes, checkpoints, retries and error recovery for reliable agents." },
  { icon: Braces, title: "Context Engineering & Management", desc: "Context window strategy, compression, long-term memory and state persistence." },
  { icon: Plug, title: "MCP Server & Tool Integration", desc: "Custom MCP servers so agents can operate Instagram, WordPress, internal APIs and more." },
  { icon: Rocket, title: "Forward Deployed AI Solutions", desc: "Technical discovery → architecture → prototype → production deployment with your team." },
  { icon: Code2, title: "Full-Stack Web Application Development", desc: "React, Next.js, TypeScript frontends with Python/Node.js backends — production-grade." },
  { icon: Layers, title: "SaaS Product Development", desc: "From concept to a deployable product: auth, billing-ready architecture, dashboards, APIs." },
  { icon: Smartphone, title: "Flutter Mobile Application Development", desc: "Cross-platform Android/iOS apps with Firebase, offline-first storage, and clean architecture." },
  { icon: Server, title: "API & Backend Engineering", desc: "FastAPI/Node services, REST APIs, webhooks, authentication and database integration." },
  { icon: Repeat, title: "Business Process Automation", desc: "CRM updates, lead generation, reporting and email flows that run without manual work." },
  { icon: ArrowLeftRight, title: "AI System Integration & Deployment", desc: "Wiring AI into existing stacks, then deploying, monitoring and improving in production." },
];

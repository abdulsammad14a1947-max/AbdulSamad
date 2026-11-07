"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, Linkedin, Github, Download, MapPin, Bot,
  Database, Workflow, Code2, Boxes, Cpu, Radio,
  type LucideIcon,
} from "lucide-react";
import { profile } from "@/data/profile";
import { certificates } from "@/data/certificates";
import { projects } from "@/data/projects";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const TECH: { name: string; icon: LucideIcon }[] = [
  { name: "Python", icon: Cpu },
  { name: "FastAPI", icon: Code2 },
  { name: "OpenAI Agents SDK", icon: Bot },
  { name: "MCP", icon: Radio },
  { name: "Qdrant", icon: Database },
  { name: "Next.js", icon: Code2 },
  { name: "Flutter", icon: Boxes },
  { name: "OpenClaw", icon: Workflow },
  { name: "n8n", icon: Workflow },
  { name: "RAG", icon: Database },
];

/* ------- Animated agent-network visualization (pure SVG + CSS) ------- */
function AgentNetwork() {
  const reduce = useReducedMotion();
  const nodes = [
    { x: 300, y: 260, r: 30, label: "", core: true },                        // Orchestrator
    { x: 130, y: 120, r: 17, label: "Memory" },                               // memory
    { x: 300, y: 92,  r: 17, label: "RAG" },                                  // retrieval
    { x: 472, y: 120, r: 17, label: "Tools" },                                // MCP tools
    { x: 112, y: 262, r: 17, label: "Agents" },                               // multi-agent
    { x: 488, y: 262, r: 17, label: "LLMs" },                                 // models
    { x: 160, y: 400, r: 17, label: "DBs" },                                  // databases
    { x: 300, y: 430, r: 17, label: "MCP" },                                  // apps
    { x: 440, y: 400, r: 17, label: "APIs" },                                 // backend
  ];
  const edges: [number, number][] = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8],
    [2, 7], [3, 5], [4, 6],
  ];

  return (
    <svg
      viewBox="0 0 600 520"
      role="img"
      aria-label="Diagram of an orchestration agent connected to memory, RAG retrieval, tool registry, sub-agents, LLMs, databases, MCP servers and backend APIs"
    >
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D2FF52" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D2FF52" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edgeG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D2FF52" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1C46F5" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="url(#edgeG)"
          strokeWidth={1.4}
          strokeDasharray="5 6"
        >
          {!reduce && (
            <animate
              attributeName="stroke-dashoffset"
              from="0" to="-22"
              dur={`${1.6 + (i % 4) * 0.4}s`}
              repeatCount="indefinite"
            />
          )}
        </line>
      ))}

      {nodes.map((n, i) => (
        <g key={i}>
          {!reduce && i === 0 && (
            <circle cx={n.x} cy={n.y} r={78} fill="url(#coreGlow)">
              <animate attributeName="r" values="66;86;66" dur="5s" repeatCount="indefinite" />
            </circle>
          )}
          {n.core ? (
            <>
              <circle cx={n.x} cy={n.y} r={n.r} fill="rgba(210,255,82,0.14)" stroke="#D2FF52" strokeWidth="1.6" />
              <text x={n.x} y={n.y + 5} textAnchor="middle" className="node-core-label">AI</text>
              <text x={n.x} y={n.y + 52} textAnchor="middle" className="node-label">ORCHESTRATOR</text>
            </>
          ) : (
            <>
              <circle cx={n.x} cy={n.y} r={n.r} fill="rgba(255,255,255,0.06)" stroke="rgba(28,70,245,0.85)" strokeWidth="1.4" />
              {!reduce && (
                <circle cx={n.x} cy={n.y} r={4} fill="#D2FF52">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + (i % 5) * 0.5}s`} repeatCount="indefinite" />
                </circle>
              )}
              <text x={n.x} y={n.y + n.r + 15} textAnchor="middle" className="node-label">{n.label}</text>
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const certCount = certificates.filter((c) => c.image).length;
  const realProjects = projects.filter((p) => !p.draft).length;
  const stats = [
    { target: profile.yearsOverall, suffix: "", label: "Years overall exp." },
    { target: realProjects, suffix: "", label: "Featured builds" },
    { target: certCount, suffix: "", label: "Verified certificates" },
    { target: 10, suffix: "", label: "Agents in prod. build" },
  ];

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div>
            <motion.p className="hero-status glass" {...fadeUp(0.05)}>
              {profile.availabilityLabel}
            </motion.p>

            <h1 className="hero-name">
              <motion.span
                style={{ display: "block" }}
                {...fadeUp(0.12)}
              >
                Abdul <span className="shine-text">Samad</span>
              </motion.span>
            </h1>

            <motion.div className="hero-titles" {...fadeUp(0.24)}>
              <span className="hero-title-pill lead-pill">{profile.titlePrimary}</span>
              <span className="hero-title-pill hero-titlepill-accent">{profile.titleSecondary}</span>
              <span className="hero-title-pill">AI Automation Engineer</span>
              <span className="hero-title-pill">Full-Stack Developer</span>
              <span className="hero-title-pill">Mobile App Developer</span>
            </motion.div>

            <motion.h2 className="hero-headline" {...fadeUp(0.36)}>
              {profile.headline}
            </motion.h2>
            <motion.p className="hero-desc" {...fadeUp(0.46)}>
              {profile.intro}
            </motion.p>

            <motion.div className="hero-actions" {...fadeUp(0.56)}>
              <a className="btn-primary" href="#projects">
                Explore Projects <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </a>
              <a className="btn-ghost" href="#contact">Contact Me</a>
            </motion.div>

            <motion.div className="hero-meta" {...fadeUp(0.66)}>
              <a
                className="hero-social"
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} strokeWidth={1.75} aria-hidden="true" /> LinkedIn
              </a>
              <a
                className="hero-social"
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} strokeWidth={1.75} aria-hidden="true" /> GitHub
              </a>
              {profile.resume && (
                <a className="hero-social" href={profile.resume} download>
                  <Download size={16} strokeWidth={1.75} aria-hidden="true" /> Resume
                </a>
              )}
              <span className="hero-social" style={{ cursor: "default" }}>
                <MapPin size={16} strokeWidth={1.75} aria-hidden="true" /> {profile.location}
              </span>
            </motion.div>

            <motion.div className="hero-stats" {...fadeUp(0.76)}>
              {stats.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <h3>
                    {s.target}
                    {s.suffix}
                  </h3>
                  <p>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="agentnet">
              <AgentNetwork />
              <div className="agentnet-chip chip-a" aria-hidden="true">
                <span className="dot" style={{ background: "var(--lime)" }} />
                <span><b>Multi-agent</b> orchestration</span>
              </div>
              <div className="agentnet-chip chip-b" aria-hidden="true">
                <span className="dot" style={{ background: "var(--blue)" }} />
                <span><b>RAG</b> retrieval · vector DB</span>
              </div>
              <div className="agentnet-chip chip-c" aria-hidden="true">
                <span className="dot" style={{ background: "var(--text)" }} />
                <span><b>MCP</b> tools · APIs · guarded execution</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* technology ticker */}
      <div className="tech-ticker" aria-label="Core technologies">
        <div className="tech-track">
          {[...TECH, ...TECH].map((t, i) => (
            <span className="tech-chip" key={i} aria-hidden={i >= TECH.length}>
              <t.icon size={16} aria-hidden="true" />
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

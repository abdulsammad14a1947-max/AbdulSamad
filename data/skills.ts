// ---------------------------------------------------------------------------
// SKILLS — interactive skills dashboard data.
// level: "hands-on"  = built and shipped real work with it
//        "familiar"  = working knowledge, used in dev/learning projects
//        "learning"  = actively learning, not yet shipped
// No fake percentages or invented expertise — keep statuses honest.
// ---------------------------------------------------------------------------

export type SkillLevel = "hands-on" | "familiar" | "learning";

export type Skill = {
  name: string;
  level: SkillLevel;
  note?: string;
};

export type SkillCategory = {
  id: string;
  name: string;
  blurb: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "agentic-ai",
    name: "Agentic AI",
    blurb: "Autonomous systems that plan, act, and self-correct.",
    skills: [
      { name: "Agentic AI architecture", level: "hands-on" },
      { name: "Single-agent systems", level: "hands-on" },
      { name: "Multi-agent systems", level: "hands-on" },
      { name: "Agent orchestration", level: "hands-on" },
      { name: "Agent delegation & routing", level: "hands-on" },
      { name: "Planning & reasoning loops", level: "hands-on" },
      { name: "Tool calling", level: "hands-on" },
      { name: "Structured outputs", level: "hands-on" },
      { name: "LLM integration", level: "hands-on" },
      { name: "AI-powered applications", level: "hands-on" },
    ],
  },
  {
    id: "fde",
    name: "Forward Deployed Engineering",
    blurb: "From customer discovery to production deployment.",
    skills: [
      { name: "Customer technical discovery", level: "hands-on" },
      { name: "Operational problem analysis", level: "hands-on" },
      { name: "Technical requirement analysis", level: "hands-on" },
      { name: "Solution architecture", level: "hands-on" },
      { name: "Rapid AI prototyping", level: "hands-on" },
      { name: "Enterprise API integration", level: "hands-on" },
      { name: "Production deployment", level: "hands-on" },
      { name: "Cross-functional collaboration", level: "hands-on" },
      { name: "Business → software translation", level: "hands-on" },
    ],
  },
  {
    id: "harness",
    name: "Agent Harness Engineering",
    blurb: "Runtimes, execution loops, and reliability.",
    skills: [
      { name: "Agent runtime architecture", level: "hands-on" },
      { name: "Tool execution environments", level: "hands-on" },
      { name: "Observe → plan → act → evaluate loops", level: "hands-on" },
      { name: "State management", level: "hands-on" },
      { name: "Checkpointing & retries", level: "hands-on" },
      { name: "Error recovery", level: "hands-on" },
      { name: "Tool registries", level: "familiar" },
      { name: "Permissions & access control", level: "hands-on" },
      { name: "Sandboxing", level: "familiar" },
      { name: "Human-in-the-loop approvals", level: "hands-on" },
      { name: "Tracing & observability", level: "familiar" },
      { name: "Agent evaluation", level: "hands-on" },
    ],
  },
  {
    id: "context",
    name: "Context Engineering",
    blurb: "Memory, context windows, and state persistence.",
    skills: [
      { name: "Context selection & assembly", level: "hands-on" },
      { name: "Context window management", level: "hands-on" },
      { name: "Context compression", level: "hands-on" },
      { name: "Conversation history", level: "hands-on" },
      { name: "Persistent memory", level: "hands-on" },
      { name: "Short & long-term memory", level: "hands-on" },
      { name: "Session management", level: "hands-on" },
      { name: "Retrieval-based context", level: "hands-on" },
      { name: "Summarization", level: "hands-on" },
      { name: "Context isolation", level: "familiar" },
    ],
  },
  {
    id: "rag",
    name: "RAG & Vector Databases",
    blurb: "Retrieval pipelines that ground answers in real data.",
    skills: [
      { name: "Retrieval-Augmented Generation", level: "hands-on" },
      { name: "Document ingestion & parsing", level: "hands-on" },
      { name: "Text chunking", level: "hands-on" },
      { name: "Embedding generation", level: "hands-on" },
      { name: "Semantic search", level: "hands-on" },
      { name: "Hybrid search", level: "familiar" },
      { name: "Metadata filtering", level: "hands-on" },
      { name: "Reranking", level: "familiar" },
      { name: "Vector indexing (Qdrant)", level: "hands-on" },
      { name: "Retrieval evaluation", level: "familiar" },
      { name: "Citation-based responses", level: "hands-on" },
      { name: "Knowledge base development", level: "hands-on" },
    ],
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    blurb: "Models, pipelines, and evaluation.",
    skills: [
      { name: "Python", level: "hands-on" },
      { name: "Large Language Models", level: "hands-on" },
      { name: "Model APIs & inference", level: "hands-on" },
      { name: "Prompt engineering", level: "hands-on" },
      { name: "Structured generation", level: "hands-on" },
      { name: "Hugging Face Transformers", level: "familiar" },
      { name: "PyTorch", level: "learning" },
      { name: "AI evaluation", level: "familiar" },
    ],
  },
  {
    id: "backend",
    name: "Python & Backend Engineering",
    blurb: "APIs and services that hold systems together.",
    skills: [
      { name: "FastAPI", level: "hands-on" },
      { name: "Pydantic", level: "hands-on" },
      { name: "REST API design", level: "hands-on" },
      { name: "Webhooks", level: "hands-on" },
      { name: "Node.js", level: "hands-on" },
      { name: "Authentication & authorization", level: "hands-on" },
      { name: "Background jobs", level: "familiar" },
      { name: "API security", level: "hands-on" },
    ],
  },
  {
    id: "mcp",
    name: "MCP & Tool Integration",
    blurb: "Model Context Protocol servers and external tools.",
    skills: [
      { name: "Model Context Protocol", level: "hands-on" },
      { name: "MCP server development", level: "hands-on" },
      { name: "MCP clients", level: "hands-on" },
      { name: "Custom tool development", level: "hands-on" },
      { name: "Third-party API integration", level: "hands-on" },
      { name: "Browser automation", level: "hands-on" },
      { name: "Secure tool access", level: "hands-on" },
    ],
  },
  {
    id: "multi-agent",
    name: "Multi-Agent Architecture",
    blurb: "Role-based agents that work together.",
    skills: [
      { name: "Supervisor architectures", level: "hands-on" },
      { name: "Role-based agents", level: "hands-on" },
      { name: "Shared memory", level: "hands-on" },
      { name: "Sequential workflows", level: "hands-on" },
      { name: "Parallel workflows", level: "hands-on" },
      { name: "Task routing", level: "hands-on" },
      { name: "Agent communication", level: "hands-on" },
      { name: "Multi-agent error handling", level: "hands-on" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Engineering",
    blurb: "Interfaces that make systems usable.",
    skills: [
      { name: "React", level: "hands-on" },
      { name: "Next.js", level: "hands-on" },
      { name: "TypeScript", level: "hands-on" },
      { name: "JavaScript (ES2024)", level: "hands-on" },
      { name: "Tailwind CSS", level: "hands-on" },
      { name: "HTML5 / CSS3", level: "hands-on" },
      { name: "Component architecture", level: "hands-on" },
      { name: "State management", level: "hands-on" },
      { name: "Performance optimization", level: "familiar" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Application Engineering",
    blurb: "Cross-platform apps for Android and iOS.",
    skills: [
      { name: "Flutter", level: "hands-on" },
      { name: "Dart", level: "hands-on" },
      { name: "Riverpod", level: "hands-on" },
      { name: "Bloc / Cubit", level: "familiar" },
      { name: "Provider / GetX", level: "familiar" },
      { name: "Firebase Auth & Firestore", level: "hands-on" },
      { name: "Push notifications (FCM)", level: "hands-on" },
      { name: "REST API integration", level: "hands-on" },
      { name: "SQLite / Hive / Isar", level: "hands-on" },
      { name: "Clean Architecture / MVVM", level: "hands-on" },
      { name: "Play Store / App Store builds", level: "hands-on" },
      { name: "Widget & integration testing", level: "familiar" },
    ],
  },
  {
    id: "databases",
    name: "Database Engineering",
    blurb: "Relational, document, and vector stores.",
    skills: [
      { name: "PostgreSQL", level: "hands-on" },
      { name: "Neon (serverless Postgres)", level: "hands-on" },
      { name: "SQLite", level: "hands-on" },
      { name: "Prisma", level: "hands-on" },
      { name: "MongoDB", level: "familiar" },
      { name: "Qdrant (vector DB)", level: "hands-on" },
      { name: "Redis", level: "familiar" },
      { name: "Object storage", level: "hands-on" },
      { name: "Indexing & optimization", level: "familiar" },
    ],
  },
  {
    id: "automation",
    name: "Automation Engineering",
    blurb: "Business workflows that run themselves.",
    skills: [
      { name: "OpenClaw", level: "hands-on" },
      { name: "n8n", level: "hands-on" },
      { name: "Zapier", level: "familiar" },
      { name: "CRM integrations", level: "hands-on" },
      { name: "Lead generation systems", level: "hands-on" },
      { name: "Customer support automation", level: "hands-on" },
      { name: "Email & reporting automation", level: "hands-on" },
      { name: "Human approval workflows", level: "hands-on" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & Deployment",
    blurb: "Shipping to production, reliably.",
    skills: [
      { name: "Vercel", level: "hands-on" },
      { name: "Firebase (full stack)", level: "hands-on" },
      { name: "Git & GitHub Actions", level: "hands-on" },
      { name: "Docker", level: "familiar" },
      { name: "Uvicorn / serverless runs", level: "hands-on" },
      { name: "Azure AI services", level: "familiar" },
      { name: "Neon / managed Postgres", level: "hands-on" },
    ],
  },
  {
    id: "quality",
    name: "Testing & Security",
    blurb: "Evaluation, guardrails, and safe deployment.",
    skills: [
      { name: "Automated testing (pytest)", level: "hands-on" },
      { name: "Integration testing", level: "hands-on" },
      { name: "Agent & RAG evaluation", level: "hands-on" },
      { name: "Guardrails & validation", level: "hands-on" },
      { name: "Input/output validation", level: "hands-on" },
      { name: "Secure production deployment", level: "hands-on" },
      { name: "Logging & monitoring", level: "hands-on" },
      { name: "Observability", level: "familiar" },
    ],
  },
];

export const levelLabels: Record<SkillLevel, string> = {
  "hands-on": "Hands-on",
  familiar: "Familiar",
  learning: "Learning",
};

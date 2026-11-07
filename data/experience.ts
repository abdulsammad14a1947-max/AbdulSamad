// ---------------------------------------------------------------------------
// EXPERIENCE — verified timeline. Do not invent companies or dates.
// 4 years = overall professional experience; dedicated AI engineering
// phase is labeled honestly below.
// ---------------------------------------------------------------------------

export type ExperienceEntry = {
  title: string;
  org: string;
  period: string;
  kind: "ai" | "software";
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "AI Agent & Automation Engineer",
    org: "Independent · Client projects",
    period: "2025 — Present",
    kind: "ai",
    points: [
      "Design and deploy autonomous AI agents for customer support, lead generation, scheduling, and business task automation.",
      "Build OpenClaw-based intelligent workflows with custom skill integration and persistent memory handling.",
      "Develop multi-agent systems, including a fraud detection platform with parallel agent execution, weighted scoring orchestration and compliance guardrails.",
      "Implement RAG knowledge bases with vector stores to ground AI responses in real material.",
      "Create Model Context Protocol (MCP) servers connecting agents to Instagram, WordPress and Remotion.",
      "Integrate AI systems with APIs, CRMs, calendars, email tools and web services; apply validation guardrails, monitoring and evaluation.",
    ],
  },
  {
    title: "Full-Stack & Mobile Application Development",
    org: "Overall professional experience",
    period: "2022 — Present",
    kind: "software",
    points: [
      "Four years of overall professional software experience across web and application development.",
      "Build complete applications with React, Next.js, TypeScript and Tailwind CSS on the frontend; Python/FastAPI and Node.js on the backend.",
      "Develop cross-platform mobile applications with Flutter and Dart, backed by Firebase and local persistence layers.",
      "Work with PostgreSQL, Neon, SQLite, Prisma and object storage in production deployments.",
    ],
  },
];

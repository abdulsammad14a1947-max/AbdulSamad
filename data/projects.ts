// ---------------------------------------------------------------------------
// PROJECTS — real project history. Case studies are data-driven; add a new
// project by appending an entry here and dropping its screenshots into
// /public/images/projects/<slug>/.
// draft: true  => shows in gallery with an honest "details being verified" badge,
//                but gets no detail page until content is verified.
// ---------------------------------------------------------------------------

export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  year?: string;
  status: "shipped" | "internal" | "in-progress" | "draft";
  featured?: boolean;
  draft?: boolean;
  sections?: {
    problem?: string;
    solution?: string;
    architecture?: string[];
    implementation?: string[];
    results?: string[];
  };
  stack: string[];
  features?: string[];
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "agentic-fraud-detection",
    name: "Multi-Agent Fraud Detection System",
    category: "Multi-Agent AI · Backend Security",
    tagline:
      "A multi-agent detection platform where 10 specialized AI agents analyze every transaction in parallel, orchestrated by a weighted scoring engine.",
    status: "internal",
    featured: true,
    sections: {
      problem:
        "Manual fraud review does not scale. Transactions arrive in real time, fraudsters switch tactics — device spoofing, IP anomalies, velocity abuse, synthetic identities — and human reviewers need to understand why a transaction was flagged, not just that it was flagged. The goal was a system that could evaluate every transaction instantly, from multiple independent analytical angles, and still produce explainable decisions with a full audit trail.",
      solution:
        "A FastAPI backend built around a multi-agent orchestration layer. Each transaction is dispatched to specialized agents in parallel — behavior, biometric, network, device, transaction, identity, account, graph, and threat intelligence agents — each scoring a specific risk dimension. An orchestrator agent aggregates the outputs using configurable weighted scoring, applies business rules and thresholds through a rules engine, and produces one of three decisions: approve, reject, or manual review. A compliance guardrail agent validates every decision against policy before it leaves the system.",
      architecture: [
        "Ingestion & capture — checkout and API gateway events flow into the fraud service, with real-time transmission capture and payment capture endpoints.",
        "Parallel agent execution — 10 specialized agents analyze the same transaction simultaneously across behavioral, biometric, network, device, identity, account, graph, and threat dimensions.",
        "Orchestration — an orchestrator agent re-runs aggregation, validates values, and coordinates a business rules engine with weighted scoring per agent (behavior 20%, biometric 10%, network 15%, device 15%, identity 10%, account 10%, graph 10%, explainability 9%).",
        "Risk engine & decision — weighted scores combine into a composite risk score mapped to thresholds: <0.3 approve, 0.3–0.7 approve with monitoring, 0.7–1.0 manual review, ≥1.0 reject.",
        "Explainability agent — generates human-readable reasoning so reviewers see exactly which signals drove each decision.",
        "Persistence & audit — decision records, audit logs, embeddings, and real-time websocket events are stored in PostgreSQL with Qdrant used for vector similarity.",
      ],
      implementation: [
        "OpenAI Agents SDK for agent definitions, delegation and tool calling.",
        "NetworkX for the transaction relationship graph — linked accounts, devices, IPs and shared signals feed the graph intelligence agent.",
        "FastAPI with Pydantic v2 schemas, SQLAlchemy models, JWT authentication with RBAC, and WebSocket channels for live risk events.",
        "Compliance guardrail layer with safety policies, bias & fairness rules, compliance rules, human-review policies, thresholds and escalation config.",
        "Data validation service plus fraud-pattern and velocity-checker tools, secured access, PII masking and encryption for sensitive fields.",
        "Automated test suites covering scenarios, validation service and guardrails — the evolving build progressed from a 6-agent / 35-test iteration to the full 10-agent platform.",
      ],
      results: [
        "Every transaction is scored across 10 independent analytical dimensions with a single explainable composite decision.",
        "Configurable weighted scoring and thresholds mean risk appetite changes are configuration changes, not rewrites.",
        "Full decision transparency: audit logs, agent reasoning and per-agent weights/latency/accuracy are observable.",
        "Guardrail-validated outputs with human-in-the-loop manual review for high-risk cases.",
      ],
    },
    stack: [
      "FastAPI",
      "OpenAI Agents SDK",
      "Python 3.12+",
      "NetworkX",
      "PostgreSQL",
      "SQLite",
      "SQLAlchemy",
      "Pydantic v2",
      "JWT / RBAC",
      "WebSockets",
      "Redis",
      "Qdrant",
      "Automated testing",
    ],
    features: [
      "10-agent parallel execution",
      "Weighted scoring orchestration",
      "Compliance guardrails",
      "Explainable decisions",
      "Risk graph intelligence",
      "Live dashboard + websocket feed",
    ],
    images: [
      "/images/projects/fraud-detection/architecture-enterprise.png",
      "/images/projects/fraud-detection/architecture-overview.png",
    ],
  },
  {
    slug: "mcp-servers",
    name: "MCP Servers — Instagram, WordPress & Remotion",
    category: "Model Context Protocol · Agent Tooling",
    tagline:
      "A suite of custom MCP servers that plug real-world platforms — Instagram, WordPress and Remotion — directly into AI agents as callable tools.",
    status: "shipped",
    featured: true,
    sections: {
      problem:
        "LLM agents are only as useful as the tools they can reach. Out of the box, agents cannot post to Instagram, publish content to WordPress, or render videos with Remotion — the three workflows that matter for a content pipeline. Building a one-off integration per agent is fragile and doesn't transfer between projects.",
      solution:
        "Three Model Context Protocol servers that expose Instagram, WordPress and Remotion as standard, agent-agnostic tool registries. Any MCP-compatible client — Claude Desktop, OpenClaw agents, custom orchestrators — can discover and call the tools the same way, whether that's publishing content, managing media, or generating programmatic video.",
      architecture: [
        "Each server follows the MCP client/server model: the agent (MCP client) discovers a tool registry over the protocol and invokes tools with typed parameters.",
        "Instagram server — content and account interaction tools for social automation flows.",
        "WordPress server — publishing and content-management tools that let agents create, edit and organize posts natively in a WordPress site.",
        "Remotion server — tools for driving Remotion's programmatic video rendering, so agents can compose and render video from instructions.",
      ],
      implementation: [
        "Tool schemas and typed parameters so model-driven calls validate before execution.",
        "Secure, explicit tool boundaries — each server exposes only the operations an agent should be able to perform.",
        "Designed for reuse: the same servers plug into multiple agent stacks without rewriting integrations.",
      ],
      results: [
        "Agents can post and publish across Instagram and WordPress without bespoke glue code per project.",
        "Video rendering becomes an agent-callable tool rather than a manual export workflow.",
        "A reusable template pattern for connecting any platform to an agentic stack via MCP.",
      ],
    },
    stack: [
      "Model Context Protocol",
      "MCP SDK",
      "Tool registries",
      "JSON-RPC",
      "Third-party platform APIs",
      "Claude Desktop / agent clients",
    ],
    features: [
      "Instagram automation tools",
      "WordPress publishing tools",
      "Remotion programmatic video tools",
      "Agent-agnostic tool discovery",
      "Secure scoped tool access",
    ],
    images: [
      "/images/projects/mcp-servers/instagram-mcp-flow.png",
    ],
  },
  {
    slug: "ai-teaching-assistant",
    name: "OpenCode AI Teaching Assistant",
    category: "RAG · AI Application",
    tagline:
      "A bilingual RAG-powered tutoring platform that retrieves grounded answers, evaluates student work against rubrics, and generates structured feedback.",
    status: "shipped",
    featured: true,
    sections: {
      problem:
        "Students in this program study in English but often think and ask questions in Roman Urdu. Generic chatbots answer without grounding in course material, hallucinate, and never actually evaluate a student's work against the rubric a teacher would use.",
      solution:
        "A full-stack AI tutoring application: a Next.js frontend over a FastAPI backend with a Qdrant vector database. Course material is ingested, chunked, embedded and indexed. Student questions trigger semantic retrieval, and answers are generated from the retrieved context in English or Roman Urdu — matching how students actually ask. Assignment evaluation is rubric-based: submissions are scored against defined criteria and structured, actionable feedback is generated rather than generic praise.",
      architecture: [
        "Document ingestion pipeline — parsing, chunking and embedding course content into Qdrant.",
        "Retrieval layer — semantic search with context assembly into the prompt window.",
        "Generation & evaluation — grounded answering in English/Roman Urdu plus rubric-based scoring with structured feedback.",
        "Context management — conversation history and retrieval context managed so multi-turn tutoring stays coherent.",
        "Integration — FastAPI services consumed by a Next.js frontend.",
      ],
      implementation: [
        "Qdrant for vector indexing; chunking tuned for course-material structure.",
        "Rubric evaluation pipeline with per-criterion scoring and weakness detection.",
        "Bilingual handling so Roman Urdu queries retrieve and answer correctly.",
        "Structured outputs to keep feedback machine-readable and presentable in the UI.",
      ],
      results: [
        "Students get answers grounded in the actual course material, in the language they ask in.",
        "Feedback mirrors teacher-style rubric evaluation instead of generic chatbot replies.",
        "Retrieved context means answers cite the material rather than hallucinating.",
      ],
    },
    stack: ["Next.js", "FastAPI", "Python", "Qdrant", "RAG", "Embeddings", "Structured outputs"],
    features: [
      "Bilingual Q&A (English / Roman Urdu)",
      "Grounded knowledge retrieval",
      "Rubric-based evaluation",
      "Structured feedback generation",
      "Context & history management",
    ],
    images: [],
  },
  {
    slug: "openclaw-automation",
    name: "OpenClaw Automation System",
    category: "Agentic Automation",
    tagline:
      "Autonomous agent workflows that handle real operational work — browser tasks, file management, tool execution, reporting and integrations — with persistent context.",
    status: "internal",
    featured: true,
    sections: {
      problem:
        "Business operations run on repetitive digital work: browser-based data gathering, file handling, follow-ups, report preparation. The work exists between systems, where no official automation API exists.",
      solution:
        "An OpenClaw-based automation system configured with custom skills and persistent memory. The agent executes autonomous workflows across browser tasks, file management and tool execution, maintaining context between sessions so follow-up work resumes where it left off — with integrations into CRMs, calendars, email and web services, including human approval steps where business decisions are involved.",
      architecture: [
        "Autonomous workflow execution — observe, plan, act loops driven by configured skills.",
        "Browser automation for tasks where no API exists.",
        "Tool execution and file management as first-class agent capabilities.",
        "Persistent context and memory management across sessions.",
        "External integrations: CRMs, calendars, email and web services.",
      ],
      implementation: [
        "Custom skill integration on the OpenClaw runtime.",
        "Guardrails and validation on agent outputs; monitored execution.",
        "Scheduling agents, lead generation agents and customer support flows built on the same runtime.",
      ],
      results: [
        "Recurring browser and file-workflows run autonomously instead of manually.",
        "Inbound lead and outreach processes automated end-to-end.",
        "Persistent memory means multi-step business processes survive across sessions.",
      ],
    },
    stack: ["OpenClaw", "Browser automation", "Python", "n8n", "CRM APIs", "Webhooks"],
    features: [
      "Autonomous workflows",
      "Browser automation",
      "Tool execution & file management",
      "Persistent context & memory",
      "External integrations",
      "Human approval steps",
    ],
    images: [
      "/images/projects/openclaw-automation/lead-generation.png",
    ],
  },
  {
    slug: "hcm-lite",
    name: "HCM Lite — AI-Powered HR Management",
    category: "Full-Stack · AI Application",
    tagline:
      "A complete human-capital-management platform for Admin, HR and Employee roles — attendance, leaves, payroll and an AI assistant that answers real questions about company data.",
    status: "shipped",
    featured: true,
    sections: {
      problem:
        "Small and mid-sized organizations run HR work — employee records, attendance, leave requests, payroll preparation — across disconnected spreadsheets and ad-hoc files. Every question (\"who is on leave today?\", \"what is my leave balance?\", \"is payroll ready?\") turns into a manual hunt across files, and none of it is auditable. Smaller teams don't need enterprise SAP-grade suites; they need one connected system that still enforces role-appropriate access.",
      solution:
        "HCM Lite: an AI-powered HR management system with three strictly separated roles. Admin has full control, company analytics and payroll finalization. HR manages employee records, approves leaves and prepares payroll. Employees self-serve check-in/out, leave applications and payslips. On top of the operational layer, a Smart AI Assistant (OpenAI GPT-4o) answers natural-language questions from real company data — dashboard summaries, leave balances, policy Q&A and data insights — wired through explicit AI-tool permissions so it only ever surfaces what the asking role is allowed to see.",
      architecture: [
        "Frontend — React + Next.js with Tailwind CSS: a modern, responsive UI with role-based dashboards (Admin / HR / Employee, each with its own views and actions).",
        "Backend — Python (FastAPI) plus Node.js holding the business logic: authentication and authorization, API endpoints, and rules for attendance, leaves and payroll.",
        "AI layer — OpenAI GPT-4o smart assistant with tool permissions limited to Dashboard Summary, Smart Leave, Policy Q&A and Data Insights.",
        "Security layer — JWT authentication, role-based access control, data privacy and secured APIs; HR approves what HR should approve, employees see only their own data.",
        "Database layer — Employee, attendance, leave and payroll records with settings and logs; PostgreSQL, MongoDB and Firebase used across the stack.",
        "Camera attendance — camera check-in verified against an in-office location radius.",
      ],
      implementation: [
        "Role-based dashboards: Admin (full control, company analytics, finalize payroll, total-employee overview), HR (manage employees, approve leaves, prepare payroll, pending-leave queue) and Employee (check in/out, apply for leave, view payslip, leave balance).",
        "Nine modules covering 25+ features: employee management, attendance with camera check-in, leave management, payroll and payslips, analytics dashboards, AI assistant and secure three-role access.",
        "AI assistant connects to live data rather than static text — asking \"how many employees are on leave today?\" returns the real count with a breakdown by leave type.",
        "Camera attendance as a bonus track: face matching plus location verification (in-office radius check) before check-in is accepted.",
        "Guided 5-step operating flow: Admin sets up the company → HR registers employees → employees use the system → HR approves and processes → everyone gets AI insights.",
      ],
      results: [
        "One connected system that ends the spreadsheet version of HR for the organization.",
        "Every record — attendance, leave, payroll — lives in real data, not ad-hoc files, and feeds the analytics dashboards.",
        "The AI assistant turns operations into answers: leave counts, balances, policy questions and payroll summaries in plain language, always scoped by role.",
        "Role separation enforced technically (JWT + role-based access), not just by UI convention.",
      ],
    },
    stack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "Node.js",
      "OpenAI GPT-4o",
      "JWT Authentication",
      "Role-Based Access",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
    features: [
      "3 roles: Admin, HR, Employee",
      "9 modules · 25+ features",
      "Smart AI Assistant on real data",
      "Camera attendance (face + location)",
      "Payroll & payslips",
      "Analytics dashboards",
      "JWT + role-based security",
    ],
    images: [
      "/images/projects/hcm-lite/product-overview.png",
      "/images/projects/hcm-lite/tech-stack.png",
    ],
  },
  {
    slug: "ai-video-editor",
    name: "AI Video Editor",
    category: "AI Agent Skill · Video Editing",
    tagline:
      "A free AI video editor that auto-cuts silent parts — edit your videos smarter, not harder.",
    status: "shipped",
    featured: true,
    sections: {
      problem:
        "Turning raw footage into something watchable means scrubbing through the timeline and cutting silent or boring stretches by hand — the slowest, most tedious part of editing. The goal was an editor that removes that work automatically, stays completely free, and doesn't lock the user into a single AI provider.",
      solution:
        "A free AI video editor built as an AI agent skill: it detects and auto-cuts silent parts so the boring stretches disappear automatically, keeps the editing flow simple and fast, and works with any AI model — bring your favorite model instead of being locked to one. Built for personal use and offered 100% free.",
    },
    stack: ["AI agent skill", "Any AI model"],
    features: [
      "Auto-cut silent parts",
      "Simple & fast editing",
      "Works with any AI model",
      "100% free",
    ],
    images: [
      "/images/projects/ai-video-editor/banner.png",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);

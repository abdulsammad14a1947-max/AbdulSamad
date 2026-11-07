// ---------------------------------------------------------------------------
// SPECIALIZATIONS — the three core engineering sections (Phase 5).
// ---------------------------------------------------------------------------

export type Specialization = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  groups: { group: string; items: string[] }[];
};

export const specializations: Specialization[] = [
  {
    id: "agentic-fde",
    tag: "Primary specialization",
    title: "Agentic AI & Forward Deployed Engineering",
    subtitle: "Autonomous agents · customer-side engineering",
    desc: "My core work: architecting and shipping autonomous AI agents, and doing the forward-deployed engineering that takes them into a customer's real environment — from technical discovery to production.",
    groups: [
      {
        group: "Agentic AI",
        items: [
          "Agentic AI architecture", "Single-agent systems", "Multi-agent systems",
          "Agent orchestration & delegation", "Planning and reasoning", "Tool calling",
          "Structured outputs", "Agent communication", "Workflow execution",
          "LLM integration", "AI-powered applications",
        ],
      },
      {
        group: "Forward Deployed Engineering",
        items: [
          "Customer technical discovery", "Operational problem analysis", "Requirements analysis",
          "Solution architecture", "Rapid AI prototyping", "Customer-specific integrations",
          "Enterprise API integration", "Production implementation", "Deployment & optimization",
          "Cross-functional collaboration", "Business requirements → working software",
        ],
      },
      {
        group: "Agent Harness Engineering",
        items: [
          "Agent runtime architecture", "Tool execution environments", "Execution loops",
          "Observe → plan → act → evaluate", "State management", "Checkpointing",
          "Retry mechanisms & error recovery", "Tool registries", "Permissions & access control",
          "Sandboxing", "Human-in-the-loop approvals", "Tracing & observability", "Agent evaluation",
        ],
      },
      {
        group: "Context Engineering & Management",
        items: [
          "Context selection & assembly", "Context windows", "Context compression",
          "Conversation history", "Persistent memory", "Short & long-term memory",
          "Session management", "Retrieval-based context", "Summarization", "Context isolation",
        ],
      },
      {
        group: "Multi-Agent Systems",
        items: [
          "Supervisor architecture", "Role-based agents", "Agent delegation",
          "Shared memory", "Sequential & parallel workflows", "Collaborative agents",
          "Task routing", "Agent communication", "Multi-agent error handling",
        ],
      },
      {
        group: "MCP & Tool Integration",
        items: [
          "Model Context Protocol", "MCP server development", "MCP clients",
          "Custom tool development", "Third-party API integration", "Browser automation",
          "External integrations", "Secure tool access",
        ],
      },
    ],
  },
  {
    id: "rag-automation",
    tag: "Second specialization",
    title: "RAG, AI/ML & Automation Engineering",
    subtitle: "Retrieval pipelines · intelligent automation",
    desc: "Grounding AI in real knowledge and automating the operational work around it — from document ingestion pipelines to full business workflow automation with quality and security built in.",
    groups: [
      {
        group: "RAG Engineering",
        items: [
          "Retrieval-Augmented Generation", "Document ingestion & processing", "Document parsing",
          "Text chunking", "Embedding generation", "Vector embeddings", "Semantic search",
          "Hybrid search", "Metadata filtering", "Reranking", "Vector indexing",
          "Retrieval evaluation", "Citation-based responses", "Knowledge base development",
        ],
      },
      {
        group: "AI & Machine Learning",
        items: [
          "Python", "Hugging Face Transformers", "PyTorch", "Large Language Models",
          "Model APIs & inference", "Model integration", "Prompt engineering",
          "Structured generation", "AI evaluation",
        ],
      },
      {
        group: "Databases & Vector Databases",
        items: [
          "PostgreSQL", "Neon", "MongoDB", "SQLite", "Prisma", "Qdrant",
          "Vector databases", "Redis", "Database indexing & optimization", "Object storage",
        ],
      },
      {
        group: "Automation Engineering",
        items: [
          "AI workflow automation", "OpenClaw", "n8n", "Zapier", "Browser automation",
          "Business workflow automation", "CRM integrations", "Lead generation",
          "Customer support automation", "Scheduling automation", "Email & reporting automation",
          "Human approval workflows",
        ],
      },
      {
        group: "AI Quality & Security",
        items: [
          "Agent evaluation", "RAG evaluation", "Unit & integration testing", "Guardrails",
          "Input/output validation", "Tool permissions", "Authentication & authorization",
          "Error handling", "Logging & monitoring", "Observability", "Secure production deployment",
        ],
      },
    ],
  },
  {
    id: "fullstack-mobile",
    tag: "Equal-stack specialization",
    title: "Full-Stack & Mobile Application Engineering",
    subtitle: "Web platforms · Android & iOS apps",
    desc: "The complete application layer around the AI: production frontend, backend and mobile engineering that turns agent capabilities into products people use.",
    groups: [
      {
        group: "Frontend Development",
        items: [
          "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS",
          "Responsive development", "Component architecture", "State management",
          "API integration", "Performance optimization",
        ],
      },
      {
        group: "Backend Development",
        items: [
          "Python", "FastAPI", "Node.js", "REST APIs", "Webhooks", "Pydantic",
          "Backend architecture", "Authentication", "Authorization", "Server-side development",
          "Database integration", "API security", "Background jobs",
        ],
      },
      {
        group: "Flutter & Dart",
        items: [
          "Flutter", "Dart", "Cross-platform mobile applications", "Android development",
          "iOS development", "Responsive mobile interfaces", "Widget architecture", "Application lifecycle",
        ],
      },
      {
        group: "Mobile State & Firebase",
        items: [
          "Riverpod", "Bloc / Cubit", "Provider", "GetX", "Firebase Authentication",
          "Cloud Firestore", "Realtime Database", "Firebase Storage",
          "Cloud Messaging & push notifications", "Security rules",
        ],
      },
      {
        group: "Mobile APIs & Storage",
        items: [
          "REST API integration", "JSON serialization", "Third-party SDK integration",
          "Secure login & social auth", "Payment API integration", "Maps integration", "Deep linking",
          "SQLite", "Hive", "Isar", "Offline-first architecture", "Data synchronization",
        ],
      },
      {
        group: "Mobile Architecture & Delivery",
        items: [
          "Clean Architecture", "MVVM", "Repository patterns", "Reusable components",
          "Error handling", "Performance optimization", "Mobile security",
          "Unit / widget / integration testing", "Android & iOS builds",
          "Google Play preparation", "App Store preparation", "App performance monitoring",
        ],
      },
    ],
  },
];

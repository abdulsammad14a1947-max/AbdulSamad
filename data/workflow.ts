// ---------------------------------------------------------------------------
// ENGINEERING WORKFLOW — 6-step process visualization data.
// ---------------------------------------------------------------------------

export type WorkflowStep = {
  num: string;
  title: string;
  desc: string;
  details: string[];
};

export const workflowSteps: WorkflowStep[] = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understand the business problem and technical requirements.",
    details: ["Technical discovery calls", "Operational workflow mapping", "Requirement analysis"],
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Select the right models, frameworks, APIs, agents, databases and infrastructure.",
    details: ["Model & tool selection", "Agent topology design", "Data & vector store planning"],
  },
  {
    num: "03",
    title: "Development",
    desc: "Build the agents, workflows, backend, frontend and integrations.",
    details: ["Agent & harness implementation", "API / MCP integrations", "Application development"],
  },
  {
    num: "04",
    title: "Testing",
    desc: "Test functionality, security, edge cases, reliability and performance.",
    details: ["Automated test suites", "Agent & RAG evaluation", "Security & guardrails"],
  },
  {
    num: "05",
    title: "Deployment",
    desc: "Deploy the complete application and configure production environments.",
    details: ["CI/CD & environment config", "Secrets & access control", "Database migration"],
  },
  {
    num: "06",
    title: "Monitoring & Optimization",
    desc: "Monitor execution, evaluate results, fix failures and improve performance.",
    details: ["Tracing & observability", "Error monitoring", "Continuous improvement"],
  },
];

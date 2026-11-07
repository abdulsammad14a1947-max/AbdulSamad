export type Agent = {
  slug: string;
  name: string;
  image: string;
};

export const agents: Agent[] = [
  { slug: "frontend", name: "Frontend Agent", image: "/images/agents/agent-frontend.jpg" },
  { slug: "backend", name: "Backend Agent", image: "/images/agents/agent-backend.jpg" },
  { slug: "full-stack", name: "Full-Stack Agent", image: "/images/agents/agent-full-stack.jpg" },
  { slug: "ui-ux", name: "UI/UX Agent", image: "/images/agents/agent-ui-ux.jpg" },
  { slug: "qa-testing", name: "QA Testing Agent", image: "/images/agents/agent-qa-testing.jpg" },
  { slug: "devops", name: "DevOps Agent", image: "/images/agents/agent-devops.jpg" },
  { slug: "database", name: "Database Agent", image: "/images/agents/agent-database.jpg" },
];

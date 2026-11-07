// ---------------------------------------------------------------------------
// CERTIFICATES — centralized data file.
// To add a certificate:  1) drop the image into /public/images/certificates/
//                        2) append one entry here. That's it.
// Only real certificates are listed. Do NOT fabricate credential IDs or
// verification URLs — leave them null until the real value is entered.
// hasImage: false  => gallery shows an "image pending" placeholder card that
//                     turns into a real card once the image is added.
// year: only set where actually known from the certificate.
// ---------------------------------------------------------------------------

export type Certificate = {
  slug: string;
  title: string;
  institution: string | null;
  category: string;
  image: string | null;
  year?: string;
  credentialId?: string | null;
  verifyUrl?: string | null;
  description?: string;
};

export const certCategories = [
  "Microsoft",
  "Anthropic — Claude Development",
  "Anthropic — AI Fluency",
  "IBM",
  "Adobe",
  "HP LIFE",
  "AI Engineering",
  "Other Verified",
] as const;

export const certificates: Certificate[] = [
  // ---- Microsoft (Microsoft Learn / Azure) ----
  {
    slug: "ms-ai-agent-development-azure",
    title: "AI Agent Development on Azure",
    institution: "Microsoft",
    category: "Microsoft",
    image: "/images/certificates/ms-ai-agent-development-azure.png",
  },
  {
    slug: "ms-generative-ai-concepts",
    title: "Introduction to Generative AI Concepts",
    institution: "Microsoft",
    category: "Microsoft",
    image: "/images/certificates/ms-intro-generative-ai-concepts.png",
  },
  {
    slug: "ms-ai-concepts",
    title: "Introduction to AI Concepts",
    institution: "Microsoft",
    category: "Microsoft",
    image: "/images/certificates/ms-intro-ai-concepts.png",
  },
  {
    slug: "ms-benefits-of-cloud-services",
    title: "Describe the Benefits of Cloud Services",
    institution: "Microsoft",
    category: "Microsoft",
    image: "/images/certificates/ms-benefits-of-cloud-services.png",
  },
  {
    slug: "ms-prompt-flow-azure-ai-foundry",
    title: "Prompt Flow on Azure AI Foundry",
    institution: "Microsoft",
    category: "Microsoft",
    image: "/images/certificates/ms-prompt-flow-azure-ai-foundry.png",
  },
  {
    slug: "ms-power-apps-canvas",
    title: "Power Apps Canvas Imperative Techniques",
    institution: "Microsoft",
    category: "Microsoft",
    image: "/images/certificates/ms-power-apps-canvas.png",
  },
  {
    slug: "ms-github-actions",
    title: "Implement GitHub Actions",
    institution: "Microsoft",
    category: "Microsoft",
    image: "/images/certificates/ms-implement-github-actions.png",
  },
  {
    slug: "ms-github-actions-azure",
    title: "Implement GitHub Actions for Azure",
    institution: "Microsoft",
    category: "Microsoft",
    image: "/images/certificates/ms-github-actions-for-azure.png",
  },

  // ---- Anthropic: Claude development ----
  {
    slug: "anthropic-claude-101",
    title: "Claude 101",
    institution: "Anthropic",
    category: "Anthropic — Claude Development",
    image: "/images/certificates/anthropic-claude-101.png",
  },
  {
    slug: "anthropic-claude-code-action",
    title: "Claude Code in Action",
    institution: "Anthropic",
    category: "Anthropic — Claude Development",
    image: "/images/certificates/anthropic-claude-code-action.png",
  },
  {
    slug: "anthropic-claude-cowork",
    title: "Introduction to Claude Cowork",
    institution: "Anthropic",
    category: "Anthropic — Claude Development",
    image: "/images/certificates/anthropic-claude-cowork.png",
  },
  {
    slug: "anthropic-mcp",
    title: "Introduction to Model Context Protocol",
    institution: "Anthropic",
    category: "Anthropic — Claude Development",
    image: "/images/certificates/anthropic-model-context-protocol.png",
  },
  {
    slug: "anthropic-subagents",
    title: "Introduction to Subagents",
    institution: "Anthropic",
    category: "Anthropic — Claude Development",
    image: "/images/certificates/anthropic-subagents.png",
  },
  {
    slug: "anthropic-agent-skills",
    title: "Introduction to Agent Skills",
    institution: "Anthropic",
    category: "Anthropic — Claude Development",
    image: "/images/certificates/anthropic-agent-skills.png",
  },
  {
    slug: "anthropic-building-with-claude-api",
    title: "Building with the Claude API",
    institution: "Anthropic",
    category: "Anthropic — Claude Development",
    image: null,
  },

  // ---- Anthropic: AI Fluency ----
  {
    slug: "anthropic-ai-fluency-foundations",
    title: "AI Fluency: Framework & Foundations",
    institution: "Anthropic",
    category: "Anthropic — AI Fluency",
    image: "/images/certificates/anthropic-ai-fluency-foundations.png",
  },
  {
    slug: "anthropic-ai-fluency-builders",
    title: "AI Fluency for Builders",
    institution: "Anthropic",
    category: "Anthropic — AI Fluency",
    image: "/images/certificates/anthropic-ai-fluency-builders.png",
  },
  {
    slug: "anthropic-ai-fluency-small-business",
    title: "AI Fluency for Small Businesses",
    institution: "Anthropic",
    category: "Anthropic — AI Fluency",
    image: "/images/certificates/anthropic-ai-fluency-small-business.png",
  },
  {
    slug: "anthropic-teaching-ai-fluency",
    title: "Teaching the AI Fluency Framework",
    institution: "Anthropic",
    category: "Anthropic — AI Fluency",
    image: "/images/certificates/anthropic-teaching-ai-fluency.png",
  },
  {
    slug: "anthropic-ai-capabilities",
    title: "AI Capabilities and Limitations",
    institution: "Anthropic",
    category: "Anthropic — AI Fluency",
    image: null,
  },

  // ---- IBM ----
  {
    slug: "ibm-build-an-ai-agent",
    title: "Build an AI Agent",
    institution: "IBM SkillsBuild",
    category: "IBM",
    image: "/images/certificates/ibm-build-an-ai-agent.png",
  },
  {
    slug: "ibm-build-an-ai-agent-badge",
    title: "Digital Badge — Build an AI Agent",
    institution: "IBM",
    category: "IBM",
    image: "/images/certificates/ibm-badge-build-an-ai-agent.png",
  },
  {
    slug: "ibm-make-agentic-ai-work",
    title: "Make Agentic AI Work for You",
    institution: "IBM SkillsBuild",
    category: "IBM",
    image: "/images/certificates/ibm-make-agentic-ai-work.png",
  },
  {
    slug: "ibm-intro-to-rag",
    title: "Introduction to RAG",
    institution: "IBM",
    category: "IBM",
    image: "/images/certificates/ibm-intro-to-rag.png",
  },
  {
    slug: "ibm-power-of-ai-agents",
    title: "Unleashing the Power of AI Agents",
    institution: "IBM",
    category: "IBM",
    image: "/images/certificates/ibm-power-of-ai-agents.png",
  },

  // ---- Adobe ----
  {
    slug: "adobe-build-an-ai-agent",
    title: "Intelligent by Design: Build an AI Agent",
    institution: "Adobe",
    category: "Adobe",
    image: "/images/certificates/adobe-build-an-ai-agent.png",
  },

  // ---- HP LIFE ----
  {
    slug: "hp-selling-online",
    title: "Selling Online",
    institution: "HP LIFE",
    category: "HP LIFE",
    image: "/images/certificates/hp-life-selling-online.png",
  },

  // ---- AI Engineering (training program) ----
  {
    slug: "agentic-ai-development",
    title: "Agentic AI Development",
    institution: null,
    category: "AI Engineering",
    image: "/images/certificates/agentic-ai-development.jpg",
  },
  {
    slug: "saylani-agentic-ai-batch3",
    title: "Agentic AI Training — Batch 3",
    institution: "Saylani Mass IT Training",
    category: "AI Engineering",
    image: "/images/certificates/saylani-agentic-ai-batch3.png",
  },
  {
    slug: "saylani-entrance-appreciation",
    title: "IT Entrance Exam 2026 — Appreciation",
    institution: "Saylani Mass IT Training",
    category: "AI Engineering",
    image: "/images/certificates/saylani-it-entrance-exam-appreciation.png",
  },
  {
    slug: "generative-ai-for-beginners",
    title: "Generative AI for Beginners",
    institution: null,
    category: "Other Verified",
    image: "/images/certificates/generative-ai-for-beginners.png",
  },

  // ---- Other ----
  {
    slug: "skillup-generative-ai",
    title: "Generative AI Certification",
    institution: "SkillUp",
    category: "Other Verified",
    image: null,
  },
];

export const certCategoriesList = Array.from(
  new Set(certificates.map((c) => c.category))
);

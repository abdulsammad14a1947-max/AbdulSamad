// ---------------------------------------------------------------------------
// PROFILE — single source of truth for personal identity & links.
// Edit this file to update the whole site.
// Verified information only. Nothing invented.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Abdul Samad",
  firstName: "Abdul",
  lastName: "Samad",
  // Primary professional identity
  titlePrimary: "Agentic AI Engineer",
  titleSecondary: "Forward Deployed Engineer",
  // Other working titles
  titlesExtra: [
    "AI Automation Engineer",
    "Full-Stack Developer",
    "AI Application Developer",
    "Mobile Application Developer",
  ],
  headline: "Engineering Intelligent Systems for the Real World.",
  intro:
    "I build intelligent AI agents, autonomous workflows, multi-agent systems, retrieval-augmented applications, and production-ready software solutions. From technical discovery and system architecture to application development, integrations, deployment, and continuous improvement, I turn complex requirements into practical technology products.",
  location: "Karachi, Pakistan",
  timezone: "Asia/Karachi",
  timezoneLabel: "PKT",
  // Overall professional experience (years) — stated by owner, not all AI-specific
  yearsOverall: 4,
  available: true,
  availabilityLabel: "Available for new projects",
  email: "abdulsammad14a1947@gmail.com",
  phone: "0317 2924510",
  phoneIntl: "+923172924510",
  socials: {
    linkedin: "https://linkedin.com/in/abdul-samad-b66b7b373",
    github: "https://github.com/abdulsammad-lgtm",
    instagram: "https://instagram.com/@Agentic_sam",
  },
  // Resume: set to a public path when a real resume PDF exists (e.g. "/resume.pdf").
  resume: null as string | null,
  // SEO
  siteUrl: "https://abdul-samad-mz2s.vercel.app",
  ogImage: "/og",
  keywords: [
    "Abdul Samad",
    "Agentic AI Engineer",
    "Forward Deployed Engineer",
    "AI Automation Engineer",
    "AI Agent Developer",
    "Agent Harness Engineering",
    "Context Engineering",
    "Multi-Agent Systems",
    "RAG Engineer",
    "Python Developer",
    "Full-Stack Developer",
    "Flutter Developer",
    "Mobile Application Developer",
    "AI Software Engineer",
  ],
} as const;

export type Profile = typeof profile;

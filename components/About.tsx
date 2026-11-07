import Image from "next/image";
import { Mail, MapPin, BadgeCheck } from "lucide-react";
import { profile } from "@/data/profile";
import { certificates } from "@/data/certificates";

const FACTS = [
  { label: "Based in", value: profile.location, icon: MapPin },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Certifications",
    value: `${certificates.filter((c) => c.image).length} verified certificates`,
    icon: BadgeCheck,
  },
  { label: "Availability", value: profile.availabilityLabel },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            Engineer for intelligent systems, end to end.
          </h2>
        </div>
        <div className="about-cols">
          <div>
            <div className="about-photo glass">
              <Image
                src="/images/profile/about-photo.jpg"
                alt={`Portrait of ${profile.name}, Agentic AI Engineer based in ${profile.location}`}
                fill
                sizes="(max-width: 860px) 92vw, 420px"
              />
            </div>
          </div>
          <div>
            <p className="about-text">
              I&apos;m {profile.name}, an Agentic AI Engineer and Forward Deployed
              Engineer based in {profile.location}. I build practical intelligent
              systems — autonomous agents that do real work, multi-agent
              architectures that cooperate on hard problems, and retrieval
              pipelines that keep AI answers grounded in real material instead of
              generated guesses.
            </p>
            <p className="about-text">
              With {profile.yearsOverall} years of overall professional experience,
              I work comfortably across the whole stack: Python and FastAPI
              services, React and Next.js applications, Flutter mobile apps,
              PostgreSQL and vector databases, and the deployment pipelines that
              hold everything together. Anthropic&apos;s Model Context Protocol has
              become my standard way of connecting agents to the external world —
              I run MCP servers I built for Instagram, WordPress and programmatic
              video.
            </p>
            <p className="about-text">
              What draws me to Forward Deployed Engineering is the full arc:
              sitting with a customer&apos;s operational problem, translating it
              into an architecture, prototyping fast, and then shipping and
              maintaining the thing in production. I&apos;ve built agent harnesses
              with execution loops, tool permissions, checkpointing and
              human-in-the-loop approvals, and I care about the unglamorous parts
              — evaluation, guardrails, observability — because that&apos;s what
              makes agents trustworthy.
            </p>
            <p className="about-text">
              My professional development is continuous and verifiable:{" "}
              {certificates.filter((c) => c.image).length} certificates from
              Anthropic, Microsoft, IBM, Adobe and HP, including Anthropic&apos;s
              complete AI Fluency and Claude development tracks.
            </p>
            <div className="about-facts glass">
              {FACTS.map((f) => (
                <div className="about-fact" key={f.label}>
                  <div className="label">{f.label}</div>
                  <div className="value">
                    {f.href ? <a href={f.href}>{f.value}</a> : f.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

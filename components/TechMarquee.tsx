import {
  Atom, Layers, Server, Code2, Bot, Link2, Container, Database, Leaf, FileCode2, Wind,
} from "lucide-react";

const TECH = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Layers },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Code2 },
  { name: "OpenAI", icon: Bot },
  { name: "LangChain", icon: Link2 },
  { name: "Docker", icon: Container },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Leaf },
  { name: "TypeScript", icon: FileCode2 },
  { name: "Tailwind", icon: Wind },
];

export default function TechMarquee() {
  const loop = [...TECH, ...TECH];
  return (
    <div className="tech-marquee" aria-label="Technologies I build with">
      <div className="tech-track">
        {loop.map((t, i) => (
          <div className="tech-chip" key={i} aria-hidden={i >= TECH.length}>
            <t.icon size={20} strokeWidth={1.5} aria-hidden="true" />
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

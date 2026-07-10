import {
  Atom, Layers, Server, Code2, Bot, Link2, Container, Database, Leaf, FileCode2, Wind,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

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
    <section className="section" id="tech">
      <div className="container">
        <Reveal><div className="section-label">08 &mdash; Tech Stack</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">Tools I build with</h2>
        </Reveal>
      </div>
      <div className="tech-marquee">
        <div className="tech-track">
          {loop.map((t, i) => (
            <div className="tech-chip glass" key={i}>
              <t.icon className="si" />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

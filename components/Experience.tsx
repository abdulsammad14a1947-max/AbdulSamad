import { Bot, Code2 } from "lucide-react";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Professional experience.</h2>
          <p className="section-sub">
            Four years of overall professional experience, with the last two years
            dedicated to AI agent engineering and automation.
          </p>
        </div>

        <div className="timeline">
          {experience.map((e) => (
            <div className="tl-item" key={e.title}>
              <div className="tl-dot" aria-hidden="true">
                {e.kind === "ai" ? <Bot size={14} aria-hidden="true" /> : <Code2 size={14} aria-hidden="true" />}
              </div>
              <article className="tl-card glass glass-hover">
                <div className="tl-head">
                  <h3>{e.title}</h3>
                  <span className="tl-period">{e.period}</span>
                </div>
                <div className="tl-org">{e.org}</div>
                <ul className="tl-list">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

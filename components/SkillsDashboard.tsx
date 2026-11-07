"use client";

import { useState } from "react";
import { skillCategories, levelLabels, type SkillLevel } from "@/data/skills";

export default function SkillsDashboard() {
  const [activeCat, setActiveCat] = useState("all");
  const cats = skillCategories;
  const visible = activeCat === "all" ? cats : cats.filter((c) => c.id === activeCat);
  const totalSkills = cats.reduce((n, c) => n + c.skills.length, 0);

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">Engineering skill dashboard.</h2>
          <p className="section-sub">
            {totalSkills} technologies and practices across {cats.length} domains. Every card
            carries an honest status — no invented expertise.
          </p>
        </div>

        <div className="skill-legend">
          <span>Proficiency status:</span>
          <span className="lvl"><span className="level-badge level-hands-on">Hands-on</span> built &amp; shipped in real work</span>
          <span className="lvl"><span className="level-badge level-familiar">Familiar</span> working knowledge</span>
          <span className="lvl"><span className="level-badge level-learning">Learning</span> actively studying</span>
        </div>

        <div className="skill-filters" role="group" aria-label="Filter skills by category">
          <button
            className={`filter-btn${activeCat === "all" ? " active" : ""}`}
            onClick={() => setActiveCat("all")}
          >
            All domains
          </button>
          {cats.map((c) => (
            <button
              key={c.id}
              className={`filter-btn${activeCat === c.id ? " active" : ""}`}
              onClick={() => setActiveCat(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="skill-cat-grid">
          {visible.map((c) => (
            <article className="skill-card glass-card glass-hover" key={c.id}>
              <h4>{c.name}</h4>
              <p className="sc-blurb">{c.blurb}</p>
              {c.skills.map((s) => (
                <div className="skill-row" key={s.name}>
                  <span>{s.name}</span>
                  <span className={`level-badge level-${String(s.level as SkillLevel)}`}>
                    {levelLabels[s.level]}
                  </span>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

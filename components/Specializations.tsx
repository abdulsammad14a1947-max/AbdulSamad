"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { specializations } from "@/data/specializations";

export default function Specializations() {
  const [activeId, setActiveId] = useState(specializations[0].id);
  const active = specializations.find((s) => s.id === activeId)!;

  return (
    <section className="section" id="engineering">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Engineering</p>
          <h2 className="section-title">Three specializations, one engineering practice.</h2>
          <p className="section-sub">
            Everything I build sits at the intersection of agentic AI, retrieval
            engineering, and full-stack application development.
          </p>
        </div>

        <div className="spec-tabs" role="tablist" aria-label="Engineering specializations">
          {specializations.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={activeId === s.id}
              className={`spec-tab${activeId === s.id ? " active" : ""}`}
              onClick={() => setActiveId(s.id)}
            >
              <span className="st-tag">{s.tag}</span>
              <span className="st-title">{s.title}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="spec-desc">{active.desc}</p>
          <div className="spec-groups">
            {active.groups.map((g, gi) => (
              <div
                className="spec-group glass-card glass-hover"
                key={g.group}
                style={{ animationDelay: `${gi * 0.06}s` }}
              >
                <h4>{g.group}</h4>
                <div className="chips">
                  {g.items.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

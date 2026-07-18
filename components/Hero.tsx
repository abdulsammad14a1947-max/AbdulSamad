"use client";

import { motion, useReducedMotion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

const LOGOS = [
  "/logo-images.png",
  "/logo-images.jpg",
  "/logo-images-1.jpg",
  "/logo-images-1.png",
  "/logo-images-2.png",
  "/logo-images-2.jpg",
  "/logo-images-3.png",
  "/logo-images-4.png",
  "/sakana-logo.png",
];

const STATS = [
  { target: 25, suffix: "", label: "Certifications" },
  { target: 12, suffix: "", label: "Clients" },
  { target: 3, suffix: "", label: "Years" },
  { target: 8, suffix: "", label: "Frameworks" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div>
            <motion.p className="hero-status glass" {...fadeUp(0.1)}>
              <span aria-hidden="true" /> Available for projects
            </motion.p>

            <h1 className="hero-name">
              <span className="line">
                <motion.span
                  style={{ display: "inline-block" }}
                  initial={{ y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  Abdul
                </motion.span>
              </span>
              <span className="line">
                <motion.span
                  className="shine-text"
                  style={{ display: "inline-block" }}
                  initial={{ y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 1.1, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                >
                  Samad
                </motion.span>
              </span>
            </h1>

            <motion.p className="hero-title" {...fadeUp(0.55)}>
              Agentic AI Engineer
            </motion.p>
            <motion.p className="hero-desc" {...fadeUp(0.65)}>
              I design and ship autonomous AI agents, automation pipelines, and the
              web systems around them.
            </motion.p>
            <motion.div className="hero-actions" {...fadeUp(0.75)}>
              <button
                className="btn-primary"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View projects
              </button>
            </motion.div>

            <motion.div className="hero-stats" {...fadeUp(0.85)}>
              {STATS.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <h3>
                    <CountUp target={s.target} suffix={s.suffix} />
                  </h3>
                  <p>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <figure className="hero-photo glass">
              <img src="/hero-portrait.jpg" alt="Portrait of Abdul Samad" />
              <div className="reflection" aria-hidden="true" />
              <figcaption className="glass">
                Abdul Samad
                <small>Karachi, Pakistan</small>
              </figcaption>
            </figure>
            <div className="float-badge glass fb1" aria-hidden="true">
              <em>Agentic AI</em>
              <small>Autonomous systems</small>
            </div>
            <div className="float-badge glass fb2" aria-hidden="true">
              <em>27</em> certifications
              <small>Anthropic, Microsoft, IBM</small>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

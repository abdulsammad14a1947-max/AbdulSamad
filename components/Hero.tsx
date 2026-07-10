"use client";

import { motion, useReducedMotion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";
import ThreeScene from "@/components/ThreeScene";

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
  { target: 4, suffix: "", label: "Projects" },
  { target: 12, suffix: "", label: "Clients" },
  { target: 3, suffix: "", label: "Years Exp." },
  { target: 8, suffix: "", label: "Frameworks" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="hero section" id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              <span /> Available for Projects
            </motion.div>

            <h1 className="hero-name">
              {["Abdul", "Samad"].map((word, i) => (
                <span className="line" key={word}>
                  <motion.span
                    initial={{ y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className={i === 1 ? "grad" : undefined}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              Agentic AI Engineer
            </motion.p>
            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            >
              Building intelligent digital experiences through autonomous AI agents, workflow
              automation, and modern web systems that feel like the future.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              <button
                className="btn-primary magnetic"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </button>
              <button
                className="btn-secondary magnetic"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Let&rsquo;s Talk
              </button>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            >
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.6, ease: "easeOut" }}
          >
            <div className="hero-three" aria-hidden="true">
              <ThreeScene />
            </div>
            <div className="orb o1" />
            <div className="orb o2" />
            <div className="glass-frame">
              <img src="/profile.jpg" alt="Abdul Samad" />
              <div className="reflection" />
              <div className="shine" />
              <div className="badge">
                <span /> Open to work
              </div>
            </div>
          </motion.div>
        </div>
        <div className="logo-marquee" aria-hidden="true">
          <div className="logo-track">
            {[...LOGOS, ...LOGOS].map((src, i) => (
              <img key={i} src={src} alt="Partner logo" className="brand-logo" />
            ))}
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="line" />
      </div>
    </section>
  );
}

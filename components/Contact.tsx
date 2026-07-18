"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, Github, Instagram, Copy, Check, ArrowUpRight, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const EMAIL = "abdulsammad14a1947@gmail.com";

const TOPICS = [
  "AI agent build",
  "Automation pipeline",
  "Web system",
  "Something else",
];

const SOCIALS = [
  { href: "https://linkedin.com/in/abdul-samad-b66b7b373", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/abdulsammad-lgtm", label: "GitHub", icon: Github },
  { href: "https://instagram.com/@Agentic_sam", label: "Instagram", icon: Instagram },
];

/** Live clock for Karachi (PKT) — signals "a real person, reachable now". */
function KarachiTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Karachi",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  // suppress hydration mismatch: render placeholder until mounted
  return <span suppressHydrationWarning>{time ?? "--:--:--"}</span>;
}

export default function Contact() {
  const shellRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [topic, setTopic] = useState<string | null>(null);
  const reduce = useReducedMotion();

  // cursor-tracked yellow spotlight inside the glass shell
  useEffect(() => {
    const el = shellRef.current;
    if (!el || reduce) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [reduce]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — mailto link still works */
    }
  };

  const mailHref = topic
    ? `mailto:${EMAIL}?subject=${encodeURIComponent(`Project inquiry — ${topic}`)}`
    : `mailto:${EMAIL}`;

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-shell glass" ref={shellRef}>
          <div className="contact-spotlight" aria-hidden="true" />

          {/* status ribbon */}
          <Reveal>
            <div className="contact-status">
              <span className="contact-status-item">
                <span className="pulse-dot" aria-hidden="true" />
                Available for new projects
              </span>
              <span className="contact-status-item">
                <MapPin size={13} strokeWidth={1.75} aria-hidden="true" />
                Karachi, PK · <KarachiTime />
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="contact-headline">
              Let&rsquo;s build something <em>autonomous.</em>
            </h2>
          </Reveal>

          {/* topic chips prefill the mail subject */}
          <Reveal delay={0.14}>
            <p className="contact-prompt">What do you need?</p>
            <div className="contact-topics" role="group" aria-label="Project type">
              {TOPICS.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`topic-chip${topic === t ? " active" : ""}`}
                  aria-pressed={topic === t}
                  onClick={() => setTopic((cur) => (cur === t ? null : t))}
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>

          {/* the email is the hero: giant, copyable, one obvious action */}
          <Reveal delay={0.2}>
            <div className="contact-mail-row">
              <a className="contact-mail-big" href={mailHref}>
                <span className="contact-mail-text">{EMAIL}</span>
                <ArrowUpRight className="contact-mail-arrow" size={30} strokeWidth={1.5} aria-hidden="true" />
              </a>
              <button
                type="button"
                className="copy-btn"
                onClick={copyEmail}
                aria-label={copied ? "Email copied" : "Copy email address"}
              >
                {copied ? <Check size={16} strokeWidth={2} /> : <Copy size={16} strokeWidth={1.75} />}
                <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </Reveal>

          {/* footer row: phone + socials */}
          <Reveal delay={0.26}>
            <div className="contact-foot">
              <a className="contact-phone" href="tel:+923172924510">
                <Phone size={14} strokeWidth={1.75} aria-hidden="true" />
                0317 2924510
              </a>
              <div className="contact-social">
                {SOCIALS.map(({ href, label, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener"
                    aria-label={label}
                    whileHover={reduce ? undefined : { y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                    <span>{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* marquee sealed to the bottom edge of the glass */}
          <div className="contact-marquee" aria-hidden="true">
            <div className="contact-marquee-track">
              {Array.from({ length: 2 }).map((_, i) => (
                <span key={i}>
                  Open to freelance · Agentic AI · Automation · Full-stack ·
                  Remote worldwide · Open to freelance · Agentic AI ·
                  Automation · Full-stack · Remote worldwide ·&nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

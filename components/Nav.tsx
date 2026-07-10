"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Profile" },
  { href: "#skills", label: "Expertise" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    onScroll();

    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    ) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <div className="nav-wrap">
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <a href="#" className="nav-logo">
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="1" y="1" width="30" height="30" rx="8" stroke="currentColor" strokeOpacity="0.4" />
            <text x="16" y="22" textAnchor="middle" fill="#60A5FA" fontFamily="'Clash Display',Georgia,serif" fontSize="17" fontWeight="700">A</text>
          </svg>
          Samad
        </a>
        <ul className={`nav-links${open ? " open" : ""}`} id="navLinks">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="nav-cta magnetic"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Let&rsquo;s Talk
        </button>
        <button
          className={`nav-toggle${open ? " active" : ""}`}
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </div>
  );
}

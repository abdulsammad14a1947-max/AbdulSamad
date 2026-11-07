"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#engineering", label: "Engineering" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // section spy only on the home page
  useEffect(() => {
    if (pathname !== "/") return;
    const targets = ["about", "engineering", "skills", "projects", "experience", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [pathname]);

  return (
    <div className="nav-wrap">
      <nav className={`nav${scrolled ? " scrolled" : ""}`} aria-label="Primary">
        <a href="/" className="nav-logo">
          <span className="nav-dot" aria-hidden="true" />
          Abdul&nbsp;<em>Samad</em>
        </a>

        <ul className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={
                  (l.href.startsWith("/#") && pathname === "/" && active === l.href.slice(1)
                    ? "active"
                    : "") +
                  (l.href === "/certifications" && pathname === "/certifications" ? " active" : "")
                }
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="nav-mobile-contact">
            <a href="/#contact" onClick={() => setOpen(false)}>
              Get in touch
            </a>
          </li>
        </ul>

        <a className="nav-cta" href="/#contact">
          Get in touch
        </a>

        <button
          className={`nav-toggle${open ? " active" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
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

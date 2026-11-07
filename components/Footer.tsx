import Link from "next/link";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="nav-logo">
              <span className="nav-dot" aria-hidden="true" />
              Abdul&nbsp;<em>Samad</em>
            </a>
            <p>
              {profile.titlePrimary} &amp; {profile.titleSecondary} in {profile.location}.
              Building intelligent systems for the real world.
            </p>
          </div>

          <nav className="footer-col" aria-label="Site">
            <h5>Site</h5>
            <Link href="/#about">About</Link>
            <Link href="/#engineering">Engineering</Link>
            <Link href="/#skills">Skills</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/certifications">Certifications</Link>
            <Link href="/#contact">Contact</Link>
          </nav>

          <nav className="footer-col" aria-label="Case studies">
            <h5>Case studies</h5>
            <Link href="/projects/agentic-fraud-detection">Multi-Agent Fraud Detection</Link>
            <Link href="/projects/mcp-servers">MCP Servers</Link>
            <Link href="/projects/ai-teaching-assistant">AI Teaching Assistant</Link>
            <Link href="/projects/openclaw-automation">OpenClaw Automation</Link>
            <Link href="/projects/hcm-lite">HCM Lite</Link>
          </nav>

          <div className="footer-col">
            <h5>Reach</h5>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
          <span className="fb-socials">
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={14} aria-hidden="true" />
            </a>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={14} aria-hidden="true" />
            </a>
            <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={14} aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={14} aria-hidden="true" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

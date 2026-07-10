import { Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-logo">
              <svg viewBox="0 0 32 32" fill="none">
                <rect x="1" y="1" width="30" height="30" rx="8" stroke="currentColor" strokeOpacity="0.4" />
                <text x="16" y="22" textAnchor="middle" fill="#60A5FA" fontFamily="'Clash Display',Georgia,serif" fontSize="17" fontWeight="700">A</text>
              </svg>
              Samad
            </a>
            <p>Agentic AI Engineer building autonomous systems that transform how businesses operate.</p>
          </div>
          <div className="footer-col">
            <h5>Navigation</h5>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <a href="https://linkedin.com/in/abdul-samad-b66b7b373" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/abdulsammad-lgtm" target="_blank" rel="noopener">GitHub</a>
            <a href="https://instagram.com/@Agentic_sam" target="_blank" rel="noopener">Instagram</a>
            <a href="mailto:abdulsammad14a1947@gmail.com">Email</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Abdul Samad. All rights reserved.</span>
          <span>Designed with <span className="text-ice">◆</span> for Agentic AI</span>
        </div>
      </div>
    </footer>
  );
}

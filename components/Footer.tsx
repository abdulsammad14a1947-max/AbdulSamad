export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="nav-logo">
              Abdul <em>Samad</em>
            </a>
            <p>
              Agentic AI Engineer building autonomous systems that change how
              businesses operate.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Abdul Samad. All rights reserved.</span>
          <span>Karachi, Pakistan</span>
        </div>
      </div>
    </footer>
  );
}

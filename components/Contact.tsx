import { Phone, Mail, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <div className="section-label">09 &mdash; Contact</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">Let&rsquo;s connect</h2>
          <p className="section-sub">
            Reach out for AI agent development, automation, or collaboration.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="contact-shell glass">
            <div className="contact-info">
              <div className="contact-item">
                <Phone className="si" />
                <div>
                  <div className="ci-label">Phone</div>
                  <div className="ci-value">0317 2924510</div>
                </div>
              </div>
              <div className="contact-item">
                <Mail className="si" />
                <div>
                  <div className="ci-label">Email</div>
                  <div className="ci-value">abdulsammad14a1947@gmail.com</div>
                </div>
              </div>
              <div className="contact-item">
                <MapPin className="si" />
                <div>
                  <div className="ci-label">Area</div>
                  <div className="ci-value">Pakistan, Karachi, Korangi-2, House #152</div>
                </div>
              </div>
              <div className="contact-social">
                <a href="https://linkedin.com/in/abdul-samad-b66b7b373" target="_blank" rel="noopener" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/abdulsammad-lgtm" target="_blank" rel="noopener" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://instagram.com/@Agentic_sam" target="_blank" rel="noopener" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

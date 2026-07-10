import { Cpu, Clock, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <div className="section-label">01 &mdash; About</div>
        </Reveal>
        <div className="about-grid">
          <Reveal scale>
            <div className="about-card glass">
              <h2 className="section-title">Building the<br />future of AI</h2>
              <div className="about-stats">
                <div className="about-stat">
                  <h3><CountUp target={25} /></h3>
                  <p>Certifications</p>
                </div>
                <div className="about-stat">
                  <h3><CountUp target={3} /></h3>
                  <p>Years</p>
                </div>
                <div className="about-stat">
                  <h3><CountUp target={12} /></h3>
                  <p>Clients</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="about-text">
                Results-driven AI Agent Developer with expertise in designing, deploying, and
                optimizing autonomous AI systems for workflow automation, business process
                efficiency, and intelligent task execution. Skilled in Agentic AI frameworks,
                OpenClaw deployment, prompt engineering, API integrations, Retrieval-Augmented
                Generation (RAG), and multi-agent orchestration.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="about-text">
                Experienced in building AI-driven solutions that reduce manual workload, enhance
                customer interaction, and streamline operations across industries.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="about-details">
                <div className="about-detail-item"><div className="label">Phone</div><div className="value">0317 2924510</div></div>
                <div className="about-detail-item"><div className="label">Email</div><div className="value">abdulsammad14a1947@gmail.com</div></div>
                <div className="about-detail-item"><div className="label">Area</div><div className="value">Pakistan, Karachi, Korangi-2, House #152</div></div>
                <div className="about-detail-item"><div className="label">Focus</div><div className="value">Agentic AI &amp; Automation</div></div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import Reveal from "@/components/ui/Reveal";

const FACTS = [
  { label: "Email", value: "abdulsammad14a1947@gmail.com" },
  { label: "Phone", value: "0317 2924510" },
  { label: "Based in", value: "Karachi, Pakistan" },
  { label: "Focus", value: "Agentic AI & Automation" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <h2 className="about-lede">
            I build AI systems that <em>work</em> while you don&rsquo;t.
          </h2>
        </Reveal>
        <div className="about-cols">
          <Reveal delay={0.1}>
            <div className="about-photo">
              <img src="/about-photo.jpg" alt="Abdul Samad" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="about-text">
              Results-driven AI Agent Developer with expertise in designing, deploying,
              and optimizing autonomous AI systems for workflow automation, business
              process efficiency, and intelligent task execution. Skilled in Agentic AI
              frameworks, OpenClaw deployment, prompt engineering, API integrations,
              Retrieval-Augmented Generation (RAG), and multi-agent orchestration.
            </p>
            <p className="about-text">
              Experienced in building AI-driven solutions that reduce manual workload,
              enhance customer interaction, and streamline operations across industries.
            </p>
            <div className="about-facts glass">
              {FACTS.map((f) => (
                <div className="about-fact" key={f.label}>
                  <div className="label">{f.label}</div>
                  <div className="value">{f.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

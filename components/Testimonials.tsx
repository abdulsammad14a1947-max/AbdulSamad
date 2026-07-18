import Reveal from "@/components/ui/Reveal";

const TESTIMONIALS = [
  {
    quote: "Abdul built an AI support agent that cut our response time by 70%. The system handles complex queries with remarkable accuracy.",
    name: "Rayan Khan",
    role: "CTO, TechFlow",
    initial: "RK",
  },
  {
    quote: "The lead gen agent outperformed our manual process by 3x in the first week.",
    name: "Zara Ahmed",
    role: "Growth Lead, ScaleUp",
    initial: "ZA",
  },
  {
    quote: "The OpenClaw system he built runs flawlessly 24/7.",
    name: "Sara Mehmood",
    role: "Operations Director, NexusAI",
    initial: "SM",
  },
];

function Author({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="testi-author">
      <div className="testi-avatar" aria-hidden="true">{t.initial}</div>
      <div>
        <div className="testi-name">{t.name}</div>
        <div className="testi-role">{t.role}</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [lead, ...rest] = TESTIMONIALS;
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <Reveal>
          <h2 className="section-title">What clients say</h2>
        </Reveal>
        <div className="testi-grid">
          <Reveal delay={0.1} className="testi-card glass lead">
            <blockquote>&ldquo;{lead.quote}&rdquo;</blockquote>
            <Author t={lead} />
          </Reveal>
          <div className="testi-side">
            {rest.map((t, i) => (
              <Reveal key={t.name} delay={0.18 + i * 0.08} className="testi-card glass">
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <Author t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Reveal from "@/components/ui/Reveal";

const TESTIMONIALS = [
  { stars: 5, quote: "Abdul built an AI support agent that cut our response time by 70%. The system handles complex queries with remarkable accuracy.", name: "Rayan Khan", role: "CTO, TechFlow", initial: "RK" },
  { stars: 5, quote: "Working with Samad on our lead gen automation was seamless. The AI agent outperformed our manual process by 3x in just the first week.", name: "Zara Ahmed", role: "Growth Lead, ScaleUp", initial: "ZA" },
  { stars: 5, quote: "Deep technical knowledge combined with practical implementation. The OpenClaw system he built runs flawlessly 24/7.", name: "Sara Mehmood", role: "Operations Director, NexusAI", initial: "SM" },
];

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="testi-card glass">
      <div className="stars">{"★".repeat(t.stars)}</div>
      <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
      <div className="testi-author">
        <div className="testi-avatar">{t.initial}</div>
        <div>
          <div className="testi-name">{t.name}</div>
          <div className="testi-role">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <Reveal><div className="section-label">07 &mdash; Testimonials</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">What people say</h2>
        </Reveal>
      </div>
      <div className="testi-wrap">
        <div className="testi-track">
          {loop.map((t, i) => <Card key={i} t={t} />)}
        </div>
      </div>
    </section>
  );
}

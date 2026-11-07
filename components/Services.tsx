import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Services</p>
          <h2 className="section-title">What I deliver.</h2>
          <p className="section-sub">
            Engineering, integration, automation and deployment — from discovery
            call to production system.
          </p>
        </div>
        <div className="bento">
          {services.map((s) => (
            <article
              className={`bento-card glass-card glass-hover${s.span === "wide" ? " featured" : ""}`}
              key={s.title}
            >
              <s.icon className="bc-icon" size={21} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

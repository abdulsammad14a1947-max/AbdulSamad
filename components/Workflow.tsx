import { workflowSteps } from "@/data/workflow";

export default function Workflow() {
  return (
    <section className="section" id="workflow">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Process</p>
          <h2 className="section-title">How I ship systems.</h2>
          <p className="section-sub">
            The same six-step loop behind every project — from first discovery call
            to a system that keeps improving in production.
          </p>
        </div>
        <div className="flow">
          {workflowSteps.map((s, i) => (
            <article
              className="flow-step glass-card glass-hover"
              key={s.num}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="flow-num">{s.num}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <div className="flow-details">
                {s.details.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

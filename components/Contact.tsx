"use client";

import { useState, type FormEvent } from "react";
import {
  Mail, Linkedin, Github, Instagram, Phone, Send, LoaderCircle,
  CircleCheck, TriangleAlert, PhoneCall,
} from "lucide-react";
import { profile } from "@/data/profile";

const TOPICS = [
  "AI Engineering Job",
  "Forward Deployed Engineering",
  "Full-Stack Development",
  "Mobile Application Development",
  "Freelance Project",
  "AI Automation",
  "Agency Collaboration",
  "Other",
] as const;

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function validate(form: { name: string; email: string; message: string }): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (form.message.trim().length < 12)
    errors.message = "Message should be at least 12 characters.";
  return errors;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<string>("Freelance Project");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate({ name, email, message });
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setState("error");
      return;
    }

    // mailto compose fallback — no backend required, works everywhere.
    setState("sending");
    const subject = encodeURIComponent(
      `Portfolio inquiry — ${topic} — ${name.trim()}`
    );
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\nOpportunity type: ${topic}\n\n${message.trim()}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    // the mail client has been invoked; surface a clear success message
    window.setTimeout(() => setState("sent"), 900);
  };

  const fieldProps = (key: keyof Errors) => ({
    "aria-invalid": Boolean(errors[key]) || undefined,
    className: undefined,
  });

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-shell glass">
          <div className="contact-grid">
            <div className="contact-left">
              <p className="eyebrow">Contact</p>
              <h2>
                Let&apos;s build something <em style={{ fontStyle: "normal", background: "var(--grad-accent)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>autonomous.</em>
              </h2>
              <p className="lede">
                Available for AI engineering roles, forward deployed engagements,
                freelance builds and agency collaborations. Tell me what you need.
              </p>

              <div className="contact-rows">
                <a className="contact-row" href={`mailto:${profile.email}`}>
                  <span className="cr-icon"><Mail size={17} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="cr-text">
                    <small>Email</small>
                    <span>{profile.email}</span>
                  </span>
                </a>
                <a
                  className="contact-row"
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="cr-icon"><Linkedin size={17} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="cr-text">
                    <small>LinkedIn</small>
                    <span>linkedin.com/in/abdul-samad</span>
                  </span>
                </a>
                <a
                  className="contact-row"
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="cr-icon"><Github size={17} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="cr-text">
                    <small>GitHub</small>
                    <span>github.com/abdulsammad-lgtm</span>
                  </span>
                </a>
                <a
                  className="contact-row"
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="cr-icon"><Instagram size={17} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="cr-text">
                    <small>Instagram</small>
                    <span>@Agentic_sam</span>
                  </span>
                </a>
                <a className="contact-row" href={`tel:${profile.phoneIntl}`}>
                  <span className="cr-icon"><Phone size={17} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="cr-text">
                    <small>Phone · {profile.location}</small>
                    <span>{profile.phone}</span>
                  </span>
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="form-row2">
                <div className={`form-field${errors.name ? " invalid" : ""}`}>
                  <label htmlFor="cf-name">Full name</label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    {...fieldProps("name")}
                  />
                  {errors.name && (
                    <span className="field-error"><TriangleAlert size={13} aria-hidden="true" />{errors.name}</span>
                  )}
                </div>
                <div className={`form-field${errors.email ? " invalid" : ""}`}>
                  <label htmlFor="cf-email">Email</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    {...fieldProps("email")}
                  />
                  {errors.email && (
                    <span className="field-error"><TriangleAlert size={13} aria-hidden="true" />{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="cf-topic">Opportunity type</label>
                <select
                  id="cf-topic"
                  name="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  {TOPICS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className={`form-field${errors.message ? " invalid" : ""}`}>
                <label htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  placeholder="Tell me about the problem you want to solve…"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  {...fieldProps("message")}
                />
                {errors.message && (
                  <span className="field-error"><TriangleAlert size={13} aria-hidden="true" />{errors.message}</span>
                )}
              </div>

              <button className="btn-primary form-submit" type="submit" disabled={state === "sending"}>
                {state === "sending" ? (
                  <>
                    <LoaderCircle size={16} className="spinner" aria-hidden="true" style={{ color: "#071018" }} />
                    Opening your mail client…
                  </>
                ) : (
                  <>
                    <Send size={16} strokeWidth={2} aria-hidden="true" />
                    Send message
                  </>
                )}
              </button>

              {state === "sent" && (
                <p className="form-status" role="status">
                  <CircleCheck size={16} aria-hidden="true" />
                  Your mail client is open with the message pre-filled — press send there and it will reach {profile.email} directly.
                </p>
              )}
              {state === "error" && Object.keys(errors).length > 0 && (
                <p className="form-status error" role="alert">
                  <TriangleAlert size={16} aria-hidden="true" />
                  Please fix the fields above, or email me directly at {profile.email}.
                </p>
              )}
              <p style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-3)", fontSize: 12 }}>
                <PhoneCall size={13} aria-hidden="true" />
                Prefer email directly? Click any contact on the left — no forms required.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

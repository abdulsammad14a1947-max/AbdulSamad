"use client";

import { useState } from "react";
import {
  Mail, Linkedin, Github, Instagram, Phone, Copy, Check, ArrowRight,
} from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // clipboard unavailable — the mailto link above still works
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-shell glass">
          <div className="contact-grid">
            <div className="contact-left">
              <p className="eyebrow">Contact</p>
              <h2>
                Let&apos;s build something{" "}
                <span style={{ color: "var(--lime)" }}>autonomous.</span>
              </h2>
              <p className="lede">
                Available for AI engineering roles, forward deployed engagements,
                freelance builds and agency collaborations. Pick any channel — every
                one reaches me directly.
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

            <div className="contact-cta-col">
              <p className="mono-label">Fastest route</p>
              <h3>Email me directly — no forms, no middle layer.</h3>
              <a className="btn-primary contact-big-btn" href={`mailto:${profile.email}`}>
                <Mail size={17} strokeWidth={2} aria-hidden="true" />
                Write an email
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </a>
              <button className="btn-ghost contact-big-btn" type="button" onClick={copyEmail}>
                {copied ? (
                  <>
                    <Check size={17} strokeWidth={2} aria-hidden="true" />
                    Copied to clipboard
                  </>
                ) : (
                  <>
                    <Copy size={17} strokeWidth={2} aria-hidden="true" />
                    Copy email address
                  </>
                )}
              </button>
              <a className="btn-ghost contact-big-btn" href={`tel:${profile.phoneIntl}`}>
                <Phone size={17} strokeWidth={2} aria-hidden="true" />
                {profile.phone}
              </a>
              <p className="contact-note">
                {profile.location} · {profile.timezoneLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

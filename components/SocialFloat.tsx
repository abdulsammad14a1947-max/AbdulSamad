import { Linkedin, Github, Instagram } from "lucide-react";

export default function SocialFloat() {
  return (
    <div className="social-float">
      <a href="https://linkedin.com/in/abdul-samad-b66b7b373" target="_blank" rel="noopener" aria-label="LinkedIn">
        <Linkedin size={18} />
      </a>
      <a href="https://github.com/abdulsammad-lgtm" target="_blank" rel="noopener" aria-label="GitHub">
        <Github size={18} />
      </a>
      <a href="https://instagram.com/@Agentic_sam" target="_blank" rel="noopener" aria-label="Instagram">
        <Instagram size={18} />
      </a>
    </div>
  );
}

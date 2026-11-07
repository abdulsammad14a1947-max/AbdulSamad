// ---------------------------------------------------------------------------
// LOGO TRAIN — infinite horizontal marquee of AI-tool icons that scrolls
// continuously like a train. Rendered twice for a seamless loop; the second
// copy is aria-hidden. Pauses on hover; the global reduced-motion rule stops
// it entirely.
// ---------------------------------------------------------------------------

const TOOLS = [
  { src: "/images/tools/figma.png", alt: "Figma logo" },
  { src: "/images/tools/sakana-ai.png", alt: "Sakana AI logo" },
  { src: "/images/tools/openclaw.png", alt: "OpenClaw logo" },
  { src: "/images/tools/eye-red.png", alt: "Red eye mark" },
  { src: "/images/tools/blue-star.jpg", alt: "Blue gradient star mark" },
  { src: "/images/tools/snake-lime.png", alt: "Lime snake mark" },
  { src: "/images/tools/nemoclaw.jpg", alt: "NemoClaw logo" },
  { src: "/images/tools/star-white.png", alt: "White geometric star mark" },
  { src: "/images/tools/paperclip.png", alt: "Paperclip mark" },
  { src: "/images/tools/ai-art-portrait.jpg", alt: "Black and white portrait illustration" },
];

export default function LogoTrain() {
  return (
    <div className="logo-train" aria-label="AI tools and platforms">
      <div className="logo-track">
        {[...TOOLS, ...TOOLS].map((t, i) => (
          <span className="logo-tile" key={i} aria-hidden={i >= TOOLS.length || undefined}>
            <img
              src={t.src}
              alt={i < TOOLS.length ? t.alt : ""}
              width={88}
              height={88}
              loading="eager"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

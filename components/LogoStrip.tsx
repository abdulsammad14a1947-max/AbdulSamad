const LOGOS = [
  "/logo-images.png",
  "/logo-images.jpg",
  "/logo-images-1.jpg",
  "/logo-images-1.png",
  "/logo-images-2.png",
  "/logo-images-2.jpg",
  "/logo-images-3.png",
  "/logo-images-4.png",
  "/sakana-logo.png",
];

export default function LogoStrip() {
  const loop = [...LOGOS, ...LOGOS];
  return (
    <div className="logo-strip" aria-label="Brands and tools I work with">
      <div className="logo-track">
        {loop.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Brand logo"
            className="brand-logo"
            loading="lazy"
            aria-hidden={i >= LOGOS.length}
          />
        ))}
      </div>
    </div>
  );
}

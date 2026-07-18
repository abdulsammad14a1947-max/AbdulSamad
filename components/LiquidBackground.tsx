export default function LiquidBackground() {
  return (
    <>
      <div className="glass-bg" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="depth-fog" />
      </div>
      <div className="grain" aria-hidden="true" />
    </>
  );
}

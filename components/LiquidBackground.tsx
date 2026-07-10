"use client";

import { useEffect, useRef } from "react";

export default function LiquidBackground() {
  const spotlight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = { x: -300, y: -300 };
    const current = { x: -300, y: -300 };

    function onMove(e: MouseEvent) {
      target.x = e.clientX;
      target.y = e.clientY;
    }
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const loop = () => {
      current.x += (target.x - current.x) * 0.15;
      current.y += (target.y - current.y) * 0.15;
      if (spotlight.current) {
        spotlight.current.style.transform = `translate3d(${current.x - 300}px, ${current.y - 300}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="glass-bg" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="blob b4" />
        <div className="blob b5" />
      </div>
      <div className="grain" aria-hidden="true" />
      <div className="spotlight" id="spotlight" ref={spotlight} aria-hidden="true" />
    </>
  );
}

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function Shape() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.3;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshStandardMaterial color="#60A5FA" wireframe transparent opacity={0.55} />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4] }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <Shape />
    </Canvas>
  );
}

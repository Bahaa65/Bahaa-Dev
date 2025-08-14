"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const ref = React.useRef<THREE.Points>(null!);
  const mouse = React.useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (isMobile) return; // Disable mouse tracking on mobile
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    if (!isMobile) {
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }
  }, [isMobile]);

  // Responsive particle count
  const count = isMobile ? 200 : 600;
  
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    const spread = isMobile ? 15 : 20; // Smaller spread on mobile
    const height = isMobile ? 8 : 12; // Lower height on mobile
    
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 1] = (Math.random() - 0.5) * height;
      arr[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    return arr;
  }, [count, isMobile]);

  useFrame(() => {
    if (!ref.current) return;
    const t = performance.now() * 0.0003;
    ref.current.rotation.y = t;
    
    // Subtle parallax based on mouse (only on desktop)
    if (!isMobile) {
      ref.current.position.x = mouse.current.x * 0.5;
      ref.current.position.y = mouse.current.y * 0.3;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={positions.length / 3} 
          array={positions} 
          itemSize={3} 
          args={[positions, 3]} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={isMobile ? 0.06 : 0.04} // Larger particles on mobile for better visibility
        color={0x10b981} 
        transparent 
        opacity={0.6} 
      />
    </points>
  );
}

export function ThreeParticlesBackground() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, isMobile ? 6 : 8] }} 
        dpr={[1, 2]}
        style={{ 
          opacity: isMobile ? 0.7 : 1, // Slightly reduce opacity on mobile
          filter: isMobile ? 'blur(0.5px)' : 'none' // Slight blur on mobile for performance
        }}
      >
        <ambientLight intensity={0.2} />
        <Particles />
      </Canvas>
    </div>
  );
}

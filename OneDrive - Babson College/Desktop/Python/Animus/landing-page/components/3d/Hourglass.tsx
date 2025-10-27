'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface HourglassProps {
  scrollProgress: number;
}

export function Hourglass({ scrollProgress }: HourglassProps) {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Sand particles
  const particleCount = 500;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 0.3;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.random() * 2 - 1;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        // Animate sand falling
        positions[i * 3 + 1] -= 0.01 * scrollProgress;

        // Reset to top when reaching bottom
        if (positions[i * 3 + 1] < -2) {
          positions[i * 3 + 1] = 2;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress * Math.PI * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Top glass */}
      <mesh position={[0, 1, 0]}>
        <coneGeometry args={[0.8, 1.5, 32, 1, true]} />
        <meshPhysicalMaterial
          color="#EF4444"
          transparent
          opacity={0.3}
          metalness={0.1}
          roughness={0.1}
          transmission={0.9}
          thickness={0.5}
        />
      </mesh>

      {/* Bottom glass */}
      <mesh position={[0, -1, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.8, 1.5, 32, 1, true]} />
        <meshPhysicalMaterial
          color="#DC2626"
          transparent
          opacity={0.3}
          metalness={0.1}
          roughness={0.1}
          transmission={0.9}
          thickness={0.5}
        />
      </mesh>

      {/* Falling sand particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={particleCount}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#B91C1C"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

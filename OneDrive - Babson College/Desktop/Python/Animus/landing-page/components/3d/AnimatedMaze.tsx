'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AnimatedMazeProps {
  scrollProgress: number;
}

export function AnimatedMaze({ scrollProgress }: AnimatedMazeProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Rotate maze based on scroll
      groupRef.current.rotation.y = scrollProgress * Math.PI * 2;
      groupRef.current.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Create maze walls */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[Math.cos(i * Math.PI / 4) * 2, 0, Math.sin(i * Math.PI / 4) * 2]}>
          <boxGeometry args={[0.2, 2, 1]} />
          <meshStandardMaterial
            color="#EF4444"
            emissive="#EF4444"
            emissiveIntensity={0.3 + scrollProgress * 0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
      {/* Center frustration indicator */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial
          color="#DC2626"
          emissive="#DC2626"
          emissiveIntensity={0.5 + scrollProgress}
          wireframe
        />
      </mesh>
    </group>
  );
}

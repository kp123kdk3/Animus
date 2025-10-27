'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TumblingPapersProps {
  scrollProgress: number;
}

export function TumblingPapers({ scrollProgress }: TumblingPapersProps) {
  const groupRef = useRef<THREE.Group>(null);
  const papersRef = useRef<THREE.Mesh[]>([]);

  const paperCount = 12;
  const positions = useMemo(() =>
    [...Array(paperCount)].map(() => ({
      x: (Math.random() - 0.5) * 4,
      y: (Math.random() - 0.5) * 4,
      z: (Math.random() - 0.5) * 2,
      rotX: Math.random() * Math.PI,
      rotY: Math.random() * Math.PI,
      rotZ: Math.random() * Math.PI,
    })),
    []
  );

  useFrame((state) => {
    papersRef.current.forEach((paper, i) => {
      if (paper) {
        const time = state.clock.getElapsedTime();
        paper.position.y = positions[i].y + Math.sin(time + i) * scrollProgress * 2;
        paper.rotation.x = positions[i].rotX + time * 0.5 * scrollProgress;
        paper.rotation.y = positions[i].rotY + time * 0.3 * scrollProgress;
        paper.rotation.z = positions[i].rotZ + time * 0.7 * scrollProgress;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) papersRef.current[i] = el;
          }}
          position={[pos.x, pos.y, pos.z]}
        >
          <boxGeometry args={[1, 1.4, 0.02]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? '#F59E0B' : i % 3 === 1 ? '#F97316' : '#FB923C'}
            emissive={i % 3 === 0 ? '#F59E0B' : i % 3 === 1 ? '#F97316' : '#FB923C'}
            emissiveIntensity={0.2 + scrollProgress * 0.3}
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

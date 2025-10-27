'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingDashboard() {
  const groupRef = useRef<THREE.Group>(null);

  // Mouse parallax effect
  useFrame((state) => {
    if (groupRef.current) {
      const { pointer } = state;
      groupRef.current.rotation.y = pointer.x * 0.1;
      groupRef.current.rotation.x = -pointer.y * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float
        speed={2}
        rotationIntensity={0.3}
        floatIntensity={0.5}
      >
        {/* Main Dashboard Card */}
        <RoundedBox args={[4, 2.5, 0.1]} radius={0.1} smoothness={4} position={[0, 0, 0]}>
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.5}
            chromaticAberration={0.1}
            anisotropy={1}
            distortion={0.1}
            distortionScale={0.1}
            temporalDistortion={0.2}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor="#ffffff"
            color="#6366F1"
            transmission={0.9}
          />
        </RoundedBox>

        {/* Assignment Cards */}
        {[...Array(3)].map((_, i) => (
          <Float
            key={i}
            speed={2 + i * 0.5}
            rotationIntensity={0.2}
            floatIntensity={0.3}
          >
            <RoundedBox
              args={[1.5, 0.8, 0.05]}
              radius={0.05}
              smoothness={4}
              position={[-1 + i * 1, 0.5 - i * 0.3, 0.5 + i * 0.2]}
            >
              <meshStandardMaterial
                color={i === 0 ? '#8B5CF6' : i === 1 ? '#06B6D4' : '#F97316'}
                metalness={0.8}
                roughness={0.2}
                emissive={i === 0 ? '#8B5CF6' : i === 1 ? '#06B6D4' : '#F97316'}
                emissiveIntensity={0.3}
              />
            </RoundedBox>
          </Float>
        ))}

        {/* Floating School Items */}
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
          <mesh position={[2.5, 1, 1]}>
            <boxGeometry args={[0.1, 0.5, 0.02]} />
            <meshStandardMaterial color="#F97316" metalness={0.6} roughness={0.3} />
          </mesh>
        </Float>

        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
          <mesh position={[-2.5, -1, 0.8]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#06B6D4" metalness={0.8} roughness={0.2} />
          </mesh>
        </Float>
      </Float>

      {/* Lighting */}
      <pointLight position={[2, 2, 2]} intensity={1} color="#6366F1" />
      <pointLight position={[-2, -2, 2]} intensity={0.5} color="#8B5CF6" />
      <spotLight position={[0, 5, 5]} intensity={0.8} angle={0.3} penumbra={1} color="#06B6D4" />
    </group>
  );
}

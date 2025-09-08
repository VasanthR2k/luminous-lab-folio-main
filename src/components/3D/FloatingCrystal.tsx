import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingCrystal = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Crystal */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <octahedronGeometry args={[1.5, 0]} />
        <MeshWobbleMaterial
          color="#8B5CF6"
          factor={0.6}
          speed={0.5}
          roughness={0}
          metalness={0.8}
        />
      </mesh>
      
      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
          ]}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color={i % 2 === 0 ? "#06B6D4" : "#EC4899"} />
        </mesh>
      ))}
      
      {/* Glowing Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.05, 8, 32]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

export default FloatingCrystal;
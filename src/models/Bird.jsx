import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Bird() {
  const birdRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    birdRef.current.position.x = Math.sin(t * 0.6) * 8;
    birdRef.current.position.z = Math.cos(t * 0.6) * 8;
    birdRef.current.position.y = Math.sin(t * 1.5) * 0.5 + 4;
    birdRef.current.rotation.y = -t * 0.6;
  });

  return (
    <group ref={birdRef}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.15, 0.25]} />
        <meshStandardMaterial color="#ff6b6b" emissive="#ef4444" emissiveIntensity={0.3} />
      </mesh>
      {/* Left Wing */}
      <mesh position={[-0.35, 0.05, 0]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.35, 0.05, 0.2]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
      {/* Right Wing */}
      <mesh position={[0.35, 0.05, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.35, 0.05, 0.2]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
    </group>
  );
}

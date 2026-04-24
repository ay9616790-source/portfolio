import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Island(props) {
  const islandRef = useRef();

  useFrame(() => {
    // Subtle idle bob
    if (islandRef.current) {
      islandRef.current.position.y = props.position[1] + Math.sin(Date.now() * 0.001) * 0.08;
    }
  });

  return (
    <group ref={islandRef} {...props}>
      {/* Island Base (Dark Rock) */}
      <mesh position={[0, -1.8, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[3.2, 3.5, 7]} />
        <meshStandardMaterial color="#1a1a1a" flatShading />
      </mesh>

      {/* Top Surface */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[3.3, 3.2, 0.4, 7]} />
        <meshStandardMaterial color="#2d0a0a" flatShading />
      </mesh>
      
      {/* Highlight patch */}
      <mesh position={[0, 0.21, 0]}>
        <cylinderGeometry args={[2.5, 2.8, 0.1, 7]} />
        <meshStandardMaterial color="#3d1010" flatShading />
      </mesh>

      {/* Crystal 1 — Red */}
      <group position={[1.5, 0.5, 1.2]}>
        <mesh position={[0, 0.6, 0]} rotation={[0, 0.3, 0.1]}>
          <coneGeometry args={[0.25, 1.5, 5]} />
          <meshStandardMaterial color="#ef4444" flatShading emissive="#ef4444" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[0.3, 0.3, 0.2]} rotation={[0.2, 0.5, -0.15]}>
          <coneGeometry args={[0.15, 0.8, 4]} />
          <meshStandardMaterial color="#dc2626" flatShading emissive="#dc2626" emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* Crystal 2 — Red/Orange */}
      <group position={[-1.8, 0.5, -1.2]}>
        <mesh position={[0, 0.5, 0]} rotation={[0.1, 0, -0.1]}>
          <coneGeometry args={[0.2, 1.2, 5]} />
          <meshStandardMaterial color="#f87171" flatShading emissive="#f87171" emissiveIntensity={0.35} />
        </mesh>
        <mesh position={[-0.2, 0.2, 0.15]} rotation={[-0.1, 0.3, 0.2]}>
          <coneGeometry args={[0.12, 0.6, 4]} />
          <meshStandardMaterial color="#ef4444" flatShading emissive="#ef4444" emissiveIntensity={0.25} />
        </mesh>
      </group>

      {/* Floating Rock 1 */}
      <mesh position={[4, 1.5, 0]}>
        <dodecahedronGeometry args={[0.5]} />
        <meshStandardMaterial color="#1f1f1f" flatShading />
      </mesh>
      
      {/* Floating Rock 2 */}
      <mesh position={[-3.5, -0.5, 3]}>
        <dodecahedronGeometry args={[0.3]} />
        <meshStandardMaterial color="#2a1515" flatShading />
      </mesh>

      {/* Glowing Core Structure */}
      <group position={[-0.5, 0.4, 1.5]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.8, 0.6, 0.8]} />
          <meshStandardMaterial color="#1a1a1a" flatShading />
        </mesh>
        <mesh position={[0, 0.5, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[0.7, 0.6, 4]} />
          <meshStandardMaterial color="#b91c1c" flatShading emissive="#ef4444" emissiveIntensity={0.2} />
        </mesh>
      </group>

      {/* Small red light orb */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={1.5} transparent opacity={0.8} />
      </mesh>

    </group>
  );
}

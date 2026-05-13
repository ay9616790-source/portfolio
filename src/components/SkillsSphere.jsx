import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  'Python', 'C++', 'Java', 'React', 'Three.js',
  'OpenCV', 'Scikit-Learn', 'JavaScript', 'Node.js', 'NLP',
  'Pandas', 'NumPy', 'Git', 'HTML/CSS', 'Deep Learning',
  'Machine Learning', 'CNN', 'Linux', 'Vite', 'SQL',
];

// Vibrant color palette — each ball gets a unique color
const ballColors = [
  '#ef4444', // red
  '#f97316', // orange
  '#eab308', // yellow
  '#22c55e', // green
  '#06b6d4', // cyan
  '#3b82f6', // blue
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#14b8a6', // teal
  '#f43f5e', // rose
  '#a855f7', // purple
  '#10b981', // emerald
  '#f59e0b', // amber
  '#6366f1', // indigo
  '#0ea5e9', // sky
  '#d946ef', // fuchsia
  '#84cc16', // lime
  '#e11d48', // crimson
  '#2dd4bf', // aqua
  '#fb923c', // light orange
];

function SkillBall({ position, skill, color, size }) {
  return (
    <group position={position}>
      {/* The 3D sphere */}
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.25}
          roughness={0.25}
          metalness={0.7}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Skill name INSIDE the ball — centered */}
      <Html
        center
        distanceFactor={6}
        style={{
          color: '#fff',
          fontSize: size > 0.5 ? '10px' : '8px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '800',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          textAlign: 'center',
          textShadow: '0 1px 4px rgba(0,0,0,0.8)',
          lineHeight: '1',
        }}
      >
        {skill}
      </Html>
    </group>
  );
}

function SphereCloud() {
  const groupRef = useRef();

  // Distribute skills on a sphere using Fibonacci/golden spiral
  const ballData = useMemo(() => {
    const data = [];
    const numPoints = skills.length;
    const radius = 3.5;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;

      const x = Math.cos(theta) * radiusAtY * radius;
      const z = Math.sin(theta) * radiusAtY * radius;

      // Vary ball size based on skill name length (shorter name = bigger ball for readability)
      const nameLen = skills[i].length;
      const size = nameLen <= 4 ? 0.58 : nameLen <= 8 ? 0.52 : 0.48;

      data.push({
        position: [x, y * radius, z],
        skill: skills[i],
        color: ballColors[i % ballColors.length],
        size,
      });
    }
    return data;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0025;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {ballData.map((ball) => (
        <SkillBall
          key={ball.skill}
          skill={ball.skill}
          color={ball.color}
          size={ball.size}
          position={ball.position}
        />
      ))}

      {/* Faint wireframe sphere outline */}
      <mesh>
        <sphereGeometry args={[4.2, 24, 24]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.02}
        />
      </mesh>
    </group>
  );
}

export default function SkillsSphere() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '100%',
      height: 'clamp(260px, 60vw, 550px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent', overflow: 'hidden' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-5, 3, 5]} intensity={0.6} color="#ef4444" />
        <pointLight position={[5, -3, -5]} intensity={0.4} color="#3b82f6" />

        <SphereCloud />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI * 3 / 4}
        />
      </Canvas>

      <div style={{
        position: 'absolute',
        bottom: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.25)',
        fontSize: '0.78rem',
        fontStyle: 'italic',
        pointerEvents: 'none',
      }}>
        🖱️ Drag to explore skills
      </div>
    </div>
  );
}

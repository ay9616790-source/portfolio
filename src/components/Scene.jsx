import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Island from '../models/Island';
import Bird from '../models/Bird';

export default function Scene() {
  return (
    <Canvas 
      camera={{ near: 0.1, far: 1000, position: [0, 4, 12] }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <directionalLight position={[10, 20, 10]} intensity={2} castShadow />
        <ambientLight intensity={0.4} />
        <hemisphereLight skyColor="#1a0000" groundColor="#000000" intensity={0.6} />
        <pointLight position={[-5, 5, 5]} intensity={1} color="#ff4444" />
        
        <Bird />
        <Island position={[0, -1, 0]} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Suspense>
    </Canvas>
  );
}

import { Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Dumbbell({ simple }: { simple: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const targetY = state.pointer.x * 0.9 + state.clock.elapsedTime * 0.08;
    const targetX = -state.pointer.y * 0.45;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.06;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.06;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.06;
    void delta;
  });

  const gold = (
    <meshStandardMaterial color="#C9A227" metalness={1} roughness={0.22} />
  );

  return (
    <group ref={group} rotation={[0, 0.4, 0.35]}>
      <mesh>
        <cylinderGeometry args={[0.16, 0.16, 3.1, simple ? 16 : 48]} />
        <meshStandardMaterial color="#d9d9d9" metalness={1} roughness={0.35} />
      </mesh>
      {[-1.25, 1.25].map((x) => (
        <group key={x} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <mesh>
            <cylinderGeometry args={[0.95, 0.95, 0.34, simple ? 20 : 64]} />
            {gold}
          </mesh>
          <mesh position={[0, 0.22, 0]}>
            <cylinderGeometry args={[0.72, 0.72, 0.3, simple ? 20 : 64]} />
            {gold}
          </mesh>
          <mesh position={[0, -0.22, 0]}>
            <cylinderGeometry args={[0.72, 0.72, 0.3, simple ? 20 : 64]} />
            {gold}
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function DumbbellScene({ simple = false }: { simple?: boolean }) {
  return (
    <Canvas
      dpr={[1, simple ? 1.2 : 1.7]}
      camera={{ position: [0, 0.4, 6.2], fov: 42 }}
      gl={{ antialias: !simple, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <spotLight position={[5, 6, 5]} angle={0.5} intensity={140} color="#F5D76E" />
      <spotLight position={[-6, -3, 4]} angle={0.6} intensity={60} color="#ffffff" />
      {!simple && <Environment preset="warehouse" />}
      <Dumbbell simple={simple} />
    </Canvas>
  );
}



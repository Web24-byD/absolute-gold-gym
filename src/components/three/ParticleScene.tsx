import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.045;
    const px = (state.pointer.x * viewport.width) / 40;
    const py = (state.pointer.y * viewport.height) / 40;
    points.current.position.x += (px - points.current.position.x) * 0.04;
    points.current.position.y += (py - points.current.position.y) * 0.04;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#F5D76E"
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Plate() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.z += delta * 0.12;
    mesh.current.rotation.x = 1.15 + state.pointer.y * 0.12;
    mesh.current.rotation.y = state.pointer.x * 0.18;
  });
  return (
    <mesh ref={mesh} position={[3.1, -0.4, -1.5]} rotation={[1.15, 0, 0]}>
      <torusGeometry args={[1.9, 0.28, 24, 96]} />
      <meshStandardMaterial color="#C9A227" metalness={1} roughness={0.28} />
    </mesh>
  );
}

export default function ParticleScene({ count = 900 }: { count?: number }) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6], fov: 52 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 6]} intensity={2.2} color="#F5D76E" />
      <directionalLight position={[-6, -2, 2]} intensity={0.7} color="#ffffff" />
      <Particles count={count} />
      <Plate />
    </Canvas>
  );
}

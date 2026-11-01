import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox, useGLTF } from "@react-three/drei";

function VideoCard({ position, rotation = [0, 0, 0], color, accent }) {
  return (
    <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.18}>
      <group position={position} rotation={rotation}>
        <RoundedBox args={[0.78, 0.95, 0.055]} radius={0.07} smoothness={4}>
          <meshStandardMaterial
            color="#111827"
            metalness={0.45}
            roughness={0.3}
          />
        </RoundedBox>

        <mesh position={[0, 0.08, 0.034]}>
          <planeGeometry args={[0.65, 0.62]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.35}
            roughness={0.5}
          />
        </mesh>

        <mesh position={[0, -0.36, 0.04]}>
          <boxGeometry args={[0.55, 0.045, 0.015]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.7} />
        </mesh>

        <mesh position={[-0.2, -0.43, 0.04]}>
          <boxGeometry args={[0.15, 0.025, 0.015]} />
          <meshStandardMaterial color="#8794ad" />
        </mesh>
      </group>
    </Float>
  );
}

function EditingTimeline() {
  const colors = ["#a855f7", "#22d3ee", "#ec4899", "#818cf8"];

  return (
    <group position={[0, -1.12, 0.35]} rotation={[-0.12, 0, 0]}>
      <RoundedBox args={[2.15, 0.42, 0.12]} radius={0.07}>
        <meshStandardMaterial color="#111827" metalness={0.5} roughness={0.35} />
      </RoundedBox>

      {colors.map((color, index) => (
        <mesh key={color} position={[-0.72 + index * 0.48, 0.04, 0.075]}>
          <boxGeometry args={[0.42, 0.12, 0.025]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.65}
          />
        </mesh>
      ))}

      <mesh position={[0, -0.12, 0.075]}>
        <boxGeometry args={[1.75, 0.035, 0.02]} />
        <meshStandardMaterial color="#475569" />
      </mesh>

      <mesh position={[-0.18, -0.025, 0.11]}>
        <boxGeometry args={[0.025, 0.29, 0.025]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.2} />
      </mesh>
    </group>
  );
}

function NeonRing({ color, radius, rotation }) {
  return (
    <mesh rotation={rotation}>
      <torusGeometry args={[radius, 0.012, 12, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
}

export default function NexoraScene() {
  const { scene } = useGLTF("/models/nexora/smartphone.glb");
  const phoneScene = useMemo(() => scene.clone(true), [scene]);
  const group = useRef();

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.045;
    }
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.8} />

      <pointLight position={[2, 2, 3]} color="#a855f7" intensity={2.2} />
      <pointLight position={[-2, 0, 2]} color="#22d3ee" intensity={2} />
      <pointLight position={[0, -2, -2]} color="#ec4899" intensity={1.5} />

      <primitive
        object={phoneScene}
        position={[0, 0.05, 0]}
        scale={1.15}
      />

      <VideoCard
        position={[-1.35, 0.85, 0.05]}
        rotation={[0.05, 0.28, -0.12]}
        color="#6638a8"
        accent="#c084fc"
      />

      <VideoCard
        position={[1.35, 0.65, -0.1]}
        rotation={[0.05, -0.3, 0.12]}
        color="#075985"
        accent="#22d3ee"
      />

      <VideoCard
        position={[1.28, -0.72, 0.1]}
        rotation={[-0.08, -0.24, -0.1]}
        color="#831843"
        accent="#f472b6"
      />

      <EditingTimeline />

      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.12}>
        <group position={[-1.15, -0.75, 0.45]}>
          <mesh>
            <circleGeometry args={[0.2, 48]} />
            <meshStandardMaterial
              color="#a855f7"
              emissive="#a855f7"
              emissiveIntensity={1.2}
            />
          </mesh>
          <mesh position={[0.035, 0, 0.035]}>
            <coneGeometry args={[0.095, 0.19, 3]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>
      </Float>

      <NeonRing color="#a855f7" radius={1.85} rotation={[0.9, 0.2, 0.2]} />
      <NeonRing color="#22d3ee" radius={2.05} rotation={[0.3, 0.9, 0.5]} />
    </group>
  );
}

useGLTF.preload("/models/nexora/smartphone.glb");

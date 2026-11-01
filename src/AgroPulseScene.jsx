import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, useGLTF } from "@react-three/drei";

export default function AgroPulseScene() {
  const { scene } = useGLTF("/models/agropulse/tractor.glb");
  const model = useMemo(() => scene.clone(true), [scene]);
  const group = useRef();

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group}>
      <Environment preset="sunset" />
      <pointLight position={[-4, 2, -3]} color="#8bd66b" intensity={1.5} />

      <primitive
        object={model}
        position={[0, -0.85, 0]}
        rotation={[0, Math.PI / 4, 0]}
        scale={1.05}
      />

      <ContactShadows
        position={[0, -0.9, 0]}
        opacity={0.4}
        scale={7}
        blur={2.5}
        far={3}
      />
    </group>
  );
}

useGLTF.preload("/models/agropulse/tractor.glb");

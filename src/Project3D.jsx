import { lazy, Suspense, useEffect, useRef, useState } from "react";
const NexoraScene = lazy(() => import("./NexoraScene"));
const AgroPulseScene = lazy(() => import("./AgroPulseScene"));
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function ModelShape({ type }) {
  const group = useRef();

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.22;
  });

  const mat = (color, metalness = 0.25, roughness = 0.45) => (
    <meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
  );

  const box = (position, scale, color, rotation = [0, 0, 0]) => (
    <mesh position={position} scale={scale} rotation={rotation} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      {mat(color)}
    </mesh>
  );

  const sphere = (position, scale, color) => (
    <mesh position={position} scale={scale} castShadow>
      <sphereGeometry args={[1, 32, 32]} />
      {mat(color)}
    </mesh>
  );

  const cylinder = (position, radius, height, color, rotation = [0, 0, 0]) => (
    <mesh position={position} rotation={rotation} castShadow>
      <cylinderGeometry args={[radius, radius, height, 32]} />
      {mat(color)}
    </mesh>
  );

  const torus = (position, radius, tube, color, rotation = [0, 0, 0]) => (
    <mesh position={position} rotation={rotation}>
      <torusGeometry args={[radius, tube, 16, 48]} />
      {mat(color, 0.65, 0.3)}
    </mesh>
  );

  let object;

  switch (type) {
    case "tractor":
      object = <>
        {box([0, 0, 0], [1.7, 0.48, 0.85], "#65b84b")}
        {box([-0.35, 0.58, 0], [0.85, 0.85, 0.75], "#8bd66b")}
        {box([-0.35, 0.62, 0], [0.68, 0.58, 0.62], "#a9dcf5")}
        {cylinder([0.72, -0.35, 0], 0.48, 0.22, "#202a35", [Math.PI / 2, 0, 0])}
        {cylinder([-0.65, -0.35, 0], 0.29, 0.2, "#202a35", [Math.PI / 2, 0, 0])}
        {sphere([0.9, 0.25, 0], [0.16, 0.16, 0.16], "#f5d45c")}
      </>;
      break;
    case "scooter":
      object = <>
        {sphere([-0.58, -0.45, 0], [0.34, 0.34, 0.16], "#202a35")}
        {sphere([0.58, -0.45, 0], [0.34, 0.34, 0.16], "#202a35")}
        {box([0, -0.08, 0], [1.05, 0.22, 0.38], "#e85b48", [0, 0, -0.12])}
        {box([0.38, 0.22, 0], [0.2, 0.8, 0.18], "#e85b48", [0, 0, -0.25])}
        {box([0.48, 0.63, 0], [0.65, 0.1, 0.12], "#303b4a")}
        {box([-0.05, 0.16, 0], [0.52, 0.16, 0.5], "#f3b64a")}
        {sphere([0.7, 0.1, 0], [0.12, 0.12, 0.12], "#fff1b0")}
      </>;
      break;
    case "camera":
      object = <>
        {box([0, 0, 0], [1.35, 0.9, 0.65], "#333f54")}
        {box([-0.35, 0.52, 0], [0.48, 0.18, 0.42], "#596a83")}
        {cylinder([0.12, 0, 0.42], 0.39, 0.55, "#1c293d", [Math.PI / 2, 0, 0])}
        {torus([0.12, 0, 0.72], 0.25, 0.07, "#61b8ee", [Math.PI / 2, 0, 0])}
        {sphere([0.12, 0, 0.77], [0.13, 0.13, 0.08], "#80d5ff")}
        {box([-0.48, -0.6, 0], [0.13, 0.35, 0.13], "#8794a8")}
      </>;
      break;
    case "car":
      object = <>
        {box([0, -0.05, 0], [2, 0.48, 0.9], "#e94f55")}
        {box([-0.12, 0.38, 0], [1.12, 0.52, 0.72], "#b9dff4")}
        {box([0.75, 0.02, 0], [0.35, 0.18, 0.92], "#f6c45b")}
        {sphere([-0.62, -0.38, 0.48], [0.25, 0.25, 0.13], "#20242d")}
        {sphere([0.62, -0.38, 0.48], [0.25, 0.25, 0.13], "#20242d")}
        {sphere([-0.62, -0.38, -0.48], [0.25, 0.25, 0.13], "#20242d")}
        {sphere([0.62, -0.38, -0.48], [0.25, 0.25, 0.13], "#20242d")}
      </>;
      break;
    case "laptop":
      object = <>
        {box([0, -0.18, 0], [1.65, 0.12, 1.05], "#a9b7c9")}
        {box([0, 0.42, -0.43], [1.65, 1.12, 0.1], "#303b50", [-0.12, 0, 0])}
        {box([0, 0.42, -0.365], [1.42, 0.88, 0.025], "#438bd2", [-0.12, 0, 0])}
        {box([0, -0.1, 0.12], [0.65, 0.025, 0.35], "#64748b")}
        {sphere([0, 0.45, -0.29], [0.13, 0.13, 0.04], "#8be0f8")}
      </>;
      break;
    case "ballot":
      object = <>
        {/* Premium floating base */}
        {box([0, -0.76, 0], [1.65, 0.16, 1.28], "#111c32")}
        {box([0, -0.66, 0], [1.52, 0.08, 1.16], "#d6ad55")}

        {/* Main ballot box */}
        {box([0, -0.02, 0], [1.38, 1.18, 1.02], "#142b50")}
        {box([0, 0.02, 0.52], [1.18, 0.92, 0.035], "#1d3d6b")}

        {/* Gold corner details */}
        {[-0.64, 0.64].map((x) => <>
          {box([x, -0.02, 0.525], [0.035, 1.12, 0.045], "#d8b45f")}
        </>)}

        {/* Top lid and voting slot */}
        {box([0, 0.59, 0], [1.48, 0.14, 1.12], "#203c65")}
        {box([0, 0.67, 0], [0.62, 0.025, 0.16], "#080f1d")}
        {box([0, 0.69, 0], [0.48, 0.012, 0.08], "#050a13")}

        {/* Ballot paper entering the slot */}
        {box([0.12, 1.02, -0.12], [0.48, 0.65, 0.035], "#f5f1e7", [0, 0, -0.14])}
        {box([0.12, 1.12, -0.095], [0.25, 0.035, 0.012], "#477ac5", [0, 0, -0.14])}
        {box([0.02, 0.98, -0.09], [0.07, 0.07, 0.015], "#ffffff", [0, 0, -0.14])}
        {box([0.16, 0.98, -0.08], [0.18, 0.025, 0.012], "#64748b", [0, 0, -0.14])}

        {/* VoteX emblem on the front */}
        {cylinder([0, 0.02, 0.57], 0.24, 0.035, "#d6ad55", [Math.PI / 2, 0, 0])}
        {torus([0, 0.02, 0.595], 0.19, 0.018, "#f5d88b", [Math.PI / 2, 0, 0])}
        {box([-0.045, 0.015, 0.62], [0.045, 0.16, 0.025], "#ffffff", [0, 0, -0.55])}
        {box([0.045, 0.015, 0.62], [0.045, 0.16, 0.025], "#ffffff", [0, 0, 0.55])}

        {/* Front status lights */}
        {[-0.42, 0.42].map((x) =>
          sphere([x, -0.48, 0.54], [0.035, 0.035, 0.025], "#63d6e8")
        )}
      </>;
      break;
    case "hotel":
      object = <>
        {box([0, 0, 0], [1.35, 2, 0.9], "#d9e2ef")}
        {box([0, 1.12, 0], [1.55, 0.18, 1.05], "#e9b85c")}
        {box([0, -0.55, 0.48], [0.34, 0.9, 0.08], "#53657d")}
        {[-0.42, 0.42].map((x) => [-0.55, 0.1, 0.72].map((y) =>
          box([x, y, 0.47], [0.24, 0.28, 0.07], "#72b9e8")
        ))}
        {sphere([0, 1.32, 0], [0.16, 0.16, 0.16], "#f6d16e")}
      </>;
      break;
    case "shopping":
      object = <>
        {box([0, -0.05, 0], [1.15, 1.35, 0.55], "#8d69d6")}
        {torus([0, 0.72, 0], 0.34, 0.075, "#d6c4ff", [Math.PI / 2, 0, 0])}
        {box([0, 0.05, 0.3], [0.48, 0.32, 0.04], "#f2c85b")}
        {sphere([0, 0.05, 0.35], [0.12, 0.12, 0.05], "#fff0b0")}
      </>;
      break;
    case "food":
      object = <>
        {box([0, -0.12, 0], [1.45, 0.95, 1.05], "#e4a34e")}
        {box([0, 0.38, 0], [1.5, 0.12, 1.1], "#f5c36d")}
        {cylinder([0, 0.78, 0], 0.38, 0.12, "#5fae69")}
        {sphere([0, 0.95, 0], [0.28, 0.2, 0.28], "#e65d48")}
        {sphere([-0.35, 0.82, 0.12], [0.18, 0.12, 0.18], "#78bd68")}
      </>;
      break;
    case "weather":
      object = <>
        {sphere([0, 0, 0], [0.8, 0.8, 0.8], "#438bd2")}
        {torus([0, 0, 0], 1.02, 0.035, "#a5d9f4", [0.8, 0.4, 0.2])}
        {sphere([-0.28, 0.3, 0.62], [0.32, 0.22, 0.16], "#f4f7ff")}
        {sphere([0, 0.4, 0.62], [0.3, 0.27, 0.16], "#f4f7ff")}
        {sphere([0.32, 0.28, 0.55], [0.25, 0.19, 0.14], "#f4f7ff")}
        {sphere([0.42, -0.42, 0.45], [0.2, 0.2, 0.2], "#f5c85b")}
      </>;
      break;
    case "finance":
      object = <>
        {box([0, -0.58, 0], [1.5, 0.12, 0.85], "#35445a")}
        {box([-0.48, -0.12, 0], [0.22, 0.8, 0.48], "#4b9cda")}
        {box([0, 0.12, 0], [0.22, 1.28, 0.48], "#65bd91")}
        {box([0.48, 0.38, 0], [0.22, 1.8, 0.48], "#e9bd58")}
        {torus([0, 0.1, 0.38], 0.58, 0.045, "#8ad8ad")}
      </>;
      break;
    case "quiz":
      object = <>
        {box([0, 0, 0], [1.15, 1.35, 0.32], "#7659c8")}
        {sphere([0, 0.2, 0.22], [0.38, 0.38, 0.12], "#f6d16e")}
        {box([0, -0.48, 0.22], [0.16, 0.16, 0.12], "#f6d16e")}
        {torus([0, 0, 0], 0.92, 0.035, "#a997e8", [0.6, 0.3, 0])}
      </>;
      break;
    case "tasks":
      object = <>
        {box([0, 0, 0], [1.2, 1.55, 0.22], "#e9edf5")}
        {[-0.42, 0, 0.42].map((y) => <>
          {box([-0.32, y, 0.14], [0.18, 0.18, 0.04], "#60b98a")}
          {box([0.18, y, 0.14], [0.58, 0.07, 0.04], "#64748b")}
        </>)}
        {box([0, 0.92, 0], [0.5, 0.18, 0.25], "#7c69d2")}
      </>;
      break;
    case "qr":
      object = <>
        {box([0, 0, 0], [1.3, 1.3, 0.16], "#f5f7fb")}
        {[-0.4, 0.4].map((x) => [-0.4, 0.4].map((y) =>
          box([x, y, 0.1], [0.3, 0.3, 0.06], "#202a3b")
        ))}
        {box([0, 0, 0.1], [0.16, 0.16, 0.06], "#202a3b")}
        {box([0.35, -0.05, 0.1], [0.12, 0.32, 0.06], "#202a3b")}
        {box([-0.12, 0.3, 0.1], [0.3, 0.1, 0.06], "#202a3b")}
      </>;
      break;
    case "cooking":
      object = <>
        {cylinder([0, -0.1, 0], 0.68, 0.85, "#9aa8b8")}
        {cylinder([0, 0.35, 0], 0.72, 0.12, "#d6e0eb")}
        {torus([0, 0.43, 0], 0.7, 0.07, "#65758a")}
        {box([-0.82, -0.08, 0], [0.42, 0.13, 0.16], "#65758a")}
        {box([0.82, -0.08, 0], [0.42, 0.13, 0.16], "#65758a")}
        {sphere([0, 0.7, 0], [0.16, 0.12, 0.16], "#e9b75a")}
      </>;
      break;
    default:
      object = <>{sphere([0, 0, 0], [0.7, 0.7, 0.7], "#438bd2")}</>;
  }

  return <group ref={group}>{object}</group>;
}

export default function Project3D({ type, title }) {
  const host = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = host.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="project-3d-viewer" ref={host} aria-label={`${title} 3D model`}>
      {visible ? (
        <Canvas
          camera={type === "nexora" ? { position: [4.6, 3.2, 6.5], fov: 48 } : { position: [3.2, 2.3, 4.2], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[4, 5, 4]} intensity={2.2} />
          <pointLight position={[-3, 1, -3]} intensity={1.2} color="#579dff" />
          {type === "nexora" ? <Suspense fallback={null}><NexoraScene /></Suspense> : type === "tractor" ? <Suspense fallback={null}><AgroPulseScene /></Suspense> : <ModelShape type={type} /> }
          <OrbitControls
            enablePan={false}
            enableZoom
            minDistance={type === "nexora" ? 4.5 : 2.8}
            maxDistance={type === "nexora" ? 9 : 7}
            minPolarAngle={0.65}
            maxPolarAngle={2.35}
            autoRotate={false}
          />
        </Canvas>
      ) : (
        <div className="project-3d-loading">Loading 3D preview...</div>
      )}
      <span className="project-3d-hint">DRAG TO ROTATE · SCROLL TO ZOOM</span>
    </div>
  );
}

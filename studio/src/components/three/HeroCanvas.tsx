import { Canvas } from "@react-three/fiber";
import { Particles } from "./Particles";
import { FloatingCluster } from "./FloatingCluster";

/**
 * This is the only Canvas on the page. Keep it that way — one WebGL
 * context is enough for a "cinematic 3D moment" without weighing down
 * the rest of the scroll experience.
 */
export function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <color attach="background" args={["#00000000"]} />
      <fog attach="fog" args={["#07080B", 6, 11]} />

      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} color="#EAF0FF" />
      <pointLight position={[-3, -2, 2]} intensity={6} color="#4E6BFF" distance={8} />
      <pointLight position={[2, 3, -2]} intensity={4} color="#8CA0FF" distance={8} />

      <Particles />
      <FloatingCluster />
    </Canvas>
  );
}

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const ACCENT = "#4E6BFF";
const ACCENT_SOFT = "#8CA0FF";

/** A thin panel with an inset "screen" — stands in for the website. */
function WebsiteNode() {
  return (
    <Float speed={1.1} floatIntensity={0.6} rotationIntensity={0.4}>
      <group position={[-1.9, 0.5, 0]}>
        <mesh>
          <boxGeometry args={[1.5, 1.0, 0.06]} />
          <meshStandardMaterial color="#12151C" metalness={0.4} roughness={0.35} />
        </mesh>
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[1.28, 0.8]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={0.55}
            roughness={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

/** A rounded vertical slab — stands in for a phone / app. */
function AppNode() {
  return (
    <Float speed={1.4} floatIntensity={0.7} rotationIntensity={0.5}>
      <group position={[1.7, -0.3, 0.6]} rotation={[0, 0.3, 0]}>
        <mesh>
          <boxGeometry args={[0.62, 1.2, 0.08]} />
          <meshStandardMaterial color="#12151C" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[0.5, 1.0]} />
          <meshStandardMaterial
            color={ACCENT_SOFT}
            emissive={ACCENT_SOFT}
            emissiveIntensity={0.4}
            roughness={0.25}
          />
        </mesh>
      </group>
    </Float>
  );
}

/** An open ring — stands in for social / connected platforms. */
function SocialNode() {
  return (
    <Float speed={0.9} floatIntensity={0.5} rotationIntensity={0.6}>
      <mesh position={[0.4, 1.35, -0.4]} rotation={[1.1, 0.3, 0]}>
        <torusGeometry args={[0.42, 0.05, 16, 64]} />
        <meshStandardMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={0.6}
          metalness={0.6}
          roughness={0.25}
        />
      </mesh>
    </Float>
  );
}

/** Three stepped bars — stands in for analytics / growth measurement. */
function AnalyticsNode() {
  const heights = [0.35, 0.6, 0.9];
  return (
    <Float speed={1.2} floatIntensity={0.4} rotationIntensity={0.3}>
      <group position={[-0.6, -1.15, 0.5]}>
        {heights.map((h, i) => (
          <mesh key={i} position={[i * 0.28, h / 2, 0]}>
            <boxGeometry args={[0.18, h, 0.18]} />
            <meshStandardMaterial
              color={i === heights.length - 1 ? ACCENT : "#2B3040"}
              emissive={i === heights.length - 1 ? ACCENT : "#000000"}
              emissiveIntensity={i === heights.length - 1 ? 0.5 : 0}
              metalness={0.4}
              roughness={0.4}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

/** A slim upward cone — stands in for growth trajectory. */
function GrowthNode() {
  return (
    <Float speed={1.6} floatIntensity={0.8} rotationIntensity={0.4}>
      <mesh position={[1.4, 1.1, -0.2]} rotation={[0, 0, -0.35]}>
        <coneGeometry args={[0.09, 0.55, 24]} />
        <meshStandardMaterial
          color={ACCENT_SOFT}
          emissive={ACCENT_SOFT}
          emissiveIntensity={0.5}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
}

/**
 * The full cluster, wrapped in a group that eases toward the pointer
 * position — a subtle parallax rather than a literal drag-follow.
 */
export function FloatingCluster() {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    target.current.x = state.pointer.x;
    target.current.y = state.pointer.y;

    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        target.current.x * 0.35,
        0.04
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -target.current.y * 0.2,
        0.04
      );
    }
  });

  return (
    <group ref={group} scale={0.95}>
      <WebsiteNode />
      <AppNode />
      <SocialNode />
      <AnalyticsNode />
      <GrowthNode />
    </group>
  );
}

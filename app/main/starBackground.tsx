"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const StarBackground = () => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = React.useState(() =>
    random.inSphere(new Float32Array(5001), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });


  return (
    <group rotation={[0, 0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        >
            <PointMaterial
                transparent
                color="#ffffff"
                size={0.002}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    </group>
  );
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[1]">
        <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
            <StarBackground />
        </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;
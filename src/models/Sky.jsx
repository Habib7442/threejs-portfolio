import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  // Set the color of the material to make the sky light orange
  const lightOrangeSkyColor = 0xFFA07A;
  sky.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.setHex(lightOrangeSkyColor);
    }
  });

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;

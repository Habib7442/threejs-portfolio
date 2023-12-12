import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/planenew.glb";
import { useEffect, useRef } from "react";

const Plane = ({ isRotating,planePosition,planeScale, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} scale={planeScale} position={planePosition} />
    </mesh>
  );
};

export default Plane;

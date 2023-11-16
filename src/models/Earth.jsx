import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import earthScene from "../assets/3d/earth.glb"

const Earth = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(earthScene);
  const { actions } = useAnimations(animations, group);
  const scaleFactor = 2;
  return (
    <group ref={group} {...props} dispose={null} scale={[scaleFactor, scaleFactor, scaleFactor]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-1.54, -0.06, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Clouds_1">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.Clouds} />
              </group>
              <group name="Planet_2">
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Planet} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Earth;

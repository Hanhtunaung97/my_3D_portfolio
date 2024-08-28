import { useGLTF } from "@react-three/drei";
import React from "react";
import planeScene from "../assets/3d/plane.glb";
const Plane = ({isRotation, ...props}) => {
  const { scene, animation } = useGLTF(planeScene);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;

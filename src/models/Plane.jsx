import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
const Plane = ({ isRotation, ...props }) => {
  const meshRef = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, meshRef);
  useEffect(() => {
    if (isRotation) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }   
  }, [isRotation, actions]);
  return (
    <mesh {...props} ref={meshRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;

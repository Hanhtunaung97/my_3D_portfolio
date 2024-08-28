import React from 'react'
import birdScene from '../assets/3d/bird.glb';
import { useGLTF } from '@react-three/drei';
const Bird = () => {
    const {scene,animation}=useGLTF(birdScene)
  return (
    <mesh scale={[0.002,0.002,0.002]} position={[-1,0,0]} rotation={[0,0,0]} animation={animation}>
    <primitive object={scene} />
    </mesh>
  )
}

export default Bird
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { LoaderComponents } from "../components";
import { Bird, Island, Plane, Sky } from "../models";

const HomePages = () => {
  const [isRotation, setIsRotation] = useState(false);
  const [currentStage,setCurrentStage]=useState(1);
  const adjustIslandScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };
  const adjustPlaneScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };
  const [planeScale, planePosition]=adjustPlaneScreenSize()
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandScreenSize();
  return (
    <section className="w-full h-screen relative">
      {/* <div className=' absolute left-0 right-0 top-28 flex justify-center items-center z-10'>
        POPUP
      </div> */}
      <Canvas
        className={` w-full h-screen bg-transparent ${
          isRotation ? "cursor-grabbing" : "cursor-grab "
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<LoaderComponents />}>
          <directionalLight position={[10, 10, 1]} intensity={1.5} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight
            skyColor="#b1e1f1"
            groundColor="#000000"
            intensity={1}
          />
          <Sky isRotation={isRotation} />
          <Bird />
          <Plane
          scale={planeScale}
          position={planePosition}
          isRotation={isRotation}
          rotation={[0, 20, 0]}
           />
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotation={isRotation}
            setIsRotation={setIsRotation}
            setCurrentStage={setCurrentStage}
          />
          
        </Suspense>
      </Canvas>
    </section>
  );
};

export default HomePages;

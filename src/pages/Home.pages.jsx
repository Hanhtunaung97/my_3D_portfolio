import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { LoaderComponents } from "../components";
import { Island } from "../models";


const HomePages = () => {
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
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandScreenSize();
  return (
    <section className="w-full h-screen relative">
      {/* <div className=' absolute left-0 right-0 top-28 flex justify-center items-center z-10'>
        POPUP
      </div> */}
      <Canvas
        className=" w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000, position: [0, 0, 1] }}
      >
        <Suspense fallback={<LoaderComponents />}>
          <directionalLight position={[10, 10, 1]} intensity={1.5} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor="#b1e1f1" groundColor="#000000" intensity={1} />
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default HomePages;

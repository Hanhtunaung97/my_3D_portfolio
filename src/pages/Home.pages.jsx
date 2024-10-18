import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { HomeInfoComponents, LoaderComponents } from "../components";
import { Bird, Island, Plane, Sky } from "../models";
// import sakura from "../assets/sakura.mp3";
import canon from '../assets/canon.mp3';
import { soundoff, soundon } from "../assets/icons";
const HomePages = () => {
  const audioRef = useRef(new Audio(canon));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotation, setIsRotation] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isSoundOn, setIsSoundOn] = useState(false);
  useEffect(() => {
    if (isSoundOn) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isSoundOn]);
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
  const [planeScale, planePosition] = adjustPlaneScreenSize();
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className=" absolute left-0 right-0 top-28 flex justify-center items-center z-10">
        {currentStage && <HomeInfoComponents currentStage={currentStage} />}
      </div>
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
      <div className="absolute bottom-2 left-2 z-10">
        <img
          src={!isSoundOn ? soundoff : soundon}
          alt="sound"
          className=" w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsSoundOn(!isSoundOn)}
        />
      </div>
    </section>
  );
};

export default HomePages;

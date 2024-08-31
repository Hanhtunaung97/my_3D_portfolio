import { Html } from "@react-three/drei";
import React from "react";
import { spiral } from "ldrs";

const LoaderComponents = () => {
  spiral.register();

  return (
    <Html>
      <div className="flex justify-center items-center">
        {/* <div className=" w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div> */}
        <l-spiral
          size="40"
          speed="0.7"
          color="blue"
          className="w-20 h-20 "
        ></l-spiral>
      </div>
    </Html>
  );
};

export default LoaderComponents;

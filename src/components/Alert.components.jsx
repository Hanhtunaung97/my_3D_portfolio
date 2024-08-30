import React from "react";

const AlertComponents = ({  text, type }) => {
  return (
    <div className="absolute  top-12 left-0 right-0 flex justify-center items-center">
      <div
        className={`${
          type === "danger" ? "bg-red-500" : "bg-green-500"
        } p-3 rounded gap-2 flex-col lg:flex-row lg:inline-flex lg:rounded-full text-indigo-50 leading-none flex items-center justify-center }`}
        role="alert"
      >
        <p
          className={`${
            type === "danger" ? "bg-red-400" : "bg-green-400"
          } flex rounded lg:rounded-full px-2 py-1 font-semibold mr-2 text-xs text-white uppercase`}
        >
          {type === "danger" ? "Error" : "Success"}
        </p>
        <p className=" mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default AlertComponents;

import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
export const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className=" font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-btn neo-brutalism-white">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug px-8 py-4 mx-5 text-white text-center neo-brutalism-blue ">
      Hola, I am{" "}
      <span className=" font-semibold font-heading">Han Htunaung</span>👋🏾
      <br />
      <p className="text-white/70">A Front-End Developer from Malaysia</p>
    </h1>
  ),
  2: (
    <InfoBox
      text="Graduated from Computer University of Mandalay from Burma with a B.Sc. in Computer Science"
      link="/about"
      btnText="Read More"
    />
  ),
  3: (
    <InfoBox
      text="Involved and implemented many projects using React, Next.js, and Tailwind CSS.Want to explore? "
      link="/projects"
      btnText="Visit my Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a Front-End Developer position within the web development industry?Please contact me!"
      link="/contact"
      btnText="Contact Me"
    />
  ),
};

const HomeInfoComponents = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfoComponents;

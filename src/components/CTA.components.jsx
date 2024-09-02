import React from "react";
import { Link } from "react-router-dom";
import resume from '../assets/resume.pdf';

const CTAComponents = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Looking for a front end Developer? <br className="sm:block hidden" />
        Don't forget to Contact me!
      </p>
      <div className="flex gap-3 sm:flex-row flex-col">
        <a href={resume} className=" btn hover:scale-105 duration-300 active:scale-95 focus:ring-0" download >
          Download CV
        </a>
        <Link to={"/contact"} className="btn hover:scale-105 duration-300 active:scale-95 focus:ring-0">
          Contact
        </Link>
      </div>
    </section>
  );
};

export default CTAComponents;

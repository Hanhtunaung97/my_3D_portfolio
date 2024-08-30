import React from "react";
import { Link } from "react-router-dom";

const CTAComponents = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Looking for a front end Developer? <br className="sm:block hidden" />
        Don't forget to Contact me!
      </p>
      <Link to={"/contact"} className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTAComponents;

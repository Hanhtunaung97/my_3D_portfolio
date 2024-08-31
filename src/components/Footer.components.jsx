import React from "react";
import { socialLinks } from "../constants";
import { Link } from "react-router-dom";
const FooterComponents = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer font-heading mt-20 ">
      <div className="footer-container">
        <p>
          © {date} <strong>Han Htunaung</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <div
              key={link.name}
              className="block-container w-8 h-8 btn-back rounded-full"
            >
              <Link
                to={link.link}
                target="_blank"
                rel="noreferrer"
                className=" rounded-xl flex justify-center items-center btn-front"
              >
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className="w-6 h-6 object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterComponents;

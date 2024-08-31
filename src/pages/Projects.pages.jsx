import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { CTAComponents } from "../components";

const ProjectsPages = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Here are some of the projects I have worked on. I have worked on many
          projects using React, Next.js, and Tailwind CSS.Want to explore?
        </p>
      </div>
      <div className="my-16 flex flex-wrap gap-14">
        {projects.map((project) => (
          <div key={project.name} className="w-full lg:w-[400px]">
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className=" rounded-xl flex justify-center items-center btn-front">
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <h3 className="subhead-text">{project.name}</h3>
              <p className="text-slate-500">{project.description}</p>
              <div className="flex gap-3 items-center">
              <Link to={project.link}>Explore more</Link>
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className=" border-slate-200" />
      <CTAComponents/>
    </section>
  );
};

export default ProjectsPages;

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educations, experiences, skills } from "../constants";
import { CTAComponents } from "../components";
import FooterComponents from "../components/Footer.components";

const AboutPages = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hola 👋🏾{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          I'm Han Htunaung
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A Junior Front-End Web Developer who based in Malaysia.A good skilled
          ,quick learner and motivated junior web developer with solid
          background in Computer Science.Specialized in React, Next.js, and
          Tailwind CSS.Have technical education through hands-on learning and
          building web applications.
        </p>
      </div>
      <div className="py-10 flex flex-col gap-5">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-10 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className=" rounded-xl flex justify-center items-center btn-front">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Education */}
        <div className="py-16">
          <h3 className="subhead-text">My Education</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              {" "}
              I have learned my solid computer science knowledge background at{" "}
              <span className="italic">Computer University Mandalay</span> and
              level up my web development skills by learning and building web
              applications with UDEMY Academy's{" "}
              <span className="italic">
                Complete Web Development BootCamp Courses by Dr.Angela Yu
              </span>
              . Additionally, I trained my Front-End web development skills with{" "}
              <span className="italic">MMS-IT Solution LTD</span>.
            </p>
          </div>
          <div className=" flex mt-12">
            <VerticalTimeline>
              {educations.map((education) => (
                <VerticalTimelineElement
                  key={education.title}
                  date={education.date}
                  dateClassName="text-slate-500"
                  icon={
                    <div className="flex justify-center btn-front items-center w-full h-full">
                      <img
                        src={education.iconUrl}
                        alt={education.camp_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    boxShadow: "none",
                    borderBottomColor: education.iconBg,
                  }}
                  iconStyle={{ backgroundColor: education.iconBg }}
                >
                  <div>
                    <h3 className="text-xl text-black font-heading font-semibold">
                      {education.title}
                    </h3>
                    <p
                      style={{ margin: 0 }}
                      className=" font-medium text-base text-slate-500"
                    >
                      {education.camp_name}
                    </p>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
        {/* work experience */}
        <div className="py-16">
          <h3 className="subhead-text">My Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I am a Junior Front-End Web Developer.Leveling up my skills and
              knowledge with teaming up smart guys. I have experience in
            </p>
          </div>
          <div className=" flex mt-12">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    boxShadow: "none",
                    borderBottomColor: experience.iconBg,
                  }}
                  iconStyle={{ backgroundColor: experience.iconBg }}
                >
                  <div>
                    <h3 className="text-xl text-black font-heading font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      style={{ margin: 0 }}
                      className=" font-medium text-base text-black-500"
                    >
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-3">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className=" text-sm p-1 text-black-500/60 font-normal"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTAComponents />
      <FooterComponents />
    </section>
  );
};

export default AboutPages;

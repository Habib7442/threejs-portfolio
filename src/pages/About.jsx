import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { technologies, experiences } from "../constants";
import BallCanvas from "../models/Ball";
import CTA from "../components/CTA";
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm {""}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Habib
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Full Stack Developer from India.</p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Weapons I Use</h3>

        <div className="flex flex-wrap mt-16 gap-12">
          {technologies.map((technology, index) => (
            <div key={index} className="block-container w-24 h-24">
              <div className="btn-back rounded-xl" />
              <div
                className="w-28 h-28 btn-front rounded-xl flex justify-center items-center"
                key={technology.name}
              >
                <BallCanvas icon={technology.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-1">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{
                  backgroundColor: experience.iconBg
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-xl text-gray-500 font-semibold font-poppins">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={index}
                      className="text-black-500/50 font-normal pl-1 text-sm text-justify"
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
      <hr className="border-slate-300" />
      <CTA />
    </section>
  );
};

export default About;

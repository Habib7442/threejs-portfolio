import { useParams } from "react-router-dom";
import { useState } from "react";

const SingleProject = ({ projectData }) => {
  const { projectId } = useParams();
  const project = projectData[projectId];
  const [activeTab, setActiveTab] = useState("description");

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="w-full h-full bg-slate-700 relative pb-4">
      <section className="text-gray-300 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-gray-400 mt-8 italic font-serif text-3xl title-font font-medium mb-4">
                {project.title}
              </h1>
              <div className="flex mb-4">
                <button
                  onClick={() => handleTabClick("description")}
                  className={`flex-grow ${
                    activeTab === "description"
                      ? "text-indigo-500 border-b-2 border-indigo-500"
                      : "border-b-2 border-gray-300"
                  } py-2 text-lg px-1 focus:outline-none`}
                >
                  Description
                </button>
                <button
                  onClick={() => handleTabClick("reviews")}
                  className={`flex-grow ${
                    activeTab === "reviews"
                      ? "text-indigo-500 border-b-2 border-indigo-500"
                      : "border-b-2 border-gray-300"
                  } py-2 text-lg px-1 focus:outline-none`}
                >
                  Technologies
                </button>
                <button
                  onClick={() => handleTabClick("details")}
                  className={`flex-grow ${
                    activeTab === "details"
                      ? "text-indigo-500 border-b-2 border-indigo-500"
                      : "border-b-2 border-gray-300"
                  } py-2 text-lg px-1 focus:outline-none`}
                >
                  Visit my Project
                </button>
              </div>
              {activeTab === "description" && (
                <p className="leading-relaxed mb-4 text-justify font-mono">
                  <ul className="list-disc">
                    {project.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </p>
              )}
              {activeTab === "reviews" && (
                <p className="leading-relaxed mb-4 text-justify font-mono">
                  <ul className="list-disc">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}

                  </ul>
                </p>
              )}
              {activeTab === "details" && (
                <p className="leading-relaxed mb-4 font-mono gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black p-3 rounded-md"
                  >
                    Github
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black p-3 rounded-md ml-2"
                  >
                    Live
                  </a>
                </p>
              )}
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-96 h-72 lg:mt-8 object-cover object-center rounded"
              src={project.singleImg}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleProject;

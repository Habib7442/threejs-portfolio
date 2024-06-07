import ProjectGrid from "./ProjectGrid";
import projectData from "../utils/projectData";

const ProjectList = () => {
  return (
    <div className="mx-auto w-full h-[100%] p-4 bg-slate-900">
      <h1 className="lg:text-5xl text-4xl font-semibold text-center text-gray-400 p-4">
        Projects
      </h1>
      <ProjectGrid data={projectData} />
    </div>
  );
};

export default ProjectList;

import ProjectGrid from "./ProjectGrid";
import projectData from "../utils/projectData";

const ProjectList = ({ data }) => {
  return (
    <div className="mx-auto w-full h-[100%] p-4 bg-black-500">
      <h1 className="text-5xl font-bold text-center italic font-serif text-gray-400 p-4">
        Showcases
      </h1>
      <ProjectGrid data={projectData} />
    </div>
  );
};

export default ProjectList;


const ProjectItems = ({image, title}) => {
  return (
    <div className="p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-auto rounded-md shadow"
      />
      <p className="mt-2 text-gray-800 text-sm">{title}</p>
    </div>
  );
};

export default ProjectItems;

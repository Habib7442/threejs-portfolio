import { Link } from "react-router-dom";

const ProjectGrid = ({ data }) => {
  return (
    <main class="img-container pb-4">
      {data.map((item, index) => (
        <Link to={`/projects/${index}`} key={index}>
        <div key={index}>
          <img src={item.img} alt="image" />
        </div>
        </Link>
      ))}
    </main>
  );
};

export default ProjectGrid;

import { useDataStore } from "../store/useDataStore";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const { projects } = useDataStore();

  return (
    <>
      <div className='about-us-wrapper-wrapper'>
        <div
          className='about-us-wrapper-img'
          style={{
            fontSize: "40px",
            fontStyle: "italic",
            opacity: "0.8",
            fontFamily: "Playfair Display",
            alignContent: "center",
            padding: "20px 0px",
          }}
        >
          Utvalda Projekt
        </div>
      </div>
      <div className='project-parent'>
        {projects.map((project) => (
          <div key={project.id} className='projects-wrapper'>
            <Link to={`/projects/${project.id}`}>
              <div className='projects-wrapper-img' style={{ flex: "1" }}>
                <img src={project.image} alt={project.title} />
              </div>
            </Link>
            <div className='projects-wrapper-txt' style={{ flex: "2" }}>
              <div className='project-title-txt'>{project.title}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProjectsPage;

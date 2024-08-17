import { useDataStore } from "../store/useDataStore";

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
        <div className='about-us-wrapper-txt'></div>
      </div>
      {projects.map((project) => (
        <div key={project.id} className='projects-wrapper'>
          <div className='projects-wrapper-img' style={{ flex: "1" }}>
            <img src={project.image} alt={project.title} />
          </div>
          <div className='projects-wrapper-txt' style={{ flex: "2" }}>
            <div className='project-title-txt'>{project.title}</div>
            <div>{project.descriptions}</div>
          </div>
        </div>
      ))}
    </>
  );
};
export default ProjectsPage;

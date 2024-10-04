import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useDataStore } from "../../store/useDataStore";
import { useDragScroll } from "../../hooks/useDragScroll";

import "./selected-project.css";

const SelectedProject = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove } =
    useDragScroll(scrollContainerRef);

  const { projectId } = useParams();
  const { projects } = useDataStore();
  const project = projects.find((p) => p.id === projectId);

  return (
    <>
      <div className='about-us-wrapper-wrapper'>
        <div
          className='about-us-wrapper-img'
          style={{
            fontSize: "30px",
            fontStyle: "italic",
            fontFamily: "Playfair Display",
            paddingBottom: "20px",
          }}
        >
          {project?.title}
        </div>
      </div>
      <div className='slidebar-wrapper'>
        <div
          className='media-scroller'
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {project?.images?.map((project) => (
            <div key={project} className='media-element'>
              <img
                src={project}
                alt={project}
                className='image-unselect'
                draggable='false'
              />
            </div>
          ))}
        </div>
      </div>
      <div style={{ textAlign: "left", padding: "10px 0px", fontSize: "18px" }}>
        {project?.descriptions}
      </div>
    </>
  );
};
export default SelectedProject;

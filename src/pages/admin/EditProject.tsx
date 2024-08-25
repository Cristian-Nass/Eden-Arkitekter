import { useDataStore } from "../../store/useDataStore";
import { Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const EditProject = () => {
  const { projects } = useDataStore();

  return (
    <>
      {projects.map((project) => (
        <div key={project.id}>
          <Divider />
          <div style={{ textAlign: "left", fontWeight: "bold" }}>
            {project.title}
          </div>
          <div className='about-us-wrapper-txt'>{project.descriptions}</div>
          <div style={{ textAlign: "right" }}>
            <IconButton color='primary' aria-label='delete'>
              <DeleteIcon />
            </IconButton>

            {/* <EditModal
              title={abUs.title}
              descriptions={abUs.descriptions}
              id={abUs?.id}
            /> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default EditProject;

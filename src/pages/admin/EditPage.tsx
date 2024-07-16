import { useDataStore } from "../../store/useDataStore";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModal from "./EditModal";

const EditPage = () => {
  const { aboutUs } = useDataStore();
  const textShortener = (text: string) => {
    const truncatedText = text.length > 100 ? text.slice(0, 100) + "..." : text;
    return truncatedText;
  };

  return (
    <div style={{ paddingTop: "60px" }}>
      <div>Log out</div>
      {aboutUs.map((abUs) => (
        <div key={abUs.id}>
          <div style={{ textAlign: "left", fontWeight: "bold" }}>
            {abUs.title}
          </div>
          <div className='about-us-wrapper-txt'>
            {textShortener(abUs.descriptions)}
          </div>
          <div style={{ textAlign: "right" }}>
            <IconButton color='primary' aria-label='delete'>
              <DeleteIcon />
            </IconButton>
            {/* <IconButton color='primary' aria-label='edit'>
              <EditIcon />
              </IconButton> */}
            <EditModal
              title={abUs.title}
              descriptions={abUs.descriptions}
              id={abUs?.id}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EditPage;

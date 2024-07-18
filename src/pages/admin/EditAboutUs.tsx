import { useDataStore } from "../../store/useDataStore";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModal from "./EditModal";
import useMediaQuery from "@mui/material/useMediaQuery";
import useUserStore from "../../store/useUserStore";

const EditAboutUs = () => {
  const { user } = useUserStore();
  const matches = useMediaQuery("(min-width:600px)");

  const { aboutUs } = useDataStore();
  const textShortener = (text: string) => {
    const truncatedText = text.length > 100 ? text.slice(0, 100) + "..." : text;
    return truncatedText;
  };

  if (!user)
    return (
      <div style={{ paddingTop: matches ? "60px" : "20px" }}>
        You are not LogIn ...!
      </div>
    );

  return (
    <div style={{ paddingTop: matches ? "60px" : "20px" }}>
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

export default EditAboutUs;

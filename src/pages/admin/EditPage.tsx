import useMediaQuery from "@mui/material/useMediaQuery";
import useUserStore from "../../store/useUserStore";

const EditPage = () => {
  const { isAdmin } = useUserStore();
  const matches = useMediaQuery("(min-width:600px)");
  if (!isAdmin)
    return (
      <div style={{ paddingTop: matches ? "60px" : "20px" }}>
        You are not LogIn ...!
      </div>
    );

  return <div style={{ paddingTop: matches ? "60px" : "20px" }}></div>;
};

export default EditPage;

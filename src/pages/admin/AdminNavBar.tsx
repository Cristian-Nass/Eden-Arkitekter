import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/useUserStore";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

const AdminHeader = () => {
  const { logOut } = useUserStore();
  const navigate = useNavigate();

  const logingOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  };
  return (
    <>
      <div style={{ textAlign: "right", backgroundColor: "#F3F9F5" }}>
        <IconButton color='primary' aria-label='edit' onClick={logingOut}>
          <LogoutIcon />
        </IconButton>
      </div>
    </>
  );
};

export default AdminHeader;

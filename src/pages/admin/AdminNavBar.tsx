import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/useUserStore";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
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
      <div
        style={{
          backgroundColor: "#F3F9F5",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: "60px",
        }}
      >
        <Link to={"#"} style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link
          to={"/administration/edit/project"}
          style={{ textDecoration: "none" }}
        >
          Project
        </Link>
        <Link
          to={"/administration/edit/about-us"}
          style={{ textDecoration: "none" }}
        >
          Om oss
        </Link>
        <Link to={"#"} style={{ textDecoration: "none" }}>
          Kontakt
        </Link>
        <IconButton color='primary' aria-label='edit' onClick={logingOut}>
          <LogoutIcon />
        </IconButton>
      </div>
    </>
  );
};

export default AdminNavBar;

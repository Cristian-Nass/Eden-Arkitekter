import { useEffect } from "react";
import SignInPage from "./SignInPage";
import useUserStore from "../../store/useUserStore";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const { isAdmin } = useUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAdmin) {
      navigate("/administration/edit");
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) return <SignInPage />;
  return null;
};

export default AdminPage;

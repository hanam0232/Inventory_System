import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function AlertBox({ setAuth }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    if (setAuth) setAuth();
    navigate("/login");
  };

  return (
    <div className="alertBox">
      <button className="alert-btn">Profile</button>
      <button onClick={handleLogout} className="alert-btn">
        Logout
      </button>
    </div>
  );
}

export default AlertBox;

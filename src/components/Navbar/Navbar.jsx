import user2 from "../../data/UserData/image_user/user2.png";
import { goToDashboard } from "../../utils/navigation";
import pic2 from "../../data/image_data/pic2.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AlertBox from "./AlertBox";
import "./Navbar.css";

function Navbar({ status, setAuth }) {
  // Lấy dữ liệu user được lưu trong web
  const saveUser = localStorage.getItem("user");
  const user = saveUser ? JSON.parse(saveUser) : null;
  const navigate = useNavigate();

  const [alert, setAlert] = useState(false);
  function handleToggleAlert() {
    setAlert((prev) => !prev);
  }

  return (
    <div className="navbar-container">
      <div className="infoApp">
        <img
          onClick={() => goToDashboard(navigate)}
          className="avataApp"
          src={pic2}
          alt="avataApp"
        />
        <h1 onClick={() => goToDashboard(navigate)}>Inventory System</h1>
      </div>

      {/* chỉ hiện user khi đã login */}
      {status && user && (
        <div className="infoUser">
          <h2>Xin chao, {user.nameUser}</h2>
          <img className="avataUser" src={user2}></img>
          <button className="Profile" onClick={handleToggleAlert}>
            ☰
          </button>
          {alert && (
            <AlertBox
              setAuth={() => {
                setAlert(false);
                setAuth();
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;

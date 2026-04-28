import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ setAuth }) {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    setAuth();
    navigate("/login");
  };
  return (
    <div className="sidebar-container">
      <ul>
        <li>
          <NavLink to="/dashboard" className="link-navbar">
            ♚ Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/productList" className="link-navbar">
            ♛ ProductList
          </NavLink>
        </li>
        <li>
          <NavLink to="/inventoryList" className="link-navbar">
            ♜ InventoryList
          </NavLink>
        </li>
        <li>
          <button className="link-navbar" onClick={handleLogout}>
            ♝ Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

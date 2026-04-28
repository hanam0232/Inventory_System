import pic2 from "../../data/image_data/pic2.png";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <img className="avataApp" src={pic2} alt="avataApp" />
      <h1>Inventory System</h1>
    </div>
  );
}

export default Navbar;

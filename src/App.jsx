import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";
import InventoryList from "./components/InventoryList/InventoryList.jsx";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />

      <div className="navbar">
        {isLoggedIn && <Sidebar setAuth={() => setIsLoggedIn(false)} />}
        <div className="display-page">
          <Routes>
            <Route
              path="/login"
              element={<Login onLogin={() => setIsLoggedIn(true)} />}
            />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route
              path="dashboard"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/inventoryList"
              element={
                isLoggedIn ? <InventoryList /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/productList"
              element={isLoggedIn ? <ProductList /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

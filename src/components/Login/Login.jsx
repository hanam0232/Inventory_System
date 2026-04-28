import { useNavigate } from "react-router-dom";
import { USER_TEST } from "../../data/UserData/user.js";
import { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const userFound = USER_TEST.find(
      (user) => username === user.username && password === user.password,
    );

    if (userFound) {
      localStorage.setItem("user", JSON.stringify(userFound));
      onLogin();
      navigate("/dashboard");
    } else {
      alert("Sai tai khoan/mat khau");
    }
  }

  return (
    <div className="background-login">
      <form className="login-container" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="information">
          {/* Username */}
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
        </div>
        {/* Password */}
        <div className="information">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>
        <button className="submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

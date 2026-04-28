import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ onLogin }) {
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    onLogin();
    navigate("/dashboard");
  }
  return (
    <div className="background-login">
      <form className="login-container" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="information">
          <label>Username</label>
          <input type="text" placeholder="Username"></input>
        </div>

        <div className="information">
          <label>Password</label>
          <input type="password" placeholder="Password"></input>
        </div>

        <button className="submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

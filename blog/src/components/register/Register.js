import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="Register">
      <form className="RegisterForm" onSubmit={hanldeSubmit}>
        <span>Register</span>
        <label htmlFor="username">Username</label>
        <input
          className="inputRegister"
          type="text"
          placeholder="Enter your username ..."
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          className="inputRegister"
          type="email"
          placeholder="Enter your email ..."
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Password">Password</label>
        <input
          className="inputRegister"
          type="password"
          placeholder="Enter your Password ..."
          id="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="RegisterBtn">
          <Link to="/register">Register</Link>
        </button>
        <button className="RegisterRegisterBtn">
          <Link to="/login">Login</Link>
        </button>
        {error && (
          <span
            style={{
              color: "red",
              fontSize: "0.8rem",
              marginTop: "10px",
              fontWeight: "normal",
            }}
          >
            L'utilisateur existe déjà
          </span>
        )}
      </form>
    </div>
  );
};

export default Register;

import axios from "axios";
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Contex";

import "./Login.css";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        paswword: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className="Login">
      <form className="LoginForm" onSubmit={handleSubmit}>
        <span>Login</span>

        <label htmlFor="username">Username</label>
        <input
          className="inputLogin"
          type="text"
          placeholder="Enter your user ..."
          id="username"
          ref={userRef}
        />
        <label htmlFor="Password">Password</label>
        <input
          className="inputLogin"
          type="password"
          placeholder="Enter your Password ..."
          id="Password"
          ref={passwordRef}
        />
        <button type="submit" className="LoginBtn" disabled={isFetching}>
          login
        </button>
      </form>
      <button type="submit" className="LoginRegisterBtn">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default Login;

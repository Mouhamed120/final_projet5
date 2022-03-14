import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Context } from "../context/Contex";

const Menu = () => {
  const { user, dispatch } = useContext(Context);
  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <nav>
      <div className="logo">MN</div>
      <div>
        <ul className="nav-item">
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/write"}>Write</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/about"}>A propos</Link>
          </li>
          <li onClick={handleClick}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div>
        {user ? (
          <Link to={"settings"}>
            <img
              src={"http://localhost:5000/images/" + user.profilePic}
              alt="Je suis une "
              className="topImg"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link to="/register">REGISTER</Link>
            </li>
            <li>
              <i className="topSearchIcon fas fa-search"></i>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Menu;

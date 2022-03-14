import "./sidebar.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./sidebar.css";
const SideBar = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="images/about3.jpg" alt="comment" />
        <p>
          <span style={{ fontWeight: "bold" }}>
            Mouhamed NDAO Etudiant chez Xarala<br></br>
          </span>
          Ceci est mon premier projet (React , Nodjs et mongoDB ).je sais que
          y'a beacoup de chose à voir et rectifier. Je suis débutant en ce
          moment.Je compte avec le temps ajouter d'autre fonctionnalité<br></br>
          On peut ajouter un article <br />
          on peut modifier / on peut aussi supprimer <b></b>
          J'ai aussi établi un système authentification assez léger <br />
          Une fois qu'un utilisateur se connecte il peut voir l'ensemble des
          posts il peut créer/ajouter/modifier/supprimer mais uniquement les
          posts qui sont liés à lui
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((c) => {
              return (
                <Link to={`/?cat=${c.name}`} key={c._id}>
                  <li className="sidebarListItem">{c.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

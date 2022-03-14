import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header-title">My Blog</h1>
        <p className="header-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
          suscipit! Nostrum aspernatur ex alias sapiente vero, deserunt adipisci
          aperiam cum, obcaecati quidem praesentium sint, ipsum error distinctio
          nulla aliquid. Atque?
        </p>
        <button>En savoir ...</button>
      </div>
    </div>
  );
};

export default Header;

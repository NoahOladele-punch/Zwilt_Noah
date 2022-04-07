import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

function Head() {
  return (
    <div className="head">
      <div className="navbar">
        <Link className="to-home" to="/home">
          <div className="logo">
          <a class="navbar-brand" href="/bot.html"><h4>Zwilt<img width="20px" height="20px" src="icon.png"></img></h4></a>
          </div>
        </Link>
      </div>
     </div>

  );
}

export default Head;

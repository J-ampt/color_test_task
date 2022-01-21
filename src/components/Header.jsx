import React from "react";
import {Link} from "react-router-dom";

function Header(){
  return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand"><img src="./img1.png" width="50" height="32"></img></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/form" className="nav-link">Form</Link>
      </li>
    </ul>
  </div>
</nav>)
}
export default Header;
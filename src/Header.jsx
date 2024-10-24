import React from "react";
import { Link } from "react-router-dom";
import sail from "./assets/sail.mp3";
import AudioPlayer from "./AudioPlayer";
function Header() {
  return (
    <nav className="nav-container">
      <ul className="ul-container">
        <li>
          <h3 className="portfolio">Portfolio</h3>

          <AudioPlayer />
        </li>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

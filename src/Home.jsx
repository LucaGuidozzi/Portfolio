import React from "react";
import fotoluca from "./assets/fotoluca.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div>
        <h1>
          Hello! I'm <span>LUCA GUIDOZZI</span> a Junior Full-Stack Web
          Developer. I studied front-end and back-end technoligies. I'm ready to
          work and to practice what I have learned.
        </h1>
        <Link to="/About">LET'S GO</Link>
      </div>
      <div>
        <img className="fotoluca" src={fotoluca} alt="foto luca" />
      </div>
    </div>
  );
}

export default Home;

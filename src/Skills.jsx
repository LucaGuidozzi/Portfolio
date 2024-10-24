import React from "react";
import bootstrap from "./assets/bootstrap.png";
import CSS3 from "./assets/CSS3.svg";
import express from "./assets/express.png";
import git from "./assets/git.png";
import github from "./assets/github.webp";
import html from "./assets/html.jpg";
import mondodb from "./assets/mongodb.jpg";
import node from "./assets/node.png";
import react from "./assets/react.png";
import javascript from "./assets/javascript.png";
import sass from "./assets/sass.jpg";

function Skills() {
  return (
    <div className="skills-container">
      <div>
        <h1>Hard Skills</h1>
        <p>Le tecnologie che ho studiato durante il corso sono: </p>

        <img src={html} alt="html" />
        <img src={CSS3} alt="css3" />
        <img src={javascript} alt="javascript" />
        <img src={bootstrap} alt="bootstrap" />
        <img src={react} alt="react" />
        <img src={sass} alt="sass" />
        <img src={node} alt="node" />
        <img src={express} alt="express" />
        <img src={mondodb} alt="mongodb" />
        <img src={git} alt="git" />
        <img src={github} alt="github" />
      </div>
      <div>
        <h1>Soft skills</h1>
        <p>
          La mia esperiena in Parmalat mi ha insegnato a risolvere i vari
          problemi che ci possono essere sulle macchine o sulle linee, a
          lavorare con altre persone e rapportarmi con loro, a gestire il lavoro
          e dover rispettare le varie tempistiche di cambi prodotti, lavaggi e
          preparazioni macchina. Quindi ne posso stilare una lista:
        </p>
        <ul>
          <li>Problem solving</li>
          <li>Gestione del lavoro</li>
          <li>Lavoro in team</li>
          <li>Precisione</li>
          <li>Proattività</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;

import React from "react";
import ecommerce from "./assets/ecommerce.png";
import forum from "./assets/forum.png";
import quiz from "./assets/quiz.png";
import { Link } from "react-router-dom";

function Projects() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="titolo-container">
        <h1>Progetti</h1>
        <p>
          Durante il corso ho affrontato diversi progetti spaziando da una
          tecnologia all'altra in cui ho inserito anche nel repository di
          Github. Questi progetti che condivido sono stati fatti in autonomia e
          non durante il corso.
        </p>
      </div>
      <div className="progetti-container">
        <div>
          <h3>Forum</h3>
          <p>
            Progetto finale che ho sviluppato per il corso a cui ho partecipato
            in Digitazon. Il progetto è stato cosi realizzato: -Front-end:
            React.js. -Back-end: Node.js. -Database: MongoDB. In quest'
            applicazione ci sono 4 chiamate HTTP , una per verbo (GET, POST,
            DELETE, PUT).
            <a
              target="_blank"
              href="https://github.com/LucaGuidozzi/Progetto-forum"
            >
              Clicca qui per il codice
            </a>
          </p>

          <div>
            <img src={forum} alt="forum" />
          </div>
        </div>
        <div>
          <h3>Quiz</h3>
          <p>
            Condivido quest'applicazione web in cui ho realizzato in lato
            front-end con React.js un Quiz Nautico. Progetto personale in cui ho
            unito la mia passione per il mare ⛵ con la mia passione per
            l'informatica e la tecnologia 👨‍💻 .{" "}
            <a href="https://github.com/LucaGuidozzi/Quiz">
              Clicca qui per il codice
            </a>
          </p>
          <div>
            <img src={quiz} alt="quiz" />
          </div>
        </div>
        <div>
          <h3>E-commerce</h3>
          <p>
            Volendo stare nell'ambito e-commerce ho voluto realizzare un piccolo
            sito personale, più specificatamente un piccolo negozio online in
            cui vendo i miei prodotti che non uso più. Ho utilizzato React.js
            per questo lavoro che è stato molto soddisfacente.
            <a href="https://github.com/LucaGuidozzi/E-commerce">
              Clicca qui per il codice
            </a>
          </p>
          <div>
            <img src={ecommerce} alt="ecommerce" />
            <button onClick={scrollToTop}>Torna su</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

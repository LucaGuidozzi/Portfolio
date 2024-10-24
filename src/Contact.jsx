import React from "react";

function Contact() {
  return (
    <div className="contatti-container">
      <h1>Contatti</h1>

      <div className="container">
        <h3>Telefono:</h3> <p>tel: +39 346 4038473</p>
        <h3>Email:</h3> <p>guidozzi94@gmail.com</p>
        <h3>Indirizzo Linkedin:</h3>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/luca-guidozzi-14134b256/"
        >
          {" "}
          Clicca qui
        </a>
        <h3>Indirizzo Github:</h3>
        <a target="_blank" href="https://github.com/LucaGuidozzi">
          Clicca qui
        </a>
      </div>
      <h1 className="titolo-info">Contattami per info, non esitare.</h1>
    </div>
  );
}

export default Contact;

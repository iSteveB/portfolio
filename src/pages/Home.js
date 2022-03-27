import React from "react";
import DownloadCV from "../components/DownloadCV";
import Header from "../components/Header";
import Logo from "../components/Logo";

const Accueil = () => {
  return (
    <div className="home">
      <Header />

      <section className="presentation">
        <Logo />
        <h1> Steve BASSE</h1>
        <h2>Développeur web FullStack JS</h2>
        <DownloadCV />
      </section>

      <section className="welcome">
        <h2>Bonjour !</h2>
        <div className="introduction">
          <p>
            Bienvenue sur mon portfolio ! Je suis Steve, étudiant chez
            OpenClassrooms où je prépare un titre RNCP Bac +2 développeur web.
            Les langages que j’utilise sont juste ici <br /> J’aime le code
            propre, simple et efficace et cherche donc à apprendre dans ce sens.
          </p>
          <div className="languages">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;

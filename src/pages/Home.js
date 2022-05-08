import React from "react";
import DownloadCV from "../components/DownloadCV";
import Header from "../components/Header";
import Sphere from "../components/Sphere";
import Logo from "../components/Logo";
import Slider from "../components/Slider";
import ContactForm from "../components/ContactForm";

import { SliderData } from "../components/SliderData";

const Accueil = () => {
  return (
    <div className="home">
      <Header />

      <div className="presentation">
        <Logo />
        <h1> Steve BASSE</h1>
        <h2>Développeur web FullStack JS</h2>
        <DownloadCV />
      </div>

      <section className="welcome">
        <h2>Bonjour !</h2>
        <div className="introduction">
          <div>
            <p>
              Bienvenue sur mon portfolio !
              <br />
              Je suis Steve, étudiant chez OpenClassrooms où je prépare un titre
              RNCP Bac +2 <strong>développeur web</strong>.
            </p>
            <p>
              En ce moment, je m'amuse avec <strong>React</strong> et je continue d'apprendre de
              nouvelles choses au travers de ma veille techno. J’aime le code
              propre, simple et efficace et cherche donc à apprendre dans ce
              sens.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt, praesentium ut? Animi rerum sapiente, molestias, ullam
              illum pariatur quam ipsa obcaecati reiciendis molestiae beatae rem
              magni eaque quibusdam corrupti corporis?
            </p>
              <a href="https://www.google.fr/">
                En savoir plus
              </a>
          </div>

         <Sphere />
        </div>
      </section>

      <section className="lastProjects">
        <h2>Quelques réalisations</h2>
        <Slider slides={SliderData} />

      </section>

      <section className="contact">
        <h2>Commencer à converser</h2>
        <ContactForm />
      </section>

      
    </div>
  );
};

export default Accueil;

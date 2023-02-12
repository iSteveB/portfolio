import React, {useRef} from "react";
import DownloadCV from "../components/DownloadCV";
import Header from "../components/Header";
import Sphere from "../components/Sphere";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

import { projectsList } from "../Data/projectsList";

const Accueil = () => {
  const myRef = useRef(null);

  return (
    <div className="home">
      <Header />

      <div className="intro">
        <Logo welcomeSection={myRef}/>
        <h1> Steve BASSE</h1>
        <h2>Développeur web React & Node.js</h2>
        <DownloadCV />
      </div>

      <section ref={myRef} className="welcome">
        <h2>Hello ! 👋</h2>
        <div className="presentation">
          <div className="text-presentation">
            <p>
              
                Je suis Steve, étudiant chez OpenClassrooms où je prépare un titre
              RNCP Bac +2 <strong>développeur web</strong>.
            </p>
            <p>
              En ce moment, je découvre <strong>TypeScript</strong> et je continue d'approfondir mes connaissances au travers de ma veille techno.
              J’aime le code propre et efficace et cherche donc à apprendre dans ce sens.
            </p>
            <p>
              Si vous souhaitez en savoir plus, n'hésitez pas à jeter un oeil à mes réalisations et à télécharger mon CV.
            </p>
              <DownloadCV/>
          </div>

         <Sphere />
        </div>
      </section>

      <section className="portfolio">
        <h2>Quelques réalisations</h2>
        <Portfolio projects={projectsList} />
      </section>

      <section className="contact">
        <h2>Lancer la discussion</h2>
        <ContactForm />
      </section>

      <Footer/>
    </div>
  );
};

export default Accueil;

import DownloadCV from '../components/DownloadCV';
import Header from '../components/Header';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

import { projectsList } from '../Data/projectsList';

import cleanCodeIcon from '../assets/images/icons/clean_code.png';
import responsiveIcon from '../assets/images/icons/responsive.png';
import seoIcon from '../assets/images/icons/seo.png';

const Accueil = () => {
    return (
        <div className='home'>
            <Header />
            <div className='intro-container'>
                <div className='intro'>
                    <Logo size='xl' />
                    <h2>Web Developer React & Node.js</h2>
                    <DownloadCV />
                </div>
            </div>

            <section className='welcome'>
                <h2>My Skills</h2>
                <div className='presentation'>
                    <div className='text-presentation'>
                        <div>
                            <img src={seoIcon} alt='seo' />
                            <h5>SEO</h5>
                            <p>
                                Optimizing website content, improving search
                                engine rankings
                            </p>
                        </div>
                        <div>
                            <img src={cleanCodeIcon} alt='clean code' />
                            <h5>Clean Code</h5>
                            <p>
                                Writing clean code easily readable,
                                maintainable, and adheres to industry best
                                practices
                            </p>
                        </div>
                        <div>
                            <img src={responsiveIcon} alt='Responsive' />
                            <h5>Responsive</h5>
                            <p>
                                Get quality website adapted for each one of your
                                machine
                            </p>
                        </div>
                    </div>
                </div>
                <Skills direction='left' />
            </section>

            <section className='portfolio'>
                <h2>Mes projets récents</h2>
                <Portfolio projects={projectsList} />
            </section>

            <section>
                <h2>Lancer la discussion</h2>
                <ContactForm />
            </section>

            <Footer />
        </div>
    );
};

export default Accueil;

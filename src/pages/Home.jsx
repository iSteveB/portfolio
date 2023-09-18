import DownloadCV from '../components/DownloadCV';
import Header from '../components/Header';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import Stack from '../components/Stack';

import cleanCodeIcon from '../assets/images/icons/clean_code.png';
import responsiveIcon from '../assets/images/icons/responsive.png';
import speedIcon from '../assets/images/icons/speed.png';

import { useTranslation } from 'react-i18next';



const Accueil = () => {

    const { t } = useTranslation('translation');

    return (
        <div className='home'>
            <Header />
            <div className='intro-container'>
                <div className='intro'>
                    <Logo size='xl' />
                    <h2>{t('homepage.job')} React & Node.js</h2>
                    <DownloadCV />
                </div>
            </div>

            <section className='skills'>
                <h2>{t('homepage.skills.title')}</h2>
                <div className='competences-container'>
                    <div className='competences'>
                        <div>
                            <img src={speedIcon} alt='seo' />
                            <h5>Performance</h5>
                            <p>
                                {t('homepage.skills.performance')}
                            </p>
                        </div>
                        <div>
                            <img src={cleanCodeIcon} alt='clean code' />
                            <h5>Clean Code</h5>
                            <p>
                            {t('homepage.skills.cleanCode')}
                            </p>
                        </div>
                        <div>
                            <img src={responsiveIcon} alt='Responsive' />
                            <h5>Responsive</h5>
                            <p>
                            {t('homepage.skills.responsive')}
                            </p>
                        </div>
                    </div>
                </div>
                <Stack direction='left' />
            </section>

            <section className='portfolio'>
                <h2>{t('homepage.lastProjects.title')}</h2>
                <Portfolio />
            </section>

            <section className='contact'>
                <h2>{t('contact.letsTalk')}</h2>
                <ContactForm />
            </section>

            <Footer />
        </div>
    );
};

export default Accueil;

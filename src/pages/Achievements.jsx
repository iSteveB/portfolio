import React from 'react';
import Header from '../components/Header';
import buildingProgress from '../assets/images/icons/building-progress.png';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'

const Achievements = () => {
    const { t } = useTranslation('translation');
    return (
        <motion.div
            className='achievements'
        >
            <Header />
            <div className='container'>
                <div className='title-container'>
                    <h1>{t('portfolio.progress')}</h1>
                </div>
                <div className='img-container'>
                    <img src={buildingProgress} alt='building progress' />
                </div>
            </div>
        </motion.div>
    );
};

export default Achievements;

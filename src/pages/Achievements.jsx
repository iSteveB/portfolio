import React from 'react';
import Header from '../components/Header';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Achievements = () => {
    const { t } = useTranslation('translation');
    return (
        <motion.div className='achievements'>
            <Header />
            <div className='all-projects'>
                <ul>
                    <ProjectCard />
                </ul>
            </div>
            <div className='container'></div>
        </motion.div>
    );
};

export default Achievements;

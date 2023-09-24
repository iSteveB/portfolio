import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import externalLink from '../assets/images/icons/external-link.svg';
import loongStory from '../assets/images/projects/loong-story.png';
import whereInTheWorld from '../assets/images/projects/where-in-the-world.png';
import yummyNouilles from '../assets/images/projects/yummy-nouilles.png';

const Portfolio = () => {
    const { t } = useTranslation('translation');

    const projectsList = [
        {
            id: 1,
            name: 'Yummy Nouilles',
            image: yummyNouilles,
            hardSkills: ['Javascript', 'CSS3', 'API'],
            address: 'https://yummynouilles.vercel.app/',
            text: t('homepage.lastProjects.project1.description'),
        },
        {
            id: 2,
            name: 'Where In The World',
            image: whereInTheWorld,
            hardSkills: ['Sass', 'React', 'API'],
            address: 'https://world-map-v01.vercel.app/',
            text: t('homepage.lastProjects.project2.description'),
        },
        {
            id: 3,
            name: 'Loong Story',
            image: loongStory,
            hardSkills: ['React', 'Redux', 'Node.js', 'MongoDB', 'Sass'],
            address: 'https://loongstory.onrender.com',
            text: t('homepage.lastProjects.project3.description'),
        },
    ];

    const lastProjects = projectsList.slice(0, 3);

    const [activeIndex, setActiveIndex] = useState({
        activeObject: null,
        objects: lastProjects,
    });

    const toogleClass = (index) => {
        setActiveIndex({
            ...activeIndex,
            activeObject: activeIndex.objects[index],
        });
    };

    useEffect(() => {}, [activeIndex]);

    return (
        <>
            <motion.div className='quadriptyque'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}>
                {lastProjects.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                activeIndex.objects[index] ===
                                activeIndex.activeObject
                                    ? 'image active'
                                    : 'image'
                            }
                            style={{
                                background: `url(${project.image}) center/cover`,
                            }}
                            onClick={() => toogleClass(index)}>
                            <div className='text-container'>
                                <div className='text'>
                                    <h3>{project.name}</h3>
                                    <p>{project.text}</p>
                                    <div className='tags'>
                                        {project.hardSkills.map((tag) => {
                                            return <span key={tag}>{tag}</span>;
                                        })}
                                    </div>
                                    <a
                                        href={project.address}
                                        target='_blank'
                                        rel='noreferrer'>
                                        {t('common.haveALook')}{' '}
                                        <img
                                            src={externalLink}
                                            alt='external link'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </>
    );
};

export default Portfolio;

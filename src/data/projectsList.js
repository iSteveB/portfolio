import loongStory from '../assets/images/projects/loong-story.jpg';
import whereInTheWorld from '../assets/images/projects/where-in-the-world.jpg';
import yummyNouilles from '../assets/images/projects/yummy-nouilles.jpg';
import i18next from 'i18next';



export const projectsList = [
    {
        id: 1,
        name: 'Yummy Nouilles',
        image: yummyNouilles,
        hardSkills: ["Javascript", "CSS3", "API"],
        address: 'https://yummynouilles.vercel.app/',
        text: i18next.t('homepage.lastProjects.project1.description'),
    },
    {
        id: 2,
        name: 'Where In The World',
        image: whereInTheWorld,
        hardSkills: ["Sass", "React", "API"],
        address: 'https://world-map-v01.vercel.app/',
        text: i18next.t('homepage.lastProjects.project2.description'),
    },
    {
        id: 3,
        name: 'Loong Story',
        image: loongStory,
        hardSkills: ["React", "Redux", "Node.js", "MongoDB", "Sass"],
        address: 'https://loongstory.onrender.com',
        text: i18next.t('homepage.lastProjects.project3.description'),
    },
];

import calc from '../assets/images/projects/calc.jpg';
import comingSoon from '../assets/images/projects/coming-soon.jpg';
import travelAgency from '../assets/images/projects/travel-agency.jpg';
import zozor from '../assets/images/projects/zozor.jpg';
import mongoDB from '../assets/images/icons/mongodb.svg';

export const projectsList = [
    {
        id: 1,
        name: 'Yummy Nouilles',
        image: calc,
        hardSkills: 'JavaScript, CSS3, API',
        address: 'https://calculate-eight.vercel.app/',
        text: 'Site vitrine d\'un restaurant utilisant l\'api Map de Google.'
    },
    {
        id: 2,
        name: 'Where In The World',
        image: comingSoon,
        hardSkills: 'React, API, Sass',
        address: 'https://coming-soon-page-nu.vercel.app/',
        text: 'Application présentant les pays du monde.',
    },
    {
        id: 3,
        name: 'Loong Story',
        image: travelAgency,
        hardSkills: 'React, Redux, Node.js, MongoDB, Sass',
        address: 'https://travel-agency-beta.vercel.app/',
        text: "Réseau social.",
    },
    {
        id: 4,
        name: 'Blog de Zozor',
        image: zozor,
        hardSkills: 'CSS',
        address: 'https://zozor.vercel.app/',
        text: "Découverte d'HTML et de CSS",
    },
];

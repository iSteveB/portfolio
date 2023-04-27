import calc from '../assets/images/projects/calc.jpg';
import comingSoon from '../assets/images/projects/coming-soon.jpg';
import travelAgency from '../assets/images/projects/travel-agency.jpg';
import zozor from '../assets/images/projects/zozor.jpg';
import mongoDB from '../assets/images/icons/mongodb.svg';

export const projectsList = [
    {
        id: 1,
        name: 'Calculatrice',
        image: calc,
        languages: 'JavaScript',
        adress: 'https://calculate-eight.vercel.app/',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repudiandae?',
    },
    {
        id: 2,
        name: 'Coming soon page',
        image: comingSoon,
        languages: mongoDB,
        adress: 'https://coming-soon-page-nu.vercel.app/',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repudiandae?',
    },
    {
        id: 3,
        name: 'Travel Agency',
        image: travelAgency,
        languages: 'CSS',
        adress: 'https://travel-agency-beta.vercel.app/',
        text: "Landing page d'une agence de voyage",
    },
    {
        id: 4,
        name: 'Blog de Zozor',
        image: zozor,
        languages: 'CSS',
        adress: 'https://zozor.vercel.app/',
        text: "Découverte d'HTML et de CSS",
    },
];

import loongStory from '../assets/images/projects/loong-story.png';
import whereInTheWorld from '../assets/images/projects/where-in-the-world.png';
import yummyNouilles from '../assets/images/projects/yummy-nouilles.png';




export const projectsList = [
    {
        id: 1,
        name: 'Yummy Nouilles',
        image: yummyNouilles,
        hardSkills: ["Javascript", "CSS3", "API"],
        address: 'https://yummynouilles.vercel.app/',
        text: 'Site vitrine d\'un restaurant utilisant l\'API Map de Google.'
    },
    {
        id: 2,
        name: 'Where In The World',
        image: whereInTheWorld,
        hardSkills: ["Sass", "React", "API"],
        address: 'https://world-map-v01.vercel.app/',
        text: 'Application présentant les pays du monde.',
    },
    {
        id: 3,
        name: 'Loong Story',
        image: loongStory,
        hardSkills: ["React", "Redux", "Node.js", "MongoDB", "Sass"],
        address: 'https://travel-agency-beta.vercel.app/',
        text: "Réseau social Twitter-like.",
    },
];

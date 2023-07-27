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
        text: 'Restaurant\'s website using Google Map API.'
    },
    {
        id: 2,
        name: 'Where In The World',
        image: whereInTheWorld,
        hardSkills: ["Sass", "React", "API"],
        address: 'https://world-map-v01.vercel.app/',
        text: 'Web app presenting country in the world.',
    },
    {
        id: 3,
        name: 'Loong Story',
        image: loongStory,
        hardSkills: ["React", "Redux", "Node.js", "MongoDB", "Sass"],
        address: '',
        text: "Twitter-like social network.",
    },
];

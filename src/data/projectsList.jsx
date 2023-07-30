import loongStory from '../assets/images/projects/loong-story.jpg';
import whereInTheWorld from '../assets/images/projects/where-in-the-world.jpg';
import yummyNouilles from '../assets/images/projects/yummy-nouilles.jpg';




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
        address: 'https://loongstory.onrender.com/home',
        text: "Twitter-like social network.",
    },
];

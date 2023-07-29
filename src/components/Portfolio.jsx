import { useState } from 'react';
import externalLink from '../assets/images/icons/external-link.svg';
import { projectsList } from '../data/projectsList';

const Portfolio = () => {
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

    return (
        <section className='portfolio'>
            <div className='quadriptyque'>
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
                                            return <span>{tag}</span>;
                                        })}
                                    </div>
                                    <a
                                        href={project.address}
                                        target='_blank'
                                        rel='noreferrer'>
                                        Have a look{' '}
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
            </div>
        </section>
    );
};

export default Portfolio;

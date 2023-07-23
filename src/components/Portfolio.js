import { useState } from 'react';
import externalLink from '../assets/images/icons/external-link.svg';

const Portfolio = ({ projects }) => {
    const [activeIndex, setActiveIndex] = useState({
        activeObject: null,
        objects: projects,
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
                {projects.map((project, index) => {
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

                                    {project.hardSkills.map((language) => {
                                        return <span>{language}</span>;
                                    })}
                                    <br />
                                    <a
                                        href={project.address}
                                        target='_blank'
                                        rel='noreferrer'>
                                        Visiter le site{' '}
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

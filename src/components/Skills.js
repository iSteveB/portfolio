import React from 'react';
import node from '../assets/images/icons/node.svg';
import sass from '../assets/images/icons/sass.svg';
import nextjs from '../assets/images/icons/nextjs.svg';
import bootstrap from '../assets/images/icons/bootstrap.svg';
import express from '../assets/images/icons/express.svg';
import figma from '../assets/images/icons/figma.svg';
import github from '../assets/images/icons/github.svg';
import javascript from '../assets/images/icons/javascript.svg';
import jquery from '../assets/images/icons/jquery.svg';
import mongodb from '../assets/images/icons/mongodb.svg';
import notion from '../assets/images/icons/notion.svg';
import react from '../assets/images/icons/react.svg';
import redux_toolkit from '../assets/images/icons/redux_toolkit.svg';
import tailwind from '../assets/images/icons/tailwind.svg';
import typescript from '../assets/images/icons/typescript.svg';

const Skills = ({direction}) => {
    return (
        <div className='skills-container'>
                <div className={direction === "right" ? "skills-move-right" : "skills-move-left"}>
                    <img src={node} alt='node' />
                    <img src={sass} alt='sass' />
                    <img src={nextjs} alt='nextjs' />
                    <img src={bootstrap} alt='bootstrap' />
                    <img src={express} alt='express' />
                    <img src={figma} alt='figma' />
                    <img src={github} alt='github' />
                    <img src={javascript} alt='javascript' />
                    <img src={jquery} alt='jquery' />
                    <img src={mongodb} alt='mongodb' />
                    <img src={notion} alt='notion' />
                    <img src={react} alt='react' />
                    <img src={redux_toolkit} alt='redux_toolkit' />
                    <img src={typescript} alt='typescript' />
                    <img src={tailwind} alt='tailwind' />
                </div>
                <div className={direction === "right" ? "skills-move-right" : "skills-move-left"}>
                    <img src={node} alt='node' />
                    <img src={sass} alt='sass' />
                    <img src={nextjs} alt='nextjs' />
                    <img src={bootstrap} alt='bootstrap' />
                    <img src={express} alt='express' />
                    <img src={figma} alt='figma' />
                    <img src={github} alt='github' />
                    <img src={javascript} alt='javascript' />
                    <img src={jquery} alt='jquery' />
                    <img src={mongodb} alt='mongodb' />
                    <img src={notion} alt='notion' />
                    <img src={react} alt='react' />
                    <img src={redux_toolkit} alt='redux_toolkit' />
                    <img src={typescript} alt='typescript' />
                    <img src={tailwind} alt='tailwind' />
                </div>
        </div>
    );
};

export default Skills;

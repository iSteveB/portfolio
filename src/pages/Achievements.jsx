import React from 'react';
import Header from '../components/Header';
import buildingProgress from '../assets/images/icons/building-progress.png';

const Achievements = () => {
    return (
        <div className='achievements'>
            <Header />
            <div className='container'>
                <div className='title-container'>
                    <h1>Working Progress...</h1>
                </div>
                <div className='img-container'>
                    <img src={buildingProgress} alt='building progress' />
                </div>
            </div>
        </div>
    );
};

export default Achievements;

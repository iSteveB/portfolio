import React from 'react';
import Header from '../components/Header';
import buildingProgress from '../assets/images/icons/building-progress.svg'

const Achievements = () => {
    return (
        <div className='achievements'>
            <Header />
            <h1>Working Progress...</h1>
            <img className="build" src={buildingProgress} alt="building progress" />
        </div>
    );
};

export default Achievements;
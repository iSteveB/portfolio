import React from 'react';
import Header from '../components/Header';

const Achievements = () => {
    return (
        <div className='achievements'>
            <Header />
            <div className="timeline">
                <div className="dot-container">
                    <button className="dot">
                        <div className="red"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
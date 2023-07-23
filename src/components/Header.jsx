import React from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <Link to="/"><Logo size='s'/></Link>
                <Navigation />
            </div>
        </div>
    );
};

export default Header;
 
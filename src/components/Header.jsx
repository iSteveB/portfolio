import React from 'react';
import Navigation from './Navigation';
import SocialNetwork from './SocialNetwork';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <Link to='/'>
                    <Logo size='s' />
                </Link>
                <Navigation />
                <SocialNetwork />
                <div className='navbar-burger'>
                    <span className='burger-menu'></span>
                </div>
            </div>
        </div>
    );
};

export default Header;

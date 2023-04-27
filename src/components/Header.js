import React from 'react';
import Navigation from './Navigation';
import SocialNetwork from './SocialNetwork';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <Link to="/"><img src={logo} alt='logo' width='73px' height='73px' /></Link>
                <Navigation />
                <SocialNetwork />
            </div>
        </div>
    );
};

export default Header;
 
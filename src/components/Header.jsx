import { useState } from 'react';
import Navigation from './Navigation';
import SocialNetwork from './SocialNetwork';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import burgerButton from '../assets/images/icons/burger-menu.svg';
import closeButton from '../assets/images/icons/close.svg';

const Header = () => {
    const [showMenu, setshowMenu] = useState(false);

    const handleShowMenu = () => {
        setshowMenu(!showMenu);
    };

    return (
        <div className='header-container'>
            <div className='header'>
                
                <Link to='/'>
                    <Logo size='s' />
                </Link>

                <Navigation showMenu={showMenu}/>

                <SocialNetwork />
                <img
                    className='burger-menu'
                    onClick={handleShowMenu}
                    src={showMenu ? closeButton : burgerButton}
                    alt='Menu'
                />
            </div>
        </div>
    );
};

export default Header;

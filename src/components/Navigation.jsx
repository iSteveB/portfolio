import { NavLink } from 'react-router-dom';
import SocialNetwork from './SocialNetwork';

const Navigation = () => {
    return (
        <nav className='nav-container'>
            <div className='nav'>
                <ul>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive ? 'nav-active' : ''
                            }
                            end
                            to='/'>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive ? 'nav-active' : ''
                            }
                            to='/realisations'>
                            Portfolio
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive ? 'nav-active' : ''
                            }
                            to='/contact'>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className='burger_menu'></div>
            </div>
            
            <SocialNetwork />
        </nav>
    );
};

export default Navigation;

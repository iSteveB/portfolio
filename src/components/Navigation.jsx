import { NavLink } from 'react-router-dom';

const Navigation = ({showMenu}) => {
  
    return (
        <nav className={`navigation ${showMenu ? 'show-nav' : ''}`}>
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
        </nav>
    );
};

export default Navigation;

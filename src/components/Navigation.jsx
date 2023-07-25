import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='navigation'>
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
        </nav>
    );
};

export default Navigation;

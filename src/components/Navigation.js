import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
    return (
        <div className="navigation">
            <Logo />
            <NavLink className={(navData) => navData.isActive ? "nav-active" : "" } to="/"> Accueil </NavLink>
            <NavLink className={(navData) => navData.isActive ? "nav-active" : ""} to="/realisations"> Réalisations </NavLink>
            <NavLink className={(navData) => navData.isActive ? "nav-active" : ""} to="/contact"> Contact </NavLink>
        </div>
    );
};

export default Navigation;
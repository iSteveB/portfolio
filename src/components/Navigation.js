import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink className={(navData) => navData.isActive ? "nav-active" : "" } end to="/"> Accueil </NavLink>
            <NavLink className={(navData) => navData.isActive ? "nav-active" : ""} to="/realisations"> Réalisations </NavLink>
            <NavLink className={(navData) => navData.isActive ? "nav-active" : ""} to="/contact"> Contact </NavLink>
        </div>
    );
};

export default Navigation;
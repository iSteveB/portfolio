import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg"

const Navigation = () => {
    return (
        <div className="navigation">
            <img src={logo} alt="logo" width="73px" height="73px"/>
            <NavLink className={(navData) => navData.isActive ? "nav-active" : "" } to="/"> Accueil </NavLink>
            <NavLink className={(navData) => navData.isActive ? "nav-active" : ""} to="/realisations"> Réalisations </NavLink>
            <NavLink className={(navData) => navData.isActive ? "nav-active" : ""} to="/contact"> Contact </NavLink>
        </div>
    );
};

export default Navigation;
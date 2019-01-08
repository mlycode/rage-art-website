import React from "react";

import "./Navbar.scss";
import Navitems from "./NavItems/Navitems";
import Logo from "./Logo/Logo";
import Footer from "./Footer/Footer";
import ToggleButton from "./ToggleButton/ToggleButton";

const Navbar = (props) => {

    let toggleMenu;
    let toggleButton;

    if (props.menuToggle) {
        toggleMenu = {
            height: "33rem",
            transform: "scaleY(1)",
            opacity: "1"
        };

        toggleButton = {
            color: "#FF5252",
            backgroundColor: "#FF5252"
        };
    };

    return (
        <nav className="navbar">
            <Logo />
            <span className="navbar__toggle"><ToggleButton toggleStyle={toggleButton} click={props.navDrawerToggle}/></span>
            <div className="navbar__top-menu" style={toggleMenu}><Navitems /></div>
            <div className="navbar__sidebar"><Navitems /></div>
            <span className="navbar__footer"><Footer /></span>
        </nav>
    )
}

export default Navbar;
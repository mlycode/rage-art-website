import React from "react";

import "./Navbar.scss";
import Navitems from "./NavItems/Navitems";
import Logo from "./Logo/Logo";
import Footer from "./Footer/Footer";
import ToggleButton from "./ToggleButton/ToggleButton";

const Navbar = (props) => {

    return (
        <nav className="navbar">
            <Logo />
            <span className="navbar__toggle"><ToggleButton /></span>
            <Navitems />
            <span className="navbar__footer"><Footer /></span>
        </nav>
    )
}

export default Navbar;
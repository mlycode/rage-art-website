import React from "react";

import "./Navbar.scss";
import Navitems from "./NavItems/Navitems";
import Logo from "./Logo/Logo";
import Footer from "./Footer/Footer";

const Navbar = (props) => {

    return (
        <nav className={"navbar"}>
            <Logo />
            <Navitems />
            <span className="navbar__footer"><Footer /></span>
        </nav>
    )
}

export default Navbar;
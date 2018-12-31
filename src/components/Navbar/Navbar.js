import React from "react";

import "./Navbar.scss";
import Navitems from "./NavItems/Navitems";

const Navbar = (props) => {

    return (
        <nav className={"navbar"}>
            <Navitems />
        </nav>
    )
}

export default Navbar;
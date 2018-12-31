import React from "react";
import { NavLink } from "react-router-dom";

import "./Navitem.scss";

const Navitem = (props) => {

    return (
        <NavLink 
            className="nav__item"
            activeClassName="nav__item--active"
            to={props.link}
            exact
            >
            {props.children}
        </NavLink>
    );
};

export default Navitem;
import React from "react";
import { NavLink } from "react-router-dom";

import "./Navitem.scss";

const Navitem = (props) => {

    return (
        <div className="nav__item">
            <NavLink
                className="nav__link"
                activeClassName="nav__link--active"
                to={props.link}
                exact
            >
                {props.children}
            </NavLink>
        </div>
    );
};

export default Navitem;
import React from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";
import logoImg from "../../../assets/img/logo.png";

const Logo = (props) => {
    return (
        <div className="nav__logo">
            <Link to="/"><img className="nav__logo--img" src={logoImg} alt="Logo" /></Link>
        </div>
    )
}

export default Logo;
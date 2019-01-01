import React from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";
import logoImg from "../../../assets/img/logo.png";

const Logo = (props) => {
    return (
        <Link to="/"><img className="nav__logo" src={logoImg} alt="Logo" /></Link>
    )
}

export default Logo;
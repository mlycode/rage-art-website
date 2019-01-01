import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="nav__footer">
            <Link exact to="/commisions">Contact me</Link>
            <a href="https://www.instagram.com/therageart/?hl=en" target="none">Instagram</a>
            <p>Copyright &copy; 2019</p>
            <p>Made with &hearts; mlycode</p>
        </footer>
    );
}

export default Footer;
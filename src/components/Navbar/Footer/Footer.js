import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="nav__footer">
            <Link to="/contact">Contact me</Link>
            <a href="https://www.instagram.com/therageart/?hl=en" target="none">Instagram</a>
            <p>Copyright &copy; 2020</p>
            <p>Made with &hearts; by <a href="https://github.com/mlycode" target="#">mlycode</a></p>
        </footer>
    );
}

export default Footer;
import React from "react";
import { Link } from "react-router-dom";

import "./MobileFooter.scss";

const MobileFooter = () => {
    return (
        <footer className="mobile-footer">
            <Link to="/contact">Contact me</Link>
            <a href="https://www.instagram.com/therageart/?hl=en" target="none">Instagram</a>
            <p>Copyright &copy; 2019</p>
            <p>Made with &hearts; by mlycode</p>
        </footer>
    )
}

export default MobileFooter;
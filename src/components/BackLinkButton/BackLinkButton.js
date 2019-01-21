import React from "react";

import "./BackLinkButton.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/icons/left-arrow.svg";

const BackLinkButton = (props) => {
    return (
        <div className="back-button">
            <Link to={props.link}><img src={backArrow} alt="Go Back"/></Link>
        </div>
    );
}

export default BackLinkButton;
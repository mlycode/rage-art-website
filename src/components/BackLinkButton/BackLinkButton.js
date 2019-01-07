import React from "react";

import "./BackLinkButton.scss";
import { Link } from "react-router-dom";

const BackLinkButton = (props) => {
    return (
        <div className="back-button">
            <Link to={props.link}>&#8678;</Link>
        </div>
    );
}

export default BackLinkButton;
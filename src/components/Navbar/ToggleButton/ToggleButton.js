import React from "react";

import "./ToggleButton.scss";

const ToggleButton = (props) => {
    return (
        <button className="navigation__button">
            <div className="navigation__button--burger"></div>
        </button>
    );
}

export default ToggleButton;
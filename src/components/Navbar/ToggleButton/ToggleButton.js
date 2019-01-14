import React from "react";

import "./ToggleButton.scss";

const ToggleButton = (props) => {
    return (
        <button className="navigation__button" onClick={props.click} style={props.toggleButton} alt="Navigation toggle">
            <div className="navigation__button--burger" style={props.toggleBurger}></div>
        </button>
    );
}

export default ToggleButton;
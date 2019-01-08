import React from "react";

import "./ToggleButton.scss";

const ToggleButton = (props) => {
    return (
        <button className="navigation__button" onClick={props.click}>
            <div className="navigation__button--burger" style={props.toggleStyle}></div>
        </button>
    );
}

export default ToggleButton;
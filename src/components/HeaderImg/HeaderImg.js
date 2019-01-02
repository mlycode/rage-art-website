import React from "react";

import "./HeaderImg.scss";

const HeaderImg = (props) => {
    return (
        <header className="header-img__container">
            <div className="header-img__image"></div>
            <h1 className="header-img__title">{props.title}</h1>
            <div className="header-img__text">
                <p className="header-img__text--content">
                    {props.children}
                </p>
            </div>
        </header>
    );
};

export default HeaderImg
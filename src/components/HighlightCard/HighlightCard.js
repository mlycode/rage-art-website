import React from "react";
import { Link } from "react-router-dom";

import "./HighlightCard.scss";

const HighlightCard = (props) => {
    
    const background = {
        backgroundImage: `linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url( ${props.backgroundImg} )`
    };

    return (
        <Link to={props.link} className="highlight-card">
            <div className="highlight-card__container" style={background}>
                <h1 className="highlight-card__heading">{props.sectionType}</h1>
                <h2 className="highlight-card__title">{props.title}</h2>
                <h3 className="highlight-card__subtitle">{props.subtitle}</h3>
            </div>
        </Link>
        
    );
};

export default HighlightCard;
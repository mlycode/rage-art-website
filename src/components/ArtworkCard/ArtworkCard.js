import React from "react";

import "./ArtworkCard.scss";

const ArtworkCard = (props) => {
    return (
        <div className="artwork">
            <img className="artwork-card__image" src={props.img} alt={props.img} />
            {props.title && <h2 className="artwork-card--title">{props.title}</h2>}
            {props.title && 
                (<div className="artwork-card__description">
                    <h3 className="artwork-card__description--title">{props.title}, {props.year}</h3>
                    <h4 className="artwork-card__description--subtitle">{props.subtitle}</h4>
                    <p className="artwork-card__description--content">{props.children}</p>
                </div>)
            }
        </div>
    );
}

export default ArtworkCard;
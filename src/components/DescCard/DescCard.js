import React from "react";

import "./DescCard.scss";

const DescCard = (props) => {
    const cardImage = {
        backgroundImage: `url(${props.image})`
    }

    return (
        <div className="desc-card">
            <div className="desc-card__image" style={cardImage}>

            </div>
            <div className="desc-card__price">
                <h1>{props.price}</h1>
            </div>
            
            <div className="desc-card__text">
                <h3>description</h3>
                <ul>
                    <li>{props.item1}</li>
                    <li>{props.item2}</li>
                    <li>{props.item3}</li>
                </ul>
            </div>
        </div>
    );
}

export default DescCard
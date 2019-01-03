import React from "react";

import "./ImgGrid.scss";


const ImgGrid = (props) => {

    const imgArr = [
        ...props.images
    ];

    return (
        <div className="img-grid__container">
            {imgArr.map((img, idx) => {
                return (
                    <figure key={idx} className={`img-grid__item img-grid__item--${idx + 1}`}>
                        <img src={img} alt={`Gallery ${idx + 1}`} className="img-grid__img" />
                    </figure>
                );
            })}
        </div>
    );
}

export default ImgGrid;
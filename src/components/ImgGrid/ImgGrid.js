import React from "react";
import PropTypes from "prop-types";

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

ImgGrid.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string)
};

export default ImgGrid;
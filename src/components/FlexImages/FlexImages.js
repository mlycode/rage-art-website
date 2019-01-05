import React from "react";

import "./FlexImages.scss";

const FlexImages = (props) => {
    return (
        <div className="flex-images">
            {props.children}
        </div>
    )
}

export default FlexImages;
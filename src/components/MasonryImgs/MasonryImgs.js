import React from "react";

import "./MasonryImgs.scss";

const MasonryImgs = (props) => {
    return (
        <div className="masonry-imgs">
            {props.children}
        </div>
    )
}

export default MasonryImgs;
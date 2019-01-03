import React from "react";

import "./ArtDesc.scss";

const ArtDesc = (props) => {
    return (
        <div className="art-desc">
            <h4 className="art-desc__title">{props.title}</h4>
            {props.children}
        </div>
    );
}

export default ArtDesc;
import React from "react";

import "./Heading1.scss";

const Heading1 = (props) => {
    return (
        <h1 className="heading-1 margin-bottom-lg margin-top-lg">{props.children}</h1>
    );
}

export default Heading1;
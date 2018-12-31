import React from "react";

import Navitem from "./Navitem/Navitem";
import "./Navitems.scss";

const Navitems = (props) => {

    return (
        <ul className="nav__items">
            <Navitem link="/">Home</Navitem>
            <Navitem link="/paintings">Paintings</Navitem>
            <Navitem link="/illustrations">Illustrations</Navitem>
            <Navitem link="/exhibitions">exhibitions</Navitem>
            <Navitem link="/modelling">modelling</Navitem>
            <Navitem link="/commisions">commisions</Navitem>
        </ul>
    );
};

export default Navitems;
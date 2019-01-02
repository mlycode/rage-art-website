import React, { Component, Fragment } from "react";

import "./Home.scss";
import HeaderImg from "../../components/HeaderImg/HeaderImg";
import Heading1 from "../../components/Heading1/Heading1";

class Home extends Component {

    render() {

        return (
            <Fragment>
                <HeaderImg title="About">
                    My work is heavily influenced by Jean-Michel Basquiat’s strong visual message against power structures and the hierarchy of racism, as I combine this with pop culture and real life experiences within my own world. I tend to frequently make references to particular cartoon animations from the early 2000’s and classic Japanese anime I also touch upon issues of high-brow/low-brow art, in the institutional framework of art school, which traditionally looks down upon the aesthetics of street art. I want to push the concept of street art more into the contemporary art scene and try to bring those two worlds together.
                </HeaderImg>
                <Heading1>highlights</Heading1>
            </Fragment>
        );
    };
};

export default Home;
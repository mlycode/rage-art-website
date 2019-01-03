import React, { Component } from "react";

import "./Rage.scss";
import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/1.jpg";
import img2 from "../../../assets/img/2.jpg";
import img3 from "../../../assets/img/3.jpg";
import img4 from "../../../assets/img/4.jpg";
import img5 from "../../../assets/img/5.jpg";

class RagePage extends Component {

    render () {

        return (
            <ImgGrid images={[img1, img2, img3, img4, img5]}/>
        );
    };
};

export default RagePage;
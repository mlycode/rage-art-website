import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/shoreditch-expo-1.jpg";
import img2 from "../../../assets/img/shoreditch-expo-2.jpg";
import img3 from "../../../assets/img/shoreditch-expo-3.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import MasonryImgs from "../../../components/MasonryImgs/MasonryImgs";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";

class ShoreditchExpo extends Component {

    componentDidMount () {
        document.title = "DIFFЯNT Shoreditch Boxpark - Exhibitions"
    }

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/exhibitions"/>
                <ImgGrid images={[img1, img2, img3, img3, img1]}/>
                <Heading1>DIFFЯNT Shoreditch Boxpark</Heading1>
                <ArtDesc title="description">
                    <p>The event consists of talented artists doing live paintings and exhibiting work. The event is hosted by DIFFRNT ART and is located at Shoreditch Boxpark It is also sponsored by Great Art.</p>
                </ArtDesc>
                <MasonryImgs>
                    <img  src={img1} alt="DIFFЯNT Shoreditch Boxpark 1"/>
                    <img  src={img2} alt="DIFFЯNT Shoreditch Boxpark 2"/>
                    <img  src={img3} alt="DIFFЯNT Shoreditch Boxpark 3"/>
                </MasonryImgs>
            </Fragment>
        );
    };
};

export default ShoreditchExpo;
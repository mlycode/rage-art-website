import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/a1.jpg";
import img2 from "../../../assets/img/a2.jpg";
import img3 from "../../../assets/img/a3.jpg";
import img4 from "../../../assets/img/a4.jpg";
import img5 from "../../../assets/img/a5.jpg";
import img6 from "../../../assets/img/a6.jpg";
import img7 from "../../../assets/img/a7.jpg";
import img8 from "../../../assets/img/a8.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import MasonryImgs from "../../../components/MasonryImgs/MasonryImgs";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";

class AdeptGazePage extends Component {

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/exhibitions"/>
                <ImgGrid images={[img1, img2, img3, img4, img5]}/>
                <Heading1>adept - gaze</Heading1>
                <ArtDesc title="description">
                    <p>Adept Gaze is a platform aiming to promote and share the work of young artists living in London. The team does this through regular short videos starring the artists themselves. We want to include as diverse a group of artists as possible including painters, dancers, musicians, cinematographers, chefs, etc. They must be unique, go-getters, motivated individuals with drive and self-belief. It also acts as a platform for collaboration. In the future, it is our hope to introduce more elements including exhibitions and events.</p>
                </ArtDesc>
                <MasonryImgs>
                    <img  src={img1} alt="adept 1"/>
                    <img  src={img2} alt="adept 2"/>
                    <img  src={img3} alt="adept 3"/>
                    <img  src={img4} alt="adept 4"/>
                    <img  src={img5} alt="adept 5"/>
                    <img  src={img6} alt="adept 6"/>
                    <img  src={img7} alt="adept 7"/>
                    <img  src={img8} alt="adept 8"/>
                </MasonryImgs>
            </Fragment>
        );
    };
};

export default AdeptGazePage;
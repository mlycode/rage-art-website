import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/21.jpg";
import img2 from "../../../assets/img/earll.jpg";
import img3 from "../../../assets/img/lil-uzi.jpg";
import img4 from "../../../assets/img/maleeka.jpg";
import img5 from "../../../assets/img/pryde.jpg";
import img6 from "../../../assets/img/taco.jpg";
import img7 from "../../../assets/img/trippe.jpg";
import img8 from "../../../assets/img/tyler.jpg";
import img9 from "../../../assets/img/scarlxrd.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import ArtworkCard from "../../../components/ArtworkCard/ArtworkCard";

class AdeptGazePage extends Component {

    render () {

        return (
            <Fragment>
                <ImgGrid images={[img1, img2, img3, img4, img5]}/>
                <Heading1>adept - gaze</Heading1>
                <ArtDesc title="description">
                    <p>Adept Gaze is a platform aiming to promote and share the work of young artists living in London. The team does this through regular short videos starring the artists themselves. We want to include as diverse a group of artists as possible including painters, dancers, musicians, cinematographers, chefs, etc. They must be unique, go-getters, motivated individuals with drive and self-belief. It also acts as a platform for collaboration. In the future, it is our hope to introduce more elements including exhibitions and events.</p>
                </ArtDesc>
                
            </Fragment>
        );
    };
};

export default AdeptGazePage;
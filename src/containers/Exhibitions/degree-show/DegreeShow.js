import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/b1.jpg";
import img2 from "../../../assets/img/b2.jpg";
import img3 from "../../../assets/img/b3.jpg";
import img4 from "../../../assets/img/b4.jpg";
import img5 from "../../../assets/img/b5.jpg";
import img6 from "../../../assets/img/b6.jpg";
import img7 from "../../../assets/img/b7.jpg";
import img8 from "../../../assets/img/b8.jpg";
import img9 from "../../../assets/img/b9.jpg";
import img10 from "../../../assets/img/b10.jpg";
import img11 from "../../../assets/img/b11.jpg";
import img12 from "../../../assets/img/b12.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import FlexImages from "../../../components/FlexImages/FlexImages";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";


class DegreeShowPage extends Component {

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/exhibitions"/>
                <ImgGrid images={[img1, img2, img3, img4, img5]}/>
                <Heading1>ual fine art degree show</Heading1>
                <ArtDesc title="description">
                    <p>Adept Gaze is a platform aiming to promote and share the work of young artists living in London. The team does this through regular short videos starring the artists themselves. We want to include as diverse a group of artists as possible including painters, dancers, musicians, cinematographers, chefs, etc. They must be unique, go-getters, motivated individuals with drive and self-belief. It also acts as a platform for collaboration. In the future, it is our hope to introduce more elements including exhibitions and events.</p>
                </ArtDesc>
                <FlexImages>
                    <img  src={img1} alt="degreeshow 1"/>
                    <img  src={img2} alt="degreeshow 2"/>
                    <img  src={img3} alt="degreeshow 3"/>
                    <img  src={img4} alt="degreeshow 4"/>
                    <img  src={img5} alt="degreeshow 5"/>
                    <img  src={img6} alt="degreeshow 6"/>
                    <img  src={img7} alt="degreeshow 7"/>
                    <img  src={img8} alt="degreeshow 8"/>
                    <img  src={img9} alt="degreeshow 9"/>
                    <img  src={img10} alt="degreeshow 10"/>
                    <img  src={img11} alt="degreeshow 11"/>
                    <img  src={img12} alt="degreeshow 12"/>
                </FlexImages>
            </Fragment>
        );
    };
};

export default DegreeShowPage;
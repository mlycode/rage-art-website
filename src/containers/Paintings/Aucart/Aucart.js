import React, { Component, Fragment } from "react";

import "./Aucart.scss";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img2 from "../../../assets/img/auc2.jpg";
import img3 from "../../../assets/img/auc3.jpg";
import img5 from "../../../assets/img/auc5.jpg";
import img6 from "../../../assets/img/auc6.jpg";
import img7 from "../../../assets/img/auc7.jpg";
import img8 from "../../../assets/img/auc8.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import ArtworkCard from "../../../components/ArtworkCard/ArtworkCard";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";

class AucartPage extends Component {

    componentDidMount () {
        document.title = "Aucart - Paintings"
    }

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/paintings"/>
                <ImgGrid images={[img8, img6, img2, img7, img3]}/>
                <Heading1>Aucart</Heading1>
                <ArtDesc title="description">
                    <p>Artwork painting during my residency with Aucart</p>
                </ArtDesc>
                <ArtworkCard img={img2} title="Untitled 1" year="2019" subtitle="Acrylic on Canvas"></ArtworkCard>
                <ArtworkCard img={img3} title="Untitled 2" year="2019" subtitle="Acrylic on Canvas"></ArtworkCard>
                <ArtworkCard img={img5} title="Untitled 3" year="2019" subtitle="Acrylic on Canvas"></ArtworkCard>
                <ArtworkCard img={img6} title="Untitled 4" year="2019" subtitle="Acrylic on Canvas"></ArtworkCard>
            </Fragment>
        );
    };
};

export default AucartPage;
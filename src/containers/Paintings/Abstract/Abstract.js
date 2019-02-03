import React, { Component, Fragment } from "react";

import "./Abstract.scss";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img6 from "../../../assets/img/fianl-2.jpg";
import img2 from "../../../assets/img/chaos-flower-2.jpg";
import img3 from "../../../assets/img/final-4.jpg";
import img4 from "../../../assets/img/fire-lake-2.jpg";
import img5 from "../../../assets/img/final-3.jpg";
import img1 from "../../../assets/img/rainbow-painting-2.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import ArtworkCard from "../../../components/ArtworkCard/ArtworkCard";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";

class AbstractPage extends Component {

    componentDidMount () {
        document.title = "Abstract - Paintings"
    }

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/paintings"/>
                <ImgGrid images={[img1, img2, img3, img4, img5]}/>
                <Heading1>abstract</Heading1>
                <ArtDesc title="description">
                    <p>A series of colour studies created through diluted acrylic paint onto wood. The technique is similar to marbling, whereas I apply the acrylic onto the wood surface and let it dry for a completely random result. Personally, I quite enjoy this process as I’m usually a perfectionist and allowing myself to accept a finishing product without careful input is exciting.</p>
                </ArtDesc>
                <ArtworkCard img={img1} title="Rainbow" year="2016" subtitle="Acrylic on Wood"></ArtworkCard>
                <ArtworkCard img={img2} title="Chaos Flower" year="2016" subtitle="Acrylic on Wood"></ArtworkCard>
                <ArtworkCard img={img3} title="Red Giant" year="2016" subtitle="Acrylic on Wood"></ArtworkCard>
                <ArtworkCard img={img4} title="Fire Lake" year="2016" subtitle="Acrylic on Canvas"></ArtworkCard>
                <ArtworkCard img={img5} title="Chilling" year="2016" subtitle="Acrylic on Wood"></ArtworkCard>
                <ArtworkCard img={img6} title="Ocean Blue" year="2016" subtitle="Acrylic on Wood"></ArtworkCard>
            </Fragment>
        );
    };
};

export default AbstractPage;
import React, { Component, Fragment } from "react";

import "./Rage.scss";
import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/1.jpg";
import img2 from "../../../assets/img/2.jpg";
import img3 from "../../../assets/img/3.jpg";
import img4 from "../../../assets/img/4.jpg";
import img5 from "../../../assets/img/5.jpg";
import img6 from "../../../assets/img/6.jpg";
import img7 from "../../../assets/img/7.jpg";
import img8 from "../../../assets/img/8.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import ArtworkCard from "../../../components/ArtworkCard/ArtworkCard";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";

class RagePage extends Component {

    componentDidMount () {
        document.title = "Rage - Paintings"
    }

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/paintings"/>
                <ImgGrid images={[img1, img2, img3, img7, img8]}/>
                <Heading1>RAGE</Heading1>
                <ArtDesc title="description">
                    <p>My work is heavily influenced by Jean-Michel Basquiat’s strong visual message against power structures and the hierarchy of racism, as I combine this with pop culture and real life experiences within my own world. I tend to frequently make references to particular cartoon animations from the early 2000’s and classic Japanese anime I also touch upon issues of high-brow/low-brow art, in the institutional framework of art school, which traditionally looks down upon the aesthetics of street art. I want to push the concept of street art more into the contemporary art scene and try to bring those two worlds together.</p>
                </ArtDesc>
                <ArtworkCard img={img6} title="Crash The Party" year="2019" subtitle="Oil on Canvas"></ArtworkCard>
                <ArtworkCard img={img7} title="Perfect Love" year="2019" subtitle="Oil on Canvas"></ArtworkCard>
                <ArtworkCard img={img8} title="Oh God" year="2019" subtitle="Oil on Canvas"></ArtworkCard>
                <ArtworkCard img={img1} title="B Boys" year="2016" subtitle="Oil on Canvas"></ArtworkCard>
                <ArtworkCard img={img2} title="Ya Butt" year="2016" subtitle="Oil on Canvas"></ArtworkCard>
                <ArtworkCard img={img3} title="Oh Boi" year="2016" subtitle="Oil on Canvas"></ArtworkCard>
                <ArtworkCard img={img4} title="Rainbow Show" year="2016" subtitle="Oil on Canvas"></ArtworkCard>
                <ArtworkCard img={img5} title="Selfish" year="2016" subtitle="Oil on Canvas"></ArtworkCard>
            </Fragment>
        );
    };
};

export default RagePage;
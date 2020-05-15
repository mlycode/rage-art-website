import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/llc-1.jpg";
import img2 from "../../../assets/img/llc-2.jpg";
import img3 from "../../../assets/img/llc-3.jpg";
import img4 from "../../../assets/img/llc-4.jpg";
import img5 from "../../../assets/img/llc-5.jpg";
import img6 from "../../../assets/img/llc-6.jpg";
import img7 from "../../../assets/img/llc-7.jpg";
import img8 from "../../../assets/img/llc-8.jpg";
import img9 from "../../../assets/img/llc-9.jpg";
import img10 from "../../../assets/img/llc-10.jpg";
import img11 from "../../../assets/img/llc-11.jpg";
import img12 from "../../../assets/img/llc-12.jpg";
import img13 from "../../../assets/img/llc-13.jpg";
import img14 from "../../../assets/img/llc-14.jpg";
import img15 from "../../../assets/img/llc-15.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import MasonryImgs from "../../../components/MasonryImgs/MasonryImgs";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";


class LLCDrawingSession extends Component {

    componentDidMount () {
        document.title = "DIFFЯNT Live Painting - Exhibitions"
    }

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/exhibitions"/>
                <ImgGrid images={[img1, img2, img3, img4, img5]}/>
                <Heading1>DIFFЯNT Live Painting</Heading1>
                <ArtDesc title="description">
                    <p>LCC staff were invited to a live painting session hosted by art agency DIFFЯNT <a href="https://www.instagram.com/diffrntart/" target="#">(@diffrntart)</a> and UAL alumni & students. The theme of the session was on wellbeing, tied into the LCC Wellbeing Day, and staff were encouraged to paint something that made them feel happy with extra guidance from alumni. </p>
                </ArtDesc>
                <MasonryImgs>
                    <img  src={img1} alt="DIFFЯNT Live Painting 1"/>
                    <img  src={img2} alt="DIFFЯNT Live Painting 2"/>
                    <img  src={img3} alt="DIFFЯNT Live Painting 3"/>
                    <img  src={img4} alt="DIFFЯNT Live Painting 4"/>
                    <img  src={img5} alt="DIFFЯNT Live Painting 5"/>
                    <img  src={img6} alt="DIFFЯNT Live Painting 6"/>
                    <img  src={img7} alt="DIFFЯNT Live Painting 7"/>
                    <img  src={img8} alt="DIFFЯNT Live Painting 8"/>
                    <img  src={img9} alt="DIFFЯNT Live Painting 9"/>
                    <img  src={img10} alt="DIFFЯNT Live Painting 10"/>
                    <img  src={img11} alt="DIFFЯNT Live Painting 11"/>
                    <img  src={img12} alt="DIFFЯNT Live Painting 12"/>
                    <img  src={img13} alt="DIFFЯNT Live Painting 13"/>
                    <img  src={img14} alt="DIFFЯNT Live Painting 14"/>
                    <img  src={img15} alt="DIFFЯNT Live Painting 15"/>
                </MasonryImgs>
            </Fragment>
        );
    };
};

export default LLCDrawingSession;
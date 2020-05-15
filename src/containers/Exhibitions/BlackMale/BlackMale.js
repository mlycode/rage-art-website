import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/black-male-1.jpg";
import img2 from "../../../assets/img/black-male-2.jpg";
import img3 from "../../../assets/img/black-male-3.jpg";
import img4 from "../../../assets/img/black-male-4.jpg";
import img5 from "../../../assets/img/black-male-5.jpg";
import img6 from "../../../assets/img/black-male-6.jpg";
import img7 from "../../../assets/img/black-male-7.jpg";
import img8 from "../../../assets/img/black-male-8.jpg";
import img9 from "../../../assets/img/black-male-9.jpg";
import img10 from "../../../assets/img/black-male-10.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import MasonryImgs from "../../../components/MasonryImgs/MasonryImgs";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";


class BlackMale extends Component {

    componentDidMount () {
        document.title = "The Black Male Is _______ - Exhibitions"
    }

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/exhibitions"/>
                <ImgGrid images={[img3, img8, img7, img10, img9]}/>
                <Heading1>The Black Male Is _______</Heading1>
                <ArtDesc title="description">
                    <p>The Black Male Is _______ exhibition & Pop-Up <a href="https://www.instagram.com/notjustanotherstore_ldn/" target="#">@notjustanotherstore_ldn</a></p>
                    <p>Throughout our lives, Black males appear invisible in mainstream society unless connected with negativity. The goal of the exhibition is to expose people to more complex and authentic stories about Black males through art. The exhibition is fully inclusive and will not only include Black artists, or be exclusive to men. Instead, it will feature works created by a diverse group of emerging and established artists.</p>
                </ArtDesc>
                <MasonryImgs>
                    <img  src={img1} alt="The Black Male Is _______ 1"/>
                    <img  src={img2} alt="The Black Male Is _______ 2"/>
                    <img  src={img3} alt="The Black Male Is _______ 3"/>
                    <img  src={img4} alt="The Black Male Is _______ 4"/>
                    <img  src={img5} alt="The Black Male Is _______ 5"/>
                    <img  src={img6} alt="The Black Male Is _______ 6"/>
                    <img  src={img7} alt="The Black Male Is _______ 7"/>
                    <img  src={img8} alt="The Black Male Is _______ 8"/>
                    <img  src={img9} alt="The Black Male Is _______ 9"/>
                    <img  src={img10} alt="The Black Male Is _______ 10"/>
                </MasonryImgs>
            </Fragment>
        );
    };
};

export default BlackMale;
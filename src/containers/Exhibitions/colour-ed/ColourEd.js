import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/c1.jpg";
import img2 from "../../../assets/img/c2.jpg";
import img3 from "../../../assets/img/c3.jpg";
import img4 from "../../../assets/img/c4.jpg";
import img5 from "../../../assets/img/c5.jpg";
import img6 from "../../../assets/img/c6.jpg";
import img7 from "../../../assets/img/c7.jpg";
import img8 from "../../../assets/img/c8.jpg";
import img9 from "../../../assets/img/c9.jpg";
import img10 from "../../../assets/img/c10.jpg";
import img11 from "../../../assets/img/c11.jpg";
import img12 from "../../../assets/img/c12.jpg";
import img13 from "../../../assets/img/c13.jpg";
import img14 from "../../../assets/img/c14.jpg";
import img15 from "../../../assets/img/c15.jpg";
import img16 from "../../../assets/img/c16.jpg";
import img17 from "../../../assets/img/c17.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import MasonryImgs from "../../../components/MasonryImgs/MasonryImgs";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";


class ColourEdPage extends Component {

    componentDidMount () {
        document.title = "Colour(ed) - Exhibitions"
    }

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/exhibitions"/>
                <ImgGrid images={[img1, img2, img3, img4, img5]}/>
                <Heading1>colour(ed)</Heading1>
                <ArtDesc title="description">
                    <p>The exhibition Colour(ed) consists of Kourtney Paul, Samantha Sun, and Zoe Sim. Our work explores the personal as political through colourful palettes and humor. Our practices are brought together through the use of personal anecdotes and experiences that inspire our art, regardless of the levels of explicitly or subtlety. Across our practices, colour is important (in all senses of the word). </p>
                    <p>There are several elements reflected within our work, including issues of race within an art school, the world through pink dreamscapes, as well as some site-specific art about sex work. We have collaborated to make a series of drawings, using Kourtney’s technique of phrases within his paintings. Sam contributed personal stories around racially charged observations from kink and fetish communities, these were then drawn over Zoe’s photographs.</p>
                </ArtDesc>
                <MasonryImgs>
                    <img  src={img1} alt="colour(ed) 1"/>
                    <img  src={img2} alt="colour(ed) 2"/>
                    <img  src={img3} alt="colour(ed) 3"/>
                    <img  src={img4} alt="colour(ed) 4"/>
                    <img  src={img5} alt="colour(ed) 5"/>
                    <img  src={img6} alt="colour(ed) 6"/>
                    <img  src={img7} alt="colour(ed) 7"/>
                    <img  src={img8} alt="colour(ed) 8"/>
                    <img  src={img9} alt="colour(ed) 9"/>
                    <img  src={img10} alt="colour(ed) 10"/>
                    <img  src={img11} alt="colour(ed) 11"/>
                    <img  src={img12} alt="colour(ed) 12"/>
                    <img  src={img13} alt="colour(ed) 13"/>
                    <img  src={img14} alt="colour(ed) 14"/>
                    <img  src={img15} alt="colour(ed) 15"/>
                    <img  src={img16} alt="colour(ed) 16"/>
                    <img  src={img17} alt="colour(ed) 17"/>
                </MasonryImgs>
            </Fragment>
        );
    };
};

export default ColourEdPage;
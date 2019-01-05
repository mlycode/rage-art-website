import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/d1.jpg";
import img2 from "../../../assets/img/d2.jpg";
import img3 from "../../../assets/img/d3.jpg";
import img4 from "../../../assets/img/d4.jpg";
import img5 from "../../../assets/img/d5.jpg";
import img6 from "../../../assets/img/d6.jpg";
import img7 from "../../../assets/img/d7.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import FlexImages from "../../../components/FlexImages/FlexImages";

class ThirdEyePage extends Component {

    render () {

        return (
            <Fragment>
                <ImgGrid images={[img1, img2, img3, img4, img5]}/>
                <Heading1>The Third eye</Heading1>
                <ArtDesc title="description">
                    <p>The Third Eye exhibition showcased artwork from underground artists coming from various art schools in London, such as Central Saint Martins, Chelsea, Goldsmiths and Kingston Univesity. The term ‘Third Eye’ (also called the mind’s eye) is a mystical concept of an invisible eye which provides perception beyond ordinary sight. In the brief, we were asked to create work that would describe the way you see and understand information through hallucinogenic drugs. To further reinforce the theme we could also use the music to enhance the atmosphere, as the DJ mixed a different range of music from Disco, Funk and Hip Hop (From 70’s to 90’s). </p>
                </ArtDesc>
                <FlexImages>
                    <img  src={img1} alt="thirdeye 1"/>
                    <img  src={img2} alt="thirdeye 2"/>
                    <img  src={img3} alt="thirdeye 3"/>
                    <img  src={img4} alt="thirdeye 4"/>
                    <img  src={img5} alt="thirdeye 5"/>
                    <img  src={img6} alt="thirdeye 6"/>
                    <img  src={img7} alt="thirdeye 7"/>
                </FlexImages>
            </Fragment>
        );
    };
};

export default ThirdEyePage;
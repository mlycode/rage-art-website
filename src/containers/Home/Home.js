import React, { Component, Fragment } from "react";

import "./Home.scss";
import HeaderImg from "../../components/HeaderImg/HeaderImg";
import Heading1 from "../../components/Heading1/Heading1";
import HightlightCard from "../../components/HighlightCard/HighlightCard";
import highlightImg1 from "../../assets/img/2.jpg";
import highlightImg2 from "../../assets/img/report-artwork4.jpg";
import highlightImg3 from "../../assets/img/degreeshow.jpg";
import highlightImg4 from "../../assets/img/willow-s.jpg";

class Home extends Component {

    render() {

        return (
            <Fragment>
                <HeaderImg title="About">
                    My work is heavily influenced by Jean-Michel Basquiat’s strong visual message against power structures and the hierarchy of racism, as I combine this with pop culture and real life experiences within my own world. I tend to frequently make references to particular cartoon animations from the early 2000’s and classic Japanese anime I also touch upon issues of high-brow/low-brow art, in the institutional framework of art school, which traditionally looks down upon the aesthetics of street art. I want to push the concept of street art more into the contemporary art scene and try to bring those two worlds together.
                </HeaderImg>
                <Heading1>highlights</Heading1>
                <HightlightCard
                    link="/illustrations/digital-rap" 
                    sectionType="illustration"
                    backgroundImg={highlightImg4}
                    title="digital rap"
                    subtitle="CREATING THE SPACE FOR STREET ART IN THE CONTEMPORARY ART WORLd"
                />
                <HightlightCard
                    link="/paintings/rage" 
                    sectionType="painting"
                    backgroundImg={highlightImg1}
                    title="rage series"
                    subtitle="CREATING THE SPACE FOR STREET ART IN THE CONTEMPORARY ART WORLd"
                />
                <HightlightCard
                    link="/illustrations/ual-diversity" 
                    sectionType="illustration"
                    backgroundImg={highlightImg2}
                    title="UAL DIVERSITY REPORT"
                    subtitle="A SERIES INVESTIGATING BAME REPRESENTATION AT UAL"
                />
                <HightlightCard
                    link="/exhibitions/ual-degree-show" 
                    sectionType="EXHIBITION"
                    backgroundImg={highlightImg3}
                    title="FINE ART DEGREE show"
                    subtitle="WORK FEATURED AT UAL'S FINE ART DEGREE EXHIBITION"
                />

            </Fragment>
        );
    };
};

export default Home;
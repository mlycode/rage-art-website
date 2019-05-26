import React, { Component, Fragment } from "react";

import "./Home.scss";
import HeaderImg from "../../components/HeaderImg/HeaderImg";
import Heading1 from "../../components/Heading1/Heading1";
import HightlightCard from "../../components/HighlightCard/HighlightCard";
import highlightImg1 from "../../assets/img/2.jpg";
import highlightImg2 from "../../assets/img/report-artwork4.jpg";
import highlightImg3 from "../../assets/img/degreeshow.jpg";
import highlightImg4 from "../../assets/img/willow-s.jpg";
import highlightImg5 from '../../assets/img/auc7.jpg';

class Home extends Component {

    componentDidMount () {
        document.title = "Home - Rage Art"
    }

    render() {

        return (
            <Fragment>
                <HeaderImg title="About">
                Welcome to my website I love meme culture, black history, cartoons and colours 
                </HeaderImg>
                <Heading1>highlights</Heading1>
                <HightlightCard
                    link="/paintings/aucart" 
                    sectionType="painting"
                    backgroundImg={highlightImg5}
                    title="Aucart"
                    subtitle="Artwork painted during my residency with Aucart"
                />
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
                    subtitle="influenced by Jean-Michel Basquiat’s strong visual message"
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
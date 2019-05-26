import React, { Component, Fragment } from "react";

import "./Paintings.scss";
import abstractImg from "../../assets/img/chaos-flower-2.jpg";
import highlightImg1 from "../../assets/img/2.jpg";
import Heading1 from "../../components/Heading1/Heading1";
import HightlightCard from "../../components/HighlightCard/HighlightCard";
import aucartImg from '../../assets/img/auc7.jpg';

class Paintings extends Component {

    componentDidMount () {
        document.title = "Paintings - Rage Art"
    }

    render () {

        return (
            <Fragment>
                <Heading1>
                    paintings
                </Heading1>

                <HightlightCard
                    link="/paintings/aucart" 
                    sectionType="painting"
                    backgroundImg={aucartImg}
                    title="Aucart"
                    subtitle="Artwork painted during my residency with Aucart"
                />

                <HightlightCard
                    link="/paintings/abstract" 
                    sectionType="ABSTRACT"
                    backgroundImg={abstractImg}
                    title="ABSTRACT SERIES"
                    subtitle="CREATING THE SPACE FOR STREET ART IN THE CONTEMPORARY ART WORLd"
                />

                <HightlightCard
                    link="/paintings/rage" 
                    sectionType="rage"
                    backgroundImg={highlightImg1}
                    title="rage series"
                    subtitle="CREATING THE SPACE FOR STREET ART IN THE CONTEMPORARY ART WORLd"
                />
            </Fragment>
        );
    };
};

export default Paintings;
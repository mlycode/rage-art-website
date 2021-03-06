import React, { Component } from "react";

import "./Modelling.scss";
import Heading1 from "../../components/Heading1/Heading1";
import ArtDesc from "../../components/ArtDesc/ArtDesc";


class Modelling extends Component {

    componentDidMount () {
        document.title = "Modelling - Rage Art"
    }

    render() {

        return (
            <section className="modelling">
                <Heading1>Modelling</Heading1>
                <ArtDesc title="info">
                    <p>This page contains a small collection of photos from various modelling shoots, please view my <a href="https://www.instagram.com/therageart/" target="blank">Instagram</a> for more photographs.</p>
                    <p>If you are interested in hiring me for a shoot, please get in touch via my Instagram or Email.</p>
                </ArtDesc>
                <div className="modelling__gallery">
                    <div className="modelling__gallery--1"></div>
                    <div className="modelling__gallery--2"></div>
                    <div className="modelling__gallery--3"></div>
                    <div className="modelling__gallery--4"></div>
                    <div className="modelling__gallery--5"></div>
                    <div className="modelling__gallery--6"></div>
                    <div className="modelling__gallery--7"></div>
                    <div className="modelling__gallery--8"></div>
                    <div className="modelling__gallery--9"></div>
                </div>
            </section>
        );
    };
};

export default Modelling;
import React, { Component } from "react";

import "./Commisions.scss";
import Heading1 from "../../components/Heading1/Heading1";
import HeaderImg from "../../components/HeaderImg/HeaderImg";
import ArtDesc from "../../components/ArtDesc/ArtDesc";
import DescCard from "../../components/DescCard/DescCard";
import img1 from "../../assets/img/1.jpg";

class Commisions extends Component {

    componentDidMount () {
        document.title = "Commisions - Rage Art"
    }

    render () {

        return (
            <section className="commisions">
                <HeaderImg title="Contact">
                    <p><strong>Email:</strong> kourtney-Paul@outlook.com</p>
                    <p><strong>Instagram:</strong> <a href="https://www.instagram.com/therageart/" target="blank">@therageart</a></p>
                    <p><strong>Flickr:</strong> <a href="https://www.flickr.com/photos/129837726@N04/" target="blank">TheRageArt</a> </p>
                    <p><strong>Business Inquiries:</strong> kourtneystuartmason@gmail.com</p>
                </HeaderImg>
                <Heading1>Commisions</Heading1>
                <ArtDesc title="info">
                    <p>Contact me if you are interested in commisioning artwork. Rough prices are shown below</p>
                </ArtDesc>
                
            </section>
        );
    };
};

export default Commisions;
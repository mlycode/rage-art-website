import React, { Component } from "react";

import "./Commisions.scss";
import Heading1 from "../../components/Heading1/Heading1";
import HeaderImg from "../../components/HeaderImg/HeaderImg";
import ArtDesc from "../../components/ArtDesc/ArtDesc";
import DescCard from "../../components/DescCard/DescCard";
import img1 from "../../assets/img/1.jpg";

class Commisions extends Component {

    render () {

        return (
            <section>
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
                <section className="commisions__description">
                    <DescCard image={img1} price="From £20" item1="Black and White digital illustration" item2="High quality print on gloss printing paper" item3='7" x 4" sized print'/>
                    <DescCard image={img1} price="From £20" item1="Black and White digital illustration" item2="High quality print on gloss printing paper" item3='7" x 4" sized print'/>
                    <DescCard image={img1} price="From £20" item1="Black and White digital illustration" item2="High quality print on gloss printing paper" item3='7" x 4" sized print'/>
                    <DescCard image={img1} price="From £20" item1="Black and White digital illustration" item2="High quality print on gloss printing paper" item3='7" x 4" sized print'/>
                    <DescCard image={img1} price="From £20" item1="Black and White digital illustration" item2="High quality print on gloss printing paper" item3='7" x 4" sized print'/>
                    <DescCard image={img1} price="From £20" item1="Black and White digital illustration" item2="High quality print on gloss printing paper" item3='7" x 4" sized print'/>
                </section>
                
            </section>
        );
    };
};

export default Commisions;
import React, { Component } from "react";

import Heading1 from "../../components/Heading1/Heading1";
import HeaderImg from "../../components/HeaderImg/HeaderImg";
import ArtDesc from "../../components/ArtDesc/ArtDesc";

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
            </section>
        );
    };
};

export default Commisions;
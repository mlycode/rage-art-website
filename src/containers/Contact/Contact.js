import React, { Component } from "react";

import "./Contact.scss";
import HeaderImg from "../../components/HeaderImg/HeaderImg";
import ArtDesc from "../../components/ArtDesc/ArtDesc";

class Contact extends Component {

    componentDidMount () {
        document.title = "Contact me - Rage Art"
    }

    render () {

        return (
            <section className="contact">
                <HeaderImg title="Contact">
                    <p><strong>Email:</strong> kourtney-Paul@outlook.com</p>
                    <p><strong>Instagram:</strong> <a href="https://www.instagram.com/therageart/" target="blank">@therageart</a></p>
                    <p><strong>Flickr:</strong> <a href="https://www.flickr.com/photos/129837726@N04/" target="blank">TheRageArt</a> </p>
                    <p><strong>Business Inquiries:</strong> kourtneystuartmason@gmail.com</p>
                </HeaderImg>
                <div className="contact__info">
                    <ArtDesc title="info">
                        <p>Contact me if you are interested in commisioning artwork.</p>
                    </ArtDesc>
                </div>
                
            </section>
        );
    };
};

export default Contact;
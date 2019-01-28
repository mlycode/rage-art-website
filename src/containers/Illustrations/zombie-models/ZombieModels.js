import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img5 from "../../../assets/img/z-1.jpg";
import img2 from "../../../assets/img/z-2.jpg";
import img3 from "../../../assets/img/z3.jpg";
import img4 from "../../../assets/img/z4.jpg";
import img1 from "../../../assets/img/z5.jpg";
import img6 from "../../../assets/img/z6.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import ArtworkCard from "../../../components/ArtworkCard/ArtworkCard";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";

class ZombieModelsPage extends Component {

    componentDidMount () {
        document.title = "Zombie Models - Illustrations"
    }

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/illustrations"/>
                <ImgGrid images={[img1, img2, img3, img4, img5]}/>
                <Heading1>zombie models</Heading1>
                <ArtDesc title="description">
                    <p>Zombie Models is a series that was quite interesting and spontaneous in itself, as the entire project was made in a day.  A few weeks back I received a fashion book from one of my friends and one day I was bored so decided to just start scribbling on the faces of the models for fun, somehow it created something very surreal. The reason why I changed the faces into zombies was that I only had brown and two different shades of green left of my permeant markers, so I thought to change the idea of beauty into a fashionable decay of zombie flesh.</p>
                </ArtDesc>
                <ArtworkCard img={img1} title="Zomtastic" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img2} title="Blood Squad" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img3} title="Draw Me Like One Of Your French Zombies" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img4} title="Zomb Cara" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img5} title="Silver-Eater" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img6} title="Brains & Chill" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
            </Fragment>
        );
    };
};

export default ZombieModelsPage;
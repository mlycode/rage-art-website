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

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/illustrations"/>
                <ImgGrid images={[img1, img2, img3, img4, img5]}/>
                <Heading1>zombie models</Heading1>
                <ArtDesc title="description">
                    <p>Use your imagination, let it go. But they're very easily killed. Clouds are delicate. You have to make those little noises or it won't work. Let's put some highlights on these little trees. The sun wouldn't forget them. Let's give him a friend too. Everybody needs a friend.</p>
                    <p>You can get away with a lot. Now let's put some happy little clouds in here. Let's make a happy little mountain now. Everyone needs a friend. Friends are the most valuable things in the world. Let's get wild today. Little trees and bushes grow however makes them happy.</p>
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
import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/21.jpg";
import img2 from "../../../assets/img/earll.jpg";
import img3 from "../../../assets/img/lil-uzi.jpg";
import img4 from "../../../assets/img/willow-s.jpg";
import img5 from "../../../assets/img/pryde.jpg";
import img6 from "../../../assets/img/taco.jpg";
import img7 from "../../../assets/img/devil-trip-.jpg";
import img8 from "../../../assets/img/tyler.jpg";
import img9 from "../../../assets/img/scarlxrd.jpg";
import img10 from "../../../assets/img/skept-anime.jpg";
import img11 from "../../../assets/img/jojo-smith.jpg";
import img12 from "../../../assets/img/cardi-bb.jpg";
import img13 from "../../../assets/img/rico-nasty.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import ArtworkCard from "../../../components/ArtworkCard/ArtworkCard";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";

class DigitalRapPage extends Component {

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/illustrations"/>
                <ImgGrid images={[img12, img13, img10, img4, img7]}/>
                <Heading1>digital rap</Heading1>
                <ArtDesc title="description">
                    <p>Use your imagination, let it go. But they're very easily killed. Clouds are delicate. You have to make those little noises or it won't work. Let's put some highlights on these little trees. The sun wouldn't forget them. Let's give him a friend too. Everybody needs a friend.</p>
                    <p>You can get away with a lot. Now let's put some happy little clouds in here. Let's make a happy little mountain now. Everyone needs a friend. Friends are the most valuable things in the world. Let's get wild today. Little trees and bushes grow however makes them happy.</p>
                </ArtDesc>
                <ArtworkCard img={img7} title="Devil Trip" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img4} title="Willow Smith" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img10} title="Skept" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img11} title="Jojo Smith" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img12} title="Cardi B" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img13} title="Rico Nasty" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img1} title="ISSA GON" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img2} title="Early Man" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img3} title="Lil Uzi" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img5} title="Pryde" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img6} title="YUNG TACO" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img8} title="BIG GOLF" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
                <ArtworkCard img={img9} title="Scarlxrd" year="2016" subtitle="Digital Illustration">
                    
                </ArtworkCard>
            </Fragment>
        );
    };
};

export default DigitalRapPage;
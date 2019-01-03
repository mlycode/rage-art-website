import React, { Component, Fragment } from "react";

import "./Rage.scss";
import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/1.jpg";
import img2 from "../../../assets/img/2.jpg";
import img3 from "../../../assets/img/3.jpg";
import img4 from "../../../assets/img/4.jpg";
import img5 from "../../../assets/img/5.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";

class RagePage extends Component {

    render () {

        return (
            <Fragment>
                <ImgGrid images={[img1, img2, img3, img4, img5]}/>
                <Heading1>RAGE</Heading1>
                <ArtDesc title="description">
                    <p>Use your imagination, let it go. But they're very easily killed. Clouds are delicate. You have to make those little noises or it won't work. Let's put some highlights on these little trees. The sun wouldn't forget them. Let's give him a friend too. Everybody needs a friend.</p>
                    <p>You can get away with a lot. Now let's put some happy little clouds in here. Let's make a happy little mountain now. Everyone needs a friend. Friends are the most valuable things in the world. Let's get wild today. Little trees and bushes grow however makes them happy.</p>
                </ArtDesc>
            </Fragment>
        );
    };
};

export default RagePage;
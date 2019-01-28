import React, { Component, Fragment } from "react";

import "./Abstract.scss";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img6 from "../../../assets/img/fianl-2.jpg";
import img2 from "../../../assets/img/chaos-flower-2.jpg";
import img3 from "../../../assets/img/final-4.jpg";
import img4 from "../../../assets/img/fire-lake-2.jpg";
import img5 from "../../../assets/img/final-3.jpg";
import img1 from "../../../assets/img/rainbow-painting-2.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import ArtworkCard from "../../../components/ArtworkCard/ArtworkCard";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";

class AbstractPage extends Component {

    componentDidMount () {
        document.title = "Abstract - Paintings"
    }

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/paintings"/>
                <ImgGrid images={[img1, img2, img3, img4, img5]}/>
                <Heading1>abstract</Heading1>
                <ArtDesc title="description">
                    <p>Use your imagination, let it go. But they're very easily killed. Clouds are delicate. You have to make those little noises or it won't work. Let's put some highlights on these little trees. The sun wouldn't forget them. Let's give him a friend too. Everybody needs a friend.</p>
                    <p>You can get away with a lot. Now let's put some happy little clouds in here. Let's make a happy little mountain now. Everyone needs a friend. Friends are the most valuable things in the world. Let's get wild today. Little trees and bushes grow however makes them happy.</p>
                </ArtDesc>
                <ArtworkCard img={img1} title="Rainbow" year="2016" subtitle="Oil on Canvas, 70cm x 50cm">
                    We'll put all the little clouds in and let them dance around and have fun. This piece of canvas is your world. Take your time. Speed will come later. These things happen automatically. All you have to do is just let them happen. It's amazing what you can do with a little love in your heart. God gave you this gift of imagination. Use it.
                </ArtworkCard>
                <ArtworkCard img={img2} title="Chaos Flower" year="2016" subtitle="Oil on Canvas, 70cm x 50cm">
                    We'll put all the little clouds in and let them dance around and have fun. This piece of canvas is your world. Take your time. Speed will come later. These things happen automatically. All you have to do is just let them happen. It's amazing what you can do with a little love in your heart. God gave you this gift of imagination. Use it.
                </ArtworkCard>
                <ArtworkCard img={img3} title="Red Giant" year="2016" subtitle="Oil on Canvas, 70cm x 50cm">
                    We'll put all the little clouds in and let them dance around and have fun. This piece of canvas is your world. Take your time. Speed will come later. These things happen automatically. All you have to do is just let them happen. It's amazing what you can do with a little love in your heart. God gave you this gift of imagination. Use it.
                </ArtworkCard>
                <ArtworkCard img={img4} title="Fire Lake" year="2016" subtitle="Oil on Canvas, 70cm x 50cm">
                    We'll put all the little clouds in and let them dance around and have fun. This piece of canvas is your world. Take your time. Speed will come later. These things happen automatically. All you have to do is just let them happen. It's amazing what you can do with a little love in your heart. God gave you this gift of imagination. Use it.
                </ArtworkCard>
                <ArtworkCard img={img5} title="Chilling" year="2016" subtitle="Oil on Canvas, 70cm x 50cm">
                    We'll put all the little clouds in and let them dance around and have fun. This piece of canvas is your world. Take your time. Speed will come later. These things happen automatically. All you have to do is just let them happen. It's amazing what you can do with a little love in your heart. God gave you this gift of imagination. Use it.
                </ArtworkCard>
                <ArtworkCard img={img6} title="Ocean Blue" year="2016" subtitle="Oil on Canvas, 70cm x 50cm">
                    We'll put all the little clouds in and let them dance around and have fun. This piece of canvas is your world. Take your time. Speed will come later. These things happen automatically. All you have to do is just let them happen. It's amazing what you can do with a little love in your heart. God gave you this gift of imagination. Use it.
                </ArtworkCard>
            </Fragment>
        );
    };
};

export default AbstractPage;
import React, { Component, Fragment } from "react";

import Heading1 from "../../components/Heading1/Heading1";
import img1 from "../../assets/img/img_1143.jpg";
import img2 from "../../assets/img/adept-g.jpg";
import img3 from "../../assets/img/coloured.jpg";
import img4 from "../../assets/img/thirdeye.jpg";
import HighlightCard from "../../components/HighlightCard/HighlightCard";

class Exhibitions extends Component {

    render() {

        return (
            <Fragment>
                <Heading1>overview</Heading1>

                <HighlightCard
                    link="/exhibitions/ual-degree-show"
                    sectionType="ual degree show"
                    backgroundImg={img1}
                    title="fine art degree show"
                    subtitle="WORK FEATURED AT UAL'S FINE ART DEGREE EXHIBITION"
                />

                <HighlightCard
                    link="/exhibitions/adept-gaze"
                    sectionType="adept-gaze"
                    backgroundImg={img2}
                    title="adept-gaze"
                    subtitle="sharing the work of young artists living in london"
                />

                <HighlightCard
                    link="/exhibitions/colour-ed"
                    sectionType="colour(ed)"
                    backgroundImg={img3}
                    title="colour(ed)"
                    subtitle="personal anecdotes and experiences that inspire our art"
                />

                <HighlightCard
                    link="/exhibitions/third-eye"
                    sectionType="third eye"
                    backgroundImg={img4}
                    title="the third eye"
                    subtitle="artwork from underground artists coming from art schools in London"
                />
            </Fragment>
        );
    };
};

export default Exhibitions;
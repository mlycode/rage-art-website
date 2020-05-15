import React, { Component, Fragment } from "react";

import Heading1 from "../../components/Heading1/Heading1";
import img1 from "../../assets/img/degreeshow.jpg";
import img2 from "../../assets/img/adept-g.jpg";
import img3 from "../../assets/img/coloured.jpg";
import img4 from "../../assets/img/thirdeye.jpg";
import llc from '../../assets/img/llc-14.jpg';
import hereAndNow from '../../assets/img/here-and-now-1.jpg';
import shoreditchExpo from '../../assets/img/shoreditch-expo-3.jpg';
import blackMale from '../../assets/img/black-male-10.jpg';
import HighlightCard from "../../components/HighlightCard/HighlightCard";

class Exhibitions extends Component {

    componentDidMount () {
        document.title = "Exhibitions - Rage Art"
    }

    render() {

        return (
            <Fragment>
                <Heading1>exhibitions</Heading1>

                <HighlightCard
                    link="/exhibitions/black-male-is-____"
                    sectionType="The Black Male Is _______"
                    backgroundImg={blackMale}
                    title="The Black Male Is _______"
                    subtitle="complex and authentic stories about Black males through art"
                />

                <HighlightCard
                    link="/exhibitions/diffrnt-shoreditch-box-park"
                    sectionType="DIFFЯNT Shoreditch Boxpark"
                    backgroundImg={shoreditchExpo}
                    title="DIFFЯNT Shoreditch Boxpark"
                    subtitle="talented artists doing live paintings and exhibiting work"
                />

                <HighlightCard
                    link="/exhibitions/here-and-now"
                    sectionType="Here and Now"
                    backgroundImg={hereAndNow}
                    title="Here and Now"
                    subtitle="works by black UK artists on the theme of Britain today"
                />

                <HighlightCard
                    link="/exhibitions/diffrnt-live-painting"
                    sectionType="DIFFЯNT Live Painting"
                    backgroundImg={llc}
                    title="DIFFЯNT Live Painting"
                    subtitle="a live painting session hosted by art agency DIFFЯNT"
                />

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
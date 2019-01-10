import React, { Component, Fragment } from "react";

import img1 from "../../assets/img/report-artwork4.jpg";
import img2 from "../../assets/img/tyler.jpg";
import img3 from "../../assets/img/z-1.jpeg";
import Heading1 from "../../components/Heading1/Heading1";
import HightlightCard from "../../components/HighlightCard/HighlightCard";

class Illustrations extends Component {

    render () {

        return (
            <Fragment>
                <Heading1>
                    illustrations
                </Heading1>

                <HightlightCard
                    link="/illustrations/ual-diversity" 
                    sectionType="ual diversity"
                    backgroundImg={img1}
                    title="ual diversity report"
                    subtitle="A SERIES INVESTIGATING BAME REPRESENTATION AT UAL"
                />

                <HightlightCard
                    link="/illustrations/digital-rap" 
                    sectionType="digital rap"
                    backgroundImg={img2}
                    title="digital rap"
                    subtitle="CREATING THE SPACE FOR STREET ART IN THE CONTEMPORARY ART WORLd"
                />

                <HightlightCard
                    link="/illustrations/zombie-models" 
                    sectionType="zombie models"
                    backgroundImg={img3}
                    title="zombie models"
                    subtitle="CREATING THE SPACE FOR STREET ART IN THE CONTEMPORARY ART WORLd"
                />
            </Fragment>
        );
    };
};

export default Illustrations;
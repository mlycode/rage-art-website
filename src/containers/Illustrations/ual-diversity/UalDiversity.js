import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/report-artwork-2.jpg";
import img2 from "../../../assets/img/report-artwork-3.jpg";
import img3 from "../../../assets/img/report-artwork-4.jpg";
import img4 from "../../../assets/img/report-artwork4.jpg";
import img5 from "../../../assets/img/report-artwork-6.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import ArtworkCard from "../../../components/ArtworkCard/ArtworkCard";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";

class UalReportPage extends Component {

    componentDidMount () {
        document.title = "UAL Diversity Report - Illustrations"
    }

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/illustrations"/>
                <ImgGrid images={[img1, img2, img3, img4, img5]}/>
                <Heading1>ual diversity report</Heading1>
                <ArtDesc title="description">
                    <p>Each year UAL (University of Arts London) have an Equality, Diversity and Inclusion Report to see the progress of their students and staff over the course of the year. This is used to compare progress from previous years to see any improvement. In 2016 the ethnic diversity of students had increased slightly within the BAME (Black, Asian and minority ethnic) section, as more students are enrolling in undergraduate degree courses, however, white students are being awarded a 1st or 2:1 at higher rates than BAME students. In 2016/17 54% of home students from BAME backgrounds were awarded a 1st or 2:1, whereas 74% of white students received the same grades. This may be the result of students not getting the support they truly need to drive themselves harder within the course. This gap called ‘The Attainment Gap’. The gap between white and ethnic minorities is still very apparent even now, Dean of Student Mark Crawley also had this to say, "we still don’t have sufficient cultural awareness amongst our staff and amongst some of our students as well, that’s a key element of what we need to change" (Crawley, 2017). </p>
                    <p>These Illustrations are meant to represent the small number of BAME students within UAL, while using my own experiences and others give light to this subject matter that will hopefully help future students down the line. Each drawing is a student who has gone to UAL and experiences different levels of inequality or exclusion. </p>
                </ArtDesc>
                <ArtworkCard img={img1} title="Untitled 1" year="2018" subtitle="Digital Illustration"></ArtworkCard>
                <ArtworkCard img={img2} title="Untitled 2" year="2018" subtitle="Digital Illustration"></ArtworkCard>
                <ArtworkCard img={img3} title="Untitled 3" year="2018" subtitle="Digital Illustration"></ArtworkCard>
                <ArtworkCard img={img4} title="Untitled 4" year="2018" subtitle="Digital Illustration"></ArtworkCard>
                <ArtworkCard img={img5} title="Untitled 5" year="2018" subtitle="Digital Illustration"></ArtworkCard>
            </Fragment>
        );
    };
};

export default UalReportPage;
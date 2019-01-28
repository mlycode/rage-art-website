import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/b1.jpg";
import img2 from "../../../assets/img/b2.jpg";
import img3 from "../../../assets/img/b3.jpg";
import img4 from "../../../assets/img/b4.jpg";
import img5 from "../../../assets/img/b5.jpg";
import img6 from "../../../assets/img/b6.jpg";
import img7 from "../../../assets/img/b7.jpg";
import img8 from "../../../assets/img/b8.jpg";
import img9 from "../../../assets/img/b9.jpg";
import img10 from "../../../assets/img/b10.jpg";
import img11 from "../../../assets/img/b11.jpg";
import img12 from "../../../assets/img/b12.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import MasonryImgs from "../../../components/MasonryImgs/MasonryImgs";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";


class DegreeShowPage extends Component {

    componentDidMount () {
        document.title = "UAL Degree Show - Exhibitions"
    }

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/exhibitions"/>
                <ImgGrid images={[img1, img2, img3, img4, img5]}/>
                <Heading1>ual fine art degree show</Heading1>
                <ArtDesc title="description">
                   <p>My practice is a voice for those who are unable to discuss the ideas of diversity and inclusivity within an art institution. I mainly focus on the lack of Home BAME students and staff within UAL, while giving my own personal experience of being here. Often referencing Black British/American history, the work explores the close relationship between being Black and being a Black artist.</p>
                   <p>Taking on multiple different forms of approach such as digital illustrations, text and painting on African prints, I am consistently deconstructing and reconstructing my work to communicate different messages. In my most recent work I decided to just paint in black and copy the information from Diversity Reports, however the font I used was very harsh and aggressive, therefore completely changing the original meaning of the report from a positive to a negative one.</p>
                   <p>Although I do use my own experiences within my practice, I also collect various ideas from other students, staff and people outside the institution to create a pool of discussion in the work. My research led me to subjects that included a sense of togetherness and movement, as I looked at comparisons between Black Panther Party, Black Lives Matter (BLM), the Attainment Gap in UAL and Brett Baily's Exhibit B and how the Black community of London response.</p>
                </ArtDesc>
                <MasonryImgs>
                    <img  src={img1} alt="degreeshow 1"/>
                    <img  src={img2} alt="degreeshow 2"/>
                    <img  src={img3} alt="degreeshow 3"/>
                    <img  src={img4} alt="degreeshow 4"/>
                    <img  src={img5} alt="degreeshow 5"/>
                    <img  src={img6} alt="degreeshow 6"/>
                    <img  src={img7} alt="degreeshow 7"/>
                    <img  src={img8} alt="degreeshow 8"/>
                    <img  src={img9} alt="degreeshow 9"/>
                    <img  src={img10} alt="degreeshow 10"/>
                    <img  src={img11} alt="degreeshow 11"/>
                    <img  src={img12} alt="degreeshow 12"/>
                </MasonryImgs>
            </Fragment>
        );
    };
};

export default DegreeShowPage;
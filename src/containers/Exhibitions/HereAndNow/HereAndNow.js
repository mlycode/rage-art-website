import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import img1 from "../../../assets/img/here-and-now-1.jpg";
import img2 from "../../../assets/img/here-and-now-2.jpg";
import img3 from "../../../assets/img/here-and-now-3.jpg";
import img4 from "../../../assets/img/here-and-now-4.jpg";
import Heading1 from "../../../components/Heading1/Heading1";
import ArtDesc from "../../../components/ArtDesc/ArtDesc";
import MasonryImgs from "../../../components/MasonryImgs/MasonryImgs";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import hereAndNowVideo1 from '../../../assets/videos/here-and-now-video-1.m4v';
import hereAndNowVideo2 from '../../../assets/videos/here-and-now-2.m4v';
import videoThumb1 from '../../../assets/img/here-and-now-thumbnail-1.jpg';
import videoThumb2 from '../../../assets/img/here-and-now-thumbnail-2.jpg';


class HereAndNow extends Component {

    componentDidMount () {
        document.title = "Here and Now - Exhibitions"
    }

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/exhibitions"/>
                <ImgGrid images={[img1, img2, img3, img4, img1]}/>
                <Heading1>Here and Now</Heading1>
                <ArtDesc title="description">
                    <p>Here and Now is a group exhibition, which explores contemporary art works by black UK artists on the theme of Britain today. Our exhibiting artists are both emerging and established names, many of whom are members of Black British Visual Artists (BBVA) group on Facebook.  Our aim is to host a landmark exhibition that will reignite the black British art scene and create opportunities and exposure for our artists</p>
                </ArtDesc>
                <VideoPlayer videoSource={hereAndNowVideo1} thumbnail={videoThumb1}/>
                <VideoPlayer videoSource={hereAndNowVideo2} thumbnail={videoThumb2}/>
                <MasonryImgs>
                    <img  src={img1} alt="Here and Now 1"/>
                    <img  src={img2} alt="Here and Now 2"/>
                    <img  src={img3} alt="Here and Now 3"/>
                    <img  src={img4} alt="Here and Now 4"/>
                </MasonryImgs>
            </Fragment>
        );
    };
};

export default HereAndNow;
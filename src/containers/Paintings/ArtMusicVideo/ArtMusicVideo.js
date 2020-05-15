import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
import MasonryImgs from '../../../components/MasonryImgs/MasonryImgs'
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer'
import img1 from '../../../assets/img/art-music-video-1.jpg'
import img2 from '../../../assets/img/art-music-video-2.jpg'
import img3 from '../../../assets/img/art-music-video-3.jpg'
import img4 from '../../../assets/img/art-music-video-4.jpg'
import img5 from '../../../assets/img/art-music-video-5.jpg'
import img6 from '../../../assets/img/art-music-video-6.jpg'
import img7 from '../../../assets/img/art-music-video-7.jpg'
import img8 from '../../../assets/img/art-music-video-8.jpg'
import img9 from '../../../assets/img/art-music-video-9.jpg'
import musicVideo from '../../../assets/videos/art-music-video.m4v'
import Heading1 from "../../../components/Heading1/Heading1";
import ArtworkCard from "../../../components/ArtworkCard/ArtworkCard";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";
import videoThumbnail from '../../../assets/img/art-music-video-thumbnail.jpg';

import "./ArtMusicVideo.scss";

class ArtMusicVideo extends Component {

    componentDidMount () {
        document.title = "Art Music Video - Paintings"
    }

    render () {

        return (
            <Fragment>
                <BackLinkButton link="/paintings"/>
                <ImgGrid images={[img2, img9, img3, img4, img1]}/>
                <Heading1>Art music video</Heading1>

                <VideoPlayer videoSource={musicVideo} thumbnail={videoThumbnail}/>
                
                <ArtworkCard img={img2} title="Untitled 1" year="2020" subtitle="Marker on Canvas"></ArtworkCard>

                <MasonryImgs>
                    <img  src={img4} alt="art-music-video 1"/>
                    <img  src={img8} alt="art-music-video 2"/>
                    <img  src={img9} alt="art-music-video 3"/>
                    <img  src={img5} alt="art-music-video 4"/>
                    <img  src={img6} alt="art-music-video 5"/>
                    <img  src={img7} alt="art-music-video 6"/>
                </MasonryImgs>

            </Fragment>
        );
    };
};

export default ArtMusicVideo;
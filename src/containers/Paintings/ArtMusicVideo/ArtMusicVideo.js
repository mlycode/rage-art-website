import React, { Component, Fragment } from "react";

import ImgGrid from "../../../components/ImgGrid/ImgGrid";
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
import musicVideo from '../../../assets/videos/art-music-video.webm'
import Heading1 from "../../../components/Heading1/Heading1";
import ArtworkCard from "../../../components/ArtworkCard/ArtworkCard";
import BackLinkButton from "../../../components/BackLinkButton/BackLinkButton";

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

                <VideoPlayer videoSource={musicVideo} />
                
                <ArtworkCard img={img2} title="Untitled 1" year="2020" subtitle="Marker on Canvas"></ArtworkCard>
                <ArtworkCard img={img4} ></ArtworkCard>
                <ArtworkCard img={img8} ></ArtworkCard>
                <ArtworkCard img={img9} ></ArtworkCard>
                <ArtworkCard img={img5} ></ArtworkCard>
                <ArtworkCard img={img6} ></ArtworkCard>
                <ArtworkCard img={img7} ></ArtworkCard>
            </Fragment>
        );
    };
};

export default ArtMusicVideo;
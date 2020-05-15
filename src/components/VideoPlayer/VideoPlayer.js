import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

import './VideoPlayer.scss'

const VideoPlayer = ({ videoSource, thumbnail }) => {
    const [ playerHeight, setPlayerHeight ] = useState('38rem')
    const [ isVideoPlaying, setIsVideoPlaying ] = useState(false)

    const handleOnReady = () => {
        setPlayerHeight('100%')
        setIsVideoPlaying(true)
    }

    return (
    <div className="video-player__container">
        <ReactPlayer 
            onReady={handleOnReady}
            height={playerHeight}
            playing={isVideoPlaying}
            width={'100%'} 
            url={videoSource} 
            controls
            volume={0.5} 
            light={!!thumbnail ? thumbnail : false} />
    </div>
    )
    
}

VideoPlayer.defaultProps = {
    thumbnail: null,
}

VideoPlayer.propTypes = {
    videoSource: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]).isRequired,
    thumbnail: PropTypes.string,
}

export default VideoPlayer
import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

import './VideoPlayer.scss'

const VideoPlayer = ({ videoSource }) => (
    <div className="video-player__container">
        <ReactPlayer 
            height={'100%'}
            width={'100%'} 
            url={videoSource} 
            controls
            volume={0.5} />
    </div>
    
)

VideoPlayer.propTypes = {
    videoSource: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]).isRequired,
}

export default VideoPlayer
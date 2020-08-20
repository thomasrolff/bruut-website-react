import React, { useEffect, useState } from 'react';
import landingVideoLarge from '../../video/website_1080.mp4';
import landingVideoMedium from '../../video/website_720.m4v';
import './VideoLanding.scss';

function VideoLanding() {
const [videoSource, setVideoSource] = useState();

useEffect(() => {
  setVideoSource(window.innerWidth < 769 ? landingVideoMedium : landingVideoLarge);
}, []);

  if (!videoSource) return null;

  return (
    <video autoPlay playsInline loop muted>
      <source src={videoSource} type="video/mp4" />
    </video>
  )
}

export default VideoLanding;

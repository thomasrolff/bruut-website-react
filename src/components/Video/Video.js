import React, { useState, useEffect, useRef } from 'react';
import './Video.scss';
import { fadeOnScroll, scrollToSection } from '../../utils';

function Video() {
  const [videoAmount, setVideoAmount] = useState(2);
  const videoRef = useRef(null);
  
  useEffect(() => {
    fadeOnScroll(videoRef.current);
  }, []);

  const handleViewLess = () => {
    setVideoAmount(2);
    scrollToSection("#video", 20, .3);
  }


  return (
    <section ref={videoRef} className="video" id="video">
      <h2 className="title">Watch</h2>
      <div className="video-container">
        <iframe className="video-1" width="560" height="315" src="https://www.youtube.com/embed/lcIjIfbjgK8?start=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="BRUUT! playing their song Klets"></iframe>
        <iframe className="video-2" width="560" height="315" src="https://www.youtube.com/embed/7krpt6JchzQ?start=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="BRUUT! playing their song Prince"></iframe>
        {videoAmount >= 4 && (
          <>
          <iframe className="video-1" width="560" height="315" src="https://www.youtube.com/embed/gKE0cExR8rU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="BRUUT! playing their song Lopez"></iframe>
          <iframe className="video-2" width="560" height="315" src="https://www.youtube.com/embed/k7xyF6boJC8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="BRUUT! playing their song Baha at the Dutch television program De Wereld Draait Door"></iframe>
          </>
        )}
        {videoAmount === 6 && (
          <>
          <iframe className="video-1" width="560" height="315" src="https://www.youtube.com/embed/5I48UW57eMQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="BRUUT! playing the surf track Baha-ree-bah! with Anton Goudsmit"></iframe>
          <iframe className="video-2" width="560" height="315" src="https://www.youtube.com/embed/QwtzZzjwWe8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="BRUUT! playing their song Surf live at Amsterdam Beatclub"></iframe>
          </>
        )}
      </div>
    {videoAmount < 6 && (
      <button onClick={() => setVideoAmount(videoAmount +2)} className="button-load-more" id="load-video">Load More</button>
    )}
    {videoAmount >= 6 && (
      <button onClick={handleViewLess} className="button-view-less" id="load-video">View Less</button>
    )}
  </section>  
  );
}

export default Video;
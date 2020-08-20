import React, { useEffect, useRef } from 'react';
import { fadeOnScroll } from '../../utils';
import './News.scss';

function News() {
  const newsSectionRef = useRef(null);
  
  useEffect(() => {
    fadeOnScroll(newsSectionRef.current);
  }, []);

  return (
    <section ref={newsSectionRef} className="news">
      <h2 >News</h2>
      <div className="news-wrapper">
        <div className="news-feed"> 
          {/* Example feed 1 */}
          <p className="date">24.9.20</p>
          <div className="line" />
          <h3 className="title">Upcoming Album</h3>
          <p className="text">We’ve been working on a new album lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <button className="read-more">Read More</button>
        </div>
          {/* Example feed 2 */}
        <div className="news-feed"> 
          <p className="date">24.2.19</p>
          <div className="line" />
          <h3 className="title">'Go Surfing' out now</h3>
          <p className="text">Our collaboration with Anton Goudsmit lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
      <button className="view-more">View More</button>
    </section>
  )
}

export default News;

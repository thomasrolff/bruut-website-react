import React, { useState, useEffect, useRef} from 'react'
import Carousel from './Carousel';
import data from './../../data/bruut-photos';
import './About.scss'
import { fadeOnScroll } from '../../utils';
import image1 from '../../images/photo-1.jpg';
import image2 from '../../images/photo-2.jpg';
import image3 from '../../images/photo-3.jpg';
import image4 from '../../images/photo-4.jpg';
import image5 from '../../images/photo-5-large.jpg';
import image6 from '../../images/photo-6.jpg';
import image7 from '../../images/photo-7.jpg';
import image8 from '../../images/photo-8.jpg';
import image9 from '../../images/photo-9.jpg';


function About() {
  const [carouselVisibility, setCarouselVisibility] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const aboutRef = useRef(null);
  
  useEffect(() => {
    fadeOnScroll(aboutRef.current);
  }, []);

  useEffect(() => {
    if (carouselVisibility) {
      document.body.setAttribute("class", "no-scroll");
    } else {
      document.body.removeAttribute("class", "no-scroll");
    }
  });

  return (
    <>
    <section ref={aboutRef} className="about" id="about">
      <h2 className="title-normal">About</h2>
      <div className="about-content-wrapper">
        <article className="about-article">
          <h2 className="title-aligned">About</h2>
          <p className="text">
            <strong>BRUUT!</strong>’s music has been described as <strong>superjazz</strong>; they gladly adopted this term. Their music transcends jazz by infusing surfrock, boogaloo, hardrock and other kinds of music in their songs. The result is an energetic, hard-driven band sound on which it’s hard to keep your feet on the floor. “Jazz is meant for dancing”, is proven to be true by these four gentlemen.
            <br /><br /> 
            Recently, the best-dressed band from The Netherlands (Esquire Magazine, 2016) joined forces with ‘guitarist extraordinaire’ Anton Goudsmit and released a tribute to the surf guitar: BRUUT! & Anton Goudsmit <strong>GO SURFING</strong>. They dove into their grandparent’s record collection and dusted off some surf hits, to be transitioned into modern times. Call it ’The Beach Boys on steroids’, ’North Sea Surf’ or...listen for yourself. 
            <br /><br /> 
            ’<strong>GO SURFING</strong>‘ is now available digitally, on all streaming- and download services, and physically, on CD and Vinyl.
          </p>
        </article>  
        <div className="photo-container" id="photo-container">
          <img src={image1} alt="" />
          <img src={image5} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image6} alt="" />
          <img src={image7} alt="" />
          <img src={image8} alt="" />
          <img src={image9} alt="" />
        </div>
      </div>
      <button className="more-photos" onClick={() => setCarouselVisibility(true)}>More Photos</button>
    </section>
    {carouselVisibility && (
      <Carousel   
        setCarouselVisibility={setCarouselVisibility} 
        photos={data} 
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
    )}
    </>
  )
}

export default About;

import React, { useState, useEffect, useRef} from 'react'
import Carousel from './Carousel';
import allImages from './../../data/bruut-photos'; 
import './About.scss'
import { fadeOnScroll } from '../../utils';


function About() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const aboutRef = useRef(null);
  const selectedImage = allImages[selectedImageIndex];
  
  useEffect(() => {
    fadeOnScroll(aboutRef.current);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.setAttribute("class", "no-scroll");
    } else {
      document.body.removeAttribute("class", "no-scroll");
    }
  });

  const handleCloseButtonClick = (e) => {
    e.stopPropagation();

    setSelectedImageIndex(null);
  }

  const handlePreviousButtonClick = (e) => {
    e.stopPropagation();
    if (selectedImageIndex === 0) {
      setSelectedImageIndex(allImages.length -1);
    } else {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  }

  const handleNextButtonClick = (e) => {
    e.stopPropagation();
    if (selectedImageIndex === allImages.length -1) {
      setSelectedImageIndex(0);
    } else {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  }

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  }
  
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
          {allImages.map((image, index) => (
            <img key={image.id} src={image.thumbnail} onClick={() => handleImageClick(index)} alt={image.altText} />
          ))}
        </div>
      </div>
    </section>
    {selectedImage && (
      <Carousel   
        onCloseButtonClick={handleCloseButtonClick}
        onPreviousButtonClick={handlePreviousButtonClick}
        onNextButtonClick={handleNextButtonClick}
        selectedImage={selectedImage}
        allImages={allImages} 
      />
    )}
    </>
  )
}

export default About;

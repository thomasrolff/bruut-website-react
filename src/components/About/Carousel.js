import React, { useState } from "react";
import { ReactComponent as ButtonClose } from "../../images/cross.svg";
import { ReactComponent as ArrowLeft } from '../../images/arrow-left.svg'; 
import { ReactComponent as ArrowRight } from '../../images/arrow-right.svg'; 
import "./Carousel.scss";

export default function Carousel({
  onCloseButtonClick,
  onPreviousButtonClick,
  onNextButtonClick,
  selectedImage
}) {

  const [hideElements, setHideElements] = useState(false);

  const setDisplayNone = () => {
    return {
      display: hideElements && window.innerWidth < 769 ? 'none' : 'block'
    };
  }
  
  return (
    <div className="carousel" onClick={() => setHideElements(!hideElements)}>
      <div 
        className="carousel-button-close" 
        onClick={onCloseButtonClick} 
        style={setDisplayNone()}>
        <ButtonClose />
      </div>
      <div className="carousel-left-bar-wrapper" onClick={onPreviousButtonClick} style={setDisplayNone()}>
        <ArrowLeft />
      </div>
      {/* <div className="carousel-top-gradient" /> */}
      <div className="carousel-image-wrapper">
        <img src={selectedImage.image} alt={selectedImage.altText}></img>
      </div>
      <div className="caption-wrapper">
        <p className="caption" style={setDisplayNone()}>{`${selectedImage.captionText} - ${selectedImage.year}`}</p>
      </div>
      <div className="carousel-right-bar-wrapper" onClick={onNextButtonClick} style={setDisplayNone()}>
        <ArrowRight />
      </div>
    </div>
  );
}
import React from 'react';

export default function Carousel({ 
  setCarouselVisibility, 
  photos, 
  photoIndex, 
  setPhotoIndex }) {

  const nextPhoto = (e) => { 
    e.stopPropagation();
    if (photoIndex === photos.length -1) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex((photoIndex) + 1);
    }
  };

  const prevPhoto = (e) => { 
    e.stopPropagation();
    if (!photoIndex) {
      setPhotoIndex(photos.length -1);
    } else {
      setPhotoIndex(photoIndex -1);
    }
  };

  function closeCarousel() {
    setCarouselVisibility(false);
    setPhotoIndex(0);
  }
  
  return (
    <div className="carousel" id="overlay-shop">
    <div className="carousel-overlay-wrapper">
      <div className="carousel-top-bar-wrapper">
        <div 
          className="carousel-button-close" 
          onClick={closeCarousel}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.08697 0.0139848L64 58.1832L58.2095 64L0.294848 5.83247L6.08697 0.0139848Z" fill="black"/>
            <path d="M0 58.1684L57.913 0L63.7052 5.81684L5.79212 63.986L0 58.1684Z" fill="black"/>
          </svg>
        </div>
      </div>
      <div className="carousel-left-bar-wrapper" onClick={prevPhoto}>
          <svg width="25" height="44" viewBox="0 0 25 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.678442 23.4691L19.5838 42.3741C20.021 42.8117 20.6047 43.0527 21.2271 43.0527C21.8495 43.0527 22.4332 42.8117 22.8704 42.3741L24.2627 40.9822C25.1686 40.0752 25.1686 38.6011 24.2627 37.6955L8.38743 21.8202L24.2803 5.92734C24.7176 5.48974 24.959 4.90639 24.959 4.28435C24.959 3.66162 24.7176 3.07827 24.2803 2.64032L22.8881 1.24876C22.4505 0.811161 21.8671 0.570084 21.2447 0.570084C20.6223 0.570084 20.0386 0.811161 19.6014 1.24876L0.678442 20.171C0.240149 20.61 -0.000583391 21.1961 0.000798202 21.8192C-0.000583282 22.4447 0.240149 23.0304 0.678442 23.4691Z" fill="white"/>
          </svg>
      </div>
      <div className="carousel-top-gradient"></div>
      <div className="carousel-photo-wrapper">
        <img src={photos[photoIndex].photoURL}></img>
      </div>
      <div className="caption-wrapper">
        <p className="caption">{`${photos[photoIndex].captionText} - ${photos[photoIndex].year}`}</p>
      </div>
      <div className="carousel-right-bar-wrapper" onClick={nextPhoto}>
         <svg width="25" height="44" viewBox="0 0 25 44" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M24.3216 20.1537L5.41624 1.24875C4.97898 0.811147 4.39528 0.570068 3.7729 0.570068C3.15051 0.570068 2.56681 0.811147 2.12956 1.24875L0.737311 2.64065C-0.168633 3.54763 -0.168633 5.02173 0.737311 5.92733L16.6126 21.8026L0.719696 37.6955C0.28244 38.1331 0.0410156 38.7164 0.0410156 39.3385C0.0410156 39.9612 0.28244 40.5445 0.719696 40.9825L2.11194 42.374C2.54954 42.8116 3.1329 43.0527 3.75528 43.0527C4.37767 43.0527 4.96137 42.8116 5.39862 42.374L24.3216 23.4518C24.7598 23.0128 25.0006 22.4267 24.9992 21.8036C25.0006 21.1781 24.7598 20.5924 24.3216 20.1537Z" fill="white"/>
         </svg>
      </div>
    </div>
  </div>
  );
}
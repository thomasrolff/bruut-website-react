import React, { useEffect, useState, useRef } from 'react';
import allAlbums from './../../data/bruut-albums';
import Albums from './Albums';
import Overlay from './Overlay';
import './Shop.scss';
import { switchPreventScroll } from '../../utils';
import { fadeOnScroll } from '../../utils';

function Shop() {
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(null);
  const [selectedStream, setSelectedStream] = useState(null);
  const shopSectionRef = useRef(null);
  
  useEffect(() => {
    fadeOnScroll(shopSectionRef.current);
  }, [shopSectionRef]);

  useEffect(() => {
    console.log(shopSectionRef.current.className);
  }, []);

  // PREVENT SCROLL ON BODY (UITZOEKEN)
  // useEffect(() => {
  //   switchPreventScroll(!!selectedAlbum);
  // }, [selectedAlbumIndex]);

  const handleAlbumClick = (index) => {
    setSelectedAlbumIndex(index);
  }

  const goToPreviousAlbum = () => {
    if (selectedAlbumIndex === 0) return;

    setSelectedAlbumIndex(selectedAlbumIndex - 1);
  }

  const goToNextAlbum = () => {
    if (selectedAlbumIndex === allAlbums.length - 1) return;

    setSelectedAlbumIndex(selectedAlbumIndex + 1);
  }

  const handleCloseButtonClick = () => {
    setSelectedAlbumIndex(null);
  }

  const selectedAlbum = allAlbums[selectedAlbumIndex];

  return (
    <>
    <section ref={shopSectionRef} className="shop" id="shop">
        <h2>Shop</h2>
        <Albums albums={allAlbums} onAlbumClick={handleAlbumClick}/>
        {/* <button> */}
         <a  className="visit-webshop" href="https://bruut.bandcamp.com/" target="_blank">Visit Webshop</a>
        {/* </button> */}
    </section>
    {selectedAlbum && (
      <Overlay 
        onCloseButtonClick={handleCloseButtonClick}
        onPreviousButtonClick={goToPreviousAlbum}
        onNextButtonClick={goToNextAlbum}
        selectedAlbum={selectedAlbum}
        selectedStream={selectedStream}
        setSelectedStream={setSelectedStream}
      />
    )}
    </>
  );
}

export default Shop;
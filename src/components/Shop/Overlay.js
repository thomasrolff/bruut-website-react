import React from 'react';
import StreamModal from './StreamModal';
import { ReactComponent as ShoppingSvg } from '../../images/shopping.svg'; 
import { ReactComponent as ButtonClose } from '../../images/cross.svg'; 
import { ReactComponent as ArrowLeft } from '../../images/arrow-left.svg'; 
import { ReactComponent as ArrowRight } from '../../images/arrow-right.svg'; 
import './ShopOverlay.scss';

export default function Overlay({ 
  selectedAlbum, 
  selectedStream, 
  setSelectedStream, 
  onPreviousButtonClick,
  onNextButtonClick,
  onCloseButtonClick
}) {
  return (
    <div className="overlay-shop" id="overlay-shop">
      <div className="button-close" onClick={onCloseButtonClick}>
        <ButtonClose />
      </div>
      <div className="left-bar-wrapper" onClick={onPreviousButtonClick}>
          <ArrowLeft />
      </div>
        <div className="content-wrapper">
          <div className="image-container">
            <img src={selectedAlbum.image} alt={selectedAlbum.imageALT}/>
          </div>
          <div className="info-container">
            <h2>{selectedAlbum.title}</h2>
            <p className="released">Released: {selectedAlbum.releaseDate}</p>
            <div className="musicians">
              {selectedAlbum.musicians.map(musician => 
                <p key={musician.name}>
                  {musician.name} - {musician.instrument}
                </p>
              )}  
            </div>
            <p className="produced">Produced by {selectedAlbum.producer}</p>
            <p className="available">Available on: {selectedAlbum.availability.join(" | ")}</p>
            <div className="buttons-container">
              <a href={selectedAlbum.buyURL} target="_blank" rel="noopener noreferrer" className="button-buy" >
                <span className="button-image">
                  <ShoppingSvg />
                </span>
                <span className="button-title">
                  Buy
                </span>
              </a>
              <div 
                className="button-stream"
                onClick={() => setSelectedStream(selectedAlbum)}
              >
                Stream
              </div>
            </div>
          </div>
        </div> 
      <div className="right-bar-wrapper" onClick={onNextButtonClick}>
          <ArrowRight />
      </div>
      {selectedStream && (
        <StreamModal 
          album={selectedStream} 
          setSelectedStream={setSelectedStream}
        />
      )}
    </div>
  );
}
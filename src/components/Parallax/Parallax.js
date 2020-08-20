import React from 'react';
import './Parallax.scss';
import parallax from '../../images/parallax-black-overlay.jpg';

function Parallax() {
  return (
    <div className="parallax" style={{
      background: `url(${parallax})`,
      objectFit: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}/>
  )
}

export default Parallax;

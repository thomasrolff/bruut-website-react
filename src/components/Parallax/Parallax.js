import React from 'react';
import './Parallax.scss';
import parallax from '../../images/parallax-black-overlay.jpg';

function Parallax() {
  return (
    <div className="parallax" style={{background: `url(${parallax})`}} />
  )
}

export default Parallax;

import React from 'react';
import './Backdrop.css';

function Backdrop({ setSideDrawer }) {
  return (
    <div className="backdrop" onClick={() => setSideDrawer(false)} />
  )
}

export default Backdrop;

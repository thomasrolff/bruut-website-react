import React from 'react';
import './SideDrawer.scss';
import { scrollToSection } from '../../utils';



function SideDrawer({ sideDrawer, setSideDrawer }) {

  const handleNavClick = (section, margin) => {
    setSideDrawer(false);
    scrollToSection(section, margin);
  }

  return (
    <nav className={(sideDrawer) ? 'side-drawer visible' : 'side-drawer hidden'}>
      <ul className="nav-items">
        <li className="nav-item" onClick={() => {handleNavClick('#shows', 40)}}><span>Shows</span></li>
        <li className="nav-item" onClick={() => {handleNavClick('#video', 100)}}><span>Video</span></li>
        <li className="nav-item" onClick={() => {handleNavClick('#shop', 100)}}><span>Shop</span></li>
        <li className="nav-item" onClick={() => {handleNavClick('#about', 100)}}><span>About</span></li>
        <li className="nav-item" onClick={() => {handleNavClick('#contact', -50)}}><span>Contact</span></li>
      </ul>
    </nav>
  );
}

export default SideDrawer; 

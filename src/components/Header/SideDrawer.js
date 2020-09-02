import React from 'react';
import { ReactComponent as SpotifyLogo } from '../../images/spotify.svg'; 
import { ReactComponent as AppleLogo } from '../../images/apple.svg'; 
import { ReactComponent as InstagramLogo } from '../../images/instagram.svg'; 
import { ReactComponent as FacebookLogo } from '../../images/facebook.svg'; 
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
        <li className="nav-item"><div className="line-divider"></div></li>
        <li className="side-drawer-socials-container">
          <a href="https://open.spotify.com/artist/1z5i6osuIDbkLptD9f4gjh" target="_blank" rel="noopener noreferrer"><SpotifyLogo /></a>
          <a href="https://music.apple.com/nl/artist/bruut/468716718" target="_blank" rel="noopener noreferrer"><AppleLogo /></a>
          <a href="https://www.instagram.com/bruutmusic/" target="_blank" rel="noopener noreferrer"><InstagramLogo /></a>
          <a href="https://www.facebook.com/bruutofficial" target="_blank" rel="noopener noreferrer"><FacebookLogo /></a>
        </li>
      </ul>
    </nav>
  );
}

export default SideDrawer; 

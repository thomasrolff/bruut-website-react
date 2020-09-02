import React, { useState, useEffect } from 'react';
import './NavBar.scss';
import { ReactComponent as BruutLogo } from '../../images/bruut-logo-new.svg'; 
import { ReactComponent as SpotifyLogo } from '../../images/spotify.svg'; 
import { ReactComponent as AppleLogo } from '../../images/apple.svg'; 
import { ReactComponent as InstagramLogo } from '../../images/instagram.svg'; 
import { ReactComponent as FacebookLogo } from '../../images/facebook.svg'; 
import { scrollToSection } from '../../utils';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/src/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

function NavBar({ 
  sideDrawer, 
  setSideDrawer,
}) {
  const [breakpointReached, setBreakpointReached] = useState(false);

  const hideOnScroll = () => {
    return {
      top: breakpointReached ? '0px' : '-40px',
      transition: 'top .25s cubic-bezier(0.75, 0.25, 0.05, 0.95)'
    }
  }

  useEffect(() => {
  const watchScrollPosition = () => {
    window.scrollY > 0 ? setBreakpointReached(true) : setBreakpointReached(false);
  }

  window.addEventListener('scroll', watchScrollPosition);

  return () => {
      window.removeEventListener('scroll', watchScrollPosition);
    }
  }, [breakpointReached, setBreakpointReached]);
  
  return (
    <nav className="navbar" style={hideOnScroll()}>
      <div className="navbar-inner-container">
        <a href="/" className="logo-container">
          <BruutLogo />
        </a>
            <ul className="nav-items">
              <li className="nav-item" onClick={() => {scrollToSection('#shows', 40)}}>Shows</li>
              <li className="nav-item" onClick={() => {scrollToSection('#video', 100)}}>Video</li>
              <li className="nav-item" onClick={() => {scrollToSection('#shop', 100)}}>Shop</li>
              <li className="nav-item" onClick={() => {scrollToSection('#about', 100)}}>About</li>
              <li className="nav-item" onClick={() => {scrollToSection('#contact', -50)}}>Contact</li>
            </ul>
            <div className="socials-container">
              <a href="https://open.spotify.com/artist/1z5i6osuIDbkLptD9f4gjh" target="_blank" rel="noopener noreferrer"><SpotifyLogo /></a>
              <a href="https://music.apple.com/nl/artist/bruut/468716718" target="_blank" rel="noopener noreferrer"><AppleLogo /></a>
              <a href="https://www.instagram.com/bruutmusic/" target="_blank" rel="noopener noreferrer"><InstagramLogo /></a>
              <a href="https://www.facebook.com/bruutofficial" target="_blank" rel="noopener noreferrer"><FacebookLogo /></a>
            </div>
          <button className="hamburger-button" onClick={() => setSideDrawer(!sideDrawer)}>
            <div className="hamburger-button__line top" />
            <div className="hamburger-button__line bottom" />
            <div className="hamburger-button__line" />
          </button>
      </div>
    </nav>
  )
}

export default NavBar;
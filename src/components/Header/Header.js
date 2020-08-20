import React, { useState, useEffect, useRef } from "react";
import NavBar from "./NavBar";
import SideDrawer from "./SideDrawer";
import VideoLanding from "./VideoLanding";
import Backdrop from "../Backdrop/Backdrop";
import { ReactComponent as BruutLogo } from '../../images/bruut-logo-full-width.svg'; 
import { ReactComponent as ScrollArrow } from '../../images/scroll-down-arrow.svg'; 
import './Header.scss';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);


function Header() {
  const headerRef = useRef(null);
  const [sideDrawer, setSideDrawer] = useState(false);
  const [breakpointReached, setBreakpointReached] = useState(false);
  const [initialViewportHeight, setInitialViewportheight] = useState(null);  
  // const [hamburgerIsVisible, setHamburgerIsVisible] = useState(true);

  useEffect(() => {
    setInitialViewportheight(window.innerHeight);
  }, []);

  const setHeaderHeight = () => {
    return {
      height: window.innerWidth > 768 ? '100vh' : `${initialViewportHeight}px`
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
 
  const setViewport = () => {
    window.innerWidth += 200;
  }

  const scrollPosition = () => {
    gsap.to(window, {
      duration: 1.5, 
      scrollTo: {
        y: 300,
        autoKill: true,
      },
      ease: 'power4.out',
    });
  }

  return (
    <header ref={headerRef} className="header" style={setHeaderHeight()}>
      <NavBar 
        setSideDrawer={setSideDrawer} 
        sideDrawer={sideDrawer}
      />
      {/* {hamburgerIsVisible && 
        <div className="hamburger" onClick={() => setSideDrawer(!sideDrawer)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      } */}
      <SideDrawer sideDrawer={sideDrawer} setSideDrawer={setSideDrawer} />
      {sideDrawer && <Backdrop setSideDrawer={setSideDrawer} />}
      <VideoLanding />
        <BruutLogo className={breakpointReached ? "logo-large invisible" : "logo-large"}  />
      <div className="scroll-anchor" onClick={scrollPosition}>
        <ScrollArrow />
      </div>
    </header>
  );
}

export default Header;
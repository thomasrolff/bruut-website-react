import React, { useEffect, useRef } from 'react';
import { ReactComponent as ShoppingSvg } from '../../images/shopping.svg'; 
import { ReactComponent as SpotifyLogo } from '../../images/spotify.svg'; 
import albumCover from '../../images/album-go-surfing-lp.jpg';
import cdCover from '../../images/album-go-surfing-cd.jpg';
import lp from '../../images/lp.png';
import GoSurfingLogo from '../../images/go-surfing.svg';
import bannerBackground from '../../images/banner-background-dark-L.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Banner.scss';

function Banner() {
  const title = useRef(null);

  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".lp", {
        x: '64%',
        scrollTrigger: {
          trigger: ".banner",
          start: "top 70%",
          end: "top 25%",
          scrub: 0,
          // markers: true,
          id: "scrub"
        }
      });
    }, []);


  return (
    <section className="banner" style={{
      background: `url(${bannerBackground})`,
      objectFit: "fill",
      backgroundPositionY: "center", 
      backgroundPositionX: "center", 
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <div className="banner-image">
        <img className="album-cover" src={albumCover} alt="Go Surfing album cover" />
        <img className="lp" id="lp" src={lp} alt="Go Surfing vinyl" />
        <img src={cdCover} alt="" className="cd"/>
      </div>
      <div className="banner-text-wrapper">
        <img  ref={title} className="go-surfing-logo" src={GoSurfingLogo} alt="Go Surfing logo" />
        <p className="quote">
          <span>"Een van de leukste platen van het jaar."</span>
          <span className="bron">- Het Parool</span>
        </p>
        <p className="footnote">Available on 12" white vinyl, cd & digital</p>
        <div className="buttons-wrapper">
          <a href="https://www.platomania.nl/album/7207144/go-surfing/bruut-anton-goudsmit" target="_blank" className="banner-button" rel="noopener noreferrer">
            <span className="button-image">
              <ShoppingSvg />
            </span>
            <span className="button-title">
              Buy
            </span>
          </a>
          <a href="https://open.spotify.com/album/4JAZLSX5O3Ls78FQF88vqs" target="_blank" className="banner-button" rel="noopener noreferrer">
            <div className="inner-container">
              <span className="button-image">
                <SpotifyLogo />
              </span>
              <span className="button-title">
                Spotify 
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Banner;
import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
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
  const intersection = useIntersection(title, {
    root: null,
    rootMargin: '20px',
    threshold: 1
  });

  // const fadeIn = (element) => {
  //   gsap.to(element, .8, {
  //     opacity: 1,
  //     y: 0,
  //     ease: 'power3.out',
  //     stagger: {
  //       amount: .2
  //     }
  //   })
  // };

  // if (intersection) {
  //   fadeIn(".fade-in");
  // } 

  // const fadeOut = (element) => {
  //   gsap.to(element, 1, {
  //     opacity: 0,
  //     y: 20,
  //     ease: 'power4.out',
  //     stagger: {
  //       amount: .3
  //     }
  //   })
  // };

  // fadeOut(".fade-out") : 

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

  // Oude GSAP code (nog vervangen door nieuwe)
  // useEffect(() => {
  //   window.gsap.registerPlugin(window.ScrollTrigger);
  //   window.gsap.to(".lp", {
  //     x: '64%',
  //     // rotation: 360, 
  //     scrollTrigger: {
  //       trigger: ".banner",
  //       start: "top 75%",
  //       end: "top 25%",
  //       scrub: 0,
  //       // markers: true,
  //       id: "scrub"
  //     }
  //   });
  // });

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
          <span>"Go Surfing is the best surf-album in the world today."</span>
          <span>- New York Times</span>
        </p>
        <p className="footnote">Available on 12" white vinyl, cd & digital</p>
        <div className="buttons-wrapper">
          <a href="https://www.platomania.nl/album/7207144/go-surfing/bruut-anton-goudsmit" target="_blank" className="banner-button">
            <span className="button-image">
              <ShoppingSvg />
            </span>
            <span className="button-title">
              Buy
            </span>
          </a>
          <a href="https://open.spotify.com/album/4JAZLSX5O3Ls78FQF88vqs" target="_blank" className="banner-button">
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
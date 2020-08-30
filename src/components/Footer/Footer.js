import React from 'react';
import Newsletter from './Newsletter';
import { ReactComponent as SpotifyLogo } from '../../images/spotify.svg'; 
import { ReactComponent as AppleLogo } from '../../images/apple.svg'; 
import { ReactComponent as InstagramLogo } from '../../images/instagram.svg'; 
import { ReactComponent as FacebookLogo } from '../../images/facebook.svg'; 
import { ReactComponent as BruutLogo } from '../../images/bruut-logo-new.svg'; 
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
        <h3>follow bruut! and join the newsletter for the latest updates</h3>
        <div className="socials-container">
          <a className="socials" href="https://open.spotify.com/artist/1z5i6osuIDbkLptD9f4gjh" target="_blank" rel="noopener noreferrer">
            <div className="spotify">
              <SpotifyLogo />
            </div>
          </a>
          <a className="socials" href="https://music.apple.com/nl/artist/bruut/468716718" target="_blank" rel="noopener noreferrer">
            <div className="apple">
              <AppleLogo />
            </div>
          </a>
          <a className="socials" href="https://www.instagram.com/bruutmusic/" target="_blank" rel="noopener noreferrer">
            <div className="insta">
              <InstagramLogo />
            </div>
          </a>
          <a className="socials" href="https://www.facebook.com/bruutofficial" target="_blank" rel="noopener noreferrer">
            <div className="facebook">
              <FacebookLogo />
            </div>
          </a>
        </div>
        <Newsletter />
        <div className="logo-container">
          <a className="logo" href="/">
            <BruutLogo />
          </a>
        </div> 
        {/** Datum anders weergeven */}
        <p className="copyright">&copy; Copyright {new Date().getFullYear()}. All rights reserved.</p>
    </footer> 
  );
}

export default Footer;

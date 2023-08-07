import React from "react";
import MainIcon from "../icons/mainIcon.svg";
import Instagram from "../icons/instagram.svg";
import Twitter from "../icons/twitter.svg";
import Facebook from "../icons/facebook.svg";
import Wifi from "../icons/wifi.svg";
import Lg from "../icons/lg.svg";
import Bulut from "../icons/bulut.svg";
import Internet from "../icons/internet.svg";
import Antena from "../icons/antena.svg";

function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer__block1">
          <img className="footer__block1__mainImg" src={MainIcon} alt="icon" />
          <div className="footer__block1__socialMedia">
            <a href="https://www.instagram.com/aubakirovv__/">
              <img src={Instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={Twitter} alt="instagram" />
            </a>
            <a href="#">
              <img src={Facebook} alt="instagram" />
            </a>
          </div>
        </div>
        <div className="blocks">
          <div className="footer__block2">
            <p className="footer__block2__menu__p">
              MENU <div className="down2"></div>
            </p>
            <a href="#" className="footer__block2__menu__nav">
              Home
            </a>
            <a href="#" className="footer__block2__menu__nav">
              Episodes
            </a>
            <a href="#" className="footer__block2__menu__nav">
              About
            </a>
            <a href="#" className="footer__block2__menu__nav">
              Contact
            </a>
          </div>
          <div className="footer__block3">
            <p className="footer__block3__section__p">
              SECTION
              <div className="down3"></div>
            </p>
            <a href="#" className="footer__block3__section__nav">
              Style Guide
            </a>
            <a href="#" className="footer__block3__section__nav">
              Instructions
            </a>
            <a href="#" className="footer__block3__section__nav">
              Changelog
            </a>
            <a href="#" className="footer__block3__section__nav">
              Credit
            </a>
            <a href="#" className="footer__block3__section__nav">
              Powered by Webflow
            </a>
            <a href="#" className="footer__block3__section__nav">
              Licenses
            </a>
          </div>
          <div className="footer__block4">
            <p className="footer__block4__p">
              LISTEN ON <div className="down4"></div>
            </p>
            <a className="footer__block4__img" href="#">
              <img
                className="header-main__texts__rectangle__icons__img"
                src={Wifi}
                alt="icon"
              />
            </a>
            <a className="footer__block4__img" href="#">
              <img
                className="header-main__texts__rectangle__icons__img"
                src={Lg}
                alt="icon"
              />
            </a>
            <a className="footer__block4__img" href="#">
              <img
                className="header-main__texts__rectangle__icons__img"
                src={Bulut}
                alt="icon"
              />
            </a>
            <a className="footer__block4__img" href="#">
              <img
                className="header-main__texts__rectangle__icons__img"
                src={Internet}
                alt="icon"
              />
            </a>
            <a className="footer__block4__img" href="#">
              <img
                className="header-main__texts__rectangle__icons__img"
                src={Antena}
                alt="icon"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

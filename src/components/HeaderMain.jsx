import React from "react";
import Lines from "../icons/lines.svg";
import ImageMain from "../img/IMAGE.jpg";
import Line from "../icons/line.svg";
import Wifi from "../icons/wifi.svg";
import Lg from "../icons/lg.svg";
import Bulut from "../icons/bulut.svg";
import Internet from "../icons/internet.svg";
import Antena from "../icons/antena.svg";

function HeaderMain() {
  return (
    <div className="container">
      <section className="header-main">
        <div className="header-main__img">
          <img className="header-main__img__lines" src={Lines} alt="icon" />
          <img className="header-main__img__image" src={ImageMain} alt="img" />
        </div>
        <div className="header-main__texts">
          <p className="header-main__texts__p1">Take your podcast to the</p>
          <div className="header-main__texts__next-level">
            <div className="header-main__texts__next-level__next">
              <p className="header-main__texts__next-level__next__p">next</p>
              <img
                className="header-main__texts__next-level__next__line"
                src={Line}
                alt="line"
              />
            </div>
            <p className="header-main__texts__next-level__level">level</p>
          </div>
          <div className="header-main__texts__rectangle">
            <div className="listen">
              <p className="header-main__texts__rectangle__p">
                Listen on<div className="down"></div>
              </p>
            </div>
            <div className="header-main__texts__rectangle__icons">
              <a href="#">
                <img
                  className="header-main__texts__rectangle__icons__img"
                  src={Wifi}
                  alt="icon"
                />
              </a>
              <a href="#">
                <img
                  className="header-main__texts__rectangle__icons__img"
                  src={Lg}
                  alt="icon"
                />
              </a>
              <a href="#">
                <img
                  className="header-main__texts__rectangle__icons__img"
                  src={Bulut}
                  alt="icon"
                />
              </a>
              <a href="#">
                <img
                  className="header-main__texts__rectangle__icons__img"
                  src={Internet}
                  alt="icon"
                />
              </a>
              <a href="#">
                <img
                  className="header-main__texts__rectangle__icons__img"
                  src={Antena}
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeaderMain;

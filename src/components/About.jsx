import React from "react";
import Image from "../img/about.jpg";
import Indicant from "../icons/indicant.png";

function About() {
  return (
    <div className="container">
      <section className="about">
        <div className="about__texts">
          <div className="about__texts__indicant">
            <img className="about__texts__indicant__icon" src={Indicant} />
          </div>
          <p className="about__texts__color">Meet your host</p>
          <h2 className="about__texts__title">Jacob Paulaner</h2>
          <p className="about__texts__text">
            Jacob has a background in audio engineering, and has been podcasting
            since the early days.
          </p>
          <p className="about__texts__text">
            He's here to help you level up your game by sharing everything he'rs
            learned along the way.
          </p>
        </div>
        <div className="about__img">
          <img className="about__img__image" src={Image} alt="image" />
        </div>
      </section>
    </div>
  );
}

export default About;

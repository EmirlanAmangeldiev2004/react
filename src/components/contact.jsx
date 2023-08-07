import React from "react";
import LinesDown from "../icons/lines_down.svg";
import Star from "../icons/star.svg";

function Contact() {
  return (
    <div className="container">
      <section lassName="contact">
        <div className="contact__form">
          <img className="contact__form__lines" src={LinesDown} alt="lines" />
          <div className="contact__form__texts">
            <p className="contact__form__texts__p">Email Newsletter</p>
            <h2 className="contact__form__texts__title">
              Subscribe for updates
            </h2>
          </div>
          <form className="contact__form__inps">
            <input
              className="contact__form__inps__inp1"
              type="text"
              placeholder="Name"
            />
            <input
              className="contact__form__inps__inp2"
              type="text"
              placeholder="Email"
            />
            <button className="contact__form__inps__btn">Submit</button>
          </form>
        </div>
        <div className="contact__dataName">
          <div className="contact__dataName__block">
            <div className="contact__dataName__block__iconStar">
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
            </div>
            <h3 className="contact__dataName__block__h3">
              I can't recommend this podcast enough
            </h3>
            <p className="contact__dataName__block__p">Betty Lacey</p>
          </div>
          <div className="contact__dataName__block">
            <div className="contact__dataName__block__iconStar">
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
            </div>
            <h3 className="contact__dataName__block__h3">
              Jacob is the best in the business
            </h3>
            <p className="contact__dataName__block__p">Adam Driver</p>
          </div>
          <div className="contact__dataName__block">
            <div className="contact__dataName__block__iconStar">
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
            </div>
            <h3 className="contact__dataName__block__h3">
              A wealth of audio knowledge
            </h3>
            <p className="contact__dataName__block__p">Marcus Brown</p>
          </div>
          <div className="contact__dataName__block">
            <div className="contact__dataName__block__iconStar">
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
            </div>
            <h3 className="contact__dataName__block__h3">
              Every episode is a gem!
            </h3>
            <p className="contact__dataName__block__p">Jessica Knowl</p>
          </div>
          <div className="contact__dataName__block">
            <div className="contact__dataName__block__iconStar">
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
            </div>
            <h3 className="contact__dataName__block__h3">
              Whoa whoa, let me take some notes!
            </h3>
            <p className="contact__dataName__block__p">Scott Adams</p>
          </div>
          <div className="contact__dataName__block">
            <div className="contact__dataName__block__iconStar">
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
              <img
                className="contact__dataName__block__iconStar__star"
                src={Star}
                alt="star"
              />
            </div>
            <h3 className="contact__dataName__block__h3">
              I've upped my game considerably since I started listening
            </h3>
            <p className="contact__dataName__block__p">Steven Blast</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

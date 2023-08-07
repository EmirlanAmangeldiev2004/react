import React from "react";
import latest1 from "../img/latest1.png";
import latest2 from "../img/latest2.png";
import latest3 from "../img/latest3.png";

function Episodes() {
  return (
    <div className="container">
      <div className="latestEpisodes">
        <div className="latestEpisodes__h2-btn">
          <h2 className="latestEpisodes__h2-btn__text">Latest episodes</h2>
          <button className="latestEpisodes__h2-btn__button button">
            View all episodes
          </button>
        </div>
        <div className="latestEpisodes__cards">
          <div className="latestEpisodes__cards__card1">
            <div className="blockImg">
              <img
                className="latestEpisodes__cards__card1__img"
                src={latest1}
                alt="lates"
              />
            </div>
            <div className="latestEpisodes__cards__card1__texts">
              <div className="latestEpisodes__cards__card1__texts__miniBox">
                <p className="latestEpisodes__cards__card1__texts__miniBox__p">
                  Gear
                </p>
              </div>
              <p className="latestEpisodes__cards__card1__texts__tEpis">
                Episode
                <span className="latestEpisodes__cards__card1__texts__tEpis__span">
                  3
                </span>
              </p>
              <h2 className="latestEpisodes__cards__card1__texts__title">
                Should you get outboard audio gear?
              </h2>
              <p className="latestEpisodes__cards__card1__texts__text">
                Is hardware really worth it when it comes to podcasting? The
                answer is...it depends. Here's our reasons on why you might want
                to consider picking something up.
              </p>
              <button className="latestEpisodes__cards__card1__texts__btn button">
                View Episode Details
              </button>
            </div>
          </div>
          <div className="latestEpisodes__cards__card2">
            <div className="blockImg">
              <img
                className="latestEpisodes__cards__card2__img"
                src={latest2}
                alt="lates"
              />
            </div>
            <div className="latestEpisodes__cards__card2__texts">
              <div className="latestEpisodes__cards__card2__texts__miniBox">
                <p className="latestEpisodes__cards__card2__texts__miniBox__p">
                  Tips & Tricks
                </p>
              </div>
              <p className="latestEpisodes__cards__card2__texts__tEpis">
                Episode
                <span className="latestEpisodes__cards__card2__texts__tEpis__span">
                  2
                </span>
              </p>
              <h2 className="latestEpisodes__cards__card2__texts__title">
                Mic tricks to take you to the next level
              </h2>
              <p className="latestEpisodes__cards__card2__texts__text">
                Stop rolling with those default settings on your mic. These
                small tweaks will take you from sounding good to great.
              </p>
              <button className="latestEpisodes__cards__card2__texts__btn button">
                View Episode Details
              </button>
            </div>
          </div>
          <div className="latestEpisodes__cards__card3">
            <div className="blockImg">
              <img
                className="latestEpisodes__cards__card3__img"
                src={latest3}
                alt="lates"
              />
            </div>
            <div className="latestEpisodes__cards__card3__texts">
              <div className="latestEpisodes__cards__card3__texts__miniBox">
                <p className="latestEpisodes__cards__card3__texts__miniBox__p">
                  Gear
                </p>
              </div>
              <p className="latestEpisodes__cards__card3__texts__tEpis">
                Episode
                <span className="latestEpisodes__cards__card3__texts__tEpis__span">
                  1
                </span>
              </p>
              <h2 className="latestEpisodes__cards__card3__texts__title">
                The best microphone under $200
              </h2>
              <p className="latestEpisodes__cards__card3__texts__text">
                With so many microphones on the market, how are you supposed to
                know what's the best? Take a look at our top picks.
              </p>
              <button className="latestEpisodes__cards__card3__texts__btn button">
                View Episode Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episodes;

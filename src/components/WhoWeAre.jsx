import React from "react";
import Icon1 from "../assets/img/iconblock2.svg";
import Icon2 from "../assets/img/iconblock3.svg";

const WhoWeAre = () => {
  return (
    <section className="page__whoweare whoweare">
      <div className="whoweare__container _container">
        <div className="whoweare__header header-block">
          <h2 className="header-block__title">Who We Are</h2>
          <div className="header-block__sub-title">
            Problems trying to resolve the conflict between the two major realms
            <br />
            <br />
            of Classical physics: Newtonian mechanics
          </div>
        </div>
        <div className="whoweare__body">
          <div className="whoweare__video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/aper8hDomkA?start=20"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="whoweare__content">
            <h2 className="whoweare__title">Most trusted in our field</h2>
            <div className="whoweare__text">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </div>
            <div className="whoweare__items">
              <div className="whoweare__item item-whoweare">
                <div className="iten-whoweare__icon">
                  <img src={Icon1} alt="Icon" />
                </div>
                <div className="iten-whoweare__body">
                  <div className="iten-whoweare__title">
                    the quick fox jumps over the lazy dog
                  </div>
                  <div className="iten-whoweare__text">
                    Things on a very small scale Things on a very small scale
                    Things on a very small scale Things on a very small scale
                  </div>
                </div>
              </div>

              <div className="whoweare__item item-whoweare">
                <div className="iten-whoweare__icon">
                  <img src={Icon2} alt="Icon" />
                </div>
                <div className="iten-whoweare__body">
                  <div className="iten-whoweare__title">
                    the quick fox jumps over the lazy dog
                  </div>
                  <div className="iten-whoweare__text">
                    Things on a very small scale Things on a very small scale
                    Things on a very small scale Things on a very small scale
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

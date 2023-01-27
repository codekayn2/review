import React from "react";
import Icon1 from "../assets/getintouch/1.png";
import Icon2 from "../assets/getintouch/2.png";
import Icon3 from "../assets/getintouch/3.png";
import Contact from "./Contact"
const GetInTouch = () => {
  return (
    <section className="page__getintouch getintouch">
      <div className="getintouch__container _container">
        <div className="getintouch__header header-block">
          <h2 className="header-block__title">Get In Touch</h2>
          <div className="header-block__sub-title">
            Problems trying to resolve the conflict between the two major realms
            <br />
            <br />
            of Classical physics: Newtonian mechanics
          </div>
        </div>
        <div className="getintouch__items">
          <div className="getintouch__item item-getintouch">
            <div className="item-getintouch__icon">
              <img src={Icon1} alt="Icon1" />
            </div>
            <div className="item-getintouch__emails">
              <a
                href="mailto:georgia.young@example.com"
                className="item-getintouch__email"
              >
                georgia.young@example.com
              </a>
              <a
                href="mailto:georgia.young@ple.com"
                className="item-getintouch__email"
              >
                georgia.young@ple.com
              </a>
            </div>
            <div className="item-getintouch__label">Get Support</div>
            <a href="" className="item-getintouch__button">
              Submit Request
            </a>
          </div>
          <div className="getintouch__item item-getintouch item-getintouch__active">
            <div className="item-getintouch__icon">
              <img src={Icon2} alt="Icon1" />
            </div>
            <div className="item-getintouch__emails">
              <a
                href="mailto:georgia.young@example.com"
                className="item-getintouch__email"
              >
                georgia.young@example.com
              </a>
              <a
                href="mailto:georgia.young@ple.com"
                className="item-getintouch__email"
              >
                georgia.young@ple.com
              </a>
            </div>
            <div className="item-getintouch__label">Get Support</div>
            <a href="" className="item-getintouch__button">
              Submit Request
            </a>
          </div>
          <div className="getintouch__item item-getintouch">
            <div className="item-getintouch__icon">
              <img src={Icon3} alt="Icon1" />
            </div>
            <div className="item-getintouch__emails">
              <a
                href="mailto:georgia.young@example.com"
                className="item-getintouch__email"
              >
                georgia.young@example.com
              </a>
              <a
                href="mailto:georgia.young@ple.com"
                className="item-getintouch__email"
              >
                georgia.young@ple.com
              </a>
            </div>
            <div className="item-getintouch__label">Get Support</div>
            <a href="" className="item-getintouch__button">
              Submit Request
            </a>
          </div>
        </div>
      </div>
      <Contact/>
    </section>
  );
};

export default GetInTouch;

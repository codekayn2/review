import React from "react";
import Icon from "../assets/img/cover.jpg";
import GetInTouch from "./GetInTouch";
import ServiceIcon from "./ServiceIcon";
const Page = () => {
  return (
    <div className="page">
      <div className="page__main-block main-block">
        <div className="main-block__container _container">
          <div className="main-block__body">
            <h1 className="main-block__title">
              Finance and Consultancy Solution
            </h1>
            <div className="main-block__text">
              We know how large objects will act, but things on a small scale
            </div>
            <div className="main-block__buttons">
              <a
                href="#"
                className="main-block__button main-block__button_orange"
              >
                Get Quote Now
              </a>
              <a
                href="#"
                className="main-block__button main-block__button_border"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="main-block__image _ibg">
          <img src={Icon} alt="cover" />
        </div>
      </div>
      <ServiceIcon />
      <GetInTouch/>
    </div>
  );
};

export default Page;

import React from 'react'
import Icon01 from "../assets/img/01.svg";
import Icon02 from "../assets/img/02.svg";
import Icon03 from "../assets/img/03.svg";
import Advantage from './Advantage';
import PracticeAdvice from './PracticeAdvice';
import WhoWeAre from './WhoWeAre';
const ServiceIcon = () => {
  return (
    <>
    <section className="page__services services">
          <div className="services__container _container">
            <div className="services__body">
              <div className="services__column">
                <div className="services__item item-service">
                  <div className="item-service__icon">
                    <img src={Icon01} alt="Environmental Consulting" />
                  </div>
                  <h3 className="item-service__title">
                    Environmental Consulting
                  </h3>
                  <div className="item-service__text">
                    We focus on ergonomics and meeting you where you work.{" "}
                  </div>
                </div>
              </div>
              <div className="services__column">
                <div className="services__item item-service">
                  <div className="item-service__icon">
                    <img src={Icon02} alt="Finance and consultancy " />
                  </div>
                  <h3 className="item-service__title">
                    Finance and consultancy
                  </h3>
                  <div className="item-service__text">
                    Just type what's on your mind and we'll get you there.
                  </div>
                </div>
              </div>
              <div className="services__column">
                <div className="services__item item-service item-service__green">
                  <div className="item-service__icon ">
                    <img src={Icon03} alt="Financial Services Consulting" />
                  </div>
                  <h3 className="item-service__title">
                    Financial Services Consulting
                  </h3>
                  <div className="item-service__text">
                    the quick fox jumps over the lazy dog
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Advantage/>
        <PracticeAdvice/>
        <WhoWeAre/>
        </>
  )
}

export default ServiceIcon
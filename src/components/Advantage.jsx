import React from "react";
import Icon01 from "../assets/img/01.svg";
import Icon04 from "../assets/img/04.svg";
import Icon05 from "../assets/img/05.svg";
import Icon06 from "../assets/img/06.svg";

const Advantage = () => {
  return (
    <section className="page__advanrages advanrages">
      <div className="advanrages__container _container">
        <div className="advanrages__header header-block">
          <h2 className="header-block__title">Designing Better Experience</h2>
          <div className="header-block__sub-title">
            Problems trying to resolve the conflict between the two major realms
            <br />
            <br />
            of Classical physics: Newtonian mechanics
          </div>
        </div>
        <div className="advanrages__body">
          <div className="advanrages__column">
            <div className="advanrages__item">
              <div className="advanrages__icon">
                <img src={Icon04} alt="Consumer Products" />
              </div>
              <div className="advanrages__value">972+</div>
              <div className="advanrages__text">Consumer Products</div>
            </div>
          </div>
          <div className="advanrages__column">
            <div className="advanrages__item">
              <div className="advanrages__icon">
                <img src={Icon05} alt="Financial Services" />
              </div>
              <div className="advanrages__value">181 +</div>
              <div className="advanrages__text">Financial Services </div>
            </div>
          </div>
          <div className="advanrages__column">
            <div className="advanrages__item">
              <div className="advanrages__icon">
                <img src={Icon06} alt="Environmental" />
              </div>
              <div className="advanrages__value">98%</div>
              <div className="advanrages__text">Environmental</div>
            </div>
          </div>
          <div className="advanrages__column">
            <div className="advanrages__item">
              <div className="advanrages__icon">
                <img src={Icon01} alt="Business & Finance" />
              </div>
              <div className="advanrages__value">746 +</div>
              <div className="advanrages__text">Business & Finance </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;

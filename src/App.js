import React from "react";
import Icon from "./assets/img/cover.jpg";
import Icon01 from "./assets/img/01.svg";
import Icon02 from "./assets/img/02.svg";
import Icon03 from "./assets/img/03.svg";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container _container">
          <a href="#" className="header__logo">
            Relvise
          </a>
          <nav className="header__menu menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Home
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Product
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Pricing
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
                    <img
                      src={Icon02}
                      alt="Finance and consultancy "
                    />
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
                    <img
                      src={Icon03}
                      alt="Financial Services Consulting"
                    />
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
      </div>
      <footer className="footer">Я подвал</footer>
    </div>
  );
}

export default App;

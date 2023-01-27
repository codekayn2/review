import React from "react";
import Inst from "../assets/footer/i.png";
import Face from "../assets/footer/f.png";
import Twit from "../assets/footer/t.png";
import You from "../assets/footer/y.png";
import Icon1 from "../assets/footer/1.svg";
import Icon2 from "../assets/footer/2.svg";
import Icon3 from "../assets/footer/3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__main _container">
          <div className="footer__row">
            <div className="footer__column">
              <div className="footer__label">Company Info</div>
              <nav className="footer__menu menu-footer">
                <ul className="menu-footer__list">
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      About Us
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      Carrier
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      We are hiring
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__column">
              <div className="footer__label">Legal</div>
              <nav className="footer__menu menu-footer">
                <ul className="menu-footer__list">
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      About Us
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      Carrier
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      We are hiring
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__column">
              <div className="footer__label">Features</div>
              <nav className="footer__menu menu-footer">
                <ul className="menu-footer__list">
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      Business Marketing
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      User Analytic
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      Live Chat
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      Unlimited Support
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__column">
              <div className="footer__label">Resources</div>
              <nav className="footer__menu menu-footer">
                <ul className="menu-footer__list">
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      IOS & Android
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      Watch a Demo
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      Customers
                    </a>
                  </li>
                  <li className="menu-footer__item">
                    <a href="" className="menu-footer__link">
                      API
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__column">
              <div className="footer__label">Get In Touch</div>
              <div className="footer__contacts contacts-footer">
                <a
                  href="tel:4805550103"
                  className="contacts-footer__item  contacts-footer__item_phone"
                >
                  <img src={Icon1} />
                  (480) 555-0103
                </a>
                <a
                  href="tel:4805550103"
                  className="contacts-footer__item  contacts-footer__item_map"
                >
                  <img src={Icon2} />
                  4517 Washington Ave.{" "}
                </a>
                <a
                  href="mailto:debra.holt@example.com"
                  className="contacts-footer__item  contacts-footer__item_email"
                >
                  <img src={Icon3} />
                  debra.holt@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__container _container">
          <div className="footer__copy">
            prodBy codekayn
          </div>
          <div className="footer__social _social">
            <a href="" className="social__item">
              <img src={Inst} alt="Inst" />
            </a>
            <a href="" className="social__item">
              <img src={Face} alt="Face" />
            </a>
            <a href="" className="social__item">
              <img src={Twit} alt="Twit" />
            </a>
            <a href="" className="social__item">
              <img src={You} alt="You" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

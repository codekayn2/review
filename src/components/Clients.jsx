import React from "react";
import Icon1 from "../assets/clients/1.png";
import Icon2 from "../assets/clients/2.png";
import Icon3 from "../assets/clients/3.png";
import Icon4 from "../assets/clients/4.png";
import Icon5 from "../assets/clients/5.png";
import Icon6 from "../assets/clients/6.png";
import Subscribe from "./Subscribe";

const Clients = () => {
  return (
    <div className="page__clients _container">
      <div className="clients__container _container">
        <div className="clients__items">
          <div className="clients__item">
            <img src={Icon1} alt="Icon1" />
          </div>
          <div className="clients__item">
            <img src={Icon2} alt="Icon2" />
          </div>
          <div className="clients__item">
            <img src={Icon3} alt="Icon3" />
          </div>
          <div className="clients__item">
            <img src={Icon4} alt="Icon4" />
          </div>
          <div className="clients__item">
            <img src={Icon5} alt="Icon5" />
          </div>
          <div className="clients__item">
            <img src={Icon6} alt="Icon6" />
          </div>
        </div>
        <Subscribe />
      </div>
    </div>
  );
};

export default Clients;

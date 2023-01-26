import React from "react";

const Subsribe = () => {
  return (
    <section className="page__subscribe subscribe">
      <div className="subscribe__container _container">
        <div className="subscribe__body">
          <h4 className="subscribe__title">Subscribe For Latest Newsletter</h4>
          <form action="" className="subscribe__form">
            <input
              autoComplete="off"
              name="form[]"
              type="email"
              required
              className="subscribe__input"
              placeholder="Your Email"
            />
            <button type="submit" className="subscribe__button">
              Subsribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subsribe;

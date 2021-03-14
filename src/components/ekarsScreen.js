import React from "react";

const ekarsScreen = () => {
  return (
    <div className="e-kars">
      <div className="title">
        <h1>E-Kars</h1>
      </div>
      <div className="key__features">
        <div className="features__list">
          <h2>Key Features</h2>
          <ul>
            <li>
              Cart and Checkout system using{" "}
              <span className="feat_emph">Stripe</span>
            </li>
            <li>
              User Authentication using custom
              <span className="feat_emph">Mongoonse Methods</span>
            </li>
            <li>
              Retrieving forgotten passwords with{" "}
              <span className="feat_emph">SendGrid</span>
            </li>
            <li>
              Managing React.js state with{" "}
              <span className="feat_emph">Redux</span>
            </li>
          </ul>
        </div>
        <div className="image"></div>
      </div>

      <div className="project__details">
        <div className="project__introduction"></div>
        <div className="product__page"></div>
        <div className="cart__checkout"></div>
        <div className="auth"></div>
      </div>
    </div>
  );
};

export default ekarsScreen;

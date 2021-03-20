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
        <div className="image">
          <img src="/images/ekars.png" alt="ekars" />
        </div>
      </div>

      <div className="project__details">
        <div className="project__introduction">
          <div className="img"></div>
          <div className="description">
            E-Kars is a conceptual project that exemplifies the intricacies
            behind an e-Commerce application. On this page, you will find more
            technical details on how I built E-Kars.
          </div>
        </div>
        <div className="product__page">
          <div className="desc">
            Data is pulled from MongoDB to display the cars on this product
            page. The sidebar and the navbar stores it's input values into the
            Redux store, then filtered on this page.
          </div>
          <div className="image"></div>
        </div>
        <div className="cart__checkout"></div>
        <div className="auth"></div>
      </div>
    </div>
  );
};

export default ekarsScreen;

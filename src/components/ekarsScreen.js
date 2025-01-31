import React from "react";
import "../css/ekarsScreen.css";

const bragBookScreen = () => {
  return (
    <div className="e-kars">
      <div className="title">
        <h1>BragBook</h1>
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
              <span className="feat_emph">Mongoose Methods</span>
            </li>
            <li>
              Retrieving forgotten passwords with{" "}
              <span className="feat_emph">Brevo</span>
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
          <div className="image"></div>
          <div className="description">
            Brag Book is a conceptual project that exemplifies the intricacies
            behind a micro-blog application. On this page, you will find more
            technical details on how I built BragBook.
          </div>
        </div>
        <div className="product__page">
          <div className="desc">
            Data is pulled from MongoDB to display all the blogs on the feed
            page. The sidebar and the navbar stores it's input values into the
            Redux store, then filtered on this page.
          </div>
          <div className="image"></div>
        </div>
        <div className="cart__checkout">
          <div className="image"></div>
          <div className="desc">
            Clicking "Add to Cart" takes the id of the item, and renders it on
            the cart page. The redux action is responsible for taking the
            specific car to the Redux store.
          </div>
        </div>
        <div className="auth">
          I utilized Mongoose to created custom methods on the User model to
          handle authentication with Json Web Tokens and Bcrypt.
        </div>
      </div>
    </div>
  );
};

export default bragBookScreen;

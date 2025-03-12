import React from "react";
import { Link } from "react-router-dom";
import LandingPageImg from "./Assets/image/white.png";
import "./landingPage.css";

function LandingPage() {
  return (
    <div className="Landingpage">
      <div className="Landingpage-logo">
        <img
          src={LandingPageImg}
          alt="Landing page logo"
        />
      </div>

      <div className="landingpage-container">
        <div className="Hero-section">
          <div className="Hero-header">
            <h2>
              Live it. Wear it. <span>Feel it!</span>
            </h2>
          </div>

          <div className="Hero-content">
            <p>
              What is it about wearing a tuxedo or that little black dress, that
              makes us feel confident, beautiful, splendid or even invincible?
              we put on formal wears and suddenly we become extraordinary.on
              days when you feel low and invisible, why not try this on for
              size.
            </p>

            <div className="promos">
              <p>
                we sell <b>quality!</b>
              </p>
            </div>

            <div className="Hero-btn">
              <Link to="/Home">
                <button>Explore...</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

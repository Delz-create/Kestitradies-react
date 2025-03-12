import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <section
      id="banner"
      className="section-m1">
      <h4>Repair Services</h4>
      <h2>
        Quality <span>products</span> are been added everyday!
      </h2>
      <a href="shop.html">
        <button className="normal">Explore now</button>
      </a>
    </section>
  );
}

export default Banner;

import React from "react";
import Navbar from "../Navbar";
import Products from "../Products/Products";
import Footer from "../Footer";
import "./Shop.css";

function Shop() {
  return (
    <div className="Shop">
      <Navbar />

      <div className="Shop-header">
        <h1>Shop</h1>
      </div>

      <div className="Shop-products">
        <Products />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Shop;

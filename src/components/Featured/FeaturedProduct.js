import React from "react";
import FeaturedProducts from "./FeaturedProducts";

function FeaturedProduct() {
  return (
    <div className="Products">
      <div className="Products-header">
        <h1>featrued product</h1>
        <p>Collection of native materials</p>
      </div>

      <div className="FeaturedProduct-products">
        <FeaturedProducts />
      </div>
    </div>
  );
}

export default FeaturedProduct;

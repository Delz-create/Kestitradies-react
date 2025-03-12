import React from "react";
import NewArrivalProducts from "./NewArrivalProducts";

function NewArrival() {
  return (
    <div class="Products">
      <div className="Products-header">
        <h1>New Arrival</h1>
        <p>Collection of native materials</p>
      </div>

      <div className="NewArrival-products">
        <NewArrivalProducts />
      </div>
    </div>
  );
}

export default NewArrival;

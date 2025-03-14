import React, { useContext } from "react";
import NewArrivalProducts from "./NewArrivalProducts";
import { CartContext } from "../CartContext";

function NewArrival() {
  const { setCartItems } = useContext(CartContext);
  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };
  return (
    <div class="Products">
      <div className="Products-header">
        <h1>New Arrival</h1>
        <p>Collection of native materials</p>
      </div>

      <div className="NewArrival-products">
        <NewArrivalProducts onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}

export default NewArrival;

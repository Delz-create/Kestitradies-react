import React, { useContext } from "react";
import FeaturedProducts from "./FeaturedProducts";
import { CartContext } from "../CartContext";

function FeaturedProduct() {
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
    <div className="Products">
      <div className="Products-header">
        <h1>featrued product</h1>
        <p>Collection of native materials</p>
      </div>

      <div className="FeaturedProduct-products">
        <FeaturedProducts onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}

export default FeaturedProduct;

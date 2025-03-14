import React, { useContext } from "react";
import Navbar from "../Navbar";
import Products from "../Products/Products";
import Footer from "../Footer";
import "./Shop.css";
import { CartContext } from "../CartContext";

function Shop() {
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
    <div className="Shop">
      <Navbar />

      <div className="Shop-header">
        <h1>Shop</h1>
      </div>

      <div className="Shop-products">
        <Products onAddToCart={handleAddToCart} />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Shop;

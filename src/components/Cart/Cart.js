import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { MdDelete } from "react-icons/md";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleDeleteItem = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const applyDiscount = () => {
    if (discountCode === "SAVE10") {
      setDiscount(10);
      setDiscountCode("");
    } else {
      alert("Invalid discount code");
    }
  };

  const totalSum = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountedTotal = totalSum * (1 - discount / 100);

  return (
    <div className="Cart">
      <Navbar />

      <div className="Cart-main-content">
        <div className="Cart-header">
          <h1>Check-out</h1>
        </div>

        <hr />

        <div className="cart-products">
          <ul>
            {cartItems.map((item) => (
              <div
                className="cart-product"
                key={item.id}>
                <li>
                  <div className="product-img card-img">
                    <img
                      src={item.img}
                      alt="cart-img"
                    />
                  </div>

                  <div className="cart-product-details">
                    <div className="cart-product-detail">
                      <div className="cart-product-title card-title">
                        <p>{item.title}</p>
                      </div>

                      <div className="cart-product-des card-des">
                        <p>{item.des}</p>
                      </div>
                    </div>

                    <div className="aside">
                      <div className="quantity-controls">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>

                      <div className="cart-product-price card-price">
                        <p>N {item.price}</p>
                      </div>
                    </div>
                  </div>

                  <div className="del-btn">
                    <button onClick={() => handleDeleteItem(item.id)}>
                      <MdDelete />
                    </button>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>

        <div className="discount-section">
          <div className="discount-section-input">
            <input
              type="text"
              placeholder="Enter discount code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
          </div>

          <div className="discount-section-button">
            <button onClick={applyDiscount}>Apply Discount</button>
          </div>
        </div>

        <p className="total">Total: ${discountedTotal.toFixed(2)}</p>

        <div className="checkout-btn">
          <button>proceed to payment</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;

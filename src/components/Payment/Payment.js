import React, { useContext, useState } from "react";
import "./Payment.css";
import { CartContext } from "../CartContext";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../Navbar";
import { IoIosCloseCircle } from "react-icons/io";
import Footer from "../Footer";

function Payment() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertErrorMessage, setAlertErrorMessage] = useState("");

  const totalSum = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    if (cartItems.length === 0) {
      setAlertErrorMessage(`Please add products to your cart.`);
      return;
    }

    setAlertMessage(`Payment of N${totalSum.toFixed(2)} successful!`);

    setCartItems([]);

    localStorage.removeItem("cart");

    setTimeout(() => {
      setAlertMessage("");
    }, 5000);
  };

  return (
    <div className="Payment-container">
      <Navbar />

      <div className="Payment">
        <div className="Payment-header">
          <h1>Payment</h1>
        </div>

        <div className="Payment_summary">
          <div className="Paymaent_summaty-header">
            <h2>Order Summary</h2>
          </div>

          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="Payment_summary-img">
                  <img
                    src={item.img}
                    alt="img"
                  />
                </div>

                <div className="Payment_summary-description">
                  <>
                    {item.title} - {item.quantity} x N{item.price}
                  </>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <>
          <p className="total">
            Total: <span>N{totalSum.toFixed(2)}</span>
          </p>
        </>

        <div className="Payment-methods">
          <h2>Payment Methods</h2>
          <p>Simulated payment (no real transaction)</p>
          <button onClick={handlePayment}>Proceed to Payment</button>
        </div>

        {alertMessage && (
          <div className="alert-message">
            <FaCheckCircle />
            <p>{alertMessage}</p>
          </div>
        )}

        {alertErrorMessage && (
          <div className="alert-error-message">
            <IoIosCloseCircle />
            <p>{alertErrorMessage}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Payment;

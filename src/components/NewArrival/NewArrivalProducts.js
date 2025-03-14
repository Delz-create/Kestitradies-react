import React from "react";
import Product_7 from "./images/product_7.JPG";
import Product_8 from "./images/product_8.JPG";
import Product_9 from "./images/product_9.JPG";
import { CiShoppingCart } from "react-icons/ci";

function NewArrivalProducts({ onAddToCart }) {
  const NewArrivalProducts = [
    {
      id: 1,
      img: Product_7,
      title: "Looming (pure cotten)",
      price: 15000,
    },
    {
      id: 2,
      img: Product_8,
      title: "Looming (pure cotten)",
      price: 15000,
    },
    {
      id: 3,
      img: Product_9,
      title: "Looming (pure cotten)",
      price: 15000,
    },
  ];
  return (
    <div className="products">
      {NewArrivalProducts.map((item) => (
        <div
          className="card"
          key={item.id}>
          <div className="card-img">
            <img
              src={item.img}
              alt="product-img"
            />
          </div>
          <div className="card-des_title">
            <p>{item.title}</p>
          </div>

          <div className="card-des_price">
            <p>
              <span>N</span>
              {item.price}
            </p>
          </div>

          <div className="card-btns">
            <div className="card-btns_buy-now">
              <button>buy now</button>
            </div>

            <div className="card-btns_cart-btn">
              <button onClick={() => onAddToCart(item)}>
                <CiShoppingCart />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewArrivalProducts;

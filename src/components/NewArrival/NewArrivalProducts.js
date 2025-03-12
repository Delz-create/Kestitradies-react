import React from "react";
import Product_7 from "./images/product_7.JPG";
import Product_8 from "./images/product_8.JPG";
import Product_9 from "./images/product_9.JPG";
import { CiShoppingCart } from "react-icons/ci";

function NewArrivalProducts() {
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
      {NewArrivalProducts.map((product) => (
        <div
          className="card"
          key={product.id}>
          <div className="card-img">
            <img
              src={product.img}
              alt="product-img"
            />
          </div>
          <div className="card-des_title">
            <p>{product.title}</p>
          </div>

          <div className="card-des_price">
            <p>
              <span>N</span>
              {product.price}
            </p>
          </div>

          <div className="card-btns">
            <div className="card-btns_buy-now">
              <button>buy now</button>
            </div>

            <div className="card-btns_cart-btn">
              <button>
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

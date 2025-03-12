import React from "react";
import Product_1 from "./images/product_1.JPG";
import Product_2 from "./images/product_2.JPG";
import Product_3 from "./images/product_3.JPG";
import Product_4 from "./images/product_4.JPG";
import Product_5 from "./images/product_5.JPG";
import Product_6 from "./images/product_6.JPG";

import { CiShoppingCart } from "react-icons/ci";

function FeaturedProducts() {
  const FeaturedProduct = [
    {
      id: 1,
      img: Product_1,
      title: "Etu (Alari Strips)",
      price: 8000,
    },
    {
      id: 2,
      img: Product_2,
      title: "Kente",
      price: 10000,
    },
    {
      id: 3,
      img: Product_3,
      title: "Looming (pure cotten)",
      price: 15000,
    },
    {
      id: 4,
      img: Product_4,
      title: "jawu (Alari Strips)",
      price: 8000,
    },
    {
      id: 5,
      img: Product_5,
      title: "jawu",
      price: 12000,
    },
    {
      id: 6,
      img: Product_6,
      title: "Kante",
      price: 8000,
    },
  ];
  return (
    <div className="products">
      {FeaturedProduct.map((product) => (
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

export default FeaturedProducts;

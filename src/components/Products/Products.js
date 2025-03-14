import React from "react";
import Product_1 from "./images/product_1.JPG";
import Product_2 from "./images/product_2.JPG";
import Product_3 from "./images/product_3.JPG";
import Product_4 from "./images/product_4.JPG";
import Product_5 from "./images/product_5.JPG";
import Product_6 from "./images/product_6.JPG";
import Product_7 from "./images/product_7.JPG";
import Product_8 from "./images/product_8.JPG";
import Product_9 from "./images/product_9.JPG";
import Product_10 from "./images/product_10.JPG";
import Product_11 from "./images/product_11.JPG";
import Product_12 from "./images/product_12.JPG";
import Product_13 from "./images/product_13.JPG";
import Product_14 from "./images/product_14.JPG";
import Product_15 from "./images/product_15.JPG";
import Product_16 from "./images/product_16.JPG";
import Product_17 from "./images/product_17.JPG";
import Product_18 from "./images/product_18.JPG";
import { CiShoppingCart } from "react-icons/ci";

function Products({ onAddToCart }) {
  const products = [
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
    {
      id: 7,
      img: Product_7,
      title: "kante (Black)",
      price: 10000,
    },
    {
      id: 8,
      img: Product_8,
      title: "kante (blue)",
      price: 10000,
    },
    {
      id: 9,
      img: Product_9,
      title: "lasar-cut",
      price: 16000,
    },
    {
      id: 10,
      img: Product_10,
      title: "loom (pure cotton)",
      price: 10000,
    },
    {
      id: 11,
      img: Product_11,
      title: "Etu with alari (pure cotton)",
      price: 8000,
    },
    {
      id: 12,
      img: Product_12,
      title: "pure cotton in pieces",
      price: 12000,
    },
    {
      id: 13,
      img: Product_13,
      title: "isen (pure cotton)",
      price: 8000,
    },
    {
      id: 14,
      img: Product_14,
      title: "waka (pure cotton)",
      price: 8000,
    },
    {
      id: 15,
      img: Product_15,
      title: "kante (pure cotton)",
      price: 13000,
    },
    {
      id: 16,
      img: Product_16,
      title: "loom (pure cotton)",
      price: 8000,
    },
    {
      id: 17,
      img: Product_17,
      title: "iwaka (cotton)",
      price: 8000,
    },
    {
      id: 18,
      img: Product_18,
      title: "sanyan (pure cotton)",
      price: 8000,
    },
  ];
  return (
    <div className="products">
      {products.map((item) => (
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

export default Products;

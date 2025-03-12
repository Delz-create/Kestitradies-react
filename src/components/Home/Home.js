import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../Navbar";
import FeaturedProduct from "../Featured/FeaturedProduct";
import Banner from "../Banner/Banner";
import NewArrival from "../NewArrival/NewArrival";
import Footer from "../Footer";

function Home() {
  return (
    <div className="Home">
      <Navbar />

      <div className="Hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <div className="Hero-btn">
          <Link to="/Shop">
            <button>shop now</button>
          </Link>
        </div>
      </div>

      <div className="FeaturedProducts">
        <FeaturedProduct />
      </div>

      <div className="Banner">
        <Banner />
      </div>

      <div className="NewArrival">
        <NewArrival />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;

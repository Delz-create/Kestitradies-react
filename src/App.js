import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/Landing page/LandingPage";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={<LandingPage />}
            />
            <Route
              path="/Home"
              element={<Home />}
            />
            <Route
              path="/Shop"
              element={<Shop />}
            />
            <Route
              path="/Contact"
              element={<Contact />}
            />
            <Route
              path="/Cart"
              element={<Cart />}
            />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;

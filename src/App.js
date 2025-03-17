import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { CartProvider } from "./components/CartContext";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const LandingPage = lazy(() => import("./components/Landing page/LandingPage"));
const Home = lazy(() => import("./components/Home/Home"));
const Shop = lazy(() => import("./components/Shop/Shop"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Payment = lazy(() => import("./components/Payment/Payment"));

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
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
              <Route
                path="/Payment"
                element={<Payment />}
              />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;

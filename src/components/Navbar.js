import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavLogo from "../Assets/images/Logo/gold logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="nav-bar">
      <div className="nav-bar_logo">
        <img
          src={NavLogo}
          alt="nav-logo"
        />
      </div>

      <nav className="nav-bar_menu">
        <div
          className="hamburger-icon"
          onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link
                to="/home"
                onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                onClick={toggleMenu}>
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

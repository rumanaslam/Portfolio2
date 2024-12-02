import React, { useState } from "react";
import { BsMenuAppFill } from "react-icons/bs";
import "../app/styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-brand">Ruman Aslam</div>

      {/* Desktop Menu */}
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-link">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Icon */}
      <BsMenuAppFill className="hamburger-icon" size={30} onClick={toggleMenu} />

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="menu-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

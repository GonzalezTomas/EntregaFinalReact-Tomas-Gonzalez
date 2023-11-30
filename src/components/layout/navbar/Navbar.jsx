// Navbar.jsx
import React, { useState } from "react";
import { CartWidget } from "../../common/CartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../../img/Logo.png";

export const Navbar = () => {
  const [showProductList, setShowProductList] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        {/* Botón de hamburguesa para dispositivos móviles */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>

        {/* Menú de categorías para dispositivos móviles */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/">Todos</Link>
            <Link to="/category/Bombones">Bombones</Link>
            <Link to="/category/Chocolates">Chocolates</Link>
            {/* Agrega más enlaces según tus categorías */}
          </div>
        )}

        {/* Menú de categorías para PC */}
        <div
          className="dropdown mobile-hidden"
          onMouseEnter={() => setShowProductList(true)}
          onMouseLeave={() => setShowProductList(false)}
        >
          <Link className="enlaces" to="/">
            Indumentaria
          </Link>
          {showProductList && (
            <div className="dropdown-content">
              <Link to="/">Todos</Link>
              <Link to="/category/Bombones">Bombones</Link>
              <Link to="/category/Chocolates">Chocolates</Link>
              {/* Agrega más enlaces según tus categorías */}
            </div>
          )}
        </div>

        <div
          className="dropdown mobile-hidden"
          onMouseEnter={() => setShowProductList(true)}
          onMouseLeave={() => setShowProductList(false)}
        >
          <Link className="enlaces" to="/">
            Decoraciones
          </Link>
          {showProductList && (
            <div className="dropdown-content">
              <Link to="/">Todos</Link>
              <Link to="/">Velas</Link>
              {/* Agrega más enlaces según tus categorías */}
            </div>
          )}
        </div>

        {/* Carrito solo para dispositivos de escritorio */}
        <CartWidget className="desktop-menu" />
      </div>
    </>
  );
};

import React, { useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Categories", href: "#categories" },
    { label: "About", href: "#why-us" },
    { label: "Contact", href: "#footer" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="header-logo" onClick={closeMenu}>
          <span className="logo-icon">🔧</span>
          <span className="logo-text">MyFundi</span>
        </a>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className="btn btn-outline"
              onClick={closeMenu}
              type="button"
            >
              Login
            </button>

            <button
              className="btn btn-primary"
              onClick={closeMenu}
              type="button"
            >
              Register
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          type="button"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
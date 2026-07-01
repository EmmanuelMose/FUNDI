import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "For technicians", href: "#technicians" },
  ];

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header-container">
        <a href="/" className="header-logo" onClick={closeMenu}>
          <img src={logo} alt="myFundi Hub Logo" className="logo-image" />
          <span className="logo-text">myFundi</span>
          <span className="logo-suffix">Hub</span>
        </a>

        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                    closeMenu();
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="tel:+254799160014" className="contact-phone">
              <span className="phone-icon">📞</span>
              +254 799 160 014
            </a>
            <button className="btn btn-outline" onClick={closeMenu} type="button">
              Log in
            </button>
            <button className="btn btn-primary" onClick={closeMenu} type="button">
              Get started
            </button>
          </div>
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          type="button"
        >
          {menuOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
        </button>
      </div>

      <div
        className={`mobile-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
    </header>
  );
};

export default Header;
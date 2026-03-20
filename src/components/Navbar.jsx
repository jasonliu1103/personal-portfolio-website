import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo_light from "../assets/logo-black.png";
import light_toggle from "../assets/night.png";

const Navbar = ({ theme, setTheme }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Experience", to: "/experience" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isRouteActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`Navbar ${isScrolled || menuOpen ? "blurred" : ""}`}>
      <div className="navbar-inner">
        <NavLink to="/" className="logo-link" onClick={closeMenu}>
          <img
            src={`${logo_light}`}
            alt=""
            className="logo"
          />
        </NavLink>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.to} className={isRouteActive(item.to) ? "active" : ""}>
              <NavLink to={item.to} onClick={closeMenu} end={item.to === "/"}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button
            type="button"
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="menu-button-bar" />
            <span className="menu-button-bar" />
            <span className="menu-button-bar" />
          </button>
          <img
            onClick={() => {
              toggle_mode();
            }}
            src={`${light_toggle}`}
            alt=""
            className="icon-toggle"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

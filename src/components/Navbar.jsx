import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo_light from "../assets/logo-black.png";
import light_toggle from "../assets/night.png";

const Navbar = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <div className={`Navbar ${isScrolled || menuOpen ? "blurred" : ""}`}>
      <div className="navbar-inner">
        <Link to="home" smooth={true} duration={500} className="logo-link" onClick={closeMenu}>
          <img
            src={`${logo_light}`}
            alt=""
            className="logo"
          />
        </Link>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="home" smooth={true} duration={500} offset={-180} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-180} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="experiences" smooth={true} duration={500} offset={-180} onClick={closeMenu}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-180} onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-180} onClick={closeMenu}>
              Contact
            </Link>
          </li>
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

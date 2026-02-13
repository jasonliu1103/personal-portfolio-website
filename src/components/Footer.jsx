import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section id="footer">
      <hr className="footer-line" />
      <p className="footer-text">2026 © Built and designed by Jason Liu.</p>
      <div className="footer-container">
        <a
          href="https://www.linkedin.com/in/jason-liu-422791237/"
          className="linkedin-btn-F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/jasonliu1103"
          className="github-btn-F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/jason._.liu__/"
          className="ig-btn-F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:jzliu@uwaterloo.ca"
          className="email-btn-F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail />
        </a>
      </div>
    </section>
  );
};

export default Footer;

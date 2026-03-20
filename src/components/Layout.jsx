import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

const Layout = ({ theme, setTheme }) => {
  return (
    <div className={`container ${theme}`}>
      <ScrollToTop />
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="page-shell">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

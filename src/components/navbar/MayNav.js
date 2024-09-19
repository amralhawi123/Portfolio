import React from "react";
import "./Maynav.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MayNav = () => {
  const location = useLocation();
  return (
    <div className="myNav">
      <Navbar expand="lg" data-bs-theme="dark">
        <Navbar.Brand href="/" className="fw-bold fs-5">
          elhawiCode
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto links">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              HOME
            </Link>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}>
              ABOUT
            </Link>
            <Link
              to="/portfolio"
              className={location.pathname === "/portfolio" ? "active" : ""}>
              PORTFOLIO
            </Link>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}>
              CONTACT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MayNav;

import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import CartSummary from "../CartSummary/CartSummary";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar
        color="dark"
        dark
        expand="md"
        className="d-flex align-items-center justify-content-space-evenly"
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavbarBrand>Clothes APP</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <CartSummary />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

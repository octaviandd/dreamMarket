/** @format */

import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse
} from "shards-react";

const NavBar = () => {
  const [dropDownOpen, isDropDownOpen] = useState(false);

  return (
    <Navbar type="dark" theme="dark" expand="md">
      <Link to="/">
        <NavbarBrand>Dreams Market</NavbarBrand>
      </Link>
      <NavbarToggler onClick={() => isDropDownOpen(!dropDownOpen)} />

      <Collapse open={dropDownOpen} navbar>
        <Nav navbar>
          <NavItem>
            <Link to="/dreams" className="links">
              Dreams
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/symbols" className="links">
              Symbols
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/stories" className="links">
              Stories
            </Link>
          </NavItem>
        </Nav>
        <Nav navbar className="ml-auto">
          <FontAwesomeIcon icon={faSearch} />
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;

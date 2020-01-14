// Importando o React
import React from "react";
import { Navbar, NavItem, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Row>
    <Navbar className="blue darken-2">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="contact">Contact</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;
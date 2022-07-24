import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import"./NavBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
  NavbarText
} from 'reactstrap';

export const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand className="title__home" href="/"> Fit Generation</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav
  fill
  pills
>
<NavItem>
    <NavLink href="/profile">
      My Profile
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="/register">
      Register
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="/login">
      Login
    </NavLink>
  </NavItem>
  <NavLink>
<Link className="navbar__link" to="" onClick={() => {
  localStorage.removeItem("fit_customer")
  navigate("/", { replace: true })
}}>Logout</Link>
</NavLink>
</Nav>
          <NavbarText className='welcome__home'>Welcome!</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}


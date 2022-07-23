import React, { useState } from 'react';
import"./NavBar.css";
import {
  Collapse,
  Input,
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
    <NavLink href="/register">
      Register
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="/login">
      Login
      <div>
      <div>
      <div>
  <Input
    bsSize="sm"
  />
</div>
</div>
</div>

    </NavLink>
  </NavItem>
</Nav>
          <NavbarText className='welcome__home'>Welcome!</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}


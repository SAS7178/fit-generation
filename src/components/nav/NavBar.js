import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import "./NavBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

export const NavBar = (args) => {
  // hamburger w initial state of closed
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const toggle = () => setIsOpen(!isOpen);
  
  //get fitCustomer from local set to var
  const localFitCustomer = localStorage.getItem("fit_customer")
  const fitCustomerObject = JSON.parse(localFitCustomer)
  // return one nav if customer true return other if false
            if(fitCustomerObject) {
          return (

            <div className='Header'>
              <Navbar {...args}>
                <NavbarBrand className="title__home" href="/">
                  <div className='welcome__header'>
                    <h1> Fit Generation </h1>
                    <img className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
                  </div></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  
                  <Nav fill pills>
                    <NavItem>
                      <NavLink href="/profile/:customerId">
                        My Profile
                      </NavLink>
                    </NavItem>
                    
                    <NavItem>
                      <NavLink href="" onClick={() => {
                        localStorage.removeItem("fit_customer")
                        navigate("/login", { replace: true })
                      }}>Logout
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <NavbarText className='welcome__home'>Welcome!</NavbarText>
                </Collapse>
              </Navbar>
              <section className='welcome__menu'>
                <b></b>
              </section>
            </div>
          )
        } else {
          return (

            <div className='Header'>
              <Navbar {...args}>
                <NavbarBrand className="title__home" href="/">
                  <div className='welcome__header'>
                    <h1> Fit Generation </h1>
                    <img className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
                  </div></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav fill pills>
                  <NavItem>
                      <NavLink href="/register">
                        Register
                      </NavLink>
                      <NavItem>
                      <NavLink href="/login">
                        Login
                      </NavLink>
                    </NavItem>
                    </NavItem>
                  </Nav>
                  <NavbarText className='welcome__home'>Welcome!</NavbarText>
                </Collapse>
              </Navbar>
              <section className='welcome__menu'>
                <b>Menu</b>
              </section>
            </div>
          )
    }}

 

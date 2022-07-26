import React, { useEffect, useState } from 'react';
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
import { ExerciseSearch } from '../search/ExerciseSearch';
import { ExerciseList } from '../search/ExerciseList';

export const NavBar = (args) => {
  const [searchTerms, setSearchTerms] = useState(null)
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate()
  const toggle = () => setIsOpen(!isOpen);

  useEffect(
    () => {
      if (searchTerms === "")
        setSearchTerms(null)
    },
    [searchTerms]
  )

  //get fitCustomer from local set to var
  const localFitCustomer = localStorage.getItem("fit_customer")
  const fitCustomerObject = JSON.parse(localFitCustomer)
  // return one nav if customer true return other if false
  if (fitCustomerObject) {
    return (
      <>
        <div className='Header'>
          <div id='headerLogout'>
                <NavLink href="" onClick={() => {
                  localStorage.removeItem("fit_customer")
                  navigate("/login", { replace: true })
                }}><b>Logout</b>
                </NavLink>               
                </div>
          <img alt="" className='nav__run' src="https://w7.pngwing.com/pngs/32/989/png-transparent-running-computer-icons-sport-jogging-text-hand-sport-thumbnail.png"></img>
          <div className='searching'>
            <ExerciseSearch setterFunction={setSearchTerms} />
            <ExerciseList searchTermState={searchTerms} />
          </div>
        </div>
        <Navbar {...args}>
          <NavbarBrand className="title__home" href="/">
            <div className='welcome__head'>
              <h1> <strong>Fit Generation</strong> </h1>
              <img alt="" className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="90"></img>
            </div>
            <div>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav fill pills>
              <NavItem>
                <NavLink href="/profile/:customerId">
                  <b>My Profile</b>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" onClick={() => {
                  localStorage.removeItem("fit_customer")
                  navigate("/login", { replace: true })
                }}><b>Logout</b>
                </NavLink>
              </NavItem>
              <div className="seperation"></div>
            </Nav>
            <NavbarText className='welcome__home'><strong>Welcome!</strong></NavbarText>
          </Collapse>
        </Navbar>
        <section className='welcome__menu'>
          <b></b>
        </section>
      </>
    )
  } else {
    return (
      <>
        <div className='Header'>
        </div>

        <Navbar {...args}>
          <NavbarBrand className="title__home" href="/">
            <div className='welcome__headernon'>
              <h1> Fit Generation </h1>
              <img alt='' className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
            </div>
          </NavbarBrand>
          <NavbarToggler className='hamburger' onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav fill pills >
              <NavItem className='nonMember'>
                <NavLink href="/register" className='nonMember'>
                  <b>Register</b>
                </NavLink>
                <NavItem className='nonMember'>
                <NavLink href="/login" className='nonMember'>
                  <b>Login</b>
                  </NavLink>
                </NavItem>
              </NavItem>
            </Nav>
            <NavbarText className='welcome__home'><strong>Welcome!</strong></NavbarText>
          </Collapse>
        </Navbar>
      </>
    )
  }
}



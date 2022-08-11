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
import { ExerciseSearch } from '../search/ExerciseSearch';
import { ExerciseList } from '../search/ExerciseList';

export const NavBar = (args) => {
  const [searchTerms, setSearchTerms] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const toggle = () => setIsOpen(!isOpen);


  //get fitCustomer from local set to var
  const localFitCustomer = localStorage.getItem("fit_customer")
  const fitCustomerObject = JSON.parse(localFitCustomer)
  // return one nav if customer true return other if false
  if (fitCustomerObject) {
    return (
      <>
      <div className='Header'>
      <div className='searching'>
      <ExerciseSearch setterFunction={setSearchTerms}/>
      <ExerciseList searchTermState={searchTerms} />
      </div>
      </div>
      
        <Navbar {...args}>
          <NavbarBrand className="title__home" href="/">

            <div className='welcome__header'>
              <h1> <strong>Fit Generation</strong> </h1> 
              <img alt="" className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="90"></img>
            </div>
            <img alt='' className='sit-logo' path='src/components/images/Fitlogo.jpeg'></img>
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
            
            <div className='welcome__header'>
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



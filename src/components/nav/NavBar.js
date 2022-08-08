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
  if (fitCustomerObject) {
    return (
      <>
      <div className='Header'>
      {/* <a href='https://twitter.com/'><img alt="" className="nav__logo" src="https://c8.alamy.com/comp/R80EAW/alien-space-ufo-spaceship-mars-glyph-icon-on-transparent-background-black-icon-R80EAW.jpg" width="30" height="30"></img></a> */}
      <a href='https://twitter.com/'><img alt="" className="nav__logo" src="http://powerpackedventures.in/wp-content/uploads/2022/05/Asset-1@4x.png" width="30" height="30"></img></a>
      <a href='https://www.snapchat.com/'><img alt="" className="nav__logo" src="https://assets.stickpng.com/thumbs/584c4c131fc21103bb375baa.png" width="25" height="25"></img></a>
      <a href='https://www.facebook.com/'><img alt="" className="fb__logo" src="https://i.pinimg.com/originals/79/ff/98/79ff98c829c7f91b891cfc9555ebade2.png" width="30" height="30"></img></a>
      <a href='https://www.instagram.com/'><img alt="" className="nav__logo" src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png" width="30" height="25"></img></a>
      </div>
        <Navbar {...args}>
          <NavbarBrand className="title__home" href="/">
            <div></div>
            <div className='welcome__header'>
              <h1> <strong>Fit Generation</strong> </h1>
              <img alt="" className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="90"></img>
            </div>
          </NavbarBrand>
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
      </>
    )
  } else {
    return (

      <div className='Header'>
        <Navbar {...args}>
          <NavbarBrand className="title__home" href="/">
            <div className='welcome__header'>
              <h1> Fit Generation </h1>
              <img alt='' className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
            </div></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>

            <Nav fill pills >
              <NavItem className='nonMember'>

                <NavLink href="/register" className='nonMember'>
                  Register
                </NavLink>

                <NavItem className='nonMember'>
                  <NavLink href="/login" className='nonMember'>
                    Login
                  </NavLink>
                </NavItem>

              </NavItem>
            </Nav>

            <NavbarText className='welcome__home'>Welcome!</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}



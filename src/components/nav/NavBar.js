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
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const toggle = () => setIsOpen(!isOpen);
  
  // const localFitCustomer = localStorage.getItem("fit_customer")
  // const fitCustomerObject = JSON.parse(localFitCustomer)
  
  // const handleDisplay = () => {
    
  //    fetch(`http://localhost:8088/customers`)
  //     .then(res => res.json())
  //     .then(foundCustomer => {
  //       if (foundCustomer.filter(fitCustomerObject.id === foundCustomer.id)) {
            
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
                      <NavLink href="/register">
                        Register
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/login">
                        Login
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="" onClick={() => {
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
                <b>Menu</b>
              </section>
            </div>
          //)
        // } else {
        //   return (

        //     <div className='Header'>
        //       <Navbar {...args}>
        //         <NavbarBrand className="title__home" href="/">
        //           <div className='welcome__header'>
        //             <h1> Fit Generation </h1>
        //             <img className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
        //     exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
        //     card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
        //           </div></NavbarBrand>
        //         <NavbarToggler onClick={toggle} />
        //         <Collapse isOpen={isOpen} navbar>
        //           <Nav fill pills>
        //           <NavItem>
        //               <NavLink href="/register">
        //                 Register
        //               </NavLink>
        //             </NavItem>
        //           </Nav>
        //           <NavbarText className='welcome__home'>Welcome!</NavbarText>
        //         </Collapse>
        //       </Navbar>
        //       <section className='welcome__menu'>
        //         <b>Menu</b>
        //       </section>
        //     </div>
        //   )
          

        // }
     // })
    )}
  // handleDisplay()
// }
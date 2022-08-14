import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = () => {
    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    })
    let navigate = useNavigate()

    const registerNewCustomer = () => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(createdCustomer => {
                if (createdCustomer.hasOwnProperty("id")) {
                    localStorage.setItem("fit_customer", JSON.stringify({
                        id: createdCustomer.id,
                        email: createdCustomer.email
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/customers?email=${customer.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewCustomer()
                }
            })
    }

    const updateCustomer = (evt) => {
        const copy = { ...customer }
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <nav>
                    <Link className="navbar__link" to="/">Home</Link>
                </nav>
                <div className="header__register">
                    <h1 >Fit Generation</h1>
                    <img alt="" className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
                </div>
                <h1 className="h3 mb-3 font-weight-normal">Register and get started!</h1>
                <fieldset>
                    <label htmlFor="name"> Name </label>
                    <input onChange={updateCustomer}
                        type="text" id="name" className="form-control"
                        placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateCustomer}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="phoneNumber"> Phone number </label>
                    <input onChange={updateCustomer}
                        type="phoneNumber" id="phoneNumber" className="form-control"
                        placeholder="Phone number" required />
                </fieldset>
                <fieldset>
                    <button onClick={(evt) => {
                        const copy = { ...customer }
                        copy.customer = evt.target.click
                        setCustomer(copy)
                        handleRegister(copy)
                    }} type="submit">
                        Submit!
                    </button>
                </fieldset>
            </form>
        </main>
    )
}


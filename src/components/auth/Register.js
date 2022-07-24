import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
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

                    navigate("/generateWorkout")
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
        const copy = {...customer}
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <nav>
                <Link className="navbar__link" to="/">Home</Link>
                </nav>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Fit Generation</h1>
                <fieldset>
                    <label htmlFor="name"> Name </label>
                    <input onChange={updateCustomer}
                           type="text" id="fullName" className="form-control"
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
                        const copy = {...customer}
                        copy.customer = evt.target.click
                        setCustomer(copy)
                    }} type="submit"> <nav>
                    <Link className="navbar__link" to="/generateWorkout">
                        Ready to Generate a Workout!
                        </Link>
                    </nav></button>   
                </fieldset>
            </form>
        </main>
    )
}


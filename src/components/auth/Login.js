import React, { useState } from "react"
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/customers?email=${email}`)
            .then(res => res.json())
            .then(foundCustomers => {
                if (foundCustomers.length === 1) {
                    const customer = foundCustomers[0]
                    localStorage.setItem("fit_customer", JSON.stringify({
                        id: customer.id,
                        email: customer.email
                    }))

                    navigate("/profile/:customerId")
                }
                else {
                    window.alert("Invalid login")
                }
            })
            
    }
    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                <Link className="navbar__home" to="/">Home</Link>
                    <div className="login__header">
                    <h1>Fit Generation</h1><img className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
                    </div>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <button type="submit">
                            <Link className="navbar__link" to="" onClick={() => {
  localStorage.getItem("fit_customer")
  navigate("/profile/:customerId")
}}>Login</Link>
                        </button>
                    <fieldset>
                       
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}


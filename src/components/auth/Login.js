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

                    navigate("/profile")
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
                <Link className="navbar__link" to="/">Home</Link>
                    <h1>Fit Generation</h1>
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
  navigate("/profile")
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


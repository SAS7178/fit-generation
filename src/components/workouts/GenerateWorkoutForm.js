import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { Button, Form, FormGroup, FormText, Input, Label, Navbar } from 'reactstrap';
import "./Workouts.css"

export const GenerateWorkoutForm = () => {
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

          navigate("/generateWorkout")
        }
        else {
          window.alert("Invalid login")
        }
      })
  }

  return (

    <Form>
      <div className='generator__nav'>
      <nav>
        <Link className="navbar__link" to="/">Home</Link>
      </nav>
      <nav>
        <Link className="navbar__link" to="/profile">Profile</Link>
      </nav>
      </div>
      <h1>Fit Generation</h1>
      <FormGroup tag="fieldset">
        <legend>
          Experience Level
        </legend>
        <FormGroup check>
          <Input
            name="radio1"
            type="radio"
          />
          {' '}
          <Label check>
            Beginner
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name="radio1"
            type="radio"
          />
          {' '}
          <Label check>
            Intermediate
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name="radio1"
            type="radio"
          />
          {' '}
          <Label check>
            Advanced
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup>
        <Label for="goal">
          Fitness Goal
        </Label>
        <Input
          id="goal"
          name="select"
          type="select"
        >
          <option>
            Strength Training
          </option>
          <option>
            Build Muscle/Burn Fat
          </option>
          <option>
            Strength/Mobility
          </option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">
          Weight
        </Label>
        <Input
          id="120"
          name="number"
          placeholder="Current weight"
          type="float"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">
          Muscle Group
        </Label>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
        >
          <option>
            Back/Biceps
          </option>
          <option>
            Chest/Triceps
          </option>
          <option>
            Legs/Shoulders
          </option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">
          File
        </Label>
        <Input
          id="exampleFile"
          name="file"
          type="file"
        />
        <FormText>
          Upload your Fit Generation profile img here
        </FormText>
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" />
        {' '}
        <Label check>
          Verify inputs
        </Label>
      </FormGroup>
      <Button>
        Generate Workout
      </Button>
    </Form>
  )
}

import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { Form, FormGroup, FormText, Input, Label } from 'reactstrap';
import "./Workouts.css"

// funct to take input form data and post to database in customerworkouts array
//then nav to exercise page on generate click
export const GenerateWorkoutForm = () => {
  const navigate = useNavigate()

  /*
       TODO: Add the correct default properties to the
       initial state object
   */
  const [customerWorkout, update] = useState({
    customerId: null,
    experienceId: "stretch",
    height: 0,
    weight: 0,
    goalId: null,
    muscleId: 0
  })

  //find current user Id and set value to variable
  const localFitCustomer = localStorage.getItem("fit_customer")
  const fitCustomerObject = JSON.parse(localFitCustomer)

  //function to handle the post for generate workout click
  const handleUpdateButtonClick = (event) => {
    event.preventDefault()
    console.log("You clicked the wrong button!")
    // TODO: Create the object to be saved to the API
    const workoutToSendToApi = {
      customerId: fitCustomerObject.id,//
      experienceId: customerWorkout.experienceId,//
      goalId: customerWorkout.goalId,
      muscleId: customerWorkout.muscleId,//
      dateCompleted: new Date//
    }
    return fetch(`http://localhost:8088/customerWorkouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(workoutToSendToApi)
    })
  }

  const handleGenerateButtonClick = () => {
      navigate(`/exercise/${fitCustomerObject.id}`)
  }
  // TODO: Perform the fetch() to POST the object to the API

  return (

    <Form>
      <div className='generator__nav'>
        <nav>
          <Link className="navbar__link" to="/">Home</Link>
        </nav>
        <nav>
          <Link className="navbar__link" to="/profile/:customerId">Profile</Link>
        </nav>
      </div>
      <div className='generate__header'>
      <h1>Fit Generation</h1>
      <img className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
      </div>
      <FormGroup tag="fieldset">
        <legend>
          Experience Level
        </legend>

        <FormGroup check>
          <Input check
            name="radio1"
            type="radio" />

          <Label check>
            Beginner
          </Label>
        </FormGroup>

        <FormGroup check>
          <Input check
            name="radio1"
            type="radio" />
          <Label check>
            Intermediate
          </Label>
        </FormGroup>

        <FormGroup check>
          <Input check
            name="radio1"
            type="radio" />

          {' '}
          <Label check>
            Advanced
          </Label>
        </FormGroup>
        <FormGroup>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Height</label>
              <input type="number"
                className="form-control"
                value={customerWorkout.height}
                onChange={
                  (evt) => {
                    const copy = { ...customerWorkout }
                    copy.height = parseFloat(evt.target.value, 2)
                    update(copy)
                  }
                } />
            </div>
          </fieldset>
        </FormGroup>
        <FormGroup check>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Weight</label>
              <input type="number"
                className="form-control"
                value={customerWorkout.weight}
                onChange={
                  (evt) => {

                    const copy = { ...customerWorkout }
                    copy.weight = parseInt(evt.target.value)
                    update(copy)

                  }
                } />
            </div>
          </fieldset>
        </FormGroup>
        <FormGroup check>
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
          onChange={
            (evt) => {
              const copy = { ...customerWorkout }
              copy.goalId = parseInt(evt.target.value)
              update(copy)
            }
          }>
          <option
            value={0}>
            select    </option>
          <option
            value={1}>
            Strength Training
          </option>
          <option
            value={2}>
            Build Muscle/Burn Fat
          </option>
          <option
            value={3}>
            Strength/Mobility
          </option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">
          Muscle Group
        </Label>
        <Input
          id="muscleGroup"
          name="select"
          type="select"
          onChange={
            (evt) => {
              const copy = { ...customerWorkout }
              copy.muscleId = parseInt(evt.target.value)
              update(copy)
            }
          }>
            <option>select</option>
          <option value={1}>
            Back/Biceps
          </option>
          <option value={2}>
            Chest/Triceps
          </option>
          <option value={3}>
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
      <button
        onClick={(clickEvent) => handleUpdateButtonClick(clickEvent)}
        className="btn btn-primary">
        update
      </button>
      <button
        onClick={(clickEvent) => handleGenerateButtonClick(clickEvent)}
        className="btn btn-primary">
        Generate Workout
      </button>
    </Form>
  )
}

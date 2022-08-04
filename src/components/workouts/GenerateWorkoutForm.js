import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { Form, FormGroup, FormText, Input, Label, Progress } from 'reactstrap';
import "./Workouts.css"

// funct to take input form data and post to database in customerworkouts array
//then nav to exercise page on generate click
export const GenerateWorkoutForm = () => {
  const navigate = useNavigate()
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
        <div className='experience'>
        <FormGroup>
          <Input
            name="radio1"
            type="radio" />
          <Label className='beginner'>
            Beginner
          </Label>
        </FormGroup>
        <FormGroup >
          <Input
            name="radio1"
            type="radio" />
          <Label className='intermediate'>
            Intermediate
          </Label>
        </FormGroup>
        <FormGroup>
          <Input
            name="radio1"
            type="radio" />
          {' '}
          <Label className='advanced'>
            Advanced
          </Label>
        </FormGroup>
        </div>

        <FormGroup>
          <fieldset>
            <div className="form-weight">
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
        <FormGroup>
          <fieldset>
            <div className="form-weight">
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
            <div className='art'>
                <img className='clipart' src="https://thumbs.dreamstime.com/b/detailed-illustration-
                silhouettes-strong-rolling-people-set-girl-man-sport-fitness-gym-body-
                building-workout-powerlifting-115536097.jpg" width="50%"></img>
              </div>
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
      <div>
                <Progress
                    className="my-3"
                    multi
                >
                    <Progress
                        animated
                        bar
                        color="warning"
                        value="20"
                    />
                    <Progress
                        animated
                        bar
                        color="warning"
                        value="20"
                    />
                    <Progress
                        animated
                        bar

                        value="20"
                    />
                    <Progress
                        animated
                        bar
                        color="danger"
                        value="20"
                    />
                    <Progress
                        animated
                        bar
                        color="success"
                        value="20"
                    />
                </Progress>
            </div>
      <button
        onClick={(clickEvent) => handleUpdateButtonClick(clickEvent)}
        className="btn btn-primary">
        Update
      </button>
      <button
        onClick={(evt) => handleGenerateButtonClick(evt)
        }
        className="btn btn-primary">
         Generate Workout
      </button>
    </Form>
  )
}

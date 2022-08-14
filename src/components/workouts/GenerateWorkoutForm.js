import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { Form, FormGroup, Input, Label, Progress } from 'reactstrap';
import { WelcomeFooter } from '../welcome/WelcomeFooter';
import "./Workouts.css"

// funct to take input form data and post to database in customerworkouts array
//then nav to exercise page on generate click
export const GenerateWorkoutForm = () => {
  const navigate = useNavigate()
  const [updateTest, setUpdateTest] = useState(false)
  //create state obj with initial state of customerWorkout obj
  const [customerWorkout, update] = useState({
    customerId: null,
    experienceId: "",
    height: null,
    weight: null,
    goalId: 0,
    muscleId: 0
  })

  //find current user Id and set value to variable
  const localFitCustomer = localStorage.getItem("fit_customer")
  const fitCustomerObject = JSON.parse(localFitCustomer)

  //function to handle the post for generate workout click
  const handleUpdateButtonClick = (event) => {
    event.preventDefault()
    setUpdateTest(true)

    // TODO: Create the object to be saved to the API
    const workoutToSendToApi = {
      customerId: fitCustomerObject.id,//
      experienceId: customerWorkout.experienceId,//
      goalId: customerWorkout.goalId,
      muscleId: customerWorkout.muscleId,//
      dateCompleted: new Date()//
    }
    return fetch(`http://localhost:8088/customerWorkouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(workoutToSendToApi)
    })
  }

  // funct to navigate on click of generateWorkout with customerid for useparam
  const handleGenerateButtonClick = () => {
    if (updateTest === true) {
      navigate(`/exercise/${fitCustomerObject.id}`)
    } else { window.alert("Update Inputs To Generate") }
  }
  return (

    <Form>
      <section className='gen-page'>
        <div className='generator__nav'>
          <nav>
            <Link className="navbar__link" to="/"><b>Home</b></Link>
          </nav>
          <nav>
            <Link className="navbar__link" to="/profile/:customerId"><b>Profile</b></Link>
          </nav>
        </div>
        <div className='generate__header'>
          <h1>Fit Generation</h1>
          <img alt='' className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
        </div>
        <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="100em"></img>
        <FormGroup tag="fieldset">
          <legend className='ExperienceTitle'>
            Experience Level
          </legend>
          <div className='experience'>
            <FormGroup>
              &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Input
              value={null}
                name="radio1"
                type="radio" />
              &nbsp;&nbsp;<Label className='beginner'>
                Beginner
              </Label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </FormGroup>
            <FormGroup >
              <Input
               value={null}
                name="radio1"
                type="radio" />
              &nbsp;<Label className='intermediate'>
                Intermediate
              </Label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </FormGroup>
            <FormGroup>
              <Input
               value={null}
                name="radio1"
                type="radio" />
              {' '}
              &nbsp;<Label className='advanced'>
                Advanced
              </Label>
            </FormGroup>
          </div>
          <FormGroup>
            <fieldset>
              <div className="form-height">
                <label htmlFor="number">Height</label>
                <input type="height"
                  className="form-controlGen"
                  value={customerWorkout.height}
                  onChange={
                    //take current obj value and update with user selected value
                    (evt) => {
                      const copy = { ...customerWorkout }
                      copy.height = parseFloat(evt.target.value)
                      update(copy)
                    }
                  } />
              </div>
            </fieldset>
          </FormGroup>
          <FormGroup>
            <fieldset>
              <div className="form-weight">
                <label htmlFor="number">Weight</label>
                <input type="weight"
                  className="form-controlGen"
                  value={customerWorkout.weight}
                  onChange={
                    //take current obj value and update with user selected value
                    (evt) => {
                      const copy = { ...customerWorkout }
                      copy.weight = parseInt(evt.target.value)
                      update(copy)
                    }
                  } />
              </div>
            </fieldset>
          </FormGroup>
          <br></br><br></br>
          <br></br><br></br>
          <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="100em"></img>
        </FormGroup>
        <div className='choices'>
          <FormGroup className='choice'>
            <Label for="goal">
              Fitness Goal
            </Label>
            <Input
              id="goal"
              name="select"
              type="select"
              onChange={
                //take current obj value and update with user selected value
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
          <FormGroup className='choice'>
            <Label for="exampleSelect">
              Muscle Group
            </Label>
            <Input
              id="muscleGroup"
              name="select"
              type="select"
              onChange={
                //take current obj value and update with user selected value
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
        </div>
        <div className='progress-bar'>
          <Progress
            className="my-3"
            multi
          >
            <Progress
              animated
              bar
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
              value="20"
            />
          </Progress>
        </div>
        <div className='gen-btns'>
          <button
            onClick={(clickEvent) => handleUpdateButtonClick(clickEvent)}
            className="btn-UpdateGen">
            Update
          </button>
          <button
            onClick={(evt) => handleGenerateButtonClick(evt)
            }
            className="btn-UpdateGen">
            Generate Workout
          </button>
        </div>
      </section>
      <WelcomeFooter />
    </Form>
  )

}

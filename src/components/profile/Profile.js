import { useEffect, useState } from "react"
import { Link, NavLink, useNavigate, useParams } from "react-router-dom"
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle, FormGroup, FormText, Input, Label, Spinner, UncontrolledCarousel } from "reactstrap"
import { ExerciseSearch } from "../search/ExerciseSearch"
import { WelcomeFooter } from "../welcome/WelcomeFooter"

import "./Profile.css"

export const Profile = () => {
  const [workoutExercises, setworkoutExercises] = useState([])
  const [filteredWorkouts, setFilteredWorkouts] = useState([])
  const [customer, setCustomers] = useState({})
  const { customerId } = useParams()
  const navigate = useNavigate()

  const localFitCustomer = localStorage.getItem("fit_customer")
  const fitCustomerObject = JSON.parse(localFitCustomer)

  // fetches and set all workouts for cust sets to var to make available for iteration globally
  useEffect(
    () => {
      fetch(`http://localhost:8088/workouts`)
        .then(response => response.json())
        .then((data) => {
          setworkoutExercises(data)
        })
    },
    [customerId] // When this array is empty, you are observing initial component state
  )
  useEffect(
    () => {
      fetch(`http://localhost:8088/customers?id=${fitCustomerObject.id}`)
        .then(response => response.json())
        .then((data) => {
          setCustomers(data[0])
        })
    },
    [fitCustomerObject.id] // When this array is empty, you are observing initial component state
  )

  //set customer workoutExercises to var dep on workoutexercises change 
  useEffect(
    () => {
      let filteredWorkouts = workoutExercises.filter(
        (workout) =>
          fitCustomerObject.id === workout.customerId)
      setFilteredWorkouts(filteredWorkouts)
    },
    [workoutExercises, fitCustomerObject.id] // When this array is empty, you are observing initial component state
  )
  //funt to reerender all workouts to be used where needed
  const getAllWorkouts = () => {
    fetch(`http://localhost:8088/workouts`)
      .then(response => response.json())
      .then((workoutArray) => {
        setworkoutExercises(workoutArray)
      })
  }
  //func to delete workout from database if has wworkoutid
  const deleteButton = (workoutId) => {
    fetch(`http://localhost:8088/workouts/${workoutId}`, {
      method: "DELETE"
    })
      .then(() => { getAllWorkouts() })

  }

  return (
    <body className="background">
      <div className="profile__nav">
        <Link className="navbar__home" to="/"><b>Home</b></Link>
        <Link className="navbar__generate" to="/generateWorkout"><b>Generation Form </b></Link>
      </div>
      <div className='welcome__header'>
        <h1> Fit Generation </h1>
        <img alt="" className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
      </div>
      <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="100em"></img>
      <div className="top-half">
        <section className="welcomebtn">
          <div className="welcome-msg" >
            &nbsp;&nbsp;&nbsp;&nbsp;<b>Welcome back,</b>
            <div className="customer-name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <b>{customer.name}</b></div><br></br><br></br><br></br><br></br><br></br>
          </div>
          <FormGroup className="fileLoad">
            <Label for="exampleFile">
            </Label>
            <Input
              id="exampleFile"
              name="file"
              type="file"
            />
            <NavLink className="InlineScan__link" to="/generateWorkout">Healthy Lifestyle</NavLink>
            <FormText >
              <b>Track your progress</b>
            </FormText>
          </FormGroup>
        </section>
        <img className="tracking" src="https://uk.inbody.com/wp-content/uploads/2018/09/23.png"></img>
      </div>

      <div className="card__Element">
      </div>

      <div className="max">

        <div className="edu-zone"><b> &nbsp;&nbsp;(Education Zone)&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Tools)</b>
        </div>

        <section className="understandMax">
          <div className="tableLine">
            <div className="edu">
              <Button outline onClick={() => { window.open(URL = "https://cdn.jwplayer.com/previews/tsMR14Nv") }}
                className="max-link">
                OneRep Max
              </Button>

              <Button outline onClick={() => { window.open(URL = "https://cdn.jwplayer.com/previews/tsMR14Nv") }}
                className="max-link">
                Underst
              </Button>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="tools">
              <Button outline onClick={() => { window.open(URL = "https://www.nasm.org/resources/one-rep-max-calculator") }}
                className="max-link">
                Max Calculator
              </Button>

              <Button outline onClick={() => { window.open(URL = "https://www.calculator.net/bmi-calculator.html") }}
                className="max-link">
                BMI Calculator
              </Button>
            </div>
          </div>
        </section>



        <h2 className="workout"><b>My Workout List</b></h2>
        <Button className="generateNew" onClick={() => { navigate("/GenerateWorkout") }}>
          <Spinner
            color="primary"
            size=""
          >
            Loading...
          </Spinner>&nbsp;&nbsp;&nbsp;
          <b>Generate New Workout </b>
        </Button>

        <UncontrolledCarousel className="carousel"
          items={[
            {
              altText: 'Slide 1',
              caption: 'Slide 1',
              key: 1,
              src: 'https://picsum.photos/id/123/1200/600'
            },
            {
              altText: 'Slide 2',
              caption: 'Slide 2',
              key: 2,
              src: 'https://picsum.photos/id/456/1200/600'
            },
            {
              altText: 'Slide 3',
              caption: 'Slide 3',
              key: 3,
              src: 'https://picsum.photos/id/678/1200/600'
            }
          ]}
        />
        <img alt="" src="https://www.pngall.com/wp-content/uploads/11/Horizontal-Line-PNG-Image.png" width="100%" height="100em"></img>
      </div>
      <section className="workout__list">
        <ul className="w__List">

          {filteredWorkouts.map(workout => <li className="w__Item" key={workout.id}>
            <h3 className="workout_name"><strong>{workout.workoutName}</strong></h3>&nbsp;<br />
            <i>Generated on Date:</i>&nbsp;{workout.dateCompleted}&nbsp;&nbsp;
            <div className="workout__btns">
              <Button outline onClick={() =>
                navigate(`/exerciseView/${workout.id}`)}
                className="save-primary" >
                View Workout
              </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
              <Button outline onClick={() => deleteButton(workout.id)}
                className="save-primary">
                Delete Workout
              </Button>
            </div>
          </li>)}

        </ul>
      </section>
      <WelcomeFooter />
    </body>
  )
}

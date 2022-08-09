import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle, UncontrolledCarousel } from "reactstrap"
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

      <div className="welcome-msg" >
        &nbsp;&nbsp;&nbsp;&nbsp;Welcome back,
        <div className="customer-name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>{customer.name}</b></div>
      </div>
      <br></br>
      <div className="card__Element">
        <Card inverse className="profile__card">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/900/270?grayscale"
            style={{
              height: 270
            }}
            width="100%"
          />
          <CardImgOverlay className="profile__card-text">
            <CardTitle tag="h5">
              {/* overlayTitle */}
            </CardTitle>
            <CardText>
            </CardText>
            <CardText>
              <small className="text-muted">
              </small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>
      <h2 className="workout"><b>My Workout List</b></h2>
      <div className="max">

        <b>Understanding</b><Button outline onClick={() => { window.open(URL= "https://cdn.jwplayer.com/previews/tsMR14Nv") }}
            className="max-link">
            Learn Here
          </Button>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button outline onClick={() => { window.open(URL= "https://www.nasm.org/resources/one-rep-max-calculator") }}
            className="max-link">
            Max Calculator
          </Button>
          <Button className="generateNew"  onClick={() => { navigate("/GenerateWorkout") }}>
            <b>Generation New </b>
            </Button>
          </div>
       
     
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

import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button, Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap"
import "./Profile.css"
export const Profile = () => {
  const [workoutExercises, setworkoutExercises] = useState([])
  const [filteredWorkouts, setFilteredWorkouts] = useState([])
  const { customerId } = useParams()
  const navigate = useNavigate()

  const localFitCustomer = localStorage.getItem("fit_customer")
  const fitCustomerObject = JSON.parse(localFitCustomer)

  // fetches and set all workoutExercises sets to var to make available for iteration globally
  useEffect(
    () => {
      fetch(`http://localhost:8088/workoutExercises`)
        .then(response => response.json())
        .then((data) => {
          setworkoutExercises(data)
        })
    },
    [customerId] // When this array is empty, you are observing initial component state
  )

  useEffect(
    () => {
      let filteredWorkouts = workoutExercises.filter(
        (workout) =>
          fitCustomerObject.id === workout.customerId)
      setFilteredWorkouts(filteredWorkouts)
    },
    [workoutExercises] // When this array is empty, you are observing initial component state
  )

  const getAllWorkouts = () => {
    fetch(`http://localhost:8088/workoutExercises`)
      .then(response => response.json())
      .then((workoutArray) => {
        setworkoutExercises(workoutArray)

      })
  }
  const deleteButton = (workoutId) => {

    fetch(`http://localhost:8088/workoutExercises/${workoutId}`, {
      method: "DELETE"
    })
      .then(() => { getAllWorkouts() })

  }
  return (
    <>
      <div className="profile__nav">
        <Link className="navbar__home" to="/">Home</Link>
        <Link className="navbar__generate" to="/generateWorkout">Generate New Workout</Link>
      </div>
      <div className='welcome__header'>
        <h1> Fit Generation </h1>
        <img className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
      </div>
      <div>Welcome to your profile!</div>
      <div>
        <Card inverse className="welcome__card">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/900/270?grayscale"
            style={{
              height: 270
            }}
            width="100%"
          />
          <CardImgOverlay className="profile__card">
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
      <h2 className="workout"><b>MyWorkouts</b></h2>
      <div className="workout__list">
        <ul>
          {filteredWorkouts.map(workout => <li className="w__e" key="{workoutId}">
            <strong>{workout.workoutName}</strong>&nbsp;<br />
            Born on:&nbsp;{workout.dateCompleted}&nbsp;&nbsp;
            <div className="workout__btns">

              <Button outline onClick={() =>
                navigate(`/exerciseView/${workout.id}`)}
                className="save-primary" >
                - View Workout -
              </Button>&nbsp;&nbsp;&nbsp;

              <Button outline onClick={() => deleteButton(workout.id)}
                className="save-primary">
                - Delete Workout -
              </Button>
            </div>
            <div>
            </div>
          </li>)}
        </ul>
      </div>

    </>
  )
}

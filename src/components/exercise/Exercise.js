import { useEffect, useState } from "react"
import { Link, NavLink, useParams } from "react-router-dom"
import { Button } from "reactstrap"
import "./Exercise.css"

export const Exercise = () => {
    const { customerId } = useParams()
    const [customerWorkouts, setWorkout] = useState([])
    const [exercises, setExercises] = useState([])
    const [filteredExercises, setFilteredExercises] = useState([])
    const [latestWorkout, setLatest] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/customerWorkouts?customerId=${customerId}`)
                .then(response => response.json())
                .then((data) => {
                    setWorkout(data)
                })
        },
        [customerId] // When this array is empty, you are observing initial component state
    )
    useEffect(
        () => {
            const workoutLength = customerWorkouts.length - 1
            setLatest(customerWorkouts[workoutLength])
        },
        [customerWorkouts] // When this array is empty, you are observing initial component state
    )
    useEffect(
        () => {
            let filteredExercises = exercises.filter(
                (exercise) =>
                    latestWorkout.goalId == exercise.goalId
                // && latestWorkout.muscleId == exercise.muscleId
            )
            setFilteredExercises(filteredExercises)

        },
        [latestWorkout] // When this array is empty, you are observing initial component state
    )


    useEffect(
        () => {
            fetch(`http://localhost:8088/exercises`)
                .then(response => response.json())
                .then((data) => {
                    setExercises(data)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

   

    return (
        <>
           <div className='generator__nav'>
        <nav>
          <Link className="navbar__link" to="/">Home</Link>
        </nav>
        <nav>
          <Link className="navbar__link" to="/profile">Profile</Link>
        </nav>
      </div>
      <div className='welcome__header'>
            <h1> Fit Generation </h1>
            <img className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
          </div>
            <h2 className="workout"><b>Workout</b></h2>
            <div className="workout__exercises">
                <ul>
                    {filteredExercises.map(exercise => <li className="w__e" key="{exerciseId}">
                        <strong>{exercise.name}</strong>&nbsp;<br />
                        sets:&nbsp;{exercise.sets}&nbsp;&nbsp;
                        reps:&nbsp;{exercise.reps}&nbsp;&nbsp;
                        rest time:&nbsp;{exercise.rest}<br />
                        <NavLink className="exercise__link" to={exercise.exampleVid}>Watch tutorial</NavLink>
                    </li>)}
                </ul>
            </div>
            <div>
                <Button
                    color="primary" 
                    outline
                >
                    Save to MyWorkouts List
                </Button>
                {' '}
                <Button outline>
                    Save to MyWorkouts List
                </Button>
                {' '}
            </div>
        </>
    )
}
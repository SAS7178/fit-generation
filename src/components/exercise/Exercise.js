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
            <h1>Fit Generator</h1>
            <h2>Workout</h2>
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
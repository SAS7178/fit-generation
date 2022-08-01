import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Button } from "reactstrap"
import "./Exercise.css"

export const ExerciseView = () => {
    const { workoutId } = useParams()
    const [workout, setWorkout] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/workoutExercises?id=${workoutId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleWorkout = data[0]
                    setWorkout(singleWorkout)
                })
        },
        [workoutId] // When this array is empty, you are observing initial component state
    )

    const thisWorkout = () => {
        return workout?.exercises?.map((exercise) => {
            return <ul>
                <li key="exercise--{exercise.id}">
                    <strong>{exercise.name}</strong>&nbsp;<br />
                    sets:&nbsp;{exercise.sets}&nbsp;&nbsp;
                    reps:&nbsp;{exercise.reps}&nbsp;&nbsp;
                    rest time:&nbsp;{exercise.rest}<br />
                    <a href={exercise.exampleVid}><Button className="exercise__link"
                    >Watch tutorial</Button></a>
                </li>
            </ul>
        }
        )
    }

    return (
        <>
            <div className='generator__nav'>
                <nav>
                    <Link className="navbar__link" to="/">Home</Link>
                </nav>
                <nav>
                    <Link className="navbar__link" to="/profile/:customerId">Profile</Link>
                </nav>
            </div>
            <div className='welcome__header'>
                <h1> Fit Generation </h1>
                <img className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
            </div>
            <>
                <h2 className="workout"><b>MyWorkout</b></h2>
                <div className="workout__exercises">
                    {thisWorkout()}
                </div></>
        </>
    )
}


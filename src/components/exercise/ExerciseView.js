import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Button } from "reactstrap"
import "./Exercise.css"

export const ExerciseView = () => {
    const { workoutId } = useParams()
    const [exercises, setExercises] = useState([])
    const [workoutExercises, setWorkoutExercises] = useState([])
    const workoutid = Number(workoutId)

    useEffect(
        () => {
            fetch(`http://localhost:8088/workoutExercises`)
                .then(response => response.json())
                .then((data) => {
                    setWorkoutExercises(data)
                    console.log(data)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )
    useEffect(
        () => {
            fetch(`http://localhost:8088/exercises`)
                .then(response => response.json())
                .then((data) => {
                    setExercises(data)
                    console.log(data)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

    //return array of filterd workout exercise objects 
    const filteredWorkoutExercises = () => {
        let filteredWExercises = [];
        return workoutExercises.map((workoutExercise) => {
            if (workoutid == workoutExercise?.workoutId) {
                filteredWExercises.push(workoutExercise)
            } return filteredWExercises
        })
    }
    const filteredWExercises = filteredWorkoutExercises()
    //if filterd exercise objects.exerciseId and exercises have same id list each exercises info to display
    const displayExercises = (filteredWExercises) => {
        for (const filteredWExercise of filteredWExercises) {
            for (const exercise of exercises) {
                if (filteredWExercise?.exerciseId === exercise?.id) {
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
            }
        }
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
                <img className='nav__image' alt="mehhh" src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
            </div>
            <>
                <h2 className="workout"><b>MyWorkout</b></h2>
                <div className="workout__exercises">
                    {displayExercises(filteredWExercises)}
                </div>
            </>
        </>
    )
}


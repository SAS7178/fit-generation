import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Button } from "reactstrap"
import "./Exercise.css"

export const ExerciseView = () => {
    const { workoutId } = useParams()
    const [exercises, setExercises] = useState([])
    const [workoutExercises, setWorkoutExercises] = useState([])
    const [currentWorkoutExercises, setCurrentWorkoutExercises] = useState([])
    const workoutid = Number(workoutId)

    useEffect(
        () => {
            fetch(`http://localhost:8088/workoutExercises`)
                .then(response => response.json())
                .then((data) => {
                    setWorkoutExercises(data)
                    // console.log(data)
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
                    // console.log(data)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )
    useEffect(
        () => {
            let filteredWExercises = []
            for (const workoutExercise of workoutExercises) {
                if (workoutExercise?.workoutId === workoutid) {
                    filteredWExercises.push(workoutExercise)

                }
            } return setCurrentWorkoutExercises(filteredWExercises)
        },
        [workoutExercises,workoutid] // When this array is empty, you are observing initial component state
    )

    const displayExercises = (filteredWExercises) => {
        return filteredWExercises.map((WExercise) => {
            return exercises.map((exercise) => {
                 if (exercise.id === WExercise.exerciseId) {
                    return <li className="workout__exercise" key="exercise--{exercise.id}">
                        <strong>{exercise.name}</strong><br/><br/>
                        sets:&nbsp;{exercise.sets}&nbsp;&nbsp;
                        reps:&nbsp;{exercise.reps}&nbsp;&nbsp;
                        rest time:&nbsp;{exercise.rest}<br />
                        <a href={exercise.exampleVid}><br/><br/>
                            <Button className="exercise__link">Watch tutorial</Button>
                        </a>
                    </li>
                }
            })
        })
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
                    {displayExercises(currentWorkoutExercises)}
                    
                </div>
            </>
        </>
    )
}


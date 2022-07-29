import { click } from "@testing-library/user-event/dist/click"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "reactstrap"

export const ExerciseView = () => {
   // const { customerId } = useParams()
    const [workoutExercises, setWorkoutExercises] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/workoutExercises`)
                .then(response => response.json())
                .then((data) => {
                    setWorkoutExercises(data)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )
    const customerExercise = (evt) => {
        workoutExercises.map(workoutExercise => {
            if(workoutExercise.id === evt.value) {
                {workoutExercises.map(exercise => <li className="w__e" key="{exerciseId}">
                <strong>{exercise.name}</strong>&nbsp;<br />
                sets:&nbsp;{exercise.sets}&nbsp;&nbsp;
                reps:&nbsp;{exercise.reps}&nbsp;&nbsp;
                rest time:&nbsp;{exercise.rest}<br />
                <button className="exercise__link"
                >Watch tutorial</button>
            </li>)}
            }
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
                <img className='nav__image' src="https://ae01.alicdn.com/kf/HTB1e2SGSbvpK1RjSZFqq6AXUVXax/Gym-fitness-
            exercise-metal-Cutting-Dies-Scrapbooking-craft-Dies-cuts-thin-paper-emboss-
            card-make-stencil.jpg_640x640.jpg" width="100" height="100"></img>
            </div>
            <h2 className="workout"><b>MyWorkout</b></h2>

            <div className="workout__exercises">
                <ul> 
               <customerExercise /> 
                </ul>
            </div>
        </>
    )
}

